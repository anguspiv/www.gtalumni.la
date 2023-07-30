import PropTypes from 'prop-types';
import { rem } from 'polished';
import { css } from '@emotion/react';

const inputOutlineCSS = css`
  color: var(--gt-color-text-primary);
  display: flex;
  align-items: center;
  align-content: stretch;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  padding: 0;
  border: thin solid var(--gt-color-navy);
  border-radius: 0.25rem;
  background-color: var(--gt-color-white);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: text;
  min-height: ${rem(40)};

  &:focus-within {
    border-color: var(--gt-color-status-info);
    box-shadow: 0px 0px 1px 1px var(--gt-color-status-info);
  }
`;

const inputOutlineErrorCSS = css`
  border-color: var(--gt-color-status-error);
`;

const inputOutlineDisabledCSS = css`
  color: var(--gt-color-text-secondary);
  border-color: var(--gt-color-medium-gray);
  background-color: var(--gt-color-light-gray);
`;

export function InputOutline({ children, error, disabled, ...props }) {
  return (
    <div
      css={css`
        ${inputOutlineCSS}
        ${disabled && inputOutlineDisabledCSS}
        ${error && inputOutlineErrorCSS}
      `}
      data-testid="input-outline"
      {...props}
    >
      {children}
    </div>
  );
}

InputOutline.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

InputOutline.defaultProps = {
  children: null,
  disabled: false,
  error: false,
};

export default InputOutline;
