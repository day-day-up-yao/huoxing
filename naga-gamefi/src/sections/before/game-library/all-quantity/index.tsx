import React, { useContext } from 'react';

import './index.scss';

import { Context } from '../context';

export default () => {
  const { librarydata, formatNum } = useContext(Context);
  // 游戏库总数据
  const quantitylist = [
    {
      name: 'All Game',
      num: librarydata.allGameNum,
      bgcolor: '',
    },
    {
      name: 'Playable',
      num: librarydata.playableNum,
      bgcolor: 'blue',
    },
    {
      name: 'Alpha',
      num: librarydata.alphaNum,
      bgcolor: 'orange',
    },
    {
      name: 'Beta',
      num: librarydata.betaNum,
      bgcolor: 'pink',
    },
    {
      name: 'In Development',
      num: librarydata.developNum,
      bgcolor: 'green',
    },
  ];
  return (
    <div className="allquantity">
      {quantitylist.map((item, index) => (
        <div className="quantity-item" key={index}>
          <div className="quantity-item-num">{formatNum(item.num)}</div>
          <div className="quantity-item-name">{item.name}</div>
          {/* <div className={`quantity-item-line ${item.bgcolor}`}/> */}
        </div>
      ))}
    </div>
  );
};
