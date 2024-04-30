import React from 'react'
import { flashTime, isPc, mixUrl } from 'multiPublic/index'

const httpHtml = (string) => {
    let reg = /(http:\/\/|https:\/\/)((\w|=|\?|#|%|:|\.|\/|&|-)+)/g
    return string && string.replace(reg, '<a target=_blank href="$1$2" class="web-link">网页链接</a>')
}
export default (props) => {
    const listObj = props.dataObj
    const itemObj = JSON.parse(listObj.content.content)
    const contentText = itemObj.content
    const contentNews = itemObj.news
    const newsImg = !contentNews ? '' : JSON.parse(contentNews.coverPic)
    const link = isPc() ? mixUrl.news(`/${contentNews && contentNews.id}.html`) : mixUrl.m(`/newsDetailShare/${contentNews && contentNews.id}.html`)

    // const userType = listObj.user.userType === 1 ? '嘉宾' : '主持人'
    return contentText ? <div className="dynamic-list-host clearfix">
        <div className="list-host-box">
            <h5 className="list-host-time">{flashTime(listObj.content.createTime)}</h5>
            <h4 className="list-host-title">{listObj.user.userName}</h4>
            <div className="list-host-text" dangerouslySetInnerHTML={{ __html: contentText.content && httpHtml(contentText.content).replace(/\n/g, '</br>') }}/>
            <div className="list-img-wrapper" style={{ display: (!contentText.imgs || !contentText.imgs[0]) ? 'none' : 'block' }}>
                <img onClick={props.showListImg} src={contentText.imgs ? contentText.imgs[0] : ''}/>
            </div>
        </div>
    </div> : <div className="dynamic-list-host clearfix">
        <div className="list-host-box">
            <h5 className="list-host-time">{flashTime(listObj.content.createTime)}</h5>
            <h4 className="list-host-title">{listObj.user.userName}</h4>
            <div className="list-accAuthor-text">
                <h4 className="titleHuoximg">我发布了MarsBit 专栏文章</h4>
                {props.mobile ? <a
                    className="list-author" target='_blank' href={link}>
                    <div className="list-author-text">
                        <h4>{contentNews.title}</h4>
                        <h6>{contentNews.synopsis}</h6>
                    </div>
                    <img className="list-author-img" src={newsImg.pc}/>
                </a> : <a
                    className="list-author" target='_blank' href={link}>
                    <img className="list-author-img" src={newsImg.pc}/>
                    <div className="list-author-text">
                        <h4>{contentNews.title}</h4>
                        <h6>{contentNews.synopsis}</h6>
                    </div>
                </a>}

            </div>
        </div>
    </div>
}
