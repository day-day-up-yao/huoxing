import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { isArray } from 'multiPublic/index'
import LoadMore from 'multiComps/LoadMore'
import NewsListItem from 'multiComps/NewsListItem'

const NewsList = (props) => {
    const { newsList, loadMore, itemProps } = props
    return <div className="news-list-wrapper">
        {isArray(newsList.inforList) && newsList.inforList.map((item, index) => {
            return <NewsListItem key={item.id} {...item} {...itemProps}/>
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
        })}
        <div className="no-news" style={{ display: newsList.inforList.length === 0 ? 'block' : '' }}>
            暂无内容
        </div>
        {props.isMore ? <LoadMore
            onClick={loadMore}
            dataleng={newsList.inforList.length}
            style={{ display: newsList.inforList.length === 0 || newsList.currentPage === newsList.pageCount ? 'none' : 'block' }}
        /> : ''}
    </div>
}

const mapStateToProps = (state) => ({
    newsList: state.multi.news.newsList,
    adImplant: state.multi.adImplant
})

export default connect(mapStateToProps)(NewsList)
