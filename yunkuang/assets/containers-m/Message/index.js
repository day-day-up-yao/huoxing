import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookie from 'js-cookie'

import './index.scss'

import Header from '../../components-m/Headers'
import Banner from './Banner'
import ItemMsg from './ItemMsg'

import sysimg from '../../public/imgs/h5img/other/xt.png'
import xximg from '../../public/imgs/h5img/other/xx.png'
import spotimg from '../../public/imgs/h5img/other/spot.png'
import zximg from '../../public/imgs/h5img/other/zx.png'
import Toast from '../../components/Toast'

export default () => {
    const dispatch = useDispatch()
    const { messagebanner } = useSelector(state => ({
        messagebanner: state.product.messagebanner
    }))
    const [sysdesc, setSysdesc] = useState({
        desc: '',
        num: 0
    })
    const [spotdesc, setSpotdesc] = useState({
        desc: '',
        num: 0
    })
    const [pushdesc, serPushdesc] = useState({
        desc: '',
        num: 0
    })
    useEffect(() => {
        if (Cookie.get('user_id')) {
            getUserMsg(1)
            getUserMsg(2)
            getPushfn()
        }
    }, [])
    const getUserMsg = useCallback((num) => {
        dispatch.public.userMsglist({
            category: num,
            curPage: 1,
            pageSize: 20
        }).then((res) => {
            if (res.code === 0) {
                if (res.data.total > 0) {
                    if (num === 1) {
                        setSysdesc({
                            desc: res.data.msgList[0].title,
                            num: res.data.noReadMsgNum
                        })
                    } else {
                        setSpotdesc({
                            desc: res.data.msgList[0].title,
                            num: res.data.noReadMsgNum
                        })
                    }
                }
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
                dispatch.public.getPushcount({
                    clientType: 1
                }).then((resls) => {
                    if (res.code === 0) {
                        if (res.data.messageList.length > 0) {
                            serPushdesc({
                                desc: res.data.messageList[0].title,
                                num: resls.data
                            })
                        }
                    }
                })
            } else {
                Toast.info(res.msg)
            }
        })
    }, [])
    return <div className="message">
        <Header title="消息中心" />
        <div className="message-center">
            <Banner bannerlist={messagebanner} />
            <ItemMsg icon={sysimg} title={'系统公告'} desc={sysdesc.desc} number={sysdesc.num} type={1} />
            <ItemMsg icon={xximg} title={'消息通知'} desc={pushdesc.desc} number={pushdesc.num} type={2} />
            <ItemMsg icon={spotimg} title={'活动推荐'} desc={spotdesc.desc} number={spotdesc.num} type={3} />
            <ItemMsg icon={zximg} title={'在线客服'} type={0} />
        </div>
    </div>
}
