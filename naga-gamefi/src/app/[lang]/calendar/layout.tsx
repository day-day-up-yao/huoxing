import { HeadAppDir } from 'src/sections/layouts/head-content';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeadAppDir
        title="Events Calendar - Discover The Best Web3 Gaming"
        keywords="AMA,Airdorp,Mint"
      />
      {children}
    </>
  );
}
