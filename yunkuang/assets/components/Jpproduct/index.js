import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Hotlist from '../../components-m/Businesslist/index'
import Otherproduct from '../../components/Newproductlists/index'
import Toast from '../../components/Toast'

import './index.scss'

// import pro1 from '../../public/imgs/jpimg/pr1.jpg'
import pro2 from '../../public/imgs/jpimg/pr2.jpg'
import pro3 from '../../public/imgs/jpimg/pr3.jpg'
import pro4 from '../../public/imgs/jpimg/pr4.jpg'
import pro5 from '../../public/imgs/jpimg/pr5.jpg'
import pro6 from '../../public/imgs/jpimg/pr6.jpg'
import pro7 from '../../public/imgs/jpimg/pr7.jpg'
import pro8 from '../../public/imgs/jpimg/pr8.jpeg'
import pro9 from '../../public/imgs/jpimg/pr9.jpeg'

import { isMobile, queryParam } from '../../public/js/index'

export default () => {
    const dispatch = useDispatch()
    const [hotlist, setHotlist] = useState()
    const [otherinfo, setOtherinfo] = useState()
    useEffect(() => {
        // console.log(queryParam('channel'))
        if (queryParam('channel')) {
            dispatch.product.getproductInfo({
                uuid: queryParam('channel')
            }).then((res) => {
                if (res.code === 0) {
                    setOtherinfo(res.data)
                    getProductlist(res.data.productIds)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [])

    const getProductlist = useCallback((idlist) => {
        dispatch.product.byidproductList({
            productIds: idlist
        }).then((res) => {
            if (res.code === 0) {
                setHotlist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="jp-product">
        {/* {otherinfo && <div className="jp-active-text">{otherinfo.name + ' '}が下記の新製品をお勧めします</div>} */}
        <div className="jp-product-img">
            <img src={pro8} alt=""/>
        </div>
        {!isMobile() ? (
            <div className="feature-top">
                {hotlist && otherinfo && <Otherproduct products = {hotlist} chancode={otherinfo.uuid}/>}
            </div>
        ) : (
            <div className="HomeCon-m">
                {hotlist && otherinfo && <Hotlist productList = {hotlist} chancode={otherinfo.uuid}/>}
            </div>
        )}
        {/* <div className="jp-product-list">
            <Hotlist productList = {hotlist} />
        </div> */}
        <div className="jp-product-img">
            <img src={pro9} alt=""/>
        </div>
        <div className="jp-product-img">
            <img src={pro2} alt=""/>
        </div>
        <div className="jp-product-img">
            <img src={pro3} alt=""/>
        </div>
        <div className="jp-product-img">
            <img src={pro4} alt=""/>
        </div>
        <div className="jp-product-img">
            <img src={pro5} alt=""/>
        </div>
        <div className="jp-product-img">
            <img src={pro6} alt=""/>
        </div>
        <div className="jp-product-img">
            <img src={pro7} alt=""/>
        </div>
    </div>
}
