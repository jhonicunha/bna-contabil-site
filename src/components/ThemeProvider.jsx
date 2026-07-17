'use client';
import PropTypes from 'prop-types';

import { Suspense } from 'react';

// @mui
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @project
import { Themes } from '@/config';
import useConfig from '@/hooks/useConfig';

import aiTheme from '@/views/landings/ai/theme';

// Theme Map
const themeMap = {
  [Themes.THEME_AI]: aiTheme
};

/***************************  COMMON - THEME PROVIDER  ***************************/

export default function ThemeProvider({ children }) {
  const { state } = useConfig();

  const selectedTheme = themeMap[state.currentTheme]?.('data-color-scheme') || aiTheme('data-color-scheme');

  return (
    <>
      <InitColorSchemeScript attribute="data-color-scheme" defaultMode="light" />
      <Suspense fallback={null}>
        <MuiThemeProvider disableTransitionOnChange theme={selectedTheme} defaultMode="light">
          <CssBaseline enableColorScheme />
          {children}
        </MuiThemeProvider>
      </Suspense>
    </>
  );
}

ThemeProvider.propTypes = { children: PropTypes.any };
