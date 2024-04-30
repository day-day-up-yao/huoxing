
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.scss'
import { formatTime } from '../../public/js/index'
import Toast from '../../components/Toast'
// import Header from '../../components-m/Headers/index'
export default () => {
    const { msgId } = useParams()
    const dispatch = useDispatch()
    const [nsglist, setMsglist] = useState({ content: '', createdAt: '', title: '' })
    useEffect(() => {
        if (Cookies.get('c_token')) {
            getMessagedetail()
        } else {
            window.location.href = `/user/signin?redirect= ${encodeURIComponent(window.location.href)}`
        }
    }, [])
    const getMessagedetail = useCallback(() => {
        dispatch.public.messageDetail({
            msgId: msgId
        }).then((res) => {
            if (res.code === 0) {
                setMsglist(res.data)
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [msgId])
    return <div className="anmentmsg">
        <div className="anmentmsg-con">
            <h2>{nsglist.title}</h2>
            <h3>{formatTime(Number(nsglist.createdAt), 'yyyy-MM-dd hh:mm')}</h3>
            <div className="anmentmsg-message" dangerouslySetInnerHTML={{ __html: nsglist.content }}></div>
        </div>
    </div>
}
