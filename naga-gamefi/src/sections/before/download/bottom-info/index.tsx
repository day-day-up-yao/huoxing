import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

export default () => {
  const { t } = useTranslation();
  const binfolist = [
    {
      type: 1,
      title: t('download_bottom_title1'),
      desc: t('download_bottom_desc1'),
      imgs: '/images/bigimg/download_b1.png',
    },
    {
      type: 2,
      title: t('download_bottom_title2'),
      desc: t('download_bottom_desc2'),
      imgs: '/images/bigimg/download_b2.png',
    },
    {
      type: 3,
      title: t('download_bottom_title3'),
      desc: t('download_bottom_desc3'),
      imgs: '/images/bigimg/download_b3.png',
    },
  ];
  return (
    <div className="download-bottominfo">
      {binfolist.map((item, index) => (
        <div
          className={`download-bottominfo-item ${
            item.type === 2 && 'download-bottominfo-itemexchange'
          }`}
          key={index}
        >
          <div className="download-bottominfo-item-left">
            <h3>{item.title}</h3>
            <div className="download-bottominfo-item-left-desc">{item.desc}</div>
          </div>
          <div className="download-bottominfo-item-right">
            <img src={item.imgs} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
