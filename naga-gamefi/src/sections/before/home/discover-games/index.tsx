import React, { useContext } from 'react';
import { Avatar, Box, Stack, Typography, Button } from '@mui/material';
import TitleHeader from 'src/components/before/title-header';
import BoxPage from 'src/components/before/box-page';
import { hometogameslist } from 'src/utils/public/datas';
import { Link } from 'src/components/link';

import { Context } from '../context';

const DiscoverGames = () => {
  const { isPC } = useContext(Context);
  return (
    <BoxPage style={{ padding: '0 24px' }}>
      <Box
        sx={{
          padding: isPC ? '' : '0 16px',
        }}
      >
        <TitleHeader text="Discover More Web3 Gaming" />
        <Box sx={{ mt: '28px' }}>
          <Stack direction="row" flexWrap="wrap" gap="24px 1.8%">
            {hometogameslist.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                // underline="none"
                style={{
                  position: 'relative',
                  width: isPC ? '18.5%' : '48%',
                  height: isPC ? '150px' : '90px',
                  borderRadius: '16px',
                  color: '#fff',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    transition: 'all 0.5s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    src={item.bgurl}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '74px',
                    width: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    src="/images/discove/discshadow.png"
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{
                    position: 'absolute',
                    bottom: '14px',
                    left: 0,
                    textAlign: 'center',
                    width: '100%',
                    color: '#fff',
                  }}
                  variant="h5"
                >
                  {item.titlename}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </BoxPage>
  );
};
export default DiscoverGames;
