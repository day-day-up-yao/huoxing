import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import { useTranslation } from 'react-i18next'
import { getAndroidDownloadUrl } from '../../../redux/actions/public'

import './index.scss'

import logo from './images/footer-logo.png'
// import qrcode from '../../../public/img/qrcode-wechat.png'
import download from '../../../public/img/download_img.png'
// import RightDwonload from '../RightDownLoad'

import { mixUrl } from '../../../public/index'
import Toast from '../../Toast'

const Footer = (props) => {
    const { t } = useTranslation()
    /** @desc 合作弹出框显示与隐藏 */
    const [popup, setPopup] = useState({
        show: false,
        type: 'details' // details内容合作，business商务合作
    })
    const [and, setAnd] = useState('')
    useEffect(() => {
        getAndroidDownloadUrl().then(function (res) {
            if (res.code === 1) {
                setAnd(res.obj)
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            throw err
        })
    }, [and])
    const popShowHide = useCallback((type) => {
        setPopup({
            show: !popup.show,
            type: !popup.show ? type : popup.type
        })
    }, [popup])

    return <div className="footer-wrapper" id="footerWrapper">
        <div className="footer-main">
            <div className="copyright">
                <div><img className="foot-logo" src={logo} alt="MarsBit" /></div>
                <div className="foot-business">{t('business_cooperation')}：tg: @Ulysses2047</div>
                <div className='foot-slogan'>{t('all_world_dynamic')} | Copyright ©MarsBit All Rights Reserved. | <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">桂ICP备2023010597号-1</a></div>
            </div>
            <div className="friendly" style={{ display: 'none' }}>
                <h3>{t('friendship_link')}</h3>
                <div className="links">
                    {props.footer.friendly.map(function (item, index) {
                        if (index < 7) {
                            return <a key={index} title={item.name} target="_blank" href={item.url} rel="nofollow">{item.name}</a>
                        }
                    })}
                    <a className="more-links" target="_blank" href={mixUrl.main('/friendlylink')}>{t('more_footer')}</a>
                </div>
            </div>
            <div className="item download">
                <h3>{t('investment_web3')}</h3>
                <div className="down-cont">
                    <span><img src={download} alt="" /></span>
                    <a href={and} className="and">{t('android_download')}</a>
                    <a href="https://itunes.apple.com/cn/app/id1343659925?mt=8" className="ios" target="_blank">{t('ios_download')}</a>
                </div>
            </div>
        </div>
        <div className="popup" style={{ display: popup.show ? 'flex' : 'none' }}>
            <div className="content-wrapper">
                <a className="close-icon footer-close" onClick={() => {
                    popShowHide()
                }} />

                <div className="content business" style={{ display: popup.type === 'business' ? 'block' : 'none' }}>
                    <div className="item">
                        <h3>{t('business_cooperation')}</h3>
                        <p>
                            <span>tg: @Ulysses2047</span>
                            <span>微信：befabing</span>
                        </p>
                    </div>
                </div>

                <div className="footer">
                    <a className="footer-close" onClick={() => {
                        popShowHide()
                    }}>我知道了</a>
                </div>
            </div>
        </div>
    </div>
}

Footer.propTypes = {
    footer: object.isRequired
}

const mapStateToProps = (state) => {
    return {
        footer: state.multi.footer
    }
}

export default connect(mapStateToProps)(Footer)
