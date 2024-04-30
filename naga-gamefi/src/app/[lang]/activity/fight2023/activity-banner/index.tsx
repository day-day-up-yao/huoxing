import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Carousel, { useCarousel, CarouselDots } from 'src/components/carousel';
import { Context } from '../context';

const ActivityBanner = () => {
  const { t, mainData, bannerList, windowShowType } = useContext(Context);

  // 左侧文字介绍
  const leftInfoDom = useMemo(
    () => (
      <Stack
        direction="column"
        alignItems={windowShowType === 2 ? 'center' : 'flex-start'}
        gap={windowShowType === 2 ? '28px' : '45px'}
        width={windowShowType === 2 ? '100%' : '50%'}
      >
        <Stack
          direction="column"
          alignItems={windowShowType === 2 ? 'center' : 'flex-start'}
          gap="4px"
        >
          <Box sx={{ width: '80%' }}>
            <img src={mainData.logoImg} alt="" />
          </Box>
          <Box
            sx={windowShowType === 2 ? { width: '100%%', mt: '8px' } : { width: '97%', mt: '30px' }}
          >
            <img src={windowShowType === 2 ? mainData.titleImgH5 : mainData.titleImg} alt="" />
          </Box>
          {/* <Typography
            sx={{
              fontSize: 90,
              lineHeight: '140px',
              letterSpacing: '6px',
              color: '#FCBF23',
              fontWeight: 'bold',
            }}
          >
            {t(mainData.titleMain)}
          </Typography>
          <Typography
            sx={{
              fontSize: 44,
              lineHeight: '50px',
              letterSpacing: '3px',
              fontWeight: 'bold',
            }}
          >
            {t(mainData.titleSub)}
          </Typography> */}
        </Stack>
        <Stack direction="row" alignItems="center" gap="8px">
          <Box
            sx={
              windowShowType === 2
                ? {
                    width: '3px',
                    height: '16px',
                    bgcolor: '#E60000',
                  }
                : {
                    width: '4px',
                    height: '25px',
                    bgcolor: '#E60000',
                  }
            }
          />
          <Typography
            sx={
              windowShowType === 2
                ? {
                    fontSize: 14,
                    lineHeight: '16px',
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                  }
                : { fontSize: 22, lineHeight: '26px', letterSpacing: '1px', fontWeight: 'bold' }
            }
          >
            {t(mainData.date)}
          </Typography>
        </Stack>
        <Typography
          sx={
            windowShowType === 2
              ? {
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '1px',
                  color: '#9B98C7',
                  maxWidth: '700px',
                  textAlign: 'center',
                }
              : {
                  fontSize: '18px',
                  lineHeight: '32px',
                  letterSpacing: '1px',
                  color: '#9B98C7',
                  maxWidth: '700px',
                }
          }
        >
          {t(mainData.description)}
        </Typography>
      </Stack>
    ),
    [
      mainData.date,
      mainData.description,
      mainData.logoImg,
      mainData.titleImg,
      mainData.titleImgH5,
      t,
      windowShowType,
    ]
  );

  // 轮播图设置
  const carousel = useCarousel({
    speed: 800,
    autoplaySpeed: 7000,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        height: '46px',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '10px',
        li: {
          width: '32px',
          height: '6px',
          opacity: '1',
          '&.slick-active': {
            width: '50px',
            height: '6px',
            '.mui-mkgmya': { width: '50px', bgcolor: '#E60000' },
          },
        },
        '.mui-mkgmya': { width: '32px', height: '6px', borderRadius: '0', bgcolor: '#7F6872' },
      },
    }),
  });

  // 右侧轮播图
  const rightSlickDom = useMemo(
    () => (
      <Box
        width={windowShowType === 2 ? '100%' : '43%'}
        sx={{
          mt: '58px',
          position: 'relative',
        }}
      >
        <Carousel {...carousel.carouselSettings}>
          {bannerList?.map((item: ActivityBannerListType, index: number) => (
            <Box
              component={item.jumpUrl ? 'a' : 'div'}
              href={item.jumpUrl}
              target="_blank"
              sx={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
              key={index}
            >
              <img src={item?.picUrl} alt="" width="100%" />
            </Box>
          ))}
        </Carousel>
      </Box>
    ),
    [bannerList, carousel.carouselSettings, windowShowType]
  );

  return (
    <Stack
      width="100%"
      direction={windowShowType === 2 ? 'column' : 'row'}
      justifyContent="space-between"
      sx={
        windowShowType === 2
          ? {
              m: '150px 0 0',
            }
          : {
              m: '128px 0 55px',
            }
      }
    >
      {leftInfoDom}
      {rightSlickDom}
    </Stack>
  );
};

export default ActivityBanner;
