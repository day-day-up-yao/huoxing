import React, { useMemo, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

import { formatPublishTime } from 'src/utils/public';
import SvgIcon from 'src/components/svg-icon';
import { Link } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { Context } from '../context';

const GameNewsDetailHeader = () => {
  const { isEvaluationPage, nowNewsDetail } = useContext(Context);
  const { t } = useTranslation();

  // 文章标题
  const titleDom = useMemo(
    () => <div className="game-news-detail-header-title">{nowNewsDetail?.title}</div>,
    [nowNewsDetail?.title]
  );

  // 文章时间
  const timeDom = useMemo(
    () => (
      <div className="game-news-detail-header-time">
        <SvgIcon className="game-news-detail-header-time-icon" name="time" notmouse />
        {formatPublishTime(t, nowNewsDetail?.publishTime)}
      </div>
    ),
    [nowNewsDetail?.publishTime, t]
  );

  // 游戏图标
  const gameIconDom = useMemo(
    () => (
      <div className="game-news-detail-header-game-icon">
        {nowNewsDetail?.gameIconUrl ? (
          <img className="icon" src={nowNewsDetail?.gameIconUrl} alt="" />
        ) : (
          <img className="icon" src="/images/icon/logo.jpeg" alt="" />
        )}
      </div>
    ),
    [nowNewsDetail?.gameIconUrl]
  );

  // 游戏名称
  const gameNameDom = useMemo(
    () =>
      nowNewsDetail?.gameName ? (
        <div className="game-news-detail-header-game-name">{nowNewsDetail?.gameName}</div>
      ) : (
        <div className="game-news-detail-header-game-name">NAGA</div>
      ),
    [nowNewsDetail?.gameName]
  );

  // 游戏链接
  const gameHrefBox = useMemo(
    () =>
      nowNewsDetail?.gameId ? (
        <Link
          className="game-news-detail-header-game-href"
          href={`${paths.game}/${nowNewsDetail?.gameId}`}
        >
          {gameIconDom}
          {gameNameDom}
        </Link>
      ) : (
        <div className="game-news-detail-header-game-href">
          {gameIconDom}
          {gameNameDom}
        </div>
      ),
    [gameIconDom, gameNameDom, nowNewsDetail?.gameId]
  );

  return !isEvaluationPage ? (
    <div className="game-news-detail-header">
      {titleDom}
      <div className="game-news-detail-header-bottom">
        {timeDom}
        {gameHrefBox}
      </div>
    </div>
  ) : null;
};

export default GameNewsDetailHeader;
