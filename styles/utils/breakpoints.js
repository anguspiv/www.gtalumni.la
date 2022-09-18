import { rem } from 'polished';

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const media = Object.entries(breakpoints).reduce((mq, [key, value]) => {
  const mediaQueries = { ...mq };

  mediaQueries[key] = `@media (min-width: ${rem(value)})`;

  return mediaQueries;
}, {});

export default {
  breakpoints,
  media,
};
