import React, { useCallback } from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

import Header from '../../components-m/Headers'
import userimg from '../../public/imgs/h5img/other/userimg.png'
import AllBg from '../../components-m/AllBg'
import settingicon from '../../public/imgs/h5img/newicon/setting_icon.png'
import helpbackicon from '../../public/imgs/h5img/newicon/helpback_icon.png'
import aboutmclouds from '../../public/imgs/h5img/newicon/aboutmclouds.png'
import kycicon from '../../public/imgs/h5img/newicon/kyc_icon.png'
import accounticon from '../../public/imgs/h5img/newicon/account_icon.png'
import invitebackicon from '../../public/imgs/h5img/newicon/inviteback_icon.png'
import ListItem from './MyItem'
import Toast from '../../components/Toast'
import { cookiesName } from '../../public/js/index'
import useAccount from './useAccount'

import './index.scss'

export default () => {
    const { userinfo } = useAccount()
    const dispatch = useDispatch()
    const mylist = [
        {
            type: 0,
            list: [
                { icon: settingicon, text: '设置', link: '' }
            ]
        },
        {
            type: 1,
            list: [
                { icon: helpbackicon, text: '帮助与反馈', link: '' }
            ]
        },
        {
            type: 2,
            list: [
                { icon: aboutmclouds, text: '关于MarsBit', link: '' }
            ]
        }
    ]
    const myselflist = [
        {
            type: 0,
            list: [
                { icon: kycicon, text: '实名认证', link: '/newkyc' }
            ]
        },
        {
            type: 1,
            list: [
                { icon: accounticon, text: '账户安全', link: '/mycenter/accountsafety' },
                { icon: settingicon, text: '设置', link: '' }
            ]
        },
        {
            type: 2,
            list: [
                { icon: invitebackicon, text: '邀请反佣', link: '/myinvite' }
            ]
        },
        {
            type: 3,
            list: [
                { icon: helpbackicon, text: '帮助与反馈', link: '/helpcenter' }
            ]
        },
        {
            type: 4,
            list: [
                { icon: aboutmclouds, text: '关于MarsBit', link: '/aboutus' }
            ]
        }
    ]
    const loginoutFn = useCallback(() => {
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
    return <div className="mycenter">
        <Header
            leftfg
            title=""
        />
        <div className="mycenter-top">
            <img src={userimg} alt=""/>
            {userinfo ? (
                <div className="mycenter-info">
                    <p>{userinfo.mobile === '' ? userinfo.email : userinfo.mobile}</p>
                    <span>{userinfo.userId}</span>
                </div>
            ) : (
                <div className="mycenter-top-text">
                    <a href="/user/sigin">登录</a>/
                    <a href="/user/signup">注册</a>
                </div>
            )}
        </div>
        <AllBg
            children={
                <>
                    {(userinfo ? myselflist : mylist).map((item, index) => (
                        <ListItem item={item} key={index} />
                    ))}
                </>
            }
        />
        <div className="fixed-logout">
            <div className="back-login" onClick={loginoutFn}>退出登录</div>
        </div>
    </div>
}
