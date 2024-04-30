import React, { useState, useCallback } from 'react'

import './index.scss'

import soonimg from '../../../public/img/naga_soon.png'
import allgameimg from '../../../public/img/allgame.png'
import rocketimg from '../../../public/img/rocket.png'
import gamehimg from '../../../public/img/game_h.png'
import twitterimg from '../../../public/img/share/twitter.png'
import share1img from '../../../public/img/share/share1.png'
import share2img from '../../../public/img/share/share2.png'
import share3img from '../../../public/img/share/share3.png'
import game1 from '../../../public/img/nagaimg/gime1.jpeg'
import game2 from '../../../public/img/nagaimg/game2.jpeg'
import game3 from '../../../public/img/nagaimg/game3.jpeg'
import game4 from '../../../public/img/nagaimg/gamen4.jpeg'
import game5 from '../../../public/img/nagaimg/gamen5.jpeg'
import ComingSoon from '../ComingSoon'

export default (props) => {
    // const { righttypeFn } = props
    const [littleflag, setLittleflag] = useState(false)
    const [soonflg, setSoonflg] = useState(false)
    const leftlist = [
        {
            title: 'ALL GAME',
            icon: allgameimg,
            list: [],
            soon: false,
            type: 0
        },
        {
            title: 'MINTS',
            icon: rocketimg,
            list: [],
            soon: true,
            type: 1
        },
        {
            title: 'PLAY NOW',
            icon: gamehimg,
            list: [
                { title: 'EFAS', icons: game1, link: '' },
                { title: 'Million on Mars', icons: game2, link: '' },
                { title: 'ev.io', icons: game3, link: '' },
                { title: 'Tiny Colony', icons: game4, link: '' },
                { title: 'MetaOps', icons: game5, link: '' }
            ],
            soon: true,
            type: 2
        }
    ]
    const sharelist = [
        { icon: twitterimg, link: '' },
        { icon: share1img, link: '' },
        { icon: share2img, link: '' },
        { icon: share3img, link: '' }
    ]
    const selectItem = useCallback((info) => {
        if (!info.soon) {
            // righttypeFn(info.type)
            window.open('/naga')
        }
        if (info.list.length > 0) {
            setLittleflag(!littleflag)
        } else {
            setLittleflag(false)
        }
    }, [littleflag])
    return <div className="left-con">
        {leftlist.map((item, index) => {
            return <div className="left-con-item" key={index}>
                <div className="item-header" onClick={() => {
                    selectItem(item)
                }}>
                    <div className="item-img">
                        <img src={item.icon} alt=""/>
                    </div>
                    <div className="item-title">
                        {item.title}
                        {item.soon && <div className="item-soon">
                            <img src={soonimg} alt=""/>
                        </div>}
                    </div>
                </div>
                {item.list.length > 0 && item.list.map((itm, idx) => {
                    return <div className="item-list" key={idx}>
                        <div className="item-list-item" onClick={() => {
                            setSoonflg(true)
                        }}>
                            <div className="list-item-img">
                                <img src={itm.icons} alt=""/>
                            </div>
                            <div className="list-item-text">{itm.title}</div>
                        </div>
                    </div>
                })}
            </div>
        })}
        <div className="left-con-share">
            {sharelist.map((item, index) => {
                return <div className="share-img" key={index}>
                    <img src={item.icon} alt=""/>
                </div>
            })}
        </div>
        {soonflg && <ComingSoon
            closeFn={() => {
                setSoonflg(false)
            }}
        />}
    </div>
}
