import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Section } from '@components/atoms/Section';
import { Typography } from '@components/atoms/Typography';

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  text-align: left;
  width: auto;
  display: inline-flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ContactItem = styled.li`
  margin-bottom: 0.5rem;
  width: auto;
  display: inline-block;
`;

const ContactLink = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  width: auto;
  color: var(--gt-color-text-alt-link);

  &:visited {
    color: var(--gt-color-text-alt-link-visited);
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  color: var(--gt-color-text-alt-secondary);
  margin-right: 0.5rem;
  font-size: 1.5em;
`;

export function ContactSection() {
  return (
    <Section align="center" background="alt-secondary" maxWidth={600} id="contact">
      <Typography variant="h2">Contact Us</Typography>

      <Typography variant="body1">
        Please feel free to reach out and connect with your fellow Georgia Tech alumni in the Los
        Angeles Area!
      </Typography>

      <div>
        <ContactList>
          <ContactItem>
            <ContactLink
              href="https://www.facebook.com/groups/39515948772/"
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon icon={faFacebook} />
              Facebook Group
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink href="mailto:hello@gtalumni.la">
              <ContactIcon icon={faEnvelope} />
              hello@gtalumni.la
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink
              href="https://github.com/anguspiv/www.gtalumni.la/discussions/"
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon icon={faGithub} />
              GitHub Discussions
            </ContactLink>
          </ContactItem>
        </ContactList>
      </div>
    </Section>
  );
}

export default ContactSection;
