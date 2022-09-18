import PropTypes from 'prop-types';
import { SiteHeader } from '@components/organisms/SiteHeader';

export function Page({ children }) {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
