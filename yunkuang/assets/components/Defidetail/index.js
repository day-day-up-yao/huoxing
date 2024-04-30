import React, { useState, useEffect, useRef, useCallback } from 'react'
import cookie from 'js-cookie'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import timeimg from '../../public/imgs/def/detime.png'
import { isMobile, queryParam, isCoco, numToCeil, isJp } from '../../public/js/index'
import Sense from '../Sense'
import Toast from '../../components/Toast'
import './index.scss'
import backimg from '../../public/imgs/def/backimg.png'
export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const senseEleSms = useRef()
    const inptnumber = useRef()
    const { projectCode } = useParams()
    const [flag, setFlag] = useState(false)
    const [tologin, setTologin] = useState(false)
    const [agree, setAgree] = useState(false)
    const [inptnum, setInptnum] = useState('')
    const [baseinfo, setbaseInfo] = useState({})
    const [mymoney, setMymoney] = useState(0)
    const [hours, setHours] = useState('00')
    const [minute, setMinute] = useState('00')
    const [second, setSecond] = useState('00')
    const [appflage, setAppflage] = useState(false)
    // const [cocoflag, setCocoflag] = useState(false)
    const [prodListdetal, setProdListdetal] = useState({})
    const [progressstatus, setProgressStatus] = useState(1)
    const [jpflage, setJpflage] = useState(true)
    const [sureflag, setSureflag] = useState(false)
    var endtimelist = 1607688000000 // 日本版循环倒计时结束时间(2020/12/11 20:00:00)
    // const startjptime = Date.parse(new Date('2020-12-07 20:00:00'))
    useEffect(() => {
        document.title = t('defi.defititle')
        while (endtimelist < Date.parse(new Date())) {
            endtimelist += 1209600000
        }
        dispatch.product.inviteCode({
            prodCode: projectCode
        }).then((res) => {
            if (res.data !== '') {
                window.localStorage.setItem('invicode', res.data)
            } else {
                window.localStorage.setItem('invicode', '')
            }
        })
        if (cookie.get('c_token')) {
            setTologin(true)
        } else {
            setTologin(false)
        }
        if (queryParam('language') === null) {
            setJpflage(false)
        } else {
            setJpflage(true)
        }
        if (queryParam('channel') === null) {
            setAppflage(false)
        } else {
            setAppflage(true)
        }
        dispatch.product.prodDetaillist({
            prodcode: projectCode
        }).then((res) => {
            if (res.status === 'ok') {
                setProdListdetal(res.data.prods[0])
                countFun(res.data.prods[0])
                if (res.data.prods[0].start > Date.parse(new Date())) {
                    setProgressStatus(1)
                } else if (res.data.prods[0].end < Date.parse(new Date())) {
                    setProgressStatus(3)
                } else {
                    setProgressStatus(2)
                }
            } else {
                Toast.info(res.msg)
            }
        })
        dispatch.product.baseicInfo({
            projectCode: projectCode
        }).then((res) => {
            setbaseInfo(res)
            window.localStorage.setItem('projectId', res.projectId)
            window.localStorage.setItem('baseinfo', res)
            if (cookie.get('c_token')) {
                dispatch.product.checkC2cBanlance({
                    token_ids: res.purchaseTokenName
                }).then((res) => {
                    setMymoney(res[0].free)
                })
            }
        })
    }, [appflage])
    const countFun = useCallback(
        (res) => {
            // const end = new Date('2020-09-10 00:00:00')
            // if (res.start > Date.parse(new Date())) {
            //     remaining = new Date(moment(res.end * 1).format('YYYY/MM/DD HH:mm:ss')) - new Date()
            // } else {
            //     setProgressStatus(2)
            // }
            // 604800000
            if (!isJp) {
                var end = new Date(moment(res.end * 1).format('YYYY/MM/DD HH:mm:ss'))
                var ends = new Date(moment(res.start * 1).format('YYYY/MM/DD HH:mm:ss'))
            } else {
                end = endtimelist
                ends = endtimelist - 1209600000
            }
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
            if (!isJp) {
                var remaining = (res.start < Date.parse(new Date()) ? end : ends) - new Date()
            } else {
                remaining = (ends < Date.parse(new Date()) ? end : ends) - new Date()
            }
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
    const handelTosg = useCallback(() => {
        if (jpflage) {
            return
        }
        if (tologin === false) {
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
        if (agree === false) {
            Toast.info(t('defidetail.agreexy'))
            return
        }
        if (inptnum === '') {
            Toast.info(t('defidetail.inputnum'))
            return
        }
        if (isJp) {
            if (inptnumber.current.value < 50) {
                Toast.info('最低投入金額50FIL')
                return
            }
        }
        setSureflag(true)
        // if (isJp) {
        //     dispatch.product.mfiPerm({
        //         uid: cookie.get('user_id')
        //     }).then((res) => {
        //         if (res.status === 'ok') {
        //             if (res.data) {
        //                 senseEleSms.current.sense()
        //             } else {
        //                 Toast.info('非邀请关系，不能购买')
        //             }
        //         } else {
        //             Toast.info(res.msg)
        //         }
        //     })
        // } else {
        //     senseEleSms.current.sense()
        // }
        // if (!/^\d+$/.test(inptnum)) {} else {
        //     Toast.info('请输入整数份数')
        //     return
        // }
    }, [tologin, agree, inptnum, jpflage])
    const handleTosure = useCallback(() => {
        senseEleSms.current.sense()
    })
    const senseSuccessSms = useCallback((senseResId) => {
        let values = {}
        values.captcha_response = senseResId
        values.captcha_id = '1b140c59a6da8e906cb4b7ca6687e075'
        creatOrder(values)
    }, [])
    const creatOrder = useCallback((values) => {
        dispatch.product.ieoOrder({
            projectCode: projectCode,
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
                Toast.info(t('defidetail.buysucc'))
                dispatch.product.prodOeder({
                    userId: cookie.get('user_id'),
                    projectCode: projectCode
                }).then((res) => {
                    if (isCoco()) {
                        if (queryParam('channel') !== null) {
                            window.location.href = `/coco/Defilist?channel=111`
                        } else {
                            window.location.href = '/coco/Defilist'
                        }
                    } else {
                        if (queryParam('channel') !== null) {
                            window.location.href = '/Defilist?channel=111'
                        } else {
                            window.location.href = '/Defilist'
                        }
                    }
                })
            }
        })
    }, [baseinfo])
    return <div className="dfdetail">
        {/* <div className='df-xhlogo'>
            <img src={cocoflag === true ? cocologo : nxlogo} alt=""/>
        </div> */}
        <div className="dfdetail-con">
            <div className="dfdetail-con-top">
                <div className="dfdetail-con-top-img">
                    {/* <img src={deimg} alt=""/> */}
                    <img src={prodListdetal.logo} alt=""/>
                </div>
                <h3>{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</h3>
                {isMobile() ? (
                    <h4>{prodListdetal.description}</h4>
                ) : (
                    <h4>{prodListdetal.description}</h4>
                )}
            </div>
            <div className="dfdetail-con-nav">
                <div className="dfdetail-con-nav-l">
                    {/* {isMobile() ? ('') : (
                        <h4>{baseinfo.title ? baseinfo.title : ''}</h4>
                    )} */}
                    <ul className={isJp ? 'dfdetail-con-nav-ul' : ''}>
                        <li>
                            <p style={{ color: '#4DA58C' }}>{prodListdetal.aor}</p>
                            <p>{t('defi.mustyear')}</p>
                        </li>
                        <li>
                            <p>{prodListdetal.cycle}{t('defi.day')}</p>
                            <p>{t('defi.cycle')}</p>
                        </li>
                        <li>
                            {isJp ? (
                                <p>{baseinfo.totalReceiveCirculation ? Number(baseinfo.totalReceiveCirculation) / 1000 : ''}</p>
                            ) : (
                                <p>{baseinfo.totalReceiveCirculation ? baseinfo.totalReceiveCirculation : ''}</p>
                            )}
                            <p>{t('defidetail.allmoney')}</p>
                        </li>
                    </ul>
                    <div className="dfdetail-con-nav-l-img">
                        <img src={baseinfo.bannerUrl ? baseinfo.bannerUrl : ''} alt=""/>
                    </div>
                    {isJp ? (
                        <div className="dfdetail-con-nav-l-buy">
                            <span>{jpflage ? '' : (`購入済み：` + (baseinfo.soldAmount ? numToCeil(baseinfo.soldAmount, 0) : 0))}{}</span>
                            <span>{jpflage ? '' : (`残り：` + (baseinfo.soldAmount ? numToCeil(Number(baseinfo.totalReceiveCirculation) / 1000 - baseinfo.soldAmount, 0) : 0))}{}</span>
                        </div>
                    ) : ('')}
                </div>
                <div className="dfdetail-con-nav-r">
                    <div className="dfdetail-con-nav-r-top">
                        <div className="dfdetail-con-nav-r-top-l">
                            <img src={timeimg} alt=""/>
                        </div>
                        <div className="dfdetail-con-nav-r-top-r">{progressstatus === 2 ? t('defidetail.overtime') : progressstatus === 1 ? t('defidetail.starttime') : t('defi.over')}</div>
                    </div>
                    <div className="dfdetail-con-nav-r-time">
                        <div className="dfdetail-con-nav-r-time-l">
                            <div className="dfdetail-con-nav-r-time-l-l">{hours}</div>
                            <p>{t('defidetail.hour')}</p>
                        </div>
                        <div className="dfdetail-con-nav-r-time-l">
                            <div className="dfdetail-con-nav-r-time-l-l">{minute}</div>
                            <p>{t('defidetail.minute')}</p>
                        </div>
                        <div className="dfdetail-con-nav-r-time-l">
                            <div className="dfdetail-con-nav-r-time-l-l">{second}</div>
                            <p>{t('defidetail.second')}</p>
                        </div>
                    </div>
                    {isJp ? (
                        <div className="dfdetail-con-nav-r-inp">
                            <input type="text"
                                placeholder='50FILから販売、1FIL単位で増加'
                                onChange={handleToinput}
                                ref={inptnumber}
                            />
                            <p>{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</p>
                        </div>
                    ) : (
                        <div className="dfdetail-con-nav-r-inp">
                            <input type="text"
                                placeholder={baseinfo.minPurchaseLimit ? Number(baseinfo.minPurchaseLimit).toFixed(2) + baseinfo.purchaseTokenName + `/${t('defidetail.fen')} ${t('defidetail.hinit')}` : ''}
                                onChange={handleToinput}
                                ref={inptnumber}
                            />
                            <p>{t('defidetail.fen')}</p>
                        </div>
                    )}
                    <div className="dfdetail-con-nav-r-num" style={{ display: tologin === true ? '' : 'none' }}>
                        <div className="dfdetail-con-nav-r-num-l">
                            <span>{t('defidetail.canbuy')}</span>
                            {/* <span>2432.45 FIL</span> */}
                            <span> {mymoney}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                            <span onClick={() => {
                                window.location.href = '/property'
                            }}>{t('public.cz')}</span>
                        </div>
                        <div className="dfdetail-con-nav-r-num-l">
                            <span>{t('defidetail.allput')}</span>
                            <span> {Number(baseinfo.minPurchaseLimit).toFixed(2) * 100 * inptnum / 100}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                        </div>
                    </div>
                    <div className="dfdetail-con-nav-r-btn" onClick={handelTosg} style={{ color: jpflage ? 'rgb(123, 128, 147)' : '' }}>{jpflage ? '完売' : tologin === true ? t('defi.startwa') : t('defidetail.login')}</div>
                    <div className="dfdetail-con-nav-r-bottom">
                        <input type="checkbox" onChange={(e) => {
                            setAgree(e.target.checked)
                        }}/>
                        <p>
                            <span>{t('defidetail.agreexyed')}</span>
                            <span onClick={() => {
                                setFlag(true)
                            }}>{t('defidetail.xy')}</span>
                        </p>
                    </div>
                    { <Sense ref={senseEleSms} onSuccess={senseSuccessSms} />}
                </div>
            </div>
            <div className="dfdetail-con-sjz">
                <div className="dfdetail-con-sjz-con"></div>
                {isMobile() ? (
                    isJp ? (
                        <div className="dfdetail-con-sjz-posit">
                            <div className="dfdetail-con-sjz-time">
                                <p style={{ textAlign: 'left' }}>{t('defidetail.kqtime')}</p>
                                <div className="dfdetail-con-sjz-time-c" style={{ margin: '9px 0' }}>
                                    <div></div>
                                </div>
                                <p style={{ textAlign: 'left' }}>{moment(prodListdetal.start * 1).format('YYYY-MM-DD')}</p>
                            </div>
                            <div className="dfdetail-con-sjz-time">
                                <p>{t('defidetail.kwtime')}</p>
                                <div className="dfdetail-con-sjz-time-c">
                                    <div></div>
                                </div>
                                <p>{moment(prodListdetal.end * 1).format('YYYY-MM-DD')}</p>
                            </div>
                            <div className="dfdetail-con-sjz-time">
                                <p>{t('defidetail.stoptime')}</p>
                                <div className="dfdetail-con-sjz-time-c">
                                    <div></div>
                                </div>
                                <p>{moment(prodListdetal.settlement * 1).format('YYYY-MM-DD')}</p>
                            </div>
                            <div className="dfdetail-con-sjz-time">
                                <p style={{ textAlign: 'right' }}>{t('defidetail.getmoney')}</p>
                                <div className="dfdetail-con-sjz-time-c-s">
                                    <div></div>
                                </div>
                                <p style={{ textAlign: 'right' }}>{moment(Number(prodListdetal.strategy) * 1).format('YYYY-MM-DD')}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="dfdetail-con-sjz-posit">
                            <div className="dfdetail-con-sjz-time">
                                <p style={{ textAlign: 'left' }}>{t('defidetail.kqtime')}</p>
                                <div className="dfdetail-con-sjz-time-c" style={{ margin: '9px 0' }}>
                                    <div></div>
                                </div>
                                <p style={{ textAlign: 'left' }}>{moment(prodListdetal.start * 1).format('YYYY-MM-DD HH:mm')}</p>
                            </div>
                            <div className="dfdetail-con-sjz-time">
                                <p>{t('defidetail.kwtime')}</p>
                                <div className="dfdetail-con-sjz-time-c">
                                    <div></div>
                                </div>
                                <p>{moment(prodListdetal.end * 1).format('YYYY-MM-DD HH:mm')}</p>
                            </div>
                            <div className="dfdetail-con-sjz-time">
                                <p>{t('defidetail.stoptime')}</p>
                                <div className="dfdetail-con-sjz-time-c">
                                    <div></div>
                                </div>
                                <p>{moment(prodListdetal.settlement * 1).format('YYYY-MM-DD HH:mm')}</p>
                            </div>
                            <div className="dfdetail-con-sjz-time">
                                <p style={{ textAlign: 'right' }}>{t('defidetail.getmoney')}</p>
                                <div className="dfdetail-con-sjz-time-c-s">
                                    <div></div>
                                </div>
                                <p style={{ textAlign: 'right' }}>{moment(Number(prodListdetal.strategy) * 1).format('YYYY-MM-DD HH:mm')}</p>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="dfdetail-con-sjz-posit">
                        <div className="dfdetail-con-sjz-time">
                            <p style={{ textAlign: 'left' }}>{t('defidetail.kqtime')}</p>
                            <div className="dfdetail-con-sjz-time-c" style={{ margin: '9px 0' }}>
                                <div></div>
                            </div>
                            <p style={{ textAlign: 'left' }}>{moment(prodListdetal.start * 1).format('YYYY-MM-DD HH:mm')}</p>
                        </div>
                        <div className="dfdetail-con-sjz-time">
                            <p>{t('defidetail.kwtime')}</p>
                            <div className="dfdetail-con-sjz-time-c">
                                <div></div>
                            </div>
                            <p>{moment(prodListdetal.end * 1).format('YYYY-MM-DD HH:mm')}</p>
                        </div>
                        <div className="dfdetail-con-sjz-time">
                            <p>{t('defidetail.stoptime')}</p>
                            <div className="dfdetail-con-sjz-time-c">
                                <div></div>
                            </div>
                            <p>{moment(prodListdetal.settlement * 1).format('YYYY-MM-DD HH:mm')}</p>
                        </div>
                        <div className="dfdetail-con-sjz-time">
                            <p style={{ textAlign: 'right' }}>{t('defidetail.getmoney')}</p>
                            <div className="dfdetail-con-sjz-time-c-s">
                                <div></div>
                            </div>
                            <p style={{ textAlign: 'right' }}>{moment(Number(prodListdetal.strategy) * 1).format('YYYY-MM-DD HH:mm')}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="dfdetail-con-title" style={{ display: prodListdetal.prodPros === '1' ? '' : 'none' }}>
                <h3>{t('defidetail.productmsg')}</h3>
                <h4>{baseinfo.title ? baseinfo.title : ''} {baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</h4>
                <ul>
                    <li>
                        <p><span style={{ color: '#4DA58C' }}>{prodListdetal.aor}</span></p>
                        <p>{t('defidetail.yearsy')}</p>
                    </li>
                    <li>
                        <p>{t('defidetail.put')}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}{t('defidetail.puthm')}</p>
                        <p>{t('defidetail.putcc')}</p>
                    </li>
                    <li>
                        <p>{t('defidetail.hxty')}</p>
                        <p>{t('defidetail.glf')}</p>
                    </li>
                </ul>
                <div className="dfdetail-con-title-p" onClick={() => {
                    if (isCoco()) {
                        window.location.href = '/coco/Defititle'
                    } else {
                        window.location.href = '/Defititle'
                    }
                }}>
                    {t('defidetail.seedetail')}
                </div>
                {/* <div className="dfdetail-con-invit">
                    <div className="dfdetail-con-invit-l">
                        <img src={invimg} alt=""/>
                    </div>
                    <p style={{ color: '#1F2533' }}>邀请奖励</p>
                    {isMobile() ? ('') : (
                        <p>1份100USDT，共计5000份，<span style={{ color: '#3268EB' }}>单人最高50份</span>。邀请<span style={{ color: '#3268EB' }}>1名</span>用户注册可可购买理财最低1份。额外获得<span style={{ color: '#3268EB' }}>10份</span>额度</p>
                    )}
                </div>
                {isMobile() ? (
                    <p style={{ color: '#7B8093', fontSize: '14px' }}>1份100USDT，共计5000份，单人最高50份。邀请1名用户注册可可购买理财最低1份。额外获得10份额度</p>
                ) : ('')} */}
            </div>
            <div className="dfdetail-con-title">
                <h3>{t('defidetail.rule')}</h3>
                <div className="dfdetail-con-title-list">
                    <div dangerouslySetInnerHTML={{ __html: baseinfo.description ? baseinfo.description : '' }}></div>
                </div>
            </div>
            {/* <div className="dfdetail-con-title">
                <h3>风险提示</h3>
                <div className="dfdetail-con-title-font">本产品兼具保底与收益增强的特色，在火星区块链数字资产投研中心的价值与周期的投资框架基础上，充分结合数字资产市场的实际特征，通过严格的资产选择，深入挖掘行业潜在获利机会，并运用SAA和TAA策略，动态优化投资组合。SAA应用火星交易大师自研的核心算法策略，在规避市场的系统性风险前提下进行高流动性资产的套利、量化及对冲，以实现进可攻、退可守的布局。TAA应用DeFi资产套利增强收益，精选基本面优良、高流动性、高波动的DeFi资产进行套利，以最小化风险敞口、最大化投资收益。在达到保底投资回报后，本产品会适度锁定投资收益，及时调整资产及策略配置比例以保障净值增长持续平稳。</div>
            </div> */}
            <div className="newdfdetail-position" style={{ display: flag === true ? '' : 'none' }}>
                <div className="newdfdetail-position-title">
                    <h3>{t('defidetail.productxy')}</h3>
                    <p>{t('defidetail.xyone')}</p>
                    <p>{t('defidetail.xytwo')}</p>
                    <p>{t('defidetail.xythree')}</p>
                    <p>{t('defidetail.xyfour')}</p>
                    <p>{t('defidetail.xyfive')}</p>
                    <p>{t('defidetail.xysix')}</p>
                    <p>{t('defidetail.xyseven')}</p>
                    <p>{t('defidetail.xyeight')}</p>
                    <p>{t('defidetail.xynine')}</p>
                    <p>{t('defidetail.xyten')}</p>
                    <div className="newdfdetail-position-title-close" onClick={() => {
                        setFlag(false)
                    }}>{t('defidetail.close')}</div>
                </div>
            </div>
            <div className="sure-buy" style={{ display: sureflag ? '' : 'none' }}>
                <div className="buy-con">
                    <h3>{t('record.suredd')}</h3>
                    <div className="con-item">
                        <span>{t('record.bz')}</span>
                        <span>{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                    </div>
                    <div className="con-item">
                        <span>{t('record.fs')}</span>
                        <span>{inptnum}份</span>
                    </div>
                    <div className="con-item">
                        <span>总投入</span>
                        <span>{Number(baseinfo.minPurchaseLimit).toFixed(2) * 100 * inptnum / 100}{baseinfo.purchaseTokenName ? baseinfo.purchaseTokenName : ''}</span>
                    </div>
                    <div className="con-btn" onClick={handleTosure}>{t('record.surebuy')}</div>
                    <div className="backimg" onClick={() => { setSureflag(false) }}>
                        <img src={backimg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
