import React, { useEffect, useCallback, useState } from 'react'
import { matchPath } from 'react-router-dom'
import { getDownLoadImg } from '../../../redux/actions/public'
import { formatTime, isJson } from '../../../public/index'
import Cookies from 'js-cookie'

import './index.scss'

const getTime = (date) => new Date(date.replace(/-/g, '/')).getTime()
const RightDownImg = (props) => {
    const [downloadImg, setDownloadImg] = useState({
        imgUrl: null,
        url: null
    })
    const [compShow, setCompShow] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
        getDownLoadImg().then(res => {
            if (!res.show) return
            if (!res.include || (res.include && res.include.indexOf(window.location.host)) === -1) return
            let allItem = null
            let selfItem = null
            Array.isArray(res.data) && res.data.map(item => {
                /** @desc item = {
                    "id": "1",, // react循环key
                    "params": { "path": "/:newsId.html", "exact": true, "strict": true }, // react的路由配置去掉component参数
                    "desc": "App下载", // 描述信息
                    "imgUrl": "https://static.huoxing24.com/production/img/index.jpg", // 图片地址
                    "url": "https://www.huoxing24.com/download?statisticalParameter=hx01" // 链接地址
                } */
                if (item.type === '') {
                    allItem = {
                        imgUrl: item.imgUrl,
                        url: item.url
                    }
                    setCompShow(true)
                }
                if (isJson(item.params) && matchPath(window.location.pathname, item.params)) {
                    selfItem = {
                        imgUrl: item.imgUrl,
                        url: item.url
                    }
                    setCompShow(true)
                }
            })

            if (selfItem) {
                setDownloadImg(selfItem)
            }
            if (!selfItem && allItem) {
                setDownloadImg(allItem)
            }

            // 存在cookies则当前时间日期大于cookies日期返回ture否则返回false，默认ture
            const tempDate = Cookies.get('rightAdImgCloseTime')
            const curDate = getTime(formatTime(Date.parse(new Date()), 'yyyy-MM-dd'))
            setShow(tempDate ? (curDate > getTime(tempDate)) : true)
        }).catch((err) => {
            console.log('获取广告数据失败')
            throw err
        })
    }, [])

    const closeRightDownload = useCallback(() => {
        setShow(false)
        let domain = ''
        const env = process.env.NODE_ENV
        if (env === 'test') domain = 'marslib.com'
        if (env === 'production') domain = 'huoxing24.com'
        Cookies.set('rightAdImgCloseTime', formatTime(Date.parse(new Date()), 'yyyy-MM-dd'), { domain: domain })
    }, [downloadImg])
    return <div className={`right-download-img ${show && compShow ? '' : 'close'}`}>
        <a href={downloadImg.url} target="_blank">
            <img src={downloadImg.imgUrl} alt=""/>
        </a>
        <span className="close-right-download" onClick={closeRightDownload}/>
    </div>
}

export default RightDownImg
