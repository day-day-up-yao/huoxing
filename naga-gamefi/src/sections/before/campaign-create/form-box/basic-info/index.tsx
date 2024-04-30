import React, { useMemo } from 'react';
import classNames from 'classnames';

import './index.scss';

import TextField from '../../components/text-field';
import ItemDateRangePicker from '../../components/item-date-range-picker';
import ItemCoverImage from '../../components/item-cover-image';
import ItemDescription from '../../components/item-description';
import ItemRelatedGames from '../../components/item-related-games';

const CampaignCreateBascInfo = (props: any) => {
  const { t, show, gameInfo, formError, setIsLoading } = props;

  // 活动名称
  const CampaignNameDom = useMemo(
    () => (
      <TextField
        name="title"
        label={t('campaign_create_campaign_name')}
        maxLength={50}
        placeholder={t('campaign_create_campaign_name_placeholder')}
        labelFirst
        errorMessage={formError.title}
      />
    ),
    [formError.title, t]
  );

  // 活动日期
  const CampaignPeriodDom = useMemo(
    () => (
      <TextField
        name="time"
        label={t('campaign_create_campaign_period')}
        accepter={ItemDateRangePicker}
      />
    ),
    [t]
  );

  // 活动封面图片
  const CampaignCoverImageDom = useMemo(
    () => (
      <TextField
        name="picUrl"
        label={t('campaign_create_campaign_cover_image')}
        accepter={ItemCoverImage}
        t={t}
        setIsLoading={setIsLoading}
        errorMessage={formError.picUrl}
      />
    ),
    [formError.picUrl, setIsLoading, t]
  );

  // 活动简介
  const CampaignDescription = useMemo(
    () => (
      <TextField
        className="campaign-create-basic-info-dec"
        name="description"
        label={t('campaign_create_campaign_description')}
        accepter={ItemDescription}
        errorMessage={formError.description}
        t={t}
      />
    ),
    [formError.description, t]
  );

  // 活动关联游戏
  const CampaignRelatedGames = useMemo(
    () => (
      <TextField
        name="gameInfo"
        label={
          <span>
            {t('campaign_create_related_games')}{' '}
            <span style={{ display: 'inline-block', marginLeft: '4px' }}>
              ({t('public_optional')})
            </span>
          </span>
        }
        accepter={ItemRelatedGames}
        t={t}
        errorMessage={formError.gameInfo}
        // toggleShow
      />
    ),
    [formError.gameInfo, t]
  );

  // 关联游戏名称 - Game Info
  const CampaignRelatedGamesName = useMemo(
    () =>
      typeof gameInfo.gameName !== 'undefined' && gameInfo.gameName !== '' ? (
        <div className="campaign-create-basic-custom-item only-title">
          <div className="campaign-create-basic-custom-item-title">
            {`${t('campaign_create_related_game_name')}: `}
            <img className="campaign-create-basic-custom-item-img" src={gameInfo.gameLogo} alt="" />
            {gameInfo.gameName}
          </div>
        </div>
      ) : null,
    [gameInfo.gameLogo, gameInfo.gameName, t]
  );

  return (
    <div className={classNames('campaign-create-basic-info', { show })}>
      {CampaignNameDom}
      {CampaignPeriodDom}
      {CampaignRelatedGames}
      {CampaignRelatedGamesName}
      {CampaignCoverImageDom}
      {CampaignDescription}
    </div>
  );
};

export default CampaignCreateBascInfo;
