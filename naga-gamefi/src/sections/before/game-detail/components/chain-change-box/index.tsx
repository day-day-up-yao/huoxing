import React, { useMemo, useCallback } from 'react';
import classNames from 'classnames';

import './index.scss';

import { chainlist } from 'src/utils/public/datas';

const GameDetailChainChangeBox = (props: any) => {
  const { chain, className, nowChain, onBtnChangeClick } = props;

  // 游戏链信息
  const chainDataList = useMemo(() => {
    const list = [];
    if (chain) {
      const allchain = chain.split(',');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < allchain.length; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < chainlist.length; j++) {
          if (allchain[i] === chainlist[j].chainname) {
            list.push(chainlist[j]);
            break;
          }
        }
      }
    }

    return list;
  }, [chain]);

  // 所属链按钮
  const itemDom = useCallback(
    (item: any, index: any) => {
      const classes = classNames('game-detail-chain-change-item', {
        active: nowChain === item.chainname,
      });
      return (
        <div className={classes} key={index} onClick={() => onBtnChangeClick(item.chainname)}>
          <img className="game-detail-chain-change-item-icon" src={item.icon} alt="" />
          <div className="game-detail-chain-change-item-text">{item.title}</div>
        </div>
      );
    },
    [nowChain, onBtnChangeClick]
  );

  return (
    <div className={classNames('game-detail-chain-change-box', className)}>
      {chainDataList.map((item, index) => itemDom(item, index))}
    </div>
  );
};

export default GameDetailChainChangeBox;
