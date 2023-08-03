import { forwardRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputOutline } from '@components/atoms/InputOutline';
import { InputBase } from '@components/atoms/InputBase';
import { Label } from '@components/atoms/Label';
import { InputMessage } from '@components/atoms/InputMessage';
import { InputField } from '@components/atoms/InputField';

export const TextArea = forwardRef(
  ({ label, className, message, value, onChange, ...props }, ref) => {
    const { error, disabled, id, name, max } = props;

    const [internalValue, setInternalValue] = useState(value || '');

    const handleChange = useCallback(
      (event) => {
        if (value === undefined) {
          setInternalValue(event.target.value);
        }

        onChange?.(event);
      },
      [value, onChange],
    );

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const count = internalValue?.length || 0;

    return (
      <InputField data-testid="input" className={className}>
        <Label error={error} disabled={disabled} htmlFor={id || name}>
          {label}
        </Label>
        <InputOutline error={error} disabled={disabled}>
          <InputBase
            ref={ref}
            {...props}
            as="textarea"
            value={internalValue}
            onChange={handleChange}
          />
        </InputOutline>
        {message && <InputMessage error={error}>{message}</InputMessage>}
        {max && (
          <InputMessage error={error}>
            {count}/{max}
          </InputMessage>
        )}
      </InputField>
    );
  },
);

TextArea.propTypes = {
  label: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  message: PropTypes.node,
  max: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  className: '',
  error: false,
  disabled: false,
  message: null,
  max: null,
  value: undefined,
  onChange: undefined,
};

export default TextArea;
