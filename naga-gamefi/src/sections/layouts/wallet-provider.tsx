'use client';

import { ReactNode } from 'react';
import { WalletWagmiProvider } from 'src/utils/wallet';
import { useSettingsContext } from './settings';

const WalletProvier = ({ children }: { children: ReactNode }) => {
  const { mode } = useSettingsContext();
  return <WalletWagmiProvider themeMode={mode}>{children}</WalletWagmiProvider>;
};
export default WalletProvier;
