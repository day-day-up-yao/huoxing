import { HeadAppDir } from 'src/sections/layouts/head-content';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeadAppDir title="WEB3 GAME FIGHT OR FRIGHT 2023" />
      {children}
    </>
  );
}
