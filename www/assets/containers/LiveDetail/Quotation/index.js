import React, { Component } from 'react'
import { getMarket } from '../../../redux/actions/live'
import './index.scss'
import { formatPercent } from 'multiPublic/index'
import Toast from 'multiComps/Toast'

class Quotation extends Component {
    state = {
        market: []
    }

    componentDidMount () {
        this.getMarketFn()
        setInterval(() => {
            this.getMarketFn()
        }, 30000)
    }

    getMarketFn = () => {
        let This = this
        getMarket().then(res => {
            if (res.code === 1) {
                let market = res.data
                This.setState({
                    market: market
                })
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info(`获取行情数据错误`)
        })
    }

    render () {
        return <div className="quotation-page-wrapper">
            {this.state.market && this.state.market.map((item, index) => {
                return <div className="page-wrapper-list" key={index}>
                    <h5>{item.base} / {item.full_name}</h5>
                    <h3>
                        ${item.price}
                        <span
                            className={`list-space ${item.change_percent > 0 ? 'rise' : 'fall'}`}>
                            {item.change_percent > 0 ? `+${formatPercent(item.change_percent)}` : `${formatPercent(item.change_percent)}`}
                        </span>
                    </h3>
                </div>
            })}
        </div>
    }
}

export default Quotation
