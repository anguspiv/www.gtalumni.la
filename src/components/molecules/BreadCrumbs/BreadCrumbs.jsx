import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { rem } from 'polished';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const listCss = css`
  display: flex;
  align-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const listItemCss = css`
  margin: 0;
  font-size: ${rem('14px')};
  font-weight: 500;
`;

const crumbCss = css`
  color: var(--gt-color-dark-gray);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--gt-color-dark-gold);
  }
`;

const iconCss = css`
  margin: 0 0.25rem;
  color: var(--gt-color-gold);
`;

const toTitleCase = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export function BreadCrumbs({ labels, location, className }) {
  const { pathname } = location;
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav data-testid="breadcrumbs" className={className}>
      <ul css={listCss}>
        <li css={listItemCss}>
          <Link href="/" passHref>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a css={crumbCss} href="/">
              Home
            </a>
          </Link>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;

          if (isLast) {
            return null;
          }

          const label = labels[segment] || toTitleCase(segment);
          const path = `/${segments.slice(0, index + 1).join('/')}`;

          return (
            <li key={path} css={listItemCss}>
              <FontAwesomeIcon css={iconCss} icon={faChevronRight} />
              <Link href={path} passHref>
                <a css={crumbCss} href={path}>
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

BreadCrumbs.propTypes = {
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  labels: PropTypes.shape({}),
};

BreadCrumbs.defaultProps = {
  className: null,
  location: {
    pathname: '',
    search: '',
  },
  labels: {},
};

export default BreadCrumbs;
