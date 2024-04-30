import React, { useMemo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/scss';
import './index.scss';

import { getPosType } from 'src/utils/public/index';
import SvgIcon from 'src/components/svg-icon';
import { Link } from 'src/components/link';
import { paths } from 'src/routes/paths';

const bannnerlist = [
  '/images/bigimg/downlaodbannner1.png',
  '/images/bigimg/downlaodbannner2.png',
  '/images/bigimg/downlaodbannner3.png',
];
export default () => {
  const { t } = useTranslation();

  const [computeType, setComputeType] = useState(0);

  useEffect(() => {
    setComputeType(getPosType());
  }, []);
  const CenterLeftBtn = useMemo(
    () => (
      <div className="download-topinfo-center-left-btn">
        <div className="download-topinfo-center-btn">
          <div className="download-topinfo-center-btn-text">
            {t('download_btn_desc')}
            {computeType === 1 && <SvgIcon name="windows" />}
            {computeType === 2 && <SvgIcon name="mac" />}
          </div>
          <Link href={paths.home}>{t('download_btn_desc1')}</Link>
          {/* <img src="" alt="" /> */}
          <div className="download-comingsoon">
            <img src="/images/bigimg/download_coming.png" alt="" />
          </div>
        </div>
        <div className="download-support">
          <p>{t('download_support')}</p>
          <div className="download-support-icon">
            {computeType !== 1 && <SvgIcon name="windows" />}
            <SvgIcon name="linux" />
            <SvgIcon name="web" />
            {computeType !== 2 && <SvgIcon name="mac" />}
          </div>
        </div>
      </div>
    ),
    [computeType, t]
  );
  const CenterLeft = useMemo(
    () => (
      <div className="download-topinfo-center-left">
        <div className="download-topinfo-center-logo">
          <img src="/images/bigimg/downloadlogo.png" alt="" />
        </div>
        <div className="download-topinfo-center-text">
          {t('download_clinent_get')} <span>{t('download_web3_game')}</span>
        </div>
        {CenterLeftBtn}
      </div>
    ),
    [CenterLeftBtn, t]
  );

  const RightBanner = useMemo(
    () => (
      <div className="download-topinfo-center-right">
        <div className="download-topinfo-center-right-banner">
          <div className="download-topinfo-center-right-banner-con">
            <Swiper
              modules={[Autoplay, Scrollbar]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="download-top-bannner"
              loop
            >
              {bannnerlist.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="download-topinfo-center-right-banner-slide">
                    <img src={item} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="download-topinfo-center-right-banner-con-bg" />
          </div>
        </div>
        {CenterLeftBtn}
      </div>
    ),
    [CenterLeftBtn]
  );
  return (
    <div className="download-topinfo">
      <div className="download-topinfo-center">
        {CenterLeft}
        {RightBanner}
      </div>
    </div>
  );
};
