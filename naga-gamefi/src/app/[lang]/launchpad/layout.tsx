import { Container } from '@mui/material';
import { HeadAppDir } from 'src/sections/layouts/head-content';
import Navigation from './comps/navigation';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeadAppDir
        title="LaunchPad - Discover The Best Web3 Gaming｜NAGA"
        keywords="LaunchPad,Web3 LaunchPad,GameFi LaunchPad"
      />
      <Container
        maxWidth="xl"
        sx={{ minHeight: '1000px', paddingBottom: '72px', paddingTop: { xs: '72px', sm: '40px' } }}
      >
        <Navigation />
        {children}
      </Container>
    </>
  );
}
