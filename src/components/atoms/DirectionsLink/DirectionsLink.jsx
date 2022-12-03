import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { Link } from '@components/atoms/Link';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const getEncodedAddress = ({ street, street2, city, state, zip }) => {
  let str = `${street},`;

  if (street2) {
    str = `${street},${street2},`;
  }

  str = `${str}${city},${state} ${zip}`;

  return encodeURIComponent(str);
};

const getDirectionsUrl = (address) => {
  const addressStr = getEncodedAddress(address);
  const url = `https://www.google.com/maps/dir//${addressStr}`;

  return url;
};

export function DirectionsLink({ address }) {
  const url = getDirectionsUrl(address);

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Icon icon={faRoute} />
      Get Directions
    </Link>
  );
}

DirectionsLink.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    street2: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired,
};

DirectionsLink.defaultProps = {};

export default DirectionsLink;
