import React, { useContext } from 'react';

import BoxPage from 'src/components/before/box-page';
import TitleHeader from 'src/components/before/title-header';
import { paths } from 'src/routes/paths';
import { Context } from '../context';
import LaunchPadList from './home-launchpad-list';

export default ({ num = 3 }: { num?: number }) => {
  const { homeinfo, linkTo } = useContext(Context);
  return (
    <BoxPage
      children={
        <div className="home-launchpad">
          <TitleHeader text="LaunchPad Calendar" fontsize={26} islink="/launchpad" />
          <LaunchPadList />
          {/* <AlltaskList listinfo={taskinfo} shownum={24 / num} /> */}
          {/* <Ranklist gamelists={rankLists} isHome current={1} times="24h" /> */}
        </div>
      }
    />
  );
};
