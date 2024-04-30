import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Input, InputGroup, Loader, Popover, Whisper } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { isArray, trim } from 'lodash';
import './index.scss';
import { memoize } from 'proxy-memoize';
import { RootState } from 'src/models/store';
import LayoutHeaderSearchGameItem from 'src/sections/layouts/main/header/search/search-game-item';

const iconClose = '/images/icon/btn-close.png';
const selectDatas = memoize((state: RootState) => ({
  searchGame: state.common.searchGame,
}));

const CampaignCreateItemRelatedGames = forwardRef((props: any, ref) => {
  const { t, onChange } = props;
  const dispatch = useDispatch();
  const { searchGame } = useSelector((state: RootState) => selectDatas(state));
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // 是否展开弹窗
  const [inputValue, setInputValue] = useState(''); // 搜索值
  const [loading, setLoading] = useState(false);

  // 点击选项
  const isClick = useRef(false);
  const onBtnItemClick = useCallback(
    (item: any) => {
      const obj = {
        gameId: item.id,
        gameLogo: item.iconUrl,
        gameName: item.name,
      };

      onChange(obj);
      setInputValue(item.name);
      setIsPopoverOpen(false);
      isClick.current = true;
      dispatch.common.setSearchGame({});
    },
    [dispatch.common, onChange]
  );

  // 设置搜索值
  const onInputValueChange = useCallback(
    (e: any) => {
      setInputValue(e);
      isClick.current = false;
      dispatch.common.setSearchGame({});
    },
    [dispatch.common]
  );

  // 清空搜索值
  const onBtnClearValueClick = useCallback(() => {
    setInputValue('');
    dispatch.common.setSearchGame({});
  }, [dispatch.common]);

  // 失去焦点
  const onBlurChange = useCallback(() => {
    setTimeout(() => {
      setIsPopoverOpen(false);
    }, 200);
  }, []);

  // 请求搜索内容 ———— 搜索延迟1.25秒
  const timer = useRef<any>();
  useEffect(() => {
    if (isClick.current) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (trim(inputValue) === '') return;
      setLoading(true);
      setIsPopoverOpen(false);
      dispatch.common.getSearchGame({
        keyword: trim(inputValue),
        pageSize: 100,
      });
    }, 1250);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [dispatch.common, inputValue]);

  useEffect(() => {
    if (searchGame?.inforList) {
      setLoading(false);
      setIsPopoverOpen(true);
    }
  }, [searchGame]);

  // 搜索框
  const inputBox = useMemo(
    () => (
      <InputGroup inside className="campaign-create-item-related-games-input-box">
        <Input
          id="campaign-create-item-related-games-input"
          className="campaign-create-item-related-games-input"
          placeholder={t('search_placeholder_input')}
          spellCheck="false"
          value={inputValue}
          autoFocus
          onChange={(e) => {
            onInputValueChange(e);
          }}
        />
        {trim(inputValue) !== '' && !loading ? (
          <InputGroup.Button className="input-icon" onClick={() => onBtnClearValueClick()}>
            <img src={iconClose} alt="" />
          </InputGroup.Button>
        ) : undefined}
        {loading ? (
          <InputGroup.Addon className="input-icon">
            <Loader />
          </InputGroup.Addon>
        ) : undefined}
      </InputGroup>
    ),
    [t, inputValue, loading, onInputValueChange, onBtnClearValueClick]
  );

  // 游戏列表
  const gameList = useMemo(
    () =>
      searchGame?.inforList && isArray(searchGame?.inforList)
        ? [
            <div className="search-popover-title" key="title">
              {t('search_title_game')}
            </div>,
            searchGame?.inforList.map((item: any, index: number) => (
              <LayoutHeaderSearchGameItem
                {...item}
                key={index}
                onClick={() => onBtnItemClick(item)}
              />
            )),
          ]
        : undefined,
    [onBtnItemClick, searchGame?.inforList, t]
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
        searchGame && searchGame?.inforList && searchGame.inforList.length > 0 ? (
          <Popover>{gameList}</Popover>
        ) : (
          <Popover>{notFound}</Popover>
        )
      ) : (
        <div />
      ),
    [inputValue, loading, searchGame, gameList, notFound]
  );

  return (
    <Whisper
      placement="autoVertical"
      trigger="active"
      open={isPopoverOpen}
      onBlur={onBlurChange}
      controlId={
        searchGame && searchGame?.inforList
          ? searchGame.inforList.length <= 5
            ? `campaign-create-item-related-games-popover${searchGame.inforList.length}`
            : 'campaign-create-item-related-games-popover'
          : 'campaign-create-item-related-games-popover'
      }
      speaker={popoverBox}
      ref={ref as any}
    >
      {inputBox}
    </Whisper>
  );
});

export default CampaignCreateItemRelatedGames;
