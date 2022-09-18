import { render, screen } from '@testing-library/react';
import { SiteHeader } from './SiteHeader';

describe('<SiteHeader />', () => {
  it('should render the site header', () => {
    expect.assertions(1);

    render(<SiteHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
