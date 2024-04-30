import React, { useMemo, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Whisper, Popover } from 'rsuite';
import classNames from 'classnames';

import './index.scss';

import { formattingNum, TocopyText } from 'src/utils/public/';
import { gameDetailTimeType } from 'src/utils/public/datas';
import { Context } from '../../context';

const GameDetailDataBox = () => {
  const { t } = useTranslation();
  const {
    detail,
    nowChainData,
    nowContractAddress,
    onBtnConnectionWalletClick,
    nowTimeType,
    onBtnChangeTimeTypeClick,
  } = useContext(Context);

  // 当前时间类型参数字符串
  const timeTypeString = useMemo(() => gameDetailTimeType[nowTimeType].type, [nowTimeType]);

  // 弹窗Dom
  const whisperRef = useRef<any>();

  // 游戏时间类型选项
  const timeTypeSpeaker = useMemo(
    () => (
      <Popover arrow={false}>
        {gameDetailTimeType.map((item, index) => (
          <div
            className="data-time-type-popover-item "
            key={index}
            onClick={() => {
              onBtnChangeTimeTypeClick(item.id);
              whisperRef.current.close();
            }}
          >
            {item.name}
          </div>
        ))}
      </Popover>
    ),
    [onBtnChangeTimeTypeClick]
  );

  // 游戏详情 标题
  const dataTitle = useMemo(
    () => (
      <div className="game-detail-data-box-title">
        {t('game_detail_data')}
        <Whisper
          placement="bottomEnd"
          trigger="click"
          controlId="data-time-type-popover"
          speaker={timeTypeSpeaker}
          ref={whisperRef}
        >
          <div className="game-detail-data-title-select">
            {gameDetailTimeType[nowTimeType].name}
            <img
              className="game-detail-data-title-select-icon"
              src="/images/icon/select-arrow.png"
              alt=""
            />
          </div>
        </Whisper>
      </div>
    ),
    [nowTimeType, t, timeTypeSpeaker]
  );

  // 游戏详情 币种信息 ———— 涨跌百分比
  const change24h = useMemo(() => {
    const numChange = detail[`change${timeTypeString}`];

    return numChange && numChange !== 0 ? (
      <div
        className={classNames('game-detail-data-coin-text', {
          green: Number(numChange) > 0,
          red: Number(numChange) < 0,
        })}
      >
        {numChange > 0 ? '+' : ''}
        {Number.parseFloat(Number(numChange * 100).toFixed(3))}%
      </div>
    ) : undefined;
  }, [detail, timeTypeString]);

  // 游戏详情 币种信息
  const coinBox = useMemo(
    () => (
      <div className="game-detail-data-coin-box">
        <div className="game-detail-data-coin-item">
          <div className="game-detail-data-coin-item-content left">
            {detail?.coinIconUrl ? (
              <img className="game-detail-data-coin-icon" src={detail?.coinIconUrl} alt="" />
            ) : undefined}
            <div className="game-detail-data-coin-text">{detail?.symbol}</div>
          </div>
          <div className="game-detail-data-coin-item-content right">
            <div className="game-detail-data-coin-text text">
              {detail?.price ? `$ ${Number(detail?.price).toFixed(3)}` : '--'}
            </div>
            {change24h}
          </div>
        </div>
      </div>
    ),
    [change24h, detail?.coinIconUrl, detail?.symbol, detail?.price]
  );

  // 游戏详情 合约
  const contract = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_contract')}</div>
        {nowContractAddress ? (
          <div className="game-detail-data-item-content">
            {nowChainData ? (
              <img className="game-detail-data-item-icon chain" src={nowChainData?.icon} alt="" />
            ) : undefined}
            {nowContractAddress ? (
              <div className="game-detail-data-item-text">{`${nowContractAddress?.slice(
                0,
                4
              )}...${nowContractAddress?.slice(-4)}`}</div>
            ) : undefined}
            <img
              className="game-detail-data-item-btn"
              src="/images/icon/copyicon.png"
              alt=""
              onClick={() => TocopyText(nowContractAddress)}
            />
            <img
              className="game-detail-data-item-btn"
              src="/images/icon/martmask.png"
              alt=""
              onClick={() => onBtnConnectionWalletClick(nowContractAddress)}
            />
          </div>
        ) : undefined}
      </div>
    ),
    [t, nowContractAddress, nowChainData, onBtnConnectionWalletClick]
  );

  // 游戏详情 市值
  const mktCap = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_market_value')}</div>
        <div className="game-detail-data-item-content">
          <div className="game-detail-data-item-text">
            {detail?.marketCap ? `$ ${formattingNum(Number(detail?.marketCap).toFixed(4))}` : '--'}
          </div>
        </div>
      </div>
    ),
    [detail?.marketCap, t]
  );

  // 游戏详情 交易量
  const volume = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">Volume (24H)</div>
        <div className="game-detail-data-item-content">
          <div className="game-detail-data-item-text">
            {detail?.volume24h ? `$ ${formattingNum(detail?.volume24h)}` : '--'}
          </div>
        </div>
      </div>
    ),
    [detail?.volume24h]
  );

  // 游戏详情 社区粉丝数 ———— 数量
  const communityNum = useMemo(() => {
    // const num = detail[`activeNum${timeTypeString}`]

    // return <div className="game-detail-data-item-text">{num ? formattingNum(num) : '--'}</div>

    const num = detail?.communityNum;

    return <div className="game-detail-data-item-text">{num ? formattingNum(num) : '--'}</div>;
  }, [detail?.communityNum]);

  // 游戏详情 社区粉丝数 ———— 涨跌百分比
  const communityNumChange = useMemo(() => {
    const numChange = detail[`communityNumChange${timeTypeString}`];

    return numChange && numChange !== 0 ? (
      <div
        className={classNames('game-detail-data-item-text', {
          green: Number(numChange) > 0,
          red: Number(numChange) < 0,
        })}
      >
        {numChange > 0 ? '+' : ''}
        {Number.parseFloat(Number(numChange * 100).toFixed(4))}%
      </div>
    ) : undefined;
  }, [detail, timeTypeString]);

  // 游戏详情 社区粉丝数
  const communityNumDom = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_community_fans')}</div>
        <div className="game-detail-data-item-content">
          {communityNum}
          {communityNumChange}
        </div>
      </div>
    ),
    [communityNum, communityNumChange, t]
  );

  // 游戏详情 活跃用户 ———— 数量
  const activeNum = useMemo(() => {
    const num = detail[`activeNum${timeTypeString}`];

    return <div className="game-detail-data-item-text">{num ? formattingNum(num) : '--'}</div>;
  }, [detail, timeTypeString]);

  // 游戏详情 活跃用户 ———— 涨跌百分比
  const activeNumChange = useMemo(() => {
    const numChange = detail[`activeNumChange${timeTypeString}`];

    return numChange && numChange !== 0 ? (
      <div
        className={classNames('game-detail-data-item-text', {
          green: Number(numChange) > 0,
          red: Number(numChange) < 0,
        })}
      >
        {numChange > 0 ? '+' : ''}
        {Number.parseFloat(Number(numChange * 100).toFixed(4))}%
      </div>
    ) : undefined;
  }, [detail, timeTypeString]);

  // 游戏详情 活跃用户
  const activeNumDom = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_active_fans')}</div>
        <div className="game-detail-data-item-content">
          {activeNum}
          {activeNumChange}
        </div>
      </div>
    ),
    [activeNum, activeNumChange, t]
  );

  // 游戏详情 地址数量 ———— 数量
  const addressNum = useMemo(() => {
    // const num = detail[`activeNum${timeTypeString}`]

    // return <div className="game-detail-data-item-text">{num ? formattingNum(num) : '--'}</div>

    const num = detail?.addressNum;

    return <div className="game-detail-data-item-text">{num ? formattingNum(num) : '--'}</div>;
  }, [detail?.addressNum]);

  // 游戏详情 地址数量 ———— 涨跌百分比
  const addressNumChange = useMemo(() => {
    const numChange = detail[`addressNumChange${timeTypeString}`];

    return numChange && numChange !== 0 ? (
      <div
        className={classNames('game-detail-data-item-text', {
          green: Number(numChange) > 0,
          red: Number(numChange) < 0,
        })}
      >
        {numChange > 0 ? '+' : ''}
        {Number.parseFloat(Number(numChange * 100).toFixed(4))}%
      </div>
    ) : undefined;
  }, [detail, timeTypeString]);

  // 游戏详情 地址数量
  const addressNumDom = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_address_fans')}</div>
        <div className="game-detail-data-item-content">
          {addressNum}
          {addressNumChange}
        </div>
      </div>
    ),
    [addressNum, addressNumChange, t]
  );

  // 游戏详细信息
  const dataBox = useMemo(
    () => (
      <div className="game-detail-data-box">
        {dataTitle}
        {coinBox}
        {contract}
        {mktCap}
        {volume}
        {communityNumDom}
        {activeNumDom}
        {addressNumDom}
      </div>
    ),
    [dataTitle, coinBox, contract, mktCap, volume, communityNumDom, activeNumDom, addressNumDom]
  );

  return dataBox;
};

export default GameDetailDataBox;
