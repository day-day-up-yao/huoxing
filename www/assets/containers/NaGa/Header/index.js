import React, { useState } from 'react'

import './index.scss'

import nagalogo from '../../../public/img/nagalogo.png'
// import connectbtn from '../../../public/img/connect.png'
// import searchimg from '../../../public/img/search_naga.png'
import walletimg from '../../../public/img/wallet_icon.png'
import PopupPage from '../../../components/NaGa/WalletPage'
import Search from '../../../components/NaGa/Search'

export default (props) => {
    const { comingFn } = props
    const [walletfg, setWalletfg] = useState(false)
    return <div className="naga-header">
        <div className="header-logo" onClick={() => {
            window.open('/naga')
        }}>
            <img src={nagalogo} alt=""/>
        </div>
        <Search/>
        <div className="right-btn" onClick={() => {
            setWalletfg(true)
        }}>
            <img src={walletimg} alt=""/>
            <span>Connect Wallet</span>
        </div>
        {walletfg && <PopupPage
            closeFn={() => {
                setWalletfg(false)
            }}
            soonFn={() => {
                comingFn(true)
            }}
        />}
    </div>
}
