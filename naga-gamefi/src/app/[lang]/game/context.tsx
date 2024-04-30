import { createContext, useMemo, useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import {
  useGetGameDetail,
  useGetAllGameData,
  useGetGameNft,
  addGameComment,
  gameCommentList,
  gamemyselfComment,
  updategameComment,
} from 'src/fetchs/common';
import { useGetFinanceRoundInfo } from 'src/fetchs/financing';
import { chainlist, gameDetailDataType, platfromlist } from 'src/utils/public/datas';
import { useLink } from 'src/components/link';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

export const Context = createContext({} as any);

export default ({ children, props }: any) => {
  const { t } = useTranslation();
  const { linkTo } = useLink();
  const { isPc: smUp } = useBreakPoint();
  const isDark = useIsDark();
  const { trigger: getGamedetail, data: gamedetailData } = useGetGameDetail();
  const { trigger: getGameNftInfo, data: gameNft } = useGetGameNft();
  const { trigger: getAllgameData, data: allgameData } = useGetAllGameData();
  const { trigger: getAllroundData, data: allroundData } = useGetFinanceRoundInfo();
  const [isBrief, setisBrief] = useState(0); // 0 不显示 1更多 2更少
  const [finastatus, setFinastatus] = useState('');

  const [reviewbtn, setReviewbtn] = useState(false);

  const [gamesid, setGamesid] = useState(0);

  const [investnameList, setInvestnameList] = useState([]);

  const [investInfoList, setInvestInfoList] = useState([]);

  const [currentDataTab, setCurrentDataTab] = useState(gameDetailDataType[0].value); // 当前数据Tab

  const [modaltype, setModaltype] = useState({
    flag: false,
    type: 0, // 0 日历 1任务 2大图
  });

  const [commentlistinfo, setCommentlistinfo] = useState<any>({
    currentPage: 1,
    currentTime: null,
    inforList: [],
    pageCount: 1,
    pageSize: 10,
  });

  // const { data: gameNft } = useSWR(gameNftKey);
  // 获取评论列表
  const getCommentList = useCallback((id: any, page: any) => {
    gameCommentList({
      gameId: id,
      currentPage: page,
      pageSize: 10,
    }).then((res) => {
      setCommentlistinfo(res);
    });
  }, []);

  console.log(gamedetailData);

  const [selfdata, setSelfdata] = useState<any>();

  // 请求用户自己的评论
  const getSelfComment = useCallback((id: any) => {
    gamemyselfComment({
      gameId: id,
    }).then((res) => {
      setSelfdata(res as any);
    });
  }, []);

  // input focus
  const handleReviewsFocus = useCallback(() => {
    setReviewbtn(true);
  }, []);

  // 判断年份
  const getNewYears = useCallback((time: any) => {
    const currentYear = new Date().getFullYear();
    const getyears = new Date(time).getFullYear();

    if (currentYear - getyears === 0) {
      return true;
    }
    return false;
  }, []);

  // 获取所有接口数据
  useEffect(() => {
    const path = window.location.pathname;
    const pathlist = path?.split('/');
    // eslint-disable-next-line no-unsafe-optional-chaining
    const gameid = pathlist[pathlist?.length - 1] as any;
    setGamesid(gameid);
    getAllgameData();
    getAllroundData();

    if (Cookies.get('uid')) {
      getSelfComment(gameid);
    }

    getCommentList(gameid, 1);

    getGamedetail({
      id: gameid,
    });
    getGameNftInfo({
      gameId: gameid,
    });
  }, [
    getAllgameData,
    getAllroundData,
    getCommentList,
    getGameNftInfo,
    getGamedetail,
    getSelfComment,
  ]);

  useEffect(() => {
    if (gamedetailData) {
      document.title = `${gamedetailData.name} | NAGA-Discover The Best Web3 Gaming`;
      const detaildomHeight = document.getElementById('detail-desc')?.offsetHeight;
      if (detaildomHeight && detaildomHeight > 340) {
        setisBrief(1);
      }
    }
    if (allroundData && gamedetailData && (gamedetailData as any)?.financingInfoList.length > 0) {
      const finacnameList: any = [];
      const roundlist = allroundData?.data || [];
      const investlist = (gamedetailData as any)?.financingInfoList || [];

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= roundlist.length; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j <= investlist.length; j++) {
          if (roundlist[i]?.round === investlist[j]?.round) {
            if (roundlist[i]?.round) {
              if (!finacnameList.includes(roundlist[i])) {
                finacnameList.push(roundlist[i]);
              }
            }
          }
        }
      }

      setInvestnameList(finacnameList);
      const finallist = investlist?.filter((item: any) => item?.round === finacnameList[0]?.round);

      setInvestInfoList(finallist);
      setFinastatus(finacnameList[0]?.round);
      // allroundData.data
    }
  }, [allroundData, gamedetailData]);

  // console.log(allroundData, gamedetailData);

  const [convalue, setConvalue] = useState<any>();

  const handleChangeValue = useCallback((value: any) => {
    setConvalue(value);
  }, []);

  // 清除输入
  const handleCancel = useCallback(() => {
    setConvalue(undefined);
    setReviewbtn(false);
  }, []);

  const handleCommentSure = useCallback(() => {
    if (selfdata?.id) {
      updategameComment({
        content: `${convalue}`,
        id: selfdata?.id,
        star: 0,
      } as any).then((res) => {
        setConvalue(undefined);
        getCommentList(gamesid, 1);
        getSelfComment(gamesid);
      });
    } else {
      addGameComment({
        content: convalue as any,
        gameId: gamesid,
        star: 0,
      }).then((res) => {
        setConvalue(undefined);
        getCommentList(gamesid, 1);
        getSelfComment(gamesid);
      });
    }
  }, [convalue, gamesid, getCommentList, getSelfComment, selfdata]);

  // 游戏 当前链
  const [nowChain, setNowChain] = useState<any>();
  // 游戏 当前数据时间精度
  const [nowTimeType, setNowTimeType] = useState<any>(0);
  // 游戏 当前链数据
  const nowChainData = useMemo(
    () => chainlist.find((item) => item.chainname === nowChain || item.name === nowChain),
    [nowChain]
  );

  // 是否有 Token 数据
  const isHaveToken = useMemo(() => gamedetailData?.symbol, [gamedetailData?.symbol]);
  // 是否有 NFT 数据
  const isHaveNFT = useMemo(() => gameNft && gameNft.length > 0, [gameNft]);

  useEffect(() => {
    if (gamedetailData?.contractAddress) {
      const addList = JSON.parse(gamedetailData?.contractAddress);
      const keyList = Object.keys(addList);
      setNowChain(keyList[0]);
    }
  }, [gamedetailData?.contractAddress]);

  // 游戏 当前合约地址
  const nowContractAddress = useCallback(() => {
    let add = '';
    if (gamedetailData?.contractAddress) {
      const addList = JSON.parse(gamedetailData?.contractAddress);
      const keyList = Object.keys(addList);
      // setNowChain(keyList[0]);
      add = addList[keyList[0]];
    }

    return add;
  }, [gamedetailData?.contractAddress]);

  const handleMoreBtn = useCallback(() => {
    if (isBrief === 1) {
      setisBrief(2);
    }
    if (isBrief === 2) {
      setisBrief(1);
    }
  }, [isBrief]);

  const handleFinaBtn = useCallback((status: any) => {
    setFinastatus(status);
  }, []);

  // 视频/图片处理
  const GamedetailUrl = useCallback((detail: any) => {
    const videoList =
      detail?.videoUrl && detail?.videoUrl.includes('[') && detail?.videoUrl !== '[]'
        ? JSON.parse(detail?.videoUrl)
        : [];
    const picList =
      detail?.picUrl && detail?.picUrl.includes('[') && detail?.picUrl !== '[]'
        ? JSON.parse(detail?.picUrl)
        : [];
    const dataList: any = [];
    videoList.map((item: any) => dataList.push(item));
    picList.map((item: any) => dataList.push(item));

    return dataList;
  }, []);

  // 关闭弹窗
  const handleCloseModal = useCallback(() => {
    setModaltype({
      flag: false,
      type: 0,
    });
  }, []);

  const [detailbigimg, setDetailbigimg] = useState({
    url: '',
    num: 0,
  });

  const handlePrv = useCallback(
    (num: any) => {
      if (num > 1) {
        if (GamedetailUrl(gamedetailData)[num - 1] !== Object) {
          setDetailbigimg({
            url: GamedetailUrl(gamedetailData)[num - 1],
            num: num - 1,
          });
        }
      }
    },
    [GamedetailUrl, gamedetailData]
  );

  const handleNext = useCallback(
    (num: any) => {
      if (num < GamedetailUrl(gamedetailData).length - 1) {
        if (GamedetailUrl(gamedetailData)[num + 1] !== Object) {
          setDetailbigimg({
            url: GamedetailUrl(gamedetailData)[num + 1],
            num: num + 1,
          });
        }
      }
    },
    [GamedetailUrl, gamedetailData]
  );

  // 开启弹窗
  const handleOpenModal = useCallback((types: any, bigimg?: string, num?: number) => {
    setModaltype({
      flag: true,
      type: types,
    });
    if (bigimg)
      setDetailbigimg({
        url: bigimg,
        num,
      } as any);
  }, []);

  // 获取支持设备
  const getSupportPlatform = useCallback((supportPlatform: any) => {
    const platfroms = supportPlatform?.split(',');
    const getplatform = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < platfroms?.length; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < platfromlist?.length; j++) {
        if (platfroms[i] === platfromlist[j].name) {
          getplatform.push(platfromlist[j].name);
        }
      }
    }
    return getplatform;
  }, []);

  // 切换数据tab事件
  const handleChangeDataTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentDataTab(newValue);
  }, []);

  // 点击 为钱包添加代币 ———— 需要判断当前链
  const onBtnConnectionWalletClick = useCallback(
    async (url: any) => {
      if (!url) return;

      if (typeof window.ethereum === 'undefined') {
        alert('请安装 MetaMask！');
      } else {
        const { ethereum } = window;
        console.log(ethereum.networkVersion); // 返回 钱包当前链 chainId
        const address = url; // 代币地址
        const symbol = gamedetailData?.symbol; // 代币名称(个别都是英文大写)
        const decimals = 18; // 写死18
        const image = gamedetailData?.coinIconUrl; // 代币图标
        ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address,
              symbol,
              decimals,
              image,
            },
          },
        });
      }
    },
    [gamedetailData]
  );

  // 任务时间判断
  const getTaskTimeType = useCallback((taskitem: any) => {
    const taskobj = {
      timestatus: 0,
      bg: 'rgba(21,189,68,0.1)',
      textcolor: '#15BD44',
      text: 'Ongoing',
    };
    if (taskitem?.beginTime && taskitem.endTime) {
      if (taskitem.beginTime * 1000 > new Date().getTime()) {
        taskobj.timestatus = 0;
        taskobj.bg = 'rgba(244,188,44,0.1)';
        taskobj.textcolor = '#F4BC2C';
        taskobj.text = 'Upcoming';
      }
      if (
        taskitem.beginTime * 1000 < new Date().getTime() &&
        new Date().getTime() < taskitem.endTime * 1000
      ) {
        taskobj.timestatus = 1;
        taskobj.bg = 'rgba(21,189,68,0.1)';
        taskobj.textcolor = '#15BD44';
        taskobj.text = 'Ongoing';
      }
      if (taskitem.endTime * 1000 < new Date().getTime()) {
        taskobj.timestatus = 2;
        taskobj.bg = 'rgba(159, 172, 191,0.1)';
        taskobj.textcolor = '#9facbf';
        taskobj.text = 'Ended';
      }
    }
    return taskobj;
  }, []);

  const handleToTaskdetail = useCallback(
    (id: any) => {
      linkTo(`/taskdetail/${id}`);
    },
    [linkTo]
  );

  // 投融资Tab切换
  const handleInvestItem = useCallback(
    (name: any) => {
      const finacList = (gamedetailData as any)?.financingInfoList;
      const finacLists = finacList.filter((item: any) => item.round === name);

      setInvestInfoList(finacLists);
      setFinastatus(name);
    },
    [gamedetailData]
  );

  const result = useMemo(
    () => ({
      t,
      isDark,
      smUp,
      gamedetailData,
      handleMoreBtn,
      handleFinaBtn,
      handleOpenModal,
      modaltype,
      handleInvestItem,
      GamedetailUrl,
      getSupportPlatform,
      handleCloseModal,
      gameNft,
      getNewYears,
      reviewbtn,
      handleReviewsFocus,
      detailbigimg,
      investnameList,
      investInfoList,
      handleCancel,
      handleCommentSure,
      convalue,
      handleNext,
      handlePrv,
      handleChangeValue,
      nowTimeType,
      handleToTaskdetail,
      nowContractAddress,
      nowChainData,
      isHaveToken,
      isHaveNFT,
      allgameData,
      getTaskTimeType,
      currentDataTab,
      handleChangeDataTab,
      commentlistinfo,
      onBtnConnectionWalletClick,
      finastatus,
      linkTo,
      isBrief,
    }),
    [
      t,
      isDark,
      smUp,
      gamedetailData,
      handleMoreBtn,
      handleFinaBtn,
      handleOpenModal,
      modaltype,
      handleInvestItem,
      GamedetailUrl,
      getSupportPlatform,
      handleCloseModal,
      gameNft,
      getNewYears,
      reviewbtn,
      handleReviewsFocus,
      detailbigimg,
      investnameList,
      investInfoList,
      handleCancel,
      handleCommentSure,
      convalue,
      handleNext,
      handlePrv,
      handleChangeValue,
      nowTimeType,
      handleToTaskdetail,
      nowContractAddress,
      nowChainData,
      isHaveToken,
      isHaveNFT,
      allgameData,
      getTaskTimeType,
      currentDataTab,
      handleChangeDataTab,
      commentlistinfo,
      onBtnConnectionWalletClick,
      finastatus,
      linkTo,
      isBrief,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
