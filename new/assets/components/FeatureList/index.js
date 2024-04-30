import React from 'react'
import { connect } from 'react-redux'
import { SimpleImg } from 'react-simple-img'

import './index.scss'
import videoBtn from './img/video-btn.png'

import { isArray, stringJsonItem, formatPublishTime } from 'multiPublic/index'
import LoadMore from 'multiComps/LoadMore'
// import NewsListItem from 'multiComps/NewsListItem'

const featureList = (props) => {
    // const { topicContentList, loadMore, itemProps } = props
    const { topicContentList, loadMore } = props
    return <div className="feature-topic-list-wrapper">
        {isArray(topicContentList.inforList) && topicContentList.inforList.map((item, index) => {
            // return <NewsListItem key={item.id} {...item} {...itemProps}/>
            // if (adImplant['3'].length === 0) {
            //     return <NewsListItem key={item.id} {...item} {...itemProps}/>
            // }
            // return adImplant['3'].map((adItem, nIndex) => {
            //     if (parseInt(adItem.topOrder) === index) {
            //         return <a className='ad-img-list clearfix' href={adItem.url} key={adItem.id} target='_blank'>
            //             <img src={adItem.pcImgSrc} alt=""/>
            //             <div className='ad-right'>
            //                 <h5>{adItem.title}</h5>
            //                 <p>{adItem.description}</p>
            //             </div>
            //         </a>
            //     }
            //     if (nIndex === adImplant['3'].length - 1) {
            //         return <NewsListItem key={item.id} {...item} {...itemProps}/>
            //     }
            // })
            // 新闻链接
            // const newsLink = mixUrl.news(`/${item.topicId}.html`)
            // 作者链接
            // const authLink = mixUrl.main(`/userCenter/${item.createdBy}`)
            return <div className="feature-topic-list-item" key={index}>
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
                <div className="item-right">
                    <a className="title-synopsis" title={item.title} href={item.url} target="_blank">
                        <h5>
                            {(item.authCat && item.authCat !== '') && <span>{item.authCat}</span>}
                            {item.title}
                        </h5>
                        <p>{item.synopsis && item.synopsis.replace('【GPT】', '')}</p>
                    </a>
                    <div className="relate-info">
                        <div className="author-time">
                            {/* {!item.nameHide && <a href={authLink} title={item.author} target="_blank">{item.author}</a>} */}
                            <time>{formatPublishTime(item.publishTime, (item.serverTime && item.serverTime !== '') && item.serverTime)}</time>
                        </div>
                        {/* {!item.tagsHide && <div className="tags">
                            关键字:
                            {stringArray(item.tagsV2).map(function (item, index) {
                                if (index >= 3 || !item.name) return false
                                const symbol = stringJsonItem(item.name, 'symbol')
                                const fullname = stringJsonItem(item.name, 'full_name')
                                const link = ((item.type === 3 || symbol === '') && mixUrl.news(`/tags/${encodeSearchKey(item.name)}`)) || mixUrl.main(`/marketsDetail/${fullname}/${symbol}`)
                                const name = ((item.type === 3 || fullname === '') && item.name) || fullname
                                return <a
                                    key={item.id}
                                    title={item.name}
                                    href={link}
                                    target="_blank">
                                    &nbsp;&nbsp;
                                    {name}
                                    {index < 2 && index !== stringArray(tagsV2).length - 1 && ','}
                                </a>
                            })}
                        </div>} */}
                        {/* {hotShow && <div className="hot">热度:&nbsp;{hotCounts}</div>} */}
                    </div>
                </div>
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
    topicContentList: state.news.featureDetails.topicContentList,
    adImplant: state.multi.adImplant
})

export default connect(mapStateToProps)(featureList)
