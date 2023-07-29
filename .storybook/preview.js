import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '@styles/global';
import { theme } from '@styles/theme';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = () => <Global styles={globalStyles} />;

export const decorators = [
  withThemeFromJSXProvider({
    /* Uncomment for theme switching support */
    themes: {
      light: theme,
      // dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
