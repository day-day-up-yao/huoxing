import React, { useCallback, useContext, useMemo } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import Carousel, { useCarousel } from 'src/components/carousel';
import SvgIcon from 'src/components/svg-icon';
import TitleCurrency from 'src/components/before/title-currency';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import { Context } from '../context';

// ----------------------------------------------------------------------

const ellstyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
};

const CarouselItem = ({
  item,
  active,
  index,
  currentIndex,
  listLength,
  getBannerLinkUrl,
  onBtnNextClick,
  onBtnPreviousClick,
  windowShowType,
}: {
  item: any;
  index: number;
  currentIndex: number;
  active: boolean;
  listLength: number;
  getBannerLinkUrl: (url: string) => string;
  onBtnNextClick: () => void;
  onBtnPreviousClick: () => void;
  windowShowType: number;
}) => {
  const isDark = useIsDark();
  // Banner左侧 宣传图，宣传视频
  const leftImgDom = useMemo(
    () => (
      <Box
        width={{ sm: '505px', lg: '400px', bg: '650px' }}
        height={{ sm: '217px', lg: '316px' }}
        sx={{ bgcolor: 'background.paper' }}
      >
        {item.resUrl !== '' ? (
          active ? (
            <video
              src={item.resUrl}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              preload="auto"
              autoPlay
              poster={item.coverUrl}
              muted
              loop
            />
          ) : (
            <img
              src={item.coverUrl}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt=""
            />
          )
        ) : (
          <img
            src={item.coverUrl}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt=""
          />
        )}
      </Box>
    ),
    [active, item.coverUrl, item.resUrl]
  );

  // Banner右侧 详细信息
  const rightInfoDom = useMemo(() => {
    const thumbsurl = item?.gameIcon;
    // if (item.category === 2) {
    //   thumbsurl = item.coverUrl;
    // }
    // if (item.thumbUrl) {
    //   thumbsurl = item.thumbUrl;
    // }

    // 显示时间 暂时移除 现在显示TBA
    // const timeDom = () =>
    //   item?.gameCreateAt ? (
    //     <Stack direction="row" alignItems="center" gap="6px" height="18px">
    //       <SvgIcon name="time" isWhite is18px />
    //       <Typography variant="caption" sx={{ mt: '2px' }}>
    //         {dayjs(item.gameCreateAt * 1000).format('MMM D, YYYY')}
    //       </Typography>
    //     </Stack>
    //   ) : (
    //     <Stack height="18px" />
    //   );

    return (
      <Stack
        direction="column"
        // justifyContent="space-between"
        sx={({ palette }) => ({
          p: { sm: '10px', bg: '20px' },
          boxSizing: 'border-box',
          width: { sm: '229px', bg: '270px' },
          bgcolor: isDark ? palette.background.paper : palette.grey[50],
        })}
      >
        {item.category === 3 && (
          <Stack direction="column" justifyContent="flex-start">
            {/* 头像名称 */}
            <Stack direction="row" alignItems="center" gap="10px" sx={{ mb: '15px' }}>
              <Avatar
                src={thumbsurl}
                sx={{ bgcolor: 'background.neutral', width: '34px', height: '34px' }}
              />
              <Typography
                variant="h5"
                sx={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.title}
              </Typography>
            </Stack>
            {/* 链信息 */}
            <Stack
              direction="row"
              alignItems="center"
              gap="6px"
              sx={{ height: '23px', mb: '15px' }}
            >
              <TitleCurrency isHomeBanner isnewshow size="home-banner" chain={item.chain} />
            </Stack>
          </Stack>
        )}

        {item.category === 4 && (
          <Typography
            variant="h5"
            sx={{
              ...ellstyle,
              WebkitLineClamp: { sm: 2, lg: 3 },
              mb: '16px',
            }}
          >
            {item.title}
          </Typography>
        )}

        {/* 简介 */}
        <Typography
          variant="body2"
          // height="78px"
          sx={{
            ...ellstyle,
            WebkitLineClamp: item.category === 3 ? 2 : 6,
          }}
        >
          {item.brief}
        </Typography>
        {/* 看点 */}
        {item.category === 3 && (
          <Box mt={{ sm: '15px', lg: '24px' }}>
            {item.adv1 && item.adv1 !== '' && (
              <Stack direction="row">
                <SvgIcon
                  style={{
                    marginTop: '5px',
                  }}
                  name="banneritemtext"
                />
                <Typography
                  variant="body2"
                  sx={{
                    ...ellstyle,
                    WebkitLineClamp: { sm: 1, lg: 2 },
                    color: '#F4BC2C',
                    ml: '8px',
                    fontWeight: 'Medium',
                  }}
                >
                  {item.adv1}
                </Typography>
              </Stack>
            )}

            {item.adv2 && item.adv2 !== '' && (
              <Stack direction="row" mt="10px">
                <SvgIcon
                  style={{
                    marginTop: '5px',
                  }}
                  name="banneritemtext"
                />
                <Typography
                  variant="body2"
                  sx={{
                    ...ellstyle,
                    WebkitLineClamp: { sm: 1, lg: 2 },
                    color: '#F4BC2C',
                    ml: '8px',
                    fontWeight: 'Medium',
                  }}
                >
                  {item.adv2}
                </Typography>
              </Stack>
              // </Box>
            )}
          </Box>
        )}

        {/* 币种 价格 */}
        {/* {item.symbol ? (
          <Stack direction="row" alignItems="center" gap="6px">
            {item.coinIconUrl && (
              <Avatar
                src={item.coinIconUrl}
                sx={{ bgcolor: 'background.neutral', width: '20px', height: '20px' }}
              />
            )}
            <Typography variant="caption" sx={{ lineHeight: '20px' }}>
              {item.symbol}
            </Typography>
            {item.price && (
              <Typography variant="caption" sx={{ lineHeight: '20px' }}>{`$ ${Number(
                item.price
              ).toFixed(3)}`}</Typography>
            )}
            {(item.change24h || Number(item.change24h) === 0) && (
              <SvgIcon
                isGreen={Number(item.change24h) >= 0}
                isRed={Number(item.change24h) < 0}
                name={Number(item.change24h) >= 0 ? 'pointup' : 'pointdown'}
              />
            )}
            {(item.change24h || Number(item.change24h) === 0) && (
              <Typography
                variant="caption"
                sx={{
                  lineHeight: '20px',
                  color: Number(item.change24h) >= 0 ? '#15BD44' : '#E60000',
                }}
              >
                {(Number(item.change24h) * 100).toFixed(2)}%
              </Typography>
            )}
          </Stack>
        ) : undefined} */}
      </Stack>
    );
  }, [
    isDark,
    item.adv1,
    item.adv2,
    item.brief,
    item.category,
    item.chain,
    item?.gameIcon,
    item.title,
  ]);

  // 遮罩
  const shadowDom = useMemo(
    () =>
      !active ? (
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            bgcolor: 'shadow',
          }}
        />
      ) : undefined,
    [active]
  );

  return (
    <Stack
      direction="row"
      component={active ? 'a' : 'div'}
      target={item.category === 3 ? '' : '_blank'}
      href={
        active
          ? item.category === 3
            ? `/game/${item.gameId}`
            : getBannerLinkUrl(item.jumpUrl)
          : ''
      }
      className="bannner-test"
      onClick={() => {
        if (active) return;
        if (currentIndex === 0) {
          if (index === listLength - 1) {
            onBtnPreviousClick();
          } else {
            onBtnNextClick();
          }
        } else if (currentIndex === listLength - 1) {
          if (index === 0) {
            onBtnNextClick();
          } else {
            onBtnPreviousClick();
          }
        } else if (index === currentIndex + 1) {
          onBtnNextClick();
        } else {
          onBtnPreviousClick();
        }
      }}
      sx={{
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {leftImgDom}
      {active ? rightInfoDom : undefined}
      {shadowDom}
    </Stack>
  );
};

// ----------------------------------------------------------------------

const LeftArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '43%',
        left: '10px',
        width: '36px',
        height: '36px',
        zIndex: '2',
        cursor: 'pointer',
      }}
    >
      <img src="/images/icon/icon-banner-arrows-l.webp" alt="" />
    </Box>
  );
};

const RightArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '43%',
        right: '10px',
        width: '36px',
        height: '36px',
        zIndex: '2',
        cursor: 'pointer',
      }}
    >
      <img src="/images/icon/icon-banner-arrows-r.webp" alt="" />
    </Box>
  );
};

const HomeBannerNew = () => {
  const { bannerLists, getBannerLinkUrl, windowShowType } = useContext(Context);

  const carousel = useCarousel({
    speed: 800,
    autoplaySpeed: 7000,
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <LeftArrow onClick={() => {}} />,
    nextArrow: <RightArrow onClick={() => {}} />,
  });

  // 点击向右滚动按钮
  const onBtnNextClick = useCallback(() => {
    if (carousel.carouselRef) {
      carousel.carouselRef.current?.slickNext();
    }
  }, [carousel.carouselRef]);

  // 点击向左滚动按钮
  const onBtnPreviousClick = useCallback(() => {
    if (carousel.carouselRef) {
      carousel.carouselRef.current?.slickPrev();
    }
  }, [carousel.carouselRef]);

  return (
    <Box
      height={{ sm: '290px', lg: '400px' }}
      width="100%"
      overflow="hidden"
      padding={{ sm: '5px 0', lg: '25px 0' }}
      sx={{
        position: 'relative',
        '.slick-list': {
          height: { sm: '265px', lg: '340px' },
          display: 'flex',
          alignItems: 'center',
        },
        '.slick-center': {
          position: 'relative',
          left: { xs: '-175px', bg: '-220px' },
          zIndex: 3,
        },
        '.slick-slide>div': {
          transition: 'all .3s ease',
        },
        '.slick-center>div': {
          width: { xs: '620px', bg: '800px' },
          transform: 'scale(1.16)',
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          MozTransformStyle: 'preserve-3d',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 5px 17px 0px rgba(0, 0, 0, 0.18)',
        },
        '.slick-track': {
          display: '-webkit-box',
        },
      }}
    >
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {bannerLists.concat(bannerLists).map((app: any, index: number) => (
          <CarouselItem
            key={app.id}
            item={app}
            active={index === carousel.currentIndex}
            index={index}
            listLength={bannerLists.length}
            currentIndex={carousel.currentIndex}
            getBannerLinkUrl={getBannerLinkUrl}
            onBtnNextClick={onBtnNextClick}
            onBtnPreviousClick={onBtnPreviousClick}
            windowShowType={windowShowType}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeBannerNew;
