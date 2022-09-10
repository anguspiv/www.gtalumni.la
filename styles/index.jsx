import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from './theme';

export const globalStyles = css`
  :root {
    ${theme}
  }
  html,
  body {
    padding: 3rem 1rem;
    margin: 0;
    background: var(--gt-color-background-primary);
    color: var(--gt-color-text-primary);
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const basicStyles = css`
  background-color: var(--gt-color-background-primary);
  color: var(--gt-color-text-primary);
  border: 1px solid var(--gt-color-green);
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 var(--gt-color-green), 10px 10px 0 0 var(--gt-color-yellow);
  transition: all 0.2s ease-in-out;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const hoverStyles = css`
  &:hover {
    color: var(--gt-color-text-secondary);
    background-color: var(--gt-color-background-secondary);
    border-color: var(--gt-color-bright-blue);
    box-shadow: -15px -15px 0 0 var(--gt-color-bright-blue), -30px -30px 0 0 var(--gt-color-blue);
  }
`;

export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

export const Basic = styled.div`
  ${basicStyles};
`;

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    color: var(--gt-color-text-alt);
    background-color: var(--gt-color-background-alt);
  }
`;

export const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    color: var(--gt-color-text-alt);
    background-color: var(--gt-color-background-alt);
  }
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`;
