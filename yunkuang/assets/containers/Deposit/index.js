import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
    const { productList } = useSelector((state) => ({
        productList: state.product.list
    }))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch.product.getProductList()
    }, [])

    return <div className="deposit-list">
        {productList.map(function () {
            return <div>123</div>
        })}
    </div>
}
