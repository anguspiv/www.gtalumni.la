import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Typography } from '@components/atoms/Typography';

const StyledTypography = styled(Typography)`
  display: block;
  color: var(--gt-color-text-navy);
  font-size: 1.25rem;
  ${({ disabled }) => disabled && 'color: var(--gt-color-text-secondary);'}
  ${({ error }) => error && 'color: var(--gt-color-status-error);'}
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--gt-color-status-info);
  }

  &:focus-within {
    color: var(--gt-color-status-info);
  }

  &:active {
    color: var(--gt-color-status-info);
  }
`;

export function Label({ error, ...props }) {
  return <StyledTypography component="label" variant="button" {...props} />;
}

Label.propTypes = {
  error: PropTypes.bool,
};

Label.defaultProps = {
  error: false,
};

export default Label;
