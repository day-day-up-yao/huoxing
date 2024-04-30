import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTime, mixUrl } from 'multiPublic/index'
import './index.scss'
import { getRankType, getRankMonth, getMpRankList } from '../../redux/actions/mpRank'
class Mprank extends Component {
    state = {
        typeList: [],
        typeIndex: '1',
        month: [],
        secondType: 1
    }
    componentDidMount () {
        getRankType().then(res => {
            if (res.code === 1) {
                const data = res.obj[1]
                this.setState({
                    typeList: data
                })
            }
        })
        this.mpRankList(1, null)
        this.rankMonth()
    }
    /**
     * @desc 数字格式化
     * @returns {string}
     */
    addComma = (num) => {
        let number = (num || 0).toString()

        let result = ''
        while (number.length > 3) {
            result = ',' + number.slice(-3) + result
            number = number.slice(0, number.length - 3)
        }
        if (number) {
            result = number + result
        }
        return result
    }
    getType = (e) => {
        const type = e.target.getAttribute('type')
        this.setState({
            secondType: type,
            typeIndex: type
        })
        this.mpRankList(type, '')
        this.rankMonth(type)
    }
    mpRankList = (secondType, rankMonth) => {
        const { dispatch } = this.props
        dispatch(getMpRankList({
            firstType: 1,
            secondType: secondType,
            rankMonth: rankMonth
        }))
    }
    rankMonth = (secondType) => {
        getRankMonth({
            firstType: 1,
            secondType: secondType
        }).then(res => {
            if (res.code === 1) {
                this.setState({
                    month: res.obj
                })
            }
        })
    }
    handleChangeMonth = (e) => {
        const secondType = this.state.secondType
        const rankMonth = e.target.value
        this.mpRankList(secondType, rankMonth)
    }

    render () {
        const { typeList, typeIndex, month } = this.state
        const { rankListObj } = this.props
        const list = rankListObj.rankUserInfo ? rankListObj.rankUserInfo.inforList : []
        return <div className="mp-rank-box">
            <div className="rank-banner"/>
            <div className="rank-cont">
                <div className="cont-tab">
                    {
                        typeList.map((res, index) => {
                            let active = parseInt(typeIndex) === index + 1 ? 'active' : ''
                            return <p onClick={this.getType} className={active} type={res.typeId} key={res.typeId}>{res.typeName}</p>
                        })
                    }
                </div>
                <div className="cont-date">
                    <select onChange={this.handleChangeMonth}>
                        {
                            month.map((item, index) => {
                                return <option style={{ height: '30px' }} value={item} key={index}>{formatTime(item, 'yyyy年MM月')}</option>
                            })
                        }
                    </select>
                    <a href={rankListObj.imgUrl} target="_blank" style={{ display: !rankListObj.imgUrl ? 'none' : 'block' }} download="logo.png" className="download-img"/>
                </div>
                <div className="cont-table">
                    <table>
                        <thead>
                            <tr>
                                <td>排名</td>
                                <td>MarsBit 专栏</td>
                                <td>文章数</td>
                                <td>热度</td>
                                <td>影响力 <span>?</span><div className="hint">影响力由MarsBit 专栏本月中发文量、阅读量、粉丝量、收藏量、分享量与推荐量综合计算得来。</div></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => {
                                    let colorTd = ''
                                    switch (index) {
                                        case 0:
                                            colorTd = 'one'
                                            break
                                        case 1:
                                            colorTd = 'two'
                                            break
                                        case 2:
                                            colorTd = 'three'
                                            break
                                    }
                                    return <tr key={item.id} style={{ width: '700px' }}>
                                        <td className={colorTd}>{index + 1}</td>
                                        <td>
                                            <a href={mixUrl.main(`/userCenter/${item.passportId}`)} target="_blank">
                                                <img className="td-img" src={item.iconUrl} alt=""/>
                                                <span className={`${item.vGrade === 1 ? 'personal' : 'enterprise'}`}/>
                                                <div style={{ marginLeft: '25px' }}>
                                                    <h6>{item.nickName}</h6>
                                                    <p>{item.identityDesc}</p>
                                                </div>
                                            </a>
                                        </td>
                                        <td>{this.addComma(item.articleCount)}</td>
                                        <td>{this.addComma(item.readCount)}</td>
                                        <td>{this.addComma(item.effectPoint)}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
const mapStateToProps = (state) => ({
    rankListObj: state.mpRank.rankListObj
})

export default connect(mapStateToProps)(Mprank)
