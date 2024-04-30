import React, { useCallback, useMemo } from 'react';

import './index.scss';

import { Typography } from '@mui/material';
import SvgIcon from 'src/components/svg-icon';
import TaskItemFollowTwitter from './task-item-follow-twitter';
import TaskItemRetweetATweet from './task-item-retweet-atweet';
import TaskItemLikeATweet from './task-item-like-atweet';
import TaskItemQuoteATweetHashtag from './task-item-quote-atweet-hashtag';
import TaskItemQuoteATweetTag from './task-item-quote-atweet-tag';
import TaskItemJoinDiscord from './task-item-join-discord';
import TaskItemJoinTelegram from './task-item-join-telegram';
import TaskItemPostATweet from './task-item-post-atweet';
import TaskItemWatchAVideoOnYoutube from './task-item-watch-avideo-on-youtube';
import TaskItemQA from './task-item-qa';
import TaskItemProofOfWork from './task-item-proof-of-work';
import TaskItemVisitASpecifiedWebPage from './task-item-visit-aspecified-web-page';

const CampaignCreateItemTaskItem = (props: any) => {
  const { data, item = {}, t, onMinusClick, handleInputChange, handleProps, rowIndex } = props;

  const getCurrentData = useCallback(() => {
    let currentData: any = {};
    data.find((_: any) =>
      _.tasks.find((_: any) => {
        if (_.id !== item.taskId) return;
        currentData = _;
      })
    );
    return currentData;
  }, [data, item.taskId]);

  // 头部 标题样式
  const headDom = useMemo(() => {
    const currentData = getCurrentData();

    return (
      <div className="campaign-create-item-task-item-title">
        <div className="campaign-create-item-task-item-title-left">
          <img
            className="campaign-create-item-task-item-title-icon"
            src={currentData.icon}
            alt=""
          />
          <div
            className="campaign-create-item-task-item-title-text"
            style={{ textTransform: 'capitalize' }}
          >
            <Typography variant="h6" sx={{ lineHeight: '1.2', marginBottom: '4px' }}>
              {t(currentData.label)}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={({ palette }) => ({
                fontWeight: 'normal',
                color: palette.text.secondary,
                lineHeight: '1.2',
              })}
            >
              {t('campaign_create_task')}
              {rowIndex + 1}
            </Typography>
          </div>
        </div>
      </div>
    );
  }, [getCurrentData, rowIndex, t]);

  // 内容模板
  const contentDom = useMemo(() => {
    const currentData = getCurrentData();
    switch (item.taskId) {
      case 1:
        return (
          <TaskItemFollowTwitter
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <TaskItemRetweetATweet
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <TaskItemLikeATweet
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 5:
        return (
          <TaskItemJoinDiscord
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 6:
        return (
          <TaskItemJoinTelegram
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 7:
        return (
          <TaskItemWatchAVideoOnYoutube
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 8:
        return (
          <TaskItemQA t={t} data={currentData} item={item} handleInputChange={handleInputChange} />
        );
      case 9:
        return (
          <TaskItemProofOfWork
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 10:
        return (
          <TaskItemVisitASpecifiedWebPage
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 11:
        return (
          <TaskItemPostATweet
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 12:
        return (
          <TaskItemQuoteATweetHashtag
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );
      case 13:
        return (
          <TaskItemQuoteATweetTag
            t={t}
            data={currentData}
            item={item}
            handleInputChange={handleInputChange}
          />
        );

      default:
        return undefined;
    }
  }, [item, getCurrentData, t, handleInputChange]);

  return (
    <div
      className="campaign-create-item-task-item"
      style={{ position: 'relative', cursor: 'default' }}
    >
      {headDom}
      <div className="campaign-create-item-task-item-title-right" onClick={() => onMinusClick()}>
        <SvgIcon className="campaign-create-item-task-item-close" name="close" />
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>{contentDom}</div>
      <div
        className="campaign-create-item-task-item-drag"
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '100%',
          height: '100%',
          zIndex: '0',
          cursor: 'pointer',
        }}
        {...handleProps}
      />
    </div>
  );
};

export default CampaignCreateItemTaskItem;
