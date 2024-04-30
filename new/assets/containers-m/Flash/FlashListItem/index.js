import React, { useCallback, useState } from 'react'
import { number } from 'prop-types'
import { mixUrl, flashTime, flashRecognize, GetLength } from 'multiPublic/index'
import './index.scss'

const FlashListItem = (props) => {
    const { item, serverTime } = props
    const [openMsg, setOpenMsg] = useState(false)
    item.openMsg = false
    const titleContent = flashRecognize(item)
    const title = titleContent.title
    const contentHTML = titleContent.content.replace(/<\/?.+?>/g, '')
    const content = contentHTML.replace(/ /g, '')
    // const content = titleContent.content

    let reg = /【([^【】]+)】([^【】]*)/
    const cont = reg.exec(content) ? reg.exec(content)[2] : content
    if (GetLength(cont) > 80) item.openMsg = openMsg
    // const url = 'https://m.marsbit.co/flash/' + item.id + '.html'
    const handleClick = useCallback(() => {
        setOpenMsg(true)
    })
    console.log()

    // 点击展开和，查看原文，增加创建时间
    return <div className="new-fash-list" data-date="创建时间">
        <i className="iconfont iconfont-fangkuai fangkuai"></i>
        <div className="time-flash">{flashTime(item.createdTime, serverTime)}</div>
        <div className="text-flash clearfix">
            <div className="text-box">
                <a className="text-title" href={mixUrl.m(`/flash/${item.id}.html`)}>
                    {title}
                </a>
                <p className={`text-msg ${item.openMsg ? '' : 'maxH'}`}>
                    {content}
                    <a href={item.url} className="original" title="查看原文">
                        查看原文
                    </a>
                </p>
                <p className="open-msg" style={{ display: openMsg ? 'none' : 'inline-block' }} onClick={() => handleClick()}>展开 <i className="iconfont iconfont-open"></i></p>
                {item.images && <div className="text-img"><img className="item-img" src={item.images}/></div>}
            </div>
        </div>
    </div>
}
FlashListItem.propTypes = {
    // item: object.iuRequired,
    serverTime: number.isRequired
}

export default FlashListItem
