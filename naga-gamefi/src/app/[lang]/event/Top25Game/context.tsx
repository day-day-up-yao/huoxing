import React, { createContext, useEffect, useState, useMemo, useCallback, useRef } from 'react';
import Cookies from 'js-cookie';

import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import {
  getActivityDetail,
  getVoteGameList,
  getActivityguid,
  toVoteGames,
} from 'src/fetchs/activity';
import { useUserPopup } from 'src/fetchs/store';
import { toast } from 'src/components/toast';
import { useLink } from 'src/components/link';
import { useLocales } from 'src/locales';

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useLocales();
  // console.log(currentLang);
  const { mutate: mutateUserInfo } = useUserPopup();

  const { linkTo } = useLink();
  const { isPc, isMob } = useBreakPoint();
  const [activitylogolist, setActivitylogolist] = useState([]);
  const [guild, setGuild] = useState<string>('');
  const [searchword, setSearchword] = useState<string>('');
  const [pages, setPages] = useState<number>(1);
  const [sorttype, setSorttype] = useState<number>(1);
  const [votelistinfo, setVotelistinfo] = useState({
    currentPage: 1,
    pageCount: 4,
    pageSize: 40,
    recordCount: 10,
    inforList: [],
  } as any);

  const [votepopup, setVotepopup] = useState<boolean>(false);

  const [popupInfo, setPopupInfo] = useState({
    imgages: '/images/bigimg/votesucc.png',
    text: t('ovte_success'),
    type: 0,
  });

  // const [voteedid, setVoteedid] = useState(0);

  // 获取可投票列表
  const getCanVotoList = useCallback((guild: any, word: any, page: any, sorts: any) => {
    getVoteGameList({
      activityId: 2,
      guid: guild,
      keyword: word,
      currentPage: page,
      pageSize: 40,
      sort: sorts,
    }).then((res) => {
      setVotelistinfo(res);
    });
  }, []);

  const handleClose = useCallback(() => {
    setVotepopup(false);
    // window.location.reload();
  }, []);

  // 分页更新页面
  const getPageCurry = useCallback(
    (page: any) => {
      setPages(page);
      getCanVotoList(guild, searchword, page, sorttype);
    },
    [guild, searchword, getCanVotoList, sorttype]
  );

  // 投票按钮
  const handleVoteBtn = useCallback(
    (info: any) => {
      if (Cookies.get('uid')) {
        // const voteinfo = window.localStorage.getItem('voteinfos');
        toVoteGames({
          activityId: 2,
          guid: guild,
          gameId: info.gameId,
        }).then((res) => {
          if (res.code === 0) {
            getCanVotoList(guild, searchword, pages, sorttype);
            setPopupInfo({
              imgages: '/images/bigimg/votesucc.png',
              text: t('ovte_success'),
              type: 1,
            });
            // window.localStorage.setItem('voteinfo', info.gameId);
            // setVoteedid(info.gameId);
            setVotepopup(true);
          } else if (res.code === -1) {
            setPopupInfo({
              imgages: '',
              text: t('ovte_not_start'),
              type: 0,
            });
            setVotepopup(true);
          } else if (res.code === -2) {
            setPopupInfo({
              imgages: '',
              text: t('ovte_finish'),
              type: 2,
            });
            setVotepopup(true);
          } else if (res.code === -3) {
            setPopupInfo({
              imgages: '/images/bigimg/votenot.png',
              text: t('ovte_not_can_vote'),
              type: 3,
            });
            setVotepopup(true);
          } else {
            toast.error(res.msg);
          }
          // console.log(res);
        });
      } else {
        mutateUserInfo({ type: 0, bool: true });
      }
    },
    [getCanVotoList, guild, mutateUserInfo, pages, searchword, sorttype, t]
  );

  // 按钮【排序
  const handleBtnSort = useCallback(
    (sort: any) => {
      setSorttype(sort);
      getCanVotoList(guild, searchword, pages, sort);
    },
    [getCanVotoList, guild, pages, searchword]
  );

  // search
  const timer = useRef<any>();
  const handleSearchVote = useCallback(
    (word: any) => {
      setSearchword(word);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        getCanVotoList(guild, word, pages, sorttype);
      }, 1250);

      return () => {
        if (timer.current) clearTimeout(timer.current);
      };
    },
    [getCanVotoList, guild, pages, sorttype]
  );

  useEffect(() => {
    // const voteid = window.localStorage.getItem('voteinfo');
    // setVoteedid(JSON.parse(voteid));
    // 获取所有logo
    getActivityDetail({
      activityId: 2,
    }).then((res) => {
      setActivitylogolist(res.logoGroupList as any);
    });
    // 获取guild
    const guildid = window.localStorage.getItem('guildid');
    if (!guildid) {
      getActivityguid(null).then((res) => {
        setGuild(res);
        window.localStorage.setItem('guildid', res);
        getCanVotoList(res, '', 1, 1);
      });
    } else {
      setGuild(JSON.parse(guildid));
      getCanVotoList(JSON.parse(guildid), '', 1, 1);
    }
  }, [getCanVotoList]);
  const result = useMemo(
    () => ({
      activitylogolist,
      isPc,
      t,
      isMob,
      sorttype,
      linkTo,
      // voteedid,
      pages,
      popupInfo,
      votepopup,
      handleClose,
      handleSearchVote,
      handleVoteBtn,
      votelistinfo,
      handleBtnSort,
      getPageCurry,
    }),
    [
      activitylogolist,
      isPc,
      t,
      isMob,
      sorttype,
      linkTo,
      // voteedid,
      pages,
      popupInfo,
      votepopup,
      handleClose,
      handleSearchVote,
      handleVoteBtn,
      votelistinfo,
      getPageCurry,
      handleBtnSort,
    ]
  );
  return (
    <Context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={result}
    >
      {children}
    </Context.Provider>
  );
};
