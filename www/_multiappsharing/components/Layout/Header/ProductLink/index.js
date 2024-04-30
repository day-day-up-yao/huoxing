import React, { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

import qrcode from '../../../../public/img/qrcode-wechat.png'
import { mixUrl, windowScroll, scrollOffset } from '../../../../public/'
import mcloudsIcon from '../Navigation/images/mclouds-logo.png'

const products = [
    // { title: '火星量化大师', href: mixUrl.quanter() },
    // { title: 'DappSpy', href: mixUrl.dappspy() },
    // { title: '火星总编时刻', href: mixUrl.main('/hot/sub/20190411131936072829') },
    // { title: '数据', href: mixUrl.main('/data') },
    // { title: '火星云矿', href: mixUrl.mclouds() },
    // { title: '火星活动', href: mixUrl.main('/huodong') },
    { title: '课程', href: mixUrl.main('/learning') },
    // { title: '可可交易', href: mixUrl.cococoin() },
    // { title: '火星交易大师', href: mixUrl.trade() },
    // { title: '量化交易联赛', href: mixUrl.cq() },
    // { title: '火星大学', href: mixUrl.main('/mtc') },
    { title: 'POW’ER峰会', href: mixUrl.zt() },
    // { title: '影响力榜单', href: mixUrl.main('/rank') },
    { title: '共识实验室', href: mixUrl.clab() },
    // { title: '可可金融', href: mixUrl.cococoin() },
    // { title: '火星公开课', href: mixUrl.main('/hot/火星公开课/2018062519454934386') },
    { title: '头条号', href: 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAAEw4l9OXBKXdyhGQrYwFYJD-ny6L8zk99GXEHdgEFqs/' },
    { title: 'MarsBit 专栏', href: mixUrl.news('/author') },
    { title: '活动', href: mixUrl.main('/huodong') }
    // { title: '百家号', href: 'https://author.baidu.com/home?from=bjh_article&app_id=1641277433495224' }
    // { title: '微信公众号', href: 'wechat-qrcode' }
    // { title: 'PoW\'ER大会', href: mixUrl.zt() },
    // { title: '知识库', href: mixUrl.baike() },
    // { title: '量化超级联赛', href: mixUrl.cq() },
    // { title: 'English', href: mixUrl.en() }
]
export default () => {
    const header = useRef()
    const { t } = useTranslation()
    useEffect(() => {
        let posType = null
        windowScroll(function () {
            if (scrollOffset().top > 10 && posType !== 'fixed') {
                header.current.style.display = 'none'

                posType = 'fixed'
            }

            if (scrollOffset().top <= 10 && posType !== 'relative') {
                header.current.style.display = 'block'

                posType = 'relative'
            }
        })
    }, [])

    return <div className="header-product-link" ref={header}>
        <div className="content">
            <div className="hint">{t('all_world_dynamic')}</div>
            <div className="products">
                {products.map(function (item, index) {
                    if (item.href === 'wechat-qrcode') {
                        return <a title={item.title} target="_blank" className="wechat-qrcode" key={index}>
                            <em>{item.title}</em>
                            <div className="qrcode-dropdown">
                                <img src={qrcode} alt="MarsBit二维码" />
                                <span>MarsBit</span>
                            </div>
                        </a>
                    } else if (item.title === '火星云矿') {
                        return <a title={item.title} href={item.href} target="_blank" key={index}>
                            <img className="products-img" src={mcloudsIcon} />
                        </a>
                    } else {
                        return <a title={item.title} href={item.href} target="_blank" key={index}>{item.title}</a>
                    }
                })}
            </div>
        </div>
    </div>
}
