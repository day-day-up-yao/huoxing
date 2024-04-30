import React, { createContext, useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { memoize } from 'proxy-memoize';
import { toast } from 'src/components/toast';
import { RootState } from 'src/models/store';
import { twitterLogin, downloadExcel, discordLogin } from 'src/utils/public';
import { getAccountInfo } from 'src/fetchs/user';
import { useUserPopup } from 'src/fetchs/store';

export const twitterLimit = (message?: string) => {
  if (!message) return 0;
  const regex = /(\d+)/g;
  const time: string[] = message?.match(regex) || [];
  let num = 15;
  if (time.length > 0) {
    num = Math.ceil(Number(time[0]) / 60);
  }
  return num;
};

const selectDatas = memoize((state: RootState) => ({
  questdetail: state.quest.questdetail,
}));

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { questdetail } = useSelector((state: RootState) => selectDatas(state));

  const startTime = questdetail.beginTime * 1000;
  const endTime = questdetail.endTime * 1000;
  const [timestatus, setTimestatus] = useState(-1); // 0未开始 1 正在进行中 2 已结束
  const [winflag, setWinflag] = useState(false);
  const [dominfo, setDominfo] = useState({
    title: '',
    link: '',
    host: '',
  });
  const [userinfo, setUserinfo] = useState<any>({
    isBindTwitter: 0,
    isBindMetamask: 0,
  });
  const [verifylist, setVerifylist] = useState<any>(questdetail.taskList);
  const [verifynum, setVerifynum] = useState(0);
  const [verifyidlist, setVerifyidlist] = useState<any>([]);
  const [allVerifyIdList, setAllVerifyIdList] = useState<any>([]);
  const [submitfinish, setSubmitfinish] = useState<any>(questdetail.taskFinishStatus);
  const [ismore, setIsmore] = useState(false);
  const [qainputText, setQainputText] = useState<any>('');
  const [carinputText, setCarinputText] = useState<any>('');
  const [carurl, setCarurl] = useState<any>('');
  const [isshowwinnerbtn, setIsshowwinnerbtn] = useState(false);
  const [winneruploadflag, setWinneruploadflag] = useState(false);

  const reactQuillRef = useRef<HTMLElement>();

  // 更多按钮的隐藏与显示
  const showMoreBtn = useCallback(() => {
    // const descdom = document.getElementById('taskdetail-left-desc-con-id-con');
    const descdom = reactQuillRef.current;

    if (descdom) {
      // const styles = window.getComputedStyle(descdom, null)
      // const num = parseInt(styles.lineHeight, 10)
      // const nums = parseInt(styles.height, 10)
      const nums = parseInt(`${descdom.offsetHeight}`, 10);
      const num = 20;
      const linenum = nums / num;
      if (questdetail.description === '' || linenum < 5) {
        setIsmore(false);
        // clearInterval();
      } else {
        setIsmore(true);
        // clearInterval();
      }
    }
  }, [questdetail.description]);

  useEffect(() => {
    if (reactQuillRef.current) {
      showMoreBtn();
    }
    // 因为富文本前端加载，需要等待加载完ref绑定
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMoreBtn, reactQuillRef.current]);

  // const getTokenname = async () => {
  //     const info = await getDaiContractInfo(questdetail.chain, questdetail.rewardTokenAddr, true)

  //     console.log(info)
  // }

  const [winnerinfo, setWinnerinfo] = useState({
    currentPage: 1,
    currentTime: null,
    inforList: [],
    pageCount: 0,
    pageSize: 50,
    recordCount: 0,
  });

  const getWinnerInfo = useCallback(() => {
    dispatch.quest
      .getWinnerlist({
        questId: questdetail.id,
        currentPage: 1,
        pageSize: 50,
      })
      .then((res: any) => {
        if (res.code === 0) {
          setWinnerinfo(res.data);
        } else {
          toast.error(res.msg);
        }
      });
  }, [dispatch.quest, questdetail.id]);

  // 获取输入框信息
  const getInputinfo = useCallback((e: any, info: any) => {
    const { value } = e.target;
    if (info.taskType === 8) {
      setQainputText(value);
    }

    if (info.taskType === 9) {
      setCarinputText(value);
    }
  }, []);

  // 获取工作证明图片
  const getCarUrl = useCallback((url: any) => {
    setCarurl(url);
  }, []);

  // 获取用户信息
  const getAccount = useCallback(() => {
    if (Cookies.get('auToken')) {
      getAccountInfo().then((res: any) => {
        if (res.code === 0) {
          setUserinfo(res.data);
          if (
            res.data.uid === questdetail.uid &&
            (questdetail.status === 3 || questdetail.status === 2)
          ) {
            setIsshowwinnerbtn(true);
          }
        } else {
          toast.error(res.msg);
        }
      });
    }
  }, [questdetail.status, questdetail.uid]);

  // 上传中奖名单弹窗开关
  const winnerPopup = (flag: any) => {
    setWinneruploadflag(flag);
  };

  // 倒计时结束执行
  const countdownEnd = useCallback(() => {
    // console.log(timestatus)
    // if (startTime && startTime - new Date().getTime() <= 0 && endTime - new Date().getTime() > 0) {
    //     setTimestatus(1)
    // }
    if (timestatus === 0) setTimestatus(1);
    if (timestatus === 1) setTimestatus(2);
  }, [timestatus]);

  // 点击查看更多
  const seeMore = useCallback(() => {
    const destdom = document.getElementById('taskdetail-left-desc-con-id');
    const moredom = document.getElementById('taskdetail-left-desc-more-id');
    const lessBtn = document.getElementById('taskdetail-left-desc-less-id');
    if (lessBtn) lessBtn.style.display = 'flex';
    if (destdom) destdom.style.maxHeight = 'none';
    if (moredom) moredom.style.display = 'none';
  }, []);

  const clickLess = useCallback(() => {
    const destdom = document.getElementById('taskdetail-left-desc-con-id');
    const moredom = document.getElementById('taskdetail-left-desc-more-id');
    const lessBtn = document.getElementById('taskdetail-left-desc-less-id');
    if (lessBtn) lessBtn.style.display = 'none';
    if (destdom) destdom.style.maxHeight = '136px';
    if (moredom) moredom.style.display = 'flex';
  }, []);

  useEffect(() => {
    // 获取请求信息(分享到推特用)
    setDominfo({
      title: document.title,
      link: window.location.href,
      host: window.location.host,
    });

    // getTokenname()
    setVerifylist(questdetail.taskList);

    const allverifylist = questdetail.verifyTaskList;
    if (allverifylist) {
      // 获取已验证的数量并去重
      const map = new Map();
      // eslint-disable-next-line no-restricted-syntax
      for (const item of allverifylist) {
        if (!map.has(item.taskId)) {
          map.set(item.taskId, item);
        }
      }
      const arr = [...map.values()];
      setVerifynum(arr.length);
      // 获取已验证任务的 id
      const taskislist = [];
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < allverifylist.length; j++) {
        const veriftitem = allverifylist[j];
        taskislist.push(veriftitem.taskId);
      }
      setVerifyidlist(taskislist);
      setAllVerifyIdList(allverifylist);
    }
    // 获取用户信息
    getAccount();
    // 获取中奖名单
    getWinnerInfo();
    if (startTime && startTime - new Date().getTime() > 0) {
      setTimestatus(0);
    }
    if (startTime && startTime - new Date().getTime() <= 0 && endTime - new Date().getTime() > 0) {
      setTimestatus(1);
    }
    if (endTime - new Date().getTime() < 0) {
      setTimestatus(2);
    }
    // 判断中奖名单显示 自动发奖
    if (questdetail.status === 3) {
      setWinflag(true);
    }
  }, [
    endTime,
    getAccount,
    getWinnerInfo,
    questdetail.status,
    questdetail.taskList,
    questdetail.verifyTaskList,
    startTime,
  ]);

  // 弹窗提示类型对应文本
  const getTipDesc = useCallback(
    (type: number | string, text?: string, args?: { twitterQuoteTaskType?: 'tag' | 'hashtag' }) => {
      switch (type) {
        case 1:
          setTiptext(t('quest_detail_tip_follow'));
          break;
        case 3:
          setTiptext(t('quest_detail_tip_like'));
          break;
        case 2:
          setTiptext(t('quest_detail_tip_retweed'));
          break;
        case 4:
          if (args?.twitterQuoteTaskType === 'tag') {
            setTiptext(t('quest_detail_tip_zf'));
          } else if (args?.twitterQuoteTaskType === 'hashtag') {
            setTiptext(t('quest_detail_tip_tag'));
          } else {
            setTiptext(t('quest_detail_tip_zf'));
          }
          break;
        case 11:
          setTiptext(t('quest_detail_tip_post_content'));
          break;
        case 5:
          setTiptext(t('quest_detail_tip_dis'));
          break;
        case 'no':
          setTiptext(t('quest_detail_not_all_task'));
          break;
        case 'twitterLimit': {
          setTiptext(t('quest_detail_tip_twitter_limit', { time: twitterLimit(text) }));
          break;
        }

        default:
      }
      return 0;
    },
    [t]
  );

  // 验证请求接口
  const [verloading, setverloading] = useState(0);
  const verifyConnect = useCallback(
    (info: any, param?: any) => {
      // console.log(timestatus)
      if (timestatus !== 1) return;
      dispatch.quest
        .getTaskVerify({
          taskId: info.id,
          param,
        })
        .then((res: any) => {
          if (verloading === 0) {
            setverloading(1);
          } else {
            setverloading(0);
          }

          if (res.code === 0 && res.data.status === 1) {
            const taskidlist = res.data.taskId;
            const allquestlist = verifyidlist;
            allquestlist.push(taskidlist);
            setVerifyidlist(allquestlist);

            const allList = Object.assign([], allVerifyIdList);
            const obj = {
              ...res.data,
              param,
            };
            allList.push(obj);
            setAllVerifyIdList(allList);

            setVerifynum(verifynum + 1);
          } else if (res.code === -401) {
            // 推特授权失效
            // window.localStorage.setItem('taskdetail', questdetail.id);
            window.localStorage.setItem('againcode', res.code);
            twitterLogin();
          } else if (res.code === -402) {
            // discord授权失效
            // window.localStorage.setItem('taskdetail', questdetail.id);
            window.localStorage.setItem('againcode', res.code);
            discordLogin();
          } else if (res.code === -13) {
            // 推特同一时间 关注上限
            getTipDesc('twitterLimit', res.msg);
            setTipflag(true);
          } else if (![7, 8, 9, 10].includes(info.taskType)) {
            getTipDesc(info.taskType, 'no', {
              twitterQuoteTaskType: info.param2?.startsWith('#') ? 'hashtag' : 'tag',
            });
            setTipflag(true);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [timestatus, dispatch.quest, verloading, verifyidlist, allVerifyIdList, verifynum, getTipDesc]
  );

  // 可重复提交接口 —— 暂时只有qa能改
  const repetQAConnect = useCallback(
    (info: any, param: any) => {
      // console.log(timestatus)
      console.log('param', param);
      if (timestatus !== 1) return;
      dispatch.quest
        .updateTaskParam({
          taskId: info.id,
          param,
        })
        .then((res: any) => {
          if (verloading === 0) {
            setverloading(1);
          } else {
            setverloading(0);
          }
          if (res.code === 0) {
            const allList = Object.assign([], allVerifyIdList);
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < allList.length; i++) {
              const item = allList[i];
              if (item.taskId === info.id) {
                item.param = param;
                break;
              }
            }

            setAllVerifyIdList(allList);
          } else {
            toast.error(res.msg);
          }
        });
    },
    [timestatus, dispatch.quest, verloading, allVerifyIdList]
  );

  // verify认证按钮
  const { mutate: mutateUserInfo } = useUserPopup();
  const verifyClickFn = useCallback(
    (info: any) => {
      const twittertype = [1, 2, 3, 4, 11];
      if (Cookies.get('auToken')) {
        if (userinfo.isBindMetamask === 0) {
          toast.error(t('quest_detail_task_tip_bind_metmask'));
          return;
        }
        // twitter
        if (twittertype.includes(info.taskType)) {
          if (userinfo.isBindTwitter === 1) {
            verifyConnect(info);
          } else {
            window.localStorage.setItem('taskdetail', questdetail.id);
            twitterLogin();
          }
        }
        // discord
        if (info.taskType === 5) {
          if (userinfo.isBindDiscord === 1) {
            verifyConnect(info);
          } else {
            window.localStorage.setItem('taskdetail', questdetail.id);
            discordLogin();
          }
        }
        // QA
        if (info.taskType === 8 && qainputText !== '') {
          if (!verifyidlist.includes(info.id)) {
            verifyConnect(info, qainputText);
          } else {
            repetQAConnect(info, qainputText);
          }
        }
        // 工作验证
        if (info.taskType === 9) {
          if (info.param2 === '1' && carurl !== '') {
            verifyConnect(info, carurl);
          } else {
            verifyConnect(info, carinputText);
          }
        }
      } else {
        mutateUserInfo({ type: 0, bool: true });
      }
    },
    [
      userinfo.isBindMetamask,
      userinfo.isBindTwitter,
      userinfo.isBindDiscord,
      qainputText,
      t,
      verifyConnect,
      questdetail.id,
      verifyidlist,
      repetQAConnect,
      carurl,
      carinputText,
      mutateUserInfo,
    ]
  );

  // 操作点击事件
  const needLinkBtnClick = useCallback(
    (link: any, info: any) => {
      if (info.taskType === 1) {
        verifyClickFn(info);
      } else {
        window.open(
          link,
          '_blank',
          'width=1000,height=600,menubar=no,toolbar=no,status=no,scrollbars=yes'
        );

        // 点击外链认证 ———— 推特 Discord 任务激活记录 防止任务校验失败bug
        if (
          info.taskType === 2 ||
          info.taskType === 3 ||
          info.taskType === 4 ||
          info.taskType === 11 ||
          info.taskType === 5
        ) {
          dispatch.quest.taskLinkverify({
            taskId: info.id,
            taskType: info.taskType,
          });
        }
      }
    },
    [verifyClickFn, dispatch.quest]
  );

  const [tiptext, setTiptext] = useState('');
  const [tipflag, setTipflag] = useState(false);

  const closeTip = useCallback(() => {
    setTipflag(false);
    if (verloading === 0) {
      setverloading(1);
    } else {
      setverloading(0);
    }
  }, [verloading]);

  // 提交任务
  const taskSubmit = useCallback(
    (args?: { reCaptchaToken: string }) => {
      if (timestatus !== 1 || submitfinish === 1) return;
      if (verifynum === questdetail.taskList.length) {
        dispatch.quest
          .submitQuest({
            questId: questdetail.id,
            reCaptchaToken: args?.reCaptchaToken,
          })
          .then((res: any) => {
            if (res.code === 0) {
              setSubmitfinish(1);
              toast.success(t('quest_detail_submit_success'));
              window.location.reload();
            } else {
              toast.error(res.msg);
            }
          });
      } else {
        getTipDesc('no');
        setTipflag(true);
      }
    },
    [
      timestatus,
      submitfinish,
      verifynum,
      questdetail.taskList.length,
      questdetail.id,
      dispatch.quest,
      t,
      getTipDesc,
    ]
  );

  // 下载/提交中奖名单 0 下载提交名单 1 下载/上传中奖名单
  const winnerListSet = useCallback(
    (type: any) => {
      if (type === 0) {
        dispatch.quest
          .downloadSubmit({
            questId: questdetail.id,
          })
          .then((res: any) => {
            downloadExcel(res, 'submitlists');
          });
        return;
      }
      if (type === 1) {
        if (questdetail.status === 2 && questdetail.drawWinnerMethod === 1) {
          winnerPopup(true);
        }
        if (questdetail.status === 3) {
          dispatch.quest
            .downlaodWinnerlist({
              questId: questdetail.id,
            })
            .then((res: any) => {
              downloadExcel(res, 'winnerlists');
            });
        }
      }
    },
    [dispatch.quest, questdetail.drawWinnerMethod, questdetail.id, questdetail.status]
  );

  // 上传名单处理
  const upLoaderFn = (res: any) => {
    if (res.code === 0) {
      window.location.reload();
    } else {
      toast.error(res.msg);
    }
  };

  const result = useMemo(
    () => ({
      startTime,
      endTime,
      winflag,
      dominfo,
      verifynum,
      verifylist,
      verloading,
      tiptext,
      tipflag,
      allVerifyIdList,
      verifyidlist,
      submitfinish,
      carurl,
      winnerinfo,
      isshowwinnerbtn,
      winneruploadflag,
      reactQuillRef,
      verifyConnect,
      showMoreBtn,
      winnerPopup,
      upLoaderFn,
      winnerListSet,
      getCarUrl,
      clickLess,
      getInputinfo,
      ismore,
      closeTip,
      t,
      seeMore,
      taskSubmit,
      countdownEnd,
      needLinkBtnClick,
      verifyClickFn,
      questdetail,
      timestatus,
    }),
    [
      allVerifyIdList,
      carurl,
      clickLess,
      closeTip,
      countdownEnd,
      dominfo,
      endTime,
      getCarUrl,
      getInputinfo,
      ismore,
      isshowwinnerbtn,
      needLinkBtnClick,
      questdetail,
      seeMore,
      showMoreBtn,
      startTime,
      submitfinish,
      t,
      taskSubmit,
      timestatus,
      tipflag,
      tiptext,
      verifyClickFn,
      verifyConnect,
      verifyidlist,
      verifylist,
      verifynum,
      verloading,
      winflag,
      winnerListSet,
      winnerinfo,
      winneruploadflag,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
