import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import ReactTooltip from 'react-tooltip'
import { mixUrl, formatTime, stringArray, stringJsonItem, encodeSearchKey, isWechat } from 'multiPublic/index'
import AuthorType from './AuthorType'
import featureBackImg from '../../../public/img/liveshare-icon.jpg'
import './index.scss'
import NewsTip from '../../../components/NewsTip'

// import AudioPlay from './AudioPlay'
import VideoPlay from './VideoPlay'

const NewsContent = (props) => {
    const { newsCur } = props
    const { t } = useTranslation()
    const video = stringArray(newsCur.video)
    // const audio = stringArray(newsCur.audio)

    let newsContent = decodeURIComponent(newsCur.content)
    if (newsCur && newsCur.apiAdd !== 0) {
        // const reg = /<([a-z]+?)(?:\s+?[^>]*?)?>\s*?<\/(?!img)\1>/ig
        // newsContent = newsContent.replace(reg, '')
        newsContent = newsContent.replace(/<p><br><\/p>/g, '')
        newsContent = newsContent.replace(/<p><br\/><\/p>/g, '')
        newsContent = newsContent.replace(/<p><\/p>/g, '')
    }
    /** @desc a标签添加nofollow */
    let htmlString = (newsCur.source && newsCur.source.toLocaleLowerCase() !== 'tradingview') ? newsContent.replace(/<a[^>]+>/g, function (a) {
        if (!/\srel\s*=/.test(a) && a.indexOf('marsbit.co') === -1) {
            return a.replace(/^<a\s/, '<a rel="nofollow" ')
        }
        return a
    }) : newsContent

    /** @desc 如果图片没有alt属性，则设置为第一个标签 */
    const labelArr = stringArray(newsCur.tagsV2)
    let imgAlt = newsCur.title
    let subTitle = newsCur.subTitle ? newsCur.subTitle : ''
    let aritcleInfo = subTitle.replace(/<p><br><\/p>/g, '')
    aritcleInfo = aritcleInfo.replace(/&nbsp;/g, '')
    if (labelArr.length > 0) imgAlt = stringJsonItem(labelArr[0].name, 'full_name') || labelArr[0].name
    const altReg = /alt=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i
    htmlString = htmlString.replace(/<img[^>]+>/g, function (img) {
        const alt = img.match(altReg)
        if (!alt || (alt && alt[1] === '')) {
            return img.replace(/^<img\s/, `<img alt="${imgAlt}" `)
        }
        return img
    })

    // 初始化视频播放器
    useEffect(() => {
        const { videoInit } = require('media-quill/es/videoPlayer')
        if (isWechat()) {
            document.addEventListener('WeixinJSBridgeReady', function () {
                var audio = document.getElementsByTagName('video')
                for (var i = 0; i < audio.length; i++) {
                    audio[i].load()
                    videoInit()
                }
            }, false)
        } else {
            videoInit()
        }
    }, [])
    console.log(newsCur)
    return <div className="news-details-content">
        <h1>{newsCur.title}</h1>
        <div className="news-info">
            <a href={mixUrl.main(`/userCenter/${newsCur.createdBy}`)} className="author">{newsCur.author}</a>
            <AuthorType newsContent={newsCur}/>
            {/* <em>·</em> */}
            <time>{formatTime(newsCur.publishTime, 'yyyy-MM-dd')}</time>
            <span>{t('news_hotd')}: {newsCur.hotCounts}</span>
        </div>
        {newsCur.synopsis !== '' && (<div className="news-synopsis">
          <p>{newsCur.synopsis.replace('【GPT】', '')}</p>
          {newsCur.synopsis.indexOf('【GPT】') > -1 && <NewsTip/>}
        </div>)
        }
        {newsCur.subTitle !== '' && (<div className="news-aritcleInfo">
            <pre style={{ color: 'rgba(51,51,51,70%' }} dangerouslySetInnerHTML={{ __html: aritcleInfo }} />
        </div>)
        }
        {/* {audio.length !== 0 && <AudioPlay file={audio[0]}/>} */}
        {video.length !== 0 && <VideoPlay file={video[0]}/>}
        <div className="news-wxshare-icon">
            <img src={featureBackImg} alt="" />
        </div>
        {/* quill新编辑器 */}
        {newsCur.editorFlag === 1 && <div className="ql-container ql-snow">
            <div
                id="newsDetailsContent"
                className={`ql-editor`}
                dangerouslySetInnerHTML={{ __html: htmlString }}
            />
        </div>}
        {/* simditor旧编辑器 */}
        {(!newsCur.editorFlag || newsCur.editorFlag === 0) && <div
            id="newsDetailsContent"
            className={`simditor-body`}
            dangerouslySetInnerHTML={{ __html: htmlString }}
        />}
        <div className="tradingView" style={{ display: newsCur.author === 'TradingView' ? 'block' : 'none' }}>本文来源：{newsCur.author}<br/>原文标题：<a href={newsCur.originalUrl} target="_blank">{newsCur.title}</a></div>
        <div className="news-tips">
            <div style={{ display: 'none' }}>
                {t('news_sm_one')}<br/>{t('news_sm_two')}
                {t('news_sm_three')}
                <br/>
                {t('news_sm_four')}
            </div>
            {t('disclaimer_in')}
        </div>
        <div className="news-tags" id="newsTags" style={{ display: stringArray(newsCur.tagsV2).length > 0 ? 'block' : 'none' }}>
            {t('news_guan_j')}:
            {stringArray(newsCur.tagsV2).map(function (item, index) {
                if (!item.name) return
                const symbol = stringJsonItem(item.name, 'symbol')
                const fullname = stringJsonItem(item.name, 'full_name')
                const link = ((item.type === 3 || symbol === '') && mixUrl.news(`/tags/${encodeSearchKey(item.name)}`)) || mixUrl.main(`/marketsDetail/${encodeSearchKey(fullname)}/${encodeSearchKey(symbol)}`)
                const name = ((item.type === 3 || fullname === '') && item.name) || fullname
                // return <a
                //     key={index}
                //     title={name}
                //     href={link}
                //     target="_blank">
                //     {name}
                // </a>
                return <a
                    key={index}
                    title={name}
                    href={link}
                    target="_blank">
                    {name}
                </a>
            })}
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    newsCur: state.news.newsDetails.current || {}
})

export default connect(mapStateToProps)(NewsContent)
