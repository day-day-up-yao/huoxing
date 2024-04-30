import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Rate, Button } from 'rsuite';
import classNames from 'classnames';

import './index.scss';

import SvgIcon from 'src/components/svg-icon';
import { formatPublishTime } from 'src/utils/public';
import Avatar from '../avatar';

const GameUserReviewItem = (props: any) => {
  const {
    avatarUrl,
    content,
    name,
    publishTime,
    star,
    isEdit,
    isusercenter,
    gameName,
    gameIconUrl,
    toreviewClick,
    onBtnLinkToClick,
    isNews,
  } = props;
  const { t } = useTranslation();

  // 头像
  const avatarBox = useMemo(
    () => (
      <Avatar
        className={classNames('game-user-review-item-avatar', { click: onBtnLinkToClick })}
        src={isusercenter ? (isNews ? avatarUrl : gameIconUrl) : avatarUrl}
        isround={!isusercenter || (isusercenter && isNews)}
        onClick={() => {
          if (onBtnLinkToClick) onBtnLinkToClick();
        }}
      />
    ),
    [isusercenter, isNews, avatarUrl, gameIconUrl, onBtnLinkToClick]
  );

  // 姓名
  const nameBox = useMemo(
    () => (
      <div
        className="game-user-review-item-name"
        onClick={() => {
          if (onBtnLinkToClick) onBtnLinkToClick();
        }}
        style={{ cursor: onBtnLinkToClick ? 'pointer' : undefined }}
      >
        {isusercenter ? (isNews ? name : gameName) : name}
      </div>
    ),
    [onBtnLinkToClick, isusercenter, isNews, name, gameName]
  );

  // 日期
  const timeBox = useMemo(
    () => (
      <div className="game-user-review-item-time">{formatPublishTime(t, publishTime * 1000)}</div>
    ),
    [publishTime, t]
  );

  // 评分星星
  const rateBox = useMemo(
    () => (
      <Rate className="game-user-review-item-rate" readOnly size="xs" value={star} color="red" />
    ),
    [star]
  );

  // 是否已编辑 ———— 暂时缺少参数
  const editBox = useMemo(
    () =>
      isEdit && Number(isEdit) === 1 ? (
        <div className="game-user-review-item-edit">{t('rate_tag_edited')}</div>
      ) : undefined,
    [isEdit, t]
  );

  // 用户评价
  const textBox = useMemo(
    () => (
      <div className="game-user-review-item-content-text">
        {content}
        {isusercenter && <div className="game-user-review-item-content-text-line" />}
      </div>
    ),
    [content, isusercenter]
  );

  // 顶部
  const contentTop = useMemo(
    () => (
      <div
        className={classNames('game-user-review-item-content-top', {
          frist: !(isEdit && Number(isEdit) === 1),
        })}
      >
        {nameBox}
        {timeBox}
        {editBox}
        {/* {!isNews && rateBox} */}
      </div>
    ),
    [nameBox, timeBox, editBox, isEdit]
  );

  // 右侧编辑按钮
  const editBtn = useMemo(
    () =>
      isusercenter ? (
        <div className="game-user-review-item-edit-btn-box">
          <Button
            className="game-user-review-item-edit-btn"
            appearance="link"
            onClick={() => toreviewClick()}
          >
            <SvgIcon className="game-user-review-item-edit-btn-img" name="btn_edit" />
            {t('rate_edit_revise')}
          </Button>
        </div>
      ) : undefined,
    [isusercenter, t, toreviewClick]
  );

  return (
    <div className={classNames('game-user-review-item', { 'usercenter-not-bg': isusercenter })}>
      {avatarBox}
      <div className="game-user-review-item-content">
        {contentTop}
        {textBox}
        {editBtn}
      </div>
    </div>
  );
};

export default GameUserReviewItem;
