import React, { useContext, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { isArray } from 'lodash';
import { paths } from 'src/routes/paths';
import { Link, useLink } from 'src/components/link';
import { Context } from '../context';
import './index.scss';
import 'swiper/scss';
import 'node_modules/swiper/modules/pagination.scss';

export default () => {
  const { linkTo } = useLink();
  const { questbannerlist } = useContext(Context);
  // console.log(questbannerlist)
  const getRewardtypeDom = useCallback((item: any) => {
    if (item?.rewardType === 1) {
      return (
        <div className="task-explore-center-list-con-item-con-bottom-set-item-token">
          <div className="item-token-num">{item.rewardNum}</div>
          <div className="item-token-curreny">{item.rewardToken.toUpperCase()}</div>
        </div>
      );
    }
    if (item?.rewardType === 2) {
      return 'NFT';
    }
    if (item?.rewardType === 3) {
      return 'Whitelist';
    }
  }, []);
  return (
    <div className="task-explore-banner">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className="task-explore-center-swiper"
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
      >
        {questbannerlist && isArray(questbannerlist) && questbannerlist.length > 0
          ? questbannerlist.map((item, index) => {
              if (!item) return undefined;
              return (
                <SwiperSlide key={index}>
                  <div
                    className="task-explore-banner-item"
                    onClick={() => {
                      linkTo(`${paths.taskDetail}/${item.id}`);
                    }}
                  >
                    <div className="task-explore-banner-left">
                      <div className="task-explore-banner-left-top">
                        <img
                          className="task-explore-banner-left-top-builder"
                          src={
                            item?.userAvatarUrl
                              ? item.userAvatarUrl
                              : '/images/bigimg/5263267846078567677.png'
                          }
                          alt=""
                        />
                        <span>{item?.userName}</span>
                        {/* <img className="task-explore-banner-left-top-v" src={vimg} alt="" /> */}
                      </div>
                      <div className="task-explore-banner-left-desc">{item?.title}</div>
                      <div className="task-explore-banner-left-whitelist">
                        <div className="task-explore-banner-left-whitelist-item">
                          {getRewardtypeDom(item)}
                        </div>
                      </div>
                      <div className="task-explore-banner-left-btn">
                        <Link href={`${paths.taskDetail}/${item?.id}`}>JOIN</Link>
                      </div>
                    </div>
                    <div className="task-explore-banner-right">
                      <img
                        src={
                          item?.picUrl && item?.picUrl === 'string'
                            ? '/images/bigimg/bannervideo.png'
                            : item?.picUrl
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          : undefined}
      </Swiper>
    </div>
  );
};
