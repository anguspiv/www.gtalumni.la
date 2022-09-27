import { css } from '@emotion/react';
import { rem } from 'polished';
import bgImg from '@public/img/banner-bg.jpg';
import { Container } from '@components/atoms/Container';
import { Logo } from '@components/atoms/Logo';
import { media } from '@styles/utils/breakpoints';

export function SiteBanner() {
  return (
    <div
      data-testid="gt-banner"
      css={css`
        background-position: center right;
        background-repeat: no-repeat;
        background-color: var(--gt-color-dark-gold);
        background-size: cover;

        ${media.md} {
          background-image: linear-gradient(
              to left,
              rgba(255, 255, 255, 0.52),
              var(--gt-color-dark-gold)
            ),
            url('${bgImg.src}');
        }
      `}
    >
      <Container
        css={css`
          text-align: center;

          ${media.md} {
            text-align: left;
          }
        `}
      >
        <div
          css={css`
            max-width: ${rem(530)};
          `}
        >
          <Logo />
        </div>
      </Container>
    </div>
  );
}

export default SiteBanner;
