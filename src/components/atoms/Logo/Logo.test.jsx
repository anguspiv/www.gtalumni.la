import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render the logo image', () => {
    expect.assertions(2);

    render(<Logo />);

    const img = screen.getByAltText('Georgia Tech Alumni Association of Los Angeles');

    expect(img).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
