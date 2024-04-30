import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './index.scss'
import { flashRecognize, flashTime } from 'multiPublic/index'
import ImgPopup from 'multiComps/ImgPopup'

const FlashDetail = (props) => {
    const { flashDetails } = props
    const titleContent = flashRecognize(flashDetails)
    const title = titleContent.title
    const content = titleContent.content
    const { t } = useTranslation()

    const [imgSrc, setImgSrc] = useState('')
    const [imgShow, setImgShow] = useState(false)

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
        </div>
        <div className="live-hint">{t('disclaimer_in')}</div>
    </div>
}
const mapStateToProps = (state) => ({
    flashDetails: state.flash.flashDetails
})

export default connect(mapStateToProps)(FlashDetail)
