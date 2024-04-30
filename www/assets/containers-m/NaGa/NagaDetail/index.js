import React, { useState } from 'react'

import './index.scss'

import Header from '../Header'
import PullDown from '../PullDown'
import PopupPage from '../../../containers/NaGa/PopupPage'
import SecondPage from '../SecondPage'

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
        <SecondPage/>
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
