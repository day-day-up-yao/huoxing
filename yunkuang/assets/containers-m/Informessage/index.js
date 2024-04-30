import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Toast from '../../components/Toast'
import { formatTime, isPc, queryParam } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import './index.scss'
export default () => {
    const { newsId } = useParams()
    const dispatch = useDispatch()
    const [msghtml, setMsghtml] = useState({
        title: '',
        content: '',
        nickName: '',
        publishTime: '',
        createdTime: '',
        upCounts: '',
        downCounts: ''
    })
    useEffect(() => {
        // console.log(queryParam('sign'))
        if (queryParam('sign') === '深度') {
            dispatch.product.newsMessage({
                id: newsId
            }).then((res) => {
                if (res.code === 1) {
                    setMsghtml(res.obj.current)
                } else {
                    Toast.info(res.msg)
                }
            }).catch((err) => {
                console.log(err)
                Toast.info('资讯详情获取失败')
            })
            return
        }
        if (queryParam('sign') === '快讯') {
            dispatch.product.liveList({
                id: newsId
            }).then((res) => {
                if (res.code === 1) {
                    setMsghtml(res.obj)
                } else {
                    Toast.info(res.msg)
                }
            }).catch((err) => {
                console.log(err)
                Toast.info('快讯详情获取失败')
            })
        }
    }, [])
    return <div className="infomsg">
        <div className="infomsg-top">
            {isPc() ? '' : <Header title={`${queryParam('sign')}详情`}/>}
        </div>
        {queryParam('sign') === '深度' ? (
            <div className="infomsg-con">
                <h3>{msghtml.title}</h3>
                <div className="infomsg-con-time">
                    <span>{msghtml.nickName}</span>
                    <span>{formatTime(Number(msghtml.publishTime), 'yyyy-MM-dd hh:mm')}</span>
                </div>
                <div className="infomsg-con-msg">
                    {msghtml ? (
                        <div dangerouslySetInnerHTML={{ __html: msghtml.content.replace('<body>', '').replace('</body>', '') }} />
                    ) : ''}
                </div>
            </div>
        ) : queryParam('sign') === '快讯' ? (
            <div className="infomsg-con">
                <h3>{msghtml.content ? msghtml.content.split('【')[1].split('】')[0] : ''}</h3>
                <div className="infomsg-con-time">
                    <span>火星快讯</span>
                    <span>{formatTime(Number(msghtml.createdTime), 'yyyy-MM-dd hh:mm')}</span>
                </div>
                <div className="infomsg-con-msg">
                    {msghtml.content ? (
                        <p>{msghtml.content.split('【')[1].split('】')[1]}</p>
                    ) : ''}
                </div>
                <div className="infomsg-con-bottom">
                    <div className="infomsg-con-bottom-t">
                        <div className="infomsg-con-bottom-t-l">
                            <div className="infomsg-con-bottom-t-l-img">
                                <img src="https://news.huoxing24.com/build/rate-f76c68f7.svg" alt=""/>
                            </div>
                            <p> 利好{msghtml.upCounts}</p>
                        </div>
                        <div className="infomsg-con-bottom-t-r">
                            <p>利空{msghtml.downCounts} </p>
                            <div className="infomsg-con-bottom-t-l-img">
                                <img src="https://news.huoxing24.com/build/bad-de86495f.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="infomsg-con-bottom-b">
                        <div className="infomsg-con-bottom-b-l" style={{ width: `${msghtml.upCounts / (msghtml.upCounts + msghtml.downCounts) * 100}%` }}></div>
                        <div className="infomsg-con-bottom-b-c"></div>
                        <div className="infomsg-con-bottom-b-r" style={{ width: `${msghtml.downCounts / (msghtml.upCounts + msghtml.downCounts) * 100}%` }}></div>
                    </div>
                </div>
            </div>
        ) : ''}
    </div>
}
