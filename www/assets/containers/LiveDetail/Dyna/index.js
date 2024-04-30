import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import loadable from '@loadable/component'

import { websocket } from 'multiPublic/index'
import { pushSendtoCont, getLiveList, judgeUser } from '../../../redux/actions/live'
import SendtoCont from '../SendtoCont'
import './index.scss'
import Toast from 'multiComps/Toast'
import ImgPopup from 'multiComps/ImgPopup'

const LiveDetailContent = loadable(() => import('../../../public/comps/LiveDetailContent'), { ssr: false })

class Dyna extends Component {
    constructor (props) {
        super(props)
        this.state = {
            sendto: false,
            sendtoBtn: false,
            setNumber: 0,
            setValue: [],
            date: '',
            moreBtn: 0,
            castId: '',
            orderBy: 'desc',
            arrow: 1,
            imgShow: false,
            imgSrc: null
        }
    }

    showListImg = (event) => {
        this.setState({
            imgSrc: event.target.getAttribute('src'),
            imgShow: true
        })
    }

    componentDidMount () {
        this.getDate(this.props.liveObj)
        const { login, dispatch } = this.props
        const passportId = login.userInfo.info.passportId
        const castId = this.props.match.params.liveId
        const This = this

        this.setState({
            castId: castId
        }, function () {
            judgeUser({
                castId: castId,
                passportId: passportId
            }).then(function (res) {
                if (res.code === 1) {
                    This.setState({
                        sendtoBtn: true
                    })
                }
            })
        })

        websocket({
            url: '/push/websocket/text',
            binaryType: 'arraybuffer',
            params: {
                type: 0,
                castId: castId,
                data: {
                    'orderBy': This.state.orderBy,
                    'pageSize': 20
                }
            },
            message: function (res) {
                dispatch(pushSendtoCont({
                    obj: res.data
                }))
            }
        }).then(function (ws) {
            ws.send(JSON.stringify({
                type: 7,
                castId: castId,
                data: {
                    'orderBy': This.state.orderBy,
                    'pageSize': 20
                }
            }))
        }).catch(function (err) {
            console.log(err)
        })
    }

    getDate = (res) => {
        const liveDataArr = res.liveData
        const lastDete = liveDataArr.length === 0 ? '' : liveDataArr[liveDataArr.length - 1].content.createTime
        this.setState({
            date: res.moreStart === 1 ? lastDete : '',
            moreBtn: res.moreStart === 1 ? 1 : 0
        })
    }
    handleMore = () => {
        const { dispatch } = this.props
        const This = this
        let castId = this.props.match.params.liveId
        dispatch(getLiveList({
            castId: castId,
            orderBy: this.state.orderBy,
            refreshTime: this.state.date,
            pageSize: 20
        })).then(function (res) {
            if (res.code === 1) {
                This.getDate(This.props.liveObj)
            } else {
                Toast.info(res.msg)
            }
        })
    }
    contShow = (type) => {
        this.setState({
            sendto: type
        })
    }

    handleOrderBy = () => {
        const This = this
        const { dispatch } = this.props
        let castId = this.props.match.params.liveId
        this.setState({
            orderBy: this.state.orderBy === 'desc' ? 'asc' : 'desc'
        }, function () {
            dispatch(getLiveList({
                castId: castId,
                orderBy: this.state.orderBy,
                refreshTime: '',
                pageSize: 20
            }, 'rank')).then(() => {
                This.getDate(This.props.liveObj)
                This.setState({
                    arrow: this.state.orderBy === 'desc' ? 1 : 0
                })
            })
        })
    }

    render () {
        const { liveObj } = this.props
        const { date, moreBtn, sendtoBtn, sendto, castId, orderBy, arrow, imgShow, imgSrc } = this.state
        let sendtoAtt = {
            sendto: sendto,
            castId: castId,
            orderBy: orderBy
        }
        return <div className="dynamic-page-wrapper clearfix">
            <div className="dynamic-page-wrapper-header clearfix">
                <span className="wrapper-play">直播动态</span>
                <span className="wrapper-order" onClick={this.handleOrderBy}>{arrow === 0 ? '倒序' : '顺序'}
                    <span className="wrapper-order-rank">
                        <span className={`target-up arrow-s ${arrow === 0 ? 'active' : 1}`} />
                        <span className={`target-down arrow-s ${arrow === 1 ? 'active' : 0}`} />
                    </span>
                </span>
                <button className="wrapper-button" style={{ display: sendtoBtn ? 'block' : 'none' }} onClick={this.contShow.bind(true)}>发布内容</button>
            </div>
            {liveObj.liveData.map((item, index) => {
                if (liveObj.liveData.length === 0) {
                    return '<div>暂无直播内容</div>'
                } else {
                    return <LiveDetailContent dataObj={item} key={index} showListImg={this.showListImg} />
                }
            })}
            <ImgPopup close={() => this.setState({ imgShow: !this.state.imgShow })} show={imgShow} src={imgSrc} />
            <div className="dynamic-page-wrapper-add clearfix" style={{ display: moreBtn === 1 ? 'block' : 'none' }} date={date} onClick={this.handleMore}>加载更多</div>
            <SendtoCont {...sendtoAtt} contShow={this.contShow} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        liveObj: state.live,
        login: state.login
    }
}

export default connect(mapStateToProps)(withRouter(Dyna))
