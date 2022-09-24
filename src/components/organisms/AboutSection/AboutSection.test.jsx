import { render, screen } from '@testing-library/react';
import { AboutSection } from './AboutSection';

describe('<AboutSection />', () => {
  it('renders the about section', () => {
    expect.hasAssertions();

    render(<AboutSection />);

    expect(screen.getByRole('heading')).toHaveTextContent('About Us');
  });
});
