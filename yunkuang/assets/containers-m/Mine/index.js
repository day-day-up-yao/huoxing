import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import axios from 'axios'
import './index.scss'
import { cookiesName } from '../../public/js/index'
import Toast from '../../components/Toast'
import mine3 from '../../public/imgs/newedition/mine3.png'
import mine4 from '../../public/imgs/newedition/mine4.png'
import mine5 from '../../public/imgs/newedition/mine5.png'
// import mine6 from '../../public/imgs/newedition/mine6.png'
import toright from '../../public/imgs/newedition/13.png'
// import Btnright from '../../public/imgs/btnicon/getfoli.png'
// import Btnlist from '../../public/imgs/btnicon/mylist.png'
import News from '../../public/imgs/btnicon/new.png'
import Getincome from '../../public/imgs/newedition/getincome.png'
import Closeimg from '../../public/imgs/newedition/close.png'
// import { array } from 'prop-types'
export default () => {
    const { t, i18n } = useTranslation()
    const linklist = [
        { name: t('h5.mine.minehash'), imgs: mine3, link: '/hashrate' },
        { name: t('h5.mine.mind'), imgs: mine4, link: '/order' },
        { name: t('h5.mine.minmoney'), imgs: mine5, link: '/property' }
        // { name: t('h5.mine.payElect'), imgs: mine6, link: '/payelectric' }
    ]
    const userlist = [
        { name: t('h5.mine.msg'), imgs: toright, link: '/announcement' },
        // { name: t('h5.mine.invit'), imgs: toright, link: '/myinvite' },
        { name: t('h5.mine.user'), imgs: toright, link: '/usercenter' },
        { name: t('h5.mine.help'), imgs: toright, link: '/helpcenter' }
    ]
    const userlists = [
        { name: t('h5.mine.invit'), imgs: toright, link: '/myinvite' },
        { name: t('h5.mine.user'), imgs: toright, link: '/usercenter' },
        { name: t('h5.mine.help'), imgs: toright, link: '/helpcenter' }
    ]
    const dispatch = useDispatch()
    const [msgflag, setmsgflag] = useState(0)
    const [getincome, setGetincome] = useState(false)
    // const [allmoney, setAllmoney] = useState(0)
    // const [earnings, setEarnings] = useState({ myTotalIncome: 0, yesterdayTotalIncome: 0, myTotalHashrate: 0 })
    const [monsee, setMonsee] = useState()
    useEffect(() => {
        dispatch.public.messageList({
            type: 0,
            curPage: 1,
            pageSize: 20
        }).then((res) => {
            if (res.code === 0) {
                if (res.data !== null) {
                    setmsgflag(res.data.noReadMsg)
                }
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.order.inconeList().then((res) => {
            if (res.code === 0) {
                const maindata = []
                const otherdata = []
                res.data.map((item) => {
                    if (item.currency !== 'BTC' && item.currency !== 'ETH' && item.currency !== 'FIL') {
                        if (item.orderIncomeVoList !== null) {
                            otherdata.push(item)
                        }
                    } else {
                        maindata.push(item)
                    }
                })
                setMonsee(maindata.concat(otherdata))
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="mine">
        <div className="mine-link">
            {linklist.map((item, index) => {
                return <div className="mine-link-btn" key={index} onClick={() => {
                    window.location.href = item.link
                }}>
                    <div className="mine-link-btn-img">
                        <img src={item.imgs} alt=""/>
                    </div>
                    <p>{item.name}</p>
                </div>
            })}
        </div>
        <div className="mine-user">
            {((i18n.language).toLowerCase().substring(0, 2) === 'zh' ? userlist : userlists).map((item, index) => {
                return <div className="mine-usee-li" key={index} onClick={() => {
                    window.location.href = item.link
                }}>
                    <p>
                        {item.name}
                        {item.name === t('h5.mine.msg') ? (
                            <span style={{ display: msgflag === 0 ? 'none' : '' }}>
                                <img src={News} alt=""/>
                            </span>
                        ) : ('')}
                    </p>
                    <div className="mine-usee-li-right">
                        <img src={item.imgs} alt=""/>
                    </div>
                </div>
            })}
        </div>
        <div className="mine-title">
            {monsee ? (
                <div>
                    {monsee.map((item, index) => {
                        return <div className="mine-title-income" key={index}>
                            <h3>{item.currency}{t('h5.mine.sx')}</h3>
                            <ul>
                                <li>
                                    <span>{t('h5.mine.ljsx')}</span>
                                    <span>{item.myTotalIncome === null ? '--' : item.myTotalIncome}</span>
                                </li>
                                <li>
                                    <span>{t('h5.mine.zrsy')}</span>
                                    <span>{item.yesterdayTotalIncome === null ? '--' : item.yesterdayTotalIncome}</span>
                                </li>
                                <li style={{ display: item.currency === 'FIL' ? '' : 'none' }}>
                                    <span>{t('h5.mine.ktq')}</span>
                                    <span>{item.myNoExtractIncome === null ? '--' : item.myNoExtractIncome}</span>
                                </li>
                                <li style={{ display: item.currency === 'FIL' ? '' : 'none' }}>
                                    <span>{t('h5.mine.scprice')}</span>
                                    <span>{item.filLockAmt === null ? '--' : Number(item.filLockAmt).toFixed(4)}</span>
                                </li>
                                <li style={{ display: item.currency === 'FIL' ? '' : 'none' }}>
                                    <span>{t('h5.mine.dyprice')}</span>
                                    <span>{item.filPledgeAmt === null ? '--' : item.filPledgeAmt}</span>
                                </li>
                                <li style={{ display: item.currency === 'FIL' ? '' : 'none' }}>
                                    <span>{t('h5.mine.aqbz')}</span>
                                    <span>{item.filSafeAmt === null ? '--' : Number(item.filSafeAmt).toFixed(4)}</span>
                                </li>
                            </ul>
                        </div>
                    })}
                </div>
            ) : ''}
            <div className="mine-title-getincome">
                <div className="mine-title-getincome-right" onClick={() => {
                    window.location.href = '/extractrecords'
                }}>
                    {/* <span>
                        <img src={Btnlist} alt=""/>
                    </span> */}
                    <p>{t('h5.mine.jl')}</p>
                </div>
                <div className="mine-title-getincome-right" onClick={() => {
                    setGetincome(true)
                }}>
                    {/* <span>
                        <img src={Btnright} alt=""/>
                    </span> */}
                    <p>{t('h5.mine.tq')}</p>
                </div>
            </div>
        </div>
        <div className='back-mine' onClick={() => {
            Cookies.remove(cookiesName.accountId)
            Cookies.remove(cookiesName.userId)
            Cookies.remove(cookiesName.auToken)
            Cookies.remove(cookiesName.cToken)
            axios({
                url: '/signup'
            }).then(function (res) {
                if (res.data.code === 0) window.location.href = '/'
            }).catch(function (err) {
                console.log(err)
                Toast.info('注销失败')
            })
        }}>
            <div>{t('h5.mine.getout')}</div>
        </div>
        <div className="hash-positionaddincom" style={{ display: getincome === true ? '' : 'none' }}>
            <div className="addincome-list">
                <h3>{t('h5.mine.tqsy')}</h3>
                {monsee ? (
                    monsee.map((item, index) => {
                        return <div className="addincome-list-con" key={index}>
                            <h4>{item.currency}</h4>
                            <div className="addincome-list-con-b">
                                <p>
                                    <span>{t('hasgrate.ktqsy')}</span>
                                    <span>{item.myNoExtractIncome === null ? '--' : item.myNoExtractIncome}</span>
                                </p>
                                <p onClick={() => {
                                    if (item.myNoExtractIncome > 0) {
                                        dispatch.order.extractAddress({
                                            currency: item.currency
                                        }).then((res) => {
                                            if (res.code === 0) {
                                                if (res.data === true) {
                                                    Toast.info(t('h5.mine.tqsucc'))
                                                    window.location.href = '/property'
                                                } else {
                                                    Toast.info(t('h5.mine.tqfail'))
                                                }
                                            } else {
                                                Toast.info(res.msg)
                                            }
                                        }).catch((err) => {
                                            console.log(err)
                                            Toast.info(t('h5.mine.tqfail'))
                                        })
                                    } else {
                                        Toast.info(t('h5.mine.zwsy'))
                                    }
                                }}>
                                    <span>
                                        <img src={Getincome} alt=""/>
                                    </span>
                                    <span>{t('h5.mine.tq')}</span>
                                </p>
                            </div>
                        </div>
                    })
                ) : ''}
                <div className="cloaseincome" onClick={() => {
                    setGetincome(false)
                }}>
                    <img src={Closeimg} alt=""/>
                </div>
            </div>
        </div>
    </div>
}
