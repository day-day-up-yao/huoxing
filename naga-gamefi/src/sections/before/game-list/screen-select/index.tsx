import React, { useMemo, useState } from 'react';

import './index.scss';

import ScreenDown from './screen-down';

// import selectedimg from '../../../public/imgs/icon/selected.png'
const chainlist = [
  {
    name: 'All',
    type: 'Chain',
  },
  {
    name: 'BNB CHAIN',
    type: 'BSC',
  },
  {
    name: 'ETH',
    type: 'ETH',
  },
  {
    name: 'Arbitrum',
    type: 'Arbitrum',
  },
  {
    name: 'Polygon',
    type: 'Polygon',
  },
  {
    name: 'Solana',
    type: 'Solana',
  },
  {
    name: 'Imuutable',
    type: 'Imuutable',
  },
  {
    name: 'Avalanche',
    type: 'Avalanche',
  },
  // {
  //   name: 'Starknet',
  //   type: 'Starknet',
  // },
];
const timelist = [
  {
    name: '24H',
    time: '24h',
  },
  // {
  //     name: '7D',
  //     time: '7d'
  // },
  // {
  //     name: '30D',
  //     time: '30d'
  // }
];
export default (props: any) => {
  const { getchain, getTime, allotherinfo, getCategory } = props;

  const [timetype, setTimetype] = useState(0);
  const [category, setCategory] = useState('Genre');
  const [chainname, setChainname] = useState('Chain');
  const [chainshow, setChainshow] = useState('Chain');
  const [timename, setTimename] = useState('24H');
  // const [chainflag, setChainflag] = useState(false)
  // const [filterdata, setFilterdata] = useState(multilist)
  // const selectMulti = useCallback((e) => {
  //     const id = e.target.getAttribute('dataid')
  //     const data = []
  //     filterdata.map((itm, idx) => {
  //         if (parseInt(id) === parseInt(itm.id)) {
  //             filterdata[idx].checked = !itm.checked
  //         }
  //         data.push(itm)
  //     })
  //     const condata = []
  //     // 筛选条件列表
  //     data.map((item) => {
  //         if (item.checked === true) {
  //             condata.push(item.name)
  //         }
  //     })
  //     setFilterdata(data)
  // }, [filterdata])
  const otherScreen = useMemo(
    () => [
      {
        name: category,
        title: category,
        itemlist: allotherinfo?.categoryPojoList,
      },
      {
        name: chainshow,
        title: chainname,
        itemlist: allotherinfo?.chainPojoList,
      },
      {
        name: timename,
        title: timename.toLowerCase(),
        itemlist: timelist,
      },
    ],
    [
      allotherinfo?.categoryPojoList,
      allotherinfo?.chainPojoList,
      category,
      chainname,
      chainshow,
      timename,
    ]
  );
  return (
    <div className="game-screen">
      <div className="game-screen-left">
        <div className="down-list">
          {otherScreen.map((item, index) => (
            <ScreenDown
              name={item.name}
              title={item.title}
              type={index}
              key={index}
              list={item.itemlist}
              getName={(type: any, title: any, name: any) => {
                getCategory(type, title);
                if (type === 2) {
                  setTimename(title === '' ? '24H' : name);
                }
                if (type === 1) {
                  setChainname(title === '' ? 'Chain' : title);
                  setChainshow(title === '' ? 'Chain' : name);
                }
                if (type === 0) {
                  setCategory(title === '' ? 'Genre' : title);
                }
              }}
              // selectClick={(e) => {
              //     setChainflag(!chainflag)
              //     // setDownlist(list)
              //     e.nativeEvent.stopImmediatePropagation()
              // }}
              // closePopupFn={() => {
              //     setChainflag(false)
              // }}
            />
          ))}
        </div>
        <div className="screen-chain">
          {chainlist.map((item, index) => (
            <div
              className={`screen-select ${chainname === item.type && 'select-active'}`}
              key={index}
              onClick={() => {
                getchain(item.type === 'Chain' ? '' : item.type);
                setChainname(item.type);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="game-screen-right">
        {timelist.map((item, index) => (
          <div
            className={`screen-select ${timetype === index && 'select-active'}`}
            key={index}
            onClick={() => {
              setTimetype(index);
              getTime(item.time);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
