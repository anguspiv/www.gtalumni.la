import styled from '@emotion/styled';
import { rem } from 'polished';
import { media } from '@styles/utils/breakpoints';

export const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${media.sm}: {
    max-wdith: ${rem(540)};
  }

  ${media.md}: {
    max-width: ${rem(720)};
  }

  ${media.lg}: {
    max-width: ${rem(960)};
  }

  ${media.xl}: {
    max-width: ${rem(1140)};
  }
`;

export default Container;
