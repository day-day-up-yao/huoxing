import React from 'react'

import './index.scss'

import Popup from '../../../components-m/Popup'
import closeimg from '../../../public/imgs/h5img/other/closepage.png'
import noticimg from '../../../public/imgs/h5img/other/notic_icon.png'
import googleimg from '../../../public/imgs/h5img/other/google_I.png'
import emailimg from '../../../public/imgs/h5img/other/email_i.png'
import rightimg from '../../../public/imgs/h5img/other/pointright.png'

export default (props) => {
    const { oncloseFn } = props
    const verifylist = [
        { icon: googleimg, title: '谷歌验证', link: '' },
        { icon: emailimg, title: '绑定邮箱', link: '' }
    ]
    return <Popup
        children={
            <div className="secondary">
                <div className="secondary-con">
                    <div className="secondary-con-top">
                        <h3>二次验证</h3>
                        <div className="secondary-close" onClick={() => {
                            oncloseFn()
                        }}>
                            <img src={closeimg} alt=""/>
                        </div>
                    </div>
                    <div className="secondary-con-notic">
                        <img src={noticimg} alt=""/>
                        <span>为保障您的资产安全，请添加额外的二次验证方式。</span>
                    </div>
                    <div className="secondary-con-list">
                        {verifylist.map((item, index) => {
                            return <div className="secondary-con-item" key={index}>
                                <div className="left-img-text">
                                    <img src={item.icon} alt=""/>
                                    <span>{item.title}</span>
                                </div>
                                <div className="right-text-img" onClick={() => {
                                    window.location.href = item.link
                                }}>
                                    <span>绑定</span>
                                    <img src={rightimg} alt=""/>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        }
    />
}
