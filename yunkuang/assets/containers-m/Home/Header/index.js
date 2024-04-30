import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

import './index.scss'

import Homeimg from '../../../public/imgs/h5img/footericon/home_s.png'
import settingimg from '../../../public/imgs/h5img/other/nsetting.png'
import waiterimg from '../../../public/imgs/h5img/other/waiter.png'
import { cookiesName } from '../../../public/js/index'
import Toast from '../../../components/Toast'

export default () => {
    const dispatch = useDispatch()
    const banckFn = useCallback(() => {
        dispatch.public.userLoginout().then((res) => {
            if (res.data.success) {
                Cookies.remove(cookiesName.userId)
                Cookies.remove(cookiesName.cToken)
                window.location.href = '/'
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="home-header">
        <div className="home-header-left">
            <img src={Homeimg} alt=""/>
            <p>
                <span>MarsBit</span><br/>
                <span>Mining</span>
            </p>
        </div>
        <div className="home-header-right">
            <a href="/usercenter">
                <img src={settingimg} alt=""/>
            </a>
            <a onClick={() => {
                banckFn()
            }}>
                <img src={waiterimg} alt=""/>
            </a>
        </div>
    </div>
}
