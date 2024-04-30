import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import Header from '../../components-m/Headers/index'
import AllAsset from './Allasset'
import CurreryList from './CurreryList'
import Topup from './Topup'
import Extract from './Extract'
import BindInfo from './Bindinfo'

import './index.scss'
import Toast from '../../components/Toast'
export default () => {
    const { t } = useTranslation()
    // const needlist = ['BTC', 'ETH', 'FIL', 'USDT', 'XCH', 'CRU', 'CKB']
    // const { t } = useTranslation()
    const dispatch = useDispatch()
    const [symbollist, setSymbollist] = useState([])
    // const [tokenlist, setTokenlist] = useState([])
    const [desflage, setDesflage] = useState(false) // 充币弹窗
    const [metflage, setMetflage] = useState(false)
    const [allflag, setAllflag] = useState(false)
    const [allrate, setAllrate] = useState()
    // 用户信息
    const [userinfo, setUserinfo] = useState({
        bindGA: '',
        registerType: '',
        email: '',
        mobile: ''
    })
    useEffect(() => {
        const env = process.env.NODE_ENV
        // if ((env !== 'production') && needlist.indexOf('TETH') === -1) {
        //     needlist.push('TETH')
        // }
        dispatch.public.getUseinfo().then((res) => {
            setUserinfo(res.data)
        })
        dispatch.public.configV2({
            tab: 'exchange',
            type: 'all',
            platform: 1,
            without_country: true
        }).then((res) => {
            if (res.code === 0) {
                const cuurreylist = []
                res.data.token.map((item) => {
                    if (item.tokenName !== 'TETH') {
                        cuurreylist.push(item.tokenName)
                    }
                })
                dispatch.product.allRateinfo({
                    tokens: cuurreylist.toString(),
                    legalCoins: 'USDT'
                }).then((resls) => {
                    if (resls.code === 0) {
                        setAllrate(resls.data)
                    } else {
                        Toast.info(resls.msg)
                    }
                })
                // console.log(cuurreylist.toString())
                // setTokenlist(res.data.token)
                dispatch.product.checkC2cBanlance({}).then((result) => {
                    if (result.code === 0) {
                        const data = res.data.token
                        if (env === 'production') {
                            data.splice(data.length - 1, 1)
                        }
                        // for (let i = 0; i < needlist.length; i++) {
                        //     for (let j = 0; j < res.data.token.length; j++) {
                        //         if (res.data.token[j].tokenId === needlist[i]) {
                        //             data.push(res.data.token[j])
                        //         }
                        //     }
                        // }
                        for (let i = 0; i < data.length; i++) {
                            for (let j = 0; j < result.data.length; j++) {
                                if (result.data[j].tokenName === data[i].tokenName) {
                                    data[i].free = result.data[j].free
                                    data[i].locked = result.data[j].locked
                                }
                            }
                        }
                        setSymbollist(data)
                    }
                })
            }
        })
    }, [])
    useEffect(() => {
        if ((metflage || desflage) && ((!userinfo.bindGA && userinfo.mobile === '') || (!userinfo.bindGA && userinfo.email === ''))) {
            setMetflage(false)
            setDesflage(false)
            setAllflag(true)
            return
        }
        if (metflage || desflage) {
            setAllflag(true)
        }
    }, [metflage, desflage])
    return <div className="property-m">
        <Header title={t('property.property')}/>
        <div className="property-m-nav">
            <AllAsset
                DesPopup={(a) => {
                    setDesflage(a)
                }}
                MetPopup={(b) => {
                    setMetflage(b)
                }}
            />
            {allrate && <CurreryList symbollist={symbollist} Rate={allrate}/>}
        </div>
        {allflag && <div className="property-m-popup">
            {symbollist.length > 0 && desflage && <Topup
                currerylist = {symbollist}
                closeAll={() => {
                    setAllflag(false)
                    setDesflage(false)
                }}/>}
            {metflage && symbollist.length > 0 && <Extract
                currerylist = {symbollist}
                userinfo={userinfo}
                ispopup
                closePopup={(flage) => {
                    setAllflag(flage)
                    setMetflage(flage)
                }}
            />}
            {((!userinfo.bindGA && userinfo.mobile === '') || (!userinfo.bindGA && userinfo.email === '')) && <BindInfo userinfo={userinfo}/>}
        </div>}
    </div>
}
