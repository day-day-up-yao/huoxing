import React from 'react'
import { connect } from 'react-redux'

import './index.scss'
import { mixUrl, isArray } from 'multiPublic/index'

const AdGeneralize = (props) =>
    <div className="news-details-ad-generalize" style={{ display: props.adImplant && isArray(props.adImplant) && props.adImplant.length !== 0 ? 'block' : 'none' }}>
        <h5>推广</h5>
        <div className="content">{props.adImplant.map(function (item, index) {
            // if (index <= 2) {
            if (index <= 0) {
                let adImgUrl = null
                switch (item.useType) {
                    case 1:
                        adImgUrl = item.url
                        break
                    case 2:
                        adImgUrl = item.url
                        break
                    case 3:
                        adImgUrl = mixUrl.news(`/${item.url}.html`)
                        break
                    case 4:
                        adImgUrl = mixUrl.news(`/list/${item.url}`)
                        break
                    case 5:
                        const featureUrl = item.url.indexOf('/') > -1 ? item.url.split('/')[1] : item.url
                        adImgUrl = mixUrl.news(`/feature/${featureUrl}`)
                        break
                    case 6:
                        adImgUrl = mixUrl.news(`/tags/${item.url}`)
                        break
                    default:
                }
                return <a href={adImgUrl} title={item.title} key={index} className={props.adImplant.length === 1 ? 'single' : 'single'} target="_blank">
                    <img src={item.pcImgSrc} alt={item.title}/>
                    <p>{item.title}</p>
                </a>
            }
        })}</div>
    </div>

const mapStateToProps = (state) => {
    return {
        // adGeneralize: state.multi.adData['6'] || []
        adImplant: state.multi.adImplant['2'] || []
    }
}

export default connect(mapStateToProps)(AdGeneralize)
