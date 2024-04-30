import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import './index.scss';
import { Link, useLink } from 'src/components/link';

// import pointright from '../../public/imgs/icon/pointright.png'
// import useComingsoon from '../../public/hooks/useComingsoon'

export default (props: any) => {
  const { t } = useTranslation();
  const {
    className,
    text,
    islink,
    fontsize,
    selecttime,
    onselectFn,
    rightchildren,
    leftlink,
    leftIcon,
  } = props;
  const [timename, setTimename] = useState({
    name: '24H',
    falg: false,
  });
  const timelist = ['24H', '48H', '7day'];
  const { linkTo } = useLink();

  return (
    <div className={classNames('title-header', className)}>
      <div className={classNames('title-header-left', { isLink: leftlink || selecttime })}>
        {leftIcon ? (
          <div
            className="title-header-left-link"
            onClick={() => {
              linkTo(leftlink);
            }}
          >
            {leftIcon && (
              <div className="text-left-icon">
                <img src={`/images/icon/${leftIcon}.png`} alt="" />
              </div>
            )}
            <div className="title-text" style={{ fontSize: `${fontsize}px` }}>
              {text}
            </div>
            {/* <div className="text-link">
              <img src="/images/icon/pointright.png" alt="" />
            </div> */}
          </div>
        ) : (
          <div className="title-text" style={{ fontSize: `${fontsize}px` }}>
            {text}
          </div>
        )}

        {selecttime && (
          <div className="select-time">
            <div
              className="select-time-see"
              onClick={() => {
                setTimename({
                  name: timename.name,
                  falg: true,
                });
              }}
            >
              <span>{timename.name}</span>
              <img src="/images/icon/pointdown.png" alt="down" />
            </div>
            {timename.falg && (
              <div className="time-list">
                {timelist.map((item, index) => (
                  <div
                    className={`time-list-item ${timename.name === item && 'time-active'}`}
                    key={index}
                    onClick={() => {
                      onselectFn(item);
                      setTimename({
                        name: item,
                        falg: false,
                      });
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {rightchildren && <div className="title-header-right">{rightchildren}</div>}
      {islink && (
        <Link href={typeof islink === 'string' ? islink : ''}>
          <span>{t('public_seeall')}</span>
          {/* <img src={pointright} alt=""/> */}
        </Link>
      )}
    </div>
  );
};
