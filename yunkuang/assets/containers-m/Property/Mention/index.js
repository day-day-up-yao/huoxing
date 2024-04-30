import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { queryParam, Decrypt } from '../../../public/js/index'

import './index.scss'

import Extract from '../Extract'
import Topup from '../Topup'
// import SuccInfo from '../../../components/SuccessInfo'

export default () => {
    const env = process.env.NODE_ENV
    // const needlist = ['BTC', 'ETH', 'FIL', 'USDT', 'XCH', 'CRU', 'CKB']
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [symbollist, setSymbollist] = useState([])
    const [flages, setFlages] = useState(false)
    // 用户信息
    const [userinfo, setUserinfo] = useState({
        bindGA: '',
        registerType: '',
        email: '',
        mobile: ''
    })
    // const [sucneedinfo, setSucneedinfo] = useState(
    //     {
    //         currey: '',
    //         address: '',
    //         num: '',
    //         poundage: ''
    //     }
    // )
    useEffect(() => {
        let timer = null
        let num = 10 * 60
        timer = setInterval(() => {
            if (num > 0) {
                num--
            } else {
                clearInterval(timer)
                window.location.href = '/overdue'
            }
        }, 1000)
    }, [])
    useEffect(() => {
        const num = 10
        const time = new Date(new Date().getTime() + num * 60 * 1000)
        // console.log(JSON.parse(Decrypt(queryParam('autoken'))))
        const iosInfo = JSON.parse(Decrypt(queryParam('autoken')))
        if (Number(Date.parse(new Date()) / 1000) - Number(iosInfo.timestamp) > 60) {
            window.location.href = '/overdue'
        }
        if (iosInfo.type) {
            Number(iosInfo.type) === 1 ? setFlages(false) : setFlages(true)
        }
        if (window.sessionStorage.getItem('isReload')) {
            if (Cookies.get('au_token')) {
                getInfo()
            } else {
                // alert('token已过期')
                window.location.href = '/overdue'
            }
            // getInfo()
        } else {
            window.sessionStorage.setItem('isReload', true)
            if (queryParam('autoken')) {
                Cookies.set('au_token', iosInfo.token, { expires: time })
                getInfo()
            }
        }
    }, [])
    const getInfo = useCallback(() => {
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
                                if (result.data[j].tokenName === data[i].tokenId) {
                                    data[i].free = result.data[j].free
                                    data[i].locked = result.data[j].locked
                                    data[i].total = result.data[j].total
                                }
                            }
                        }
                        // console.log(data)
                        setSymbollist(data)
                    }
                })
            }
        })
    })
    return <div className="mention-money">
        <div className="mention-select">
            <p style={{ color: flages ? '' : '#F4881C' }} onClick={() => { setFlages(false) }}>{t('property.cb')}</p>
            <p style={{ color: !flages ? '' : '#F4881C' }} onClick={() => { setFlages(true) }}>{t('property.tb')}</p>
        </div>
        {!flages && symbollist.length > 0 && <Topup
            currerylist = {symbollist}
            otherpage
        />}
        {flages && symbollist.length > 0 && <Extract
            currerylist = {symbollist}
            userinfo={userinfo}
            otherpage
        />}
        {/* <SuccInfo tbinfo={sucneedinfo}/> */}
    </div>
}
