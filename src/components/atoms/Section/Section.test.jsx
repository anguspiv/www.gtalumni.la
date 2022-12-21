import { render, screen } from '@testing-library/react';
import { parseToRgb, rem } from 'polished';
import { Section } from './Section';

describe('<Section />', () => {
  it('should render', () => {
    expect.assertions(3);

    render(<Section>Foo</Section>);

    expect(screen.getByTestId('section')).toBeInTheDocument();
    expect(screen.getByText('Foo')).toHaveStyle(`max-width: ${rem(1440)}`);
    expect(screen.getByTestId('section')).toHaveStyle(`
      background-color: ${parseToRgb('#fff')};
      text-align: left;
    `);
  });

  it('should render with secondary background color', () => {
    expect.assertions(1);

    render(<Section background="secondary" />);

    expect(screen.getByTestId('section')).toHaveStyle(`
      background-color: ${parseToRgb('#f9f6e5')};
    `);
  });

  it('should render with alt background color', () => {
    expect.assertions(1);

    render(<Section background="alt" />);

    expect(screen.getByTestId('section')).toHaveStyle(`
      background-color: ${parseToRgb('#262626')};
    `);
  });

  it('should render with alt secondary background color', () => {
    expect.assertions(1);

    render(<Section background="alt-secondary" />);

    expect(screen.getByTestId('section')).toHaveStyle(`
      background-color: ${parseToRgb('#003057')};
    `);
  });

  it('should align the text', () => {
    expect.assertions(1);

    render(<Section align="center" />);

    expect(screen.getByTestId('section')).toHaveStyle(`
      text-align: center;
    `);
  });

  it('should have a maxWidth on the container', () => {
    expect.assertions(2);

    const { rerender } = render(<Section maxWidth="200px">Foo</Section>);

    expect(screen.getByText('Foo')).toHaveStyle(`
      max-width: 200px;
    `);

    rerender(<Section maxWidth={200}>Foo</Section>);

    expect(screen.getByText('Foo')).toHaveStyle(`
      max-width: ${rem(200)};
    `);
  });

  it('should render with a custom className', () => {
    expect.assertions(1);

    render(<Section className="foo" />);

    expect(screen.getByTestId('section')).toHaveClass('foo');
  });

  it('should render with a custom as prop', () => {
    expect.assertions(1);

    render(<Section as="footer" />);

    expect(screen.getByTestId('section').tagName).toBe('FOOTER');
  });
});
