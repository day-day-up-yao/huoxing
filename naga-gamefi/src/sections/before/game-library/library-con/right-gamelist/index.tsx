import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
// import * as math from 'mathjs'

import './index.scss';
import SvgIcon from 'src/components/svg-icon';
import TitleCurreny from 'src/components/before/title-currency';
// import SortInfo from 'src/components/before/sort-info';
import ImageLazy from 'src/components/before/image-lazy';
import Pagination from 'src/components/before/pagination';
import { gamesortList } from 'src/utils/public/datas';
import MorePage from 'src/components/before/more-page';
import { paths } from 'src/routes/paths';
import { Link } from 'src/components/link';
import NotData from 'src/components/before/not-data';
import { Context } from '../../context';

export default (props: any) => {
  const { t } = useTranslation();
  const { topList, getDelete, getPopup, allnum } = props;
  // console.log(topList, 222);
  const { gameInfo, loading, getPages, pages, supportPlatfrom, getStatusInfo, getSortfn } =
    useContext(Context);
  const [moresize, setMoresize] = useState(pages);
  const [sortinfo, setSortinfo] = useState({
    type: 1,
    title: t('gamelibrary_newest'),
  });
  const libraryDom = useRef<any>();
  const [downflag, setDownflag] = useState(false);
  // 点击其他地方隐藏下拉列表
  const hideAllMenu = useCallback(() => {
    setDownflag(false);
  }, []);
  useEffect(() => {
    document.addEventListener('click', hideAllMenu);
  }, [hideAllMenu]);
  return (
    <div className="library-right" ref={libraryDom}>
      <div className="screening-show">
        <div
          className="show-total-btn"
          onClick={() => {
            getPopup(true);
          }}
        >
          <span>
            {t('gamelibrary_screen')} ({allnum})
          </span>
          <img src="/images/icon/totalselect.png" alt="" />
        </div>
        <div className="screening-show-left">
          <div className="screening-show-left-con">
            {topList.map((item: any, index: number) => (
              <div className="left-slected-item" key={index}>
                <span>{t(item.name)}</span>
                <div
                  onClick={() => {
                    getDelete(item);
                  }}
                >
                  <SvgIcon name="closebtn" />
                </div>

                {/* <img
                  src="/images/icon/closeicon.webp"
                  alt=""
                  onClick={() => {
                    getDelete(item);
                  }}
                /> */}
              </div>
            ))}
          </div>
        </div>
        <div className="screening-show-right">
          <div
            className="show-right-con"
            onClick={(e) => {
              setDownflag(!downflag);
              e.nativeEvent.stopImmediatePropagation();
            }}
          >
            <span style={{ paddingRight: 10 }}>{sortinfo.title}</span>
            <SvgIcon
              // className={classNames('header-fold-icon', { fold: !foldList[foldIndex] })}
              name="pointdown"
            />
            {/* <img src="/images/icon/pointdown.png" alt="" /> */}
          </div>
          {downflag && (
            <div className="right-down-select">
              {gamesortList.map((item, index) => (
                <div
                  className="down-select-item"
                  key={index}
                  onClick={() => {
                    setSortinfo({
                      type: index,
                      title: t(item.name),
                    });
                    getSortfn({
                      sortby: item.type,
                      sort: item.sort,
                    });
                    setDownflag(false);
                  }}
                >
                  <div className="selected-img">
                    {sortinfo.type === index && <img src="/images/icon/selecting.png" alt="" />}
                  </div>
                  <span>{t(item.name)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="library-gamelist">
        {gameInfo.inforList.length > 0 ? (
          gameInfo.inforList.map((item: any, index: number) => {
            // 游戏类别处理
            let supportname: any = item.category;
            const supportlist = item.category.split(',');
            let supportnum: any = '';
            if (supportlist.length > 2) {
              supportnum = supportlist.length - 3;
              supportname = supportlist.slice(0, 3).toString();
            }
            // 设备和链中间的点是否显示
            let drop = true;
            if (supportPlatfrom(item.supportPlatform).length > 0) {
              drop = true;
            } else {
              drop = false;
            }
            return (
              <Link href={`${paths.game}/${item.id}`} key={index}>
                <div className="library-gamelist-item">
                  <div className="item-top">
                    <div className="item-top-img">
                      <ImageLazy
                        height="100%"
                        src={
                          item?.coverUrl
                            ? item?.coverUrl
                            : item?.picUrl && item?.picUrl !== '[]' && JSON.parse(item?.picUrl)[0]
                        }
                      />
                    </div>
                    {/* <SortInfo score={item.score} /> */}
                  </div>
                  <div className="item-bottom">
                    <TitleCurreny title={item.name} size="only" />
                    <div className="support-list">
                      <div className="support-list-name">{supportname}</div>
                      {supportnum !== '' && supportnum !== 0 && (
                        <div className="support-list-num">+{supportnum}</div>
                      )}
                    </div>
                    <div className="item-platfrom">
                      {supportPlatfrom(item.supportPlatform).length > 0 && (
                        <div className="platfrom-item">
                          {supportPlatfrom(item.supportPlatform).map((name: any, idex: number) => (
                            // <img src={icon} alt="" key={idex}/>
                            <SvgIcon name={name} key={idex} notmouse marginstyle />
                          ))}
                        </div>
                      )}
                      {drop && <p>·</p>}
                      <TitleCurreny
                        // title={item.name}
                        chain={item.chain}
                        size="onlyimg"
                        //   islibrary
                      />
                    </div>
                    <div className="item-bottom-down">
                      <div className="item-staus">
                        <img src={getStatusInfo(item.developStatus)?.icon} alt="" />
                        <div>{getStatusInfo(item.developStatus)?.name?.toUpperCase()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <div className="library-gamelist-item library-item-not" key={index}>
              <div className="item-top  item-top-not all-loading-square-bg-c3" />
              <div className="item-bottom">
                <div className="title-curreny title-curreny-not all-loading-bg-c3" />
                <div className="support-list support-list-not all-loading-bg-c3" />
                <div className="item-platfrom not-item-platfrom all-loading-bg-c3" />
                <div className="item-bottom-down not-item-bottom-down all-loading-bg-c3" />
              </div>
            </div>
          ))
        ) : (
          <NotData title={t('public_not_data')} />
        )}
      </div>
      <MorePage
        getMorefunction={() => {
          // console.log(moresize + 1, moresize)
          getPages(moresize + 1);
          setMoresize(moresize + 1);
        }}
      />
      {gameInfo.inforList.length > 0 && (
        <Pagination
          totalData={gameInfo.recordCount}
          pageSize={40}
          pageChange={(curPage: any) => {
            getPages(curPage);

            // 回到顶部
            window.scroll({
              top: libraryDom.current.offsetTop - 72,
              behavior: 'smooth',
            });
          }}
        />
      )}
    </div>
  );
};
