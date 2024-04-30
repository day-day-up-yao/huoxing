import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

import userimg from '../../../public/imgs/newedition/redesign/bigusering.png'
import failimg from '../../../public/imgs/newedition/redesign/failsicon.png'
import usuccimg from '../../../public/imgs/newedition/redesign/successicon.png'
// import phishingimg from '../../../public/imgs/newedition/redesign/phishing.png'
import moreequipimg from '../../../public/imgs/newedition/redesign/moreequip.png'
import googleimg from '../../../public/imgs/newedition/redesign/google_icon.png'
import mobile from '../../../public/imgs/new/ipone.png'
import bindemail from '../../../public/imgs/new/bindemail.png'
import moneypassd from '../../../public/imgs/new/moneypassd.png'
import setting from '../../../public/imgs/new/setting.png'
import { formatTime } from '../../../public/js/index'

export default (props) => {
    const { userinfos, historylist, gettypes } = props
    const { t } = useTranslation()
    const operactionlist = [
        {
            title: t('header.sign.yzphone'),
            desc: userinfos?.email === '' ? t('public.notset') : userinfos?.email,
            icon: bindemail,
            link: ''
        },
        {
            title: t('header.sign.yzemail'),
            desc: userinfos?.mobile === '' ? t('public.notset') : userinfos?.mobile,
            icon: mobile,
            link: ''
        },
        {
            title: t('public.googlefatitle'),
            desc: userinfos?.bindGA ? t('public.setted') : t('public.notset'),
            icon: setting,
            link: ''
        },
        // { title: t('public.phishing'), desc: userinfos?.hasAntiPhishingCode ? userinfos?.antiPhishingCode : t('public.notset'), icon: phishingimg, link: '' },
        {
            title: t('public.reading'),
            desc: userinfos?.bindPassword ? t('public.setted') : t('public.notset'),
            icon: moneypassd,
            link: ''
        },
        {
            title: t('public.anyshebei'),
            desc: userinfos?.multiDeviceLogin === 1 ? t('public.opened') : t('public.closeed'),
            icon: moreequipimg,
            link: ''
        }
    ]
    let nonekyc = false
    let twokyc = false
    if (
        (userinfos?.displayLevel === '1' && userinfos?.verifyStatus === 2) ||
        (userinfos?.displayLevel === '2' && userinfos?.verifyStatus !== 2)
    ) {
        nonekyc = true
    }
    if (
        (userinfos?.displayLevel === '2' && userinfos?.verifyStatus === 2) ||
        (userinfos?.displayLevel === '3' && userinfos?.verifyStatus !== 2)
    ) {
        twokyc = true
    }
    return (
        <div className="personal">
            <div className="personal-top">
                <div className="user-photo">
                    <img src={userimg} alt="" />
                </div>
                <div className="specific-info">
                    <div className="specific-info-item">
                        <div className="specific-info-item-title">{t('public.accountname')}</div>
                        <div className="item-account">
                            {userinfos?.mobile === '' ? userinfos?.email : userinfos?.mobile}
                        </div>
                    </div>
                    <div className="specific-info-item">
                        <div className="specific-info-item-title">User ID</div>
                        <div className="item-userid">{userinfos?.userId}</div>
                    </div>
                    <div className="specific-info-item">
                        <div className="specific-info-item-title">KYC</div>
                        <div className="item-kycinfo">
                            <div className="kycinfo-con">
                                <span>{t('public.basics')}</span>
                                <img src={nonekyc ? usuccimg : failimg} alt="" />
                            </div>
                            <div className="kycinfo-con">
                                <span>{t('public.seniors')}</span>
                                <img src={twokyc ? usuccimg : failimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal-center">
                {operactionlist.map((item, index) => {
                    return (
                        <div
                            className="operaction-item"
                            key={index}
                            onClick={() => {
                                gettypes(1)
                            }}
                        >
                            {index === 2 ? (
                                <div className="google-icon">
                                    <img src={googleimg} alt="" />
                                </div>
                            ) : (
                                <div className="operaction-item-icon">
                                    <img src={item.icon} alt="" />
                                </div>
                            )}
                            <div className="operaction-item-text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* 先隐藏 */}
            <div className="personal-bottom" style={{ display: 'none' }}>
                <h3>{t('public.loginhistory')}</h3>
                <ul>
                    <li>{t('public.logaddress')}</li>
                    <li>{t('public.logequipmennt')}</li>
                    <li>{t('public.logtime')}</li>
                    <li>{t('public.equipmoment')}</li>
                </ul>
                {historylist &&
                    historylist.length > 0 &&
                    historylist.map((item, index) => {
                        return (
                            <ol key={index}>
                                <li>{item.location}</li>
                                <li>{item.deviceName}</li>
                                <li>{item.loginTime && formatTime(item.loginTime, 'yyyy-MM-dd hh:mm')}</li>
                                <li>离线</li>
                            </ol>
                        )
                    })}
            </div>
        </div>
    )
}
