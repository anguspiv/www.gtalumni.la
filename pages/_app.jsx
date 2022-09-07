import PropTypes from 'prop-types';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { globalStyles } from '../styles';

const cache = createCache({ key: 'css', prepend: true });

function App({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
