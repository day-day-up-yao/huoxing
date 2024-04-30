import React, { useMemo, useContext } from 'react';

import './index.scss';

import { useTranslation } from 'react-i18next';
import { formatPublishTime } from 'src/utils/public/index';
import SvgIcon from 'src/components/svg-icon';
import { Context } from '../../context';

const NewsFlashItem = (props: {
  title: any;
  publishTime: any;
  content: any;
  picUrl1: any;
  picUrl2: any;
  picUrl3: any;
  id: any;
}) => {
  const { title, publishTime, content, picUrl1, picUrl2, picUrl3, id } = props;
  const { onBtnArtivleFlashClick } = useContext(Context);
  const { t } = useTranslation();

  // 快讯时间
  const flashTime = useMemo(
    () => <div className="news-flash-item-time">{formatPublishTime(t, publishTime)}</div>,
    [publishTime, t]
  );

  // 快讯标题
  const flashTitle = useMemo(() => <div className="news-flash-item-title">{title}</div>, [title]);

  // 快讯简介
  const flashText = useMemo(() => <div className="news-flash-item-text">{content}</div>, [content]);

  // 快讯图片
  const flashImgBox = useMemo(() => {
    const list = [picUrl1, picUrl2, picUrl3];

    return picUrl1 || picUrl2 || picUrl3 ? (
      <div className="news-flash-item-img-box">
        {list.map(
          (item, index) =>
            item &&
            item !== '' && <img className="news-flash-item-img" src={item} key={index} alt="" />
        )}
      </div>
    ) : undefined;
  }, [picUrl1, picUrl2, picUrl3]);

  return (
    <div className="news-flash-item" onClick={() => onBtnArtivleFlashClick(id)}>
      <div className="news-flash-item-line-box">
        <SvgIcon className="news-flash-item-line-icon" name="timeicon-black" />
        <div className="news-flash-item-line" />
      </div>
      <div className="news-flash-item-content">
        {flashTime}
        {flashTitle}
        {flashText}
        {flashImgBox}
      </div>
    </div>
  );
};

export default NewsFlashItem;
