import React, { useContext, useMemo } from 'react';
import { Button, Progress, Rate } from 'rsuite';

import './index.scss';

import GameUserReviewItem from 'src/components/before/game-user-review-item';
// import SortInfo from 'src/components/before/sort-info';
import SvgIcon from 'src/components/svg-icon';
import NotData from 'src/components/before/not-data';
import Pagination from 'src/components/before/pagination';
import { Context } from '../context';
import GameDetailCommentPopup from '../game-comment-popup';

const GameDetilReviewDom = () => {
  const {
    t,
    commentList,
    commentUserNum,
    starDate,
    selfComment,
    onBtnUserReviewsPageClick,
    isCommentPopupShow,
    onBtnCommentPopupOpenClick,
    onBtnCommentPopupCloseClick,
    onBtnAddCommentClick,
  } = useContext(Context);
  console.log(selfComment, 333);

  // 标题
  const headerDom = useMemo(
    () => (
      <div className="game-detail-review-dom-header">
        <div className="game-detail-review-dom-title">{t('game_detail_user_reviews')}</div>
        <Button
          className="game-detail-review-dom-add-btn"
          onClick={() => onBtnCommentPopupOpenClick()}
        >
          <SvgIcon className="game-detail-review-dom-add-btn-img" name="btn_edit" />
          {t('rate_popup_btn')}
        </Button>
      </div>
    ),
    [onBtnCommentPopupOpenClick, t]
  );

  // 评分模块
  // 总星数*2/用户数；保留小数点后一位，四舍五入 少于5人也是TBA
  const scoreBox = useMemo(() => {
    let score = 0;
    if (starDate && commentUserNum > 5) {
      starDate.map((item: any, index: any) => (score += item * (index + 1)));
      score = Number.parseFloat(((score * 2) / commentUserNum).toFixed(1));
    }

    return (
      <div className="game-detail-review-rate-box-left">
        {/* <SortInfo className="game-detail-review-score-box" isUser score={`${score}`} /> */}
        <div className="game-detail-review-score-num">
          {t('reviews_all_num', { num: commentUserNum })}
        </div>
      </div>
    );
  }, [starDate, commentUserNum, t]);

  // 星级进度条
  const rateProgressBox = useMemo(
    () => (
      <div className="game-detail-review-rate-box-right">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="game-detail-review-rate-box-item" key={index}>
            <Rate className="game-detail-review-rate-box-rate" size="xs" max={5 - index} readOnly />
            <Progress.Line
              className="game-detail-review-rate-box-progress-line"
              percent={Math.round((starDate[4 - index] / commentUserNum) * 100) || 0}
            />
          </div>
        ))}
      </div>
    ),
    [commentUserNum, starDate]
  );

  // 评分面板
  const rateBox = useMemo(
    () => (
      <div className="game-detail-review-rate-box">
        {scoreBox}
        {rateProgressBox}
      </div>
    ),
    [scoreBox, rateProgressBox]
  );

  // 游戏空页面
  const notDataDom = useMemo(
    () => <NotData className="game-detail-review-not-data-box" title={t('rate_no_comments')} />,
    [t]
  );

  // 评论列表
  const rateList = useMemo(
    () =>
      commentList && commentList?.inforList?.length > 0 ? (
        <div className="game-detail-review-rate-list">
          {commentList?.inforList.map((item: any, index: any) => (
            <GameUserReviewItem {...item} key={index} />
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
    [
      commentList?.inforList?.length,
      commentList?.pageCount,
      commentList.recordCount,
      onBtnUserReviewsPageClick,
    ]
  );

  // 评论弹窗
  const commentPopup = useMemo(
    () =>
      isCommentPopupShow ? (
        <GameDetailCommentPopup
          {...selfComment}
          onBtnCloseClick={onBtnCommentPopupCloseClick}
          onBtnOKClick={onBtnAddCommentClick}
        />
      ) : undefined,
    [isCommentPopupShow, onBtnAddCommentClick, onBtnCommentPopupCloseClick, selfComment]
  );

  return (
    <div className="game-detail-review-dom">
      {headerDom}
      {/* {rateBox} */}
      {rateList}
      {pageDom}
      {commentPopup}
    </div>
  );
};

export default GameDetilReviewDom;
