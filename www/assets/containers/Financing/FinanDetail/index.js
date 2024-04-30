import React from 'react'
import { useSelector } from 'react-redux'

import './index.scss'

import FindetailLeft from './FinanceLeft'
import FindetailRight from './FinanceRight'

export default () => {
    const { productdetail } = useSelector((state) => ({
        productdetail: state.finance.pruductDetail
    }))
    return <div className="financedetail">
        <FindetailLeft
            detail={productdetail}
        />
        <FindetailRight
            detail={productdetail}
        />
    </div>
}
