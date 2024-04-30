import React, { useEffect, useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
// import HotNewsList from './HotNewsList'
import HotFlashList from './HotFlashList'
import { flashRecognize, flashTime, isWechat } from 'multiPublic/index'
import FooterDownload from 'multiCompsM/Layout/FooterDownload'
// import DownloadBtn from 'multiCompsM/DownloadBtn'
import WebchatOpenInBrowser from 'multiCompsM/WebchatOpenInBrowser'
import WxShareBox from 'multiCompsM/WxShareBox'
import useAppDownload from 'multiPublic/hooks/useAppDownload'
import ImgPopup from 'multiComps/ImgPopup'
// import bad from './img/bad.svg'
// import rate from './img/rate.svg'

const FlashShareDetail = (props) => {
    // newsVideoList 24H热门新闻
    const { t } = useTranslation()
    const { flashDetails, flashImportant } = props
    const titleContent = flashRecognize(flashDetails)
    const title = titleContent.title
    const content = titleContent.content

    const flashlinkid = props.match.params.flashId

    const [openInBrowser, setOpenInBrowser] = useState(false)
    const [imgSrc, setImgSrc] = useState('')
    const [imgShow, setImgShow] = useState(false)
    const appDownload = useAppDownload()
    const clickDownload = useCallback(() => {
        setOpenInBrowser(appDownload('flashDetail', flashlinkid))
    }, [])
    useEffect(() => {
        if (!isWechat()) {
            setOpenInBrowser(appDownload('flashDetail', flashlinkid, { doNotDownload: true }))
        }
    }, [])
    // scrollOffset, windowOffset, windowScroll, elementOffset,
    // useEffect(() => {
    //     const $share = document.getElementById('share-download-bottom')

    //     console.log(elementOffset($share).height) // 元素的高度  66
    //     console.log(windowOffset().height) // 窗口的高度 6737

    //     windowScroll(function (res) {
    //         // scrollOffset().top 是滚动条移动的距离
    //         // if (scrollOffset().top + windowOffset().height < elementOffset($tags).top + 66) {
    //         if (scrollOffset().top > elementOffset($share).height) {
    //             $share.style.position = 'fixed'
    //             if (res === 'up') {
    //                 $share.className = 'share-download-bottom active'
    //             } else if (res === 'down') {
    //                 $share.className = 'share-download-bottom'
    //             }
    //         }
    //     })
    // }, [])
    // let rateBar = parseInt(flashDetails.upCounts) / (parseInt(flashDetails.upCounts) + parseInt(flashDetails.downCounts)) * 100
    // let badBar = parseInt(flashDetails.downCounts) / (parseInt(flashDetails.upCounts) + parseInt(flashDetails.downCounts)) * 100
    useEffect(() => {
        if (flashDetails.images) {
            const twettermeta = document.createElement('meta')
            twettermeta.name = 'twitter:image'
            twettermeta.content = flashDetails.images
            document.getElementsByTagName('head')[0].appendChild(twettermeta)
        } else {
            const twettermeta = document.createElement('meta')
            twettermeta.name = 'twitter:image'
            twettermeta.content = 'http://www.marsbit.co/resource/images/huoxing24.png'
            document.getElementsByTagName('head')[0].appendChild(twettermeta)
        }
    }, [])
    return <div className="m-flash-share-detail">
        <div className="detail-cont">
            <h6>{title}</h6>
            <div className="cont-time"><p>MarsBit{t('headernavtwo')}</p><span>{flashTime(flashDetails.createdTime, 'yyyy-MM-dd hh:mm')}</span></div>
            <div className="detail-cont">
                <div className="content-words" dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '</br>') }} />
                <a href={flashDetails.url} className="original" style={{ display: `${!flashDetails.url ? 'none' : 'inline-block'}` }}>查看原文 ></a>
                {flashDetails.images && <img onClick={() => {
                    setImgShow(!imgShow)
                    setImgSrc(flashDetails.images)
                }} src={flashDetails.images}/>}
                <ImgPopup close={() => setImgShow(!imgShow)} show={imgShow} src={imgSrc}/>
            </div>
            {/* <div className="well-bad-cont">
                <div className="well-bad rate">
                    <span><img src={rate}/>利好 {flashDetails.upCounts}</span>
                </div>
                <div className="well-bad bad">
                    <span>{flashDetails.downCounts} 利空<img src={bad}/></span>
                </div>
                <div className="progress-bar">
                    <p className="rate-bar" style={{ width: `${rateBar.toFixed(1)}%` }}></p>
                    <p className="bad-bar" style={{ width: `${badBar.toFixed(1)}%` }}></p>
                    <div className="line-cont" style={{ left: `${rateBar.toFixed(1) - 3}%` }}>
                        <div className="line"></div>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="live-hint">{t('disclaimer_in')}</div>
        {/* <HotNewsList data={newsVideoList} title='24H热门新闻' /> */}
        <HotFlashList data={flashImportant.inforList} title={t('hand_pick_flash')} />
        <a className="more-btn" onClick={clickDownload}>{t('see_more_info_download')}</a>
        <FooterDownload type="flashDetail" id={flashlinkid}/>
        <WebchatOpenInBrowser openInBrowser={openInBrowser} setOpenInBrowser={setOpenInBrowser} />
        {/* <DownloadBtn/> */}
        <WxShareBox list={flashImportant.inforList.slice(0, 3)} type="flashList" id={flashlinkid} />
    </div>
}
const mapStateToProps = (state) => ({
    flashDetails: state.flash.flashDetails,
    flashImportant: state.flash.flashImportant,
    newsVideoList: state.news.hotNewsVideo
})
export default connect(mapStateToProps)(FlashShareDetail)
