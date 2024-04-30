import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './index.scss'

import Toast from '../../Toast'

export default (props) => {
    const { num } = props
    const dispatch = useDispatch()
    const [info, setInfo] = useState()
    useEffect(() => {
        dispatch.public.userAgreement({
            type: num
        }).then((res) => {
            if (res.code === 0) {
                setInfo(res.data.content)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [num])
    return <div className="product-agreement">
        <div className="agreement-center">
            {info && <div dangerouslySetInnerHTML={{ __html: info.replace(/\n/g, '</br>') }} />}
        </div>
    </div>
}
