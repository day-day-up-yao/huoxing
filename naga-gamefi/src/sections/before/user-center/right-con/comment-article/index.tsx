import React, { useContext, useMemo } from 'react';

import GameUserReviewItem from 'src/components/before/game-user-review-item';
import NotData from 'src/components/before/not-data';
import Pagination from 'src/components/before/pagination';
import { Context } from '../../context';
import GameCommentPopup from '../../../game-detail/game-comment-popup';

export default () => {
  const {
    articleCommentInfo,
    articleCommentItem,
    onChangeArticleCommentClick,
    onChangeCloseArticleItemClick,
    getCommentArticleItemInfo,
    selectArticlePage,
    onBtnLinkToClick,
    t,
  } = useContext(Context);

  // 翻页
  const pageDom = useMemo(
    () => (
      <Pagination
        totalData={articleCommentInfo.recordCount}
        pageSize={10}
        pageChange={(curPage: any) => selectArticlePage(curPage)}
      />
    ),
    [articleCommentInfo.recordCount, selectArticlePage]
  );

  return (
    <div className="usercenter-comment">
      {articleCommentInfo.inforList.length > 0 ? (
        articleCommentInfo.inforList.map((item: any, index: any) => (
          <GameUserReviewItem
            key={index}
            {...item}
            toreviewClick={() => getCommentArticleItemInfo(item)}
            onBtnLinkToClick={() => onBtnLinkToClick(item, true)}
            isusercenter
            isNews
          />
        ))
      ) : (
        <NotData title={t('public_not_data')} />
      )}
      {articleCommentItem && (
        <GameCommentPopup
          {...articleCommentItem}
          onBtnCloseClick={onChangeCloseArticleItemClick}
          onBtnOKClick={onChangeArticleCommentClick}
          isNews
        />
      )}
      {articleCommentInfo.inforList.length > 10 && pageDom}
    </div>
  );
};
