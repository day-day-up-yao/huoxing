export type ChainConfig = {
  chainId: number;
  icon: string;
};

export const findChain = (chainId: number) =>
  Object.values(chainConfig).find((item) => item.chainId === chainId);

const chainConfig: Record<string, ChainConfig> = {
  ethereum: {
    chainId: 1,
    icon: '/images/network/eth-mainnet-icon.png',
  },
  zkfair: {
    chainId: 42766,
    icon: '/images/network/zkfair-icon.svg',
  },
};
export default chainConfig;
