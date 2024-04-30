/** @desc 注：此处用法有误
 * 虽然，更改params.current时，dom重新渲染了。但实际上原因不是因为更改params.current。
 * 是因为有dispatch了actions，导致redux更新了dom，在更新domg时又去重新获取了params，而params使用useRef，react帮助存储了值
 * 纯粹的更改useRef的存储值，并不会导致dom更新
 * 如果涉及到dom更新，应该使用useState，useEffect结合
 * */

import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { mixUrl, isArray, formatPrice, convertPercent } from 'multiPublic/index'
import { getRiseDropData } from 'multiRedux/actions/public'
import Toast from 'multiComps/Toast'

import defIcon from 'multiPublic/img/default-coin-icon.png'

import RightItemWrapper from '../RightItemWrapper'

const RightRiseDropList = (props) => {
    const { dispatch, riseDrop } = props

    /** @desc 获取涨跌幅参数 */
    const params = useRef({
        sort: 'desc',
        order: 'change_1h',
        orderKey: 'change_percent_1h' // 用于获取数据，传参不需要
    })

    const getData = (event) => {
        if (event) {
            const type = event.target.getAttribute('data-type')
            const param = event.target.getAttribute('data-param')

            if (type === 'sort') {
                params.current = {
                    ...params.current,
                    sort: param
                }
            } else if (type === 'order') {
                const paramArr = param.split('_percent')
                params.current = {
                    ...params.current,
                    order: paramArr[0] + paramArr[1],
                    orderKey: param
                }
            }
        }

        dispatch(getRiseDropData(params.current)).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('获取涨跌幅错误')
            throw err
        })
    }
    useEffect(() => {
        getData()
    }, [])

    const { sort, orderKey } = params.current
    return <RightItemWrapper
        title="涨跌幅"
        titleBtn={<a className="more-icon" href={mixUrl.main('/markets')} target="_blank"/>}>
        <div className="right-rise-drop-list">
            <div className="header">
                <div className="rise-drop-btn">
                    <a onClick={getData} className={sort === 'desc' ? 'active' : ''} data-param="desc"
                       data-type="sort">涨幅</a>
                    <a onClick={getData} className={sort === 'asc' ? 'active' : ''} data-param="asc"
                       data-type="sort">跌幅</a>
                </div>
                <div className="time-btn">
                    <a onClick={getData} className={orderKey === 'change_percent_1h' ? 'active' : ''}
                       data-param="change_percent_1h" data-type="order">1小时</a>
                    <a onClick={getData} className={orderKey === 'change_percent' ? 'active' : ''}
                       data-param="change_percent" data-type="order">24小时</a>
                    <a onClick={getData} className={orderKey === 'change_percent_7d' ? 'active' : ''}
                       data-param="change_percent_7d" data-type="order">1周</a>
                </div>
            </div>
            <table className="content">
                <thead>{
                    <tr>
                        <td>排名</td>
                        <td>名称</td>
                        <td>价格(USD)</td>
                        <td>涨幅</td>
                    </tr>
                }</thead>
                <tbody>{isArray(riseDrop.inforList) && riseDrop.inforList.map(function (item, index) {
                    const orderVal = item[params.orderKey]
                    const link = ''
                    return <tr key={index}>
                        <td><a href={link} target="_blank">{index + 1}</a></td>
                        <td>
                            <a href={link} target="_blank">
                                <img onError={() => defIcon} src={item.icon} alt={item.name || item.symbol}/>
                                {item.symbol || item.name}
                            </a>
                        </td>
                        <td>
                            <a href={link} target="_blank">{formatPrice(item.price)}</a>
                        </td>
                        <td className={orderVal < 0 ? 'drop' : ''}>
                            <a href={link} target="_blank">{convertPercent(orderVal)}</a>
                        </td>
                    </tr>
                })}</tbody>
            </table>
        </div>
    </RightItemWrapper>
}

const mapStateToProps = (state) => ({
    riseDrop: state.multi.riseDrop
})

export default connect(mapStateToProps)(RightRiseDropList)
