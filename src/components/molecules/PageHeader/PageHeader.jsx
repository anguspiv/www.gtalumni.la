import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BreadCrumbs } from '@components/molecules/BreadCrumbs';
import { Typography } from '@components/atoms/Typography';

const Title = styled.h1`
  color: var(--gt-color-dark-gold);
  margin-bottom: 0;
`;

const Subtitle = styled(Typography)`
  color: var(--gt-color-navy);
  margin: 0rem auto 0.25rem;
  font-weight: 500;
`;

const Header = styled.header`
  margin-bottom: 1rem;
`;

export function PageHeader({ className, labels, location, title, subtitle }) {
  return (
    <Header data-testid="page-header" className={className}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {location && <BreadCrumbs labels={labels} location={location} />}
    </Header>
  );
}

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  location: BreadCrumbs.propTypes.location,
  labels: BreadCrumbs.propTypes.labels,
};

PageHeader.defaultProps = {
  className: '',
  subtitle: '',
  location: null,
  labels: null,
};

export default PageHeader;
