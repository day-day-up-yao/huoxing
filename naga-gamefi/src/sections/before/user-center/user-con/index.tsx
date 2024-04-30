import React, { useMemo, useState, useContext } from 'react';

import './index.scss';

import { Stack } from '@mui/system';
import AllTasklist from 'src/components/before/all-task-list';
import { rewardlist, personReward } from 'src/utils/public/datas';
import Comment from '../right-con/comment';
import CommentArticle from '../right-con/comment-article';
import TypeSelect from './type-select';
import { Context } from '../context';
import UserBodgesDom from '../bodges-dom';
import MyManagemen from '../managemen';
import Setttings from '../right-con';

export default () => {
  const {
    t,
    i18n,
    isPc,
    handleJoinPage,
    lefttabstype,
    personjoininfo,
    personsetinfo,
    questloading,
    getRewardType,
    toDeleteTask,
  } = useContext(Context);
  // const topselectlist = useMemo(
  //   () => [
  //     {
  //       title: t('quest_user_jion'),
  //       type: 0,
  //     },
  //     {
  //       title: t('quest_user_created'),
  //       type: 1,
  //     },
  //     {
  //       title: t('quest_user_badges'),
  //       type: 3,
  //     },
  //     {
  //       title: t('user_comment'),
  //       type: 2,
  //     },
  //   ],
  //   [t]
  // );
  // const [lefttabstype, setlefttabstype] = useState(0);
  const [itemselect, setItemselect] = useState(-1);
  // const laskselect = useMemo(
  //   () => (
  //     <div className="usecenter-lask-select">
  //       <Stack
  //         direction="row"
  //         justifyContent="flex-start"
  //         alignItems="center"
  //         width={i18n.language === 'en-us' ? '540px' : '100%'}
  //       >
  //         {topselectlist.map((item, index) => (
  //           <div
  //             className={`usecenter-lask-select-item ${
  //               lefttabstype === item.type && 'lask-item-active'
  //             }`}
  //             key={index}
  //             onClick={() => {
  //               setSelecttype(item.type);
  //               setItemselect(-1);
  //               if (item.type === 0) {
  //                 getRewardType(-1);
  //               }
  //             }}
  //           >
  //             <span>{item.title}</span>
  //             {selecttype === item.type && <div className="usecenter-lask-select-item-bottom" />}
  //           </div>
  //         ))}
  //       </Stack>
  //     </div>
  //   ),
  //   [getRewardType, i18n.language, selecttype, topselectlist]
  // );

  const typeinfolist = useMemo(
    () => [
      {
        name: 'rate_tab_game',
        type: -1,
      },
      {
        name: 'rate_tab_news',
        type: 1,
      },
    ],
    []
  );

  const typeselectDom = useMemo(
    () => (
      <TypeSelect
        typelist={lefttabstype === 3 ? typeinfolist : personReward}
        itemselect={itemselect}
        onSelectFn={(num: any) => {
          setItemselect(num);
          getRewardType(num);
        }}
      />
    ),
    [getRewardType, itemselect, lefttabstype, typeinfolist]
  );

  return (
    <div className="usercenter-con">
      {/* {laskselect} */}
      {(lefttabstype === 0 || lefttabstype === 3) && typeselectDom}
      {lefttabstype === 0 && (
        <div>
          <AllTasklist
            isUser
            listinfo={personjoininfo}
            loading={questloading}
            deleteClick={toDeleteTask}
            getPages={handleJoinPage}
          />
        </div>
      )}
      {lefttabstype === 1 &&
        (isPc ? (
          <MyManagemen />
        ) : (
          <AllTasklist
            isUser
            listinfo={personsetinfo}
            loading={questloading}
            deleteClick={toDeleteTask}
          />
        ))}
      {lefttabstype === 3 && (itemselect === -1 ? <Comment /> : <CommentArticle />)}
      {lefttabstype === 2 && <UserBodgesDom />}
      {lefttabstype === 4 && <Setttings />}
    </div>
  );
};
