export const getEncodedAddress = (address) => {
  const { street, street2, city, state, zip } = address;
  let str = `${street}`;

  if (street2) {
    str = `${street} ${street2}`;
  }

  str = `${str}, ${city}, ${state} ${zip}`;

  return str.replaceAll(' ', '+');
};

export default {
  getEncodedAddress,
};
