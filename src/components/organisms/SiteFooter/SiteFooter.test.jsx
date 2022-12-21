import { screen, render } from '@testing-library/react';
import { SiteFooter } from './SiteFooter';

describe('<SiteFooter />', () => {
  it('should render the site footer', () => {
    expect.assertions(8);

    const year = new Date().getFullYear();

    render(<SiteFooter />);

    expect(
      screen.getByText(`© ${year} Georgia Tech Alumni Association of Los Angeles`),
    ).toBeInTheDocument();
    expect(screen.getByText('Neighbor Alumni Associations')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Orange County' })).toHaveAttribute(
      'href',
      'https://www.gtalumni.org/s/1481/alumni/19/interior.aspx?sid=1481&gid=21&pgid=923',
    );
    expect(screen.getByRole('link', { name: 'San Diego' })).toHaveAttribute(
      'href',
      'https://www.gtalumni.org/s/1481/alumni/19/interior.aspx?sid=1481&gid=21&pgid=925',
    );
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:hello@gtalumni.la',
    );
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://www.facebook.com/groups/39515948772/',
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/anguspiv/www.gtalumni.la/discussions/',
    );
  });
});
