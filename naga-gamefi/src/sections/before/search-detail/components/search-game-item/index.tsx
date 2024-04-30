import React, { useMemo } from 'react';

import './index.scss';
import ImageLazy from 'src/components/before/image-lazy';
import TitleCurreny from 'src/components/before/title-currency';
import { Link } from 'src/components/link';
import { paths } from 'src/routes/paths';
import SvgIcon from 'src/components/svg-icon';

const SearchGameItem = (props: any) => {
  const {
    id,
    adverUrl,
    coverUrl,
    picUrl,
    name,
    category,
    developStatus,
    getSupportPlatform,
    getStatusInfo,
    chain,
    supportPlatform,
  } = props;

  // 图片 ———— 搜索详情界面单独设置 最优先显示 coverUrl > adverUrl > picUrl
  const imgBox = useMemo(
    () => (
      <ImageLazy
        className="search-detail-game-item-img"
        src={coverUrl || adverUrl || (picUrl && picUrl !== '[]' && JSON.parse(picUrl)[0])}
      />
    ),
    [adverUrl, coverUrl, picUrl]
  );

  // 名字
  const nameDom = useMemo(
    () => (
      <div className="search-detail-game-item-title">
        <TitleCurreny title={name} size="only" />
      </div>
    ),
    [name]
  );

  // 类别
  const categoryDom = useMemo(() => {
    let supportname = category;
    const supportlist = category.split(',');
    let supportnum: any = '';
    if (supportlist.length > 2) {
      supportnum = supportlist.length - 3;
      supportname = supportlist.slice(0, 3).toString();
    }

    return (
      <div className="search-detail-game-item-category">
        {supportname}
        {supportnum !== '' && supportnum !== 0 && <span>+{supportnum}</span>}
      </div>
    );
  }, [category]);

  // 平台、币种 图标
  const iconBox = useMemo(
    () => (
      <div className="search-detail-game-item-icon-box">
        {getSupportPlatform(supportPlatform).length > 0 &&
          getSupportPlatform(supportPlatform).map((icon: any, idex: number) => (
            <SvgIcon name={icon} key={idex} />
          ))}
        {getSupportPlatform(supportPlatform).length > 0 &&
          chain &&
          chain.toLocaleLowerCase() !== 'arbitrum' && <span>·</span>}
        <TitleCurreny chain={chain} size="small" />
      </div>
    ),
    [getSupportPlatform, supportPlatform, chain]
  );

  // 按钮
  const btnDom = useMemo(
    () => (
      <div className="search-detail-game-item-btn">
        <img
          className="search-detail-game-item-btn-icon"
          src={getStatusInfo(developStatus)?.icon}
          alt=""
        />
        {getStatusInfo(developStatus)?.name}
      </div>
    ),
    [developStatus, getStatusInfo]
  );

  return (
    <Link
      className="search-detail-game-item"
      href={`${paths.game}/${id}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="search-detail-game-item-wrap">
        {imgBox}
        <div className="search-detail-game-item-context">
          <div className="search-detail-game-item-top">
            {nameDom}
            {categoryDom}
            {iconBox}
          </div>
          {btnDom}
        </div>
      </div>
    </Link>
  );
};

export default SearchGameItem;
