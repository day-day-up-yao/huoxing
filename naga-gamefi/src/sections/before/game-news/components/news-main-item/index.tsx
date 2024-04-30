import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

import { formatPublishTime } from 'src/utils/public/index';

const NewsMainItem = (props: {
  id: any;
  category: any;
  coverPicUrl: any;
  title: any;
  publishTime: any;
  summary: any;
  gameIconUrl: any;
  gameName: any;
  isNewsPage: any;
  onBtnArticleClick: any;
}) => {
  const {
    id,
    category,
    coverPicUrl,
    title,
    publishTime,
    summary,
    gameIconUrl,
    gameName,
    isNewsPage,
    onBtnArticleClick,
  } = props;
  const { t } = useTranslation();

  // 文章图片
  const newsImage = useMemo(
    () => (
      <div className="news-main-img-box">
        <img className="news-main-img" src={coverPicUrl} alt="" />
      </div>
    ),
    [coverPicUrl]
  );

  // 文章时间
  const newsTime = useMemo(() => {
    let articletype = '';
    if (category === 1) {
      articletype = 'News';
    }
    if (category === 2) {
      articletype = 'Guide';
    }
    return (
      <div className="news-main-time">
        {formatPublishTime(t, publishTime)}
        {!isNewsPage && ` · ${articletype}`}
      </div>
    );
  }, [category, t, publishTime, isNewsPage]);

  // 文章标题
  const newsTitle = useMemo(() => <div className="news-main-title">{title}</div>, [title]);

  // 文章简介
  const newsText = useMemo(() => <div className="news-main-text">{summary}</div>, [summary]);

  // 文章作者 ———— 所属游戏
  const newsAuthor = useMemo(
    () =>
      isNewsPage ? (
        <div className="news-main-author-conter">
          {gameIconUrl ? (
            <img className="news-main-author-icon" src={gameIconUrl} alt="" />
          ) : (
            <img className="news-main-author-icon" src="/images/icon/logo.jpeg" alt="" />
          )}
          {gameName ? (
            <div className="news-main-author">{gameName}</div>
          ) : (
            <div className="news-main-author">NAGA</div>
          )}
        </div>
      ) : undefined,
    [isNewsPage, gameIconUrl, gameName]
  );

  return (
    <div className="news-main-item" onClick={() => onBtnArticleClick(id, category)}>
      <div className="news-main-wrap">
        {newsImage}
        <div className="news-main-right">
          <div className="news-main-content">
            {newsAuthor}
            {newsTitle}
            {newsText}
          </div>
          <div className="news-main-author-box">
            {newsTime}
            {/* {newsAuthor} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMainItem;
