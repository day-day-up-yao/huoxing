import { alpha } from '@mui/material/styles';

import {
  GREY,
  GREY_SHALLOW,
  INFO,
  SECONDARY,
  PRIMARY,
  SUCCESS,
  WARNING,
  ERROR,
} from './palette-step-colors';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  border: alpha(GREY[0], 0.15),
  shadow: alpha('#000000', 0.5),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY_SHALLOW[800],
      secondary: GREY_SHALLOW[600],
      disabled: GREY_SHALLOW[500],
    },
    background: {
      sub: GREY_SHALLOW[300],
      paper: GREY_SHALLOW[100],
      default: GREY_SHALLOW[0],
      neutral: alpha(GREY_SHALLOW[500], 0.12),
      tasktip: alpha(GREY_SHALLOW[400], 0.5),
      border: alpha(GREY[900], 0.1),
      gameformbg: GREY_SHALLOW[100],
    },
    action: {
      ...COMMON.action,
      active: GREY_SHALLOW[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[400],
      disabled: GREY[500],
    },
    background: {
      sub: GREY[700],
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
      tasktip: alpha(GREY[900], 0.5),
      border: alpha(GREY[0], 0.1),
      gameformbg: GREY[900],
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return mode === 'light' ? light : dark;
}
