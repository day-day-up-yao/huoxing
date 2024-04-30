import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
import './index.scss'
export default (props) => {
    const dispatch = useDispatch()
    const [imgcode, setImgcode] = useState()
    useEffect(() => {
        dispatch.product.getBannerAdList({
            picType: 17
        }).then((res) => {
            if (res.code === 0) {
                setImgcode(res.data[0].originalPic)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="tojump">
        <img src={imgcode} />
    </div>
}
