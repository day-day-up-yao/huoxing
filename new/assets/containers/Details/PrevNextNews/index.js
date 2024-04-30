import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { mixUrl } from 'multiPublic'
import RightItemWrapper from 'multiComps/RightItemWrapper'

const PrevNewsNext = (props) => {
    const next = props.newsNext
    const prev = props.newsPrev
    let newsNext = (!next.title && !prev.title) ? <div id="newsNext"/> : <RightItemWrapper id="newsNext">
        {prev.title && <a className={`news-details-prev-next-page ${next.title && 'prev'} clearfix`} href={mixUrl.news(`/${prev.id}.html`)} target="_blank">
            <h5>上一篇</h5>
            <p>{prev.title}</p>
        </a>}
        {next.title && <a className="news-details-prev-next-page next clearfix" href={mixUrl.news(`/${next.id}.html`)} target="_blank">
            {/* <img src={stringJsonItem(next.coverPic, 'pc')} alt={next.title}/> */}
            <h5>下一篇</h5>
            <p>{next.title}</p>
        </a>}
    </RightItemWrapper>
    return newsNext
}

const mapStateToProps = (state) => {
    return {
        newsNext: state.news.newsDetails.next || {},
        newsPrev: state.news.newsDetails.prev || {}
    }
}

export default connect(mapStateToProps)(PrevNewsNext)
