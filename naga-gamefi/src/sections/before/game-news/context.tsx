import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import { useTranslation } from 'react-i18next';

import { memoize } from 'proxy-memoize';
import { elementOffset, scrollOffset, windowOffset, windowScroll } from 'src/utils/dom-lib';
import { usePathname, useSearchParams } from 'src/routes/hooks';
import { RootState } from 'src/models/store';
import { toast } from 'src/components/toast';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';

const selectDatas = memoize((state: RootState) => ({
  articleList: state.common.articleList,
  strategyList: state.common.strategyList,
  articleFlashList: state.common.articleFlashList,
}));
export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();
  const searchs = useSearchParams();
  const { t } = useTranslation();
  const pathname = usePathname({ pure: true });
  const location = useMemo(() => ({ pathname }), [pathname]);
  const { articleList, strategyList, articleFlashList } = useSelector((state: RootState) =>
    selectDatas(state)
  );
  const { linkTo } = useLink();

  useEffect(() => {
    console.log('articleList', articleList);
    console.log('strategyList', strategyList);
    console.log('articleFlashList', articleFlashList);
  }, [articleFlashList, articleList, strategyList]);

  const [loading, setLoading] = useState(false); // 加载loading

  // 判断页面状态 ———— 页面/组件
  const isNewsPage = useMemo(() => location.pathname?.includes('/news'), [location.pathname]);

  // 默认页面标签
  const defaultTab = useMemo(() => {
    const isStrategyTab = searchs?.get('strategy') === '';
    const isFlashTab = searchs?.get('flash') === '';

    let id = 1;
    if (isStrategyTab) {
      id = 2;
    } else if (isFlashTab) {
      id = 3;
    }

    return id;
  }, [searchs]);

  // 当前页面标签
  const [nowTab, setNowTab] = useState(defaultTab);
  // 点击切换页签按钮事件
  const onBtnChangeTabClick = useCallback((id: any) => {
    setNowTab(id);
  }, []);

  // 当前资讯列表
  const [nowArticleList, setNowArticleList] = useState(
    articleList?.inforList ? articleList?.inforList : []
  );
  const [articleEnd, setArticleEnd] = useState(false);

  // 当前攻略列表
  const [nowStrategyList, setNowStrategyList] = useState(
    strategyList?.inforList ? strategyList?.inforList : []
  );
  const [strategyEnd, setStrategyEnd] = useState(false);

  // 当前快讯列表
  const [nowArticleFlashList, setNowArticleFlashList] = useState([]);
  const [articleFlashEnd, setArticleFlashEnd] = useState(false);

  // 列表翻页
  const nextPage = useCallback(
    (inforList: any) => {
      if (isArray(inforList) && inforList.length > 0) {
        let list = [];
        switch (nowTab) {
          case 1:
            list = nowArticleList.concat(inforList);
            setNowArticleList(list);
            break;
          case 2:
            list = nowStrategyList.concat(inforList);
            setNowStrategyList(list);
            break;
          case 3:
            list = nowArticleFlashList.concat(inforList as any);
            setNowArticleFlashList(list);
            break;
          default:
            break;
        }
      } else {
        switch (nowTab) {
          case 1:
            setArticleEnd(true);
            break;
          case 2:
            setStrategyEnd(true);
            break;
          case 3:
            setArticleFlashEnd(true);
            break;
          default:
            break;
        }
      }
    },
    [nowTab, nowArticleList, nowStrategyList, nowArticleFlashList]
  );

  // 请求资讯列表事件
  const getArticleList = useCallback(() => {
    if (nowArticleList.length === 0) return;
    const oldRefreshTime = nowArticleList[nowArticleList.length - 1]?.publishTime;
    const refreshTime = new Date(oldRefreshTime).getTime() / 1000 || 0;

    const obj: any = {
      refreshTime,
      pageSize: 10,
    };
    if (isNewsPage) {
      obj.category = 1;
    } else {
      obj.gameId = searchs?.get('gameId');
    }
    setLoading(true);
    dispatch.common.getArticleList({ params: obj }).then((res: any) => {
      if (res.code === 0) {
        nextPage(res?.data?.inforList || []);
      } else {
        toast.error(res.msg);
      }
      setLoading(false);
    });
  }, [nowArticleList, isNewsPage, dispatch.common, searchs, nextPage]);

  // 请求攻略列表事件
  const getStrategyList = useCallback(() => {
    if (nowStrategyList.length === 0) return;
    const refreshTime = nowStrategyList[nowStrategyList.length - 1].publishTime;
    const obj = {
      refreshTime: new Date(refreshTime).getTime() / 1000,
      pageSize: 10,
    };
    setLoading(true);
    dispatch.common.getStrategyList({ params: obj }).then((res: any) => {
      if (res.code === 0) {
        nextPage(res?.data?.inforList || []);
      } else {
        toast.error(res.msg);
      }
      setLoading(false);
    });
  }, [nowStrategyList, dispatch.common, nextPage]);

  // 请求快讯列表事件
  const getArticleFlashList = useCallback(() => {
    if (nowArticleFlashList.length === 0) return;
    const refreshTime = (nowArticleFlashList[nowArticleFlashList.length - 1] as any)?.publishTime;
    const obj = {
      refreshTime: new Date(refreshTime).getTime() / 1000,
      pageSize: 10,
    };
    setLoading(true);
    dispatch.common.getArticleFlashList(obj).then((res: any) => {
      if (res.code === 0) {
        nextPage(res?.data?.inforList || []);
      } else {
        toast.error(res.msg);
      }
      setLoading(false);
    });
  }, [nowArticleFlashList, dispatch.common, nextPage]);

  // 滚动加载更多
  useEffect(() => {
    const scrollFunc = windowScroll((res: any) => {
      if (res !== 'down' || loading === true) return false;
      const $footerWrapper = document.querySelector('#footerWrapper');
      if (
        $footerWrapper &&
        scrollOffset().top + windowOffset().height >
          elementOffset($footerWrapper).top - windowOffset().height / 2
      ) {
        if (nowTab === 1 && !articleEnd) {
          getArticleList();
        } else if (nowTab === 2 && !strategyEnd) {
          getStrategyList();
        } else if (nowTab === 3 && !articleFlashEnd) {
          getArticleFlashList();
        }
      }
    });

    return () => {
      window.removeEventListener('scroll', scrollFunc, false);
    };
  }, [
    getArticleList,
    getStrategyList,
    getArticleFlashList,
    loading,
    nowTab,
    articleEnd,
    strategyEnd,
    articleFlashEnd,
  ]);

  // 点击 资讯/游戏 列表按钮事件
  const onBtnArticleClick = useCallback(
    (id: any, category: number) => {
      const url = category === 1 ? `${paths.article}/${id}` : `${paths.strategy}/${id}`;
      linkTo(url);
    },
    [linkTo]
  );

  // 点击 快讯 列表按钮事件
  const onBtnArtivleFlashClick = useCallback(
    (id: any) => {
      linkTo(`${paths.flash}/${id}`);
    },
    [linkTo]
  );

  const result = useMemo(
    () => ({
      t,
      nowArticleList,
      nowStrategyList,
      nowArticleFlashList,
      isNewsPage,
      nowTab,
      onBtnChangeTabClick,
      onBtnArticleClick,
      onBtnArtivleFlashClick,
    }),
    [
      isNewsPage,
      nowArticleFlashList,
      nowArticleList,
      nowStrategyList,
      nowTab,
      onBtnArticleClick,
      onBtnArtivleFlashClick,
      onBtnChangeTabClick,
      t,
    ]
  );

  return <Context.Provider value={result}>{children}</Context.Provider>;
};
