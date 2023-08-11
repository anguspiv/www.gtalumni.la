import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const surfaceCSS = css`
  background-color: var(--gt-color-background-primary);
  color: var(--gt-color-text-primary);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
  border: 1px solid var(--gt-color-light-gray);
`;

export function Surface({ as, ...props }) {
  const Component = as;

  return <Component data-testid="surface" css={surfaceCSS} {...props} />;
}

Surface.propTypes = {
  as: PropTypes.elementType,
};

Surface.defaultProps = {
  as: 'div',
};

export default Surface;
