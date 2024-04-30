import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Button} from 'antd'
import './index.scss'
import {getCountList} from '../../actions/system/count.action'
import {tranFormat} from '../../public/index'

const mapStateToProps = (state) => {
    return {
        countInfo: state.countInfo
    }
}

class Count extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            selected: 1,
            data: []
        }
    }

    componentDidMount () {
        this.props.dispatch(getCountList({}, (data) => {
            let countData = [
                {name: '今日快讯 (算法 / 爬虫 / 人工)', count: data.apiAlgoDayLivesCount, count2: data.apiDayLivesCount, apiCount: data.dayLivesCount - data.apiDayLivesCount - data.apiAlgoDayLivesCount},
                {name: '今日新闻 (机器 / 人工)', count: data.apiDayNewsCount, apiCount: data.dayNewsCount - data.apiDayNewsCount},
                {name: '今日策略 (机器 / 人工)', count: data.apiDayStrategyCount, apiCount: data.dayStrategyCount - data.apiDayStrategyCount},
                {name: '昨日快讯 (算法 / 爬虫 / 人工)', count: data.apiAlgoYesterdayLivesCount, count2: data.apiYesterdayLivesCount, apiCount: data.yesterdayLivesCount - data.apiYesterdayLivesCount - data.apiAlgoYesterdayLivesCount},
                {name: '昨日新闻 (机器 / 人工)', count: data.apiYesterdayNewsCount, apiCount: data.yesterdayNewsCount - data.apiYesterdayNewsCount},
                {name: '昨日策略 (机器 / 人工)', count: data.apiYesterdayStrategyCount, apiCount: data.yesterdayStrategyCount - data.apiYesterdayStrategyCount},
                {name: '本周快讯 (算法 / 爬虫 / 人工)', count: data.apiAlgoWeekLivesCount, count2: data.apiWeekLivesCount, apiCount: data.weekLivesCount - data.apiWeekLivesCount - data.apiAlgoWeekLivesCount},
                {name: '本周新闻 (机器 / 人工)', count: data.apiWeekNewsCount, apiCount: data.weekNewsCount - data.apiWeekNewsCount},
                {name: '本周策略 (机器 / 人工)', count: data.apiWeekStrategyCount, apiCount: data.weekStrategyCount - data.apiWeekStrategyCount},
                {name: '上周快讯 (算法 / 爬虫 / 人工)', count: data.apiAlgoLastWeekLivesCount, count2: data.apiLastWeekLivesCount, apiCount: data.lastWeekLivesCount - data.apiLastWeekLivesCount - data.apiAlgoLastWeekLivesCount},
                {name: '上周新闻 (机器 / 人工)', count: data.apiLastWeekNewsCount, apiCount: data.lastWeekNewsCount - data.apiLastWeekNewsCount},
                {name: '上周策略 (机器 / 人工)', count: data.apiLastWeekStrategyCount, apiCount: data.lastWeekStrategyCount - data.apiLastWeekStrategyCount},
                {name: '本月快讯 (算法 / 爬虫 / 人工)', count: data.apiAlgoMonthLivesCount, count2: data.apiMonthLivesCount, apiCount: data.monthLivesCount - data.apiMonthLivesCount - data.apiAlgoMonthLivesCount},
                {name: '本月新闻 (机器 / 人工)', count: data.apiMonthNewsCount, apiCount: data.monthNewsCount - data.apiMonthNewsCount},
                {name: '本月策略 (机器 / 人工)', count: data.apiMonthStrategyCount, apiCount: data.monthStrategyCount - data.apiMonthStrategyCount},
                {name: '上月快讯 (算法 / 爬虫 / 人工)', count: data.apiAlgoLastMonthLivesCount, count2: data.apiLastMonthLivesCount, apiCount: data.lastMonthLivesCount - data.apiLastMonthLivesCount - data.apiAlgoLastMonthLivesCount},
                {name: '上月新闻 (机器 / 人工)', count: data.apiLastMonthNewsCount, apiCount: data.lastMonthNewsCount - data.apiLastMonthNewsCount},
                {name: '上月策略 (机器 / 人工)', count: data.apiMonthStrategyCount, apiCount: data.lastMonthStrategyCount - data.apiMonthStrategyCount},
                {name: '全部快讯 (算法 / 爬虫 / 人工)', count: data.apiAlgoTotalLivesCount, count2: data.apiTotalLivesCount, apiCount: data.totalLivesCount - data.apiTotalLivesCount - data.apiAlgoTotalLivesCount},
                {name: '全部新闻 (机器 / 人工)', count: data.apiTotalNewsCount, apiCount: data.totalNewsCount - data.apiTotalNewsCount},
                {name: '全部策略 (机器 / 人工)', count: data.apiTotalStrategyCount, apiCount: data.totalStrategyCount - data.apiTotalStrategyCount}
            ]

            this.setState({
                data: countData
            })
        }))
    }

    render () {
        return this.state.data.length === 0 ? <div>加载中...</div> : <div className="count-index">
            {this.state.data.map((item, index) => {
                return <div key={index} className="card">
                    <div className="content">
                        <p className="name">{item.name}</p>
                        <p className="number">{item.count2 !== undefined ? tranFormat(item.apiCount) + '/' + tranFormat(item.count2) + '/' + tranFormat(item.count) : tranFormat(item.apiCount) + '/' + tranFormat(item.count)}</p>
                    </div>
                </div>
            })}
        </div>
    }
}

export default connect(mapStateToProps)(Count)
