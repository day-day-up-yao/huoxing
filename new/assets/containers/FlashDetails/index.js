import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

// import { getDetailUporDown } from '../../redux/actions/flash'
import Toast from 'multiComps/Toast'
// import RightRiseDropList from 'multiComps/RightRiseDropList'
import RightNews from 'multiComps/RightNews'
import RightDownloadBox from 'multiComps/Home/RightDownloadBox'
import RightFlashAndDynamic from 'multiComps/Home/RightFlashAndDynamic'
import { flashRecognize, flashTime } from 'multiPublic/index'
import ImgPopup from 'multiComps/ImgPopup'
// import { isLogin } from 'multiComps/RegisterLogin/public'
import FlashUpDown from 'multiComps/FlashListItem/FlashUpDown'
import Sharebar from '../Details/Sharebar'
import { get24hHotNews } from 'multiRedux/actions/news'
import RelateNews from '../Details/RelatedNews'

const FlashDetails = (props) => {
    const { t } = useTranslation()
    const { flashDetails, dispatch, hotNews24H } = props

    const [imgSrc, setImgSrc] = useState('')
    const [imgShow, setImgShow] = useState(false)

    console.log(flashDetails)

    useEffect(() => {
        // const $share = document.getElementById('flash-detail-share')
        // windowScroll(function (res) {
        //     const sTop = scrollOffset().top
        //     // console.log('高度是：' + sTop)
        //     if (sTop > 160) {
        //         $share.style.position = 'fixed'
        //         $share.style.top = '80px'
        //     } else {
        //         $share.style.position = 'absolute'
        //         $share.style.top = 0
        //     }
        // })
        // 获取24H热门
        dispatch(get24hHotNews({
            lastDays: 1,
            readCounts: 50,
            newsCounts: 5
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取24H热门新闻错误')
        })
    }, [])
    useEffect(() => {
        const div = document.getElementsByClassName('flash-details-wrapper')[0]
        const clientHeight = div.clientHeight
        // setHeight(clientHeight);
        console.log(clientHeight)
    })
    // const upOrDown = useCallback((event) => {
    //     if (!isLogin(loginInfo.passportId, dispatch)) return false

    //     const params = {
    //         id: event.target.getAttribute('data-id'),
    //         status: event.target.getAttribute('data-status'),
    //         passportid: loginInfo.passportId,
    //         token: loginInfo.token
    //     }
    //     dispatch(getDetailUporDown(params)).then(function (res) {
    //         if (res.code !== 1) {
    //             Toast.info(res.msg)
    //         }
    //     }).catch(function (err) {
    //         console.log(err)
    //         Toast.info('快讯利好利空错误')
    //     })
    // }, [loginInfo])

    const addZero = (num) => {
        return num >= 10 ? num : '0' + num
    }
    const createdTime = new Date(flashDetails.createdTime)
    const weeksObj = {
        '1': '星期一',
        '2': '星期二',
        '3': '星期三',
        '4': '星期四',
        '5': '星期五',
        '6': '星期六',
        '0': '星期日'
    }
    const titleContent = flashRecognize(flashDetails)
    const title = titleContent.title
    let content = titleContent.content
    // let newstr = ''
    // if (content !== '') {
    //     newstr = String(content).replaceAll('noopener ', '')
    //     newstr = String(newstr).replaceAll('http://', '')
    //     newstr = String(newstr).replaceAll('noreferrer', '')
    //     newstr = String(newstr).replaceAll('rel=""', '')
    //     newstr = String(newstr).replaceAll('href="', 'href="http://')
    // } else {
    //     newstr = ''
    // }

    // content = '<p>' + newstr

    return <div className="layout-main flash-details-wrapper">
        <div className="layout-left">
            <div className="flash-news-date-box clearfix">
                <div className="left">
                    <h2>{addZero(createdTime.getDate())}</h2>
                    <p>{addZero(createdTime.getMonth() + 1)}月</p>
                </div>
                <div className="right">
                    <div>
                        <span>{weeksObj[createdTime.getDay()]}</span>
                    </div>
                    <h2>{`${flashTime(flashDetails.createdTime)}`}</h2>
                </div>
            </div>
            <div className="live-news-contain">
                <h1>{title}</h1>
                <h2>
                    <div className="content-words" dangerouslySetInnerHTML={{ __html: content }} />
                    {flashDetails.url && <a
                        rel="nofollow"
                        title="查看原文"
                        href={flashDetails.url} target="_blank">
                        「查看原文」
                    </a>}
                </h2>
                {flashDetails.images && <img onClick={() => {
                    setImgShow(!imgShow)
                    setImgSrc(flashDetails.images)
                }} alt={flashDetails.imagesRemark || title} src={flashDetails.images} />}
                <FlashUpDown details={flashDetails} />
                <div className="hint">
                    {t('disclaimer_in')}
                </div>
            </div>
            <div className="flash-news-share">
                <Sharebar />
            </div>
            <RelateNews
              newsCur={flashDetails}
              isflash
            />
        </div>
        <div className="layout-right">
            <RightFlashAndDynamic onlyOne={'flash'} />
            {/* <RightRiseDropList /> */}
            <RightDownloadBox />
            <RightNews id="interestNews" data={hotNews24H} title={t('24_hot_news')} />
        </div>
        <ImgPopup close={() => setImgShow(!imgShow)} show={imgShow} src={imgSrc} />
    </div>
}
const mapStateToProps = (state) => ({
    flashDetails: state.flash.flashDetails,
    loginInfo: state.multi.login.userInfo.info,
    hotNews24H: state.multi.news.hot24HNewsList.inforList
})

export default connect(mapStateToProps)(FlashDetails)
