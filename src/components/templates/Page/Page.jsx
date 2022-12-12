import PropTypes from 'prop-types';
import { SiteHeader } from '@components/organisms/SiteHeader';
import { SiteNav } from '@components/organisms/SiteNav';

export function Page({ children }) {
  return (
    <div>
      <SiteHeader />
      <SiteNav />
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
