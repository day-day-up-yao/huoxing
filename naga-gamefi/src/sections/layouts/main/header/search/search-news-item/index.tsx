import React, { useMemo } from 'react';

import './index.scss';

import { useTranslation } from 'react-i18next';
import { formatPublishTime } from 'src/utils/public/index';
import { Link } from 'src/components/link';
import { paths } from 'src/routes/paths';

const LayoutHeaderSearchNewsItem = (props: any) => {
  const { id, publishTime, title, coverPicUrl, category } = props;
  const { t } = useTranslation();

  // 头像
  const imgDom = useMemo(
    () => (
      <div className="layout-header-search-news-item-img-box">
        {coverPicUrl ? (
          <img className="layout-header-search-news-item-img" src={coverPicUrl} alt="search" />
        ) : undefined}
      </div>
    ),
    [coverPicUrl]
  );

  // 标题
  const titleDom = useMemo(
    () => <div className="layout-header-search-news-item-title">{title}</div>,
    [title]
  );

  // 时间
  const timeDom = useMemo(
    () => (
      <div className="layout-header-search-news-item-time">{formatPublishTime(t, publishTime)}</div>
    ),
    [publishTime, t]
  );

  return (
    <Link
      className="layout-header-search-news-item"
      href={category === 1 ? `${paths.article}/${id}` : `${paths.strategy}/${id}`}
    >
      {imgDom}
      <div className="layout-header-search-news-item-content">
        {titleDom}
        {timeDom}
      </div>
    </Link>
  );
};

export default LayoutHeaderSearchNewsItem;
