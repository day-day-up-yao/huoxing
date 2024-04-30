import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../../components-m/Headers'
import AllBg from '../../components-m/AllBg'
import Topup from '../Property/Topup'

export default () => {
    const env = process.env.NODE_ENV
    const dispatch = useDispatch()
    const [symbollist, setSymbollist] = useState([])
    useEffect(() => {
        getInfo()
    }, [])
    const getInfo = useCallback(() => {
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
    return <>
        <Header
            leftfg
            title="充币"
        />
        {symbollist?.length > 0 && <AllBg
            children={
                <Topup
                    currerylist = {symbollist}
                    otherpage
                />
            }
        />}
    </>
}
