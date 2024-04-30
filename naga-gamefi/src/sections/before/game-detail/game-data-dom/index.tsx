import React, { useMemo, useContext } from 'react';

import './index.scss';

import { stauslist } from 'src/utils/public/datas';
import GameCategoryItem from 'src/components/before/game-category-item';
import ShareList from 'src/components/before/share-list';
import TitleCurreny from 'src/components/before/title-currency';
// import SortInfo from 'src/components/before/sort-info';
import SvgIcon from 'src/components/svg-icon';
import { Context } from '../context';
import GameDetailDataBtn from '../components/data-btn';
// import GameDetailDataBox from '../components/data-box';

const GameDetailData = () => {
  const { t, detail, getSupportPlatform } = useContext(Context);

  // 游戏图片/头像
  const imageBox = useMemo(() => {
    const url =
      detail?.adverUrl ||
      detail?.coverUrl ||
      (detail?.picUrl && detail?.picUrl !== '[]' && JSON.parse(detail?.picUrl)[0]);

    return (
      <div className="game-detail-image-box">
        <div className="game-detail-image" style={{ backgroundImage: `url(${url})` }} />
        {/* <SortInfo className="game-detail-sort-box" score={`${detail?.score}`} /> */}
      </div>
    );
  }, [detail]);

  // 游戏标签
  const tagsBox = useMemo(
    () => (
      <div className="game-detail-tabs-box">
        {detail?.category &&
          detail.category
            .split(',')
            ?.map((item: any, index: any) => (
              <GameCategoryItem className="game-detail-tag-item" text={item} key={index} />
            ))}
      </div>
    ),
    [detail.category]
  );

  // 游戏平台
  const platform = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_platform')}</div>
        <div className="game-detail-data-item-content">
          {getSupportPlatform(detail?.supportPlatform).length > 0 &&
            getSupportPlatform(detail?.supportPlatform).map((title: any, idex: any) => (
              <SvgIcon className="game-detail-data-item-icon" name={title} notmouse key={idex} />
            ))}
        </div>
      </div>
    ),
    [detail?.supportPlatform, getSupportPlatform, t]
  );

  // 游戏社区
  const community = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_community')}</div>
        <ShareList
          size="small-icon game-detail-data-item-icon"
          linkitem={{
            tw: detail?.twitter,
            me: detail?.medium,
            te: detail?.telegram,
            di: detail?.discord,
          }}
        />
      </div>
    ),
    [detail?.discord, detail?.medium, detail?.telegram, detail?.twitter, t]
  );

  // 游戏网络 所属链
  const chainDom = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_network')}</div>
        <TitleCurreny size="medium" chain={detail?.chain ? detail.chain : ''} />
      </div>
    ),
    [detail.chain, t]
  );

  // 游戏开发商
  const developer = useMemo(
    () => (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_developer')}</div>
        <div className="game-detail-data-item-content">
          <div className="game-detail-data-item-text">{detail?.devOrg || '--'}</div>
        </div>
      </div>
    ),
    [detail?.devOrg, t]
  );

  // 游戏阶段
  const stage = useMemo(() => {
    const data = stauslist.find(
      (item) => item.title.toLowerCase() === detail?.developStatus?.toLowerCase()
    );

    return (
      <div className="game-detail-data-item">
        <div className="game-detail-data-item-title">{t('game_detail_stage')}</div>
        <div className="game-detail-data-item-content">
          {data?.icon && (
            <img className="game-detail-data-item-icon small" src={data?.icon} alt="" />
          )}
          <div className="game-detail-data-item-text">{data?.name || '--'}</div>
        </div>
      </div>
    );
  }, [detail?.developStatus, t]);

  // 游戏基础信息
  const baseBox = useMemo(
    () => (
      <div className="game-detail-base-box">
        {platform}
        {community}
        {chainDom}
        {developer}
        {stage}
      </div>
    ),
    [chainDom, community, developer, platform, stage]
  );

  // 游戏代币数据
  //   const dataBox = useMemo(
  //     () => (detail?.symbol ? <GameDetailDataBox /> : undefined),
  //     [detail?.symbol]
  //   );

  return (
    <div className="game-detail-data-dom">
      {imageBox}
      {tagsBox}
      {baseBox}
      <GameDetailDataBtn />
      {/* {dataBox} */}
    </div>
  );
};

export default GameDetailData;
