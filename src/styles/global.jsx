import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { rem } from 'polished';
import { theme } from './theme';

export const globalStyles = css`
  ${emotionNormalize}
  :root {
    ${theme}
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    background: var(--gt-color-background-primary);
    color: var(--gt-color-text-primary);
    font-family: var(--gt-font-family-regular);
    font-size: ${rem(16)};
    line-height: 1.5;
    word-wrap: break-word;

    details,
    figcaption,
    figure {
      display: block;
    }

    summary {
      display: list-item;
    }

    [hidden] {
      display: none !important;
    }

    a {
      background-color: transparent;
      color: var(--gt-color-text-link);
      text-decoration: underline;
      transition: color 0.2s ease-in-out;
    }

    a:active,
    a:hover {
      outline-width: 0;
    }

    a:visted {
      color: var(--gt-color-text-link-visited);
    }

    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
    }

    b,
    strong {
      font-weight: bold;
    }

    dfn {
      font-style: italic;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--gt-font-family-subtitle);
      font-weight: 600;
      line-height: 1.2;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      color: var(--gt-color-text-title);
    }

    h1 {
      font-family: var(--gt-font-family-title);
      font-size: 2.5rem;
      color: var(--gt-color-text-alt-title);
    }

    h2 {
      font-size: 2.12rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-size: 1.25rem;
    }

    h6 {
      font-size: 1rem;
      color: var(--gt-color-text-subtitle);
    }

    p {
      margin-bottom: 1.3rem;
    }
  }

  #__next {
    min-height: 100vh;
  }
`;

export default globalStyles;
