import { screen, render } from '@testing-library/react';
import { Map } from './Map';

describe('<Map />', () => {
  it('should render the map', () => {
    expect.assertions(2);

    const title = 'My Map';
    const address = {
      street: '123 Fake St',
      street2: 'Apt 456',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };
    const className = 'my-map';

    render(<Map title={title} address={address} width={100} height="75%" className={className} />);

    expect(screen.getByTitle(`Map of ${title}`)).toBeInTheDocument();
    expect(screen.getByTestId('map')).toHaveClass(className);
  });
});
