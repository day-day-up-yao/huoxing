import React, { createContext, useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import { toast } from 'src/components/toast';
import { ConnectMetamask } from 'src/utils/public/metamask';
import { userCenterCommentTabs } from 'src/utils/public/datas';
import {
  twitterLogin,
  discordLogin,
  isUsername,
  queryParam,
  downloadExcel,
} from 'src/utils/public';
import { getAccountInfo, useGetMyNftKey, changeNickname } from 'src/fetchs/user';
import { useUserPopup } from 'src/fetchs/store';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { ModeVals, useSettingsContext } from 'src/sections/layouts/settings';
// import useComingsoon from '../../public/hooks/useComingsoon'

const clientId = '129642972773-uqc65q75cjnusvudqpoqc840jlhmc44f.apps.googleusercontent.com';

export const Context = createContext({} as any);
export default (props: any) => {
  const { mode } = useSettingsContext();
  const isDark = mode === ModeVals.DARK;
  const dispatch = useDispatch();
  // const ComingShow = useComingsoon()
  const { t, i18n } = useTranslation();
  const { isPc } = useBreakPoint();
  const { linkTo } = useLink();
  const { children } = props;
  const [tabType, setTabType] = useState(0);
  const [fileInfo, setFileInfo] = useState<any>();
  const [accountinfo, setAccountinfo] = useState<any>({
    addr: '',
    avatarUrl: '',
    brief: '',
    email: '',
    name: '',
    uid: '',
    isBindGoogle: 0,
  });
  const [isloading, setIsloading] = useState(false);

  const { trigger: triggerMyNft, data: myNftData } = useGetMyNftKey(); // 用户 徽章列表

  const [lefttabstype, setLefttabstype] = useState(0);

  const [username, setUsername] = useState<any>();

  const { mutate: mutateUserInfo } = useUserPopup();

  const [mypage, setMyPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabslist = [
    {
      icon: 'participated',
      name: t('user_participated'),
      type: 0,
    },
    {
      icon: 'taskmanagemen',
      name: t('user_taskmanagemen'),
      type: 1,
    },
    {
      icon: 'badge',
      name: t('user_badge'),
      type: 2,
    },
    {
      icon: 'comment',
      name: t('rate_popup_btn'),
      type: 3,
    },
    {
      icon: 'settings',
      name: t('user_settings'),
      type: 4,
    },
  ];

  // 未登录跳出
  useEffect(() => {
    if (!Cookies.get('uid')) {
      linkTo(paths.home);
    }
  }, [linkTo]);

  useEffect(() => {
    if (queryParam('usertabs')) {
      setLefttabstype(JSON.parse(queryParam('usertabs') as string));
    }
    const avatarUrl = Cookies.get('avatarUrl');
    setFileInfo(avatarUrl);
    setUsername(Cookies.get('username'));
    const usertab = window.localStorage.getItem('usertab');
    if (usertab) {
      getTabtype(Number(usertab));
    }
  }, []);

  const getChangeUserName = useCallback((name: any) => {
    setUsername(name);
  }, []);

  const getUserAvatar = useCallback((url: any) => {
    setFileInfo(url);
  }, []);

  // 修改用户名
  const handleChangeName = useCallback(() => {
    if (!isUsername(username)) return;
    changeNickname({
      name: username,
    }).then((res: any) => {
      if (res.code === 0) {
        Cookies.set('username', username);
      } else {
        toast.error(res.msg);
      }
    });
  }, [username]);

  // 修改密码
  const handleChangePasd = useCallback(() => {
    mutateUserInfo({ type: 2, bool: true });
  }, [mutateUserInfo]);

  // 切换tabs
  const handleSelectTab = useCallback((type: any) => {
    setLefttabstype(type);
  }, []);

  // 绑定谷歌账号
  const BindGoogle = useCallback(
    (credential: any) => {
      dispatch.user
        .userCenterBindgoogle({
          email: Cookies.get('email'),
          credential,
        })
        .then((res: any) => {
          if (res.code === 0) {
            window.location.reload();
            // console.log(res.data)
          } else {
            toast.error(res.msg);
          }
        });
    },
    [dispatch.user]
  );

  // 同意授权登录回调
  const handleCredentialResponse = useCallback(
    (res: any) => {
      console.log('success_google');
      // console.log(res)
      if (res.credential) {
        closeWarteFn();
        Cookies.set('credential', res.credential);
        BindGoogle(res.credential);
      }
    },
    [BindGoogle]
  );

  // 开始唤起谷歌登录
  const handleClicklistenter = () => {
    console.log('bind_google_start');
    setIsloading(true);
  };

  useEffect(() => {
    if (Cookies.get('credential')) return;
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('google_bind'),
        {
          theme: 'outline',
          size: 'medium',
          type: 'icon',
          click_listener: handleClicklistenter,
        } // customization attributes
      );
    }
  }, [handleCredentialResponse]);

  const closeWarteFn = () => {
    setIsloading(false);
  };

  // 连接小狐狸钱包
  const connectMatemask = useCallback(async () => {
    setIsloading(true);
    const metamaskInfo = await ConnectMetamask();
    if (metamaskInfo) {
      await dispatch.user
        .connectMetamask({
          address: metamaskInfo.address,
          email: Cookies.get('email'),
          signature: metamaskInfo.sign,
          verifyId: metamaskInfo.verifyId,
        })
        .then((res: any) => {
          if (res.code === 0) {
            window.location.reload();
            // console.log(res.data)
          } else {
            toast.error(res.msg);
          }
        });
    }
  }, [dispatch]);

  // 解绑小狐狸钱包
  const unBindMetamask = useCallback(() => {
    dispatch.user.unbindMetamasket().then((res: any) => {
      if (res.code === 0) {
        Cookies.remove('address');
        window.location.reload();
      } else {
        toast.error(res.msg);
      }
    });
  }, [dispatch.user]);

  // 绑定其他账号 推特/discord/邮箱 绑定
  const userBindOther = useCallback(
    (name: any) => {
      if (name === 'Twitter' && accountinfo.isBindTwitter === 0) {
        window.localStorage.removeItem('taskdetail');
        twitterLogin();
      } else if (name === 'Discord' && accountinfo.isBindDiscord === 0) {
        window.localStorage.removeItem('taskdetail');
        discordLogin();
      } else if (name === 'Email' && accountinfo.isBindEmail === 0) {
        mutateUserInfo({ type: 3, bool: true });
      }
    },
    [accountinfo.isBindDiscord, accountinfo.isBindEmail, accountinfo.isBindTwitter, mutateUserInfo]
  );

  // 推特解绑
  const unbindTwitter = useCallback(() => {
    // e.nativeEvent.stopImmediatePropagation()
    // e.stopPropagation()
    dispatch.user.unbindTwitter().then((res: any) => {
      if (res.code === 0) {
        Cookies.remove('codetwitter');
        window.location.reload();
      } else {
        toast.error(res.msg);
      }
    }, []);
  }, [dispatch.user]);

  // discord解绑
  const unbindDiscord = useCallback(() => {
    // e.stopPropagation()
    dispatch.user.unbindDiscord().then((res: any) => {
      if (res.code === 0) {
        Cookies.remove('codediscord');
        window.location.reload();
      } else {
        toast.error(res.msg);
      }
    }, []);
  }, [dispatch.user]);

  // 解绑谷歌
  const unBindGoogleFn = useCallback(() => {
    dispatch.user.unbindGoogle().then((res: any) => {
      if (res.code === 0) {
        Cookies.remove('credential');
        window.location.reload();
      } else {
        toast.error(res.msg);
      }
    });
  }, [dispatch.user]);

  // 解绑邮箱
  const unBindEmailFn = useCallback(() => {
    dispatch.user.removeBindEmail().then((res: any) => {
      if (res.code === 0) {
        Cookies.remove('email');
        window.location.reload();
      } else {
        toast.error(res.msg);
      }
    });
  }, [dispatch.user]);

  const unbindFunction = useCallback(
    (name: any) => {
      if (name === 'Google') unBindGoogleFn();
      if (name === 'Twitter') unbindTwitter();
      if (name === 'Discord') unbindDiscord();
      if (name === 'Email') unBindEmailFn();
    },
    [unBindEmailFn, unBindGoogleFn, unbindDiscord, unbindTwitter]
  );

  const [personsetinfo, setPersonsetinfo] = useState({
    currentPage: 0,
    currentTime: 0,
    inforList: [],
    pageCount: 0,
    pageSize: 0,
    recordCount: 0,
    strBonus: 0,
  });
  const [questloading, setQuestloading] = useState(true);
  const [rewardtype, setRewardtype] = useState<any>();

  // 获取奖励类型
  const getRewardType = useCallback((type: any) => {
    if (type === -1) {
      setRewardtype(undefined);
    } else {
      setRewardtype(type);
    }
  }, []);

  // 获取个人创建任务列表
  const getPersonageSetQuest = useCallback(
    (page: any) => {
      setQuestloading(true);
      dispatch.quest
        .getMyQuestList({
          currentPage: page,
          pageSize: 10,
        })
        .then((res: any) => {
          if (res.code === 0 && res.data) {
            setQuestloading(false);
            setPersonsetinfo(res.data);
          }
        });
    },
    [dispatch.quest]
  );

  // 删除创建的任务
  const toDeleteTask = useCallback(
    (id: any) => {
      dispatch.quest
        .taskDeleteItem({
          questId: id,
        })
        .then((res: any) => {
          if (res.code === 0) {
            getPersonageSetQuest(1);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [dispatch.quest, getPersonageSetQuest]
  );

  // 我的活动获取新页码
  const getMyPage = useCallback(
    (page: any) => {
      setMyPage(page);
      getPersonageSetQuest(page);
    },
    [getPersonageSetQuest]
  );

  // 任务列表操作 / 上传 /下载 /删除 0下载模版 1 下载提交名单 2 下载中奖名单 4 删除

  const handleTaskControls = useCallback(
    (type: any, taskdetail: any) => {
      if (type === 0) {
        window.open('https://naga-prod.mars-block.com/template/submitsheet.xlsx');
      }
      if (type === 1) {
        dispatch.quest
          .downloadSubmit({
            questId: taskdetail.id,
          })
          .then((res: any) => {
            downloadExcel(res, 'submitlists');
          });
      }
      if (type === 2) {
        dispatch.quest
          .downlaodWinnerlist({
            questId: taskdetail.id,
          })
          .then((res: any) => {
            downloadExcel(res, 'winnerlists');
          });
      }
      if (type === 4) {
        toDeleteTask(taskdetail.id);
      }
    },
    [dispatch.quest, toDeleteTask]
  );

  useEffect(() => {
    if (Cookies.get('uid')) {
      getPersonageSetQuest(1);
    }
  }, [getPersonageSetQuest]);

  const [personjoininfo, setPersonjoininfo] = useState({
    currentPage: 0,
    currentTime: 0,
    inforList: [],
    pageCount: 0,
    pageSize: 0,
    recordCount: 0,
  });

  const joinpage = useRef(1);

  // 获取个人参与任务列表
  const getPersonageQuest = useCallback(() => {
    setQuestloading(true);
    dispatch.quest
      .getMyJoinQuestList({
        filterType: rewardtype,
        currentPage: joinpage.current,
        pageSize: 16,
      })
      .then((res: any) => {
        if (res.code === 0 && res.data) {
          setQuestloading(false);
          setPersonjoininfo(res.data);
        }
      });
  }, [dispatch.quest, rewardtype]);

  useEffect(() => {
    if (Cookies.get('uid')) {
      getPersonageQuest();
    }
  }, [getPersonageQuest, rewardtype]);

  /* -------------------------------------- 评论相关 Start -------------------------------------- */

  // 当前评论页面 ———— 1.游戏评论 2.资讯评论
  const [nowCommentType, setNowCommentType] = useState(userCenterCommentTabs[0].tab);
  // 当前评论列表信息
  const [commentInfo, setCommentInfo] = useState({
    currentPage: 1,
    currentTime: 0,
    inforList: [],
    pageCount: 0,
    pageSize: 0,
    recordCount: 0,
  });
  const [articleCommentInfo, setArticleCommentInfo] = useState({
    currentPage: 1,
    currentTime: 0,
    inforList: [],
    pageCount: 0,
    pageSize: 0,
    recordCount: 0,
  });
  // 每条评论信息
  const [commentItem, setCommentItem] = useState<any>();
  const [articleCommentItem, setArticleCommentItem] = useState();
  // 评论页码
  const pageRef = useRef(1);
  const articlePageRef = useRef(1);
  // 获取评论列表
  const getCommentInfo = useCallback(() => {
    dispatch.comment
      .getCommentListByUid({
        currentPage: pageRef.current,
        pageSize: 10,
      })
      .then((res: any) => {
        if (res.code === 0) {
          setCommentInfo(res.data);
          setCommentItem(undefined);
        } else {
          toast.error(res.msg);
        }
      });
  }, [dispatch.comment]);
  const getArticleCommentInfo = useCallback(() => {
    dispatch.comment
      .getArticleCommentListByUid({
        currentPage: articlePageRef.current,
        pageSize: 10,
      })
      .then((res: any) => {
        if (res.code === 0) {
          setArticleCommentInfo(res.data);
          setArticleCommentItem(undefined);
        } else {
          toast.error(res.msg);
        }
      });
  }, [dispatch.comment]);

  // 获取参与活动页码
  const handleJoinPage = useCallback(
    (page: any) => {
      joinpage.current = page;
      getPersonageQuest();
    },
    [getPersonageQuest]
  );

  // 获取游戏评论页码
  const selectPage = useCallback(
    (num: any) => {
      pageRef.current = num;
      // setPage(num)
      getCommentInfo();
    },
    [getCommentInfo]
  );
  const selectArticlePage = useCallback(
    (num: any) => {
      articlePageRef.current = num;
      // setPage(num)
      getArticleCommentInfo();
    },
    [getArticleCommentInfo]
  );

  // 修改更新评论
  const onChangeCommentClick = useCallback(
    (id: any, content: any, star: any) => {
      dispatch.comment
        .updateComment({
          content,
          star,
          id,
        })
        .then((res: any) => {
          if (res.code === 0) {
            getCommentInfo();
          } else {
            toast.error(res.msg);
          }
        });
    },
    [dispatch.comment, getCommentInfo]
  );
  const onChangeArticleCommentClick = useCallback(
    (id: any, content: any) => {
      dispatch.comment
        .updateArticleComment({
          content,
          id,
        })
        .then((res: any) => {
          if (res.code === 0) {
            getArticleCommentInfo();
          } else {
            toast.error(res.msg);
          }
        });
    },
    [dispatch.comment, getArticleCommentInfo]
  );

  // 取消选中点击事件
  const onChangeCloseItemClick = useCallback(() => {
    setCommentItem(undefined);
  }, []);
  const onChangeCloseArticleItemClick = useCallback(() => {
    setArticleCommentItem(undefined);
  }, []);

  // 点击右侧修改按钮 选中评论事件
  const getCommentItemInfo = useCallback((item: any) => {
    setCommentItem(item);
  }, []);
  const getCommentArticleItemInfo = useCallback((item: any) => {
    setArticleCommentItem(item);
  }, []);

  // 点击切换评论按钮事件
  const onBtnChangeCommentTypeClick = useCallback((id: any) => {
    setNowCommentType(id);
  }, []);

  // 点击左侧头像名称 跳转详情事件
  const onBtnLinkToClick = useCallback(
    (item: any, isNews?: boolean) => {
      if (item) {
        if (isNews) {
          linkTo(`${paths.article}/${item.articleId}`);
        } else {
          linkTo(`${paths.game}/${item.gameId}`);
        }
      }
    },
    [linkTo]
  );

  /* -------------------------------------- 评论相关 End -------------------------------------- */

  useEffect(() => {
    if (Cookies.get('uid')) {
      getAccountInfo().then((res: any) => {
        if (res.code === 0) {
          setAccountinfo(res.data);
          if (res.data.name && res.data.name !== '') {
            document.title = `${res.data.name} | NAGA-Discover The Best Web3 Gaming`;
          } else {
            document.title = 'NAGA | NAGA-Discover The Best Web3 Gaming';
          }
        } else {
          toast.error(res.msg);
        }
      });

      getCommentInfo();
      getArticleCommentInfo();
      triggerMyNft();
    }
  }, [getArticleCommentInfo, getCommentInfo, triggerMyNft]);

  const getTabtype = (type: any) => {
    setTabType(type);
    window.localStorage.setItem('usertab', type);
  };

  const result = useMemo(
    () => ({
      t,
      i18n,
      isPc,
      isDark,
      linkTo,
      tabType,
      fileInfo,
      accountinfo,
      commentInfo,
      commentItem,
      articleCommentInfo,
      articleCommentItem,
      lefttabstype,
      handleSelectTab,
      nowCommentType,
      isloading,
      personjoininfo,
      personsetinfo,
      questloading,
      myNftData,
      toDeleteTask,
      getRewardType,
      closeWarteFn,
      userBindOther,
      unbindTwitter,
      selectPage,
      selectArticlePage,
      connectMatemask,
      unBindMetamask,
      unbindFunction,
      onChangeCloseItemClick,
      onChangeCloseArticleItemClick,
      getCommentItemInfo,
      getCommentArticleItemInfo,
      onChangeCommentClick,
      onChangeArticleCommentClick,
      onBtnChangeCommentTypeClick,
      onBtnLinkToClick,
      getUserAvatar,
      getChangeUserName,
      handleChangeName,
      handleChangePasd,
      handleTaskControls,
      getMyPage,
      handleJoinPage,
      mypage,
      username,
      tabslist,
      getTabtype,
    }),
    [
      t,
      i18n,
      isPc,
      isDark,
      linkTo,
      tabType,
      fileInfo,
      accountinfo,
      commentInfo,
      commentItem,
      articleCommentInfo,
      articleCommentItem,
      lefttabstype,
      handleSelectTab,
      nowCommentType,
      isloading,
      personjoininfo,
      personsetinfo,
      questloading,
      myNftData,
      toDeleteTask,
      getRewardType,
      userBindOther,
      unbindTwitter,
      selectPage,
      selectArticlePage,
      connectMatemask,
      unBindMetamask,
      unbindFunction,
      onChangeCloseItemClick,
      onChangeCloseArticleItemClick,
      getCommentItemInfo,
      getCommentArticleItemInfo,
      onChangeCommentClick,
      onChangeArticleCommentClick,
      onBtnChangeCommentTypeClick,
      onBtnLinkToClick,
      getUserAvatar,
      getChangeUserName,
      handleChangeName,
      handleChangePasd,
      handleTaskControls,
      getMyPage,
      handleJoinPage,
      mypage,
      username,
      tabslist,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
