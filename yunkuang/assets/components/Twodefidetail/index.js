import React, { useState, useEffect, useCallback } from 'react'
import cookie from 'js-cookie'
import deimg from '../../public/imgs/def/de1.png'
import timeimg from '../../public/imgs/def/detime.png'
import timezo from '../../public/imgs/def/timezo.png'
import htimezo from '../../public/imgs/def/htimezo.png'
import { isMobile } from '../../public/js/index'
import Toast from '../../components/Toast'
import './index.scss'
export default () => {
    const [flag, setFlag] = useState(false)
    const [tologin, setTologin] = useState(false)
    const [agree, setAgree] = useState(false)
    useEffect(() => {
        if (cookie.get('c_token')) {
            setTologin(true)
        } else {
            setTologin(false)
        }
    }, [])
    const handelTosg = useCallback(() => {
        if (tologin === false) {
            window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
            return
        }
        if (agree === false) {
            Toast.info('请先同意火星财富快线协议')
        }
    }, [tologin, agree])
    return <div className="newdfdetail">
        <div className="dfdetail-con">
            <div className="dfdetail-con-top">
                <div className="dfdetail-con-top-img">
                    <img src={deimg} alt=""/>
                </div>
                <h3>Sushi</h3>
                {isMobile() ? (
                    <h4>存等值ETH和USDT<br/>获得高额Sushi</h4>
                ) : (
                    <h4>存等值ETH和USDT，获得高额Sushi</h4>
                )}
            </div>
            <div className="dfdetail-con-nav">
                <div className="dfdetail-con-nav-l">
                    {isMobile() ? ('') : (
                        <h4>投ETH和USDT赚Sushi</h4>
                    )}
                    <ul>
                        <li>
                            <p style={{ color: '#4DA58C' }}>315%</p>
                            <p>昨日收益</p>
                        </li>
                        <li>
                            <p>ETH、USDT</p>
                            <p>投入</p>
                        </li>
                        <li>
                            <p>7天</p>
                            <p>周期</p>
                        </li>
                    </ul>
                    <div className="dfdetail-con-nav-l-img"></div>
                </div>
                <div className="dfdetail-con-nav-r">
                    <div className="dfdetail-con-nav-r-top">
                        <div className="dfdetail-con-nav-r-top-l">
                            <img src={timeimg} alt=""/>
                        </div>
                        <div className="dfdetail-con-nav-r-top-r">开始申购倒计时</div>
                    </div>
                    <div className="dfdetail-con-nav-r-time">
                        <div className="dfdetail-con-nav-r-time-l">
                            <div className="dfdetail-con-nav-r-time-l-l">03</div>
                            <p>小时</p>
                        </div>
                        <div className="dfdetail-con-nav-r-time-l">
                            <div className="dfdetail-con-nav-r-time-l-l">37</div>
                            <p>分</p>
                        </div>
                        <div className="dfdetail-con-nav-r-time-l">
                            <div className="dfdetail-con-nav-r-time-l-l">52</div>
                            <p>秒</p>
                        </div>
                    </div>
                    <div className="dfdetail-con-nav-r-inp">
                        <input type="text" placeholder='458213'/>
                        <p>份</p>
                    </div>
                    <div className="dfdetail-con-nav-r-num">
                        <div className="dfdetail-con-nav-r-num-l">
                            <span>可申购资金</span>
                            <span> 15USDT</span>
                        </div>
                        <div className="dfdetail-con-nav-r-num-l">
                            <span>总投入</span>
                            <span> 10USDT</span>
                        </div>
                    </div>
                    <div className="dfdetail-con-nav-r-btn" onClick={handelTosg}>{tologin === true ? '立即申购' : '登录'}</div>
                    <div className="dfdetail-con-nav-r-bottom">
                        <input type="checkbox" onChange={(e) => {
                            setAgree(e.target.checked)
                        }}/>
                        <p>
                            <span>我已阅读并同意</span>
                            <span onClick={() => {
                                setFlag(true)
                            }}>《火星财富快线风险协议》</span>
                        </p>
                    </div>
                </div>
            </div>
            {isMobile() ? (
                <div className="dfdetail-con-sjz">
                    <img src={htimezo} alt=""/>
                </div>
            ) : (
                <div className="dfdetail-con-sjz">
                    <img src={timezo} alt=""/>
                </div>
            )}
            <div className="dfdetail-con-title">
                <h3>交易规则</h3>
                <div className="dfdetail-con-title-font">
                    <div className="dfdetail-con-title-font">·认购币种：本次认购需要ETH和USDT一起参与认购，每认购1ETH，需要同时按比例认购440USDT（基于认购 当天价格而定），ETH和USDT在产品到期后会根据挖矿的实际剩余数量返还到账户 <br/>·周期：7天，可能根据挖矿收益情况提前终止，如果提前终止，收益会提前发放 <br/>·收益：SUSHI挖矿收益将每天9：00分配一次，收取挖矿收益的 10% 作为服务费。</div>
                </div>
            </div>
            <div className="dfdetail-con-title">
                <h3>风险提示</h3>
                <div className="dfdetail-con-title-font">提示：该流动性挖矿产品为创新型数字货币金融衍生品，火星DeFi机枪池不承担合约漏洞、项目方跑路等第三方不可控风险带来的资产损失。</div>
            </div>
        </div>
        <div className="newdfdetail-position" style={{ display: flag === true ? '' : 'none' }}>
            <div className="newdfdetail-position-title">
                <h3>火星财富快线风险协议</h3>
                <p>Cococoin.com推出火星财富快线服务，为Cococoin.com用户提供闲置数字资产管理服务。</p>
                <p>Cococoin.com为火星财富快线用户转入火星财富快线的资产提供风险管理服务，依托Cococoin严格的风控体系，充分保障用户火星财富快线资产安全，用户安心享收益。</p>
                <p>用户在使用火星财富快线服务时，即无条件授权Cococoin.com将理财收益按照平台的规则进行合理的分配和发放。</p>
                <p>用户使用火星财富快线服务时，应当遵守国家相关法律，保证资产的来源合法合规。</p>
                <p>用户使用火星财富快线服务时，应当充分认识到数字资产投资的风险，谨慎操作，量力而行。</p>
                <p>用户同意在Cococoin.com所进行的所有投资操作代表其真实投资意愿，并无条件接受投资决策所带来的潜在风险和收益。</p>
                <p>由于第三方交易所跑路、倒闭等不可抗力因素，造成火星财富快线资金损失，Cococoin.com平台不承担任何责任。目前资金所在套利交易所为5家：OKEx，Binance，Huobi，BitMex，Deribit.</p>
                <p>由于网络延迟，计算机系统故障及其他可能的不可抗拒因素，可能导致火星财富快线服务的执行迟缓，暂停，中止或偏差，Cococoin.com将尽力保证但不承诺火星财富快线服务执行系统运行的稳定和有效，但由于上述因素导致的火星财富快线服务的最终执行结果与客户预期不同，Cococoin.com不承担任何责任。</p>
                <div className="newdfdetail-position-title-close" onClick={() => {
                    setFlag(false)
                }}>关闭</div>
            </div>
        </div>
    </div>
}
