import React, { useState, useCallback } from 'react'
// import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

import poinntdownimg from '../../../public/imgs/newedition/redesign/poinnt_downn.png'
import useLang from '../../../public/hooks/useLang'
import Toast from '../../../components/Toast'
import { cookiesName } from '../../../public/js/index'

export default (props) => {
    const { pointlist, leftimg } = props
    const dispatch = useDispatch()
    const changeLang = useLang()
    // const { t } = useTranslation()
    const [point, setPoint] = useState(false)
    const onEnter = useCallback(() => {
        setPoint(true)
    }, [])
    const onLeave = useCallback(() => {
        setPoint(false)
    }, [])
    return (
        <div className="select-list-point" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div
                className="poinnnt-title"
                onClick={() => {
                    if (pointlist.href === 'waite') {
                        console.log(window.zE)
                        // 如果 Zendesk 对话框未加载，则加载脚本
                        if (!window.zE) {
                            var zendeskScript = document.createElement('script')
                            zendeskScript.src =
                                'https://static.zdassets.com/ekr/snippet.js?key=c2c295e8-a99f-4cd0-a0a7-34f05dcee04f'
                            document.head.appendChild(zendeskScript)
                        }

                        // 激活 Zendesk 对话框
                        window.zE.activate()
                        // Start of bhex Zendesk Widget script
                        // zE.identify({
                        //     name: 'John Citizen',
                        //     email: 'johnśexample.com',
                        //     organization: 'VIP'
                        //   })
                        console.log(window.zE)
                        // window.zE('webWidget', 'show')
                    }
                }}
            >
                {leftimg && pointlist.imgs && (
                    <div className="left-img">
                        <img src={pointlist.imgs} alt="" />
                    </div>
                )}
                {pointlist.title !== '' && (
                    <div
                        className="poinnnt-title-text"
                        onClick={() => {
                            if (pointlist.href !== '') {
                                window.location.href = pointlist.href
                            } else {
                                Toast.info('功能升级，敬请期待')
                            }
                        }}
                    >
                        {pointlist.title}
                    </div>
                )}
                {!leftimg && pointlist.list && <img src={poinntdownimg} alt="" />}
            </div>
            {pointlist.list && point && (
                <div className="point-list">
                    {pointlist.list.map((itm, index) => {
                        return (
                            <div
                                className="point-list-item"
                                key={index}
                                onClick={() => {
                                    if (itm.link === '/loginout') {
                                        dispatch.public.userLoginout().then((res) => {
                                            if (res.data.success) {
                                                Cookies.remove(cookiesName.userId)
                                                Cookies.remove(cookiesName.cToken)
                                                window.location.href = '/'
                                            } else {
                                                Toast.info(res.msg)
                                            }
                                        })
                                        return
                                    }
                                    if (pointlist.islang) {
                                        changeLang(itm.link)
                                    } else {
                                        if (itm.link !== '') {
                                            window.location.href = itm.link
                                        } else {
                                            Toast.info('功能升级，敬请期待')
                                        }
                                    }
                                }}
                            >
                                <div className={`${itm.link !== '' && 'have-hover'}`}>{itm.text}</div>
                            </div>
                        )
                    })}
                </div>
            )}
            {pointlist.codeimg && point && <div className="point-list">{pointlist.codeimg}</div>}
        </div>
    )
}
