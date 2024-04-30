import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import FinanceDetailheader from './FinHeader'
import FinanceBottom from './FinBottom'

export default () => {
    const { productdetail } = useSelector((state) => ({
        productdetail: state.finance.pruductDetail
    }))
    return <div className="fince-m-detail">
        <FinanceDetailheader
            detail={productdetail}
        />
        <FinanceBottom
            detail={productdetail}
        />
    </div>
}
