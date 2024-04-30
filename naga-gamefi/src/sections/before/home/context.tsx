import React, { createContext, useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useTranslation } from 'react-i18next';
import { memoize } from 'proxy-memoize';
import useSWR from 'swr';

import { SelectChangeEvent } from '@mui/material';
import { paths } from 'src/routes/paths';
import { RootState } from 'src/models/store';
import {
  topCoinListKey,
  useGetCoinPrice,
  useGetHomePageTop,
  useGetHomePageTrending,
} from 'src/fetchs/common';
import { useLink } from 'src/components/link';
import { canUseDom } from 'src/utils/can-use-dom';
import { clientWebsit, testnetWebsit } from 'src/utils/public';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { useGetEventCalendarCatList } from 'src/fetchs/event-calendar';
import { toast } from 'src/components/toast';

// 排行榜时间筛选
const rankTimeProps = ['change_24h', 'change_7d', 'change_30d'];

// 类别数据列表
const categoryDataList = [
  {
    img: '/images/category/category_01.webp',
    title: 'Free to play',
    link: '/gamelibrary?free=true',
  },
  {
    img: '/images/category/category_02.webp',
    title: 'Metaverse',
    link: '/gamelibrary?category=METAVERSE',
  },
  {
    img: '/images/category/category_03.webp',
    title: 'RPG',
    link: '/gamelibrary?category=RPG',
  },
  {
    img: '/images/category/category_04.webp',
    title: 'Adventure',
    link: '/gamelibrary?category=ADVENTURE',
  },
  {
    img: '/images/category/category_05.webp',
    title: 'Action',
    link: '/gamelibrary?category=ACTION',
  },
  {
    img: '/images/category/category_06.webp',
    title: 'Card',
    link: '/gamelibrary?category=CARD',
  },
  {
    img: '/images/category/category_07.webp',
    title: 'MMO',
    link: '/gamelibrary?category=MMORPG',
  },
  {
    img: '/images/category/category_08.webp',
    title: 'Sports',
    link: '/gamelibrary?category=SPORTS',
  },
];

// SwiperCore.use([Autoplay, EffectFade, Navigation, Thumbs, Pagination, Scrollbar]);
const selectDatas = memoize((state: RootState) => ({
  homeinfo: state.common.homeinfo,
  librarydata: state.common.librarydata,
}));

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { linkTo } = useLink();
  dayjs.extend(utc);

  // 首页总数据 游戏库总数据
  const { homeinfo, librarydata } = useSelector((state: RootState) => selectDatas(state));

  // 链数据
  // const [chainList, setChainList] = useState();
  // 链数据初始值
  useEffect(() => {
    setChainList(librarydata.chainPojoList);
  }, [librarydata.chainPojoList]);

  // 是否是移动端
  const { isPc: isPC, isMob, isHomeSmallLaptop } = useBreakPoint();
  // 3档视窗适配 0.PC, 1.Pad小屏幕， 2.移动端
  const windowShowType = useMemo(() => {
    let show = 0;
    if (isMob) {
      show = 2;
    } else if (isHomeSmallLaptop) {
      show = 1;
    } else {
      show = 0;
    }

    return show;
  }, [isMob, isHomeSmallLaptop]);

  // 顶部滚动Token数据
  const { data: topCoinList } = useSWR(topCoinListKey);
  // 活动日历数据
  const [eventCalendarData, setEventCalendarData] = useState<{
    [key: string]: EventCalendarListType[];
  }>();
  // 当前日历分类
  const { trigger: triggerEventCalendarCatList, data: eventCalendarCatList } =
    useGetEventCalendarCatList();
  const [eventCalendarCatData, setEventCalendarCatData] = useState<EventCalendarCatType[]>([]);

  useEffect(() => {
    console.log('homeinfo', homeinfo);
    console.log('librarydata', librarydata);
    console.log('topCoinList', topCoinList);
    triggerEventCalendarCatList();
  }, [homeinfo, librarydata, topCoinList, triggerEventCalendarCatList]);

  // 设置分类数据
  useEffect(() => {
    if (eventCalendarCatList && eventCalendarCatList.length > 0) {
      const allData = [{ id: 0, name: 'All' }];
      setEventCalendarCatData(allData.concat(eventCalendarCatList));
    }
  }, [eventCalendarCatList]);

  // 顶部滚动横幅 数据
  const [bannerLists, setBannerLists] = useState<any[]>([]);
  useEffect(() => {
    // 首页banner 活动写死
    // const obj = {
    //   brief: t('vote_desc'),
    //   category: 1,
    //   chain: '',
    //   change24h: null,
    //   coinIconUrl: '',
    //   coverUrl: '',
    //   gameCreateAt: 1698736675,
    //   hot: 1,
    //   isNews: true, // 判断为手动添加的资讯，需要与游戏区分开
    //   newsTitle: t('vote_title'), // 手动添加独有参数，资讯标题
    //   id: -1,
    //   jumpUrl: '/event/Top25Game',
    //   logoUrl: '',
    //   price: null,
    //   resUrl: t('vote_banner_img'),
    //   score: '',
    //   symbol: '',
    //   thumbUrl: '',
    //   title: t('vote_title'),
    // };
    // const list: any[] = homeinfo.bannerList.concat([obj]);

    // if (new Date().getTime() > 1705741920 * 1000) {
    //   setBannerLists(homeinfo.bannerList);
    // } else {
    //   setBannerLists(list);
    // }

    // console.log(new Date().getTime());

    setBannerLists(homeinfo.bannerListV2);
  }, [homeinfo.bannerListV2, t]);

  // 设置活动列表数据 —— 首页 总共只显示7个
  useEffect(() => {
    const list = homeinfo.eventCalendarList;
    // if (eventCalendarCatList && eventCalendarCatList.length > 0) {
    //   const allData = [{ id: 0, name: 'All' }];
    //   setEventCalendarCatData(allData.concat(eventCalendarCatList));
    //   // eslint-disable-next-line no-plusplus
    //   for (let i = 0; i < list.length; i++) {
    //     // eslint-disable-next-line no-plusplus
    //     for (let r = 0; r < eventCalendarCatList.length; r++) {
    //       if (list[i].category === eventCalendarCatList[r].id) {
    //         list[i].catetype = eventCalendarCatList[r].name;
    //       }
    //     }
    //   }
    // }
    // if (list && list.length >= 0) {
    //   const obj: { [key: string]: EventCalendarListType[] } = {};
    //   for (let i = 0; i < list.slice(0, 5).length; i += 1) {
    //     const item = list[i];
    // const day = dayjs(item.triggerAt * 1000)
    //   .utc()
    //   .format(t('event_calendar_time'));

    //     if (obj[day]) {
    //       obj[day].push(item);
    //     } else {
    //       obj[day] = [];
    //       obj[day].push(item);
    //     }
    //   }

    //   setEventCalendarData(obj);
    // }
    setEventCalendarData(list?.slice(0, 5));
  }, [homeinfo.eventCalendarList, t, eventCalendarCatList]);

  // 刷新获取Token数据
  const { trigger: triggerCoinPrice, data: coinPrice } = useGetCoinPrice();
  const coinPriceTimer = useRef<number>();
  const getCoinPrice = useCallback(() => {
    if (!topCoinList) return;
    let symbols = '';
    topCoinList.map((item: TopCoinListType) => {
      if (item.symbol) symbols += `${item.symbol},`;
    });

    if (symbols !== '') {
      symbols = symbols.slice(0, -1);
      triggerCoinPrice({
        symbols,
      });
    }
    coinPriceTimer.current = window.setTimeout(() => {
      getCoinPrice();
    }, 60000);
  }, [topCoinList, triggerCoinPrice]);
  useEffect(() => {
    coinPriceTimer.current = window.setTimeout(() => {
      getCoinPrice();
    }, 60000);

    return () => {
      if (coinPriceTimer.current) window.clearTimeout(coinPriceTimer.current);
    };
  }, [getCoinPrice]);

  // --------------------------------排行榜--------------------------------------

  const [rankLists, setRankLists] = useState<GameDetailType[]>([]); // 排行榜数据
  const [rankTrendingList, setRankTrendingList] = useState<GameDetailType[]>([]); // 排行榜 热门数据
  const [rankTopList, setRankTopList] = useState<GameDetailType[]>([]); // 排行榜 最佳数据
  const [rankType, setRankType] = useState(1); // 排行榜类型 1.Trending 热门 2.Top 最佳
  const [rankTime, setRankTime] = useState(0); // 排行榜时间 0.1D 1.7D 2.30D
  const [rankChainSelect, setRankChainSelect] = useState(''); // 当前选中的链
  const [rankTimeSelect, setRankTimeSelect] = useState('change_24h'); // 排行榜时间 H5
  const [chainList, setChainList] = useState(); // 排行榜 链数据
  const [rankChainList, setRankChainList] = useState(); // 排行榜 链数据
  const [rankLoading, setRankLoading] = useState(false); // 是否正在加载数据
  const { trigger: triggerHomePageTrending, data: homePageTrendingRank } = useGetHomePageTrending(); // 首页排行榜 热门数据
  const { trigger: triggerHomePageTop, data: homePageTopRank } = useGetHomePageTop(); // 首页排行榜 最佳数据

  // 排行榜初始值请求
  useEffect(() => {
    triggerHomePageTrending({
      currentPage: 1,
      pageSize: 10,
    });
    triggerHomePageTop({
      currentPage: 1,
      pageSize: 10,
    });
  }, [triggerHomePageTop, triggerHomePageTrending]);

  // 排行榜初始值
  useEffect(() => {
    setRankLists(homeinfo.trendRanks);
  }, [homeinfo.trendRanks]);
  useEffect(() => {
    if (homePageTrendingRank) {
      setRankTrendingList(homePageTrendingRank);
      if (rankType === 1) {
        setRankLists(homePageTrendingRank);
      }
      setRankLoading(false);
    }
  }, [homePageTrendingRank, rankType]);
  useEffect(() => {
    if (homePageTopRank) {
      setRankTopList(homePageTopRank);
      if (rankType === 2) {
        setRankLists(homePageTopRank);
      }
      setRankLoading(false);
    }
  }, [homePageTopRank, rankType]);

  // 链数据初始值
  useEffect(() => {
    setRankChainList(homeinfo.rankChain);
  }, [homeinfo.rankChain]);

  // 排行榜 当前选中的链 切换
  const onSelectChainChange = useCallback(
    (event: SelectChangeEvent) => {
      setRankChainSelect(event.target.value);

      setRankLoading(true);
      setRankTrendingList([]);
      setRankTopList([]);
      triggerHomePageTrending({
        chain: event.target.value,
        currentPage: 1,
        pageSize: 10,
      });
      triggerHomePageTop({
        chain: event.target.value,
        currentPage: 1,
        pageSize: 10,
      });
    },
    [triggerHomePageTop, triggerHomePageTrending]
  );

  // 排行榜类型 切换
  const onBtnRankTypeClick = useCallback(
    (type: number) => {
      setRankType(type);

      if (type === 1) {
        setRankLists(rankTrendingList);
      } else {
        setRankLists(rankTopList);
      }
    },
    [rankTopList, rankTrendingList]
  );

  // 排行榜时间 切换
  const onBtnRankTimeClick = useCallback((time: number) => {
    setRankTime(time);
    setRankTimeSelect(rankTimeProps[time]);
  }, []);

  // 排行榜时间 切换 H5
  const onSelectTimeChange = useCallback((event: SelectChangeEvent) => {
    setRankTimeSelect(event.target.value);
    setRankTime(rankTimeProps.findIndex((item) => item === event.target.value));
  }, []);

  // 点击跳转详情
  const onBtnRankLinkToClick = useCallback(
    (id: number) => {
      linkTo(`${paths.game}/${id}`);
    },
    [linkTo]
  );

  // ----------------------------------------------------------------------

  // 编辑推荐后剩余的游戏单
  const mostPopularAfterList = useMemo(
    () => [
      {
        title: t('home_bitcoin_game'),
        link: '/gamelibrary?chain=Bitcoin',
        list: homeinfo.bitcoinGames,
        type: 'arbitrum',
        id: 1,
      },
    ],
    [homeinfo.bitcoinGames, t]
  );

  // 咨询和攻略列表
  const newsList = useMemo(
    () => [
      {
        type: 'news',
        title: t('home_newnews'),
        link: paths.news,
        list: homeinfo.articleList,
      },
      {
        type: 'guide',
        title: t('home_gamestrategy'),
        link: `${paths.news}?strategy`,
        list: homeinfo.strategyList,
      },
    ],
    [homeinfo.articleList, homeinfo.strategyList, t]
  );

  // 新游戏信息
  const newGameList = useMemo(
    () => ({
      title: t('home_goodwork'),
      link: '/gamelibrary?newgame',
      list: homeinfo.newGames,
      type: 'newgame',
      id: 1,
    }),
    [homeinfo.newGames, t]
  );
  // 排行榜后剩余的游戏单
  const bottomgames = useMemo(
    () => [
      // {
      //   title: t('home_goodwork'),
      //   link: '/gamelibrary?newgame',
      //   list: homeinfo.newGames,
      //   type: 'newgame',
      //   id: 1,
      // },
      {
        title: t('home_bete_game'),
        link: '/gamelibrary?staus=Beta',
        list: homeinfo.betaGames,
        type: 'betaGames',
        icon: 'beta',
        id: 2,
      },
      //   {
      //     title: t('home_ploygon_game'),
      //     link: '/gamelibrary?chain=Polygon',
      //     list: homeinfo.chainGames,
      //     type: 'arbitrum',
      //     id: 3,
      //   },
      //   {
      //     title: t('home_sei_game'),
      //     link: '/gamelibrary?chain=SEI',
      //     list: homeinfo.chainGames,
      //     type: 'arbitrum',
      //     id: 3,
      //   },
      {
        title: 'Immutable',
        link: '/gamelibrary?chain=ImmutableX',
        list: homeinfo.immutableXGames,
        type: 'ImmutableX',
        icon: 'immutable',
        id: 3,
      },
      {
        title: 'zkSync',
        link: '/gamelibrary?chain=zkSync',
        list: homeinfo.zkSyncGames,
        type: 'zkSync',
        icon: 'zksync',
        id: 4,
      },
      {
        title: 'Avalanche',
        link: '/gamelibrary?chain=Avalanche',
        list: homeinfo.avalancheGames,
        type: 'Avalanche',
        icon: 'avalanche',
        id: 5,
      },
      {
        title: 'Arbitrum',
        link: '/gamelibrary?chain=Arbitrum',
        list: homeinfo.arbitrumGames,
        type: 'Arbitrum',
        icon: 'arbitrum',
        id: 6,
      },
      {
        title: 'RPG',
        link: '/gamelibrary?category=RPG',
        list: homeinfo.rpgGames,
        type: 'RPG',
        icon: 'rpg',
        id: 7,
      },
      {
        title: 'Card',
        link: '/gamelibrary?category=CARD',
        list: homeinfo.cardGames,
        type: 'CARD',
        icon: 'card',
        id: 8,
      },
      {
        title: 'Sports',
        link: '/gamelibrary?category=SPORTS',
        list: homeinfo.sportGames,
        type: 'SPORTS',
        icon: 'sport',
        id: 9,
      },
    ],
    [
      homeinfo.arbitrumGames,
      homeinfo.avalancheGames,
      homeinfo.betaGames,
      homeinfo.cardGames,
      homeinfo.immutableXGames,
      homeinfo.rpgGames,
      homeinfo.sportGames,
      homeinfo.zkSyncGames,
      t,
    ]
  );

  // 点击 活动日历 更多
  const onBtnLinkToCalendarClick = useCallback(() => {
    linkTo(paths.calendar);
  }, [linkTo]);

  // 获取Banner跳转链接
  const getBannerLinkUrl = useCallback((jumpUrl: string) => {
    let link = jumpUrl;
    if (canUseDom && (clientWebsit() || testnetWebsit())) {
      const urlsplice = jumpUrl?.split('/');
      const newurl = jumpUrl?.split('naga.io');
      if (urlsplice && urlsplice[2]?.includes('naga.io')) {
        link = newurl[1];
      }
    }
    return link;
  }, []);

  // 点击 活动日历 游戏头像
  const onBtnEventCalendarAvatarClick = useCallback(
    (gameId: number | string, isProject?: boolean) => {
      if (isProject) {
        linkTo(gameId as string);
      } else {
        linkTo(`${paths.game}/${gameId}`);
      }
    },
    [linkTo]
  );

  const values = useMemo(
    () => ({
      t,
      isPC,
      isMob,
      windowShowType,
      bannerLists,
      rankLists,
      chainList,
      rankChainList,
      homeinfo,
      newsList,
      bottomgames,
      newGameList,
      mostPopularAfterList,
      topCoinList,
      coinPrice,
      eventCalendarData,
      rankType,
      rankTime,
      rankChainSelect,
      rankTimeSelect,
      onSelectChainChange,
      onSelectTimeChange,
      onBtnRankTypeClick,
      onBtnRankTimeClick,
      linkTo,
      eventCalendarCatData,
      eventCalendarCatList,
      getBannerLinkUrl,
      onBtnLinkToCalendarClick,
      onBtnEventCalendarAvatarClick,
      onBtnRankLinkToClick,
      rankLoading,
      categoryDataList,
    }),
    [
      t,
      isPC,
      isMob,
      windowShowType,
      bannerLists,
      rankLists,
      chainList,
      rankChainList,
      homeinfo,
      newsList,
      bottomgames,
      newGameList,
      mostPopularAfterList,
      topCoinList,
      coinPrice,
      eventCalendarData,
      rankType,
      rankTime,
      rankChainSelect,
      rankTimeSelect,
      onSelectChainChange,
      onSelectTimeChange,
      onBtnRankTypeClick,
      onBtnRankTimeClick,
      linkTo,
      eventCalendarCatData,
      eventCalendarCatList,
      getBannerLinkUrl,
      onBtnLinkToCalendarClick,
      onBtnEventCalendarAvatarClick,
      onBtnRankLinkToClick,
      rankLoading,
    ]
  );
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
