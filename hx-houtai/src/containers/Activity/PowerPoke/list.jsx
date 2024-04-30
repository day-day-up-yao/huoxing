/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Modal, message, Spin } from 'antd'
import './index.scss'
import {getPowerPokeList, setSearchQuery, setPageData, setFilterData, selectedData} from '../../../actions/activity/power/poke.action'
import {axiosAjax, cutString} from '../../../public/index'
const confirm = Modal.confirm
// const Option = Select.Option

// 手机端扑克牌位置
export const pokeType = [
    {label: '全部', value: ''},
    {label: '黑桃', value: '1'},
    {label: '红桃', value: '2'},
    {label: '梅花', value: '3'},
    {label: '方块', value: '4'}
]

let columns = []
class PowerPoke extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            status: null,
            previewVisible: false,
            previewImage: '',
            order: 1
        }
    }

    componentWillMount () {
        // const {search, filter} = this.props
        this.doSearch('init')
        columns = [{
            title: '扑克名',
            key: 'desc',
            render: (text, record) => {
                return <h3 title={record.desc} dangerouslySetInnerHTML={this.createMarkup(record.desc ? cutString(record.desc, 30) : '暂无')} />
            }
        }, {
            title: '扑克图',
            key: 'picSmall',
            render: (record) => <div
                className="shrinkPic"
                key={record.picSmall}
                style={{
                    background: `url(${record.picSmall}) no-repeat center / cover`
                }}
                src={record.picSmall}
                onClick={this.handlePreview}
            />
        }, {
            title: '状态',
            key: 'status',
            render: (text, record) => {
                let status = ''
                if (record.status !== 1) {
                    status = <span className="powerPoke-status pre-publish">未展示</span>
                } else if (record.status === 1) {
                    status = <span className="powerPoke-status has-publish">展示中</span>
                } else {
                    status = <span>暂无</span>
                }
                return status
            }
        }, {
            title: '排序/展示',
            key: 'option',
            render: (item) => {
                let btn = ''
                switch (item.status) {
                    case 0:
                        btn = <p><a className="mr10 opt-btn" onClick={() => this._isPublish(item)} style={{background: '#00b45a'}}>翻开</a></p>
                        break
                    case 1:
                        btn = <p><a className="mr10 opt-btn" onClick={() => this._isPublish(item)} style={{background: '#e9892f'}}>关闭</a></p>
                        break
                    default:
                        btn = ''
                }
                return <div className="btns">
                    {btn}
                </div>
            }
        }]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
        dispatch(selectedData({}))
    }
    createMarkup (str) { return {__html: str} }

    // 扑克位置
    adPosition (id) {
        let name = ''
        pokeType.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    doSearch (type, data) {
        this.setState({
            loading: true
        })
        const {dispatch, pageData, filter} = this.props
        let sendData = {
            status: filter.status,
            type: filter.type,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getPowerPokeList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const {dispatch} = this.props
        this.doSearch('init', {'currentPage': 1})
        dispatch(setPageData({'currPage': 1}))
    }

    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, filter} = this.props
        // this.setState({'currPage': page})
        dispatch(setPageData({'currPage': page}))
        this.doSearch('init', {'currentPage': page, type: filter.type, status: filter.status})
    }

    _isPublish (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要${item.status === 0 ? '翻开' : '翻回扑克牌'}吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: item.status === 1 ? 0 : 1
                }
                axiosAjax('POST', '/powerChongqing/setPokerStatus', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`操作成功`)
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选扑克位置
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({type: value}))
        this.setState({
            type: value
        })
        this.doSearch('init', {'currentPage': 1, type: value})
    }

    // 筛选扑克牌状态
    handleStatusChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({status: value}))
        // this.setState({
        //     status: value
        // })
        this.doSearch('init', {'currentPage': 1, status: value})
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    render () {
        const {list} = this.props
        return <div className="powerPoke-index">
            {/*
            <Row>
                <Col span={22} className="powerPoke-position">
                    <span>扑克牌位置：</span>
                    <Select defaultValue={filter.type} style={{ width: 140 }} onChange={this.handleChange}>
                        {pokeType.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                    </Select>
                    <Select defaultValue={filter.status} style={{ width: 140, margin: '0 0 0 15px' }} onChange={this.handleStatusChange}>
                        <Option value="">全部</Option>
                        <Option value="1">展示中</Option>
                        <Option value="2">未展示</Option>
                    </Select>
                </Col>
            </Row>
            */}
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{pageSize: 20, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            <Modal className="pre-Modal" visible={this.state.previewVisible} footer={null} onCancel={this.handleImgModalCancel}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        powerPokeInfo: state.powerPokeInfo,
        selectData: state.powerPokeInfo.selectedData,
        list: state.powerPokeInfo.list,
        search: state.powerPokeInfo.search,
        filter: state.powerPokeInfo.filter,
        pageData: state.powerPokeInfo.pageData
    }
}

export default connect(mapStateToProps)(PowerPoke)
