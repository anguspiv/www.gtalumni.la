import { forwardRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { InputOutline } from '@components/atoms/InputOutline';
import { InputBase } from '@components/atoms/InputBase';
import { Label } from '@components/atoms/Label';
import { InputMessage } from '@components/atoms/InputMessage';
import { InputField } from '@components/atoms/InputField';
import { InfoPopup } from '@components/molecules/InfoPopup';
import { Typography } from '@components/atoms/Typography';

const fieldStyles = css`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas: 'label info' 'input input' 'max max' 'message message';
  grid-gap: 0;
  justify-items: start;
  align-items: start;
`;

const labelStyles = css`
  grid-area: label;
`;

const infoStyles = css`
  grid-area: info;
`;

const inputStyles = css`
  grid-area: input;
`;

const messageStyles = css`
  grid-area: message;
`;

const maxStyles = css`
  grid-area: max;
`;

export const TextArea = forwardRef(
  ({ label, className, message, value, onChange, popup, ...props }, ref) => {
    const { error, disabled, id, name, max } = props;
    const popupLabel = `More Info about ${label}`;

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
      <InputField data-testid="input" className={className} css={fieldStyles}>
        <Label error={error} disabled={disabled} htmlFor={id || name} css={labelStyles}>
          {label}
        </Label>
        {popup && (
          <InfoPopup label={popupLabel} css={infoStyles}>
            <Typography
              variant="h6"
              color="textSecondary"
              css={css`
                margin-top: 0;
              `}
            >
              {popupLabel}
            </Typography>
            {popup}
          </InfoPopup>
        )}
        <InputOutline error={error} disabled={disabled} css={inputStyles}>
          <InputBase
            ref={ref}
            {...props}
            as="textarea"
            value={internalValue}
            onChange={handleChange}
          />
        </InputOutline>
        {message && (
          <InputMessage error={error} css={maxStyles}>
            {message}
          </InputMessage>
        )}
        {max && (
          <InputMessage error={error} css={messageStyles}>
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
  popup: PropTypes.node,
};

TextArea.defaultProps = {
  className: '',
  error: false,
  disabled: false,
  message: null,
  max: null,
  value: undefined,
  onChange: undefined,
  popup: null,
};

export default TextArea;
