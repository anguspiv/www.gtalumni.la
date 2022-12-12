import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from '@components/atoms/NavLink';
import { Container } from '@components/atoms/Container';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0;
  background: var(--gt-color-white);
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    display: block;
    margin: 0;
    padding: 0;

    & + li::before {
      content: '|';
    }
  }
`;

const Link = styled(NavLink)``;

export function SiteNav({ className }) {
  return (
    <Container
      css={css`
        padding: 0 0.5rem;
        max-width: 800px;
      `}
    >
      <Nav className={className}>
        <List>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </List>
      </Nav>
    </Container>
  );
}

SiteNav.propTypes = {
  className: PropTypes.string,
};

SiteNav.defaultProps = {
  className: '',
};

export default SiteNav;
