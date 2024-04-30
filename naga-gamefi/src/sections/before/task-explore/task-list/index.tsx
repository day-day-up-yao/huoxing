import React, { useMemo, useContext } from 'react';

import './index.scss';

import SvgIcon from 'src/components/svg-icon';
import TaskConlist from 'src/components/before/all-task-list';
import { rewardlist, rewarvriefy, rewardfinish } from 'src/utils/public/datas';
import TitleHeader from 'src/components/before/title-header';
import TasklistScreen from '../list-screen';
import { Context } from '../context';

export default () => {
  const {
    questlistinfo,
    // toptype,
    // getQuesetType,
    getReweadType,
    isloading,
    // userInfo,
    searchClick,
    createClick,
    t,
    getCurrent,
  } = useContext(Context);
  // console.log(isloading)
  //   const selectlist = useMemo(
  //     () => [
  //       {
  //         name: t('quest_list_ing'),
  //         type: 1,
  //       },
  //       {
  //         name: t('quest_list_start'),
  //         type: 2,
  //       },
  //       {
  //         name: t('quest_list_finish'),
  //         type: 3,
  //       },
  //     ],
  //     [t]
  //   );

  // 顶部标题
  const headerDom = useMemo(
    () => <TitleHeader className="task-explore-list-title" text={t('quest_title')} />,
    [t]
  );
 
  // 选择显示类型 ———— 暂时取消筛选分类，只显示全部
  const topselect = useMemo(
    () => (
      <div className="task-explore-list-topselect">
        {/* {selectlist.map((item, index) => (
          <div
            className={`task-explore-list-topselect-item ${
              toptype === item.type && 'selct-item-active'
            }`}
            key={index}
            onClick={() => {
              getQuesetType(item.type);
            }}
          >
            {item.name}
            {toptype === item.type && (
              <div className="task-explore-list-topselect-item-bottomline" />
            )}
          </div>
        ))} */}
        <div className="task-explore-list-topselect-item selct-item-active">{t('quest')}</div>
      </div>
    ),
    [t]
  );

  // 下拉筛选 搜索
  const taskscreenlist = useMemo(
    () => (
      <div className="task-explore-list-screenlist">
        <div className="task-explore-list-screenlist-left">
          <TasklistScreen
            mtitle={t('quest_rewards_type')}
            isreward
            itemlist={rewardlist}
            selectClick={(type: any) => {
              getReweadType(type, 'reward');
            }}
          />
          <TasklistScreen
            // mtitle={toptype === 1 ? t('quest_rewards_type_not_finish') : t('search_tab_all')}
            mtitle={t('search_tab_all')}
            itemlist={rewardfinish}
            selectClick={(type: any) => {
              getReweadType(type, 'finish');
            }}
          />
          <TasklistScreen
            mtitle={t('search_tab_all')}
            itemlist={rewarvriefy}
            selectClick={(type: any) => {
              getReweadType(type, 'verify');
            }}
          />
          <div className="task-explore-list-screenlist-left-search">
            <SvgIcon className="header-search-icon" name="search" notmouse />
            <input
              type="text"
              placeholder="Search"
              onKeyUpCapture={(e: any) => {
                const code = e.keyCode || e.charCode;
                if (code === 13) {
                  searchClick(e.target.value);
                }
              }}
            />
          </div>
        </div>
        {/* 暂时关闭认证创建 */}
        {/* {userInfo && userInfo.nagaAuth ? ( */}
        <div className="task-explore-list-screenlist-right" onClick={createClick}>
          {t('quest_list_create_btn')}
        </div>
        {/* ) : undefined} */}
      </div>
    ),
    [createClick, getReweadType, searchClick, t]
  );

  return (
    <div className="task-explore-list">
      {headerDom}
      {/* {topselect} */}
      {taskscreenlist}
      <TaskConlist loading={isloading} listinfo={questlistinfo} getPages={getCurrent} />
    </div>
  );
};
