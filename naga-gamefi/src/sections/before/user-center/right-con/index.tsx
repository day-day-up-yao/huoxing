import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';

import './index.scss';

import { userCenterCommentTabs } from 'src/utils/public/datas';
import Account from './account';
import UserMsg from './user-msg';
import Comment from './comment';
import CommentArticle from './comment-article';
import { Context } from '../context';
import UserBasic from './user-basic';

export default () => {
  const { tabType, getTabtype, t, nowCommentType, onBtnChangeCommentTypeClick, handleChangeName } =
    useContext(Context);

  const tabHeader = useMemo(
    () => [
      {
        name: t('user_account'),
        tab: 0,
      },
      {
        name: t('user_info'),
        tab: 1,
      },
      {
        name: t('user_comment'),
        tab: 2,
      },
    ],
    [t]
  );

  // 总页签 ———— 移动端
  const tabHeaderMDom = useMemo(
    () => (
      <div className="usercenter-header-tab">
        {tabHeader.map((item, index) => (
          <div
            className={classNames('header-tab-item', {
              active: tabType === item.tab,
            })}
            key={index}
            onClick={() => {
              getTabtype(item.tab);
            }}
          >
            <span>{item.name}</span>
            {tabType === item.tab && <div className="header-tab-item-line" />}
          </div>
        ))}
      </div>
    ),
    [getTabtype, tabHeader, tabType]
  );

  // 评论页签
  const commentTabDom = useMemo(
    () => (
      <div className="usercenter-header-tab article-comment-tab">
        {userCenterCommentTabs.map((item, index) => (
          <div
            className={classNames('header-tab-item', {
              active: nowCommentType === item.tab,
            })}
            key={index}
            onClick={() => {
              onBtnChangeCommentTypeClick(item.tab);
            }}
          >
            <span>{t(item.title)}</span>
            {nowCommentType === item.tab && <div className="header-tab-item-line" />}
          </div>
        ))}
      </div>
    ),
    [nowCommentType, onBtnChangeCommentTypeClick, t]
  );

  // 评论页签 ———— 移动端
  const commentTabMDom = useMemo(
    () => (
      <div className="usercenter-comment-tab">
        {userCenterCommentTabs.map((item, index) => (
          <div
            className={classNames('comment-tab-item', {
              active: nowCommentType === item.tab,
            })}
            key={index}
            onClick={() => {
              onBtnChangeCommentTypeClick(item.tab);
            }}
          >
            <span>{t(item.title)}</span>
          </div>
        ))}
      </div>
    ),
    [nowCommentType, onBtnChangeCommentTypeClick, t]
  );

  // 评论页面
  const commentDom = useMemo(
    () => (nowCommentType === 1 ? <Comment /> : <CommentArticle />),
    [nowCommentType]
  );

  return (
    <div className="usercenter-right">
      {/* {tabHeaderMDom} */}
      <UserBasic />
      <Account />
      <Button
        // mt="32px"
        sx={{
          mt: '32px',
          bgcolor: '#E60000',
          color: '#ffffff',
          width: '170px',
          '&:hover': {
            bgcolor: '#E60000',
          },
        }}
        onClick={handleChangeName}
      >
        Save
      </Button>
      {/* {tabType === 0 && <Account />} */}
      {/* {tabType === 0 && <UserMsg />} */}
      {/* {tabType === 2 && commentTabDom}
      {tabType === 2 && commentTabMDom}
      {tabType === 2 && commentDom} */}
    </div>
  );
};
