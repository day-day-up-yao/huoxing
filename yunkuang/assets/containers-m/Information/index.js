import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Toast from '../../components/Toast'
import { formatTime } from '../../public/js/index'
import './index.scss'
export default () => {
    const dispatch = useDispatch()
    const [infomsg, setInfomsg] = useState([])
    const [speedmsg, setSpeedmsg] = useState([])
    const [select, setSelect] = useState(1)
    const [open, setOpen] = useState(-1)
    useEffect(() => {
        dispatch.product.newsInfo({
            currentPage: 0,
            pageSize: 40,
            channelId: 24,
            refreshTime: new Date().getTime(),
            deviceSource: 'web'
        }).then((res) => {
            if (res.code === 1) {
                setInfomsg(res.obj.inforList)
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            console.log(err)
            Toast.info('资讯获取失败')
        })
        dispatch.product.showLives({
            currentPage: 0,
            pageSize: 30,
            refreshTime: new Date().getTime(),
            deviceSource: 'web'
        }).then((res) => {
            if (res.code === 1) {
                setSpeedmsg(res.obj.inforList)
            } else {
                Toast.info(res.msg)
            }
        }).catch((err) => {
            console.log(err)
            Toast.info('快讯获取失败')
        })
    }, [])
    return <div className="info">
        <div className="info-top">
            <div className={select === 1 ? 'info-top-con' : ''} onClick={() => { setSelect(1) }}>快讯</div>
            <div className={select === 2 ? 'info-top-con' : ''} onClick={() => { setSelect(2) }}>深度</div>
        </div>
        {select === 1 ? (
            <div className="speedmsg-con">
                {speedmsg.map((item, index) => {
                    return <div className="speedmsg-con-msg" key={index}>
                        <div className="speedmsg-con-msg-pson">
                            <div></div>
                        </div>
                        <div className="speedmsg-con-msg-list">
                            <div className="speedmsg-con-msg-list-time">{formatTime(Number(item.createdTime), 'yyyy-MM-dd hh:mm')}</div>
                            <a href={`/informessage/${item.id}?sign=快讯`}><h3>{item.content.split('【')[1].split('】')[0]}</h3></a>
                            <div className="speedmsg-con-msg-list-info">
                                <p className={open === index ? 'speedmsg-con-msg-list-info-psee' : 'speedmsg-con-msg-list-info-p'}>{item.content.split('【')[1].split('】')[1]}</p>
                                <p className="speedmsg-con-msg-list-info-open"
                                    style={{ display: open === index ? 'none' : '' }}
                                    onClick={() => { setOpen(index) }}>
                                    <span>展开</span>
                                    <span>
                                        <img src="https://www.huoxing24.com/img/m-img/down-img-f0fd33d29f.png" alt=""/>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        ) : (
            <div className="info-con">
                {infomsg.map((item, index) => {
                    return <a href={`/informessage/${item.id}?sign=深度`} key={index}>
                        <div className="info-con-msg">
                            <div className="info-con-msg-left">
                                <h2>{item.title}</h2>
                                <p>
                                    <span>{item.nickName}</span>
                                    <span>{formatTime(Number(item.publishTime), 'yyyy-MM-dd hh:mm')}</span>
                                </p>
                            </div>
                            <div className="info-con-msg-right">
                                <img src={JSON.parse(item.coverPic).pc} alt=""/>
                            </div>
                        </div>
                    </a>
                })}
            </div>
        )}
    </div>
}
