import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BreadCrumbs } from '@components/molecules/BreadCrumbs';

const Title = styled.h1`
  color: var(--gt-color-dark-gold);
`;

const Header = styled.header`
  margin-bottom: 1rem;
`;

export function PageHeader({ className, labels, location, title }) {
  return (
    <Header data-testid="page-header" className={className}>
      <Title>{title}</Title>
      {location && <BreadCrumbs labels={labels} location={location} />}
    </Header>
  );
}

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: BreadCrumbs.propTypes.location,
  labels: BreadCrumbs.propTypes.labels,
};

PageHeader.defaultProps = {
  className: '',
  location: null,
  labels: null,
};

export default PageHeader;
