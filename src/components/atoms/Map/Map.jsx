import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { getEncodedAddress } from '@utils/address';

const Wrapper = styled.div`
  width: 100%;
  min-height: 320px;
  position: relative;
  overflow: hidden;
  border-radius: ${rem(8)};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export function Map({ address, name, width, height, className }) {
  const encodedAddress = getEncodedAddress(address, name);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}&q=${encodedAddress}`;

  let mapWidth = width;
  let mapHeight = height;

  if (typeof width === 'number') {
    mapWidth = `${width}px`;
  }

  if (typeof height === 'number') {
    mapHeight = `${height}px`;
  }

  return (
    <Wrapper data-testid="map" className={className}>
      <IFrame
        title={`Map of ${name}`}
        src={mapUrl}
        width={mapWidth}
        height={mapHeight}
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      />
    </Wrapper>
  );
}

Map.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    street2: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

Map.defaultProps = {
  width: '100%',
  height: '100%',
  className: null,
};

export default Map;
