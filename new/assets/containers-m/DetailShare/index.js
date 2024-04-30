import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
// import { useParams } from 'react-dom'
// import HotNewsList from './HotNewsList'
import HotFlashList from '../FlashShareDetail/HotFlashList'
import { formatTime } from 'multiPublic/index'
import FooterDownload from 'multiCompsM/Layout/FooterDownload'
// import DownloadBtn from 'multiCompsM/DownloadBtn'
// import WebchatOpenInBrowser from 'multiCompsM/WebchatOpenInBrowser'
// import WxShareBox from 'multiCompsM/WxShareBox'
import useAppDownload from 'multiPublic/hooks/useAppDownload'
import './index.scss'
import NewsTip from '../../components/NewsTip'

const NewsdetailShare = (props) => {
    const { flashImportant, newsCur } = props
    const { t } = useTranslation()
    // const { newsId } = useParams()
    const newsContent = decodeURIComponent(newsCur.content)
    const linkid = props.match.params.newsId

    console.log(linkid)

    let htmlString = (newsCur.source && newsCur.source.toLocaleLowerCase() !== 'tradingview') ? newsContent.replace(/<a[^>]+>/g, function (a) {
        if (!/\srel\s*=/.test(a) && a.indexOf('marsbit.co') === -1) {
            return a.replace(/^<a\s/, '<a rel="nofollow" ')
        }
        return a
    }) : newsContent
    // const titleContent = flashRecognize(flashDetails)
    // const title = titleContent.title
    // const content = titleContent.content
    let subTitle = newsCur.subTitle
    let aritcleInfo = subTitle.replace(/<p><br><\/p>/g, '')
    aritcleInfo = aritcleInfo.replace(/&nbsp;/g, '')
    const appDownload = useAppDownload()
    // const [openInBrowser, setOpenInBrowser] = useState(false)
    console.log(props.match.params.newsId)
    const clickDownload = useCallback(() => {
        appDownload('newsDetail', linkid)
    }, [linkid])
    // useEffect(() => {
    //     if (!isWechat()) {
    //         setOpenInBrowser(appDownload('flashDetail', props.match.params.flashId, { doNotDownload: true }))
    //     }
    // }, [])
    useEffect(() => {
        // console.log(newsId)
        const imglist = newsContent.match(/<img.*?>/g)
        if (imglist) {
            const imgurl = imglist[0].match(/\ssrc=['"](.*?)['"]/)[1]
            const twettermeta = document.createElement('meta')
            twettermeta.name = 'twitter:image'
            twettermeta.content = imgurl
            document.getElementsByTagName('head')[0].appendChild(twettermeta)
        } else {
            const twettermeta = document.createElement('meta')
            twettermeta.name = 'twitter:image'
            twettermeta.content = 'http://www.marsbit.co/resource/images/huoxing24.png'
            document.getElementsByTagName('head')[0].appendChild(twettermeta)
        }
    }, [])
    return <div className="m-flash-share-detail details">
        <div className="details-header">
            <h6 id="flashNewsTime">{newsCur.title}</h6>
            <div className="list-text">
                <div className="author">
                    {newsCur.author}
                </div>
                <div className="time clearfix">
                    <span>{formatTime(newsCur.publishTime, 'yyyy-MM-dd')}</span></div>
                <div className="read-text-number">{t('news_hotd')}：{newsCur.hotCounts}</div>
            </div>
            {newsCur.synopsis !== '' && (<div className="news-synopsis">
              <p>{newsCur.synopsis.replace('【GPT】', '')}</p>
              {newsCur.synopsis.indexOf('【GPT】') > -1 && <NewsTip isH5/>}
            </div>)
            }
            {newsCur.subTitle !== '' && (<div className="news-synopsis adc clearfix">
                <pre style={{ lineHeight: '22px', color: 'rgba(51,51,51,70%' }} dangerouslySetInnerHTML={{ __html: aritcleInfo }} />
            </div>)}
        </div>
        <div className="ql-container ql-snow">
            <div id="editorShow" className="details-cont">
                {newsCur.editorFlag === 1 && <div className="ql-container ql-snow">
                    <div
                        id="newsDetailsContent"
                        className={`ql-editor`}
                        dangerouslySetInnerHTML={{ __html: htmlString }}
                    />
                </div>}
                <div className="d-hint">
                    {t('disclaimer_in')}
                </div>
            </div>
        </div>
        <HotFlashList data={flashImportant.inforList} title={t('hand_pick_flash')} />
        <a className="more-btn" onClick={clickDownload}>{t('see_more_info_download')}</a>
        <FooterDownload type="newsDetail" id={linkid}/>
        {/* <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} /> */}
        {/* <DownloadBtn/> */}
        {/* <WxShareBox list={flashImportant.inforList.slice(0, 3)} type="flashList" id={props.match.params.flashId} /> */}
    </div>
}
const mapStateToProps = (state) => ({
    newsCur: state.news.newsDetails.current || {},
    flashDetails: state.flash.flashDetails,
    flashImportant: state.flash.flashImportant,
    newsVideoList: state.news.hotNewsVideo
})
export default connect(mapStateToProps)(NewsdetailShare)
