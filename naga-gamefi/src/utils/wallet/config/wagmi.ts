import { createConfig, http, cookieStorage, createStorage } from 'wagmi';
import { mainnet, zkFair, polygon, zkSync, opBNB, optimism } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';
import { canUseDom } from 'src/utils/can-use-dom';

const walletConnectProjectId = '1a6045ca64a666fc895755c0fad49131';

export type ThemeMode = 'dark' | 'light';
export default (params?: { themeMode?: ThemeMode }) => {
  const connectors = canUseDom
    ? [
        walletConnect({
          projectId: walletConnectProjectId,
          qrModalOptions: {
            themeMode: params?.themeMode || 'dark', // Find ways to follow the black and white theme if needed
          },
        }),
      ]
    : [];
  return createConfig({
    chains: [mainnet, zkFair, polygon, zkSync, opBNB, optimism],
    ssr: false,
    connectors,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [mainnet.id]: http(),
      [zkFair.id]: http(),
      [polygon.id]: http(),
      [zkSync.id]: http(),
      [opBNB.id]: http(),
      [optimism.id]: http(),
    },
  });
};
