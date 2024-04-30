import { HeadAppDir } from 'src/sections/layouts/head-content';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeadAppDir title="Communities List - Discover The Best Web3 Gaming" />
      {children}
    </>
  );
}
