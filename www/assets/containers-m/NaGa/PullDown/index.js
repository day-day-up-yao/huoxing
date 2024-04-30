import React from 'react'

import Header from '../Header'
import Popup from '../Popup'
import allgame from '../../../public/img/allgame.png'
import rocketimg from '../../../public/img/rocket.png'
import gamehimg from '../../../public/img/game_h.png'
import soonimg from '../../../public/img/naga_soon.png'
import walletimg from '../../../public/img/wallet_icon.png'
import Toast from 'multiComps/Toast'

import './index.scss'

export default (props) => {
    const { onpullFn, onwalletFn } = props
    const pulllist = [
        { name: 'ALL GAME', icon: allgame, soon: false, link: '/naga' },
        { name: 'MINTS', icon: rocketimg, soon: true, link: '' },
        { name: 'PLAY NOW', icon: gamehimg, soon: true, link: '' }
    ]
    return <Popup
        children={
            <div className="pulldown">
                <Header
                    ispopup
                    ondownFn={(e) => {
                        onpullFn(e)
                    }}
                />
                <div className="pulldown-list">
                    {pulllist.map((item, index) => {
                        return <div className="pulldown-list-item"
                            key={index}
                            onClick={() => {
                                if (!item.soon) {
                                    // gotolinkFn(index)
                                    window.location.href = item.link
                                } else {
                                    Toast.info('Coming soon')
                                }
                            }}
                        >
                            <div className="pulldown-list-item-top">
                                <img src={item.icon} alt=""/>
                                <div className="top-text">
                                    {item.name}
                                    {item.soon && <div className="item-top-soon">
                                        <img src={soonimg} alt=""/>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="pulldown-wallet" onClick={() => {
                    onpullFn(false)
                    onwalletFn(true)
                }}>
                    <img src={walletimg} alt=""/>
                    <span>Connect Wallet</span>
                </div>
            </div>
        }
    />
}
