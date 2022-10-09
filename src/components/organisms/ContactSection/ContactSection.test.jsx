import { render, screen } from '@testing-library/react';
import { ContactSection } from './ContactSection';

describe('<ContactSection />', () => {
  it('should render the contact section', () => {
    expect.assertions(4);
    render(<ContactSection />);
    expect(screen.getByRole('heading')).toHaveTextContent('Contact Us');
    expect(
      screen.getByText(
        'Please feel free to reach out and connect with your fellow Georgia Tech alumni in the Los Angeles Area!',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Facebook Group' })).toHaveAttribute(
      'href',
      'https://www.facebook.com/groups/39515948772/',
    );
    expect(screen.getByRole('link', { name: 'hello@gtalumni.la' })).toHaveAttribute(
      'href',
      'mailto:hello@gtalumni.la',
    );
  });
});
