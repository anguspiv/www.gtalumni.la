import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { DirectionsLink } from '@components/atoms/DirectionsLink';
import { Address } from '@components/molecules/Address';
import { Map } from '@components/atoms/Map';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem(16)} 0;
  max-width: ${rem(900)};
  margin: 0 auto;
`;

const CardMap = styled(Map)`
  width: 100%;
  height: ${rem(400)};
  margin-bottom: ${rem(16)};
`;

const CardAddress = styled(Address)`
  margin-bottom: ${rem(8)};
`;

export function LocationCard({ name, address, href, className }) {
  return (
    <Card className={className} data-testid="location-card">
      <CardMap address={address} name={name} height={360} />
      <CardAddress name={name} address={address} href={href} />
      <DirectionsLink address={address} />
    </Card>
  );
}

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    street2: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};

LocationCard.defaultProps = {
  href: null,
  className: null,
};

export default LocationCard;
