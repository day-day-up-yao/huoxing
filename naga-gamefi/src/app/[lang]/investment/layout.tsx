import { Container } from '@mui/material';
import { HeadAppDir } from 'src/sections/layouts/head-content';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeadAppDir title="Web3 Gaming VC DEAL FLOW ｜ NAGA — Discover The Best Web3 Gaming" />
      <Container
        maxWidth="xl"
        sx={{ minHeight: '1000px', paddingBottom: '72px', paddingTop: { xs: '24px', sm: '40px' } }}
      >
        {children}
      </Container>
    </>
  );
}
