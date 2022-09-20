import { render, screen } from '@testing-library/react';
import { SiteBanner } from './SiteBanner';

describe('<SiteBanner />', () => {
  it('should render the site banner', () => {
    expect.assertions(2);

    render(<SiteBanner />);

    expect(
      screen.getByAltText('Georgia Tech Alumni Association of Los Angeles'),
    ).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
