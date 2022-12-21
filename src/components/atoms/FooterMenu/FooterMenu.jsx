import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const typeCss = css`
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: var(--gt-color-white);
  display: block;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0;
    padding: 0;
    a {
      ${typeCss}
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Title = styled.span`
  ${typeCss}
  font-weight: 700;
  color: var(--gt-color-gold);
  border-top: 1px solid var(--gt-color-gold);
`;

export function FooterMenu({ title, children, className }) {
  return (
    <List className={className}>
      {title && (
        <li>
          <Title>{title}</Title>
        </li>
      )}
      {children}
    </List>
  );
}

FooterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

FooterMenu.defaultProps = {
  children: null,
  className: '',
};

export default FooterMenu;
