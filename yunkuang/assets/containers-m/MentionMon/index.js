import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
// import { useTranslation } from 'react-i18next'

import Header from '../../components-m/Headers'
import AllBg from '../../components-m/AllBg'
import Extract from '../Property/Extract'

export default () => {
    const env = process.env.NODE_ENV
    const dispatch = useDispatch()
    // const { t } = useTranslation()
    const [symbollist, setSymbollist] = useState([])
    // 用户信息
    const [userinfo, setUserinfo] = useState({
        bindGA: '',
        registerType: '',
        email: '',
        mobile: ''
    })
    useEffect(() => {
        getInfo()
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
                dispatch.product.checkC2cBanlance({}).then((result) => {
                    if (result.code === 0) {
                        const data = res.data.token
                        if (env === 'production') {
                            data.splice(data.length - 1, 1)
                        }
                        for (let i = 0; i < data.length; i++) {
                            for (let j = 0; j < result.data.length; j++) {
                                if (result.data[j].tokenName === data[i].tokenId) {
                                    data[i].free = result.data[j].free
                                    data[i].locked = result.data[j].locked
                                    data[i].total = result.data[j].total
                                }
                            }
                        }
                        setSymbollist(data)
                    }
                })
            }
        })
    })
    return <>
        <Header
            leftfg
            title="提币"
        />
        <AllBg
            children={
                <>
                    {symbollist?.length > 0 && <Extract
                        currerylist = {symbollist}
                        userinfo={userinfo}
                        otherpage
                    />}
                </>
            }
        />
    </>
}
