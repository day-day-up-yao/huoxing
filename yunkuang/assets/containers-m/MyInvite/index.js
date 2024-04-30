import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Poster from './poster'
// import QRCode from 'qrcode'
import Toast from '../../components/Toast'
import Invitimg from '../../public/imgs/invites.jpg'
import leftbtn from '../../public/imgs/btnleft.png'
import Tocopy from '../../public/imgs/copy.png'
import Invitone from '../../public/imgs/invitone.png'
import Invittwo from '../../public/imgs/invittwo.png'
import Invitthree from '../../public/imgs/invitthree.png'
// import invitimgss from '../../public/imgs/downinvit.jpg'
import CloseBtn from '../../public/imgs/closeall.png'
export default () => {
    const { t } = useTranslation()
    const { newinviteInfo } = useSelector((state) => ({
        newinviteInfo: state.public.invitelist
    }))
    console.log(newinviteInfo)
    // const reg = /^(\d{4})\d+(\d{4})$/
    const dispatch = useDispatch()
    const [inviteimg, setInviteimg] = useState()
    const [allnumn, setAllnumn] = useState(0)
    const [invitcode, setInvitcode] = useState()
    const [newimgcode, setNewimgcode] = useState()
    const [banklist, setBanklist] = useState([])
    const [imgflag, setimgflag] = useState(false)
    // const [titleflag, setTitleflag] = useState(false)
    const [income, setIncome] = useState({
        buyNum: '0',
        totalAmount: '0'
    })
    // const [twoimgcode, setTwoimgcode] = useState()
    useEffect(() => {
        dispatch.product.inviteInfo({}).then((res) => {
            if (res.code) {
                Toast.info(res.msg)
            } else {
                setInvitcode(res.inviteCode)
                setAllnumn(res.inviteInfoDTO.inviteDirectVaildCount)
                // console.log(res)
            }
        })
        dispatch.public.inviteMyincome({}).then((res) => {
            if (res.code === 0) {
                setIncome(res.data)
                // console.log(res)
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            console.log(err)
            Toast.info(t('public.nsgfail'))
        })
        dispatch.public.inviteIncomebank({
            rankNum: '20'
        }).then((res) => {
            if (res.code === 0) {
                setBanklist(res.data)
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            console.log(err)
            Toast.info(t('public.nsgfail'))
        })
        dispatch.product.inviteshareInfo({
            picType: 12
        }).then((res) => {
            if (res.code) {
                Toast.info(res.smg)
            } else {
                if (res.data) {
                    // setInviteimg(invitimgss)
                    setInviteimg(res.data[0].originalPic)
                } else {
                    Toast.info(t('public.zwsj'))
                }
            }
        })
    }, [])
    // 邀请返佣海报+二维码下载
    if (inviteimg) {
        Poster(inviteimg, window.location.protocol + '//' + window.location.hostname + '/user/signup?code=' + invitcode, base64 => {
            setNewimgcode(base64.replace('cocomgr/png', 'image/octet-stream'))
        })
    }
    // 生成二维码
    // QRCode.toDataURL(window.location.protocol + '//' + window.location.hostname + '/user/signup?code=' + invitcode).then(url => {
    //     setTwoimgcode(url)
    // }).catch(err => {
    //     console.error(err)
    // })
    const tocopy = useCallback(() => {
        var message = document.getElementById('address')
        document.execCommand('Copy')
        // 创建一个range
        var range = document.createRange()
        // 清楚页面中已有的selection
        window.getSelection().removeAllRanges()
        // 选中需要复制的节点
        range.selectNode(message)
        // 执行选中元素
        window.getSelection().addRange(range)
        // 执行 copy 操作
        var successful = document.execCommand('copy')
        if (successful) {
            Toast.error(t('public.caysucc'))
        } else {
            Toast.error(t('public.cayfail'))
        }
    })
    const tocopys = useCallback(() => {
        var message = document.getElementById('addressed')
        document.execCommand('Copy')
        // 创建一个range
        var range = document.createRange()
        // 清楚页面中已有的selection
        window.getSelection().removeAllRanges()
        // 选中需要复制的节点
        range.selectNode(message)
        // 执行选中元素
        window.getSelection().addRange(range)
        // 执行 copy 操作
        var successful = document.execCommand('copy')
        if (successful) {
            Toast.error(t('public.caysucc'))
        } else {
            Toast.error(t('public.cayfail'))
        }
    })
    const handleTodownimg = useCallback(() => {
        setimgflag(true)
    })
    // const handleTodown = useCallback(() => {
    //     var a = document.createElement('a')
    //     a.setAttribute('href', newimgcode)// 图片地址
    //     a.setAttribute('download', '') // 下载时文件名称
    //     var evobj = document.createEvent('MouseEvents'); evobj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null)
    //     a.dispatchEvent(evobj)
    // }, [newimgcode])
    // const handleToinvite = useCallback(() => {
    //     var src = newimgcode
    //     var iframe = document.createElement('iframe')
    //     iframe.style.display = 'none'
    //     iframe.src = "javascript: '<script>location.href=\"" + src + "\"</script>'"
    //     document.getElementsByTagName('body')[0].appendChild(iframe)
    // }, [newimgcode])
    // console.log(newimgcode ? newimgcode.split(',')[1] : '')
    return <div className="myinvite-m">
        <div className="myinvite-con">
            <div className="myinvite-con-top">
                <div className="top-nav-img">
                    <img src={Invitimg} alt=""/>
                </div>
                <div className="invite-header">
                    <div className="invite-header-l" onClick={() => {
                        window.history.go(-1)
                    }}>
                        <img src={leftbtn} alt=""/>
                    </div>
                    <div className="invite-header-c">{t('header.nav.invit')}</div>
                    <div className="invite-header-r"></div>
                </div>
                <div className="myinvite-con-top-pos">
                    <div className="myinvite-con-top-nav">
                        <div className="nav-top">
                            <div className="nav-top-left">
                                <p>
                                    <span>{t('invit.myinvihref')}</span>
                                    <span className="nav-top-left-two" id="address">{window.location.protocol + '//' + window.location.hostname + '/user/signup?code=' + invitcode}</span>
                                </p>
                            </div>
                            <div onClick={tocopy} className="nav-top-right">
                                <img src={Tocopy} alt=""/>
                            </div>
                        </div>
                        <div className="nav-top">
                            <div className="nav-top-left">
                                <p>
                                    <span>{t('invit.mycode')}</span>
                                    <span id="addressed">{invitcode}</span>
                                </p>
                            </div>
                            <div onClick={tocopys} className="nav-top-right">
                                <img src={Tocopy} alt=""/>
                            </div>
                        </div>
                        <div className="nav-bottom">
                            <p>{t('invit.sm')}</p>
                            <span>{t('invit.smtitle')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="myinvite-myget">
                <h3>{t('invit.myget')}</h3>
                <div className="myinvite-myget-bom">
                    <div className="myget-left">
                        <p>{allnumn}</p>
                        <p>{t('invit.invinum')}</p>
                    </div>
                    <div className="myget-left">
                        <p>{income === null ? 0 : income.buyNum}</p>
                        <p>{t('invit.friendnum')}</p>
                    </div>
                    <div className="myget-left">
                        <p>{income === null ? 0 : income.totalAmount }</p>
                        <p>{t('invit.jlmoney')} USDT</p>
                        {/* <div className="myget-left-title">
                            <div onClick={() => { setTitleflag(!titleflag) }}>?</div>
                            <div style={{ display: titleflag === true ? 'block' : '' }}>{t('invit.jltitle')}</div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="myinvite-updown">
                <h3>{t('invit.list')}</h3>
                <ul>
                    {Array.isArray(banklist) && banklist.map((item, index) => {
                        return <li key={index}>
                            <p>
                                {index + 1 === 1 ? (
                                    <span>
                                        <img src={Invitone} alt=""/>
                                    </span>
                                ) : index + 1 === 2 ? (
                                    <span>
                                        <img src={Invitthree} alt=""/>
                                    </span>
                                ) : index + 1 === 3 ? (
                                    <span>
                                        <img src={Invittwo} alt=""/>
                                    </span>
                                ) : (
                                    <span>{index + 1}</span>
                                )}
                                <span>{item.uid ? item.uid : ''}</span>
                            </p>
                            <p>{item.totalAmount} {item.incomeCurrency}</p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
        <div className="myinvite-codeimg" style={{ display: imgflag === true ? '' : 'none' }}>
            <div className="myinvite-codeimg-img">
                <img src={newimgcode} alt=""/>
            </div>
            <div className="myinvite-codeimg-btn">
                <p>{t('invit.getimg')}</p>
            </div>
            {/* <div onClick={handleTodown}>下载</div> */}
            <div className="myinvite-codeimg-closebtn" onClick={() => {
                setimgflag(false)
            }}>
                <img src={CloseBtn} alt=""/>
            </div>
        </div>
        <div className="myinvite-toinvite" onClick={handleTodownimg}>
            {t('invit.langan')}
        </div>
    </div>
}
