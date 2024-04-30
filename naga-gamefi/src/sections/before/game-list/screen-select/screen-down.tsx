import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcon from 'src/components/svg-icon';

export default (props: any) => {
  const { t } = useTranslation();
  const { title, list, type, getName, name } = props;
  const [chainflag, setChainflag] = useState(false);
  const [downlist, setDownlist] = useState(list);
  // const [isitem, setIsitem] = useState(false)
  // const [typeflag, setTypeflag] = useState(type)
  const clickShow = useCallback(() => {
    setChainflag(!chainflag);
  }, [chainflag]);

  useEffect(() => {
    if (chainflag) {
      document.addEventListener('click', clickShow, false);
      return () => {
        document.removeEventListener('click', clickShow, false);
      };
    }
  }, [chainflag, clickShow]);
  // 输入搜索
  const getChange = useCallback(
    (e: any) => {
      const { value } = e.target;
      const newlist: any = [];
      list.map((item: any) => {
        if (item.showName.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          newlist.push(item);
        }
      });
      if (value.toLowerCase() === 'all') {
        setDownlist([]);
      }
      setDownlist(newlist);
    },
    [list]
  );
  return (
    <div
      className={`screen-down ${type === 0 && 'genre-item'}`}
      onMouseLeave={() => {
        clickShow();
      }}
      // tabIndex="-1"
      // onBlur={() => {
      //     setChainflag(false)
      // }}
      // onFocus={() => {
      //     setChainflag(true)
      // }}
    >
      <div
        className="screen-down-con"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          clickShow();
          setDownlist(list);
        }}
      >
        <span>{name}</span>
        <SvgIcon name="pointdown" />
        {/* <img src={`/images/icon/${chainflag ? 'pointdowns' : 'downla'}.png`} alt="" /> */}
      </div>
      {chainflag && (
        <div
          className="down-popup-wrapper"
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            e.stopPropagation();
          }}
        >
          <div className="down-popup">
            <div className="chain-select">
              <div className="go-search">
                <input
                  // type="text"
                  placeholder="search"
                  // onClick={(e) => {
                  //     // e.preventDefault()
                  //     console.log(22)
                  // }}
                  onChange={(e) => {
                    getChange(e);
                  }}
                />
              </div>
              <div className="all-chain">
                {type !== 2 && (
                  <div
                    className={`select-chain-item ${
                      (title === 'Genre' || title === 'Chain') && 'item-active'
                    }`}
                    onClick={() => {
                      getName(type, '');
                      setChainflag(false);
                    }}
                  >
                    <div className="select-img">
                      {(title === 'Genre' || title === 'Chain') && (
                        <img src="/images/icon/selecting.png" alt="" />
                      )}
                    </div>
                    <p>All</p>
                    <div className="select-checkbox">
                      {title === 'Genre' || title === 'Chain' ? (
                        <img src="/images/icon/selected.png" alt="chain" />
                      ) : (
                        <div className="select-checkbox-no" />
                      )}
                    </div>
                  </div>
                )}
                {downlist.map((item: any, index: number) => {
                  let itemname = item.showName;
                  let itemtitle = item.name;
                  if (type === 1) {
                    itemname = item.showName;
                    itemtitle = item.name;
                  }
                  if (type === 2) {
                    itemname = item.name;
                    itemtitle = item.time;
                  }
                  return (
                    <div
                      className={`select-chain-item ${itemtitle === title && 'item-active'}`}
                      key={index}
                      onClick={() => {
                        getName(type, itemtitle, itemname);
                        setChainflag(false);
                      }}
                    >
                      <div className="select-img">
                        {itemtitle === title && <img src="/images/icon/selecting.png" alt="" />}
                      </div>
                      <p>{itemname}</p>
                      <div className="select-checkbox">
                        {itemtitle === title ? (
                          <img src="/images/icon/selecting.png" alt="" />
                        ) : (
                          <div className="select-checkbox-no" />
                        )}
                      </div>
                    </div>
                  );
                })}
                <div
                  className="all-chain-cancal"
                  onClick={() => {
                    setChainflag(false);
                  }}
                >
                  {t('public_cancal')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
