import React from 'react'
import { formatTime } from '../../../public/js/index'
import Fil from '../../../public/imgs/newedition/ipfsicon.png'
import Ethimg from '../../../public/imgs/newedition/ethicon.png'
import Btcimg from '../../../public/imgs/newedition/btcicon.png'
import './index.scss'
export default ({ detaillist, setFlagd }) => {
    return <div className="detail-list">
        <div className="detail-list-con">
            <div className="pledgelist-top">
                <h3>质押订单明细</h3>
                <div className="lend-position-con-close" onClick={() => { setFlagd(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div className="pledgelist-con">
                {detaillist.length > 0 ? (
                    detaillist.map((item, index) => {
                        return <div className="pledgelist-con-item" key={index}>
                            <div className="pledgelist-con-item-r">
                                <div className="pledgelist-con-item-r-l">
                                    <img src={item.minerTypePic} alt=""/>
                                    <div className="pledgelist-con-item-l-posit">
                                        {item.incomeCurrency === 'BTC' ? (
                                            <img src={Btcimg} alt=""/>
                                        ) : item.incomeCurrency === 'ETH' ? (
                                            <img src={Ethimg} alt=""/>
                                        ) : (
                                            <img src={Fil} alt=""/>
                                        )}
                                    </div>
                                </div>
                                <div className="pledgelist-con-item-r-r">
                                    <div>
                                        <h2 >{item.minerTypeName}</h2>
                                        <h3>{item.productName}</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <p >{item.incomeCurrency === 'ETH' ? (item.hashrateNum * 1000000 + 'M') : (item.hashrateNum + 'T')}</p>
                                            <p>算力</p>
                                        </li>
                                        <li>
                                            <p >{item.productType === 1 ? '永久产权' : formatTime(item.effectiveEndTime, 'yyyy-MM-dd')}</p>
                                            <p>到期日</p>
                                        </li>
                                        <li>
                                            <p >{item.pledgeEndTime > 0 ? formatTime(item.pledgeEndTime, 'yyyy-MM-dd') : '未质押'}</p>
                                            <p>到期质押日</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    })
                ) : ('')}
            </div>
        </div>
    </div>
}
