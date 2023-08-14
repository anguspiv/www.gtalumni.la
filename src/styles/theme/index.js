import { css } from '@emotion/react';
import { colors } from './colors';
import { fonts } from './fonts';
import { zIndex } from './zIndex';

export const animation = css`
  --gt-transition-duration-base: 0.2s;
  --gt-transition-timing-base: ease-in-out;
  --gt-transition-base: all 0.2s ease-in-out;
`;

export const theme = css`
  ${colors}
  ${fonts}
  ${animation}
  ${zIndex}
`;

export default theme;
