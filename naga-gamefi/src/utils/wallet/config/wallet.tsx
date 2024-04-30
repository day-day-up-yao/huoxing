import { Avatar, Card } from '@mui/material';
import { Connector } from 'wagmi';

const walletConfigs: WalletConfig[] = [
  {
    id: 'metaMask',
    installedId: 'io.metamask',
    name: 'MetaMask',
    icon: '/images/wallet/metamask.svg',
    downloadUrl: 'https://metamask.io/download/',
  },
  {
    id: 'okxWallet',
    installedId: 'com.okex.wallet',
    name: 'OKX Wallet',
    icon: '/images/wallet/okx-wallet.svg',
    downloadUrl: 'https://www.okx.com/cn/web3',
  },
  // {
  //   id: 'bitKeep',
  //   name: 'Bitget Wallet',
  //   icon: '/images/wallet/bit-keep.svg',
  // },
  // {
  //   id: 'tokenPocket',
  //   name: 'Token Pocket',
  //   icon: '/images/wallet/token-pocket.svg',
  // },
  // {
  //   id: 'foxWallet',
  //   name: 'Fox Wallet',
  //   icon: '/images/wallet/fox-wallet.svg',
  // },

  {
    id: 'walletConnect',
    name: 'WalletConnect',
    icon: (
      <Card
        sx={({ palette }) => ({
          background: palette.background.neutral,
          width: '28px',
          height: '28px',
          marginRight: '16px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Avatar
          sx={{
            width: '16px',
            height: '16px',
          }}
          src="/images/wallet/wallet-connect.svg"
        />
      </Card>
    ),
  },
];

export type WalletConfig = {
  id: string;
  name: string;
  icon: string | JSX.Element;
  installedId?: string;
  downloadUrl?: string;
};

export type WalletOptionConnector = Connector & WalletConfig;

export default walletConfigs;
