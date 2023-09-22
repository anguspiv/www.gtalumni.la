import { render, screen } from '@testing-library/react';
import { DISCORD_INVITE_LINK, FACEBOOK_GROUP_LINK } from '@constants/social';
import { ContactSection } from './ContactSection';

describe('<ContactSection />', () => {
  it('should render the contact section', () => {
    expect.assertions(5);
    render(<ContactSection />);
    expect(screen.getByRole('heading')).toHaveTextContent('Contact Us');
    expect(
      screen.getByText(
        'Please feel free to reach out and connect with your fellow Georgia Tech alumni in the Los Angeles Area!',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Facebook Group' })).toHaveAttribute(
      'href',
      FACEBOOK_GROUP_LINK,
    );
    expect(screen.getByRole('link', { name: 'Discord Server' })).toHaveAttribute(
      'href',
      DISCORD_INVITE_LINK,
    );
    expect(screen.getByRole('link', { name: 'hello@gtalumni.la' })).toHaveAttribute(
      'href',
      'mailto:hello@gtalumni.la',
    );
  });
});
