import PropTypes from 'prop-types';
import { rem } from 'polished';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: var(--gt-color-dark-gray);
  color: var(--gt-color-white);
  font-size: 1rem;
  font-weight: 500;
  padding: ${rem(8)} ${rem(12)};
  border-radius: ${rem(2)};
  border: none;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 20%);
  cursor: pointer;

  &:hover {
    background-color: var(--gt-color-medium-gray);
  }
`;

export function Button({ children, ...props }) {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
