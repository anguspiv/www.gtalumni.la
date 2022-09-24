import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('<Typography />', () => {
  it('should render text', () => {
    expect.assertions(2);
    render(<Typography>Sample text</Typography>);

    expect(screen.getByText('Sample text')).toBeInTheDocument();
    expect(screen.getByText('Sample text').nodeName).toBe('P');
  });

  it('should render a header', () => {
    expect.assertions(3);

    render(<Typography variant="h1">Sample Header</Typography>);

    const header = screen.getByText('Sample Header');

    expect(header).toBeInTheDocument();
    expect(header.nodeName).toBe('H1');
    expect(header).toHaveStyle(`
      font-family: var(--gt-font-family-title);
      font-size: 2.5rem;
      color: var(--gt-color-text-alt-title);
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 0.5rem;
    `);
  });

  it.each([
    ['h1', 'H1'],
    ['h2', 'H2'],
    ['h3', 'H3'],
    ['h4', 'H4'],
    ['h5', 'H5'],
    ['h6', 'H6'],
    ['subtitle1', 'P'],
    ['subtitle2', 'P'],
    ['body1', 'P'],
    ['body2', 'P'],
    ['button', 'SPAN'],
  ])('render %s variant with %s tag', (variant, nodeName) => {
    expect.assertions(2);

    render(<Typography variant={variant}>Sample Text</Typography>);

    const element = screen.getByText('Sample Text');

    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe(nodeName);
  });

  it.each([
    ['h1', 'span', 'SPAN'],
    ['n/a', 'div', 'DIV'],
  ])('should render variant %s with %s element', (variant, component, nodeName) => {
    expect.assertions(2);

    render(
      <Typography variant={variant} component={component}>
        Sample Text
      </Typography>,
    );

    const header = screen.getByText('Sample Text');

    expect(header).toBeInTheDocument();
    expect(header.nodeName).toBe(nodeName);
  });

  it('should render with a React Component', () => {
    expect.assertions(2);

    // eslint-disable-next-line react/prop-types
    function Foo({ children, ...props }) {
      return (
        <button {...props} type="button">
          <span>{children}</span>
        </button>
      );
    }

    // eslint-disable-next-line react/jsx-no-bind
    render(<Typography component={Foo}>Sample Text</Typography>);

    expect(screen.getByText('Sample Text')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with additional classNames', () => {
    expect.assertions(1);

    render(<Typography className="foo">Sample Text</Typography>);

    expect(screen.getByText('Sample Text')).toHaveClass('foo');
  });
});
