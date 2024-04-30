import React, { useContext, useMemo, useRef } from 'react';

import './index.scss';

import GameLiveItem from 'src/components/before/game-live-item';
import { useReactPlayer } from 'src/utils/hooks/use-react-player';
import TitleHeader from 'src/components/before/title-header';
import NotData from 'src/components/before/not-data';
import { Context } from '../context';

const GameDetailLive = () => {
  const { t, detail } = useContext(Context);
  const { player } = useReactPlayer();
  const refLiveBox = useRef(null);

  // 当前直播
  const nowLiveBox = useMemo(() => {
    const nowLive = detail?.gameLivePojo;
    const liveUrl = nowLive?.liveUrl;

    return (
      <div className="game-detail-live-video-box" ref={refLiveBox}>
        {player(liveUrl)}
      </div>
    );
  }, [detail?.gameLivePojo, player]);

  // 直播列表标题
  const listTitle = useMemo(
    () => <TitleHeader className="game-detail-live-list-title" text={t('live_list_title')} />,
    [t]
  );

  // 游戏空页面
  const notDataDom = useMemo(
    () => <NotData className="game-detail-review-not-data-box" title={t('public_not_data2')} />,
    [t]
  );

  // 直播列表
  const liveList = useMemo(() => {
    const list = detail?.gameLivePlaybackPojoList;
    return list && list.length > 0 ? (
      <div className="game-detail-live-list">
        {list.map((item: any, index: any) => (
          <GameLiveItem
            name={item.title}
            cover={item.coverUrl}
            key={index}
            onBtnClick={() => {
              window.open(item.url);
            }}
          />
        ))}
      </div>
    ) : (
      notDataDom
    );
  }, [detail?.gameLivePlaybackPojoList, notDataDom]);

  return (
    <div className="game-detail-live-dom">
      {nowLiveBox}
      {listTitle}
      {liveList}
    </div>
  );
};

export default GameDetailLive;
