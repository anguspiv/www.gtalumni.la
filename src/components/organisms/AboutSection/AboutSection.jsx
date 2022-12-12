import { css } from '@emotion/react';
import { Section } from '@components/atoms/Section';
import { Typography } from '@components/atoms/Typography';

export function AboutSection() {
  return (
    <Section maxWidth={600} align="center">
      <Typography variant="h2">About Us</Typography>
      <Typography variant="body1">
        We are a group of alumni and friends of Georgia Tech who live in the Los Angeles
        Metropolitan Area. We are here to help you connect with other alumni, students, and friends
        of Georgia Tech in the area, and not just for football games!
      </Typography>
      <Typography variant="body1">
        Due to how large the Los Angeles area is and the diversity of our GT community, we
        don&apos;t traditionally have assigned officers or set events. Instead, we rely on our
        members to help organize events and activities that they are interested in. We also have a{' '}
        <a href="https://www.facebook.com/groups/39515948772/">Facebook group</a> that is used to
        help coordinate events and activities.
      </Typography>
      <Typography>
        As the group grows and changes, we will update this page to reflect those changes. If you
        have any questions, please feel free to reach out in our{' '}
        <a href="https://www.facebook.com/groups/39515948772/">Facebook group</a> for now. We will
        be adding more channels of communication in the future to help us better coordinate and
        communicate with our members.
      </Typography>
      <Typography variant="body1">Go Jackets!</Typography>
      <Typography
        css={css`
          font-style: italic;
        `}
        variant="body2"
      >
        Pssst, right now this site is just one guy working on it in his spare time. So please be
        patient!
        <br />
        If you want to help out, please reach out here:{' '}
        <a href="https://github.com/anguspiv/www.gtalumni.la/discussions/62">Github Repository</a>!
      </Typography>
    </Section>
  );
}

export default AboutSection;
