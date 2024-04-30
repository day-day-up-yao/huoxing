import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { mixUrl, isArray, formatPrice, formatTotal, formatPercent } from '../../public/index'
import { getRiseDropData } from '../../redux/actions/market'
import Toast from '../Toast'

import defIcon from '../../public/img/default-coin-icon.png'

import RightItemWrapper from '../RightItemWrapper'

const RightRiseDropList = (props) => {
    const { dispatch, riseDrop } = props

    /** @desc 获取涨跌幅参数 */
    const [params, setParams] = useState({
        sort: 'desc',
        order: 'change_1h',
        orderKey: 'change_percent_1h' // 用于获取数据，传参不需要
    })

    const getData = useCallback((event) => {
        const type = event.target.getAttribute('data-type')
        const param = event.target.getAttribute('data-param')

        if (type === 'sort') {
            setParams({
                ...params,
                sort: param
            })
        } else if (type === 'order') {
            const paramArr = param.split('_percent')
            setParams({
                ...params,
                order: paramArr[0] + paramArr[1],
                orderKey: param
            })
        }
    }, [params])
    useEffect(() => {
        dispatch(getRiseDropData(params)).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('获取涨跌幅错误')
            throw err
        })
    }, [params])

    return <RightItemWrapper
        title="涨跌幅"
        titleBtn={<a className="more-icon" href={mixUrl.token()} target="_blank"/>}>
        <div className="right-rise-drop-list">
            <div className="header">
                <div className="rise-drop-btn">
                    <a
                        onClick={getData}
                        className={params.sort === 'desc' ? 'active' : ''}
                        data-param="desc"
                        data-type="sort">
                        涨幅
                    </a>
                    <a
                        onClick={getData}
                        className={params.sort === 'asc' ? 'active' : ''}
                        data-param="asc"
                        data-type="sort">
                        跌幅
                    </a>
                </div>
                <div className="time-btn">
                    <a
                        onClick={getData}
                        className={params.orderKey === 'change_percent_1h' ? 'active' : ''}
                        data-param="change_percent_1h" data-type="order">
                        1小时</a>
                    <a
                        onClick={getData} className={params.orderKey === 'change_percent' ? 'active' : ''}
                        data-param="change_percent" data-type="order">
                        24小时
                    </a>
                    <a
                        onClick={getData}
                        className={params.orderKey === 'change_percent_7d' ? 'active' : ''}
                        data-param="change_percent_7d" data-type="order">
                        1周
                    </a>
                </div>
            </div>
            <table className="content">
                <thead>
                    <tr>
                        <td>排名</td>
                        <td>币种</td>
                        <td>成交额</td>
                        <td>价格(USD)</td>
                        <td>{params.sort === 'desc' ? '涨幅' : '跌幅'}</td>
                    </tr>
                </thead>
                <tbody>{isArray(riseDrop.inforList) && riseDrop.inforList.map(function (item, index) {
                    const orderVal = item[params.orderKey]
                    const link = mixUrl.token(`/${item.symbol}.html`)
                    return <tr key={index}>
                        <td><a href={link} target="_blank">{index + 1}</a></td>
                        <td>
                            <a href={link} target="_blank" title={item.symbol || item.name}>
                                <img onError={(event) => {
                                    event.target.onerror = null
                                    event.target.src = defIcon
                                }} src={item.icon} alt={item.name || item.symbol}/>
                                {item.symbol || item.name}
                            </a>
                        </td>
                        <td>
                            <a href={link} target="_blank">{formatTotal(item.total_value)}</a>
                        </td>
                        <td>
                            <a href={link} target="_blank">{formatPrice(item.price)}</a>
                        </td>
                        <td className={orderVal < 0 ? 'drop' : ''}>
                            <a href={link} target="_blank">{formatPercent(orderVal)}</a>
                        </td>
                    </tr>
                })}</tbody>
            </table>
        </div>
    </RightItemWrapper>
}

const mapStateToProps = (state) => ({
    riseDrop: state.multi.market.riseDrop
})

export default connect(mapStateToProps)(RightRiseDropList)
