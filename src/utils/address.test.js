import { getEncodedAddress } from './address';

describe('getEncodedAddress', () => {
  it('should return an encoded address', () => {
    expect.assertions(1);

    const address = {
      street: '123 Fake St',
      street2: 'Apt 456',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };

    const expected = '123+Fake+St+Apt+456,+Springfield,+OR+12345';

    expect(getEncodedAddress(address)).toBe(expected);
  });
});
