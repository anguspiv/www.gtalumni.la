import { render, screen } from '@testing-library/react';
import { SiteHeader } from './SiteHeader';

describe('<SiteHeader />', () => {
  it('should render the site header', () => {
    expect.assertions(2);

    render(<SiteHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByTestId('gt-banner')).toBeInTheDocument();
  });
});
