import React, { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { formatTime, numToFloor } from '../../public/js/index'
import delist from '../../public/imgs/def/delist.png'
import twodefilist from '../../public/imgs/def/twodefilist.png'
import './index.scss'
export default () => {
    // console.log(numToFloor(0.123456, 5))
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [datas, setDatas] = useState([])
    useEffect(() => {
        document.title = t('defi.defititle')
        dispatch.product.prodOederlist({
            // uid: 637457908124376320
            uid: cookie.get('user_id')
        }).then((res) => {
            if (res.status === 'ok') {
                if (res.data !== null) {
                    setDatas(res.data)
                }
            }
        })
    }, [])
    return <div className='dflist'>
        {datas.length > 0 ? (
            datas.map((item, index) => {
                return <div className='dflist-con' key={index}>
                    <div className='dflist-top'>
                        <div className='dflist-top-img'>
                            <img src={item.logo_base64} alt=""/>
                        </div>
                        <h4>{item.prod_name}</h4>
                    </div>
                    <div className='dflist-sxli'>
                        <div className='dflist-con-list'>
                            <div className='dflist-con-list-img'>
                                <img src={delist} alt=""/>
                            </div>
                            <div className='dflist-con-list-con'>
                                <div className='dflist-con-list-con-b'>
                                    <div className='dflist-con-list-con-b-l'>
                                        <p>{item.eth20 === null ? (Number(item.real_revenue) !== 0 ? numToFloor(Number(item.real_revenue) * 100, 2) + '%' : '--') : item.eth20}</p>
                                        <p>{t('defilist.actual')}</p>
                                    </div>
                                    <div className='dflist-con-list-con-b-l'>
                                        <p>{item.eth20 === null ? (Number(item.profit) !== 0 ? Number(item.profit).toFixed(6) : '--') : item.eth20}</p>
                                        <p>{t('defilist.sye')}</p>
                                    </div>
                                </div>
                                <div className='dflist-con-list-con-b'>
                                    <div className='dflist-con-list-con-b-l'>
                                        <p>{item.eth20 === null ? (item.revenue) : item.eth20}</p>
                                        <p>{t('defilist.mustyears')}</p>
                                    </div>
                                    <div className='dflist-con-list-con-b-l'>
                                        <p>{item.eth20 === null ? (formatTime(item.settlement, 'yyyy/MM/dd')) : item.eth20}</p>
                                        <p>{t('defilist.dztime')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='dflist-con-list'>
                            <div className='dflist-con-list-img'>
                                <img src={twodefilist} alt=""/>
                            </div>
                            <div className='dflist-con-list-select'>
                                <span>{item.amount}</span>
                                <span> {item.pay_token}</span>
                            </div>
                            <div className='dflist-con-btn'>{t('defilist.touru')}</div>
                        </div>
                    </div>
                </div>
            })
        ) : (
            <div className='dflist-con'>
                <div className='dflist-sxli'>
                    <div className='dflist-con-list'>
                        <div className='dflist-con-list-img'>
                            <img src={delist} alt=""/>
                        </div>
                        <div className='dflist-con-list-con'>
                            <div className='dflist-con-list-con-b'>
                                <div className='dflist-con-list-con-b-l'>
                                    <p>--</p>
                                    {/* <p>50%</p> */}
                                    <p>{t('defilist.actual')}</p>
                                </div>
                                <div className='dflist-con-list-con-b-l'>
                                    <p>--</p>
                                    {/* <p>1000 FIL</p> */}
                                    <p>{t('defilist.sye')}</p>
                                </div>
                            </div>
                            <div className='dflist-con-list-con-b'>
                                <div className='dflist-con-list-con-b-l'>
                                    <p>--</p>
                                    {/* <p>50%</p> */}
                                    <p>{t('defilist.mustyears')}</p>
                                </div>
                                <div className='dflist-con-list-con-b-l'>
                                    <p>--</p>
                                    {/* <p>2022-01-08</p> */}
                                    <p>{t('defilist.jstime')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dflist-con-list'>
                        <div className='dflist-con-list-img'>
                            <img src={twodefilist} alt=""/>
                        </div>
                        <div className='dflist-con-list-select'>
                            <span>-</span>
                            <span> -</span>
                            {/* <span>2000</span>
                            <span> FIL</span> */}
                        </div>
                        <div className='dflist-con-btn'>{t('defilist.touru')}</div>
                    </div>
                </div>
            </div>
        )}
    </div>
}
