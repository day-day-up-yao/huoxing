import React, { useEffect, useCallback, useState } from 'react'
import { getDownLoadImg } from '../../redux/actions/public'
import { formatTime } from '../../public/index'
import Cookies from 'js-cookie'

import './index.scss'

const getTime = (date) => new Date(date.replace(/-/g, '/')).getTime()
const RightDownImg = (props) => {
    const [downloadImg, setDownloadImg] = useState({
        imgUrl: '',
        url: ''
    })
    useEffect(() => {
        getDownLoadImg().then(res => {
            Array.isArray(res.data) && res.data.map(item => {
                if (item.type === props.datarout) {
                    setDownloadImg({
                        imgUrl: item.imgUrl,
                        url: item.url
                    })
                }
            })
        }).catch((err) => {
            console.log('获取广告数据失败')
            throw err
        })
    }, [])

    // 存在cookies则当前时间日期大于cookies日期返回ture否则返回false，默认ture
    const tempDate = typeof window !== 'undefined' ? Cookies.get('rightAdImgCloseTime') : props.cookies.rightAdImgCloseTime
    const curDate = getTime(formatTime(Date.parse(new Date()), 'yyyy-MM-dd'))
    const [show, setShow] = useState(tempDate ? (curDate > getTime(tempDate)) : true)

    /** @desc 关闭悬浮图片广告 */
    const closeRightDownload = useCallback(() => {
        setShow(false)
        let domain = ''
        const env = process.env.NODE_ENV
        if (env === 'test') domain = 'marslib.com'
        if (env === 'production') domain = 'marsbit.co'
        Cookies.set('rightAdImgCloseTime', formatTime(Date.parse(new Date()), 'yyyy-MM-dd'), { domain: domain })
    }, [downloadImg])
    return <div className={`right-download-img ${show ? '' : 'close'}`}>
        <a href={downloadImg.url} target="_blank">
            <img src={downloadImg.imgUrl} alt=""/>
        </a>
        <span className="close-right-download" onClick={closeRightDownload}/>
    </div>
}

export default RightDownImg
