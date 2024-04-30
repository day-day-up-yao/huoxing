import { useAccount } from 'wagmi';

export default () => {
  const { address, ...rest } = useAccount();
  return { address: address?.toLocaleLowerCase(), ...rest };
};
