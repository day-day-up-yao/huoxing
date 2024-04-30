import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { flashRecognize, flashTime, mixUrl } from 'multiPublic/index'
import './index.scss'

// const formatDate = (time) => {
//     const newDate = new Date(time)
//     const day = newDate.getDay()
//     const year = newDate.getFullYear()
//     const mouth = newDate.getMonth() + 1
//     const date = newDate.getDate()
//     const dayArr = ['日', '一', '二', '三', '四', '五', '六']
//     return {
//         month: `${mouth < 10 ? '0' + mouth : mouth}/${year}`,
//         week: `星期${dayArr[day]}`,
//         day: date
//     }
// }
const FalshList = (props) => {
    // const flashToday = formatDate((props.data && props.data.length !== 0) ? props.data[0].createdTime : Date.parse(new Date()))
    const [dataArr] = useState(props.data)
    const { t } = useTranslation()
    // const onShow = useCallback((nIndex) => {
    //     let newsArr = []
    //     props.data.map((item, index) => {
    //         if (nIndex === index) {
    //             let obj = { 'show': true, ...item }
    //             newsArr.push(obj)
    //         } else {
    //             newsArr.push(item)
    //         }
    //     })
    //     setDataArr(newsArr)
    // }, [])
    return <div className="flash-content-bg news-fash">
        <div className="title-section clearfix">
            {/* <p className="date-day">{flashToday.day}</p>
            <p className="date-month">
                <span className="week">{flashToday.week}</span>
                <span className="month">{flashToday.month}</span>
            </p> */}
            <p className="title">7x24 {t('headernavtwo')}</p>
        </div>
        <div className="lives-box">
            {
                dataArr.map((item, index) => {
                    const titleContent = flashRecognize(item)
                    const title = titleContent.title
                    // const content = titleContent.content
                    return <div className="new-fash-list" key={item.id} data-date="1576830749000">
                        <div className="time-flash">
                            <i className="iconfont iconfont-circle new-mark"></i>
                            {flashTime(item.createdTime, 'MM-dd hh:mm')}
                        </div>
                        <div className="text-flash clearfix">
                            <div data-id={item.id} className="text-box">
                                <a className="text-title " href={mixUrl.m(`/flashshare/${item.id}.html`)} title={title}>{title}</a>
                                {/* <p className={`text-msg ${item.show === true ? '' : 'maxH'}`}>{content}</p> */}
                                {/* <p className="open-msg" style={{ display: `${item.show === true ? 'none' : 'block'}` }} onClick={() => { onShow(index) }}>展开 <span></span></p> */}
                            </div>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                    </div>
                })
            }
        </div>
    </div>
}
export default FalshList
