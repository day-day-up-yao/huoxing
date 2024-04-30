'use client';

import merge from 'lodash/merge';
import { useMemo } from 'react';
// @mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles';
// components
import { ColorPresetsVals, useSettingsContext } from 'src/sections/layouts/settings';
// system
import { useLocales } from 'src/locales';
import { defaultSettings } from 'src/sections/layouts/settings/context/settings-provider';
import { palette } from './palette';
import { shadows } from './shadows';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';
// options
import { presets } from './options/presets';
import { darkMode } from './options/dark-mode';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { currentLang } = useLocales();

  const settings = useSettingsContext();

  const darkModeOption = darkMode(settings.mode || defaultSettings.mode);

  const presetsOption = presets(ColorPresetsVals.DEFAULT);

  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      customShadows: customShadows('light'),
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const memoizedValue = useMemo(
    () => merge(baseOption, darkModeOption, presetsOption),
    [baseOption, darkModeOption, presetsOption]
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = componentsOverrides(theme);

  const themeWithLocale = useMemo(
    () => createTheme(theme, currentLang.systemValue),
    [currentLang.systemValue, theme]
  );

  return (
    <MuiThemeProvider theme={themeWithLocale}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
