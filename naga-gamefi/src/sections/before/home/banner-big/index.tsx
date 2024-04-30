import React, { useContext, useEffect, useRef, useState } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';
import { useReactPlayer } from 'src/utils/hooks/use-react-player';
import { Context } from '../context';

export default () => {
  const { bannerLists, getBannerLinkUrl } = useContext(Context);
  const { player } = useReactPlayer();
  const [thumbslist, setThumbslist] = useState([]);
  const [slide, setSlide] = useState(0);

  // 获取图片宽高比，长图等高显示完整，宽图宽度100%
  // eslint-disable-next-line react/no-unstable-nested-components
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

  useEffect(() => {
    const thumes: any = [];
    bannerLists.map((item: any, index: any) => {
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
  }, [slide, bannerLists]);

  // 获取图片宽高比，长图等高显示完整，宽图宽度100%
  // eslint-disable-next-line react/no-unstable-nested-components
  const GameDetailSlideImg = ({ src, isnewdetail }: { src: string; isnewdetail?: boolean }) => {
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
  return (
    <Box>
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
        {bannerLists.map((item: any, index: any) => {
          const isVideo = item?.constructor === Object;

          return (
            <div className="main-slide-bg" key={index}>
              {isVideo ? (
                player(item.video, item.cover)
              ) : (
                // <img className="main-slide" src={item} alt="" />
                <GameDetailSlideImg src={item} />
              )}
            </div>
          );
        })}
      </Carousel>
    </Box>
  );
};
