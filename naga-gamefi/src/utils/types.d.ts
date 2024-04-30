import { RematchStore } from '@rematch/core';
import '@mui/material/styles';

declare global {
  interface Window {
    reduxStore: RematchStore;
    ethereum: any;
    NimCefWebInstance: any;
    google: any;
  }
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    sub: string;
  }
}
