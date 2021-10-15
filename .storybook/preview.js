import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { createTheming } from "react-jss";
import { theme, ThemeContext } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theming = createTheming(ThemeContext);
const { ThemeProvider } = theming;

export const decorators = [
  (Story) => {
    const currentTheme = useDarkMode() ? theme.dark : theme.light;
    return <ThemeProvider theme={currentTheme} ><Story /></ThemeProvider>
  }
]