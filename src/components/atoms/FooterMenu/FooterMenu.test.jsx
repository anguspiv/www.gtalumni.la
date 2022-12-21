import { screen, render } from '@testing-library/react';
import { FooterMenu } from './FooterMenu';

describe('<FooterMenu />', () => {
  it('should render the footer menu', () => {
    expect.assertions(3);

    render(
      <FooterMenu title="test title" className="foo">
        <li>This is a child</li>
      </FooterMenu>,
    );

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('This is a child')).toBeInTheDocument();
    expect(screen.getByRole('list')).toHaveClass('foo');
  });
});
