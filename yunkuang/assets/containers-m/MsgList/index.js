import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../../components-m/Headers'
import MsgItem from './MsgItem'
import { queryParam } from '../../public/js/index'
import Toast from '../../components/Toast'

import './index.scss'

export default () => {
    const dispatch = useDispatch()
    const [msglist, setMsglist] = useState()
    const [spacetoplist, setSpacelist] = useState()
    const [maxid, setMaxid] = useState()
    const [title, setTitle] = useState()
    useEffect(() => {
        if (queryParam('msgtype') === '1') {
            getUserMsg(1)
            setTitle('系统公告')
        }
        if (queryParam('msgtype') === '2') {
            getPushfn()
            setTitle('消息通知')
        }
        if (queryParam('msgtype') === '3') {
            getUserMsg(2)
            setTitle('活动推荐')
        }
    }, [])
    // 获取系统公告列表和活动推荐列表
    const getUserMsg = useCallback((num) => {
        dispatch.public.userMsglist({
            category: num,
            curPage: 1,
            pageSize: 20
        }).then((res) => {
            if (res.code === 0) {
                const maxsysid = Math.max.apply(Math, res.data.msgList.map(item => { return item.id }))
                setMaxid(maxsysid)
                const msgdata = res.data.msgList.filter((item) => item.topping === 0)
                const spacedata = res.data.msgList.filter((item) => item.topping === 1)
                setMsglist(msgdata)
                setSpacelist(spacedata)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    const getPushfn = useCallback(() => {
        dispatch.public.getPushmsg({
            clientType: 1,
            pageIndex: 1,
            pageSize: 20
        }).then((res) => {
            if (res.code === 0) {
                setMsglist(res.data.messageList)
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    // 全部已读消息设置
    const setMegread = useCallback((item, type) => {
        if (queryParam('msgtype') === '2') {
            dispatch.public.setPushreaded({
                msgId: item.id,
                clientType: 1
            }).then((res) => {
                if (res.code === 0) {
                    if (type === 0) {
                        window.location.reload()
                    } else {
                        window.location.href = `/msgdetail?msginfo=${JSON.stringify(item)}&&title=${queryParam('msgtype')}`
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        } else {
            dispatch.public.setReaded({
                msgId: type === 0 ? maxid : item.id,
                type: type === 0 ? 1 : 0
            }).then((res) => {
                if (res.code === 0) {
                    if (type === 0) {
                        window.location.reload()
                    } else {
                        window.location.href = `/msgdetail?msginfo=${JSON.stringify(item)}&&title=${queryParam('msgtype')}`
                    }
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [maxid])
    return <div className="msg-list">
        <Header title={title} leftfg textright={'全部已读'} clickFn={() => {
            setMegread(0, 0)
        }}/>
        <div className="placedtop">
            {spacetoplist && spacetoplist.map((item, index) => (
                <MsgItem
                    placetop
                    msginfo={item}
                    key={index}
                    msgtype={queryParam('msgtype')}
                    headertitle={title}
                    toDetailFn={(item) => {
                        setMegread(item, 1)
                    }}
                />
            ))}
        </div>
        {msglist?.length > 0 && <div className="msg-list">
            {msglist.map((item, index) => (
                <MsgItem
                    msginfo={item}
                    key={index}
                    msgtype={queryParam('msgtype')}
                    headertitle={title}
                    toDetailFn={() => {
                        setMegread(item, 1)
                    }}
                />
            ))}
        </div>}
    </div>
}
