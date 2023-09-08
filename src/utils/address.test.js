import { getEncodedAddress, getLocationString } from './address';

describe('getEncodedAddress', () => {
  it('should return an encoded address', () => {
    expect.assertions(2);

    const address = {
      street: '123 Fake St',
      street2: 'Apt 456',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };

    const expected = '123+Fake+St+Apt+456,+Springfield,+OR+12345';

    expect(getEncodedAddress(address)).toBe(expected);

    const title = 'My Event';

    const expectedWithTitle = 'My+Event+123+Fake+St+Apt+456,+Springfield,+OR+12345';

    expect(getEncodedAddress(address, title)).toBe(expectedWithTitle);
  });
});

describe('getLocationString', () => {
  it('should return a location string', () => {
    expect.assertions(1);

    const title = 'My Event';

    const address = {
      street: '123 Fake St',
      street2: 'Apt 456',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };

    const expected = 'My Event 123 Fake St Apt 456, Springfield, OR 12345';

    expect(getLocationString(title, address)).toBe(expected);
  });

  it('should return a location string without a title', () => {
    expect.assertions(1);

    const address = {
      street: '123 Fake St',
      street2: 'Apt 456',
      city: 'Springfield',
      state: 'OR',
      zip: '12345',
    };

    const expected = '123 Fake St Apt 456, Springfield, OR 12345';

    expect(getLocationString(null, address)).toBe(expected);
  });

  it('should return a location string without an address', () => {
    expect.assertions(1);

    const title = 'My Event';

    const expected = 'My Event';

    expect(getLocationString(title)).toBe(expected);
  });

  it('should return a location string without a title or address', () => {
    expect.assertions(1);

    const expected = '';

    expect(getLocationString()).toBe(expected);
  });
});
