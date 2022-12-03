import PropTypes from 'prop-types';
import { rem } from 'polished';

export function Map({ address, title, width, height }) {
  const { street, street2, city, state, zip } = address;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}&q=${title}+${street}+${street2}+${city}+${state}+${zip}`;

  let mapWidth = width;
  let mapHeight = height;

  if (typeof width === 'number') {
    mapWidth = rem(width);
  }

  if (typeof height === 'number') {
    mapHeight = rem(height);
  }

  return (
    <div className="map">
      <iframe
        title={`Map of ${title}`}
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
    </div>
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
  title: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Map.defaultProps = {
  width: '100%',
  height: '100%',
};

export default Map;
