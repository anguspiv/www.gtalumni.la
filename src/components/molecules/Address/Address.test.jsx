import { render, screen } from '@testing-library/react';
import { getEncodedAddress } from '@utils/address';
import { Address } from './Address';

describe('<Address />', () => {
  it('should render a link to google maps', () => {
    expect.assertions(5);

    const name = 'My Address';
    const address = {
      street: '123 Fake St',
      street2: 'Apt 456',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };

    const className = 'my-address';

    render(<Address address={address} name={name} className={className} />);

    expect(screen.getByText(name)).toHaveAttribute(
      'href',
      `https://www.google.com/maps/place/${getEncodedAddress(address)}`,
    );
    expect(screen.getByText(address.street)).toBeInTheDocument();
    expect(screen.getByText(address.street2)).toBeInTheDocument();
    expect(
      screen.getByText(`${address.city}, ${address.state} ${address.zip}`),
    ).toBeInTheDocument();
    expect(screen.getByTestId('address')).toHaveClass(className);
  });

  it('should render a link to google maps without street2', () => {
    expect.assertions(3);

    const name = 'My Address';
    const address = {
      street: '123 Fake St',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };

    render(<Address address={address} name={name} />);

    expect(screen.getByText(name)).toHaveAttribute(
      'href',
      `https://www.google.com/maps/place/${getEncodedAddress(address)}`,
    );
    expect(screen.getByText(address.street)).toBeInTheDocument();
    expect(
      screen.getByText(`${address.city}, ${address.state} ${address.zip}`),
    ).toBeInTheDocument();
  });

  it('should link to a set href', () => {
    expect.assertions(1);

    const name = 'My Address';
    const address = {
      street: '123 Fake St',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };
    const href = 'https://www.gatech.edu';

    render(<Address address={address} name={name} href={href} />);

    expect(screen.getByText(name)).toHaveAttribute('href', href);
  });
});
