import React, { useState, useCallback, useEffect } from 'react'

// import itembg from '../../../public/img/itembg.png'
import twitterimg from '../../../public/img/share/twitter.png'
import bigimg from '../../../public/img/bigimg.png'
import soonimg from '../../../public/img/naga_soon.png'
import searchimg from '../../../public/img/search_naga.png'
import closeimg from '../../../public/img/close_icon.png'
import aptimg from '../../../public/img/aptimg.png'
import DownSelect from '../../../components/NaGa/DownSelect'
import TextPage from '../../../components/NaGa/Text'
import Filter from '../../../components/NaGa/Filter'
import { queryParam } from '../../../../_multiappsharing/public'

import './index.scss'

export default (props) => {
    // const { multilist } = props
    // item详情类型切换
    const selectlist = [
        { title: 'Item', soon: false },
        { title: 'Activity', soon: false },
        { title: 'Mints', soon: true },
        { title: 'Play Now', soon: true }
    ]
    const [selectnum, setSelectnum] = useState(0)
    const [iteminfo, setIteminfo] = useState()
    useEffect(() => {
        if (queryParam('iteminfo')) {
            console.log(queryParam('iteminfo'))
            setIteminfo(JSON.parse(queryParam('iteminfo')))
        }
        // console.log(JSON.parse(queryParam('iteminfo')))
    }, [])
    function createArr (num) {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(i + 1)
        }
        let result = []
        for (let i = arr.length - 1; i > 0; i--) {
            let rand = Math.ceil(Math.random() * i)
            // 根据arr数组长度，随机产生一个索引
            // 从原数组arr把该索引的元素删除，并加入到result数组--便是随机产生啦
            result.push(arr.splice(rand, 1))
        }
        return result
    }
    let tenArr = createArr(20)
    // 多选筛选列表
    const multilist = [
        { id: 1, name: 'Primus(59)', checked: false },
        { id: 2, name: 'Sinisters(45)', checked: false },
        { id: 3, name: 'Elites(34)', checked: false },
        { id: 4, name: 'Invaders(32)', checked: false },
        { id: 5, name: 'Heroes(29)', checked: false },
        { id: 4, name: 'Ronin(29)', checked: false },
        { id: 4, name: 'Hut 8(5)', checked: false },
        { id: 5, name: 'Outlanders(4)', checked: false }
    ]
    const itemlist = ['Price: Low to High', 'Price: High to Low', 'Date: New to Old', 'Date: Old to New', 'Rank: High to Low', 'Rank: Low to High']
    const [multidata, setMultidata] = useState(multilist)
    const [condition, setCondition] = useState([])
    // 单个删除筛选条件
    const deleteItem = useCallback((itme) => {
        const data = condition.filter((itm) => itm !== itme)
        const newmudata = []
        multidata.map((itm, idx) => {
            if (itme === itm.name) {
                multidata[idx].checked = false
            }
            newmudata.push(itm)
        })
        setMultidata(newmudata)
        setCondition(data)
    }, [condition, multidata])
    // 删除所有筛选条件
    const alldeteleFn = useCallback(() => {
        setCondition([])
        const alldata = []
        multidata.map((itm, idx) => {
            multidata[idx].checked = false
            alldata.push(itm)
        })
        setMultidata(alldata)
    }, [multidata])
    return <div className="itemcon">
        <div className="itemcon-top"
            style={{
                backgroundImage: `url(${iteminfo && iteminfo.bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="itemcon-top-con">
                <div className="top-con-center">
                    <div className="top-con-center-header">
                        <div className="center-header-left">
                            <img src={iteminfo ? iteminfo.icon : bigimg} alt=""/>
                        </div>
                        <div className="center-header-right">
                            <h2>{iteminfo ? iteminfo.name : 'Mini Royale'}</h2>
                            <div className="center-header-right-share">
                                <div className="share-img" onClick={() => {
                                    if (iteminfo && iteminfo.twitter) {
                                        window.location.href = iteminfo.twitter
                                    }
                                }}>
                                    <img src={twitterimg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {iteminfo && iteminfo.website && <div className="top-con-center-btn">
                        {/* <div className="center-btn-item">PLAY NOW</div> */}
                        <div className="center-btn-item other-right">
                            <a href={iteminfo.website} target="_blank">Website</a>
                        </div>
                    </div>}
                    <div className="top-con-center-desc">
                        {iteminfo ? iteminfo.desc : 'Lamdamoon Metaverse is an experimental high-end 3D NFT game built on top of Aptos/Polkadot and Unreal Engine 5.'}
                    </div>
                </div>
            </div>
            <div className="itemcon-top-select">
                {selectlist.map((item, index) => {
                    return <div
                        className={`itemcon-top-select-item ${selectnum === index && 'active'}`}
                        key={index}
                        onClick={() => {
                            if (!item.soon) {
                                setSelectnum(index)
                            }
                        }}
                    >
                        {item.title}
                        {item.soon && <div className="select-item-soon">
                            <img src={soonimg} alt=""/>
                        </div>}
                    </div>
                })}
            </div>
        </div>
        <div className="itemcon-center">
            {selectnum === 0 && <div className="center-items">
                <Filter
                    filterlist={multidata}
                    getdataFn={(data) => {
                        setCondition(data)
                        // console.log(data)
                    }}
                />
                <div className="center-items-right">
                    <div className="items-right-top">
                        <div className="items-right-top-search">
                            <img src={searchimg} alt=""/>
                            <input type="text" placeholder="Search"/>
                        </div>
                        <DownSelect
                            title="DATE: NEW TO OLD"
                            itemlist={itemlist}
                        />
                    </div>
                    <div className="items-right-selected">
                        {condition.map((item, index) => {
                            return <div className="selected-item" key={index}>
                                <span>{item}</span>
                                <img src={closeimg} alt="" onClick={() => {
                                    deleteItem(item)
                                }}/>
                            </div>
                        })}
                        {condition.length > 0 && <div className="selected-clear-all" onClick={alldeteleFn}>
                            Clear All
                        </div>}
                    </div>
                    <div className="items-right-list">
                        {tenArr.map((item) => {
                            return <div className="items-right-list-item" key={item}>
                                <div className="items-right-list-item-img">
                                    <img src={bigimg} alt=""/>
                                </div>
                                <div className="items-right-list-item-bottom">
                                    <div className="item-bottom-desc">DEMO #6965</div>
                                    <div className="item-bottom-btn">
                                        <img src={aptimg} alt=""/>
                                        <span>0.15 APT</span>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>}
            {selectnum === 1 && <div className="cennter-activity">
                {iteminfo && <TextPage
                    itemtype={iteminfo.type}
                />}
            </div>}
        </div>
    </div>
}
