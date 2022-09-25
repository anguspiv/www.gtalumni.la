import PropTypes from 'prop-types';
import createCache from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/react';
import Script from 'next/script';
import { Head } from '@components/organisms/Head';
import { globalStyles } from '@styles/index';
import { Page } from '@components/templates/Page';

const cache = createCache({ key: 'css', prepend: true });

function App({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Script
        id="gtag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="gtag-init">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `}
      </Script>
      <Head />
      <Global styles={globalStyles} />
      <Page>
        <Component {...pageProps} />
      </Page>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
