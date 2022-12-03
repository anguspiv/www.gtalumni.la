import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { Link } from '@components/atoms/Link';
import { getEncodedAddress } from '@utils/address';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const getDirectionsUrl = (address) => {
  const addressStr = getEncodedAddress(address);
  const url = `https://www.google.com/maps/dir//${addressStr}`;

  return url;
};

export function DirectionsLink({ address, className }) {
  const url = getDirectionsUrl(address);

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className={className}>
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
  className: PropTypes.string,
};

DirectionsLink.defaultProps = {
  className: null,
};

export default DirectionsLink;
