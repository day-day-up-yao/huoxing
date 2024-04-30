import React, { useMemo, useContext } from 'react'

import './index.scss'
import { Context } from '../Context'
import worldmin from '../images/worldmin.png'

export default () => {
    const { infolist, toSignup, getSignupinfo } = useContext(Context)
    const SignupDom = useMemo(() => {
        return (
            <div className="home-header-signup">
                <input
                    type="text"
                    onChange={(e) => {
                        const value = e.target.value
                        getSignupinfo(value)
                    }}
                    placeholder="邮箱/手机号码"
                />
                <button onClick={toSignup}>立即注册</button>
            </div>
        )
    })

    const HeaderInfo = useMemo(() => {
        return (
            <div className="home-header-info">
                <div className="home-header-info-list">
                    {infolist.map((item, index) => {
                        return (
                            <div className="home-header-info-list-item" key={index}>
                                <div className="home-header-info-list-item-text">{item.desc}</div>
                                <div className="home-header-info-list-item-desc">{item.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })
    return (
        <div className="homeheader-con">
            <div className="newheader-con">
                <div className="home-header">
                    <div className="home-header-left">
                        <h3>
                            严选矿机, 一键托管 <br /> 超低电价, 合规可信
                        </h3>
                        <div className="home-header-left-desc">新用户注册送 100T BTC算力15 天</div>
                        {SignupDom}
                    </div>
                    <div className="home-header-right">
                        <img src={worldmin} alt="" />
                    </div>
                </div>
            </div>
            {HeaderInfo}
        </div>
    )
}
