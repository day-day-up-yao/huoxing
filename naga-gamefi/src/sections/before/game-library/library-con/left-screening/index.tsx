import React, { useContext, useMemo, useCallback, useState, useEffect } from 'react';
// import { debounce } from 'lodash'
import { useTranslation } from 'react-i18next';
// import { Input, InputGroup } from 'rsuite'
// import SearchIcon from '@rsuite/icons/Search'

import './index.scss';

import SvgIcon from 'src/components/svg-icon';
import SelectHeader from './select-header';
// import searchicon from '../../../../public/imgs/icon/search.png'
import Line from './line';
import MoreItem from './more-item';
import { Context } from '../../context';

export default (props: any) => {
  const { t } = useTranslation();
  const { leftPagelist, getIteminfo, getcloseFn, clearFunction } = props;
  const { getAdvise, getFree, free, advise, librarydata, getgamesNum, getscreenNum } =
    useContext(Context);
  // const [inputValue, setInputValue] = useState('')
  const getfreeFn = useCallback(() => {
    getFree(!free);
  }, [free, getFree]);
  const getadvise = useCallback(() => {
    getAdvise(!advise);
  }, [advise, getAdvise]);

  // const load = debounce(async (e) => {
  //     await getSearch(e)
  // }, 1000)
  // 获取搜索游戏名称
  // const searchgameName = (value) => {
  //     // event.persist()
  //     load(value)
  // }
  // 清除所有筛选
  const clearallFn = useCallback(() => {
    clearFunction();
  }, [clearFunction]);
  // 筛选
  const FirstScreen = useMemo(() => {
    let num = 0;
    if (free && advise) num = 2;
    if ((free && !advise) || (!free && advise)) num = 1;
    return (
      <div className="screening-item">
        <div className="screening-item-top">
          <span>
            {t('gamelibrary_screen')}
            {num !== 0 && `（${num}）`}
          </span>
          <div className="screening-item-top-right">
            <p onClick={clearallFn}>{t('gamelibrary_clear_all')}</p>
            <img
              src="/images/icon/closeicon.webp"
              alt=""
              onClick={() => {
                getcloseFn();
              }}
            />
          </div>
        </div>
        {/* 先隐藏 */}
        {/* <InputGroup inside className="screening-input">
                    <InputGroup.Button>
                        <SvgIcon name="search" notmouse />
                    </InputGroup.Button>
                    <Input
                        onChange={(value) => {
                            searchgameName(value)
                        }}
                        id="screeningserch"
                        placeholder="Keywords"
                    />
                </InputGroup> */}
        <div className="screening-flaglist">
          <div className="flaglist-items">
            <div className="flaglist-items-left">
              <SvgIcon name="frame" notmouse />
              <span>FREE-TO-PLAY</span>
            </div>
            <div
              className={`flaglist-items-right ${free && 'selected-flag'}`}
              onClick={() => {
                getfreeFn();
              }}
            >
              <div className="items-right-flag" />
            </div>
          </div>
          <div className="flaglist-items">
            <div className="flaglist-items-left">
              <SvgIcon name="hotfree" notmouse />
              <span>{t('home_hotgame')}</span>
            </div>
            <div
              className={`flaglist-items-right ${advise && 'selected-flag'}`}
              onClick={() => {
                getadvise();
              }}
            >
              <div className="items-right-flag" />
            </div>
          </div>
        </div>
      </div>
    );
  }, [advise, clearallFn, free, getadvise, getcloseFn, getfreeFn, t]);

  // 记录折叠状态
  const [foldList, setFoldList] = useState<boolean[]>([]);
  useEffect(() => {
    const list: boolean[] = [];
    leftPagelist.map((item: any) => {
      if (item.fold === true) {
        list.push(true);
      }
    });

    setFoldList(list);
  }, [leftPagelist]);

  // 点击折叠按钮 0.链 1.类型
  const onBtnFoldClick = useCallback(
    (index: number) => {
      if (typeof index !== 'number') return;

      const list: boolean[] = [];
      foldList.map((item, foldIndex) => {
        let value = item;
        if (foldIndex === index) {
          value = !item;
        }

        list.push(value);
      });

      setFoldList(list);
    },
    [foldList]
  );

  // 通过platfrom选择
  return (
    <div className="screening">
      {FirstScreen}
      {leftPagelist.map((item: any, index: number) => (
        <div key={index}>
          <Line />
          <div className="screening-item">
            <SelectHeader
              name={item.title}
              num={getscreenNum(item.itemlist)}
              isclear={item.clear}
              foldIndex={item.foldIndex}
              foldList={foldList}
              onFold={() => onBtnFoldClick(item.foldIndex)}
            />
            <div className="screening-select-list">
              {item.itemlist.map((itm: any, indx: number) => {
                if (item.fold && foldList[item.foldIndex] === true) {
                  if (indx > 5) return undefined;
                }

                let gamenum = 0;
                let { name } = itm;
                // 链
                if (item.type === 0) {
                  gamenum = itm.num;
                  name = itm.showName;
                }
                if (item.type === 1) {
                  gamenum = getgamesNum(librarydata.developStatusPojoList, itm.title);
                }
                // 评分
                if (item.type === 2) {
                  if (itm.max === 10) gamenum = librarydata.to10Num;
                  if (itm.max === 7) gamenum = librarydata.to7Num;
                  if (itm.max === 4) gamenum = librarydata.to4Num;
                  if (itm.max === 0) gamenum = librarydata.zeroNum;
                }
                if (item.type === 3) {
                  gamenum = getgamesNum(librarydata.platformPojoList, itm.name);
                  name = itm.title;
                }

                if (item.type === 4) {
                  name = itm.showName;
                  gamenum = getgamesNum(librarydata.categoryPojoList, itm.name);
                }
                return (
                  <MoreItem
                    key={indx}
                    isdark={item.type === 3}
                    // index={index}
                    flag={itm?.flag}
                    icon={itm?.icon}
                    title={itm?.name}
                    num={gamenum}
                    name={name}
                    single={item.type === 5}
                    getSelectfn={() => {
                      getIteminfo(indx, item.type, itm);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ))}
      <div className="left-bottom" onClick={clearallFn}>
        {t('gamelibrary_clear_all')}
      </div>
    </div>
  );
};
