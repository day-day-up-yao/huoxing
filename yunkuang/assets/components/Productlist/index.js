// pc端产品列表
import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
import gameover from '../../public/imgs/gameover.png'
import listout from '../../public/imgs/listout.png'
import { formatTime, isJp, Encrypt } from '../../public/js/index'
import veryspeed from '../../public/imgs/speed.png'
import Fil from '../../public/imgs/newedition/ipfsicon.png'
import Ethimg from '../../public/imgs/newedition/ethicon.png'
import Btcimg from '../../public/imgs/newedition/btcicon.png'
import CountDown from '../../components/CountDown'
import jpgameover from '../../public/imgs/jpgameover.png'
import jplistout from '../../public/imgs/jplistout.png'
export default ({ productList, productType, ratemonynumber }) => {
    const { t } = useTranslation()
    const curTime = Date.parse(new Date())
    // [0].rates.CNY
    // console.log(Decrypt('BBFE62335C28821AD2F4043B715BB0C3E45734908254666526DCFD86A605F3AF'))
    return <div>
        <div className="HomeCon">
            {Array.isArray(productList) && productList.map(function (item, index) {
                if (item.productType !== productType.type) return
                return <a className="HomeCon_C" href={`/product/${Encrypt((item.id).toString())}`} key={item.id}>
                    <div className="down">
                        <div className="HomeCon_Limg">
                            <img src={item.minerTypeInfo.pic} alt={item.name} />
                        </div>
                        <div className="HomeCon_Con">
                            <div className="left">
                                <h3>{item.name}</h3>
                                {item.incomeCurrency === 'FIL' ? (
                                    <div className="left-center">
                                        <div className="HomeCon_R_C">
                                            <p>{item.jointMiningType === 0 ? t('product.ptproduct') : item.jointMiningType === 2 ? t('product.activeproduct') : item.jointMiningType === 3 ? t('product.lhwk') : item.jointMiningType === 4 ? t('product.lhwk') : item.jointMiningType === 5 ? t('product.tgproduct') : ''}</p>
                                            <p style={{ fontSize: '16px' }}>{item.jointMiningType === 3 ? t('product.xhb') : item.jointMiningType === 4 ? t('product.ablfc') : ''}</p>
                                        </div>
                                        <div className="HomeCon_R_C">
                                            <p>{t('product.dayrate')}</p>
                                            <p style={{ fontSize: '17px' }}>{t('product.jion')}</p>
                                            {<p style={{ color: '#fff' }}>1111</p>}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="left-center">
                                        <div className="HomeCon_R_C">
                                            <p>{item.jointMiningType === 0 ? t('product.ptproduct') : item.jointMiningType === 2 ? t('product.activeproduct') : item.jointMiningType === 3 ? t('product.lhwk') : item.jointMiningType === 4 ? t('product.lhwk') : item.jointMiningType === 5 ? t('product.tgproduct') : ''}</p>
                                            <p style={{ fontSize: '16px' }}>{item.jointMiningType === 3 ? t('product.xhb') : item.jointMiningType === 4 ? t('product.ablfc') : ''}</p>
                                        </div>
                                        <div className="HomeCon_R_C">
                                            <p>{t('product.dayrate')}</p>
                                            <p>{(item.expectDailyIncome).toFixed(4)} {item.incomeCurrency}</p>
                                            {item.incomeCurrency === 'ETH' ? (
                                                isJp ? (<p>≈ ￥{(item.expectDailyIncome * ratemonynumber[1].rates.JPY).toFixed(0)}</p>) : (<p>≈ {(item.expectDailyIncome * ratemonynumber[1].rates.CNY).toFixed(0)} RMB</p>)
                                            ) : (
                                                isJp ? (<p>≈ ￥{(item.expectDailyIncome * ratemonynumber[0].rates.JPY).toFixed(0)}</p>) : (<p>≈ {(item.expectDailyIncome * ratemonynumber[0].rates.CNY).toFixed(0)} RMB</p>)
                                            )}
                                        </div>
                                    </div>
                                )}
                                <h5>
                                    {/* {item.productType === 0 && item.cycle}
                                    {item.productType === 1 && '永久产权'}
                                    {item.productType === 2 && `${item.cycle}天使用权`} */}
                                    {item.cycle === -1 ? '算力预约金' : item.productType === 1 ? t('header.nav.permanent') : item.productType === 2 ? `${item.cycle}${t('product.makeday')}` : item.cycle}
                                </h5>
                            </div>
                        </div>
                        <div className="HomeCon_right">
                            <button className="HomeCon_R_B">{t('product.buy')}</button>
                        </div>
                    </div>
                    <div className="HomeCon_C_bottom">
                        <div className="HomeCon_C_bottom_left">
                            <p>{item.minerTypeInfo.manufacturer}</p>
                            <p>{item.minerTypeInfo.desc}</p>
                        </div>
                        <div className="HomeCon_C_bottom_center">
                            {/* <div className="HomeCon_B">
                                <div className="HomeCon_Btop">
                                    <p>已购{(item.totalNumber - item.leftNumber) >= 0 ? (item.cycle === -1 ? Number(item.totalNumber - item.leftNumber) * 5 : (item.totalNumber - item.leftNumber)) : 0}{item.incomeCurrency === 'FIL' ? item.cycle === 0 ? '台' : 'T' : '台'}</p>
                                    <p>总量{item.cycle === -1 ? Number(item.totalNumber) * 5 : item.totalNumber}{item.incomeCurrency === 'FIL' ? item.cycle === 0 ? '台' : 'T' : '台'}</p>
                                </div>
                                <div className="HomeCon_Bcon">
                                    <div className="HomeCon_Bcons" style={{ width: `${(item.totalNumber - item.leftNumber) / item.totalNumber * 100}%` }}></div>
                                </div>
                            </div> */}
                            <div className="count-down-item">
                                {item.beginTime > curTime ? <div className="count-time-con"><CountDown eleIdName={`product${item.id}`} timestamp={item.beginTime} />{t('product.start')}</div> : <div className="count-time-con"><CountDown eleIdName={`product${item.id}`} timestamp={item.endTime} />{t('product.over')}</div>}
                            </div>
                        </div>
                        <div className="HomeCon_C_bottom_right">
                            <p>
                                <span className="HomeCon_C_bottom_right_frist">{t('product.yl')}</span>
                                <span className="HomeCon_C_bottom_right_spans">{isJp ? `${item.priceShow} USDT` : `￥` + item.priceShow}</span>
                            </p>
                            <p className="HomeCon_C_bottom_right_span">
                                <span>{isJp ? `${item.price} USDT` : `￥` + item.price}</span>
                                <span className="HomeCon_C_bottom_right_spanstwo">{t('product.offers')}</span>
                            </p>
                        </div>
                    </div>
                    <div className='HomeCon-over' style={{ display: item.leftNumber === 0 ? 'block' : new Date(formatTime(Number(item.endTime), 'yyyy-MM-dd hh:mm')) < new Date() ? 'block' : 'none' }}>
                        <div className="HomeCon-over-img">
                            <img src={item.leftNumber === 0 ? isJp ? jplistout : listout : new Date(formatTime(Number(item.endTime), 'yyyy-MM-dd hh:mm')) < new Date() ? isJp ? jpgameover : gameover : ''} />
                        </div>
                    </div>
                    {item.jointMiningType === 3 ? item.incomeCurrency === 'BTC' ? (
                        <div className='HomeCon-overs'>
                            <div className="HomeCon-over-imgs">
                                <img src={veryspeed} />
                            </div>
                        </div>
                    ) : '' : (item.incomeCurrency === 'BTC') ? (
                        <div className='HomeCon-overs'>
                            <div className="HomeCon-over-smalimgs">
                                <img src={Btcimg} />
                            </div>
                        </div>
                    ) : ''}
                    {(item.incomeCurrency === 'FIL') ? (
                        <div className='HomeCon-overs'>
                            <div className="HomeCon-over-smalimgs">
                                <img src={Fil} />
                            </div>
                        </div>
                    ) : ''}
                    {(item.incomeCurrency === 'ETH') ? (
                        <div className='HomeCon-overs'>
                            <div className="HomeCon-over-smalimgs">
                                <img src={Ethimg} />
                            </div>
                        </div>
                    ) : ''}
                </a>
            })}
        </div>
    </div>
}
