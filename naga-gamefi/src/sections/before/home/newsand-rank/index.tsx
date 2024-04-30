import React, { useMemo, useContext } from 'react';

import './index.scss';

import dayjs from 'dayjs';
import BoxPage from 'src/components/before/box-page';
import TitleHeader from 'src/components/before/title-header';
import GamesItems from 'src/components/before/games-item';
import { paths } from 'src/routes/paths';

import { formatPublishTime } from 'src/utils/public';
import Ranklist from '../../game-list/all-game';
import { Context } from '../context';

export default () => {
  const { rankLists, newsList, t } = useContext(Context);

  // news列表
  const homeNews = useMemo(
    () => (
      <div className="homenews">
        {newsList.map((item: any, index: number) => (
          <div className="homenews-item" key={index}>
            <TitleHeader text={item.title} fontsize={26} islink={item.link} />
            <div className="homenews-list">
              {item.list.slice(0, 2).map((itm: any, idx: number) => {
                let links = `${paths.article}/${itm.id}`;
                if (item.type === 'guide') {
                  links = `${paths.strategy}/${itm.id}`;
                }
                // 暂时从首页取消，GamesItems改版，如果需要，重新写newsbox样式
                // return (
                //   <GamesItems
                //     key={idx}
                //     picurl={itm.coverPicUrl}
                //     title={itm.title}
                //     desc={itm.summary}
                //     link={links}
                //     // time={formatPublishTime(t, itm.publishTime)}
                //     time={dayjs(itm.publishTime).format(t('event_calendar_time'))}
                //     newsbox
                //   />
                // );
                return undefined;
              })}
            </div>
          </div>
        ))}
      </div>
    ),
    [newsList]
  );

  // 排行榜
  const rankPage = useMemo(
    () => (
      <BoxPage
        children={
          <div className="home-rank">
            <TitleHeader text={t('public_ranking')} fontsize={26} islink={paths.gameList} />
            <Ranklist gamelists={rankLists} isHome current={1} times="24h" />
          </div>
        }
      />
    ),
    [rankLists, t]
  );

  return (
    <BoxPage
      children={
        <>
          {homeNews}
          {/* {rankPage} */}
        </>
      }
    />
  );
};
