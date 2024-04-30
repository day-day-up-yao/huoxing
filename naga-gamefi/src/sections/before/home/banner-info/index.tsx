import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carousel } from 'react-responsive-carousel';
// import { useTranslation } from 'react-i18next'
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import dayjs from 'dayjs';
// import classNames from 'classnames';
import { isArray } from 'lodash';
import { Stack, Typography, Avatar, Box } from '@mui/material';
import Image from 'next/image';
// import LazyLoad from 'src/components/before/image-lazy';
// import SortInfo from 'src/components/before/sort-info';
import { Link } from 'src/components/link';
import SvgIcon from 'src/components/svg-icon';
import TitleCurreny from 'src/components/before/title-currency';
import PricePercent from 'src/components/price-percent';
import { Context } from '../context';
import 'swiper/scss';
import 'node_modules/swiper/modules/effect-fade.scss';
import 'node_modules/swiper/modules/pagination.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';
import QuestList from '../quest-list';

export default () => {
  const { t, bannerLists, getBannerLinkUrl } = useContext(Context);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [slide, setSlide] = useState(0);
  const [thumes, setThumes] = useState<any[]>([]);

  useEffect(() => {
    if (!bannerLists || !isArray(bannerLists)) return;
    const listthumbs: any[] = [];
    for (let i = 0; i < bannerLists.length; i += 1) {
      const item = bannerLists[i];

      let thumbsurl = item.resUrl;
      if (item.category === 2) {
        thumbsurl = item.coverUrl;
      }
      const thumbsitem = (
        <div className="smallbanner-item" key={i}>
          <div
            // className="smallbanner-item-img"
            className={`smallbanner-item-img ${slide === i && 'active'}`}
            style={{
              backgroundImage: `url(${thumbsurl})`,
            }}
            onClick={() => setSlide(i)}
          >
            <div className="smallbanner-item-shadow" />
          </div>
        </div>
      );
      listthumbs.push(thumbsitem);
    }

    setThumes(listthumbs);
    // console.log(listthumbs)
  }, [bannerLists, slide]);

  const newPcbannerDom = useMemo(
    () => (
      <Carousel
        className="banner-big-home"
        animationHandler="fade"
        // showThumbs={true}
        infiniteLoop
        autoFocus={false}
        autoPlay
        interval={8000}
        onChange={(num) => {
          setSlide(num);
        }}
        stopOnHover={false} // 鼠标悬浮不影响播放
        // verticalSwipe="natural"
        // selectedItem 设置选中item
        showArrows={false} // 左右箭头
        showStatus={false} // 统计item
        showIndicators={false} // 原点指示
        // emulateTouch={false} // 鼠标滑动开关
        // centerMode // 剧中
        // axis="vertical"
        // centerSlidePercentage={50} item大小 和centerMode一起使用
        renderThumbs={() =>
          // console.log(children)
          thumes
        }
      >
        {bannerLists &&
          bannerLists.length > 0 &&
          bannerLists?.map((item: any, index: any) => (
            <Link
              href={item.category === 3 ? `/game/${item.gameId}` : getBannerLinkUrl(item.jumpUrl)}
              key={index}
            >
              <div className="topshow-left">
                {item.resUrl !== '' ? (
                  <video
                    src={item.resUrl}
                    className="topshow-left-video"
                    preload="auto"
                    autoPlay
                    poster={item.coverUrl}
                    muted
                    loop
                  />
                ) : (
                  <img src={item.coverUrl} alt="video" />
                )}
                {item.id !== -1 && <div className="topshow-left-shadow" />}
                {item.id !== -1 && (
                  <div className="topshow-left-desc">
                    <div className="slide-item-top">
                      {item.coinIconUrl ? (
                        <Stack direction="row" alignItems="center" gap="6px">
                          {item.coinIconUrl && <Avatar src={item.coinIconUrl} />}
                          {item.symbol && <Typography variant="h4">{item.symbol}</Typography>}
                          {item.price && (
                            <Typography sx={{ lineHeight: '20px', fontSize: '20px' }}>{`$ ${Number(
                              item.price
                            ).toFixed(3)}`}</Typography>
                          )}
                          {item.change24h && Number(item.change24h) !== 0 && (
                            <SvgIcon
                              isGreen={Number(item.change24h) > 0}
                              isRed={Number(item.change24h) < 0}
                              name={Number(item.change24h) > 0 ? 'pointup' : 'pointdown'}
                            />
                          )}
                          {item.change24h && (
                            <Typography
                              sx={{
                                lineHeight: '20px',
                                fontSize: '20px',
                                color: Number(item.change24h) > 0 ? '#15BD44' : '#E60000',
                              }}
                            >
                              {(Number(item.change24h) * 100).toFixed(2)}%
                            </Typography>
                          )}
                        </Stack>
                      ) : (
                        <div className="slide-item-logo">
                          {item.logoUrl && <img src={item.logoUrl} alt="" />}
                        </div>
                      )}
                    </div>
                    <div className="desc-text">{item.brief}</div>
                    <div className="desc-btn">FIND OUT MORE</div>
                  </div>
                )}
              </div>
            </Link>
          ))}
      </Carousel>
    ),
    [bannerLists, getBannerLinkUrl, thumes]
  );

  const notBannerDom = useMemo(
    () => (
      <div className="not-banner-dom">
        <div className="not-banner-dom-left all-loading-bg-c3" />
        <div className="not-banner-dom-right">
          {Array.from({ length: 6 }).map((item, index) => (
            <div className="not-banner-dom-right-item all-loading-bg-c3" key={index} />
          ))}
        </div>
      </div>
    ),
    []
  );

  const notBannerDom2 = useMemo(
    () => (
      <div className="not-banner-dom-2">
        {/* <div>
          <QuestList num={3} />
        </div> */}
        <div className="not-banner-dom-left all-loading-bg-c3" />
        <div className="not-banner-dom-right">
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ cursor: 'pointer', mb: '24px' }}
          >
            <Typography variant="h4" sx={{ flexGrow: 1, lineHeight: '28px' }}>
              {t('event_calendar_title')}
            </Typography>
            <Image src="/images/icon/bannerright.png" alt="" width={16} height={16} />
          </Stack>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="not-banner-dom-right-item all-loading-bg-c3" key={index} />
          ))}
        </div>
      </div>
    ),
    [t]
  );

  // H5banner
  const H5Banner = useMemo(
    () => (
      <div className="h5-swiper">
        {bannerLists?.length > 0 ? (
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs]}
            className="swiper-h5home-banner"
            slidesPerView={1.2}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{
              type: 'bullets',
              clickable: true,
            }}
          >
            {bannerLists?.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <Link href={getBannerLinkUrl(item.jumpUrl)} className="h5-swiper-item">
                  <div className="h5-swiper-top">
                    <div className="h5-swiper-top-img">
                      <img src={item.category === 2 ? item.coverUrl : item.resUrl} alt="" />
                    </div>
                  </div>
                  <div className="h5-swiper-bottom">
                    {item.logoUrl ? (
                      <div className="h5-swiper-item-logo">
                        <img src={item.logoUrl} alt="" />
                      </div>
                    ) : (
                      <div className="h5-swiper-item-logo">{item.title}</div>
                    )}
                    <div className="h5-swiper-item-desc">{item.brief}</div>
                    <div className="h5-swiper-price-box" />
                    {item.symbol ? (
                      <div className="h5-swiper-price-box">
                        {item.coinIconUrl && (
                          <img className="h5-swiper-price-icon" src={item.coinIconUrl} alt="" />
                        )}
                        {item.symbol}
                        {item.price && `$ ${Number(item.price).toFixed(3)}`}
                        {item.change24h && Number(item.change24h) !== 0 && (
                          <SvgIcon
                            isGreen={Number(item.change24h) > 0}
                            isRed={Number(item.change24h) < 0}
                            name={Number(item.change24h) > 0 ? 'pointup' : 'pointdown'}
                          />
                        )}
                        {item.change24h && (
                          <Typography
                            sx={{
                              lineHeight: '16px',
                              fontSize: '12px',
                              color: Number(item.change24h) > 0 ? '#15BD44' : '#E60000',
                            }}
                          >
                            {(Number(item.change24h) * 100).toFixed(2)}%
                          </Typography>
                        )}
                      </div>
                    ) : item?.gameCreateAt ? (
                      <div className="h5-swiper-price-box">
                        <SvgIcon name="time" isWhite is18px />
                        {dayjs(item.gameCreateAt * 1000).format('MMM D, YYYY')}
                      </div>
                    ) : (
                      <div className="h5-swiper-price-box" />
                    )}
                    {/* <SortInfo isbanner score={item?.score} /> */}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="h5-swiper-not">
            <div className="h5-swiper-not-item" />
            <div className="h5-swiper-not-item" />
          </div>
        )}
        <div className="swiper-pagination right-nft-carousel-recommend-pag" />
      </div>
    ),
    [bannerLists, getBannerLinkUrl]
  );

  const newH5Banner = useMemo(
    () => (
      <Box className="h5-swiper">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs]}
          className="swiper-h5home-banner"
          // slidesPerView={1.2}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
        >
          {bannerLists?.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <Link href={getBannerLinkUrl(item.jumpUrl)} className="newh5-swiper-item">
                <Box
                // sx={{
                //   height: '374px',
                //   position: 'relative',
                // }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '211px',
                      objectFit: 'cover',
                    }}
                    src={item.coverUrl}
                    alt=""
                  />
                  {/* <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      background: isDark
                        ? 'linear-gradient(180deg, rgba(24,25,29,0) 0%, rgba(24,25,29,0) 63%, #18191D 100%)'
                        : 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 63%, #ffffff 100%)',
                    }}
                  /> */}
                  <Box
                    sx={{
                      padding: '20px 16px',
                    }}
                  >
                    <Stack direction="row" alignItems="center">
                      {item.category === 3 && (
                        <Avatar
                          src={item.gameIcon}
                          sx={{
                            borderRadius: '6px',
                          }}
                          variant="rounded"
                        />
                      )}

                      <Typography ml="10px" variant="h4">
                        {item.title}
                      </Typography>
                      {item.category === 3 && <TitleCurreny isnewshow chain={item.chain} />}
                    </Stack>
                    <Typography
                      mt="14px"
                      sx={{
                        // color: 'text.secondary',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                      variant="body1"
                    >
                      {item.brief}
                    </Typography>
                    {/* <Box mt="14px">
                      <PricePercent
                        coinIconUrl={item.coinIconUrl}
                        symbol={item.symbol}
                        price={item.price}
                        change24h={item.change24h}
                      />
                    </Box> */}
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    ),
    [bannerLists, getBannerLinkUrl]
  );

  return (
    <div className="topshow">
      {newH5Banner}
      <div
        className="topshow-swiper"
        // style={{ height: bannerLists?.length > 0 ? '644px' : 'auto' }}
      >
        {/* {notBannerDom2} */}
        {bannerLists?.length > 0 ? newPcbannerDom : notBannerDom2}
      </div>
    </div>
  );
};
