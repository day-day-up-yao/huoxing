import React, { useContext, useMemo } from 'react';
import { Button } from 'rsuite';

import './index.scss';

import GameUserReviewItem from 'src/components/before/game-user-review-item';
import SvgIcon from 'src/components/svg-icon';
import NotData from 'src/components/before/not-data';
import Pagination from 'src/components/before/pagination';
import { Context } from '../context';
import GameDetailCommentPopup from '../../game-detail/game-comment-popup';

const NewsDetilReviewDom = () => {
  const {
    t,
    commentList,
    selfArticleComment,
    onBtnUserReviewsPageClick,
    isCommentPopupShow,
    onBtnCommentPopupOpenClick,
    onBtnCommentPopupCloseClick,
    onBtnAddCommentClick,
  } = useContext(Context);

  // 标题
  const headerDom = useMemo(
    () => (
      <div className="news-detail-review-dom-header">
        <div className="news-detail-review-dom-title">{t('game_detail_user_reviews')}</div>
        <Button
          className="news-detail-review-dom-add-btn"
          onClick={() => onBtnCommentPopupOpenClick()}
        >
          <SvgIcon className="news-detail-review-dom-add-btn-img" name="btn_edit" />
          {t('rate_popup_btn')}
        </Button>
      </div>
    ),
    [onBtnCommentPopupOpenClick, t]
  );

  // 评论空页面
  const notDataDom = useMemo(
    () => <NotData className="news-detail-review-not-data-box" title={t('rate_no_comments')} />,
    [t]
  );

  // 评论列表
  const rateList = useMemo(
    () =>
      commentList && commentList?.inforList?.length > 0 ? (
        <div className="news-detail-review-rate-list">
          {commentList?.inforList.map((item: any, index: any) => (
            <GameUserReviewItem {...item} isNews key={index} />
          ))}
        </div>
      ) : (
        notDataDom
      ),
    [commentList, notDataDom]
  );

  // 翻页按钮
  const pageDom = useMemo(
    () =>
      commentList &&
      commentList?.inforList?.length > 0 &&
      commentList?.pageCount > 1 && (
        <Pagination
          totalData={commentList.recordCount}
          pageSize={10}
          pageChange={(curPage: any) => {
            onBtnUserReviewsPageClick(curPage);
          }}
          prevTxt={<img src="/images/icon/prepage.png" alt="" />}
          nextTxt={<img src="/images/icon/nextpage.png" alt="" />}
        />
      ),
    [commentList, onBtnUserReviewsPageClick]
  );

  // 评论弹窗
  const commentPopup = useMemo(
    () =>
      isCommentPopupShow ? (
        <GameDetailCommentPopup
          {...selfArticleComment}
          onBtnCloseClick={onBtnCommentPopupCloseClick}
          onBtnOKClick={onBtnAddCommentClick}
          isNews
        />
      ) : undefined,
    [isCommentPopupShow, onBtnAddCommentClick, onBtnCommentPopupCloseClick, selfArticleComment]
  );

  return (
    <div className="news-detail-review-dom">
      {headerDom}
      {rateList}
      {pageDom}
      {commentPopup}
    </div>
  );
};

export default NewsDetilReviewDom;
