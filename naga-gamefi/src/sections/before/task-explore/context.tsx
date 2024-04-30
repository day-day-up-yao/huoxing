import React, { createContext, useState, useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { memoize } from 'proxy-memoize';
import { useLink } from 'src/components/link';
import { toast } from 'src/components/toast';
import { paths } from 'src/routes/paths';
import { RootState } from 'src/models/store';
import { getAccountInfo } from 'src/fetchs/user';
import { useUserPopup } from 'src/fetchs/store';

const selectDatas = memoize((state: RootState) => ({
  questbannerlist: state.quest.questbannerlist,
}));

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { questbannerlist } = useSelector((state: RootState) => selectDatas(state));
  const { linkTo } = useLink();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [questlistinfo, setQuestlistinfo] = useState({
    currentPage: 0,
    currentTime: 0,
    inforList: [],
    pageCount: 0,
    pageSize: 0,
    recordCount: 0,
  });
  const [isloading, setIsloading] = useState(true);
  //   const [toptype, setToptype] = useState(1);
  const [toptype, setToptype] = useState(-1);
  const [rewardtype, setRewardtype] = useState<any>();
  const [finishtype, setFinishtype] = useState<any>();
  const [verifytype, setVerifytype] = useState<any>();
  const [searchinfo, setSearchinfo] = useState<any>();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (Cookies.get('uid')) {
      getAccountInfo().then((res: any) => {
        if (res.code === 0) {
          setUserInfo(res.data);
        } else {
          toast.error(res.mag);
        }
      });
    }
  }, []);

  // 搜索
  const searchClick = useCallback((value: any) => {
    setSearchinfo(value);
  }, []);

  const [page, setPage] = useState(1);

  // 获取页码
  const getCurrent = useCallback((pageItem: any) => {
    setPage(pageItem);
  }, []);

  // console.log(questbannerlist)
  // 获取任务类型
  const getQuesetType = useCallback(
    (type: any) => {
      getCurrent(1);
      setToptype(type);
    },
    [getCurrent]
  );

  // 获取奖励类型
  const getReweadType = useCallback(
    (type: any, name: any) => {
      getCurrent(1);
      if (type === -1) {
        if (name === 'reward') setRewardtype(null);
        if (name === 'finish') setFinishtype(null);
        if (name === 'verify') setVerifytype(null);
      } else {
        if (name === 'reward') setRewardtype(type);
        if (name === 'finish') setFinishtype(type);
        if (name === 'verify') setVerifytype(type);
      }
    },
    [getCurrent]
  );

  // 创建按钮
  const { mutate: mutateUserInfo } = useUserPopup();
  const createClick = useCallback(() => {
    if (Cookies.get('uid')) {
      if (Cookies.get('isbindmetmask') === '1') {
        linkTo(paths.campaign.createInfo);
      } else {
        toast.error(t('quest_detail_task_tip_bind_metmask'));
      }
    } else {
      mutateUserInfo({ type: 0, bool: true });
    }
  }, [linkTo, mutateUserInfo, t]);

  // 获取任务列表
  const getQuestInfo = useCallback(() => {
    setIsloading(true);
    dispatch.quest
      .getQuestList({
        category: toptype,
        rewardType: rewardtype,
        completed: finishtype,
        nagaAuth: verifytype,
        search: searchinfo,
        currentPage: page,
        pageSize: 28,
      })
      .then((res: any) => {
        if (res.code === 0) {
          setIsloading(false);
          setQuestlistinfo(res.data);
        }
      });
  }, [dispatch.quest, toptype, rewardtype, finishtype, verifytype, searchinfo, page]);

  useEffect(() => {
    getQuestInfo();
  }, [toptype, rewardtype, finishtype, verifytype, searchinfo, page, getQuestInfo]);

  const result = useMemo(
    () => ({
      questbannerlist,
      questlistinfo,
      toptype,
      isloading,
      userInfo,
      t,
      createClick,
      getCurrent,
      getQuesetType,
      getQuestInfo,
      searchClick,
      getReweadType,
    }),
    [
      createClick,
      getCurrent,
      getQuesetType,
      getQuestInfo,
      getReweadType,
      isloading,
      questbannerlist,
      questlistinfo,
      searchClick,
      t,
      toptype,
      userInfo,
    ]
  );
  return <Context.Provider value={result}>{children}</Context.Provider>;
};
