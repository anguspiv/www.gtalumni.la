import { screen, render } from '@testing-library/react';
import { SiteNav } from './SiteNav';

describe('<SiteNav />', () => {
  it('should render the site nav', () => {
    expect.assertions(5);

    render(<SiteNav className="site-nav" />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveClass('site-nav');
    expect(screen.getByRole('link', { name: 'Events' })).toHaveAttribute('href', '/events');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '/#contact');
  });
});
