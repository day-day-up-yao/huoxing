import React, { useContext, useMemo } from 'react';

import GameUserReviewItem from 'src/components/before/game-user-review-item';
import NotData from 'src/components/before/not-data';
import Pagination from 'src/components/before/pagination';
import { Context } from '../../context';
import GameCommentPopup from '../../../game-detail/game-comment-popup';

export default () => {
  const {
    commentInfo,
    commentItem,
    onChangeCommentClick,
    onChangeCloseItemClick,
    getCommentItemInfo,
    onBtnLinkToClick,
    selectPage,
    t,
  } = useContext(Context);

  // 翻页
  const pageDom = useMemo(
    () => (
      <Pagination
        totalData={commentInfo.recordCount}
        pageSize={10}
        pageChange={(curPage: any) => selectPage(curPage)}
      />
    ),
    [commentInfo.recordCount, selectPage]
  );

  return (
    <div className="usercenter-comment">
      {commentInfo.inforList.length > 0 ? (
        commentInfo.inforList.map((item: any, index: any) => (
          <GameUserReviewItem
            key={index}
            {...item}
            isusercenter
            toreviewClick={() => getCommentItemInfo(item)}
            onBtnLinkToClick={() => onBtnLinkToClick(item)}
          />
        ))
      ) : (
        <NotData title={t('public_not_data')} />
      )}
      {commentItem && (
        <GameCommentPopup
          {...commentItem}
          onBtnCloseClick={onChangeCloseItemClick}
          onBtnOKClick={onChangeCommentClick}
        />
      )}
      {commentInfo.inforList.length > 10 && pageDom}
    </div>
  );
};
