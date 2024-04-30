import React, { useContext, useState, useMemo, useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames';
import { Carousel } from 'react-responsive-carousel';

import './index.scss';

import NotData from 'src/components/before/not-data';
import { useReactPlayer } from 'src/utils/hooks/use-react-player';
import { Context } from '../context';
// import SvgIcon from '../../../components/SvgIcon'
// import useYouTuVideo from '../../../public/hooks/useYouTuVideo'

// 获取图片宽高比，长图等高显示完整，宽图宽度100%
const GameDetailSlideImg = ({ src, isnewdetail }: { src: string; isnewdetail: boolean }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isH, setIsH] = useState(false);

  // 通过实例的 natural 参数获取真实比例
  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      img.onload = () => {
        if (Number(img.naturalWidth) < Number(img.naturalHeight)) {
          setIsH(true);
        }
      };
    }
  }, [src]);
  return (
    <img
      className={classNames('main-slide', { isH, 'main-slide-new': isnewdetail })}
      ref={imgRef}
      src={src}
      alt=""
    />
  );
};

// 获取图片宽高比，长图等高显示完整，宽图宽度100%
const ThumesitemDom = ({
  src,
  active,
  onClick,
}: {
  src: string;
  active: boolean;
  onClick: () => void;
}) => {
  const [isH, setIsH] = useState(false);

  // 通过创建新的 Image对象 获取真实比例
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (Number(img.width) < Number(img.height)) {
        setIsH(true);
      }
    };
  }, [src]);

  return (
    <div
      className={classNames('thumb-silde', { active, isH })}
      style={{
        backgroundImage: `url(${src})`,
      }}
      onClick={onClick}
    >
      <div className="shadow-bg" />
    </div>
  );
};

type GameDetailTopProps = {
  isnewdetail?: boolean;
};

const GameDetailTop = (props: GameDetailTopProps) => {
  const { isnewdetail } = props;
  const { t, detail } = useContext(Context);
  // const { isYouTuVideo, player } = useYouTuVideo()
  const { player } = useReactPlayer();
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [slide, setSlide] = useState(0);
  const [thumbslist, setThumbslist] = useState([]);

  // 游戏Swiper ———— 显示数据
  const swiperDataList = useMemo(() => {
    const videoList =
      detail?.videoUrl && detail?.videoUrl.includes('[') && detail?.videoUrl !== '[]'
        ? JSON.parse(detail?.videoUrl)
        : [];
    const picList =
      detail?.picUrl && detail?.picUrl.includes('[') && detail?.picUrl !== '[]'
        ? JSON.parse(detail?.picUrl)
        : [];
    const dataList: any = [];
    videoList.map((item: any) => dataList.push(item));
    picList.map((item: any) => dataList.push(item));

    return dataList;
  }, [detail]);

  // useMemo(() => {
  //     const thumes = []
  //     swiperDataList.map((item, index) => {
  //         const isVideo = item?.constructor === Object
  //         const thumesitemdom = (
  //             <div
  //                 key={index}
  //                 className={classNames('thumb-silde', { active: slide === index })}
  //                 style={{
  //                     backgroundImage: `url(${isVideo ? item.cover : item})`
  //                 }}
  //                 onClick={() => setSlide(index)}
  //             >
  //                 <div className="shadow-bg" />
  //             </div>
  //         )
  //         thumes.push(thumesitemdom)
  //         setThumbslist(thumes)
  //     })
  // }, [slide])
  useEffect(() => {
    const thumes: any = [];
    swiperDataList.map((item: any, index: any) => {
      const isVideo = item?.constructor === Object;
      thumes.push(
        <ThumesitemDom
          key={index}
          active={slide === index}
          src={isVideo ? item.cover : item}
          onClick={() => setSlide(index)}
        />
      );
    });

    setThumbslist(thumes);
  }, [slide, swiperDataList]);

  const [gameDetailBanner, setGameDetailBanner] = useState<any>();
  useEffect(() => {
    setGameDetailBanner(
      <Carousel
        className="games-detail-banner"
        animationHandler="fade"
        showThumbs
        showStatus={false}
        showIndicators={false}
        thumbWidth={120}
        onChange={(a) => {
          setSlide(a);
        }}
        renderThumbs={() => thumbslist}
      >
        {swiperDataList.map((item: any, index: any) => {
          const isVideo = item?.constructor === Object;

          return (
            <div className="main-slide-bg" key={index}>
              {isVideo ? (
                // isYouTuVideo(item.video) ? (
                //     player(item.video, item.cover)
                // ) : (
                //     <video
                //         src={item.video}
                //         className="main-slide"
                //         poster={item.cover}
                //         preload="auto"
                //         autoPlay="autoplay"
                //         muted
                //         controls
                //         loop
                //     />
                // )
                player(item.video, item.cover, isnewdetail)
              ) : (
                // <img className="main-slide" src={item} alt="" />
                <GameDetailSlideImg src={item} isnewdetail={isnewdetail as boolean} />
              )}
            </div>
          );
        })}
      </Carousel>
    );
  }, [isnewdetail, player, swiperDataList, thumbslist]);

  // 游戏Swiper ———— 主显示
  // const swiperBox = useMemo(
  //     () => (
  //         <Swiper
  //             // loop
  //             preventClicks={false}
  //             effect="fade"
  //             className="swiper-game-banner"
  //             thumbs={{
  //                 swiper: thumbsSwiper
  //             }}
  //             onSlideChange={(e) => {
  //                 // console.log('是蛇魔e', e)
  //                 setSlide(e.realIndex)
  //             }}
  //             navigation={{
  //                 nextEl: '#btn-next',
  //                 prevEl: '#btn-prev'
  //             }}
  //         >
  //             {swiperDataList.map((item, index) => {
  //                 const isVideo = item?.constructor === Object

  //                 return (
  //                     <SwiperSlide key={index}>
  //                         {isVideo ? (
  //                             isYouTuVideo(item.video) ? (
  //                                 player(item.video, item.cover)
  //                             ) : (
  //                                 <video
  //                                     src={item.video}
  //                                     className="main-slide"
  //                                     poster={item.cover}
  //                                     preload="auto"
  //                                     autoPlay="autoplay"
  //                                     muted
  //                                     controls
  //                                     loop
  //                                 />
  //                             )
  //                         ) : (
  //                             <img className="main-slide" src={item} />
  //                         )}
  //                     </SwiperSlide>
  //                 )
  //             })}
  //         </Swiper>
  //     ),
  //     [swiperDataList, thumbsSwiper, slide, setSlide, isYouTuVideo, player]
  // )

  // 游戏Swiper ———— 切换列表
  // const swiperThumbs = useMemo(
  //     () => (
  //         <Swiper
  //             preventClicks={false}
  //             className="swiper-game-smallbanner"
  //             watchSlidesProgress={true}
  //             onSwiper={(swiper) => setThumbsSwiper(swiper)}
  //             slidesPerView="auto"
  //             spaceBetween={10}
  //             freeMode={true}
  //             centerInsufficientSlides={true}
  //         >
  //             {swiperDataList.map((item, index) => {
  //                 const isVideo = item?.constructor === Object

  //                 return (
  //                     <SwiperSlide key={index}>
  //                         <div
  //                             className={classNames('thumb-silde', { active: slide === index })}
  //                             style={{
  //                                 backgroundImage: `url(${isVideo ? item.cover : item})`
  //                             }}
  //                             onClick={() => setSlide(index)}
  //                         >
  //                             <div className="shadow-bg" />
  //                         </div>
  //                     </SwiperSlide>
  //                 )
  //             })}
  //         </Swiper>
  //     ),
  //     [swiperDataList, slide, setSlide, setThumbsSwiper]
  // )

  // 游戏Swiper前进后退按钮 ———— 切换列表
  // const swiperThumbsNavigation = useMemo(
  //     () => (
  //         <div className="thumb-navigation">
  //             <div className="swiper-button-prev" id="btn-prev">
  //                 <SvgIcon name="btn_arrow_right" />
  //             </div>
  //             <div className="swiper-button-next" id="btn-next">
  //                 <SvgIcon name="btn_arrow_right" />
  //             </div>
  //         </div>
  //     ),
  //     []
  // )

  // 游戏显示
  const centerDom = useMemo(
    () =>
      swiperDataList.length > 0 ? (
        <div className="game-detail-top-swiper-box">
          {/* {swiperBox}
                    {swiperThumbs}
                    {swiperThumbsNavigation} */}
          {gameDetailBanner}
        </div>
      ) : (
        <NotData className="game-detail-top-no-swiper" title={t('public_not_data2')} />
      ),
    [swiperDataList.length, gameDetailBanner, t]
  );

  return (
    <div className="game-detail-top">
      <div className="game-detail-top-center">{centerDom}</div>
    </div>
  );
};

export default GameDetailTop;
