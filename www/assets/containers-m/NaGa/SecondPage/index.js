import React, { useState, useEffect } from 'react'

import './index.scss'

// import itembg from '../../../public/img/h5bigimg.png'
import ShareList from '../../../components/NaGa/ShareList'
import itemimg from '../../../public/img/bigimg.png'
// import pointdown from '../../../public/img/pointdown.png'
import soonimg from '../../../public/img/naga_soon.png'
import sxicon from '../../../public/img/sxicon.png'
import curreyicon from '../../../public/img/items_icon.png'
import Search from '../../../components/NaGa/Search'
import DownSelect from '../../../components/NaGa/DownSelect'
import TextPage from '../../../components/NaGa/Text'
import Filtrate from '../Filtrate'
import { queryParam } from '../../../../_multiappsharing/public'

export default () => {
    const [selecfg, setSelecfg] = useState(0)
    const [sxflag, seySxflag] = useState(false)
    const selectlist = [
        { name: 'Items', soon: false },
        { name: 'Activity', soon: false },
        { name: 'Mints', soon: true },
        { name: 'Play Now', soon: true }
    ]
    const [iteminfo, setIteminfo] = useState()
    useEffect(() => {
        if (queryParam('iteminfo')) {
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
    const itemlist = ['Price: Low to High', 'Price: High to Low', 'Date: New to Old', 'Date: Old to New', 'Rank: High to Low', 'Rank: Low to High']
    return <div className="second-page">
        <div className="second-page-top"
            style={{
                backgroundImage: `url(${iteminfo && iteminfo.bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="page-top-popup"/>
            <div className="second-page-other">
                <div className="page-other-left">
                    <img src={iteminfo && iteminfo.icon} alt=""/>
                </div>
                <div className="page-other-right">
                    <div className="other-right-not"/>
                    <div className="other-right-text">{iteminfo ? iteminfo.name : '--'}</div>
                    {iteminfo && <ShareList
                        link={iteminfo.twitter}
                    />}
                </div>
            </div>
        </div>
        <div className="second-page-text">
            <div className="second-page-text-con">
                <div className="text-con-btn">
                    {/* <div className="text-con-btn-item">PLAY NOW</div> */}
                    {iteminfo && iteminfo.website && <div className="text-con-btn-item item-again">
                        <a href={iteminfo.website} target="_blank">Website</a>
                    </div>}
                </div>
                <div className="text-con-desc">
                    <div className="text-con-desc-t">
                        {iteminfo ? iteminfo.desc : '--'}
                    </div>
                    {/* <div className="text-con-desc-btn">
                        <span>more</span>
                        <img src={pointdown} alt=""/>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="second-page-bottom">
            <div className="page-bottom-select">
                {selectlist.map((item, index) => {
                    return <div
                        className={`bottom-select-item ${selecfg === index && 'select-active'}`}
                        key={index}
                        onClick={() => {
                            if (!item.soon) {
                                setSelecfg(index)
                            }
                        }}
                    >
                        <span>{item.name}</span>
                        {item.soon && <div className="select-item-soon">
                            <img src={soonimg} alt=""/>
                        </div>}
                    </div>
                })}
            </div>
            {/* Items */}
            {selecfg === 0 && <div className="page-bottom-items">
                <div className="page-bottom-sx">
                    <Search little/>
                    <div className="bottom-sx-go">
                        <DownSelect
                            title="Price：Low to High"
                            little
                            itemlist={itemlist}
                        />
                        <div className="bottom-sx-go-right" onClick={() => {
                            seySxflag(true)
                        }}>
                            <img src={sxicon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="bottom-items-list">
                    {tenArr.map((item) => {
                        return <div className="items-list-item" key={item}>
                            <div className="items-list-item-top">
                                <img src={itemimg} alt=""/>
                            </div>
                            <div className="items-list-item-bottom">
                                <div className="item-bottom-text">DEMO #6965</div>
                                <div className="item-bottom-btn">
                                    <img src={curreyicon} alt=""/>
                                    <span>0.15 APT</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>}
            {/* Activity */}
            {selecfg === 1 && <div className="page-bottom-activity">
                <TextPage
                    isH5
                    itemtype={iteminfo.type}
                />
            </div>}
        </div>
        {sxflag && <Filtrate
            closeFn={() => {
                seySxflag(false)
            }}
        />}
    </div>
}
