import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Cookie from 'js-cookie'
import moment from 'moment'
// import pointdown from '../../public/imgs/def/pointdown.png'
import rightbtn from '../../public/imgs/btnicon/lendright.png'
// import czimg from '../../public/imgs/def/ydcz.png'
// import ydbuy from '../../public/imgs/def/ydbuy.png'
// import ydsgjl from '../../public/imgs/def/ydsgjl.png'
// import jpczimg from '../../public/imgs/def/jpydcz.png'
// import jpydbuy from '../../public/imgs/def/jpydbuy.png'
// import jpydsgjl from '../../public/imgs/def/jpydsgjl.png'
import Toast from '../../components/Toast'
import Sense from '../../components/Sense'
import Record from './Record'
import Agreement from './Agreement'
import { isCoco, isMobile, isJp } from '../../public/js/index'
import './index.scss'
export default () => {
    const { projectCode } = useParams()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [depoldetail, setDepoldetail] = useState()
    // const { depoldetail } = useSelector((state) => ({
    //     depoldetail: state.product.cbbproductdetail
    // }))
    // const [lead, setLaed] = useState(false)
    // const [ydnum, setYdnum] = useState(1)
    const [baseinfo, setbaseInfo] = useState({ purchaseTokenName: '' })
    const inptnumber = useRef()
    const senseEleSms = useRef()
    const [close, setClose] = useState(false)
    const [check, setCheck] = useState()
    const [tologin, setTologin] = useState()
    const [inptnum, setInptnum] = useState('')
    const [mymoney, setMymoney] = useState(0)
    const [hours, setHours] = useState('00')
    const [minute, setMinute] = useState('00')
    const [second, setSecond] = useState('00')
    const [progressstatus, setProgressStatus] = useState(1)
    const [agreeflag, setAgreeflag] = useState(false)
    const [sureflag, setSureflag] = useState(false)
    const [recordlist, setRecordlist] = useState({
        'prodhead': {
            'logo': '',
            'title': '',
            'aor-type': 0,
            'aor-rate': 0,
            'distributes': 0,
            'prod-code': '',
            'primitive': '',
            timepoints: ''
        },
        'rrevenue': {
            'total-invest': 0,
            'total-interest': 0,
            'purch-time': 0,
            'prod-code': ''
        },
        timenodelist: [],
        'time-nodes': {
            'time-node1': '',
            'time-node2': '',
            'time-node3': '',
            'time-node4': '',
            'time-node5': '',
            'time-node6': ''
        }
    })
    useEffect(() => {
        dispatch.product.cbbDetail({
            prodcode: projectCode
        }).then((res) => {
            console.log(res)
            setDepoldetail(res.data)
            countFun(res.data.timeNodes)
            if (res.data.timeNodes.timeNode1 > Date.parse(new Date())) {
                setProgressStatus(1)
            } else if (res.data.timeNodes.timeNode2 < Date.parse(new Date())) {
                setProgressStatus(3)
            } else {
                setProgressStatus(2)
            }
            dispatch.product.baseicInfo({
                projectCode: projectCode
            }).then((res) => {
                setbaseInfo(res)
                window.localStorage.setItem('projectId', res.projectId)
                if (Cookie.get('c_token')) {
                    dispatch.product.checkC2cBanlance({
                        token_ids: res.data.token
                    }).then((ress) => {
                        if (ress.length > 0) {
                            setMymoney(ress[0].free)
                        } else {
                            setMymoney(0)
                        }
                    })
                }
            })
        })
        // if (typeof window !== 'undefined') {
        //     if (window.localStorage.getItem('guide')) {
        //         setLaed(true)
        //         setYdnum(4)
        //     }
        // }
        if (Cookie.get('c_token')) {
            setTologin(false)
        } else {
            setTologin(true)
        }
    }, [])
    const countFun = useCallback(
        (res) => {
            // const end = new Date('2020-09-10 00:00:00')
            // if (res.start > Date.parse(new Date())) {
            //     remaining = new Date(moment(res.end * 1).format('YYYY/MM/DD HH:mm:ss')) - new Date()
            // } else {
            //     setProgressStatus(2)
            // }
            // if (depoldetail.token === 'BTC') {
            //     var end = new Date('2020-12-15 22:00:00'.replace(/-/g, '/'))
            // } else {
            //     end = new Date(moment(res['time-node2'] * 1).format('YYYY/MM/DD HH:mm:ss'))
            // }
            const end = new Date(moment(res['time-node2'] * 1).format('YYYY/MM/DD HH:mm:ss'))
            const ends = new Date(moment(res['time-node1'] * 1).format('YYYY/MM/DD HH:mm:ss'))
            // const ends = new Date('2020-09-08 15:40:00')
            // var remaining = end - new Date()
            // if (Date.parse(new Date()) < ends) {
            //     setStarttimes(false)
            //     remaining = ends - new Date()
            // } else {
            //     setStarttimes(true)
            //     remaining = end - new Date()
            // }
            // let now_time =  new Date()
            // let now_time = new Date()
            // var remaining = (this.state.timeStart === true ? end : ends) - new Date()
            var remaining = (res['time-node1'] < Date.parse(new Date()) ? end : ends) - new Date()
            const timer = setInterval(() => {
                // 防止出现负数
                if (remaining > 1000) {
                    remaining -= 1000
                    let day = Math.floor((remaining / 1000 / 3600) / 24)
                    let hour = Math.floor((remaining / 1000 / 3600) % 24) + 24 * day
                    let minute = Math.floor((remaining / 1000 / 60) % 60)
                    let second = Math.floor(remaining / 1000 % 60)
                    setHours(hour < 10 ? '0' + hour : hour)
                    setMinute(minute < 10 ? '0' + minute : minute)
                    setSecond(second < 10 ? '0' + second : second)
                } else {
                    clearInterval(timer)
                }
            }, 1000)
        }, []
    )
    const handleToinput = useCallback((e) => {
        if (/^\d+$/.test(e.target.value)) {
            setInptnum(e.target.value)
        } else {
            inptnumber.current.value = ''
        }
        if (inptnumber.current.value === '') {
            setInptnum(0)
        }
    }, [])
    const handleTobuy = useCallback(() => {
        if (depoldetail.prodetail.status === 1) {
            return
        }
        // if (ydnum === 2) {
        //     return
        // }
        if (tologin) {
            if (isCoco()) {
                if (isMobile()) {
                    window.location.href = `/m/login?redirect= ${encodeURIComponent(window.location.href)}`
                } else {
                    window.location.href = `/login?redirect= ${encodeURIComponent(window.location.href)}`
                }
            } else {
                window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
            }
            return
        }
        if (!check) {
            Toast.info(t('record.xieyi'))
            return
        }
        if (inptnum === '' || inptnumber.current.value === '') {
            Toast.info(t('record.buynum'))
            return
        }
        setSureflag(true)
    }, [tologin, check, inptnum])
    const handleSure = useCallback(() => {
        senseEleSms.current.sense()
    })
    const senseSuccessSms = useCallback((senseResId) => {
        let values = {}
        values.captcha_response = senseResId
        values.captcha_id = '1b140c59a6da8e906cb4b7ca6687e075'
        creatOrder(values)
    })
    const creatOrder = useCallback((values) => {
        dispatch.product.ieoOrder({
            projectCode: depoldetail.prodetail['prod-code'],
            projectId: window.localStorage.getItem('projectId'),
            amount: inptnumber.current.value,
            clientOrderId: new Date().getTime(),
            ...values
        }).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
                return
            }
            if (res.success === true) {
                Toast.info(t('record.buysucc'))
                dispatch.product.cbbBuy({
                    uid: Cookie.get('user_id'),
                    prodCode: depoldetail.prodetail['prod-code'],
                    clientId: window.localStorage.getItem('projectId'),
                    shares: inptnumber.current.value
                }).then((res) => {
                    if (res.status === 'ok') {
                        handleTorecord()
                        setSureflag(false)
                        inptnumber.current.value = ''
                        setInptnum(0)
                    }
                })
            }
        })
    })
    const handleTorecord = useCallback(() => {
        dispatch.product.cbbRevenue({
            uid: Cookie.get('user_id'),
            prodcode: depoldetail.prodetail.prodCode
        }).then((res) => {
            if (res.status === 'ok') {
                if (res.data === null) {
                    Toast.info(t('record.notjl'))
                } else {
                    setRecordlist(res.data)
                    setClose(true)
                }
            } else {
                Toast.info(res.msg)
            }
        })
    })
    // const handleSetguide = useCallback(() => {
    //     setYdnum(4)
    //     setLaed(true)
    //     window.localStorage.setItem('guide', 'sure')
    // })
    return <>
        {
            depoldetail && <div className="depdetail" style={{ background: depoldetail.bcolor }}>
                <div className="depdetail-logo">
                    <img src={depoldetail.prodetail.headPic} alt=""/>
                    <div className="depdetail-top">
                        <div className="depdetail-top-l">{(progressstatus === 2 || progressstatus === 1) ? t('record.hs') : t('record.over')}</div>
                        <div className='depdetail-top-h'>
                            <span>{hours} </span>
                            <span>{t('record.hour')}</span>
                        </div>:
                        <div className='depdetail-top-h'>
                            <span>{minute} </span>
                            <span>{t('record.mut')}</span>
                        </div>:
                        <div className='depdetail-top-h'>
                            <span>{second} </span>
                            <span>{t('record.mint')}</span>
                        </div>
                        <div className="depdetail-top-r">{progressstatus === 2 ? t('record.js') : progressstatus === 1 ? t('record.kf') : '' }</div>
                    </div>
                </div>
                <div className="depdetail-center" style={{ background: `url(` + depoldetail.prodetail['body-pic'] + `)` + ` ` + `no-repeat` + ` ` + `center`, backgroundSize: '100% 100%', paddingBottom: (depoldetail.bcolor === '#141E47' || depoldetail.bcolor === '#f18002') ? '5px' : '' }}>
                    <div className="depdetail-con">
                        <div className="depdetail-con-top">
                            <img src={depoldetail.prodhead.logo} alt=""/>
                        </div>
                        <h3>{depoldetail.prodhead.title}</h3>
                        {isJp ? (
                            <div className='depdetail-con-jpsm'>
                                <span>四半期ごとに元本と利益をリターン</span>
                            </div>
                        ) : (
                            <div className='depdetail-con-sm'>
                                <span>{t('record.zx')}</span>
                                <span>{t('record.ajdf')}</span>
                                <span>{t('record.zero')}</span>
                            </div>
                        )}
                        <div className={isJp ? 'depdetail-con-jpannual' : 'depdetail-con-annual'}>
                            <p>
                                <span>{depoldetail.prodhead.aorRate * 100}</span>
                                <span>%</span>
                            </p>
                            <p>{t('record.gdnh')}</p>
                        </div>
                        <div className="depdetail-con-num">
                            <div className="depdetail-con-num-l">
                                <span>{t('record.all')}</span>
                                <span>{depoldetail.prodetail.totalQuota}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                            </div>
                            <div className="depdetail-con-num-l" style={{ width: isJp ? '37%' : '' }}>
                                <span>{t('record.qt')}</span>
                                <span>{depoldetail.prodetail.underLimit}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                            </div>
                            <div className="depdetail-con-num-l">
                                <span>{t('record.drxe')}</span>
                                <span>{depoldetail.prodetail.perLimit}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                            </div>
                        </div>
                        <div className="depdetail-con-inpt">
                            <input type="text" placeholder={baseinfo.minPurchaseLimit ? (depoldetail.prodetail['under-limit'] + baseinfo.purchaseTokenName) : ''} onChange={handleToinput}
                                ref={inptnumber}/>
                            <span>{t('record.fen')}</span>
                        </div>
                        <div className="depdetail-con-money">
                            <p>
                                <span>{t('record.kemoney')}</span>
                                <span>{depoldetail.token === 'ETH' ? Number(mymoney).toFixed(4) : depoldetail.token === 'BTC' ? Number(mymoney).toFixed(6) : Number(mymoney).toFixed(2)}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                                <span onClick={() => {
                                    if (isCoco()) {
                                        window.location.href = '/finance'
                                    } else {
                                        window.location.href = '/property'
                                    }
                                }}>{t('record.cz')}</span>
                            </p>
                            <p>
                                <span>{t('record.alltr')}</span>
                                <span>{Number(baseinfo.minPurchaseLimit).toFixed(2) * 100 * inptnum / 100}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                            </p>
                            {/* <div className="depdetail-con-position" >
                                <div className="depdetail-con-position-img">
                                    <img src={isJp ? jpczimg : czimg} alt=""/>
                                </div>
                                <div className="depdetail-con-position-text" onClick={() => { setYdnum(2) }}>{t('record.know')}</div>
                            </div> */}
                        </div>
                        <div className={depoldetail.prodetail.status === 1 ? 'depdetail-con-btnover' : 'depdetail-con-btn'} onClick={handleTobuy}>
                            {tologin ? t('record.login') : t('record.ljbuy')}
                            {/* <div className="depdetail-con-btn-position">
                                <div className="depdetail-con-btn-position-img">
                                    <img src={isJp ? jpydbuy : ydbuy} alt=""/>
                                </div>
                                <div className="depdetail-con-btn-position-text" onClick={() => { setYdnum(3) }}>{t('record.know')}</div>
                            </div> */}
                        </div>
                        <div className="depdetail-con-bottom">
                            <div className="depdetail-con-bottom-l">
                                <input type="checkbox" onChange={(e) => {
                                    setCheck(e.target.checked)
                                }}/>
                                <p>
                                    <span>{t('record.agree')}</span>
                                    <span onClick={() => { setAgreeflag(true) }} style={{ color: depoldetail.bcolor === '#141E47' ? '#f60' : depoldetail.token === 'ETH' ? '#EF3926' : '' }}>{t('record.fxxy')}</span>
                                </p>
                            </div>
                            {tologin ? ('') : (
                                <div className="depdetail-con-bottom-r" onClick={() => { handleTorecord() }}>
                                    {t('record.sgjl')}
                                    <img src={rightbtn} alt=""/>
                                </div>
                            )}
                            {/* <div className="depdetail-con-bottom-position">
                                <div className="depdetail-con-bottom-position-img">
                                    <img src={isJp ? jpydsgjl : ydsgjl} alt=""/>
                                </div>
                                <div className="depdetail-con-bottom-position-text">{t('record.know')}</div>
                            </div> */}
                        </div>
                    </div>
                    <div className="center-sure" style={{ display: sureflag ? 'flex' : '' }}>
                        <div className="center-sure-con">
                            <h3>{t('record.suredd')}</h3>
                            <div className="center-sure-close" onClick={() => { setSureflag(false) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ujehgl">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                            <ul>
                                <li>
                                    <span>{t('record.bz')}</span>
                                    <span>{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                                </li>
                                <li>
                                    <span>{t('record.fs')}</span>
                                    <span>{inptnum}{t('record.fen')}</span>
                                </li>
                                <li>
                                    <span>{t('record.gdnh')}</span>
                                    <span>{depoldetail.prodhead['aor-rate'] * 100}%</span>
                                </li>
                                <li>
                                    <span>{t('record.alltr')}</span>
                                    <span>{Number(baseinfo.minPurchaseLimit).toFixed(2) * 100 * inptnum / 100}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                                </li>
                            </ul>
                            <div className="center-sure-ok" onClick={() => { handleSure() }}>{t('record.surebuy')}</div>
                        </div>
                    </div>
                </div>
                <div className="depdetail-bottom">
                    <img src={depoldetail.prodetail.footPic} alt=""/>
                </div>
                {/* <div className="depdetail-con-fixed" style={{ display: lead ? 'none' : '' }}>
                    <div className="con-fixed-hint">
                        <p>{t('record.pointdow')}</p>
                        <div className="con-fixed-img">
                            <img src={pointdown} alt=""/>
                        </div>
                    </div>
                </div> */}
                { <Sense ref={senseEleSms} onSuccess={senseSuccessSms} />}
                <Record {...{ setClose, close, recordlist, baseinfo, setMymoney, dispatch, t }}/>
                <Agreement {...{ agreeflag, setAgreeflag, t }}/>
            </div>
        }
    </>
}
