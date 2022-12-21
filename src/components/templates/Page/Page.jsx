import PropTypes from 'prop-types';
import { SiteHeader } from '@components/organisms/SiteHeader';
import { SiteNav } from '@components/organisms/SiteNav';
import { SiteFooter } from '@components/organisms/SiteFooter';

export function Page({ children }) {
  return (
    <div>
      <SiteHeader />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
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
