import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SiteHeader } from '@components/organisms/SiteHeader';
import { SiteNav } from '@components/organisms/SiteNav';
import { SiteFooter } from '@components/organisms/SiteFooter';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas: 'header' 'nav' 'main' 'footer';
  grid-gap: 0rem;
  align-items: stretch;
  align-content: stretch;
  justify-content: stretch;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const Header = styled(SiteHeader)`
  grid-area: header;
`;

const Nav = styled(SiteNav)`
  grid-area: nav;
`;

const Main = styled.main`
  grid-area: main;
`;

const Footer = styled(SiteFooter)`
  grid-area: footer;
`;

export function Page({ children }) {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
