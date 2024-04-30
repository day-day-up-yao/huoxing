import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookie from 'js-cookie'
// import { useTranslation } from 'react-i18next'

// import FinishIndex from '../../components-m/HomeIndex'
// import OtherIndex from './other'
// import { langWhat } from '../../public/js/index'
// import HomeZh from '../Download/index'

import Header from './Header/index.js'
import Banner from './Banner'
import Notice from './Notice'
import CurrenyInfo from './CurrenyInfo'
import Product from './Product'
import Toast from '../../components/Toast'

export default () => {
    const dispatch = useDispatch()
    const { bannerList, apppuductlists } = useSelector(state => ({
        bannerList: state.product.banner,
        apppuductlists: state.public.apppuductlist && state.public.apppuductlist.length > 4 ? state.public.apppuductlist.slice(0, 4) : state.public.apppuductlist
    }))
    // const { i18n } = useTranslation()
    const [msginfo, setMsginfo] = useState()
    const [currenyinfo, setCurrenyinfo] = useState()
    const [btnflag, setBtnflag] = useState()
    // const [productlist, setProductlist] = useState()
    // console.log(apppuductlists)
    useEffect(() => {
        // 获取币种列表
        dispatch.public.homeInfo().then((res) => {
            console.log(res.data)
            if (res.code === 0) {
                setBtnflag(res.data.demoMode)
                // 获取币种汇率等信息
                dispatch.product.allRateinfo({
                    tokens: (res.data.incomeCoinList).toString(),
                    legalCoins: 'USD'
                }).then((resls) => {
                    if (resls.code === 0) {
                        console.log(resls)
                        setCurrenyinfo(resls.data)
                    } else {
                        Toast.info(resls.msg)
                    }
                })
            } else {
                Toast.info(res.msg)
            }
        })
        // // 推荐产品
        // dispatch.public.getProductList({
        //     jointMiningType: 9
        // }).then((res) => {
        //     console.log(res)
        //     if (res.code === 0) {
        //         setProductlist(res.data)
        //     } else {
        //         Toast.info(res.msg)
        //     }
        // })
        if (Cookie.get('user_id')) {
            dispatch.public.messageList({
                type: 0,
                curPage: 1,
                pageSize: 4
            }).then((res) => {
                if (res.code === 0) {
                    setMsginfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [])
    return <div>
        <Header/>
        <Banner bannerlist={bannerList}/>
        {msginfo && <Notice announcelist={msginfo} />}
        {currenyinfo && <CurrenyInfo currenylist={currenyinfo} />}
        {apppuductlists && <Product productList={apppuductlists} btnFlag={btnflag} />}
    </div>
    // return langWhat(i18n.language) === 'ja' ? <FinishIndex /> : <OtherIndex />
}
