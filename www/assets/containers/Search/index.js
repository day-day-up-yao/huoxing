import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import './index.scss'

import RightNews from 'multiComps/RightNews'
import RightTags from '../Home/RightTags'
import TopInput from './TopInput'
import BottomList from './BottomList'

export default () => {
    const { hotNews24H } = useSelector((state) => ({
        hotNews24H: state.multi.news.hot24HNewsList.inforList
    }), shallowEqual)

    return (
        <div className="search-page">
            <TopInput />
            <div className="search-page-bottom-wrap">
                <div className="search-page-bottom-left">
                    <BottomList />
                </div>
                <div className="search-page-bottom-right">
                    <RightTags />
                    <RightNews id="interestNews" data={hotNews24H} title="24H热门新闻" />
                </div>
            </div>
        </div>
    )
}
