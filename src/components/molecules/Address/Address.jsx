import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from '@components/atoms/Link';
import { Typography } from '@components/atoms/Typography';
import { getEncodedAddress } from '@utils/address';

const StyledAddress = styled.address`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled(Typography)`
  margin: 0;
  line-height: 1.5;
`;

export function Address({ title, address, href, className }) {
  const url = href || `https://www.google.com/maps/place/${getEncodedAddress(address)}`;

  return (
    <StyledAddress className={className} data-testid="address">
      <Line variant="h5">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
      </Line>
      <Line variant="body1">{address.street}</Line>
      {address.street2 && <Line variant="body1">{address.street2}</Line>}
      <Line variant="body1">
        {address.city}, {address.state} {address.zip}
      </Line>
    </StyledAddress>
  );
}

Address.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    street2: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};

Address.defaultProps = {
  href: null,
  className: null,
};

export default Address;
