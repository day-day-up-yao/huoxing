import React from 'react';

import SvgIcon from 'src/components/svg-icon';

export default (props: any) => {
  const { flag, icon, name, num, getSelectfn, single, isdark, title } = props;
  return (
    <div
      className={`select-list-item ${flag && 'selected-item'}`}
      onClick={() => {
        getSelectfn();
      }}
    >
      <div className="select-list-con">
        <div className="select-list-item-left">
          <div className="slect-list-check">
            {flag ? (
              <>
                {single ? (
                  <div className="single-check" />
                ) : (
                  <img src="/images/icon/selected.png" alt="" />
                )}
              </>
            ) : (
              <div className={`slect-list-check-no ${single && 'single-check-no'}`} />
            )}
          </div>
          <div className="slect-list-left-desc">
            {icon &&
              (isdark ? (
                <SvgIcon className="item-svg-style" name={title} notmouse isWhite={flag} />
              ) : (
                <img src={icon} alt="" />
              ))}
            {/* {icon && <img src={icon} className={isdark ? 'dark-img' : ''} alt=""/>} */}
            <span>{name}</span>
          </div>
        </div>
        {(num || Number(num) === 0) && <div className="select-list-item-right">{num}</div>}
      </div>
    </div>
  );
};
