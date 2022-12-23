export const getEncodedAddress = (address, name = '') => {
  const { street, street2, city, state, zip } = address;
  let str = `${street}`;

  if (street2) {
    str = `${street} ${street2}`;
  }

  str = `${str}, ${city}, ${state} ${zip}`;

  if (name) {
    str = `${name} ${str}`;
  }

  return str.replaceAll(' ', '+');
};

export const getLocationString = (title, address = {}) => {
  const { street, street2, city, state, zip } = address;

  let str = `${title} ${street}`;

  if (street2) {
    str = `${str} ${street2}`;
  }

  str = `${str}, ${city}, ${state} ${zip}`;

  return str;
};

export default {
  getEncodedAddress,
  getLocationString,
};
