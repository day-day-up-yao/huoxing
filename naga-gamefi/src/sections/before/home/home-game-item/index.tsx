import React, { useMemo, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import dayjs from 'dayjs';

import './index.scss';

// eslint-disable-next-line import/no-named-as-default
import GamesItems from 'src/components/before/games-item';
import TitleHeader from 'src/components/before/title-header';
import GamesitemLoading from 'src/components/before/games-item-loading';
import { paths } from 'src/routes/paths';

export default (props: any) => {
  const {
    Itemlist,
    chainList,
    title,
    link,
    type,
    id,
    chainIcon,
    showNum = 5,
    isMoreBtn,
    isNotDataBox,
  } = props;
  const [gamesitemlist, setGamesitemlist] = useState([]);
  useEffect(() => {
    setGamesitemlist(Itemlist);
  }, [Itemlist]);
  // banner切换按钮
  const bannerNtn = useMemo(
    () => (
      <div className="change-btn">
        <div id={`gameitem-swiper-button-prev-${type}`} className="swiper-button-prev">
          <img src="/images/icon/bannerleft.png" alt="" />
        </div>
        <div id={`gameitem-swiper-button-next-${type}`} className="swiper-button-next">
          <img src="/images/icon/bannerright.png" alt="" />
        </div>
      </div>
    ),
    [type]
  );

  return (
    <>
      <TitleHeader
        text={title}
        leftIcon={chainIcon}
        fontsize={26}
        // leftlink={link}
        // rightchildren={bannerNtn}
        islink={link}
      />
      <div className={`home-gameslist ${gamesitemlist?.length === 0 && 'home-gameslist-not'}`}>
        {gamesitemlist?.length > 0 ? (
          <div
            className="home-gamelist-center"
            // modules={[Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs]}
            // className={`home-gameslist-swiper-${type}`}
            // preventClicks={false}
            // navigation={{
            //   nextEl: `#gameitem-swiper-button-next-${type}`,
            //   prevEl: `#gameitem-swiper-button-prev-${type}`,
            // }}
            // breakpoints={{
            //   320: {
            //     slidesPerView: 1.6,
            //     spaceBetween: 12,
            //   },
            //   768: {
            //     slidesPerView: showNum,
            //     spaceBetween: 20,
            //     // slidesPerGroup: 5
            //   },
            // }}
          >
            {gamesitemlist?.slice(0, 5).map((item: any, index) => {
              let bgurl = item.coverUrl;
              // eslint-disable-next-line @typescript-eslint/no-shadow
              let title = item.name;
              // let chain = item.chain;
              let { brief } = item;
              // eslint-disable-next-line @typescript-eslint/no-shadow
              let link = `${paths.game}/${item.id}`;
              if (id === 0) {
                link = `${paths.game}/${item.gameProjectId}`;
                title = item.gameProjectName;
                brief = item.adviseReason;
                bgurl = item.coverUrl;
              }
              if (item.link) {
                // eslint-disable-next-line prefer-destructuring
                link = item.link;
              }

              // 游戏类别
              let category = '';
              if (item.category) {
                category = item.category.replace(',', '·');
              }

              // 游戏所属链
              const itemChainList = [];
              if (item.chain && chainList) {
                const defaultList = item.chain.split(',') || [];
                for (let i = 0; i < chainList.length; i += 1) {
                  const chainListItem = chainList[i];
                  for (let j = 0; j < defaultList.length; j += 1) {
                    const defaultItem = defaultList[j];
                    if (
                      chainListItem.name.toLowerCase() === defaultItem.toLowerCase() ||
                      chainListItem.showName.toLowerCase() === defaultItem.toLowerCase()
                    ) {
                      itemChainList.push(chainListItem);
                      break;
                    }
                  }
                }
              }

              // 首页评分暂时隐藏
              //   const sort = item.score;

              // 首页token
              const tokenData = {
                symbol: item.symbol,
                coinIconUrl: item.coinIconUrl,
                price: item.price,
                change24h: item.change24h,
              };
              // 入库时间
              const time = item?.gameCreateAt
                ? dayjs(item.gameCreateAt * 1000).format('MMM D, YYYY')
                : '';

              return (
                <div key={index} className="home-gamelist-center-item card-shadow">
                  <GamesItems
                    picurl={bgurl}
                    title={title}
                    category={category}
                    link={link}
                    type={type}
                    twitterChange={item?.twitterChange}
                    discordFollowNum={item?.discordFollowNum}
                    discordChange={item.discordChange}
                    // category={item?.category}
                    chain={item?.chain}
                    price={item?.price}
                    change24h={item.change24h}
                    twitterFollowNum={item.twitterFollowNum}
                    //   sort={sort}
                    time={time}
                    tokenData={tokenData}
                    chainList={itemChainList}
                    isNotDataBox={isNotDataBox}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          Array.from({ length: showNum }).map((item, index) => <GamesitemLoading key={index} />)
        )}
        {/* {bannerNtn} */}
      </div>
    </>
  );
};
