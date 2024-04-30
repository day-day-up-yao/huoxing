import React, { useState, useCallback, useContext, useEffect, useMemo, useRef } from 'react';

import './index.scss';

import { cloneDeep } from 'lodash';
import PopupPage from 'src/components/popup-page';
import { platfromlist, stauslist, datetimelist, ratinglist } from 'src/utils/public/datas';
import LeftScreening from './left-screening';
import RightGamelist from './right-gamelist';
import { Context } from '../context';

export default () => {
  const {
    getAdvise,
    getFree,
    getSearch,
    getScores,
    getCategory,
    getStatus,
    getPlatform,
    getChains,
    getTimes,
    queryParam,
    getSortfn,
    librarydata,
    free,
    advise,
    t,
  } = useContext(Context);
  const [platlist, setPlatlist] = useState(platfromlist);
  const [ratelists, setRatelists] = useState(ratinglist);
  const [chainlists, setChainlists] = useState(librarydata.chainPojoList);
  const [stauslists, setStauslists] = useState(stauslist);
  const [genreslists, setGenreslists] = useState(librarydata.categoryPojoList);
  const [datelist, setDatelist] = useState(datetimelist);
  const [allselected, setAllselected] = useState<any>([]);
  const [popupflag, setPopupflag] = useState(false);
  const [allsrceeNum, setAllsrceeNum] = useState(0);

  useMemo(() => {
    const newLibrarydata = cloneDeep(librarydata);
    newLibrarydata.chainPojoList.map((item: any, index: any) => {
      item.id = index;
      item.icon = item.iconUrl;
    });
    setChainlists(newLibrarydata.chainPojoList);
    newLibrarydata.categoryPojoList.map((item: any, index: any) => {
      item.id = index;
      item.flag = false;
    });
    setGenreslists(newLibrarydata.categoryPojoList);
  }, [librarydata]);

  // 所有选择的筛选条件总数
  useEffect(() => {
    if (free && advise) {
      setAllsrceeNum(allselected.length + 2);
    }
    if ((!free && advise) || (free && !advise)) {
      setAllsrceeNum(allselected.length + 1);
    }
    if (!free && !advise) {
      setAllsrceeNum(allselected.length);
    }
  }, [free, advise, allselected]);

  const screenitemFn = useCallback((list: any, num?: any, type?: any, isscore?: any) => {
    const data: any = [];
    list.map((itm: any, idx: any) => {
      if (idx === num || itm.name === num) {
        list[idx].flag = !itm.flag;
      }
      data.push(itm);
    });
    if (type !== 'delete') {
      return data;
    }
    if (isscore) {
      const platdata: any = {
        fourscore: '',
        sevenscore: '',
        tenscore: '',
        otherscore: '',
      };

      data.map((item: any) => {
        if (item.flag && item.max === 10) {
          platdata.tenscore = 1;
        }
        if (item.flag && item.max === 7) {
          platdata.sevenscore = 1;
        }
        if (item.flag && item.max === 4) {
          platdata.fourscore = 1;
        }
        if (item.flag && item.max === 0) {
          platdata.otherscore = 1;
        }
      });
      // console.log(platdata)
      // if (minlist.length > 0) {
      //     platdata = {
      //         min: minlist[0],
      //         max: maxlist[maxlist.length - 1]
      //     }
      // }
      // console.log(minlist, maxlist)
      return platdata;
    }
    const platdata: any = [];
    data.map((item: any) => {
      if (item.flag) {
        platdata.push(item.title ? item.title : item.name);
      }
    });
    return platdata.toString();
  }, []);

  // 路径携带参数对应筛选请求 需要再优化
  const firstUrl = useRef(0);
  useEffect(() => {
    if (typeof window !== 'undefined' && firstUrl.current === 0) {
      if (queryParam('free')) {
        getFree(!free);
        console.log('收拾收拾哦收到哈佛你哦');

        firstUrl.current = 1;
      }
      if (queryParam('staus')) {
        const stausitem = stauslist.find((item) => item.name === queryParam('staus'));
        const obj: any = {
          name: queryParam('staus'),
          type: 1,
          subs: stausitem?.id, // staus下标
        };
        setAllselected([obj]);
        setStauslists(screenitemFn(stauslists, 2));
        getStatus(queryParam('staus'));
        firstUrl.current = 1;
      }
      if (queryParam('freetoplay')) {
        getFree(true);
        firstUrl.current = 1;
      }
      if (queryParam('chain')) {
        const chainitem = chainlists.find((item: any) => item.name === queryParam('chain'));
        const obj = {
          name: queryParam('chain'),
          type: 0,
          subs: chainitem?.id, // chain下标
        };
        setAllselected([obj]);
        setChainlists(screenitemFn(chainlists, chainitem?.id));
        getChains(queryParam('chain'));
        firstUrl.current = 1;
      }
      if (queryParam('category')) {
        const genresitem = genreslists.find(
          (item: any) => item.name === queryParam('category').toUpperCase()
        );
        const obj = {
          name: queryParam('category').toUpperCase(),
          type: 4,
          subs: genresitem?.id, // category下标
        };
        setAllselected([obj]);
        setGenreslists(screenitemFn(genreslists, genresitem?.id));
        getCategory(queryParam('category').toUpperCase());
        firstUrl.current = 1;
      }
    }
  }, [
    chainlists,
    free,
    genreslists,
    getCategory,
    getChains,
    getFree,
    getStatus,
    queryParam,
    screenitemFn,
    stauslists,
  ]);

  // 左侧筛选列表
  const leftPagelist = [
    {
      type: 0,
      title: t('gamelibrary_chain'),
      clear: '',
      fold: true,
      foldIndex: 0,
      itemlist: chainlists,
    },
    {
      type: 1,
      title: t('gamelibrary_status'),
      clear: '',
      itemlist: stauslists,
    },
    // {
    //   type: 2,
    //   title: t('gamelibrary_Rating'),
    //   clear: '',
    //   itemlist: ratelists,
    // },
    {
      type: 3,
      title: t('gamelibrary_platform'),
      clear: '',
      itemlist: platlist,
    },
    {
      type: 4,
      title: t('gamelibrary_genres'),
      clear: '',
      fold: true,
      foldIndex: 1,
      itemlist: genreslists,
    },
    // {
    //     type: 5,
    //     title: 'Date Added',
    //     clear: '',
    //     itemlist: datelist
    // }
  ];
  // 筛选原数据

  // 各类筛选条件请求
  const platOnclick = useCallback(
    (index: any, type: any, item: any, isdelete?: any) => {
      //   console.log(111)
      // document.documentElement.scrollTop = document.body.scrollTop = 0
      if (type !== 5) {
        if (!isdelete) {
          const obj = {
            name: type === 3 ? item.title : item.name,
            type,
            subs: index,
          };
          // 获取已选择的条件名称
          const selectedData = [];
          selectedData.push(obj);
          let finshdata = [];
          if (item.flag) {
            finshdata = allselected.filter(
              (itm: any) => itm.name !== (type === 3 ? item.title : item.name)
            );
          } else {
            finshdata = allselected.concat(selectedData);
          }
          setAllselected(finshdata);
        } else {
          const data = allselected.filter((itm: any) => itm.name !== item.name);
          setAllselected(data);
        }
      }
      // 通过链名筛选
      if (type === 0) {
        console.log(screenitemFn(chainlists, index));
        setChainlists(screenitemFn(chainlists, index));
        getChains(screenitemFn(chainlists, index, 'delete'));
      }
      // 通过staus筛选
      if (type === 1) {
        console.log(screenitemFn(stauslists, index));
        setStauslists(screenitemFn(stauslists, index));
        getStatus(screenitemFn(stauslists, index, 'delete'));
      }
      if (type === 2) {
        console.log(screenitemFn(ratelists, index));
        setRatelists(screenitemFn(ratelists, index));
        getScores(screenitemFn(ratelists, index, 'delete', true));
      }
      // 通过Genres筛选
      if (type === 4) {
        console.log(screenitemFn(genreslists, index));
        setGenreslists(screenitemFn(genreslists, index));
        getCategory(screenitemFn(genreslists, index, 'delete'));
      }
      // Platform筛选
      if (type === 3) {
        console.log(screenitemFn(platlist, index));
        setPlatlist(screenitemFn(platlist, index));
        getPlatform(screenitemFn(platlist, index, 'delete'));
      }
      if (type === 5) {
        const data: any = [];
        datelist.map((itm, idx) => {
          if (idx === index) {
            datelist[idx].flag = true;
          } else {
            datelist[idx].flag = false;
          }
          data.push(itm);
        });
        let platdata = '';
        data.map((itemIn: any) => {
          if (itemIn.flag) {
            platdata = itemIn.time;
          }
        });
        getTimes(platdata);
        setDatelist(data);
      }
    },
    [
      allselected,
      screenitemFn,
      chainlists,
      getChains,
      stauslists,
      getStatus,
      ratelists,
      getScores,
      genreslists,
      getCategory,
      platlist,
      getPlatform,
      datelist,
      getTimes,
    ]
  );
  // 修改各筛选条件的状态
  const deleteFlagfn = useCallback((data: any) => {
    data.map((itemIn: any) => {
      itemIn.flag = false;
    });
    return data;
  }, []);
  // 清除全部
  const clearAllfunc = useCallback(() => {
    // console.log(deleteFlagfn(platfromlist))
    getFree();
    getAdvise();
    getSearch();
    getScores({
      fourscore: '',
      sevenscore: '',
      tenscore: '',
      otherscore: '',
    });
    getSortfn({
      sortby: '',
      sort: 'desc',
    });
    getCategory();
    getStatus();
    getPlatform();
    getChains();
    getTimes('');
    setPlatlist(deleteFlagfn(platfromlist));
    setRatelists(deleteFlagfn(ratinglist));
    setChainlists(deleteFlagfn(chainlists));
    setStauslists(deleteFlagfn(stauslist));
    setGenreslists(deleteFlagfn(genreslists));
    setDatelist(deleteFlagfn(datetimelist));
    setAllselected([]);
    // 清空输入框内容
    // const screeningserch = document.getElementById('screeningserch')
    // screeningserch.value = ''
  }, [
    chainlists,
    deleteFlagfn,
    genreslists,
    getAdvise,
    getCategory,
    getChains,
    getFree,
    getPlatform,
    getScores,
    getSearch,
    getSortfn,
    getStatus,
    getTimes,
  ]);
  return (
    <div className="librarycon" id="librarycon">
      <div className="librarycon-left">
        <LeftScreening
          platlist={platlist}
          leftPagelist={leftPagelist}
          getIteminfo={(index: any, type: any, item: any) => {
            platOnclick(index, type, item);
          }}
          clearFunction={clearAllfunc}
        />
      </div>
      <RightGamelist
        topList={allselected}
        getDelete={(info: any) => {
          platOnclick(info.subs, info.type, info, true);
        }}
        getPopup={() => {
          setPopupflag(true);
        }}
        allnum={allsrceeNum}
      />
      <div className="game-toatal-popup">
        {popupflag && (
          <PopupPage
            children={
              <div className="game-toatal-selected">
                <div className="toatal-selected-con">
                  <LeftScreening
                    platlist={platlist}
                    leftPagelist={leftPagelist}
                    getIteminfo={(index: any, type: any, item: any) => {
                      platOnclick(index, type, item);
                    }}
                    getcloseFn={() => {
                      setPopupflag(false);
                    }}
                    clearFunction={clearAllfunc}
                  />
                </div>
                <div className="toatal-selected-allbtn">
                  <div
                    className="allbtn-cancal"
                    onClick={() => {
                      clearAllfunc();
                      // setPopupflag(false)
                    }}
                  >
                    {t('public_cancal')}
                  </div>
                  <div
                    className="allbtn-cancal allbtn-sure"
                    onClick={() => {
                      setPopupflag(false);
                    }}
                  >
                    {t('public_sure')}
                  </div>
                </div>
              </div>
            }
            // onCloseFn={() => {
            //     setPopupflag(false)
            // }}
          />
        )}
      </div>
    </div>
  );
};
