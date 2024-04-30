import React, { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'rsuite';
import { memoize } from 'proxy-memoize';
import { useLink } from 'src/components/link';
import RenderCenter from 'src/components/before/render-center';
import TitleHeader from 'src/components/before/title-header';
import SvgIcon from 'src/components/svg-icon';
import { toast } from 'src/components/toast';
import { paths } from 'src/routes/paths';
import { RootState } from 'src/models/store';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import GameDataTop from 'src/components/before/game-data-top';
import ScreenSelect from './screen-select';
import AllGame from './all-game';
import './index.scss';

const selectDatas = memoize((state: RootState) => ({
  gamelist: state.common.gamelist,
  librarydata: state.common.librarydata,
  dailyVolume: state.overview.dailyVolume,
  dailyTransactions: state.overview.dailyTransactions,
  dailyNumberOfGamers: state.overview.dailyNumberOfGamers,
}));
export default () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { linkTo } = useLink();
  const { gamelist, dailyVolume, dailyTransactions, dailyNumberOfGamers, librarydata } =
    useSelector((state: RootState) => selectDatas(state));
  const [allgames, setAllgames] = useState(gamelist);
  const [currentpage, setCurrentpage] = useState(1); // 当前页数
  const [categorytype, setCategorytype] = useState('');
  const [chain, setChain] = useState('');
  const [time, setTime] = useState('24h');
  const [sort, setSort] = useState('desc');
  const [sortby, setSortby] = useState('market_cap');
  // useEffect(() => {
  //     getGamelists(currentpage)
  // }, [chain, time])
  // 获取游戏列表
  const { isPc } = useBreakPoint();

  // 通过排序获取游戏列表
  const getGamelists = useCallback(
    (category: any, size: any, chainItem: any, sortbyItem: any, sorttypeItem: any) => {
      dispatch.common
        .getGamelist({
          params: {
            category,
            chain: chainItem,
            sortBy: sortbyItem,
            sort: sorttypeItem,
            currentPage: size,
            pageSize: 50,
          },
        })
        .then((res: any) => {
          if (res.code === 0) {
            if (isPc) {
              setAllgames(res.data);
            } else if (size > 1) {
              const h5data = {
                inforList: [],
                recordCount: allgames.recordCount,
              };
              h5data.inforList = allgames.inforList.concat(res.data.inforList);
              setAllgames(h5data);
            } else {
              setAllgames(res.data);
            }
          } else {
            toast.error(res.msg);
          }
        });
    },
    [allgames.inforList, allgames.recordCount, dispatch.common, isPc]
  );

  // 点击跳转 排行榜 按钮事件
  const onBtnOverviewClick = useCallback(() => {
    linkTo(paths.overview);
  }, [linkTo]);

  // 顶部标题
  const headerDom = useMemo(
    () => (
      <TitleHeader
        className="game-ranking-title"
        text={t('ranking_title')}
        rightchildren={
          <Button
            className="game-ranking-type-btn"
            appearance="ghost"
            onClick={() => onBtnOverviewClick()}
            endIcon={<SvgIcon name="btn_arrow_right_line" />}
          >
            {t('overview_title')}
          </Button>
        }
      />
    ),
    [onBtnOverviewClick, t]
  );

  // 顶部统计数据
  //   const gameDataTopDom = useMemo(
  //     () => (
  //       <GameDataTop
  //         dailyVolume={dailyVolume}
  //         dailyTransactions={dailyTransactions}
  //         dailyNumberOfGamers={dailyNumberOfGamers}
  //       />
  //     ),
  //     [dailyNumberOfGamers, dailyTransactions, dailyVolume]
  //   );

  // 排行榜
  const rankingDom = useMemo(
    () => (
      <div className="game-ranking-box">
        <ScreenSelect
          allotherinfo={librarydata}
          getchain={(chainItem: any) => {
            setChain(chainItem);
            getGamelists(categorytype, 1, chainItem, sortby, sort);
            setCurrentpage(1);
          }}
          getCategory={(type: any, name: any) => {
            if (type === 0) {
              setCategorytype(name);
              getGamelists(name, 1, chain, sortby, sort);
            }
            if (type === 1) {
              setChain(name);
              getGamelists(categorytype, 1, name, sortby, sort);
            }
            if (type === 2) {
              setSortby(`active_num_${name}`);
              getGamelists(categorytype, 1, chain, `active_num_${name}`, sort);
            }
          }}
          getTime={(timeItem: any) => {
            setTime(timeItem);
            getGamelists(categorytype, 1, chain, `active_num_${timeItem}`, sort);
            setCurrentpage(1);
          }}
        />
        <AllGame
          gamelists={allgames}
          current={currentpage}
          times={time}
          selectPage={(size: any) => {
            setCurrentpage(size);
            getGamelists(categorytype, size, chain, sortby, sort);
          }}
          getSort={(sortbyItem: any, sortItem: any) => {
            setSort(sortItem);
            setSortby(sortbyItem);
            getGamelists(categorytype, 1, chain, sortbyItem, sortItem);
            console.log(sortbyItem, sortItem);
          }}
        />
      </div>
    ),
    [librarydata, allgames, currentpage, time, getGamelists, categorytype, sortby, sort, chain]
  );

  return (
    <RenderCenter
      children={
        <div className="game-list-page">
          {headerDom}
          {/* {gameDataTopDom} */}
          {rankingDom}
        </div>
      }
    />
  );
};
