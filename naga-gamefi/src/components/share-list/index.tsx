import React from 'react';
import classnames from 'classnames';

import SvgIcon from '../svg-icon';

import './index.scss';

export default (props: any) => {
  const { size, isname, vertical, linkitem, iconStyle } = props;
  const sharelist = [
    { icon: 'website', flag: true, link: linkitem?.we, name: 'Website' },
    { icon: 'twitter', flag: true, link: linkitem?.tw, name: 'Twitter' },
    { icon: 'telegram', flag: true, link: linkitem?.te, name: 'Telegram' },
    { icon: 'discord', flag: true, link: linkitem?.di, name: 'Discord' },
    { icon: 'medium', flag: true, link: linkitem?.me, name: 'Medium' },
    { icon: 'submiticon', flag: true, link: linkitem?.sub, name: 'Submit' },
  ];

  const classes = classnames('share', { vertical });

  return (
    <div className={classes}>
      {sharelist
        .filter((itm) => itm.link)
        .map((item, index) => (
          <object key={index}>
            <a
              href={item.link !== '/' ? item.link : '#'}
              className={isname ? 'have-title-icon' : size}
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon name={item.icon} style={iconStyle} />
              {isname && <span>{item.name}</span>}
            </a>
          </object>
        ))}
    </div>
  );
};
