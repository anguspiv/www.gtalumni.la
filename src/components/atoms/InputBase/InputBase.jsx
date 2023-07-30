import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import { css } from '@emotion/react';

const inputCSS = css`
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: ${rem(8)} ${rem(12)};
  width: 100%;
  transition: all 0.2s ease-in-out;
  line-height: 1.5;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--gt-color-light-gray);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
  }
`;

export const InputBase = forwardRef(({ as, ...props }, ref) => {
  const Component = as;

  return <Component css={inputCSS} ref={ref} {...props} />;
});

InputBase.propTypes = {
  as: PropTypes.elementType,
};

InputBase.defaultProps = {
  as: 'input',
};

export default InputBase;
