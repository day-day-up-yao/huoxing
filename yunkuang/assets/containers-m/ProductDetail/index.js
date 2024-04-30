import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Header from '../../components-m/Headers'
import ProductInfo from './ProductInfo'
import Operation from './Operation'
import FillOrder from './FillOrder'

import './index.scss'

export default () => {
    const { detail, userKonews } = useSelector((state) => ({
        detail: state.product.detail,
        userKonews: state.public.userKnow
    }))
    const [flag, setFlag] = useState(false)
    return <div>
        {!flag ? (
            <div className="productdetail">
                <Header
                    title="商品"
                    leftfg
                />
                <ProductInfo detail={detail} />
                <Operation detail={detail} notice={userKonews} onflagFn={() => {
                    setFlag(true)
                }} />
            </div>
        ) : (
            <FillOrder detail={detail} onflagFn={() => {
                setFlag(false)
            }}/>
        )}
    </div>
}
