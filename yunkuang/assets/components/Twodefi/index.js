import React from 'react'
import './index.scss'
import { isMobile } from '../../public/js/index'
import topimg from '../../public/imgs/def/d2.png'
import botimg from '../../public/imgs/def/dfb.png'
export default () => {
    return <div className='ndf'>
        <div className='twodf'>
            <div className='df-top'>
                <div className='df-top-img'>
                    <img src={topimg} alt=""/>
                </div>
                <h3>火星财富快线一期</h3>
                {isMobile() ? (
                    <div>
                        <h4>火星补贴用户<br/>首期不赚钱，交个朋友！</h4>
                        <div className='df-tosx'>
                            <div className='df-tosx-con'>
                                <div className='df-tosx-img'>
                                    <img src={botimg} alt=""/>
                                </div>
                                <p onClick={() => {
                                    if (typeof window === 'undefined') {} else {
                                        window.location.href = '/Twodefilist'
                                    }
                                }}>我的申购</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h4>火星补贴用户，首期不赚钱，交个朋友！</h4>
                )}
            </div>
            <div className='df-con'>
                <div className='df-con-list'>
                    <div className='df-con-list-img'></div>
                    <div className='df-con-list-con'>BTC</div>
                    <ul>
                        <li>
                            <p>6.5%+</p>
                            <p>保底收益</p>
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
                    <div className='df-con-btn' onClick={() => {
                        if (typeof window === 'undefined') {} else {
                            window.location.href = '/Twodefidetail'
                        }
                    }}>开启</div>
                </div>
                <div className='df-con-list'>
                    <div className='df-con-list-img'></div>
                    <div className='df-con-list-con'>BTC</div>
                    <ul>
                        <li>
                            <p>6.5%+</p>
                            <p>保底收益</p>
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
                    <div className='df-con-btn' onClick={() => {
                        if (typeof window === 'undefined') {} else {
                            window.location.href = '/Twodefidetail'
                        }
                    }}>开启</div>
                </div>
                <div className='df-con-list'>
                    <div className='df-con-list-img'></div>
                    <div className='df-con-list-con'>BTC</div>
                    <ul>
                        <li>
                            <p>6.5%+</p>
                            <p>保底收益</p>
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
                    <div className='df-con-btn' onClick={() => {
                        if (typeof window === 'undefined') {} else {
                            window.location.href = '/Twodefidetail'
                        }
                    }}>开启</div>
                </div>
            </div>
            {isMobile() ? ('') : (
                <div className='df-tosx'>
                    <div className='df-tosx-con'>
                        <div className='df-tosx-img'>
                            <img src={botimg} alt=""/>
                        </div>
                        <p onClick={() => {
                            if (typeof window === 'undefined') {} else {
                                window.location.href = '/Twodefilist'
                            }
                        }}>我的申购</p>
                    </div>
                </div>
            )}
        </div>
    </div>
}
