import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './index.scss'

import FinHeader from './FinanHeader'
import FinCenter from './FinanceCenter'
import Pagination from '../../../../_multiappsharing/components/Pagination'
import preimg from '../../../public/img/prepage.png'
import nextimg from '../../../public/img/nextpage.png'
import { getFinancelist } from '../../../redux/actions/finance'
import Toast from '../../../../_multiappsharing/components/Toast'

export default () => {
    const dispatch = useDispatch()
    const { financeList, productTypelist } = useSelector((state) => ({
        financeList: state.finance.financeList,
        productTypelist: state.finance.productTypelist
    }))
    const [productlist, setProductlist] = useState(financeList)
    const [paraminfo, setParaminfo] = useState({
        pageSize: 10,
        category: '',
        projectName: '',
        minInvestDate: '',
        maxInvestDate: '',
        minAmount: '',
        maxAmount: ''
    })
    // const [newpage, setNewpage] = useState(1)
    const getProductFn = useCallback((params, page) => {
        setParaminfo(params)
        const obj = {
            currentPage: page,
            ...params
        }
        console.log(obj)
        dispatch(getFinancelist(obj)).then((res) => {
            if (res.code === 1) {
                setProductlist(res.obj)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="financelist-m">
        <FinHeader
            catelist={productTypelist}
            // page={newpage}
            getPruductlist={(obj) => {
                getProductFn(obj, 1)
            }}
        />
        <FinCenter
            productList={productlist}
        />
        {productlist.inforList.length > 0 && <Pagination
            // currentPage={1}
            totalData={productlist.recordCount}
            pageSize={10}
            pageChange={(curPage) => {
                getProductFn(paraminfo, curPage)
            }}
            prevTxt={
                <>
                    <img src={preimg} alt=""/>
                </>
            }
            nextTxt={
                <>
                    <img src={nextimg} alt=""/>
                </>
            }
        />}
    </div>
}
