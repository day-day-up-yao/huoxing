import React, { createContext, useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { trim } from 'lodash';
import { memoize } from 'proxy-memoize';
import { useSearchParams } from 'next/navigation';
import { platfromlist, searchDetailTabs, stauslist } from 'src/utils/public/datas';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';

import { toast } from 'src/components/toast';
import { RootState } from 'src/models/store';
import { searchMultiKey } from 'src/fetchs/common';

const selectDatas = memoize((state: RootState) => ({
  searchGame: state.common.searchGame,
  searchArticle: state.common.searchArticle,
  searchStrategy: state.common.searchStrategy,
}));
const iconPrepage = '/images/icon/prepage.png';
const iconNextpage = '/images/icon/nextpage.png';

export const Context = createContext({} as any);
export default ({ children }: any) => {
  const { t } = useTranslation();
  const searchs = useSearchParams();
  const keyword = searchs?.get('keyword');

  const dispatch = useDispatch();
  const { linkTo } = useLink();
  const { searchGame, searchArticle, searchStrategy } = useSelector((state: RootState) =>
    selectDatas(state)
  );
  const { data: searchMulti } = useSWR(searchMultiKey);

  const [inputValue, setInputValue] = useState(keyword); // 搜索值
  const [nowTab, setNowTab] = useState(1); // 当前页签 1.全部 2.游戏 3.资讯 4.攻略
  const [gameList, setGameList] = useState(searchGame); // 游戏 列表
  const [newsList, setNewsList] = useState(searchArticle); // 新闻资讯 列表
  const [strategyList, setStrategyList] = useState(searchStrategy); // 攻略 列表

  // 初始化参数
  const gameFirst = useRef(0);
  useEffect(() => {
    if (gameFirst.current !== 0) return;
    setGameList(searchGame);
    gameFirst.current = 0;
  }, [searchGame]);

  const newsFirst = useRef(0);
  useEffect(() => {
    if (newsFirst.current !== 0) return;
    setNewsList(searchArticle);
    newsFirst.current = 0;
  }, [searchArticle]);

  const strategyFirst = useRef(0);
  useEffect(() => {
    if (strategyFirst.current !== 0) return;
    setStrategyList(searchStrategy);
    strategyFirst.current = 0;
  }, [searchStrategy]);

  // 设置搜索值
  const onInputValueChange = useCallback((e: any) => {
    setInputValue(e);
  }, []);

  // 清空搜索值
  const onBtnClearValueClick = useCallback(() => {
    setInputValue('');
  }, []);

  // 键盘回车事件
  const onKeySearchEnterUp = useCallback(
    (e: any) => {
      if ((e.keyCode && e.keyCode !== 13) || trim(inputValue || '') === '') return;
      linkTo(`${paths.search}/${inputValue}`);
    },
    [inputValue, linkTo]
  );

  // 点击切换tab按钮事件
  const onBtnChangeTabClick = useCallback((id: any) => {
    setNowTab(id);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // 获取支持设备
  const getSupportPlatform = useCallback((supportPlatform: any) => {
    const platfroms = supportPlatform.split(',');
    const getplatform = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < platfroms.length; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < platfromlist.length; j++) {
        if (platfroms[i] === platfromlist[j].name) {
          getplatform.push(platfromlist[j].name);
        }
      }
    }
    return getplatform;
  }, []);

  // 获取developStatus
  const getStatusInfo = useCallback((status: any) => {
    let statusinfo: any = {};
    if (status) {
      statusinfo = stauslist.find((item: any) => item.title.toLowerCase() === status.toLowerCase());
      return statusinfo;
    }
  }, []);

  // 点击 资讯/游戏 列表按钮事件
  const onBtnArticleClick = useCallback(
    (id: any, category: any) => {
      const url = category === 1 ? `${paths.article}/${id}` : `${paths.strategy}/${id}`;
      linkTo(url);
    },
    [linkTo]
  );

  // 请求游戏列表事件
  const getSearchGame = useCallback(
    (curPage: any) => {
      dispatch.common
        .getSearchGame({
          keyword: trim(inputValue || ''),
          currentPage: curPage,
          pageSize: 10,
        })
        .then((res: any) => {
          if (res.code === 0) {
            setGameList(res.data);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [dispatch.common, inputValue]
  );

  // 切换游戏页数
  const onBtnSelectGamePageClick = useCallback(
    (curPage: any) => {
      getSearchGame(curPage);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    [getSearchGame]
  );

  // 请求新闻资讯列表事件
  const getSearchArticle = useCallback(
    (curPage: any) => {
      dispatch.common
        .getSearchArticle({
          keyword: trim(inputValue || ''),
          currentPage: curPage,
          pageSize: 10,
        })
        .then((res: any) => {
          if (res.code === 0) {
            setNewsList(res.data);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [dispatch.common, inputValue]
  );

  // 切换新闻资讯页数
  const onBtnSelectNewsPageClick = useCallback(
    (curPage: any) => {
      getSearchArticle(curPage);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    [getSearchArticle]
  );

  // 请求攻略列表事件
  const getSearchStrategy = useCallback(
    (curPage: any) => {
      dispatch.common
        .getSearchStrategy({
          keyword: trim(inputValue || ''),
          currentPage: curPage,
          pageSize: 10,
        })
        .then((res: any) => {
          if (res.code === 0) {
            setStrategyList(res.data);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [dispatch.common, inputValue]
  );

  // 切换攻略页数
  const onBtnSelectStrategyPageClick = useCallback(
    (curPage: any) => {
      getSearchStrategy(curPage);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    [getSearchStrategy]
  );

  const result = useMemo(
    () => ({
      t,
      searchDetailTabs,
      searchMulti,
      gameList,
      newsList,
      strategyList,
      nowTab,
      inputValue,
      iconPrepage,
      iconNextpage,
      getStatusInfo,
      getSupportPlatform,
      onKeySearchEnterUp,
      onInputValueChange,
      onBtnClearValueClick,
      onBtnChangeTabClick,
      onBtnArticleClick,
      onBtnSelectGamePageClick,
      onBtnSelectNewsPageClick,
      onBtnSelectStrategyPageClick,
    }),
    [
      gameList,
      getStatusInfo,
      getSupportPlatform,
      inputValue,
      newsList,
      nowTab,
      onBtnArticleClick,
      onBtnChangeTabClick,
      onBtnClearValueClick,
      onBtnSelectGamePageClick,
      onBtnSelectNewsPageClick,
      onBtnSelectStrategyPageClick,
      onInputValueChange,
      onKeySearchEnterUp,
      searchMulti,
      strategyList,
      t,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
