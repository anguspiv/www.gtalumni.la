import { css } from '@emotion/react';

const blueValues = {
  100: '#e6f0ff',
  200: '#b3d1ff',
  300: '#80b2ff',
  400: '#4d93ff',
  500: '#1a74ff',
  600: '#005ce6',
  700: '#0047b3',
  800: '#003380',
  900: '#001f4d',
};

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

export const blue = css`
  --gt-color-blue-100: ${blueValues[100]};
  --gt-color-blue-200: ${blueValues[200]};
  --gt-color-blue-300: ${blueValues[300]};
  --gt-color-blue-400: ${blueValues[400]};
  --gt-color-blue-500: ${blueValues[500]};
  --gt-color-blue-600: ${blueValues[600]};
  --gt-color-blue-700: ${blueValues[700]};
  --gt-color-blue-800: ${blueValues[800]};
  --gt-color-blue-900: ${blueValues[900]};
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

export const social = css`
  --gt-color-social-facebook: #3b5998;
  --gt-color-social-twitter: #1da1f2;
  --gt-color-social-instagram: #e1306c;
  --gt-color-social-linkedin: #0077b5;
  --gt-color-social-youtube: #ff0000;
  --gt-color-social-github: #333333;
  --gt-color-social-slack: #4a154b;
  --gt-color-social-discord: #7289da;
  --gt-color-social-medium: #00ab6c;
  --gt-color-social-reddit: #ff4500;
  --gt-color-social-twitch: #6441a5;
  --gt-color-social-telegram: #0088cc;
  --gt-color-social-whatsapp: #25d366;
  --gt-color-social-pinterest: #bd081c;
  --gt-color-social-vimeo: #1ab7ea;
  --gt-color-social-tumblr: #35465c;
  --gt-color-social-snapchat: #fffc00;
  --gt-color-social-flickr: #ff0084;
  --gt-color-social-vine: #00b488;
  --gt-color-social-yahoo: #400191;
  --gt-color-social-behance: #1769ff;
  --gt-color-social-dribbble: #ea4c89;
  --gt-color-social-foursquare: #0072b1;
  --gt-color-social-soundcloud: #ff5500;
  --gt-color-social-spotify: #1ed760;
  --gt-color-social-stumbleupon: #eb4924;
  --gt-color-social-vk: #4c75a3;
  --gt-color-social-weibo: #e6162d;
  --gt-color-social-xing: #006567;
  --gt-color-social-yelp: #d32323;
  --gt-color-social-rss: #ff6600;
`;

export const colors = css`
  ${blue}
  ${brand}
  ${background}
  ${status}
  ${text}
  ${social}
`;

export default colors;
