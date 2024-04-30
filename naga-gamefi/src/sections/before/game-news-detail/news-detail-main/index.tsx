import React, { useContext, useMemo } from 'react';
import anchorme from 'anchorme';

import './index.scss';

import { Context } from '../context';
import GameEvaluationBox from '../components/valuation-box';
import NewsDetilReviewDom from '../news-review-dom';

const GameNewsDetailMain = () => {
  const {
    isArticlPage,
    isStrategyPage,
    isArticlFlashPage,
    isEvaluationPage,
    nowNewsDetail,
    detail,
  } = useContext(Context);

  // 文章/攻略/评测 内容
  const newsContent = useMemo(
    () =>
      isArticlPage || isStrategyPage || isEvaluationPage ? (
        <div
          className="game-news-detail-main-desc"
          dangerouslySetInnerHTML={{
            __html: anchorme({
              input: nowNewsDetail?.content,
              options: {
                exclude: (string) => string.startsWith('5.House'),
                attributes: {
                  target: '_blank',
                },
              },
            })?.replace(/(\r\n {4})/g, ''),
          }}
        />
      ) : isArticlFlashPage ? (
        <div className="game-news-detail-flash-desc">{nowNewsDetail?.content}</div>
      ) : undefined,
    [isArticlPage, isStrategyPage, isArticlFlashPage, isEvaluationPage, nowNewsDetail?.content]
  );

  // 快讯 图片
  const flashImgBox = useMemo(() => {
    if (!isArticlFlashPage) return undefined;

    const imgList = [nowNewsDetail?.picUrl1, nowNewsDetail?.picUrl2, nowNewsDetail?.picUrl3];

    return (
      <div className="game-news-detail-flash-img-box">
        {imgList?.map((item, index) =>
          item && item !== '' ? (
            <img className="game-news-detail-flash-img" src={item} key={index} alt="" />
          ) : undefined
        )}
      </div>
    );
  }, [isArticlFlashPage, nowNewsDetail?.picUrl1, nowNewsDetail?.picUrl2, nowNewsDetail?.picUrl3]);

  // 测评 卡片
  const evaluationBox = useMemo(() => {
    if (!isEvaluationPage) return undefined;

    return <GameEvaluationBox {...nowNewsDetail} name={detail?.name} />;
  }, [isEvaluationPage, nowNewsDetail, detail?.name]);

  // 用户评论
  const newsReview = useMemo(
    () => (isArticlPage || isStrategyPage ? <NewsDetilReviewDom /> : undefined),
    [isArticlPage, isStrategyPage]
  );

  return (
    <div className="game-news-detail-main">
      {newsContent}
      {flashImgBox}
      {evaluationBox}
      {newsReview}
    </div>
  );
};

export default GameNewsDetailMain;
