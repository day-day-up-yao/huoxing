import React, { useContext } from 'react';

import BoxPage from 'src/components/before/box-page';
import TitleHeader from 'src/components/before/title-header';
import AlltaskList from 'src/components/before/all-task-list';
import { paths } from 'src/routes/paths';
import { Context } from '../context';
import './index.scss';

export default ({ num = 3 }: { num?: number }) => {
  const { t, homeinfo } = useContext(Context);
  const taskinfo = {
    inforList: homeinfo.questList
      ? homeinfo.questList.length > num
        ? homeinfo.questList.slice(0, num)
        : homeinfo.questList
      : [],
    recordCount: homeinfo.questList ? homeinfo.questList.length : 0,
  };
  return (
    <div>
      {taskinfo?.inforList?.length > 0 && (
        <BoxPage
          children={
            <div className="home-rank">
              <TitleHeader
                text={t('home_partnership_campaign')}
                fontsize={26}
                islink={paths.taskExplore}
              />
              <AlltaskList listinfo={taskinfo} shownum={24 / num} />
              {/* <Ranklist gamelists={rankLists} isHome current={1} times="24h" /> */}
            </div>
          }
        />
      )}
    </div>
  );
};
