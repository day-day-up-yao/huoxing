import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { memoize } from 'proxy-memoize';
import useSWR from 'swr';
import { RootState } from 'src/models/store';
import { chainlist, gameDetailDataType, platfromlist } from 'src/utils/public/datas';
import { toast } from 'src/components/toast';
import { useUserPopup } from 'src/fetchs/store';
import { queryParam, twitterLogin, discordLogin } from 'src/utils/public';
import {
  gameNftKey,
  verifyMission,
  getMissionList,
  GuildRankList,
  AcceptGuildInvite,
  HasjoinGuild,
  GuildRankDetail,
  GuildInviteCode,
  GameUserRankList,
  getDoMission,
  JoinGame,
} from 'src/fetchs/common';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

const selectDatas = memoize((state: RootState) => ({
  detail: state.common.gameDetail,
  commentListByGameId: state.comment.commentListByGameId,
  starByGameId: state.comment.starByGameId,
  selfComment: state.comment.selfComment,
}));

export const Context = createContext({} as any);
export default ({ children }: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { detail, commentListByGameId, starByGameId, selfComment } = useSelector(
    (state: RootState) => selectDatas(state)
  );

  const { data: gameNft } = useSWR(gameNftKey);
  // const { data: gameUserRank } = useSWR(gameUserRankKey);
  // 评价弹窗开启事件
  const { mutate: mutateUserInfo } = useUserPopup();

  // 是否是移动端
  const { isPc } = useBreakPoint();
  const [userFlage, setUserFlage] = useState(false); // 用户是否登录
  const [commentList, setCommentList] = useState(commentListByGameId); // 评论列表
  const [commentUserNum, setCommentUserNum] = useState(0); // 评论人数
  const [isCommentPopupShow, setIsCommentPopupShow] = useState(false); // 评价弹窗 开关
  const [currentDataTab, setCurrentDataTab] = useState(gameDetailDataType[0].value); // 当前数据Tab
  // const { trigger: triggerMissionVerify, data: missionVerify } = useGetverifyMission();

  // 新老版本详情页显示
  const [isattestation, setIsattestation] = useState(false);

  // 当前 直播地址
  // const [nowLiveUrl, setNowLiveUrl] = useState('https://www.twitch.tv/jinnytty')
  const [nowLiveUrl, setNowLiveUrl] = useState('https://www.twitch.tv/arch2023');

  // 是否显示join按钮
  const [joinbtn, setJoinbtn] = useState(true);

  // 是否是管理者
  const [isadmin, setIsadmin] = useState(false);

  // 弹窗开关
  const [openpopup, setOpenpopup] = useState(false);

  // 是否点了任务外链
  const [isClickLink, setIsClickLink] = useState<boolean>(false);

  // 任务详情信息
  const [iteminfo, setIteminfo] = useState({
    icon: '',
    info: '',
  });

  // 工会排行
  const [guildlist, setGuildlist] = useState({
    pageSize: 10,
    recordCount: 0,
    currentPage: 1,
    inforList: [],
  });

  // 详情任务列表
  const [missionlist, setMissionlist] = useState([]);

  // 工会邀请码
  // const [invitecode, setInvitecode] = useState('');
  const [invitelink, setInvitelink] = useState('');
  const [invitlinkinfo, setInvitlinkinfo] = useState({
    title: t('game_detail_create_guild'),
    desc: t('game_detail_guild_desc'),
  });

  const [guilddetailinfo, setGuilddetailinfo] = useState(); // 工会详情

  // 用户信息
  const [usersinfo, setUsersinfo] = useState<any>({
    address: '',
    avatarUrl: '',
    username: '',
    isBindGoogle: 0,
    isbindmetmask: 0,
    isBindDiscord: 0,
    isBindMetamask: 0,
  });

  // 能量排行榜
  const [energyRank, setEnergyRank] = useState({
    pageSize: 10,
    recordCount: 0,
    currentPage: 1,
    inforList: [],
  });

  // console.log(gameUserRank, 222);

  // 获取工会排行
  const getGuildRank = useCallback(() => {
    GuildRankList({
      gameId: detail.id,
      // gameId: 1949,
      currentPage: 1,
      pageSize: 10,
    }).then((res: any) => {
      if (res.code === 0) {
        setGuildlist(res.data);
      } else {
        toast.error(res.msg);
      }
    });
  }, [detail.id]);

  // 获取能量排行
  const getGameUSerRank = useCallback(() => {
    GameUserRankList({
      gameId: detail.id,
    } as any).then((res: any) => {
      if (res.code === 0) {
        setEnergyRank(res.data);
      } else {
        toast.error(res.msg);
      }
    });
  }, [detail.id]);

  // 获取工会详情
  const getGuildRankDetail = useCallback((id: any) => {
    GuildRankDetail({
      guildId: id,
    } as any).then((res: any) => {
      if (res.code === 0) {
        setGuilddetailinfo(res.data);
      } else {
        toast.error(res.msg);
      }
    });
  }, []);

  // 获取工会邀请码
  const getGuildInvite = useCallback(() => {
    if (Cookies.get('uid')) {
      GuildInviteCode({
        gameName: detail.name,
      }).then((res) => {
        if (res.code === 0) {
          // setInvitecode(res.data);
          const link = `${window.location.href.split('?')[0]}?invitecode=${
            res.data
          }&&inviteuser=${usersinfo.username?.replace(' ', '%20')}`;
          setInvitelink(link);
        } else {
          toast.error(res.msg);
        }
      });
    } else {
      mutateUserInfo({ type: 0, bool: true });
    }
  }, [detail.name, mutateUserInfo, usersinfo.username]);

  // task close弹窗
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClose = () => {
    setOpenpopup(false);
    setIsClickLink(false);
  };

  // task open弹窗
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOpen = (avatar: any, item: any) => {
    if (item.finishStatus === 1) return;
    setIteminfo({
      icon: avatar,
      info: item,
    });
    setOpenpopup(true);
  };

  // 邀请人信息
  const [inviteinfo, setInviteinfo] = useState<any>({
    code: '',
    name: '',
  });

  const [invitmodel, setInvitmodel] = useState({
    isopen: false,
    type: 'islink',
  });

  // 初始化参数
  // const commentFirst = useRef(0)
  // useEffect(() => {
  //     if (commentFirst.current !== 0) return
  //     setCommentList(commentListByGameId)
  //     commentFirst.current = 0
  // }, [commentListByGameId])

  useEffect(() => {
    console.log('detail', detail, gameNft);
  }, [detail, gameNft]);

  // Join按钮： 未登录显示 已登陆管理员不显示 非管理员加入以后不显示
  useEffect(() => {
    if (queryParam('invitecode') && queryParam('inviteuser')) {
      setInviteinfo({
        code: queryParam('invitecode'),
        name: queryParam('inviteuser'),
      });
      setInvitmodel({
        isopen: true,
        type: 'isconfirm',
      });
    }
    getGuildRank();
    getGameUSerRank();
    getMissionList({
      gameId: detail.id,
    }).then((res: any) => {
      if (res.code === 0) {
        console.log(res.data, 'task列表');
        setMissionlist(res.data);
      }
    });
    if (Cookies.get('uid')) {
      setUsersinfo({
        address: Cookies.get('address'),
        avatarUrl: Cookies.get('avatarUrl'),
        username: Cookies.get('username'),
        isBindGoogle: 0,
        isbindmetmask: 0,
        isBindDiscord: 0,
        isBindMetamask: 0,
      });
      // 判断是否是管理者
      if (Cookies.get('adminGameId') !== 'undefined') {
        if (JSON.parse(Cookies.get('adminGameId') as any) === detail.id) {
          setJoinbtn(false);
          setIsadmin(true);
        }
      }
      if (detail.isSelfJoin === 1) {
        setJoinbtn(false);
      }
    }
  }, [detail.id, getGuildRank, getGameUSerRank, detail.isSelfJoin]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleModalOpen = (type: any) => {
    if (Cookies.get('uid')) {
      getGuildInvite();
      if (type === 'create') {
        setInvitlinkinfo({
          title: t('game_detail_create_guild'),
          desc: t('game_detail_guild_desc'),
        });
      }
      if (type === 'invite') {
        setInvitlinkinfo({
          title: t('game_detail_invite_friend'),
          desc: t('game_detail_invite_desc'),
        });
      }
      setInvitmodel({
        isopen: true,
        type: 'islink',
      });
    } else {
      mutateUserInfo({ type: 0, bool: true });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleModalClose = () => {
    setInvitmodel({
      isopen: false,
      type: 'islink',
    });
  };

  // 加入工会
  const handleTOJoinguild = useCallback(
    (id: any) => {
      HasjoinGuild({
        guildId: id,
      }).then((res) => {
        if (res.code === 0) {
          toast.success(t('game_detail_join_success'));
          window.location.href = window.location.pathname;
        } else {
          toast.error(res.msg);
        }
      });
    },
    [t]
  );

  const handleConfirm = useCallback(() => {
    if (!Cookies.get('uid')) {
      setInvitmodel({
        isopen: false,
        type: 'isconfirm',
      });
      mutateUserInfo({ type: 0, bool: true });
      return;
    }
    // console.log(inviteinfo);
    AcceptGuildInvite({
      inviteCode: queryParam('invitecode'),
    } as any).then((res) => {
      if (res.code === 0) {
        toast.success(t('game_detail_join_success_fuild'));
        window.location.href = `${window.location.pathname}`;
      } else {
        toast.error(res.msg);
      }
    });
  }, [mutateUserInfo, t]);

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
  const isHaveToken = useMemo(() => detail?.symbol, [detail?.symbol]);
  // 是否有 NFT 数据
  const isHaveNFT = useMemo(() => gameNft && gameNft.length > 0, [gameNft]);

  // 游戏 当前合约地址
  const nowContractAddress = useMemo(() => {
    let add = '';
    if (detail?.contractAddress) {
      const addList = JSON.parse(detail?.contractAddress);
      const keyList = Object.keys(addList);

      add = addList[keyList[0]];
      setNowChain(keyList[0]);
    }

    return add;
  }, [detail?.contractAddress]);

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

  // 点击切换链按钮事件
  const onBtnChangeClick = useCallback(
    (chain: any) => {
      setNowChain(chain);
    },
    [setNowChain]
  );

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
        const symbol = detail?.symbol; // 代币名称(个别都是英文大写)
        const decimals = 18; // 写死18
        const image = detail?.coinIconUrl; // 代币图标
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
    [detail]
  );

  // 加入游戏
  const handleJoinGame = useCallback(() => {
    if (!Cookies.get('uid')) {
      mutateUserInfo({ type: 0, bool: true });
      return;
    }
    JoinGame({
      gameId: detail.id,
    }).then((res) => {
      if (res.code === 0) {
        toast.success(t('game_detail_join_success'));
        setJoinbtn(false);
      } else {
        toast.error(res.msg);
      }
    });
  }, [detail.id, mutateUserInfo, t]);

  // 当前标签页
  const [nowTab, setNowTab] = useState(1);
  // 点击 切换标签 按钮事件
  const onBtnChangeTabClick = useCallback((event: React.SyntheticEvent, id: any) => {
    setNowTab(id);
  }, []);

  // 简介 缩放
  const [isBrief, setIsBrief] = useState(false);
  // 点击 简介缩放按钮
  const onBtnMoreClick = useCallback(() => {
    setIsBrief(!isBrief);
  }, [isBrief]);

  // 请求当前游戏详情 用户自己的评论
  const getSelfComment = useCallback(() => {
    dispatch.comment.getSelfComment({
      gameId: detail.id,
    });
  }, [detail.id, dispatch.comment]);

  // 判断是否登录
  useEffect(() => {
    if (Cookies.get('uid')) {
      setUserFlage(true);
      getSelfComment();
    } else {
      setUserFlage(false);
    }
  }, [getSelfComment]);

  // 请求评星数据
  const getStarByGameId = useCallback(() => {
    dispatch.comment.getStarByGameId({
      gameId: detail.id,
    });
  }, [detail.id, dispatch.comment]);

  // 评星数据整理
  const starDate = useMemo(() => {
    const starList = [0, 0, 0, 0, 0];
    if (!starByGameId || !starByGameId?.commentUserNum) return starList;
    if (starByGameId && starByGameId.commentUserNum) setCommentUserNum(starByGameId.commentUserNum);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < starByGameId?.starList.length; i++) {
      const element = starByGameId?.starList[i];
      starList[element.star - 1] = element.num;
    }

    return starList;
  }, [starByGameId]);

  // 请求评价列表事件
  const getUserReviewsList = useCallback(
    (curPage: any) => {
      dispatch.comment
        .getCommentListByGameId({
          gameId: detail.id,
          currentPage: curPage,
          pageSize: 10,
        })
        .then((res: any) => {
          if (res.code === 0) {
            setCommentList(res.data);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [detail.id, dispatch.comment]
  );

  // 切换评价页数
  const onBtnUserReviewsPageClick = useCallback(
    (curPage: any) => {
      getUserReviewsList(curPage);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    [getUserReviewsList]
  );

  const onBtnCommentPopupOpenClick = useCallback(() => {
    if (userFlage) {
      setIsCommentPopupShow(true);
    } else {
      mutateUserInfo({ type: 0, bool: true });
    }
  }, [mutateUserInfo, userFlage]);

  // 评价弹窗关闭事件
  const onBtnCommentPopupCloseClick = useCallback(() => {
    setIsCommentPopupShow(false);
  }, []);

  // 发送评价确定事件
  const onBtnAddCommentClick = useCallback(
    (id: any, content: any, star: any) => {
      if (id) {
        dispatch.comment
          .updateComment({
            content,
            star,
            id,
          })
          .then((res: any) => {
            if (res.code === 0) {
              getUserReviewsList(1);
              getStarByGameId();
              getSelfComment();
              onBtnCommentPopupCloseClick();
            } else {
              toast.error(res.msg);
            }
          });
      } else {
        dispatch.comment
          .addComment({
            content,
            star,
            gameId: detail.id,
          })
          .then((res: any) => {
            if (res.code === 0) {
              getUserReviewsList(1);
              getStarByGameId();
              getSelfComment();
              onBtnCommentPopupCloseClick();
            } else {
              toast.error(res.msg);
            }
          });
      }
    },
    [
      dispatch.comment,
      getUserReviewsList,
      getStarByGameId,
      getSelfComment,
      onBtnCommentPopupCloseClick,
      detail.id,
    ]
  );

  // 切换数据时间类型
  const onBtnChangeTimeTypeClick = useCallback((id: any) => {
    setNowTimeType(id);
  }, []);

  // 点击 切换直播地址按钮事件
  const onBtnChangeLiveUrlClick = useCallback((url: any) => {
    setNowLiveUrl(url);
  }, []);

  // 外链跳转呢
  const handleClickWithoutLink = useCallback((link: any) => {
    setIsClickLink(true);
    window.open(link);
  }, []);

  // 点击验证任务
  const handleClickVerify = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (iteminfo: any, param: any) => {
      const linktype = [7, 10];
      if (Cookies.get('auToken')) {
        if (linktype.includes(iteminfo.missionType)) {
          if (!isClickLink) return toast.error(t('game_detail_task_link_info'));
        }
        verifyMission({
          missionId: iteminfo.id,
          param: param || undefined,
        }).then((res: any) => {
          if (res.code === 0) {
            getMissionList({
              gameId: detail.id,
            }).then((ress: any) => {
              if (ress.code === 0) {
                setMissionlist(ress.data);
                setIsClickLink(false);
              }
            });
            setOpenpopup(false);
          } else if (res.code === -401) {
            // 推特授权失效
            // window.localStorage.setItem('gamedetail', detail.id);
            window.localStorage.setItem('againcode', res.code);
            twitterLogin();
          } else if (res.code === -402) {
            // discord授权失效
            // window.localStorage.setItem('gamedetail', detail.id);
            window.localStorage.setItem('againcode', res.code);
            discordLogin();
          } else {
            toast.error(res.msg);
          }
        });
      } else {
        setOpenpopup(false);
        mutateUserInfo({ type: 0, bool: true });
      }
    },
    [detail.id, isClickLink, mutateUserInfo, t]
  );

  // 任务跳转第三方链接
  const handleclickLink = useCallback(
    (link: any, info: any) => {
      if (openpopup) {
        // if (info.missionType === 1) {
        //   handleClickVerify(info.missionType);
        //   return;
        // }
        if (
          info.missionType === 2 ||
          info.missionType === 3 ||
          info.missionType === 4 ||
          info.missionType === 5
        ) {
          getDoMission({
            missionId: info.id,
            missionType: info.missionType,
          });
        }
        window.open(
          link,
          '_blank',
          'width=1000,height=600,menubar=no,toolbar=no,status=no,scrollbars=yes'
        );
      }
    },
    [openpopup]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const verifyidlist = [1];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allVerifyIdList = [1];

  const result = useMemo(
    () => ({
      t,
      isPc,
      detail,
      nowChain,
      nowChainData,
      nowContractAddress,
      nowTab,
      nowTimeType,
      nowLiveUrl,
      isBrief,
      commentList,
      commentUserNum,
      starDate,
      selfComment,
      isCommentPopupShow,
      gameNft,
      currentDataTab,
      isHaveToken,
      isHaveNFT,
      handleChangeDataTab,
      getSupportPlatform,
      onBtnMoreClick,
      onBtnChangeClick,
      onBtnConnectionWalletClick,
      onBtnChangeTabClick,
      onBtnUserReviewsPageClick,
      onBtnAddCommentClick,
      onBtnCommentPopupOpenClick,
      onBtnCommentPopupCloseClick,
      onBtnChangeTimeTypeClick,
      onBtnChangeLiveUrlClick,
      handleClickVerify,
      handleclickLink,
      handleClose,
      handleOpen,
      missionlist,
      iteminfo,
      openpopup,
      joinbtn,
      isadmin,
      userFlage,
      getGuildInvite,
      usersinfo,
      guildlist,
      verifyidlist,
      isattestation,
      inviteinfo,
      invitmodel,
      handleModalOpen,
      invitlinkinfo,
      handleModalClose,
      handleConfirm,
      invitelink,
      energyRank,
      handleClickWithoutLink,
      handleJoinGame,
      guilddetailinfo,
      getGuildRankDetail,
      handleTOJoinguild,
      allVerifyIdList,
    }),
    [
      t,
      isPc,
      detail,
      nowChain,
      nowChainData,
      nowContractAddress,
      nowTab,
      nowTimeType,
      nowLiveUrl,
      isBrief,
      commentList,
      commentUserNum,
      starDate,
      selfComment,
      isCommentPopupShow,
      gameNft,
      currentDataTab,
      isHaveToken,
      isHaveNFT,
      handleChangeDataTab,
      getSupportPlatform,
      onBtnMoreClick,
      onBtnChangeClick,
      onBtnConnectionWalletClick,
      onBtnChangeTabClick,
      onBtnUserReviewsPageClick,
      onBtnAddCommentClick,
      onBtnCommentPopupOpenClick,
      onBtnCommentPopupCloseClick,
      onBtnChangeTimeTypeClick,
      onBtnChangeLiveUrlClick,
      handleClickVerify,
      handleclickLink,
      handleClose,
      handleOpen,
      missionlist,
      iteminfo,
      openpopup,
      joinbtn,
      isadmin,
      userFlage,
      guildlist,
      usersinfo,
      getGuildInvite,
      verifyidlist,
      isattestation,
      inviteinfo,
      invitmodel,
      handleModalOpen,
      invitlinkinfo,
      handleModalClose,
      handleConfirm,
      invitelink,
      energyRank,
      handleClickWithoutLink,
      handleJoinGame,
      guilddetailinfo,
      getGuildRankDetail,
      handleTOJoinguild,
      allVerifyIdList,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
