import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Typography } from '@components/atoms/Typography';

export const Message = styled(Typography)`
  margin: 0;
  ${({ error }) => error && `color: var(--gt-color-status-error);`}
`;

export function InputMessage({ error, children, ...props }) {
  return (
    <Message error={error} variant="body2" {...props}>
      {children}
    </Message>
  );
}

InputMessage.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.node,
};

InputMessage.defaultProps = {
  error: false,
  children: null,
};

export default InputMessage;
