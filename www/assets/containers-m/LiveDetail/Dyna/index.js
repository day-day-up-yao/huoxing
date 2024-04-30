import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import loadable from '@loadable/component'
import { getLiveList, judgeUser, pushSendtoCont } from '../../../redux/actions/live'
import { elementOffset, scrollOffset, websocket, windowOffset, windowScroll } from 'multiPublic/index'
import Toast from 'multiComps/Toast'
import ImgPopup from 'multiComps/ImgPopup'

import './index.scss'

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
            title: '顺序',
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

    isLoading = false
    handleMore = () => {
        const { dispatch } = this.props
        const This = this
        let castId = this.props.match.params.liveId
        this.isLoading = true
        dispatch(getLiveList({
            castId: castId,
            orderBy: this.state.orderBy,
            refreshTime: this.state.date,
            pageSize: 20
        })).then(function (res) {
            This.isLoading = false
            if (res.code === 1) {
                This.getDate(This.props.liveObj)
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            This.isLoading = false
        })
    }

    componentDidMount () {
        // 滚动加载
        const This = this
        windowScroll(function (res) {
            if (res !== 'down' || This.isLoading) return false

            const $footerWrapper = document.getElementById('loadMoreBtn')
            if (scrollOffset().top + windowOffset().height > elementOffset($footerWrapper).top - windowOffset().height / 2) {
                This.handleMore()
            }
        })

        this.getDate(this.props.liveObj)
        const { login, dispatch } = this.props
        const passportId = login.userInfo.info.passportId
        const castId = this.props.match.params.liveId
        this.setState({
            castId: castId
        })
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
                    arrow: this.state.orderBy === 'desc' ? 1 : 0,
                    title: this.state.orderBy === 'desc' ? '顺序' : '倒序'
                })
            })
        })
    }

    getDate = (res) => {
        const liveDataArr = res.liveData
        const lastDete = liveDataArr.length === 0 ? '' : liveDataArr[liveDataArr.length - 1].content.createTime
        this.setState({
            date: lastDete,
            moreBtn: res.moreStart === 1 ? 1 : 0
        })
    }

    render () {
        let { liveObj } = this.props
        let { arrow, title, imgShow, imgSrc } = this.state
        return <div className="m-dynamic-page-wrapper clearfix">
            <div className="m-dynamic-header clearfix">
                <span className="wrapper-play">直播动态</span>
                <span className="wrapper-order" onClick={this.handleOrderBy}>
                    {title}
                    <span className="wrapper-order-target">
                        <a className={`target-up arrow-s ${arrow === 0 ? 'active' : 1}`}></a>
                        <a className={`target-down arrow-s ${arrow === 1 ? 'active' : 0}`}></a>
                    </span>
                </span>
            </div>
            {liveObj.liveData.map((item, index) => {
                return <LiveDetailContent dataObj={item} key={index} showListImg={this.showListImg} mobile={true} />
            })}
            <ImgPopup close={() => this.setState({ imgShow: !this.state.imgShow })} show={imgShow} src={imgSrc} />
            <div className="dynamic-page-wrapper-add clearfix" id="loadMoreBtn" onClick={this.handleMore}>加载更多</div>
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
