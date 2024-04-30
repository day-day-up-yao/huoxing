import React, { createContext, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import Toast from '../../components/Toast'

export const Context = createContext({})
export default (props) => {
    const { children } = props
    const { t } = useTranslation()
    const { lists } = useSelector((state) => ({
        lists: state.product.list
    }))
    // console.log(lists)
    const infolist = [
        {
            title: '管理矿场负荷规模',
            desc: '3000 兆瓦'
        },
        {
            title: '管理矿机规模',
            desc: '30000台'
        },
        {
            title: '支持矿机/算力',
            desc: '12种'
        },
        {
            title: '连续无事故运行',
            desc: '5年'
        }
    ]

    const [featuretype, setFeaturetype] = useState(0)

    // 切换功能显示
    const handleSelectFn = (type) => {
        if (type === 0) {
            setFeaturetype(type)
        } else {
            Toast.info('功能升级，敬请期待')
        }
    }

    const featureselectlist = [
        {
            title: '矿机/算力',
            type: 0
        },
        {
            title: '质押借贷',
            type: 1
        },
        {
            title: 'Defi矿池',
            type: 2
        },
        {
            title: '存币生息',
            type: 3
        }
    ]

    const [regesterinfo, setRegesterinfo] = useState()

    const getSignupinfo = (value) => {
        setRegesterinfo(value)
    }

    // 立即注册
    const toSignup = useCallback(() => {
        window.location.href = `/user/signup?signup=${regesterinfo}`
    }, [regesterinfo])

    return (
        <Context.Provider
            value={{
                t,
                infolist,
                featureselectlist,
                featuretype,
                lists,
                handleSelectFn,
                getSignupinfo,
                toSignup
            }}
        >
            {children}
        </Context.Provider>
    )
}
