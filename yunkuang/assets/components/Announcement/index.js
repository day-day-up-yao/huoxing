import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import Toast from '../../components/Toast'
import { formatTime, queryParam } from '../../public/js/index'
import Pagination from '../../components/Pagination/index'
import Nomessage from '../../public/imgs/nomessage.png'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [curPage, setCurPage] = useState(1)
    const [msglist, setMsglist] = useState({
        msgList: [],
        pageSize: 20,
        pages: 1,
        total: 3
    })
    const [appflage, setAppflage] = useState(false)
    useEffect(() => {
        if (queryParam('channel') === null) {
            setAppflage(false)
        } else {
            setAppflage(true)
        }
        if (Cookies.get('c_token')) {
            getMessageList()
        } else {
            window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
        }
    }, [])

    const getMessageList = useCallback(() => {
        dispatch.public.messageList({
            type: 0,
            curPage: curPage,
            pageSize: 20
        }).then((res) => {
            if (res.code === 0) {
                console.log(res.data)
                setMsglist(res.data)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [curPage])

    return <div className="Anment">
        <div className="Anmentcon">
            <div className="Anmentcon-top">{t('public.xxtz')}</div>
            <div className="Anmentcon-list">
                {msglist !== null ? (
                    <ul>
                        {Array(msglist.msgList) && msglist.msgList.map((item, index) => {
                            return <li key={index} onClick={() => {
                                dispatch.public.messageRead({
                                    type: 0,
                                    msgId: item.id
                                }).then((res) => {
                                    if (res.code === 0) {
                                        if (appflage) {
                                            window.location.href = `/anmessage/${item.id}?channel=111&local=${queryParam('local')}`
                                        } else {
                                            window.location.href = `/anmessage/${item.id}`
                                        }
                                    } else {
                                        Toast.info(res.msg)
                                    }
                                })
                            }}>
                                <span className="Anmentcon-list-left" style={{ color: item.messageStatus === 0 ? '' : '#9398A4' }}>
                                    {/* <b style={{ display: item.messageStatus === 0 ? '' : 'none' }}>【未读】</b> */}
                                    {item.title}
                                </span>
                                <span className="Anmentcon-list-right">{formatTime(item.createdAt, 'yyyy年MM月dd日')}</span>
                            </li>
                        })}
                    </ul>
                ) : (
                    <div className="Anmentcon-Nolist">
                        <div>
                            <img src={Nomessage} alt=""/>
                        </div>
                        <p>{t('public.xxtz')}</p>
                    </div>
                )}
            </div>
            {msglist !== null ? (
                <div className="Anmentcon-bottom"
                    style={{ display: (msglist.msgList.length === 0 || msglist.total <= msglist.pageSize) && 'none' }}>
                    <Pagination pageSize={msglist.pageSize}
                        totalData={msglist.total}
                        pageChange={(curPage) => setCurPage(curPage)}/>
                </div>
            ) : ('')}
        </div>
    </div>
}
