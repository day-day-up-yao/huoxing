import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classNames from 'classnames';
import { Stack, Typography, Box } from '@mui/material';
import { usePathname } from 'src/routes/hooks';
import { useLocales } from 'src/locales';
import SvgIcon from 'src/components/svg-icon';
import { toast } from 'src/components/toast';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { loginOut } from 'src/utils/public/login-out';
import { paths } from 'src/routes/paths';
import { cookiesName } from 'src/utils/public';
import { getAccountInfo } from 'src/fetchs/user';
import { Link, useLink } from 'src/components/link';
import { useUserPopup } from 'src/fetchs/store';

import './index.scss';
import { NagaLogo } from 'src/assets/icons';
import { inviteCodeQuery } from 'src/utils/axios';
import { ThemeSwitch } from './theme-switch';
import UserInfo from './users-info';
import LayoutHeaderSearch from './search';
import LanguagePopover from './language-popover';
import NoticePopover, { NotificationsH5 } from './notifications-popover';
import { SettingKeys } from '../../settings';
import H5SwitchTheme from './h5-switch-theme';

type navlistType = {
  name: string;
  type: number;
  link: string;
  list: navlistType[];
};

export default () => {
  // const env = process.env.NODE_ENV
  const { onChangeLang, allLangs } = useLocales();
  const { t, i18n } = useTranslation();

  const pathname = usePathname({ pure: true });
  const location = useMemo(() => ({ pathname }), [pathname]);

  // const [downflag, setDownflag] = useState(0)
  const [mousenum, setMousenum] = useState(0);
  const [pageitem, setPageitem] = useState<string | null>(null);
  const [isSelectType, setIsSelectType] = useState(-1);
  const [menu, setMenu] = useState(false);
  const [langflag, setLangflag] = useState<string>();
  const [userflage, setUserflage] = useState(-1);
  const [minelogin, setMinelogin] = useState(false);

  // H5菜单状态： 0主菜单 1语言切换 2数据列表 3通知列表
  const [h5State, setH5State] = useState(0);
  // const [mainflag, setMainflag] = useState(true)
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    if (Cookies.get('uid')) {
      setUserflage(1);

      getAccountInfo().then((res: any) => {
        if (res.code === 0) {
          setUserInfo(res.data);
          Cookies.set(cookiesName.isbindmetmask, res.data.isBindMetamask);
          Cookies.set(cookiesName.adminGameId, res.data.adminGameId);
        } else if (res.code !== 30000) {
          toast.error(res.mag);
        }
      });
    } else {
      setUserflage(0);
    }
  }, []);

  // 搜索框展开
  const [isSearchShow, setIsSearchShow] = useState(false);

  useEffect(() => {
    const curLang = Cookies.get(SettingKeys.LANG);
    if (curLang) setLangflag(curLang);
  }, []);

  useEffect(() => {
    const pathurl = `/${i18n.language}`;
    if (pathurl === location.pathname) {
      setPageitem(paths.home);
    } else {
      setPageitem(location.pathname);
    }
  }, [i18n.language, location.pathname]);

  // navlist
  const navlist = useMemo(
    () => [
      {
        name: t('public_homepage'),
        type: 0,
        link: paths.home,
        list: [],
      },
      {
        name: `🔥${t('quest')}`,
        type: 1,
        link: paths.taskExplore,
        list: [],
      },
      {
        name: 'Launchpad',
        type: 7,
        link: paths.launchpad.root,
        list: [],
      },
      {
        name: t('event_calendar_title_home'),
        type: 5,
        link: paths.calendar,
        list: [],
      },
      {
        name: t('invest_header_title'),
        type: 9,
        link: paths.investment,
        list: [],
      },
      {
        name: t('public_gamelibrary'),
        type: 2,
        link: paths.gameLibrary,
        list: [],
      },
      // {
      //   name: t('public_analytics'),
      //   type: 3,
      //   link: '',
      //   list: [
      //     {
      //       name: t('public_ranking'),
      //       type: 1,
      //       link: paths.gameList,
      //       list: [],
      //     },
      //     {
      //       name: t('overview_title'),
      //       type: 2,
      //       link: paths.overview,
      //       list: [],
      //     },
      //   ],
      // },
      {
        name: t('public_ranking'),
        type: 3,
        link: paths.gameList,
        list: [],
      },
      {
        name: t('game_detail_data'),
        type: 6,
        link: paths.overview,
        list: [],
      },
      {
        name: t('news_article'),
        type: 4,
        link: paths.news,
        list: [],
      },
      {
        name: t('quest_rewards_type_not_verify'),
        type: 8,
        link: '',
        list: [
          {
            name: t('game_detail_data'),
            type: 1,
            link: paths.overview,
            list: [],
          },
          {
            name: t('news_article'),
            type: 2,
            link: paths.news,
            list: [],
          },
          {
            name: t('public_ranking'),
            type: 3,
            link: paths.gameList,
            list: [],
          },
          {
            name: t('public_gamelibrary'),
            type: 4,
            link: paths.gameLibrary,
            list: [],
          },
          // {
          //   name: t('event_calendar_title_home'),
          //   type: 5,
          //   link: paths.calendar,
          //   list: [],
          // },
          // {
          //   name: t('invest_header_title'),
          //   type: 6,
          //   link: paths.investment,
          //   list: [],
          // },
        ],
      },
      //   {
      //     name: t('activity_title'),
      //     type: 6,
      //     link: `${paths.activity}/fight2023`,
      //     list: [],
      //   },
    ],
    [t]
  );

  useEffect(() => {
    console.log(location.pathname);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < navlist.length; i++) {
      const item: navlistType = navlist[i];
      if (item.list.length > 0 && item.link === '') {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < item.list.length; j++) {
          const jItem: { link: string } = item.list[j];
          if (location.pathname === jItem.link) {
            setIsSelectType(item.type);
            break;
          }
        }
      } else if (location.pathname === item.link) {
        setIsSelectType(item.type);
        break;
      }
    }
  }, [location.pathname, navlist]);

  const selectLanguage = useCallback(() => {
    setH5State(1);
  }, []);
  const selectAnalytics = useCallback(() => {
    setH5State(2);
  }, []);
  const banckMenu = useCallback(() => {
    setH5State(0);
  }, []);
  // 启动登录弹窗
  const { mutate: mutateUserInfo } = useUserPopup();
  const toLogin = useCallback(() => {
    mutateUserInfo({ type: 0, bool: true });
  }, [mutateUserInfo]);

  // ----------如果是邀请码连接，自动弹出登录框----------
  const popuped = useRef(false);
  useEffect(() => {
    if (popuped.current) return;
    // 已经登录则都不弹出
    if (userflage !== 0) return;
    const { inviteCode } = inviteCodeQuery();
    if (!inviteCode) return;
    toLogin();
    popuped.current = true;
  }, [userflage, toLogin]);

  // 点击 搜索栏开启按钮
  const onBtnSearchShowClick = useCallback(() => {
    setIsSearchShow(true);

    // 点击获取输入框焦点
    setTimeout(() => {
      document.getElementById('layout-header-search-input')?.focus();
    }, 100);
  }, []);

  // 点击 搜索栏关闭按钮
  const onBtnSearchClearClick = useCallback(() => {
    setIsSearchShow(false);
  }, []);

  const { linkTo } = useLink();
  const loginedSelected = useCallback(
    (item: any) => {
      if (item.link !== '') {
        if (item.type === 'user') {
          window.localStorage.setItem('usertab', '0');
        }
        linkTo(item.link);
      } else {
        loginOut({ reload: true });
      }
    },
    [linkTo]
  );

  const userlist = useMemo(
    () => [
      {
        type: 'manage',
        name: t('header_user_manage'),
        link: paths.manage.gameInfo,
        lefticon: 'manage',
      },
      // {
      //   type: 'points',
      //   name: t('quest_user_points'),
      //   link: paths.userCenter,
      //   lefticon: 'sportcenter',
      // },
      {
        type: 'user',
        name: t('user_center'),
        link: paths.userCenter,
        lefticon: 'sportcenter',
      },
      {
        type: 'Profile',
        name: t('user_settings'),
        link: `${paths.userCenter}?usertabs=4`,
        lefticon: 'myself',
      },
      {
        type: 'loginout',
        name: t('user_loginout'),
        link: '',
        lefticon: 'loginout',
      },
    ],
    [t]
  );

  const navClickfn = useCallback(
    (item: any) => {
      if (item.link !== '') {
        // linkTo(item.link, { client: true });
        linkTo(item.link);
      }
      if (item.list.length === 0 && item.link === '') {
        toast.error('Coming soon');
      }
    },
    [linkTo]
  );

  // 点击跳转 创建任务
  const createTaskClick = useCallback(() => {
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

  // logo
  const logoDom = useMemo(
    () => (
      <Link className="header-logo" href={paths.home}>
        {/* <img src="/images/bigimg/logonew.png" alt="" /> */}
        <NagaLogo />
        {/* <img src="/images/festival/christmas/logo-main.webp" alt="" /> */}
      </Link>
    ),
    []
  );

  // 左侧tab
  const leftTab = useMemo(
    () =>
      navlist.map((item: navlistType, index) => (
        <div
          className={`nav-item nav-item-type-${item.type}`}
          key={index}
          // style={{ display: `${env === 'production' && item.type === 1 && 'none'}` }}
        >
          <div
            className="nav-name"
            onClick={() => navClickfn(item)}
            onMouseEnter={() => item.list.length > 0 && setMousenum(item.type)}
            onMouseLeave={() => setMousenum(0)}
          >
            <span>
              {item.name}
              {item.list.length > 0 &&
                (mousenum === item.type ? (
                  <SvgIcon name="pointup" />
                ) : (
                  <SvgIcon name="pointdown" />
                ))}
              {item.type === 9 ? (
                // <img className="nav-new-icon" src="/images/icon/hoticon.png" alt="icon-new" />
                <Box
                  sx={{
                    position: 'relative',
                    top: '-7px',
                    right: '-1px',
                    bgcolor: '#E60000',
                    color: '#fff',
                    padding: '0 5px',
                    borderRadius: '3px',
                    fontSize: '10px',
                    height: '15px',
                    lineHeight: '15px',
                    fontFamily: 'auto',
                  }}
                >
                  {/* {item.type === 1 && '🔥Hot'} */}
                  {item.type === 9 && 'New'}
                </Box>
              ) : undefined}
            </span>

            {mousenum === item.type && item.list.length > 0 && (
              <div className="nav-name-list">
                <div className="nav-name-list-con">
                  {item.list.map((lItem: navlistType, lIndex) => (
                    <div
                      className={`nav-name-list-item ${
                        pageitem === lItem.link && 'active-nav-name'
                      } nav-name-list-item-${lItem.type}`}
                      key={lIndex}
                      onClick={() => {
                        navClickfn(lItem);
                      }}
                    >
                      {/* <div className="language-selected">
                        {langflag === item.lang && <img src='images/icon/selected.png' alt=""/>}
                    </div> */}
                      {lItem.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!mousenum && <div className="mousenum-index" />}
            {isSelectType === item.type && (
              <div className={classNames('select-page', { new: item.type === 1 })} />
            )}
          </div>
        </div>
      )),
    [navlist, mousenum, isSelectType, navClickfn, pageitem]
  );

  // Gaming Combinator
  const combinatorDom = useMemo(
    () => (
      <Stack
        direction="row"
        alignItems="center"
        className="item-combinator-header"
        sx={{
          padding: '3px 10px',
          borderRadius: '14px',
          background: 'linear-gradient( 90deg, #E60000 0%, #F4BC2C 100%)',
          cursor: 'pointer',
        }}
        onClick={() => linkTo('/gamesform')}
      >
        <SvgIcon name="gameicon" />
        <Typography
          variant="body2"
          sx={{
            ml: '6px',
            color: '#fff',
          }}
        >
          Gaming Combinator
        </Typography>
      </Stack>
    ),
    [linkTo]
  );

  // 左侧栏
  const leftDom = useMemo(
    () => (
      <div className="layout-header-left">
        {logoDom}
        {!isSearchShow ? leftTab : undefined}
        {!isSearchShow && combinatorDom}
      </div>
    ),
    [combinatorDom, isSearchShow, leftTab, logoDom]
  );

  // H5 数据列表
  const analyticsCon = useMemo(
    () => (
      <div className="h5-menu-center">
        <div className="h5-language-con">
          <div className="h5-language-header" onClick={banckMenu}>
            <ArrowBackIosIcon sx={{ height: 12 }} />
            <span>{t('public_analytics')}</span>
          </div>
          <div className="h5-language-list">
            {navlist
              .find((item) => item.type === 3)
              ?.list.map((item: navlistType, index) => (
                <div
                  className="h5-language-list-item"
                  key={index}
                  onClick={() => {
                    navClickfn(item);
                    setMenu(false);
                  }}
                >
                  <span>{item.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    ),
    [banckMenu, navClickfn, navlist, t]
  );

  // H5语言列表
  const languageCon = useMemo(
    () => (
      <div className="h5-menu-center">
        <div className="h5-language-con">
          <div className="h5-language-header" onClick={banckMenu}>
            <ArrowBackIosIcon sx={{ height: 12 }} />
            <span>{t('public_language_title')}</span>
          </div>
          <div className="h5-language-list">
            {allLangs.map((item, index) => (
              <div
                className="h5-language-list-item"
                key={index}
                onClick={() => {
                  onChangeLang(item.value);
                }}
              >
                <div className="h5-language-list-item-left">
                  {langflag === item.value && <img src="/images/icon/selecting.png" alt="" />}
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    [allLangs, banckMenu, langflag, onChangeLang, t]
  );

  // H5主菜单
  const mainMenu = useMemo(
    () => (
      <div className="h5-menu-center">
        <div className="h5-menu-con">
          {navlist.map((item, index) => (
            <div className="h5-select-item" key={index}>
              {/* {item.type === 3 ? (
                <div className="h5-select-item-sub" onClick={selectAnalytics}>
                  {item.name}
                  <ArrowForwardIosIcon sx={{ height: 12 }} />
                </div>
              ) : (
                <Link href={item.link}>
                  {item.name}
                  {item.type === 1 ? (
                    <img className="h5-new-icon" src="/images/icon/icon_new.png" alt="icon-new" />
                  ) : undefined}
                </Link>
              )} */}
              <Link href={item.link}>
                <Stack direction="row" alignItems="center">
                  {item.name}
                  {item.type === 9 ? (
                    // <img className="nav-new-icon" src="/images/icon/hoticon.png" alt="icon-new" />
                    <Box
                      sx={{
                        bgcolor: '#E60000',
                        color: '#fff',
                        padding: '0 5px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        height: '17px',
                        lineHeight: '17px',
                        fontFamily: 'auto',
                        ml: '6px',
                      }}
                    >
                      {/* {item.type === 1 && '🔥Hot'} */}
                      {item.type === 9 && 'New'}
                    </Box>
                  ) : undefined}
                </Stack>
              </Link>
            </div>
          ))}
        </div>
        <div className="set-line" />
        <div className="h5-menu-set">
          {/* 暂时关闭认证创建 */}
          {/* {userInfo && userInfo.nagaAuth ? ( */}
          <div className="h5-menu-set-item">
            <div className="h5-menu-set-item-left" onClick={createTaskClick}>
              <SvgIcon className="left-icon" name="createtask" />
              <span>{t('quest_list_create')}</span>
            </div>
          </div>
          <div className="h5-menu-set-item">
            <div className="h5-menu-set-item-left" onClick={() => linkTo('/usersetting')}>
              <SvgIcon className="left-icon" name="settings" />
              <span>{t('user_settings')}</span>
            </div>
          </div>
          {/* ) : undefined} */}
          {/* <div className="h5-menu-set-item">
            <div className="h5-menu-set-item-left">
              <SvgIcon className="left-icon" name="notice" />
              <span>{t('notice_title')}</span>
            </div>
            <NotificationsH5 />
          </div> */}
          <div className="h5-menu-set-item">
            <div className="h5-menu-set-item-left">
              <SvgIcon className="left-icon" name="web" />
              <span>{t('public_language_title')}</span>
            </div>
            <div className="h5-menu-set-item-right" onClick={selectLanguage}>
              <span>{t('public_language')}</span>
              <ArrowForwardIosIcon sx={{ height: 12 }} />
            </div>
          </div>
          <div className="h5-menu-set-item">
            <H5SwitchTheme />
          </div>
        </div>
        {userflage === 0 && (
          <div className="h5-menu-wallet">
            <div className="h5-menu-wallet-btn" onClick={toLogin}>
              {t('user_to_login')}
            </div>
          </div>
        )}
        {userflage === 1 && (
          <div className="h5-menu-wallet">
            <div
              className="h5-menu-wallet-btn h5-loginout-btn"
              onClick={() => loginedSelected({ link: '' })}
            >
              {t('user_loginout')}
            </div>
          </div>
        )}
      </div>
    ),
    [navlist, createTaskClick, t, selectLanguage, userflage, toLogin, linkTo, loginedSelected]
  );

  // h5nav列表
  const h5Menu = useMemo(
    () => (
      <div className="h5-menu">
        {h5State === 0 && mainMenu}
        {h5State === 1 && languageCon}
        {h5State === 2 && analyticsCon}
      </div>
    ),
    [analyticsCon, h5State, languageCon, mainMenu]
  );

  // 搜索按钮
  //   const searchBtn = useMemo(
  //     () =>
  //       !isSearchShow ? (
  //         <div className="header-search" onClick={() => onBtnSearchShowClick()}>
  //           <SvgIcon className="header-search-icon" name="search" notmouse />
  //           <span>{t('search_placeholder_input')}</span>
  //               </div>

  //       ) : undefined,
  //     [isSearchShow, onBtnSearchShowClick, t]
  //   );
  const searchBtn = useMemo(
    () =>
      !isSearchShow ? (
        <div className="download-enntro-link" onClick={() => onBtnSearchShowClick()}>
          <div className="download-enntro">
            <SvgIcon name="search-2" isWhite />
          </div>
        </div>
      ) : undefined,
    [isSearchShow, onBtnSearchShowClick]
  );

  // 通知
  const noticeBtn = useMemo(() => (!isSearchShow ? <NoticePopover /> : undefined), [isSearchShow]);

  // 语言切换
  const languageBtn = useMemo(
    () => (!isSearchShow ? <LanguagePopover /> : undefined),
    [isSearchShow]
  );

  // 已登录/未登录
  const { isPc } = useBreakPoint();
  const userCenter = useMemo(
    () => (
      <div
        className="logined-con"
        onMouseEnter={() => {
          if (isPc) {
            setMinelogin(true);
          } else {
            window.localStorage.setItem('usertab', '0');
            linkTo(paths.userCenter);
          }
        }}
        onMouseLeave={() => {
          setMinelogin(false);
        }}
      >
        <div className="logined-center">
          <img src={Cookies.get('avatarUrl')} alt="" />
        </div>
        {minelogin && (
          // <div className={`logined-center-list ${env === 'production' && 'logined-list-production'}`}>
          <div className="logined-center-list">
            <div className="header-userinfo-top">
              <div className="header-userinfo-top-con">
                <div className="header-userinfo-top-con-user">
                  <img src={Cookies.get('avatarUrl')} alt="" />
                  <div className="header-userinfo-top-info">
                    <div className="header-userinfo-top-info-username">{userInfo?.name}</div>
                    {userInfo?.metamaskAddr && userInfo?.metamaskAddr !== '' && (
                      <div className="header-userinfo-top-info-address">
                        {`${userInfo?.metamaskAddr?.slice(0, 6)}...${userInfo?.metamaskAddr?.slice(
                          -4
                        )}`}
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="header-userinfo-top-con-user header-userinfo-top-con-point">
                  <img src="/images/icon/bs.png" alt="" />
                  <h3>{userInfo?.strBonus}</h3>
                </div> */}
              </div>
            </div>
            <div className="header-userinfo-list">
              {userlist.map((item, index) => (
                <div
                  className="logined-center-list-item"
                  key={index}
                  onClick={() => loginedSelected(item)}
                  style={{
                    display: `${
                      item.type === 'manage' &&
                      (!userInfo?.adminGameId ||
                        userInfo?.adminGameId === '' ||
                        userInfo?.adminGameId === 'null') &&
                      'none'
                    }`,
                  }}
                >
                  <SvgIcon name={item.lefticon} />
                  <span>
                    {item.name}
                    {item.type === 'points' && `：${userInfo?.strBonus}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
    [
      isPc,
      linkTo,
      loginedSelected,
      minelogin,
      userInfo?.adminGameId,
      userInfo?.metamaskAddr,
      userInfo?.name,
      userInfo?.strBonus,
      userlist,
    ]
  );

  // 未登录
  // const NotLogin = useMemo(
  //     () => (
  //         <div className="user-sign" onClick={toLogin}>
  //             <SvgIcon name="signuser" />
  //             <span>Login</span>
  //         </div>
  //     ),
  //     []
  // )

  const OldNotLogin = useMemo(
    () => (
      <div
        className="wallet-con"
        // style={{
        //   background: 'url(/images/festival/christmas/btn-login.webp)',
        //   backgroundSize: 'cover',
        // }}
        onClick={toLogin}
      >
        <span>{t('user_login')}</span>
      </div>
    ),
    [t, toLogin]
  );

  // 下载入口
  const downloadEntro = useMemo(
    () => (
      <Link href={paths.download} className="download-enntro-link">
        <div className="download-enntro">
          <SvgIcon name="download_icon" />
          {/* <div>Dowanload</div> */}
        </div>
      </Link>
    ),
    []
  );

  // 右侧栏
  const rightDom = useMemo(
    () => (
      <div className="layout-header-right">
        {!menu && (
          <div className="header-right-pc">
            {/* 暂时关闭认证创建 */}
            {/* {userInfo && userInfo.nagaAuth ? ( */}

            <div className="header-right-create-task" onClick={createTaskClick}>
              <SvgIcon name="createtask" />
              {/* <span>{t('quest_list_create')}</span> */}
            </div>
            {/* <div className="header-right-create-task" onClick={() => linkTo('/gamesform')}>
              <SvgIcon name="createtask" />
              <span>{t('game_form_big_title').replace('Web3', '')}</span>
            </div> */}
            {/* ) : undefined} */}
            {searchBtn}
            {userflage === 1 && (isPc ? noticeBtn : <NotificationsH5 />)}
            {languageBtn}
            {downloadEntro}
            <ThemeSwitch />

            {userflage === 1 && userCenter}
            {userflage === 0 && OldNotLogin}
          </div>
        )}

        <div
          style={{ width: '22px', height: '22px', marginLeft: '16px' }}
          className="h5-headerright"
          onClick={() => {
            setMenu(!menu);
            if (h5State !== 0) setH5State(0);
          }}
        >
          {menu ? (
            <SvgIcon name="closebtn" style={{ width: '100%', height: '100%' }} />
          ) : (
            <SvgIcon name="menu-icon" style={{ width: '100%', height: '100%' }} />
          )}
          {/* <img
            src={menu ? '/images/icon/closeicon.webp' : '/images/icon/caidan.png'}
            alt=""
            onClick={() => {
              setMenu(!menu);
              if (h5State !== 0) setH5State(0);
            }}
          /> */}
        </div>
      </div>
    ),
    [
      menu,
      createTaskClick,
      searchBtn,
      userflage,
      isPc,
      noticeBtn,
      languageBtn,
      downloadEntro,
      userCenter,
      OldNotLogin,
      h5State,
    ]
  );

  // 搜索栏
  const searchDom = useMemo(
    () => <LayoutHeaderSearch onBtnClear={onBtnSearchClearClick} open={isSearchShow} />,
    [onBtnSearchClearClick, isSearchShow]
  );

  // 顶部活动条
  const topFestivalTopper = useMemo(
    () => (
      <Stack
        height="40px"
        width="100%"
        direction="row"
        overflow="hidden"
        position="sticky"
        top="73px"
        display="flex"
      >
        <img
          style={{ width: '100%' }}
          src="/images/festival/christmas/home-top-topper.webp"
          alt=""
        />
      </Stack>
    ),
    []
  );

  // 顶部游戏表单
  const gamesFromPage = useMemo(
    () => (
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="header-combinator"
        sx={{
          height: '30px',
          bgcolor: '#E60000',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 2,
        }}
        onClick={() => linkTo('/gamesform')}
      >
        <SvgIcon name="from1" />
        <Typography
          variant="body2"
          color="#fff"
          mx="8px"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          {t('game_form_big_title')}
        </Typography>
        <SvgIcon name="linkto" />
      </Stack>
    ),
    [linkTo, t]
  );

  return (
    <div className="layout-header">
      {gamesFromPage}
      <div className="layout-header-con">
        {leftDom}
        {searchDom}
        {rightDom}
      </div>
      {menu && h5Menu}
      <UserInfo />
      {/* {topFestivalTopper} */}
    </div>
  );
};
