import React from 'react'

import './index.scss'

import nagalogo from '../../../public/img/nagalogo.png'
import walleticon from '../../../public/img/wallet_icon.png'
import driectory from '../../../public/img/driectory.png'
import closeimg from '../../../public/img/close_icon.png'

export default (props) => {
    const { ispopup, ondownFn, walletFn } = props
    return <div className="header-m">
        <div className="header-m-left">
            <img src={nagalogo} alt=""/>
        </div>
        {ispopup ? (
            <div className="header-m-right">
                <div className="header-m-right-all" onClick={() => {
                    ondownFn(false)
                }}>
                    <img src={closeimg} alt=""/>
                </div>
            </div>
        ) : (
            <div className="header-m-right">
                <div className="header-m-right-all" onClick={() => {
                    ondownFn(true)
                }}>
                    <img src={driectory} alt=""/>
                </div>
                <div className="header-m-wallet" onClick={() => {
                    walletFn(true)
                }}>
                    <img src={walleticon} alt=""/>
                </div>
            </div>
        )}
    </div>
}
