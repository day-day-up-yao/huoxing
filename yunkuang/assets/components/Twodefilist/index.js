import React from 'react'
import { isMobile } from '../../public/js/index'
import './index.scss'
export default () => {
    return <div className='twodflist'>
        <div className='twodflist-con'>
            <div className='twodflist-top'>
                <div className='twodflist-top-img'>
                    <img src='' alt=""/>
                </div>
                <h3>Sushi</h3>
                {isMobile() ? (
                    <h4>存等值ETH和USDT<br/>获得高额Sush</h4>
                ) : (
                    <h4>存等值ETH和USDT，获得高额Sush</h4>
                )}
            </div>
            <div className='twodflist-sxli'>
                <div className='twodflist-con-list'>
                    <div className='twodflist-con-list-img'></div>
                    <div className='twodflist-con-list-con'>
                        <span style={{ color: '#4DA58C' }}>351.6</span>
                        <span>BTC</span>
                    </div>
                    <div className='twodflist-con-list-con'></div>
                    <div className='twodflist-con-btn'>收获</div>
                </div>
                <div className='twodflist-con-list'>
                    <div className='twodflist-con-list-img'></div>
                    <div className='twodflist-con-list-con'>
                        <span>351.5</span>
                        <span>ETH</span>
                    </div>
                    <div className='twodflist-con-list-con'>
                        <span>53414113.6</span>
                        <span>USDT</span>
                    </div>
                    <div className='twodflist-con-btn'>投入</div>
                </div>
            </div>
        </div>
        <div className='twodflist-con'>
            <div className='twodflist-top'>
                <div className='twodflist-top-img'>
                    <img src='' alt=""/>
                </div>
                <h3>1inch</h3>
                {isMobile() ? (
                    <h4>存等值ETH和USDT<br/>获得高额Sush</h4>
                ) : (
                    <h4>存等值ETH和USDT，获得高额Sush</h4>
                )}
            </div>
            <div className='twodflist-sxli'>
                <div className='twodflist-con-list'>
                    <div className='twodflist-con-list-img'></div>
                    <div className='twodflist-con-list-con'>
                        <span style={{ color: '#4DA58C' }}>351.6</span>
                        <span>BTC</span>
                    </div>
                    <div className='twodflist-con-list-con'></div>
                    <div className='twodflist-con-btn'>收获</div>
                </div>
                <div className='twodflist-con-list'>
                    <div className='twodflist-con-list-img'></div>
                    <div className='twodflist-con-list-con'>
                        <span>351.5</span>
                        <span>ETH</span>
                    </div>
                    <div className='twodflist-con-list-con'>
                        <span>53414113.6</span>
                        <span>USDT</span>
                    </div>
                    <div className='twodflist-con-btn'>投入</div>
                </div>
            </div>
        </div>
    </div>
}
