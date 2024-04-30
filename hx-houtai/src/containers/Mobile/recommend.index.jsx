/*
*  只有编辑和删除功能
*/

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getNewLiveList, selectedData, setPageData, setSearchQuery } from '../../actions/newlive/newlive.action'
import {Form, Pagination, Button, message, Modal, Input, InputNumber} from 'antd'
import './index.scss'
import Mainheader from './header'
import { axiosAjax } from '../../public'

const confirm = Modal.confirm
class RecommendIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            visible: false
        }
    }

    componentWillMount () {
        const {search} = this.props
        this.doSearch(!search.type ? 'init' : search.type, {})
    }
    doSearch (type, data) {
        this.setState({
            loading: true,
            visible: false
        })

        const {dispatch, pageData, search} = this.props
        let sendData = {
            search: search.search,
            homeRecommendFlag: 1,
            pageSize: 20,
            page: pageData.currPage
        }

        sendData = {...sendData, ...data}
        dispatch(getNewLiveList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'name': '', 'title': ''}))
        dispatch(setPageData({'pageData': 20, 'totalCount': 0}))
        dispatch(selectedData({}))
    }

    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search} = this.props
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'page': page})
    }

    handleDetele (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id, // roomid
                    status: 0 // 权重应该是给0
                }
                axiosAjax('POST', '/video/live/room/set/home_top_order', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    changeOrder (item) {
        const {dispatch} = this.props
        this.setState({
            visible: true
        })
        dispatch(selectedData(item))
    }
    cancelModal = () => {
        this.setState({
            visible: false
        })
    }
    submitAccount () {
        // 编辑提交,不用form的方式提交验证了
        const {dispatch, selectedData} = this.props
        const _this = this
        let sendData = {
            roomId: String(selectedData.roomId),
            homeTopOrder: selectedData.homeTopOrder
        }
        axiosAjax('POST', '/video/live/room/set/home_top_order', {...sendData}, (res) => {
            if (res.code === 1) {
                message.success('编辑成功')
                _this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
            }
        })
    }
    render () {
        const {list, pageData, selectedData} = this.props
        return (
            <div>
                <Mainheader/>
                <div className="webAdBox">
                    <div className="content-list">
                        {list.map((item, index) => {
                            return <div id={index} key={index}>
                                <div className="title">{item.name}</div>
                                <div className="option">
                                    <span>直播间ID：{item.roomId}</span>
                                    <span>权重：{item.homeTopOrder}</span>
                                </div>
                                <div className="options">
                                    <Button type="primary" style={{ marginRight: 10 }} onClick={() => this.changeOrder(item)}>编辑</Button>
                                    <Button type="primary" style={{ marginRight: 10 }} onClick={() => this.handleDetele(item)}>删除</Button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <Modal title="首页推荐权重" visible={this.state.visible} onCancel={this.cancelModal}
                    footer={[
                        <Button key="back" onClick={this.cancelModal}>取消</Button>,
                        <Button key="submit" type="primary" onClick={() => { this.submitAccount() }}>确定</Button>
                    ]}
                >
                    <div className="recommendItem"><span><em>*</em>直播间地址：</span><Input id="roomId" style={{ width: '70%' }} value={selectedData.roomId}/></div>
                    <div className="recommendItem"><span><em>*</em>首页权重：</span><InputNumber id="homeTopOrder" style={{ width: '70%' }} value={selectedData.homeTopOrder}/></div>
                    <div className="recommendItem"><span>首页权重说明：</span>首页展示权重数值最大的两个直播间</div>
                </Modal>
                <div className='pagination'>
                    <Pagination current={pageData.currPage} total={pageData.totalCount} pageSize={pageData.pageSize} onChange={(page) => this.changePage(page)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newliveInfo: state.newliveInfo,
        selectedData: state.newliveInfo.selectedData,
        list: state.newliveInfo.list,
        search: state.newliveInfo.search,
        pageData: state.newliveInfo.pageData
    }
}

export default connect(mapStateToProps)(Form.create()(RecommendIndex))
