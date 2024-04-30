import React from 'react'

import './index.scss'

import closeicon from '../../../public/img/close_icon.png'
import wallfirst from '../../../public/img/wall_fis.png'
import wallsecond from '../../../public/img/wall_secon.png'
import wallthend from '../../../public/img/wall_three.png'

export default (props) => {
    const { closeFn, soonFn } = props
    const walletlist = [
        { icon: wallfirst, name: 'Martian Wallet', link: '' },
        { icon: wallsecond, name: 'Fewcha Wallet', link: '' },
        { icon: wallthend, name: 'Pontem Wallet', link: '' }
    ]
    return <div className="popup">
        <div className="popup-center">
            <h2>Connect your wallet</h2>
            <div className="wallet-list">
                {walletlist.map((item, index) => {
                    return <div
                        className="wallet-list-item"
                        key={index}
                        onClick={() => {
                            if (item.link === '') {
                                soonFn()
                            }
                        }}
                    >
                        <div className="wallet-list-item-left">
                            <img src={item.icon} alt=""/>
                        </div>
                        <div className="wallet-list-item-right">
                            {item.name}
                        </div>
                    </div>
                })}
            </div>
            <div className="close-popup" onClick={() => {
                closeFn()
            }}>
                <img src={closeicon} alt=""/>
            </div>
        </div>
    </div>
}
