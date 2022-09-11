import { css } from '@emotion/react';

const colorValues = {
  gold: '#b3a369',
  mediumGold: '#a4925a', // Tech Medium Gold
  darkGold: '#857437', // Tech Dark Gold
  white: '#ffffff',
  diploma: '#f9f6e5', // Diplloma
  lightGray: '#d6dbd4', // Pi Mile
  mediumGray: '#54585a', // Gray Matter
  darkGray: '#3b3b3b',
  lightBlack: '#262626',
  black: '#000000',
  green: '#00ec9c', // Bright Canopy
  brightBlue: '#00ffff', // Bright Electric
  blue: '#2961ff', // Bright Blue
  navy: '#003057', // Navy Blue
  red: '#ff640f', // Bright Horizon
  purple: '#7800ff', // Bright Purple
  lightYellow: '#ffcc00', // Bright Buzz
  yellow: '#eeb211', // Buzz Gold
};

export const brand = css`
  --gt-color-gold: #b3a369;
  --gt-color-medium-gold: #a4925a;
  --gt-color-dark-gold: #857437;
  --gt-color-white: #ffffff;
  --gt-color-diploma: #f9f6e5;
  --gt-color-light-gray: #d6dbd4;
  --gt-color-medium-gray: #54585a;
  --gt-color-dark-gray: #3b3b3b;
  --gt-color-light-black: #262626;
  --gt-color-black: #000000;
  --gt-color-green: #00ec9c;
  --gt-color-bright-blue: #00ffff;
  --gt-color-blue: #2961ff;
  --gt-color-navy: #003057;
  --gt-color-red: #ff640f;
  --gt-color-purple: #7800ff;
  --gt-color-light-yellow: #ffcc00;
  --gt-color-yellow: #eeb211;
`;

export const text = css`
  --gt-color-text-primary: ${colorValues.lightBlack};
  --gt-color-text-secondary: ${colorValues.mediumGray};
  --gt-color-text-alt: ${colorValues.diploma};
  --gt-color-text-alt-secondary: ${colorValues.lightGray};
  --gt-color-text-link: ${colorValues.blue};
  --gt-color-text-link-visited: ${colorValues.purple};
  --gt-color-text-alt-link: ${colorValues.brightBlue};
  --gt-color-text-alt-link-visited: ${colorValues.green};
  --gt-color-text-title: ${colorValues.mediumGold};
  --gt-color-text-subtitle: ${colorValues.darkGold};
  --gt-color-text-alt-title: ${colorValues.navy};
  --gt-color-text-alt-subtitle: ${colorValues.navy};
`;

export const status = css`
  --gt-color-status-success: ${colorValues.green};
  --gt-color-status-warning: ${colorValues.yellow};
  --gt-color-status-error: ${colorValues.red};
  --gt-color-status-info: ${colorValues.blue};
`;

export const background = css`
  --gt-color-background-primary: ${colorValues.white};
  --gt-color-background-secondary: ${colorValues.diploma};
  --gt-color-background-alt: ${colorValues.lightBlack};
  --gt-color-background-alt-secondary: ${colorValues.navy};
`;

export const colors = css`
  ${brand}
  ${background}
  ${status}
  ${text}
`;

export default colors;
