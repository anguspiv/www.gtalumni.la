import { RouterContext } from 'next/dist/shared/lib/router-context';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <Global styles={globalStyles} />
        <Story />
      </>
    );
  },
];
