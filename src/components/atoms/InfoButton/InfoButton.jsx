import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: transparent solid thin;
  color: var(--gt-color-blue-300);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  aspect-ratio: 1/1;
  width: 2rem;
  height: 2rem;
  cursor: help;

  &:hover {
    color: var(--gt-color-blue-500);
    border-color: var(--gt-color-blue-200);
  }

  &:focus {
    outline: none;
  }

  &:active {
    color: var(--gt-color-blue-700);
    border-color: var(--gt-color-blue-700);
    background-color: var(--gt-color-blue-100);
  }
`;

export const InfoButton = forwardRef(({ label, ...props }, ref) => (
  <button css={buttonStyles} type="button" {...props} aria-label={label} title={label} ref={ref}>
    <FontAwesomeIcon icon={faInfoCircle} />
  </button>
));

InfoButton.propTypes = {
  label: PropTypes.string,
};

InfoButton.defaultProps = {
  label: 'More Info',
};

export default InfoButton;
