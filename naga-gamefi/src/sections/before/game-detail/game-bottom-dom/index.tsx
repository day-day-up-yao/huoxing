import React, { useContext, useMemo, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import anchorme from 'anchorme';
import { isArray } from 'lodash';
import { Button } from 'rsuite';
import { Tabs, Tab, Box } from '@mui/material';

import './index.scss';

import { gameDetailTabs } from 'src/utils/public/datas';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import NotData from 'src/components/before/not-data';
import SvgIcon from 'src/components/svg-icon';
import { Context } from '../context';
// import { dangerouslySetInnerHTML } from '../../../public/js'
import GameDetailTeamCoreItem from '../components/team-core-item';
import GameDetailBackerItem from '../components/team-backer-item';
import GameNews from '../../game-news';
import GameNewsDetail from '../../game-news-detail';
import GameDetilReviewDom from '../game-review-dom';

import GameDetailDataBox from '../components/data-box';
import GameDetailLive from '../game-live-dom';
import GameTasklist from '../game-task-list';
import GameNFTCollectionDom from '../game-nft-dom';
import GameDetailCommunityPopularity from '../game-community-popularity';
import CompaignTasks from '../game-campaign-tasks';
import GameInfoNews from '../game-info-new';

const GameDetailBottom = () => {
  const {
    t,
    detail,
    nowTab,
    isBrief,
    isHaveToken,
    isHaveNFT,
    isattestation,
    onBtnChangeTabClick,
    onBtnMoreClick,
  } = useContext(Context);
  const { isPc } = useBreakPoint();

  const newtabBox = useMemo(
    () => (
      <div className="game-detail-bottom-tab-box">
        <Tabs
          value={nowTab}
          onChange={onBtnChangeTabClick}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {gameDetailTabs &&
            gameDetailTabs
              .filter((itm) => itm.id !== 0)
              .map((item: any, index) =>
                (isPc && item?.isPC) || (!isPc && item?.isM) ? (
                  (item.id !== 6 && item.id !== 2 && item.id !== 5) ||
                  // data数据 没有的话隐藏
                  (item.id === 6 && (isHaveToken || isHaveNFT)) ||
                  // live直播 没有的话隐藏
                  (item.id === 5 && detail?.gameLivePojo) ||
                  // 团队数据 没数据隐藏
                  (item.id === 2 &&
                    isArray(detail?.memberList) &&
                    detail?.memberList.length > 0) ? (
                    <Tab label={t(item.title)} value={item.id} sx={{ fontSize: 16 }} key={index} />
                  ) : undefined
                ) : undefined
              )}
        </Tabs>
      </div>
    ),
    [
      isPc,
      isHaveToken,
      isHaveNFT,
      detail?.gameLivePojo,
      detail?.memberList,
      nowTab,
      t,
      onBtnChangeTabClick,
    ]
  );

  // 游戏标签列
  // const tabBox = useMemo(
  //   () => (
  //     <div className="game-detail-bottom-tab-box">
  //       {gameDetailTabs &&
  //         gameDetailTabs.map((item: any, index) =>
  //           (isPc && item?.isPC) || (!isPc && item?.isM) ? (
  //             (item.id !== 6 && item.id !== 2 && item.id !== 5) ||
  //             // data数据 没有的话隐藏
  //             (item.id === 6 && (isHaveToken || isHaveNFT)) ||
  //             // live直播 没有的话隐藏
  //             (item.id === 5 && detail?.gameLivePojo) ||
  //             // 团队数据 没数据隐藏
  //             (item.id === 2 && isArray(detail?.memberList) && detail?.memberList.length > 0) ? (
  //               <div
  //                 className={classNames('game-detail-bottom-tab-item', {
  //                   active: nowTab === item.id,
  //                   disable: item?.disable,
  //                 })}
  //                 onClick={() => {
  //                   if (item?.disable) return;
  //                   onBtnChangeTabClick(item.id);
  //                 }}
  //                 key={index}
  //               >
  //                 {item.id !== 6
  //                   ? t(item.title)
  //                   : isHaveNFT && isHaveToken
  //                   ? t(item.title)
  //                   : isHaveNFT && !isHaveToken
  //                   ? 'NFT'
  //                   : 'Token'}
  //                 {item?.disable ? <div className="soon">{t('game_detail_soon')}</div> : undefined}
  //               </div>
  //             ) : undefined
  //           ) : undefined
  //         )}
  //     </div>
  //   ),
  //   [
  //     isPc,
  //     isHaveToken,
  //     isHaveNFT,
  //     detail?.gameLivePojo,
  //     detail?.memberList,
  //     nowTab,
  //     t,
  //     onBtnChangeTabClick,
  //   ]
  // );

  // 游戏介绍 缩放按钮
  const gameDescBtn = useMemo(
    () => (
      <div className="game-detail-bottom-desc-btn-box">
        <Button
          className="game-detail-bottom-desc-btn"
          appearance="primary"
          onClick={() => onBtnMoreClick()}
        >
          {isBrief ? t('public_more') : t('public_less')}
          <SvgIcon
            style={{
              paddingLeft: '5px',
            }}
            name={isBrief ? 'line-pointdown' : 'line-pointup'}
          />
          {/* <img
            className="game-detail-bottom-desc-btn-icon"
            src="/images/icon/btn-down-arrow.png"
            alt=""
          /> */}
        </Button>
      </div>
    ),
    [isBrief, t, onBtnMoreClick]
  );

  // 游戏空页面
  const notDataDom = useMemo(
    () => <NotData className="game-detail-bottom-not-data-box" title={t('public_not_data2')} />,
    [t]
  );

  // 介绍是否缩放
  const refDesLocation = useRef<any>(null);
  const refDesFrist = useRef(0);
  const [isDescBtnOpen, setIsDescBtnOpen] = useState(true);
  useEffect(() => {
    if (!detail?.gameDesc || !refDesLocation.current || refDesFrist.current !== 0) return;
    const height = refDesLocation.current.offsetHeight;
    if (height < 1000) {
      setIsDescBtnOpen(false);
    } else {
      onBtnMoreClick();
    }
    refDesFrist.current = 1;
  }, [detail?.gameDesc, onBtnMoreClick]);

  // 游戏介绍
  const gameDesc = useMemo(
    () =>
      nowTab === 1 ? (
        detail?.gameDesc && detail?.gameDesc !== '' ? (
          <div
            className={classNames('game-detail-bottom-desc-box', { brief: isBrief })}
            ref={refDesLocation}
          >
            {!isPc && isattestation ? <GameInfoNews /> : undefined}
            <div
              className="game-detail-bottom-desc"
              dangerouslySetInnerHTML={{
                __html: anchorme({
                  input: detail?.gameDesc,
                  options: {
                    attributes: {
                      target: '_blank',
                    },
                  },
                }).replace(/(\r\n {4})/g, ''),
              }}
            />
            {isDescBtnOpen ? gameDescBtn : undefined}
          </div>
        ) : (
          notDataDom
        )
      ) : undefined,
    [nowTab, detail?.gameDesc, isBrief, isPc, isDescBtnOpen, gameDescBtn, notDataDom, isattestation]
  );

  // 游戏团队 ———— 项目成员
  const gameTeamMember = useMemo(() => {
    const isHaveList = isArray(detail?.memberList) && detail?.memberList.length > 0;

    return isHaveList ? (
      <>
        <div className="game-detail-bottom-team-title">{t('game_detail_core_team')}</div>
        <div className="game-detail-bottom-team-core-box">
          {detail?.memberList
            .sort((a: any, b: any) => Number(b.topOrder) - Number(a.topOrder))
            .map((item: any, index: any) => (
              <GameDetailTeamCoreItem
                iconUrl={item.avatarUrl}
                name={item.name}
                text={item.brief}
                key={index}
              />
            ))}
        </div>
      </>
    ) : undefined;
  }, [t, detail?.memberList]);

  // 游戏团队 ———— 组织机构
  const gameTeamOrg = useMemo(() => {
    const isHaveList = isArray(detail?.orgList) && detail?.orgList.length > 0;

    return isHaveList ? (
      <>
        <div className="game-detail-bottom-team-title">{t('game_detail_backers')}</div>
        <div className="game-detail-bottom-team-backer-box">
          {detail?.orgList
            .sort((a: any, b: any) => Number(b.topOrder) - Number(a.topOrder))
            .map((item: any, index: any) => (
              <GameDetailBackerItem
                iconUrl={item.logoUrl}
                name={item.name}
                text={item.brief}
                key={index}
              />
            ))}
        </div>
      </>
    ) : undefined;
  }, [t, detail?.orgList]);

  // 游戏团队
  const gameTeam = useMemo(
    () =>
      nowTab === 2 ? (
        isArray(detail?.memberList) &&
        detail?.memberList.length > 0 &&
        isArray(detail?.orgList) &&
        detail?.orgList.length > 0 ? (
          <div className="game-detail-bottom-team">
            {gameTeamMember}
            {gameTeamOrg}
          </div>
        ) : (
          notDataDom
        )
      ) : undefined,
    [nowTab, detail?.memberList, detail?.orgList, gameTeamMember, gameTeamOrg, notDataDom]
  );

  // 活动与任务
  const compaignTasks = useMemo(() => (nowTab === 0 ? <CompaignTasks /> : undefined), [nowTab]);

  // 游戏资讯
  const gameNews = useMemo(() => (nowTab === 3 ? <GameNews /> : undefined), [nowTab]);

  // 游戏评论
  const gameReview = useMemo(
    () => (nowTab === 1 || nowTab === 4 ? <GameDetilReviewDom /> : undefined),
    [nowTab]
  );

  // 游戏 Token数据 和 NFT数据
  const gameData = useMemo(() => (nowTab === 6 ? <GameNFTCollectionDom /> : undefined), [nowTab]);

  // 游戏测评
  const gameEvaluation = useMemo(() => (nowTab === 7 ? <GameNewsDetail /> : undefined), [nowTab]);

  // 游戏直播
  const gameLive = useMemo(() => (nowTab === 5 ? <GameDetailLive /> : undefined), [nowTab]);

  // 任务列表
  const taskList = useMemo(() => (nowTab === 8 ? <GameTasklist /> : undefined), [nowTab]);

  // 游戏 Twitter数据图表 和 Discord数据图表
  const gameCommunityPopularity = useMemo(
    () => (nowTab === 9 ? <GameDetailCommunityPopularity /> : undefined),
    [nowTab]
  );

  return (
    <div className="game-detail-bottom" id="gameDetailBottom">
      <div className="game-detail-bottom-center">
        {newtabBox}
        {gameDesc}
        {gameTeam}
        {isattestation && compaignTasks}
        {gameNews}
        {gameReview}
        {gameData}
        {gameEvaluation}
        {gameLive}
        {taskList}
        {gameCommunityPopularity}
      </div>
    </div>
  );
};

export default GameDetailBottom;
