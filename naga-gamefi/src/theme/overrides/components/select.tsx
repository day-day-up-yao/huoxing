import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        icon: {
          right: 10,
          width: 18,
          height: 18,
          top: 'calc(50% - 9px)',
        },
        select: {
          display: 'flex',
          alignItems: 'center',
          padding: '11px 20px',
        },
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        icon: {
          right: 10,
          width: 18,
          height: 18,
          top: 'calc(50% - 9px)',
        },
      },
    },
  };
}
