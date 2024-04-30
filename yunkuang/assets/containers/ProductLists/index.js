import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import { queryParam } from '../../public/js/index'
import Products from '../../components/Newproductlists'
import Toast from '../../components/Toast'
import { CurryList } from '../../public/js/curryicon'
import './index.scss'
export default () => {
    const { t } = useTranslation()
    const { productlists } = useSelector((state) => ({
        productlists: state.product.list
    }))
    const [bsel, setBsel] = useState()
    useEffect(() => {
        // console.log(window.location.pathname.split('/')[2])
        setBsel(window.location.pathname.split('/')[2])
    }, [])
    const dispatch = useDispatch()
    const [products, setProducts] = useState(productlists)
    const handleSelc = useCallback((name) => {
        if (name === 'XMR' || name === 'DASH') {
            return
        }
        setBsel(name)
        dispatch.product.getProductList({
            currency: name
        }).then((res) => {
            if (res.code === 0) {
                setProducts(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    })
    return <div className="newproductlist">
        <div className="newproduct-con">
            <div className="newproduct-con-top">
                {CurryList.slice(1).map((item, index) => {
                    return <div
                        className={`newproduct-con-top-e ${bsel === item.name ? 'active' : ''}`}
                        key={index} style={{ color: item.stuse === false ? '#A2A2AA' : '' }}
                        onClick={() => { handleSelc(item.name) }}>
                        <img src={bsel === item.name ? item.icons : item.icon} alt=""/>
                        {item.name}{t('newpage.home.wk')}
                    </div>
                })}
            </div>
            <div className="newproduct-list">
                <Products {...{ products }}/>
            </div>
        </div>
    </div>
}
