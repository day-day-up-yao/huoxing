import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import {
  Popper,
  Drawer,
  Button,
  Stack,
  TextField,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { isArray, trim } from 'lodash';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { Link, useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { useSearchMulti } from 'src/fetchs/common';
import Iconify from 'src/components/iconify';
import LayoutHeaderSearchGameItem from './search-game-item';
import LayoutHeaderSearchNewsItem from './search-news-item';
import './index.scss';

const LayoutHeaderSearch = (props: any) => {
  const { onBtnClear, open } = props;
  const { t } = useTranslation();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // 是否展开弹窗
  const [inputValue, setInputValue] = useState(''); // 搜索值
  const [loading, setLoading] = useState(false);
  const { linkTo } = useLink();

  // 是否是移动端
  const { isPc: isPC } = useBreakPoint();

  // 设置搜索值
  const onInputValueChange = useCallback((e: any) => {
    setInputValue(e);
  }, []);

  // 清空搜索值
  const onBtnClearValueClick = useCallback(() => {
    setInputValue('');
  }, []);

  const { trigger, data: searchMulti } = useSearchMulti();

  // 请求搜索内容 ———— 搜索延迟1.25秒
  const timer = useRef<any>();
  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (trim(inputValue) === '') return;
      setLoading(true);
      setIsPopoverOpen(false);
      trigger({
        keyword: trim(inputValue),
      });
    }, 1250);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [inputValue, trigger]);

  // 键盘回车事件
  const onKeySearchEnterUp = useCallback(
    (e: any) => {
      if ((e.keyCode && e.keyCode !== 13) || trim(inputValue) === '') return;
      linkTo(`${paths.search}/${inputValue}`);
    },
    [inputValue, linkTo]
  );

  useEffect(() => {
    if (searchMulti?.gameProjectPojoList) {
      setLoading(false);
      setIsPopoverOpen(true);
    }
  }, [searchMulti]);

  // 搜索框
  const anchorEl = useRef(null);
  const searchPopoverId = open ? 'search-popover' : undefined;
  const inputBox = useMemo(
    () => (
      <Stack
        className="layout-header-search-input-box"
        ref={anchorEl}
        aria-describedby={searchPopoverId}
      >
        <TextField
          fullWidth
          id="layout-header-search-input"
          className="layout-header-search-input"
          placeholder={t('search_placeholder_input')}
          spellCheck="false"
          value={inputValue}
          autoFocus
          {...{
            name: `field_${Math.random()}`,
            variant: 'filled',
            sx: ({ palette }: any) => ({
              '&.MuiFormControl-root': {
                padding: '0 !important',
                '.MuiInputBase-root': {
                  '.MuiInputAdornment-root': {
                    marginTop: '0 !important',
                  },
                  height: '100%',
                  borderRadius: '4px',
                  backgroundColor: 'transparent !important',
                  input: {
                    paddingTop: '0',
                    paddingBottom: '0',
                  },
                },
              },
            }),
          }}
          onChange={(e) => {
            onInputValueChange(e.target.value);
          }}
          onKeyUp={(e) => {
            onKeySearchEnterUp(e);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.primary' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {trim(inputValue) !== '' && !loading ? (
                  <InputAdornment position="end">
                    <Iconify
                      onClick={onBtnClearValueClick}
                      icon="eva:close-fill"
                      sx={{ color: 'text.primary', cursor: 'pointer' }}
                    />
                  </InputAdornment>
                ) : null}
                {loading ? (
                  <InputAdornment position="end">
                    <CircularProgress size={16} sx={{ color: 'text.primary' }} />
                  </InputAdornment>
                ) : null}
              </>
            ),
          }}
        />
      </Stack>
    ),
    [
      searchPopoverId,
      t,
      inputValue,
      loading,
      onBtnClearValueClick,
      onInputValueChange,
      onKeySearchEnterUp,
    ]
  );

  // 游戏列表
  const gameList = useMemo(
    () =>
      searchMulti?.gameProjectPojoList && isArray(searchMulti?.gameProjectPojoList)
        ? [
            <div className="search-popover-title" key="game-title">
              {t('search_title_game')}
            </div>,
            searchMulti?.gameProjectPojoList
              .slice(0, 3)
              .map((item: any, index: number) => (
                <LayoutHeaderSearchGameItem {...item} key={index} />
              )),
          ]
        : undefined,
    [searchMulti?.gameProjectPojoList, t]
  );

  // 资讯攻略列表
  const newsList = useMemo(() => {
    if (
      !(
        searchMulti?.articlePojoList &&
        isArray(searchMulti?.articlePojoList) &&
        searchMulti?.strategyPojoList &&
        isArray(searchMulti?.strategyPojoList)
      )
    )
      return undefined;
    const list = searchMulti?.articlePojoList
      .slice(0, 3)
      .concat(searchMulti?.strategyPojoList.slice(0, 3));
    const sortFun = (a: any, b: any) => {
      const aTime = new Date(a?.publishTime).getTime();
      const bTime = new Date(b?.publishTime).getTime();
      return bTime - aTime;
    };

    return list.length > 0
      ? [
          <div className="search-popover-title news" key="news-title">
            {t('search_title_news')}
          </div>,
          list
            .sort((a: any, b: any) => sortFun(a, b))
            .slice(0, 3)
            .map((item: any, index: any) => <LayoutHeaderSearchNewsItem {...item} key={index} />),
        ]
      : undefined;
  }, [searchMulti?.articlePojoList, searchMulti?.strategyPojoList, t]);

  // 更多按钮
  const moreBtn = useMemo(
    () => (
      <Link
        className="search-popover-more"
        href={`${paths.search}/${inputValue}`}
        target="_blank"
        rel="noreferrer"
      >
        {t('search_btn_more')}
      </Link>
    ),
    [inputValue, t]
  );

  // 空样式
  const notFound = useMemo(
    () => <div className="search-not-found">{t('search_not_found')}</div>,
    [t]
  );

  // 弹出框
  const popoverBox = useMemo(
    () =>
      trim(inputValue) !== '' && !loading ? (
        <Popper
          anchorEl={anchorEl.current}
          id={searchPopoverId}
          placement="bottom"
          open={isPopoverOpen}
          sx={{
            zIndex: 999,
            width: '720px',
            marginTop: '12px',
            padding: '24px 24px 0',
            backgroundColor: 'background.paper',
            borderRadius: '4px',
          }}
        >
          {searchMulti &&
          ((searchMulti?.articlePojoList && searchMulti.articlePojoList.length > 0) ||
            (searchMulti?.gameProjectPojoList && searchMulti.gameProjectPojoList.length > 0) ||
            (searchMulti?.strategyPojoList && searchMulti?.strategyPojoList.length > 0)) ? (
            <>
              {gameList}
              {newsList}
              {moreBtn}
            </>
          ) : (
            <>{notFound}</>
          )}
        </Popper>
      ) : null,
    [
      inputValue,
      loading,
      searchPopoverId,
      isPopoverOpen,
      searchMulti,
      gameList,
      newsList,
      moreBtn,
      notFound,
    ]
  );

  // PC 页面
  const pcDom = useMemo(
    () =>
      open ? (
        <>
          <div className="layout-header-search">
            <div className="layout-header-search-bg" onClick={() => onBtnClear()} />
            {inputBox}
          </div>
          {popoverBox}
        </>
      ) : null,
    [open, inputBox, popoverBox, onBtnClear]
  );

  // H5 内容
  const contentDom = useMemo(
    () =>
      trim(inputValue) !== '' && !loading
        ? searchMulti &&
          ((searchMulti?.articlePojoList && searchMulti.articlePojoList.length > 0) ||
            (searchMulti?.gameProjectPojoList && searchMulti.gameProjectPojoList.length > 0) ||
            (searchMulti?.strategyPojoList && searchMulti?.strategyPojoList.length > 0))
          ? [gameList, newsList, moreBtn]
          : notFound
        : undefined,
    [inputValue, loading, searchMulti, gameList, newsList, moreBtn, notFound]
  );

  // H5页面
  const h5Dom = useMemo(
    () => (
      <Drawer
        className="layout-header-search layout-header-search-m"
        open={open}
        sx={({ palette }) => ({
          '.MuiPaper-root': {
            width: '100%',
            background: palette.background.default,
            '& ::-webkit-scrollbar': {
              display: 'none',
            },
          },
        })}
      >
        <div className="layout-header-search-m-content">
          <div className="layout-header-search-m-input-box">
            <div className="input-m-box">{inputBox}</div>
            <Button
              className="close-m-btn"
              onClick={() => onBtnClear()}
              sx={{ padding: 0, minWidth: 'auto', fontWeight: 'normal' }}
            >
              {t('public_close')}
            </Button>
          </div>
          {contentDom}
        </div>
      </Drawer>
    ),
    [open, inputBox, t, contentDom, onBtnClear]
  );

  return isPC ? pcDom : h5Dom;
};

export default LayoutHeaderSearch;
