import React, { createContext, useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memoize } from 'proxy-memoize';
import { useSearchParams } from 'src/routes/hooks';
import { toast } from 'src/components/toast';
import { RootState } from 'src/models/store';
import { platfromlist, stauslist } from 'src/utils/public/datas';
import { queryParam, formatNum } from 'src/utils/public';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

const selectDatas = memoize((state: RootState) => ({
  librarydata: state.common.librarydata,
}));

export const Context = createContext({} as any);
export default (props: any) => {
  const { t } = useTranslation();
  const { isPc } = useBreakPoint();

  const searchs = useSearchParams();

  const dispatch = useDispatch();
  const { children } = props;
  const { librarydata } = useSelector((state: RootState) => selectDatas(state));
  const [gameInfo, setGameInfo] = useState({
    currentPage: 1,
    currentTime: '',
    inforList: [],
    pageCount: 1,
    pageSize: 40,
    recordCount: 0,
  });
  const [pages, setPages] = useState(1); // 页码
  const [chains, setChains] = useState(); // 链
  const [category, setCategory] = useState(); // 类型
  const [scores, setScores] = useState({
    fourscore: '',
    sevenscore: '',
    tenscore: '',
    otherscore: '',
  }); // 评分
  const [times, setTimes] = useState(''); // 时间
  const [status, setStatus] = useState(); // 类别
  const [platform, setPlatform] = useState(); // 设备
  const [search, setSearch] = useState(); // 搜索
  const [advise, setAdvise] = useState(searchs?.get('hot') ? 1 : '');
  const [free, setFree] = useState();
  const [sortinfo, setSortinfo] = useState({
    sortby: 'create_at',
    sort: 'desc',
  });
  const aRef = useRef(false);

  // 加载
  const [loading, setLoading] = useState(true); // 加载

  //   console.log(librarydata);

  // 获取页码
  const getPages = useCallback((page: any) => {
    setPages(page);
  }, []);
  // 获取链类型
  const getChains = useCallback((page: any) => {
    setChains(page);
  }, []);
  // 获取类型
  const getCategory = useCallback((page: any) => {
    setCategory(page);
  }, []);
  // 获取评分
  const getScores = useCallback((page: any) => {
    setScores(page);
  }, []);
  // 获取时间
  const getTimes = useCallback((page: any) => {
    setTimes(page);
  }, []);
  // 获取类别
  const getStatus = useCallback((page: any) => {
    setStatus(page);
  }, []);
  // 获取设备名称
  const getPlatform = useCallback((page: any) => {
    let platitem = page?.toLowerCase();
    if (platitem === 'macos') {
      platitem = 'mac';
    }
    setPlatform(platitem);
  }, []);
  // 获取搜索内容
  const getSearch = useCallback((page: any) => {
    setSearch(page);
  }, []);
  // 是否热门
  const getAdvise = useCallback((page: any) => {
    setAdvise(page);
  }, []);
  // freetoplay
  const getFree = useCallback((page: any) => {
    setFree(page);
  }, []);
  // 获取排序条件
  const getSortfn = useCallback((page: any) => {
    setSortinfo(page);
  }, []);

  // 获取支持设备
  const supportPlatfrom = useCallback((supportPlatform: any) => {
    const platfroms = supportPlatform?.split(',');
    const getplatfrom = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < platfroms?.length; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < platfromlist.length; j++) {
        if (platfroms[i] === platfromlist[j].name) {
          getplatfrom.push(platfromlist[j].name);
        }
      }
    }
    return getplatfrom;
  }, []);
  // 获取链
  const getChainList = useCallback(
    (chain: any) => {
      const platfroms = chain.split(',');
      const getchain = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < platfroms?.length; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < librarydata.chainPojoList.length; j++) {
          if (platfroms[i].toLowerCase() === librarydata.chainPojoList[j].name.toLowerCase()) {
            getchain.push(librarydata.chainPojoList[j].iconUrl);
          }
        }
      }
      return getchain;
    },
    [librarydata]
  );
  // 获取developStatus
  const getStatusInfo = useCallback((statusItem: any) => {
    let statusinfo: any = {};
    if (statusItem) {
      statusinfo = stauslist.find(
        (item: any) => item.title.toLowerCase() === statusItem.toLowerCase()
      );
      return statusinfo;
    }
  }, []);

  // 获取各筛选条件所对应的游戏数量
  const getgamesNum = useCallback((screenlist: any, screenname: any) => {
    const screennum = screenlist.find(
      (item: any) => item.name?.toLowerCase() === screenname?.toLowerCase()
    )?.num;
    return screennum;
  }, []);
  // 获取筛选条件的选中数量
  const getscreenNum = useCallback((datalist: any) => {
    let i = 0;
    datalist.map((item: any) => {
      if (item.flag) {
        i += 1;
      }
    });
    return i;
  }, []);
  // 获取游戏列表
  const getgamesInfo = useCallback(() => {
    const obj = {
      pageSize: 40,
      currentPage: pages,
      sort: sortinfo.sort,
      sortBy: sortinfo.sortby,
      chain: chains,
      category,
      addDate: times,
      zeroNum: scores.otherscore,
      to4Num: scores.fourscore,
      to7Num: scores.sevenscore,
      to10Num: scores.tenscore,
      developStatus: status,
      platform,
      isAdvise: advise ? 1 : '',
      isFree: free ? 1 : '',
      search,
    };

    dispatch.common.getGamelist({ params: obj }).then((res: any) => {
      setLoading(true);
      if (res.code === 0) {
        if (isPc) {
          setGameInfo(res.data);
        } else if (pages > 1) {
          const h5data = {
            inforList: [],
            recordCount: gameInfo.recordCount,
          } as any;
          h5data.inforList = gameInfo.inforList.concat(res.data.inforList);
          setGameInfo(h5data);
        } else {
          setGameInfo(res.data);
        }

        setLoading(false);
      } else {
        toast.error(res.msg);
        setLoading(false);
      }
    });
  }, [
    pages,
    sortinfo.sort,
    sortinfo.sortby,
    chains,
    category,
    times,
    scores.otherscore,
    scores.fourscore,
    scores.sevenscore,
    scores.tenscore,
    status,
    platform,
    advise,
    free,
    search,
    dispatch.common,
    isPc,
    gameInfo.recordCount,
    gameInfo.inforList,
  ]);

  // 移动端和pc切换数据显示问题
  useEffect(() => {
    window.addEventListener('resize', (e: any) => {
      const pagewidth = e.target.innerWidth;
      if (pagewidth <= 768) {
        getPages(1);
        aRef.current = true;
        getgamesInfo();
      }
      if (pagewidth > 768 && aRef.current) {
        getPages(1);
        aRef.current = false;
        getgamesInfo();
      }
    });
  }, [getPages, getgamesInfo]);

  useEffect(() => {
    getgamesInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, chains, category, scores, times, status, platform, search, advise, free, sortinfo]);

  const result = useMemo(
    () => ({
      t,
      loading,
      pages,
      librarydata,
      gameInfo,
      supportPlatfrom,
      getStatusInfo,
      getgamesNum,
      getscreenNum,
      free,
      advise,
      getChainList,
      formatNum,
      queryParam,
      getPages,
      getChains,
      getCategory,
      getScores,
      getTimes,
      getStatus,
      getPlatform,
      getSearch,
      getAdvise,
      getFree,
      getSortfn,
    }),
    [
      advise,
      free,
      gameInfo,
      getAdvise,
      getCategory,
      getChainList,
      getChains,
      getFree,
      getPages,
      getPlatform,
      getScores,
      getSearch,
      getSortfn,
      getStatus,
      getStatusInfo,
      getTimes,
      getgamesNum,
      getscreenNum,
      librarydata,
      loading,
      pages,
      supportPlatfrom,
      t,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
