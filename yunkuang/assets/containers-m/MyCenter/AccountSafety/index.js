import React, { useEffect, useState } from 'react'

import Header from '../../../components-m/Headers'
import AllBg from '../../../components-m/AllBg'
import ListItem from '../MyItem'
import emailicons from '../../../public/imgs/h5img/newicon/emailicons.png'
import mobileicons from '../../../public/imgs/h5img/newicon/mobileicons.png'
import googleicons from '../../../public/imgs/h5img/newicon/googleicons.png'
import bussnessicons from '../../../public/imgs/h5img/newicon/bussnessicons.png'
import loginpassicons from '../../../public/imgs/h5img/newicon/loginpassicons.png'
import equipmement from '../../../public/imgs/h5img/newicon/equipmement.png'
import backfishingicon from '../../../public/imgs/h5img/newicon/backfishingicon.png'
import pointerleft from '../../../public/imgs/h5img/other/pointleft.png'
import Accountset from '../../../components/AccountSet'
import useAccount from '../useAccount'

import './index.scss'

export default () => {
    const { userinfo } = useAccount()
    const [popupflg, setPopupflg] = useState(false)
    const [thetype, setThetype] = useState()
    const [operateway, setOperateway] = useState()
    const [veriflag, setVeriflag] = useState(false)
    const [unbindfg, setUnbindfg] = useState(false)
    const accountlist = [
        {
            type: 0,
            equipment: userinfo?.bindGA,
            list: [
                { icon: mobileicons, text: '短信验证', link: '*', state: userinfo?.mobile !== '' ? 0 : 1, name: 'mobile' },
                { icon: emailicons, text: '邮箱验证', link: '*', state: userinfo?.email !== '' ? 0 : 1, name: 'email' },
                { icon: googleicons, text: '双重身份验证器(2FA)', link: '*', state: userinfo?.bindGA ? 0 : 1, name: 'google' }
            ]
        },
        {
            type: 0,
            list: [
                { icon: loginpassicons, text: '登录密码', link: '*', state: userinfo?.bindPassword ? 0 : 1, name: 'loginpwd' },
                { icon: bussnessicons, text: '资金密码', link: '*', state: userinfo?.bindTradePwd ? 0 : 1, name: 'tradepwd' }
            ]
        },
        {
            type: 0,
            list: [
                { icon: backfishingicon, text: '反钓鱼码', link: '*', state: userinfo?.hasAntiPhishingCode ? 0 : 1, name: 'fishing' }
            ]
        },
        {
            type: 0,
            list: [
                { icon: equipmement, text: '登录设备管理', link: '/mycenter/devicemanage', assate: -2 }
            ]
        }
    ]
    useEffect(() => {
        if (userinfo?.mobile === '' || userinfo?.email === '' || !userinfo?.bindGA) {
            setVeriflag(true)
        } else {
            setVeriflag(false)
        }
    }, [userinfo])
    return <div className="account-safety">
        <Header
            title="账户安全"
            leftfg
        />
        <AllBg
            children={
                <div>
                    {accountlist.map((item, index) => (
                        <ListItem
                            item={item}
                            key={index}
                            isaccount
                            // info={userinfo}
                            clickFn={(a) => {
                                setPopupflg(a.flage)
                                setThetype(a.type)
                                setOperateway(a.setway)
                            }}
                            bindflag={unbindfg}
                        />
                    ))}
                </div>
            }
        />
        {popupflg && <div className="account-setting">
            <div className="account-set-back" onClick={() => {
                setPopupflg(false)
            }}>
                <img src={pointerleft} alt=""/>
            </div>
            <Accountset
                accountinfo={userinfo}
                type={thetype}
                way={operateway}
                islack={veriflag}
                getunbindFn={(flag) => {
                    setUnbindfg(flag)
                    setPopupflg(false)
                }}
            />
        </div>}
    </div>
}
