import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

import { useLink } from 'src/components/link';
import Currenylist from 'src/components/before/title-currency';
import Pagination from 'src/components/before/pagination';
import ImageLazy from 'src/components/before/image-lazy';
import MorePage from 'src/components/before/more-page';
import { formattingNum } from 'src/utils/public/index';
import { paths } from 'src/routes/paths';
import AmountRise from './amount-rise';

export default (props: any) => {
  const { linkTo } = useLink();
  const { t } = useTranslation();
  const { gamelists, selectPage, current, times, isHome, getSort } = props;
  const [sortType, setSortType] = useState('desc');
  const [selecttype, setSelecttype] = useState(0);
  const [morepage, setMorepage] = useState(current);
  useEffect(() => {
    setSortType('desc');
    setSelecttype(0);
  }, [times]);
  // 滚动加载更多
  // useEffect(() => {
  //     const scrollFunc = windowScroll((res) => {
  //         console.log(res)
  //         // let currentPage = idPageList[nowTypeId]
  //         // if (res !== 'down' || currentPage > 3 || isLoading.current) return false

  //         const $footerWrapper = document.getElementById('footerWrapper')
  //         if (scrollOffset().top + windowOffset().height > elementOffset($footerWrapper).top + 110) {
  //             console.log(scrollOffset().top, windowOffset().height, elementOffset($footerWrapper).top)
  //             console.log(2222)
  //         } else {
  //             console.log(1111)
  //         }
  //     })
  //     return () => {
  //         window.removeEventListener('scroll', scrollFunc, false)
  //     }
  // }, [])
  const sortlist = [
    {
      name: 'Mkt Cap',
      sort: `market_cap`,
      flag: false,
      type: 'fourth',
    },
    {
      name: '24H',
      sort: `change_24h`,
      flag: false,
      type: 'fourth',
    },
    {
      name: 'Token',
      sort: 'price',
      flag: false,
      type: 'fiveth',
    },
    {
      name: '24H',
      sort: 'change_24h',
      flag: false,
      type: 'fiveth',
    },
    {
      name: 'Volume',
      sort: 'volume_24h',
      flag: false,
      type: 'sixth',
    },
    {
      name: '24H',
      sort: 'volume_change_24h',
      flag: false,
      type: 'sixth',
    },
    // {
    //     name: t('ranking_numberfans'),
    //     sort: 'community_num',
    //     flag: false,
    //     type: 'seventh'
    // },
    // {
    //     name: '24H',
    //     sort: 'community_num_change_24h',
    //     flag: false,
    //     type: 'seventh'
    // }
  ];
  // 侧滑固定左侧信息 只有移动端显示
  const leftFix = useMemo(
    () => (
      <div className="left-fix">
        <div className="left-fix-title">
          <div className="left-fix-firstitem">#</div>
          <div className="left-fix-seconditem">{t('ranking_gamename')}</div>
        </div>
        <div className="left-fix-gamelist">
          {gamelists?.inforList?.map((item: any, index: number) => (
            <div className="left-fix-gamelist-item" key={index}>
              <div className="left-fix-firstitem">{index + 1}</div>
              <div className="left-fix-seconditem">
                <div className="left-fix-seconditem-img">
                  <ImageLazy src={item.iconUrl} />
                </div>
                <div className="left-fix-seconditem-right">
                  <div className="left-fix-seconditem-name">{item.name}</div>
                  <span>{item.symbol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    [gamelists.inforList, t]
  );

  return (
    <div className="allgames-con">
      <div className="allgames-list-con">
        <div className="all-game">
          <div className="h5-games">
            <div className="game-title">
              <div className="first-column">#</div>
              <div className="second-column">{t('ranking_gamename')}</div>
              <div className="threeth-column">{t('ranking_websitnet')}</div>
              {sortlist.map((item, index) => (
                <div
                  className={`others-item others-item-${item.type}`}
                  key={index}
                  onClick={() => {
                    if (isHome) return;
                    if (selecttype === index) {
                      if (sortType === 'asc') {
                        getSort(item.sort, 'desc');
                        setSortType('desc');
                      } else {
                        getSort(item.sort, 'asc');
                        setSortType('asc');
                      }
                    } else {
                      getSort(item.sort, 'desc');
                      setSortType('desc');
                    }
                    setSelecttype(index);
                  }}
                >
                  <span>{item.name}</span>
                  {!isHome && (
                    <div className="sort-img">
                      <img
                        src={`/images/icon/${
                          sortType === 'asc' && selecttype === index ? 'sortedup' : 'sortup'
                        }.png`}
                        alt=""
                      />
                      <img
                        src={`/images/icon/${
                          sortType === 'desc' && selecttype === index ? 'sorteddown' : 'sortdown'
                        }.png`}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="game-list">
              {gamelists?.inforList?.map((item: any, index: number) => (
                // const gametype = item.category ? item.category.split(',')[0] : 'other'
                <div
                  className="ganem-item"
                  key={index}
                  onClick={() => {
                    linkTo(`${paths.game}/${item.id}`);
                  }}
                >
                  <div className="first-column h5-one-column">{index + 1}</div>
                  <div className="first-column pc-one-column">{`${
                    index + 1 + (current - 1) * 50
                  }`}</div>
                  <div className="second-column">
                    <div className="game-icon">
                      <ImageLazy src={item.iconUrl} />
                    </div>
                    {/* <img src={item.iconUrl} alt=""/> */}
                    <div className="second-right">
                      <div className="game-name">{item.name}</div>
                      <span>{item.symbol}</span>
                      {/* {gametype.length > 0 && <div className='game-rpg'>{gametype}</div>} */}
                    </div>
                  </div>
                  <div className="threeth-column">
                    <Currenylist size="medium" chain={item.chain} />
                  </div>
                  <div className="others-item others-item-fourth">
                    {item.marketCap ? `$${formattingNum(item.marketCap)}` : '--'}
                  </div>
                  <div className="others-item others-item-fourth">
                    <AmountRise percent={item[`change${times}`]} />
                  </div>
                  <div className="others-item others-item-fiveth">
                    {item.price
                      ? Number(item.price) < 0.001
                        ? '$ <0.001'
                        : `$${formattingNum(item.price, false, 3)}`
                      : '--'}
                    {/* <span>{item.symbol}</span> */}
                  </div>
                  <div className="others-item others-item-fiveth">
                    <AmountRise percent={item[`change${times}`]} />
                  </div>
                  <div className="others-item others-item-sixth">
                    {formattingNum(item[`volume${times}`])}
                  </div>
                  <div className="others-item others-item-sixth">
                    <AmountRise percent={item[`volumeChange${times}`]} />
                  </div>
                  {/* <div className="others-item others-item-seventh">
                                            {formattingNum(item.communityNum)}
                                        </div>
                                        <div className="others-item others-item-seventh">
                                            <AmountRise percent={item['communityNumChange' + times]} />
                                        </div> */}
                  {/* <div className="others-item">
                                    {formattingNum(item['activeNum' + times])}
                                    <AmountRise
                                        amount={formattingNum(item['activeNum' + times])}
                                        percent={item['activeNumChange' + times]}
                                    />
                                </div> */}
                </div>
              ))}
            </div>
            {gamelists?.inforList?.length > 0 && !isHome && (
              <Pagination
                totalData={gamelists.recordCount}
                pageSize={10}
                pageChange={(curPage: any) => {
                  selectPage(curPage);
                }}
              />
            )}
          </div>
        </div>
        {!isHome && leftFix}
      </div>
      {!isHome && (
        <MorePage
          getMorefunction={() => {
            selectPage(morepage + 1);
            setMorepage(morepage + 1);
          }}
        />
      )}
    </div>
  );
};
