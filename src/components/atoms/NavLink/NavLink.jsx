import PropTypes from 'prop-types';
import Link from 'next/link';
import { css } from '@emotion/react';

const styles = css`
  color: var(--gt-color-dark-gold);
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  font-size: 0.9rem;
  transition: var(--gt-transition-base);
  line-height: 1;
  padding: 0.5rem;
`;

export function NavLink({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <a
        {...props}
        // eslint-disable-next-line react/no-unknown-property
        css={styles}
      >
        {children}
      </a>
    </Link>
  );
}

NavLink.propTypes = {
  ...Link.propTypes,
  children: PropTypes.node,
};

NavLink.defaultProps = {
  ...Link.defaultProps,
  children: null,
};

export default NavLink;
