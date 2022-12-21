import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from '@components/atoms/NavLink';
import { Section } from '@components/atoms/Section';

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
    <Section
      maxWidth={600}
      css={css`
        padding: 0 0.5rem;
      `}
    >
      <Nav className={className}>
        <List>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </List>
      </Nav>
    </Section>
  );
}

SiteNav.propTypes = {
  className: PropTypes.string,
};

SiteNav.defaultProps = {
  className: '',
};

export default SiteNav;
