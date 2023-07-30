import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { Global } from '@emotion/react';
import { globalStyles } from '@styles/global';

function AllTheProviders({ children }) {
  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  );
}

AllTheProviders.propTypes = {
  children: PropTypes.node,
};

AllTheProviders.defaultProps = {
  children: null,
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
