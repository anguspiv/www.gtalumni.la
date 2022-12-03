import { render, screen } from '@testing-library/react';
import { DirectionsLink } from './DirectionsLink';

describe('<DirectionsLink />', () => {
  it('should render a link to google maps', () => {
    expect.assertions(1);

    const address = {
      street: '123 Fake St',
      street2: 'Apt 456',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };

    render(<DirectionsLink address={address} />);

    expect(screen.getByText('Get Directions')).toBeInTheDocument();
  });
});
