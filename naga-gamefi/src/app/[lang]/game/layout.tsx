import { Container } from '@mui/material';
import { HeadAppDir } from 'src/sections/layouts/head-content';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeadAppDir title="2023 ANNUAL WBE3 GAME AWARD ｜ NAGA- Discover The Best Web3 Gaming" />
      <Container
        maxWidth="xl"
        sx={{
          minHeight: '1000px',
          paddingBottom: '72px',
          paddingTop: { xs: '0', sm: '40px' },
          padding: { xs: '0', sm: '40px' },
        }}
      >
        {children}
      </Container>
    </>
  );
}
