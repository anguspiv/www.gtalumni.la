import PropTypes from 'prop-types';
import { rem } from 'polished';
import { css } from '@emotion/react';

const buttonCSS = css`
  background-color: var(--gt-color-dark-gray);
  color: var(--gt-color-white);
  font-size: 1rem;
  font-weight: 500;
  padding: ${rem(8)} ${rem(12)};
  border-radius: ${rem(2)};
  border: none;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 20%);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

const primaryCSS = css`
  background-color: var(--gt-color-dark-gray);
  color: var(--gt-color-white);

  &:hover {
    background-color: var(--gt-color-medium-gray);
  }
`;

const secondaryCSS = css`
  border: 1px solid var(--gt-color-light-gray);
  background-color: var(--gt-color-white);
  color: var(--gt-color-text-primary);

  &:hover {
    color: var(--gt-color-text-secondary);
    border-color: var(--gt-color-medium-gray);
  }
`;

export function Button({ children, as, variant, ...props }) {
  const Component = as;

  let variantCSS = primaryCSS;

  switch (variant) {
    case 'primary':
      variantCSS = primaryCSS;
      break;
    case 'secondary':
      variantCSS = secondaryCSS;
      break;
    default:
      variantCSS = primaryCSS;
  }

  return (
    <Component
      css={css`
        ${buttonCSS}
        ${variantCSS}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}

Button.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  as: 'button',
  children: null,
  variant: 'primary',
};

export default Button;
