import React from 'react'
import { useTranslation } from 'react-i18next'
// import listout from '../../public/imgs/listout.png'
// import gameover from '../../public/imgs/gameover.png'
// import veryspeed from '../../public/imgs/speed.png'
import Fil from '../../public/imgs/newedition/ipfsicon.png'
import Ethimg from '../../public/imgs/newedition/ethicon.png'
import Btcimg from '../../public/imgs/newedition/btcicon.png'
// import jpgameover from '../../public/imgs/jpgameover.png'
// import jplistout from '../../public/imgs/jplistout.png'
import './index.scss'
import CountDown from '../../components/CountDown'
import { Encrypt } from '../../public/js/index'
const curTime = Date.parse(new Date())
export default ({ item, code }) => {
    const { t } = useTranslation()
    return item && <a className="HomeCon_C-m" href={`/product/${Encrypt(item.id)}${code ? `?chancode=${code}` : ''}`}>
        <div className="down">
            <div className="HomeCon_bifimg">
                <div className="HomeCon_Limg">
                    <img src={item.minerTypeInfo.pic} alt={item.name} />
                </div>
                <div className="HomeCon_Limg-bottom">
                    <div className="HomeCon_Limg-bottom-time">
                        {item.beginTime > curTime ? <div className="count-time-con"><CountDown eleIdName={`product${item.id}`} timestamp={item.beginTime} /><div>起售</div></div> : ''}
                    </div>
                </div>
            </div>
            <div className="HomeCon_Con">
                <div className="left">
                    <p>
                        {item.name}
                    </p>
                </div>
                <div className="left-con">
                    {item.jointMiningType === 7 ? (
                        <div className="HomeCon_R_C">
                            <p>{t('newpage.newproduct.producttype')}</p>
                            <div className="title-product">{item.jointMiningTypeName}</div>
                        </div>
                    ) : (
                        <div className="HomeCon_R_C">
                            <p>{t('product.put')}({item.productType === 1 ? '3 years' : item.productType === 2 ? item.cycle + ' days' : ''})</p>
                            <p>{item.productType === 1 ? (item.expectDailyIncome * 3 * 365).toFixed(2) : item.productType === 2 ? (item.expectDailyIncome * item.cycle).toFixed(2) : ''} <span>{item.incomeCurrency}</span></p>
                        </div>
                    )}
                    {item.jointMiningType === 7 ? (
                        <div className="HomeCon_R_C_R">
                            <p>{t('newpage.newproduct.yjrcc')}</p>
                            <p>{item.expectDailyIncome} {item.incomeCurrency}</p>
                        </div>
                    ) : (
                        item.incomeCurrency === 'FIL' ? (
                            <div className="HomeCon_R_C_R">
                                <p></p>
                                <p></p>
                            </div>
                        ) : (
                            <div className="HomeCon_R_C_R">
                                <p>{t('product.Elec')}</p>
                                <p>{(item.minerTypeInfo.electricFee).toFixed(2)}U/度</p>
                            </div>
                        )
                    )}
                </div>
                <div className="left-bottom">
                    <div className="left-bottom-top">
                        <div className="left-bottom-cons">
                            <p>{item.priceClean + ' ' + item.priceCurrency}</p>
                        </div>
                        {/* <div className="left-bottom-con">
                                <p>已售 {item.cycle === -1 ? Number(item.totalNumber - item.leftNumber) * 5 : (item.totalNumber - item.leftNumber)}{item.incomeCurrency === 'FIL' ? item.cycle === 0 ? '台' : 'T' : '台'}</p>
                            </div> */}
                    </div>
                    <div className="left-bottom-title">
                        <span>
                            {item.cycle === -1 ? '算力预约金' : item.productType === 1 ? t('header.nav.permanent') : item.productType === 2 ? `${item.cycle}${t('product.makeday')}` : item.cycle}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* {item.leftNumber === 0 ? (
            <div className='HomeCon-over'>
                <div className="HomeCon-over-img">
                    {item.leftNumber === 0 ? (
                        <img src={isJp ? jplistout : listout} />
                    ) : item.endTime < Date.parse(new Date()) ? (
                        <img src={isJp ? jpgameover : gameover} />
                    ) : ''}
                </div>
            </div>
        ) : item.endTime < Date.parse(new Date()) ? (
            <div className='HomeCon-over'>
                <div className="HomeCon-over-img">
                    {item.leftNumber === 0 ? (
                        <img src={isJp ? jplistout : listout} />
                    ) : item.endTime < Date.parse(new Date()) ? (
                        <img src={isJp ? jpgameover : gameover} />
                    ) : ''}
                </div>
            </div>
        ) : ''} */}
        {item.incomeCurrency === 'BTC' ? (
            <div className='HomeCon-overs'>
                <div className="HomeCon-over-smallimgs">
                    <img src={Btcimg} />
                </div>
            </div>) : ''}
        {item.incomeCurrency === 'FIL' ? (
            <div className='HomeCon-overs'>
                <div className="HomeCon-over-smallimgs">
                    <img src={Fil} />
                </div>
            </div>
        ) : ''}
        {item.incomeCurrency === 'ETH' ? (
            <div className='HomeCon-overs'>
                <div className="HomeCon-over-smallimgs">
                    <img src={Ethimg} />
                </div>
            </div>
        ) : ''}
    </a>
}
