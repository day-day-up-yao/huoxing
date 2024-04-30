import React from 'react'
import { connect } from 'react-redux'
import { SimpleImg } from 'react-simple-img'

import './index.scss'
import videoBtn from './img/video-btn.png'

import { isArray, stringJsonItem, formatPublishTime } from 'multiPublic/index'
import LoadMore from 'multiCompsM/LoadMore'

const FeatureList = (props) => {
    const { topicContentList, loadMore } = props
    return <div className="m-feature-list-wrapper">
        {isArray(topicContentList.inforList) && topicContentList.inforList.map((item, index) => {
            return <div className="m-feature-topic-list-item" key={index}>
                <div className="item-right">
                    <a className="title-synopsis" title={item.title} href={item.url} target="_blank">
                        <h5>
                            {(item.authCat && item.authCat !== '') && <span>{item.authCat}</span>}
                            {item.title}
                        </h5>
                    </a>
                    <div className="relate-info">
                        <div className="author-time">
                            <time>{formatPublishTime(item.publishTime, (item.serverTime && item.serverTime !== '') && item.serverTime)}</time>
                        </div>
                    </div>
                </div>
                <a className="item-left" title={item.title} href={item.url} target="_blank">
                    {(item.newsCat && item.newsCat !== '') && <span>{item.newsCat}</span>}
                    <SimpleImg
                        applyAspectRatio
                        width={220}
                        height={160}
                        placeholder={'#f6f8fa'}
                        src={stringJsonItem(item.coverPic, 'pc')}
                        alt=''
                    />
                    {item.contentType === 1 ? <img className="videoImg" src={videoBtn} /> : null}
                </a>
            </div>
        })}
        <div className="no-feature" style={{ display: topicContentList.inforList.length === 0 ? 'block' : '' }}>
            暂无内容
        </div>
        {props.isMore ? <LoadMore
            onClick={loadMore}
            dataleng={topicContentList.inforList.length}
            style={{ display: topicContentList.inforList.length === 0 || topicContentList.currentPage === topicContentList.pageCount ? 'none' : 'block' }}
        /> : ''}
    </div>
}

const mapStateToProps = (state) => ({
    topicContentList: state.news.featureDetails.topicContentList
})

export default connect(mapStateToProps)(FeatureList)
