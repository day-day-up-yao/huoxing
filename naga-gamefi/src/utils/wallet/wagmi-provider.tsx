'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useEffect, useMemo } from 'react';
import { State, WagmiProvider } from 'wagmi';

import wagmiConfig, { ThemeMode } from './config/wagmi';

const queryClient = new QueryClient();
const WalletWagmiProvider = ({
  children,
  initialState,
  themeMode,
}: {
  children: ReactNode;
  initialState?: State;
  themeMode?: ThemeMode;
}) => {
  const wagmiConfigInstance = useMemo(() => wagmiConfig({ themeMode }), [themeMode]);

  useEffect(() => {
    const unsubscribe = wagmiConfigInstance.subscribe(
      (state) => state.chainId,
      (chainId) => console.log(`Chain ID changed to ${chainId}`)
    );
    // unsubscribe()
  }, [wagmiConfigInstance]);

  return (
    <WagmiProvider config={wagmiConfigInstance} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletWagmiProvider;
