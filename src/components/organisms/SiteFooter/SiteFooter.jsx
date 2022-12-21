import styled from '@emotion/styled';
import { media } from '@styles/utils/breakpoints';
import { Section } from '@components/atoms/Section';
import { FooterMenu } from '@components/atoms/FooterMenu';
import { Link } from '@components/atoms/Link';

const Menu = styled(FooterMenu)`
  margin-bottom: 1rem;
  max-width: 308px;
  ${media.sm} {
    flex: 1 0 280px;
    padding: 0 1rem;
  }

  ${media.md} {
    flex: 1 0 308px;
  }
`;

const year = new Date().getFullYear();

const Footer = styled(Section)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Copyright = styled.p`
  margin-bottom: 0;

  ${media.sm} {
    text-align: center;
  }
`;

const Menus = styled.div`
  ${media.sm} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export function SiteFooter() {
  return (
    <Footer background="alt" maxWidth={1200} as="footer">
      <Menus>
        <Menu title="Neighbor Alumni Associations">
          <li>
            <Link href="https://www.gtalumni.org/s/1481/alumni/19/interior.aspx?sid=1481&gid=21&pgid=923">
              Orange County
            </Link>
          </li>
          <li>
            <Link href="https://www.gtalumni.org/s/1481/alumni/19/interior.aspx?sid=1481&gid=21&pgid=925">
              San Diego
            </Link>
          </li>
        </Menu>
        <Menu title="Contact Us">
          <li>
            <Link href="mailto:hello@gtalumni.la">Email</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/groups/39515948772/">Facebook</Link>
          </li>
          <li>
            <Link href="https://github.com/anguspiv/www.gtalumni.la/discussions/">GitHub</Link>
          </li>
        </Menu>
      </Menus>
      <Copyright>&copy; {year} Georgia Tech Alumni Association of Los Angeles</Copyright>
    </Footer>
  );
}

export default SiteFooter;
