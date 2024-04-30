import React from 'react'
import './index.scss'
import IconLog from '../images/bottom-log.png'
export default () => {
    return (
        <div className="register-box">
            <div className="register">
                <div className="bottom-down top">
                    <div className="b-logo">
                        <p><img src={IconLog} alt="" /></p>
                        <p>
                            <span>MarsBit</span>
                            <br/>
                            <span>区块链信息及金融服务平台</span>
                        </p>
                    </div>
                    <a className="b-down">立即下载</a>
                </div>
                <div className="register-present">
                    <p className="nst-num">注册你将获得：<span>33333</span>积分</p>
                    <ul>
                        <li><input id="registerPhone" type="text" maxLength="11" placeholder="请输入手机号" /></li>
                        <li><input id="registerCode" type="text" placeholder="请输入验证码" /><a id="registerCodeBtn">获取验证码</a>
                        </li>
                        <li><input id="registerPassw" type="password" placeholder="请输入密码" /></li>
                        <li><input id="registerRePassw" type="password" placeholder="请确认密码" /></li>
                    </ul>
                    <div className="register-hint" id="registerHint"></div>
                    <div className="register-submit" id="registerBtn">立即注册</div>
                </div>
                <div className="down-hint" style={{ display: 'none' }}>
                    <div className="hint-top">
                        <h5>注册成功</h5>
                        <p>下载App查看所获积分</p>
                    </div>
                    <div className="hint-bottom">
                        <p className="close">确定</p>
                        <a className="down-app">下载app</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
