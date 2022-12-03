import { screen, render } from '@testing-library/react';
import { getEncodedAddress } from '@utils/address';
import { LocationCard } from './LocationCard';

describe('<LocationCard />', () => {
  it('renders the card', () => {
    expect.assertions(6);

    const title = 'My Location';
    const address = {
      street: '1 North Ave NW',
      city: 'Atlanta',
      state: 'GA',
      zip: '30313',
    };
    const href = 'https://www.gatech.edu';
    const className = 'my-location';

    render(<LocationCard title={title} address={address} href={href} className={className} />);

    expect(screen.getByText(title)).toHaveAttribute('href', href);
    expect(screen.getByText(address.street)).toBeInTheDocument();
    expect(
      screen.getByText(`${address.city}, ${address.state} ${address.zip}`),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Get Directions' })).toHaveAttribute(
      'href',
      `https://www.google.com/maps/dir//${getEncodedAddress(address)}`,
    );
    expect(screen.getByTitle(`Map of ${title}`)).toBeInTheDocument();
    expect(screen.getByTestId('location-card')).toHaveClass(className);
  });
});
