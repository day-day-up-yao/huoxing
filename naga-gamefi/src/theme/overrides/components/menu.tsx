import { Theme } from '@mui/material/styles';
//
import { menuItem } from '../../css';

// ----------------------------------------------------------------------

export function menu(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: '55px !important',
          ...menuItem(theme),
          padding: '16.5px 14px !important',
        },
      },
    },
  };
}
