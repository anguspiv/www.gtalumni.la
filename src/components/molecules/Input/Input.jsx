import PropTypes from 'prop-types';
import { forwardRef } from 'react';
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
  grid-template-rows: auto auto auto;
  grid-template-areas: 'label info' 'input input' 'message message';
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

export const Input = forwardRef(({ label, className, message, popup, ...props }, ref) => {
  const { error, disabled, id, name } = props;
  const popupLabel = `More Info about ${label}`;

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
        <InputBase ref={ref} {...props} />
      </InputOutline>
      {message && (
        <InputMessage error={error} css={messageStyles}>
          {message}
        </InputMessage>
      )}
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
  popup: PropTypes.node,
};

Input.defaultProps = {
  className: '',
  error: false,
  disabled: false,
  message: null,
  popup: null,
};

export default Input;
