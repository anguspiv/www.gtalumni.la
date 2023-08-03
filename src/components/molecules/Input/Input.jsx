import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { InputOutline } from '@components/atoms/InputOutline';
import { InputBase } from '@components/atoms/InputBase';
import { Label } from '@components/atoms/Label';
import { InputMessage } from '@components/atoms/InputMessage';
import { InputField } from '@components/atoms/InputField';

export const Input = forwardRef(({ label, className, message, ...props }, ref) => {
  const { error, disabled, id, name } = props;
  return (
    <InputField data-testid="input" className={className}>
      <Label error={error} disabled={disabled} htmlFor={id || name}>
        {label}
      </Label>
      <InputOutline error={error} disabled={disabled}>
        <InputBase ref={ref} {...props} />
      </InputOutline>
      {message && <InputMessage error={error}>{message}</InputMessage>}
    </InputField>
  );
});

Input.propTypes = {
  label: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
