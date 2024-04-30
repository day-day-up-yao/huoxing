import { Box, Stack, Avatar, Typography } from '@mui/material';
import { useContext, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';

import ShareList from 'src/components/share-list';

import { Context } from '../context';

export default () => {
  const { gamedetailData, GamedetailUrl, isDark } = useContext(Context);

  const pcHeaderDom = useMemo(
    () => (
      <Box
        sx={{
          height: '400px',
          bgcolor: 'background.paper',
          borderRadius: '5px',
          overflow: 'hidden',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <img
          src={
            gamedetailData?.bgUrl
              ? gamedetailData?.bgUrl
              : isDark
              ? '/images/bigimg/detailtopd.png'
              : '/images/bigimg/detailtopl.png'
          }
          style={{
            height: '260px',
            width: '100%',
            objectFit: 'cover',
          }}
          alt=""
        />
        <Stack direction="row">
          <Avatar
            src={gamedetailData?.iconUrl ? gamedetailData?.iconUrl : '/images/bigimg/mo.png'}
            sx={{
              width: '154px',
              height: '154px',
              objectFit: 'cover',
              border: '4px solid',
              borderColor: 'background.paper',
              borderRadius: '5px',
              position: 'relative',
              top: '-35px',
              left: '38px',
            }}
          />
          <Box pl="55px" pt="15px" className="newgamedetail-header-share">
            <Typography variant="h3">{gamedetailData?.name}</Typography>
            <ShareList
              linkitem={{
                tw: gamedetailData?.twitter,
                we: gamedetailData?.website,
                // me: '#',
                te: gamedetailData?.telegram,
                di: gamedetailData?.discord,
                // sub: 'https://forms.gle/PJZWy582Y6rvPFM68',
              }}
            />
            <Typography
              variant="body1"
              mt="6px"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {gamedetailData?.brief}
            </Typography>
          </Box>
        </Stack>
      </Box>
    ),
    [
      gamedetailData?.bgUrl,
      gamedetailData?.iconUrl,
      gamedetailData?.name,
      gamedetailData?.twitter,
      gamedetailData?.website,
      gamedetailData?.telegram,
      gamedetailData?.discord,
      gamedetailData?.brief,
      isDark,
    ]
  );

  const h5HeaderDom = useMemo(
    () => (
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        {GamedetailUrl(gamedetailData).length > 0 && (
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs]}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{
              type: 'bullets',
              clickable: true,
            }}
          >
            {GamedetailUrl(gamedetailData).map((item: any, index: any) => {
              const isVideo = item?.constructor === Object;
              return (
                !isVideo && (
                  <SwiperSlide key={index}>
                    <img
                      style={{
                        height: '210px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                      src={item}
                      alt=""
                    />
                  </SwiperSlide>
                )
              );
            })}
          </Swiper>
        )}

        <Box padding="0 16px" mt="32px">
          <Stack direction="row" alignItems="center">
            {GamedetailUrl(gamedetailData).length <= 0 && (
              <Avatar
                variant="rounded"
                src={gamedetailData?.adverUrl}
                sx={{
                  width: '56px',
                  height: '56px',
                  mr: '16px',
                }}
              />
            )}

            <Typography fontSize="22px">{gamedetailData?.name}</Typography>
          </Stack>
          <Typography variant="body1" m="16px 0" color="text.secondary">
            {gamedetailData?.brief}
          </Typography>
          <Box className="newgamedetail-header-share">
            <ShareList
              linkitem={{
                tw: gamedetailData?.twitter,
                // me: '#',
                te: gamedetailData?.telegram,
                di: gamedetailData?.discord,
                // sub: 'https://forms.gle/PJZWy582Y6rvPFM68',
              }}
            />
          </Box>
        </Box>
      </Box>
    ),
    [GamedetailUrl, gamedetailData]
  );
  return (
    <Box>
      {pcHeaderDom}
      {h5HeaderDom}
    </Box>
  );
};
