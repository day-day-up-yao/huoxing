import React, { useState } from 'react'

import './index.scss'

import Header from './Header'
import FirstPage from './FirstPage'
import PullDown from './PullDown'
import PopupPage from '../../components/NaGa/WalletPage'

export default () => {
    const [downfg, setDownfg] = useState(false)
    const [wallerfg, setWalletfg] = useState(false)
    return <div className="naga-m">
        <Header
            ondownFn={(fg) => {
                setDownfg(fg)
            }}
            walletFn={() => {
                setWalletfg(true)
            }}
        />
        <FirstPage/>
        {downfg && <PullDown
            onpullFn={() => {
                setDownfg(false)
            }}
            onwalletFn={() => {
                setWalletfg(true)
            }}
            gotolinkFn={(num) => {
                if (num === 0) {
                    // setTypefg(0)
                    setDownfg(false)
                }
            }}
        />}
        {wallerfg && <PopupPage
            closeFn={() => {
                setWalletfg(false)
            }}
            soonFn={() => {
                console.log('toast')
            }}
        />}
    </div>
}
