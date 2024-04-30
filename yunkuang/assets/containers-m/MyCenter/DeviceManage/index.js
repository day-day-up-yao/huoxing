import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../../../components-m/Headers'
import AllBg from '../../../components-m/AllBg'
import MyItem from '../MyItem'
import deviceimg from '../../../public/imgs/h5img/newicon/deviceicon.png'
import Line from '../../../components-m/Line'
import useAccount from '../useAccount'
import Toast from '../../../components/Toast'
import { formatTime } from '../../../public/js/index'

import './index.scss'

export default () => {
    const { userinfo } = useAccount()
    const dispatch = useDispatch()
    const [history, setHistory] = useState()
    useEffect(() => {
        dispatch.public.loginHistory({
            pageNum: 1,
            pageSize: 20
        }).then((res) => {
            if (res.code === 0) {
                setHistory(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    const topInfo = {
        type: 0,
        equipment: userinfo?.multiDeviceLogin,
        list: [
            { icon: deviceimg, text: '多端在线', link: '*', name: 'device' }
        ]
    }
    return <div>
        <Header
            title="登录设备管理"
            leftfg
        />
        <AllBg
            children={
                <div>
                    {userinfo && <MyItem item={topInfo} isaccount />}
                    <div className="device-manage">
                        <h3>您的设备</h3>
                        <h4>您目前已在以下设别登录了该账号</h4>
                        <Line/>
                        <div className="device-manage-list">
                            <div className="device-manage-list-item">
                                <div className="device-item-text">
                                    <div>iPhone12</div>
                                    <div className="text-item">2021-02-12 12:50:12</div>
                                </div>
                                <div className="device-back">
                                    <span>本设备</span>
                                </div>
                            </div>
                            <div className="device-manage-list-item">
                                <div className="device-item-text">
                                    <div>iPhone12</div>
                                    <div className="text-item">2021-02-12 12:50:12</div>
                                </div>
                                <div className="device-back">
                                    <span className="device-back-to">退出</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="device-manage history">
                        <h3>登录历史</h3>
                        <Line/>
                        <div className="login-history-list">
                            {history && history.map((item, index) => (
                                <div className="history-list-item" key={index}>
                                    <div className="history-list-item-left">
                                        <p>{item.deviceName}</p>
                                        <div className="item-little">{item.loginTime && formatTime(item.loginTime, 'yyyy-MM-dd hh:mm:ss')}</div>
                                    </div>
                                    <div className="history-list-item-right">
                                        <div className="item-little">{item.ip}</div>
                                        <div className="item-little">{item.location}</div>
                                    </div>
                                </div>
                            ))}
                            <div className="history-list-item">
                                <div className="history-list-item-left">
                                    <p>Pixel6</p>
                                    <div className="item-little">2021-02-12 12:50:12</div>
                                </div>
                                <div className="history-list-item-right">
                                    <div className="item-little">181.120.23.90</div>
                                    <div className="item-little">中国 北京</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    </div>
}
