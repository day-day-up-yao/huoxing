import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Poster from './poster'
import invititle from '../../public/imgs/new/invititle.png'
import Invitone from '../../public/imgs/invitone.png'
import Invittwo from '../../public/imgs/invittwo.png'
import Invitthree from '../../public/imgs/invitthree.png'
import Toast from '../../components/Toast'
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [inviteimgs, setinviteimgs] = useState('')
    const [invitcode, setInvitcode] = useState()
    const [allnumn, setAllnumn] = useState(0)
    const [invtimg, setInvtimg] = useState()
    const [banklist, setBanklist] = useState([])
    const [newimgcode, setNewimgcode] = useState()
    const [income, setIncome] = useState({
        buyNum: '0',
        totalAmount: '0'
    })
    useEffect(() => {
        // 获取邀请返佣邀请信息
        dispatch.product.inviteInfo({}).then((res) => {
            if (res.code !== 0) {
                Toast.info(res.msg)
            } else {
                setInvitcode(res.data.inviteCode)
                setAllnumn(res.data.inviteInfoDTO.inviteDirectVaildCount)
            }
        })
        dispatch.public.inviteMyincome({}).then((res) => {
            if (res.code === 0) {
                if (res.data !== null) {
                    setIncome(res.data)
                }
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            console.log(err)
            Toast.info(t('public.nsgfail'))
        })
        // 获取邀请返佣海报
        dispatch.product.inviteshareInfo({
            picType: 12
        }).then((res) => {
            if (res.code) {
                Toast.info(res.smg)
            } else {
                if (res.data) {
                    // setInvtimg(invitimg)
                    setInvtimg(res.data[0].originalPic)
                } else {
                    // setInvtimg(invitimg)
                    Toast.info(t('public.zwsj'))
                }
            }
        })
        // 获取邀请返佣banner
        dispatch.product.inviteshareInfo({
            picType: 30
        }).then((res) => {
            if (res.code) {
                Toast.info(res.smg)
            } else {
                if (res.data) {
                    // setInvtimg(invitimg)
                    setinviteimgs(res.data[0].originalPic)
                } else {
                    // setInvtimg(invitimg)
                    Toast.info(t('public.zwsj'))
                }
            }
        })
        // 排行榜
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
    }, [])
    // 邀请返佣海报+二维码下载
    if (typeof window === 'undefined') {} else {
        if (invtimg) {
            Poster(invtimg, window.location.protocol + '//' + window.location.hostname + '/user/signup?code=' + invitcode, base64 => {
                setNewimgcode(base64.replace('cocomgr/png', 'image/octet-stream'))
            })
        }
        // 生成二维码
        // QRCode.toDataURL(window.location.protocol + '//' + window.location.hostname + '/user/signup?code=' + invitcode).then(url => {
        //     setTwoimgcode(url)
        // }).catch(err => {
        //     console.error(err)
        // })
    }
    // 点击复制
    const tocopycode = useCallback(() => {
        if (typeof window === 'undefined') {} else {
            var message = document.getElementById('addresscode')
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
        }
    })
    const tocopy = useCallback(() => {
        if (typeof window === 'undefined') {} else {
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
        }
    })
    return <div className="myinvite">
        <div className='invitebanner'>
            <img src={inviteimgs} alt=""/>
        </div>
        <div className="invit-list">
            <div className='itemone'>
                <div className='itemone-title'>
                    <img src={invititle} alt=""/>
                    <span>{t('invit.myinvi')}</span>
                    <img src={invititle} alt=""/>
                </div>
                <div className='itemone-code'>
                    <h4>{t('invit.invicode')}</h4>
                    <div className="code">
                        <span id="addresscode">{invitcode}</span>
                        <span onClick={tocopycode}>{t('public.cay')}</span>
                    </div>
                </div>
                <div className='itemone-code'>
                    <h4>{t('invit.invithref')}</h4>
                    <div className="code">
                        <span id="address">{typeof window === 'undefined' ? '' : window.location.protocol + '//' + window.location.hostname + '/user/signup?code=' + invitcode}</span>
                        <span onClick={tocopy}>{t('public.cay')}</span>
                    </div>
                </div>
                <div className='itemone-btn'>
                    <a href={newimgcode} download="invite_poster.png">{t('invit.down')}</a>
                </div>
            </div>
            <div className="itemone">
                <div className='itemone-title'>
                    <img src={invititle} alt=""/>
                    <span>{t('invit.myget')}</span>
                    <img src={invititle} alt=""/>
                </div>
                <ul>
                    <li>
                        <span>{allnumn}</span><br/>
                        <span>{t('invit.invinum')}</span>
                    </li>
                    <li>
                        <span>{income.buyNum}</span><br/>
                        <span>{t('invit.friendnum')}</span>
                    </li>
                    <li>
                        <span>{income.totalAmount}USDT</span><br/>
                        <span>{t('invit.jlmoney')}</span>
                    </li>
                </ul>
            </div>
            <div className="itemone">
                <div className='itemone-title'>
                    <img src={invititle} alt=""/>
                    <span>{t('invit.list')}</span>
                    <img src={invititle} alt=""/>
                </div>
                <div className='ranking'>
                    {Array.isArray(banklist) && banklist.map((item, index) => {
                        return <div key={index} className="ranking-item">
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
                            <p>
                                <i>{item.totalAmount}</i>
                                <i>{item.incomeCurrency}</i>
                            </p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}
