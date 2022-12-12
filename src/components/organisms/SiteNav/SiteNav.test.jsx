import { screen, render } from '@testing-library/react';
import { SiteNav } from './SiteNav';

describe('<SiteNav />', () => {
  it('should render the site nav', () => {
    expect.assertions(3);

    render(<SiteNav className="site-nav" />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveClass('site-nav');
    expect(screen.getByRole('link', { name: 'Events' })).toHaveAttribute('href', '/events');
  });
});
