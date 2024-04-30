import { Container } from '@mui/material';
import { HeadAppDir } from 'src/sections/layouts/head-content';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeadAppDir title="Web3 Gaming Combinator" />
      <Container
        // maxWidth="100%"
        sx={{
          bgcolor: 'background.gameformbg',
          minHeight: '1000px',
          paddingBottom: '72px',
          maxWidth: '100%',
          // paddingTop: { xs: '0', sm: '40px' },
        }}
      >
        {children}
      </Container>
    </>
  );
}
