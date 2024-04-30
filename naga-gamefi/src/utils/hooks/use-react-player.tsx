import React, { useCallback, useState, useMemo } from 'react';
import ReactPlayer from 'react-player';

const useReactPlayer = () => {
  // 视频播放成功
  const [isReady, setIsReady] = useState(false);

  // onReady事件，绑定全局变量
  const storeEvent = useCallback(() => {
    setIsReady(true);
  }, []);

  // 视窗样式
  const opts = useMemo(
    () => ({
      youtube: {
        playerVars: { showinfo: 1 },
      },
      file: {
        forceVideo: true,
      },
    }),
    []
  );

  // 播放组件
  const player: any = useCallback(
    (url: any, cover: any, issmallsize: boolean, isNotauto?: boolean) => (
      <div className={`video-box ${issmallsize && 'video-box-small'}`}>
        <ReactPlayer
          url={url}
          controls
          light={isNotauto ? <img className="video-shadow" src={cover} alt="" /> : false}
          playing
          // loop
          // poster={cover}
          volume={0}
          width="100%"
          height="100%"
          onReady={storeEvent}
          config={opts}
        />
        {isReady === false ? <img className="video-shadow" src={cover} alt="" /> : undefined}
      </div>
    ),
    [isReady, opts, storeEvent]
  );

  return {
    player,
  };
};

export { useReactPlayer };
