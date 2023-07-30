import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { InputOutline } from '@components/atoms/InputOutline';
import { InputBase } from '@components/atoms/InputBase';
import { Label } from '@components/atoms/Label';
import { Typography } from '@components/atoms/Typography';

const Message = styled(Typography)`
  margin: 0;
  ${({ error }) => error && `color: var(--gt-color-status-error);`}
`;

export const Input = forwardRef(({ label, className, message, ...props }, ref) => {
  const { error, disabled, id } = props;
  return (
    <div data-testid="input" className={className}>
      <Label error={error} disabled={disabled} htmlFor={id}>
        {label}
      </Label>
      <InputOutline error={error} disabled={disabled}>
        <InputBase ref={ref} {...props} />
      </InputOutline>
      {message && (
        <Message error={error} variant="body2">
          {message}
        </Message>
      )}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  message: PropTypes.node,
};

Input.defaultProps = {
  className: '',
  error: false,
  disabled: false,
  message: null,
};

export default Input;
