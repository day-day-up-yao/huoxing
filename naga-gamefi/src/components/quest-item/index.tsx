import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import './index.scss';

import { paths } from 'src/routes/paths';
import { useSettingsContext } from 'src/sections/layouts/settings';
import { useLink } from '../link';
import ImageLazy from '../before/image-lazy';
import TaskTimeBtn from '../before/task-time-btn';
import SvgIcon from '../svg-icon';

type QuestItemProps = {
  item: QuestListType;
  isgamedetail?: boolean;
  isUser?: boolean;
  deleteClick?: (id: string) => void;
};

const QuestItem = (props: QuestItemProps) => {
  const { item, isgamedetail, isUser, deleteClick } = props;
  const { t } = useTranslation();
  const { linkTo } = useLink();
  const { lang } = useSettingsContext();

  const questimg = useMemo(() => {
    let img = '/images/bigimg/task2.png';
    if (item?.picUrl && item?.picUrl !== 'string') {
      img = item.picUrl;
    }
    return img;
  }, [item?.picUrl]);

  const timestatus = useMemo(() => {
    let tatus = 0;
    if (isUser) {
      if (item.beginTime * 1000 > new Date().getTime()) {
        tatus = 0;
      }
      if (
        item.beginTime * 1000 < new Date().getTime() &&
        new Date().getTime() < item.endTime * 1000
      ) {
        tatus = 1;
      }
      if (item.endTime * 1000 < new Date().getTime()) {
        tatus = 2;
      }
    }

    return tatus;
  }, [isUser, item.beginTime, item.endTime]);

  const getRewardTypeDom = useCallback(() => {
    if (item.rewardType === 1) {
      return (
        <div className="quest-item-con-bottom-set-item">
          <div className="item-token-num">{item.rewardNum}</div>
          <div className="item-token-curreny">{item.rewardToken.toUpperCase()}</div>
        </div>
      );
    }
    if (item.rewardType === 2) {
      return 'NFT';
    }
    if (item.rewardType === 3) {
      return 'Whitelist';
    }
  }, [item.rewardNum, item.rewardToken, item.rewardType]);

  const getTimeTypeDom = useCallback(
    (isEnd?: boolean) => {
      if (isEnd) {
        return t('quest_list_finish');
      }
      if (timestatus === 0) {
        return t('quest_list_start');
      }
      if (timestatus === 1) {
        return t('quest_list_ing');
      }
      if (timestatus === 2) {
        return t('quest_list_finish');
      }
    },
    [t, timestatus]
  );

  const deleteDom = useCallback(
    (id: any) => (
      <div
        className="task-list-item-delete"
        onClick={(e) => {
          if (deleteClick) deleteClick(id);
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
        }}
      >
        <SvgIcon name="delete" />
      </div>
    ),
    [deleteClick]
  );

  const taskrewardInfo = useMemo(
    () => (
      <div className="quest-item-con-bottom-set-box">
        <div className="quest-item-con-bottom-set">
          <TaskTimeBtn timetype={timestatus} children={getRewardTypeDom()} />
          {isUser && timestatus === 0 && deleteDom(item.id)}
        </div>
        <div className="quest-item-con-bottom-set">
          {item.status === 1 && (
            <TaskTimeBtn className="task-list-item-btn" timetype={1} children={getTimeTypeDom()} />
          )}
          {(item.status === 2 || item.status === 3) && (
            <TaskTimeBtn
              className="task-list-item-btn"
              timetype={2}
              children={getTimeTypeDom(true)}
            />
          )}
        </div>
      </div>
    ),
    [deleteDom, getRewardTypeDom, getTimeTypeDom, isUser, item.id, item.status, timestatus]
  );
  // 任务时间
  const taskTimeinfo = useMemo(
    () => (
      <TaskTimeBtn
        isdetail
        timetype={timestatus}
        children={
          <div className="task-list-item-time">
            <SvgIcon name="green_time" className={`detail-time-icon-${timestatus}`} />
            <span>
              {moment(item.beginTime * 1000).format('YYYY-MM-DD HH:mm')} ～
              {moment(item.endTime * 1000).format('MM-DD HH:mm')}
            </span>
          </div>
        }
      />
    ),
    [item.beginTime, item.endTime, timestatus]
  );

  const itemDom = useMemo(
    () => (
      <a
        className="quest-item"
        href={`/${lang}${paths.taskDetail}/${item.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={questimg} alt="" className="quest-item-bgimg" />
        <div className="quest-item-con">
          <div className="quest-item-con-top">
            <div className="quest-item-con-top-con">
              <div className="quest-item-con-top-img">
                <img src={questimg} alt="" />
              </div>
            </div>
            {!isgamedetail && (
              <div className="quest-item-con-top-aviter">
                <img
                  src={
                    item.userAvatarUrl
                      ? item.userAvatarUrl
                      : '/images/bigimg/5263267846078567677.png'
                  }
                  alt=""
                />
              </div>
            )}
          </div>
          {isgamedetail ? (
            <div className="quest-item-con-bottom">
              {taskrewardInfo}
              <div className="quest-item-con-bottom-title">{item.title}</div>
              {taskTimeinfo}
            </div>
          ) : (
            <div className="quest-item-con-bottom">
              <div className="quest-item-con-bottom-desc">
                <span>{item.userName}</span>
                {item.nagaAuth === 1 && <SvgIcon name="authentication" />}
              </div>
              <div className="quest-item-con-bottom-title">{item.title}</div>
              {taskrewardInfo}
            </div>
          )}
        </div>
      </a>
    ),
    [
      isgamedetail,
      item.id,
      item.nagaAuth,
      item.title,
      item.userAvatarUrl,
      item.userName,
      lang,
      questimg,
      taskTimeinfo,
      taskrewardInfo,
    ]
  );

  return itemDom;
};

export default QuestItem;
