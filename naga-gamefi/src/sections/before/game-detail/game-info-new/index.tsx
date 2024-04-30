import React, { useMemo, useContext } from 'react';
import { Typography } from '@mui/material';

import './index.scss';

import { stauslist } from 'src/utils/public/datas';
import GameCategoryItem from 'src/components/before/game-category-item';
import ShareList from 'src/components/before/share-list';
import TitleCurreny from 'src/components/before/title-currency';
// import SortInfo from 'src/components/before/sort-info';
import SvgIcon from 'src/components/svg-icon';
import { Context } from '../context';

const GameDetailData = () => {
  const { t, detail, getSupportPlatform, isPc } = useContext(Context);

  // 游戏平台
  const platform = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_platform')}</div>
        <div className="game-detail-data-item-content">
          {getSupportPlatform(detail?.supportPlatform).length > 0 &&
            getSupportPlatform(detail?.supportPlatform).map((title: any, idex: any) => (
              <SvgIcon className="game-detail-data-item-icon" name={title} notmouse key={idex} />
            ))}
        </div>
      </div>
    ),
    [detail?.supportPlatform, getSupportPlatform, t]
  );

  // 游戏社区
  const community = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_community')}</div>
        <ShareList
          size="small-icon game-detail-data-item-icon"
          linkitem={{
            tw: detail?.twitter,
            me: detail?.medium,
            te: detail?.telegram,
            di: detail?.discord,
          }}
        />
      </div>
    ),
    [detail?.discord, detail?.medium, detail?.telegram, detail?.twitter, t]
  );

  // 游戏网络 所属链
  const chainDom = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_network')}</div>
        <TitleCurreny size="medium" chain={detail?.chain ? detail.chain : ''} />
      </div>
    ),
    [detail.chain, t]
  );

  // 排行名次
  const rankingDom = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">Rank</div>
        <div className="game-detail-data-item-rank">346</div>
      </div>
    ),
    []
  );

  // 评分
  const playerrateDom = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">Player Rating</div>
        <div>{detail?.score}</div>
      </div>
    ),
    [detail?.score]
  );

  // 游戏开发商
  const developer = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_developer')}</div>
        <div className="game-detail-data-item-content">
          <div className="game-detail-data-item-text">{detail?.devOrg || '--'}</div>
        </div>
      </div>
    ),
    [detail?.devOrg, t]
  );

  // 游戏阶段
  const stage = useMemo(() => {
    const data = stauslist.find(
      (item) => item.title.toLowerCase() === detail?.developStatus?.toLowerCase()
    );

    return (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_stage')}</div>
        <div className="game-detail-data-item-content">
          {data?.icon && (
            <img className="game-detail-data-item-icon small" src={data?.icon} alt="" />
          )}
          <div className="game-detail-data-item-text">{data?.name || '--'}</div>
        </div>
      </div>
    );
  }, [detail?.developStatus, t]);

  // 游戏基础信息
  const baseBox = useMemo(
    () => (
      <div className="game-detail-base-box">
        {rankingDom}
        {playerrateDom}
        {developer}
        {stage}
        {chainDom}
        {platform}
        {community}
      </div>
    ),
    [chainDom, community, developer, platform, playerrateDom, rankingDom, stage]
  );

  // 游戏代币数据
  //   const dataBox = useMemo(
  //     () => (detail?.symbol ? <GameDetailDataBox /> : undefined),
  //     [detail?.symbol]
  //   );

  return (
    <div className="game-detail-data-dom">
      {isPc && <Typography variant="h4">Info</Typography>}
      {/* {imageBox} */}
      {/* {tagsBox} */}
      {baseBox}
      {/* <GameDetailDataBtn /> */}
      {/* {dataBox} */}
    </div>
  );
};

export default GameDetailData;
