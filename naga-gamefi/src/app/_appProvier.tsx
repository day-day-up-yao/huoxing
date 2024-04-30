'use client';

import LayoutProvider, { LayoutProviderProps } from 'src/sections/layouts/provider';
import NextAppDirEmotionCacheProvider from './_next-emotion-cache';

const AppProvier = ({ children, lang, mode }: LayoutProviderProps) => (
  <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
    <LayoutProvider {...{ mode, lang }}>{children}</LayoutProvider>
  </NextAppDirEmotionCacheProvider>
);

export default AppProvier;
