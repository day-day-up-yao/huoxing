import React from 'react';
import classnames from 'classnames';

import SvgIcon from 'src/components/svg-icon';

import './index.scss';

export default (props: any) => {
  const { size, isname, vertical, linkitem, iconStyle } = props;
  const sharelist = [
    { icon: 'twitter', flag: true, link: linkitem?.tw, name: 'Twitter' },
    { icon: 'medium', flag: true, link: linkitem?.me, name: 'Medium' },
    { icon: 'telegram', flag: true, link: linkitem?.te, name: 'Telegram' },
    { icon: 'discord', flag: true, link: linkitem?.di, name: 'Discord' },
  ];

  const classes = classnames('share', { vertical });

  return (
    <div className={classes}>
      {sharelist
        .filter((itm) => itm.link)
        .map((item, index) =>
          item.link ? (
            <a
              href={item.link !== '/' ? item.link : '#'}
              key={index}
              className={size}
              target="_blank"
              rel="noreferrer"
            >
              {/* <img src={item.icon} alt=""/> */}
              <SvgIcon name={item.icon} style={iconStyle} />
              {isname && <p>{item.name}</p>}
            </a>
          ) : null
        )}
    </div>
  );
};
