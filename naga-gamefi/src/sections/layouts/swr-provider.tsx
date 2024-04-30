'use client';

import { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { SWRConfigFallback } from 'src/fetchs/store';

type SWRProviderProps = {
  fallback?: SWRConfigFallback;
};
export const SWRProvider = ({
  children,
  fallback,
}: {
  children: ReactNode;
} & SWRProviderProps) => (
  <SWRConfig
    value={{
      // fetcher,
      // provider: () => new Map(),
      fallback,
      onError: (error, key) => {
        console.log('swr error:', error, key);
        if (error.status !== 403 && error.status !== 404) {
          // We can send the error to Sentry,
          // or show a notification UI.
        }
      },
    }}
  >
    {children}
  </SWRConfig>
);
