/**
 * @Author：zhangaoxiang
 * @Date：2019/3/6
 * @Last Modified By: zhangaoxiang
 * @Last Modified Time: 2019/3/6
 **/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button} from 'antd'
import CollectionCreateForm from './ModalForm/imgList'
import './index.scss'
import {
    getImgList
} from '../../../actions/activity/powerSZ/guestList.action'
import {axiosAjax} from '../../../public/index'

const confirm = Modal.confirm
let columns = []

class PowerImgList extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            data: {
                visible: false,
                imageTitle: '',
                imageUrl: '',
                imageSeq: ''
            },
            imgUrl: '',
            previewVisible: false,
            previewImage: '',
            order: 1,
            confirmLoading: false
        }
    }

    componentWillMount () {
        this.doSearch(1)
        columns = [{
            title: '标题',
            key: 'imageTitle',
            render: (record) => {
                return <p>{record.imageTitle}</p>
            }
        }, {
            title: '缩略图 ',
            key: 'imageUrl',
            render: (record) => (<img
                className="shrinkPic"
                key={record}
                src={record.imageUrl}
                onClick={this.handlePreview}
            />)
        }, {
            title: '排序',
            key: 'imageSeq',
            render: (record) => {
                return <p>{record.imageSeq}</p>
            }
        }, {
            title: '操作',
            key: 'action',
            render: (item) => {
                return <div>
                    <p>
                        <a onClick={() => {
                            this.handleCompile(item)
                        }} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#108ee9'}}>编辑</a>
                    </p>
                    <p style={{marginTop: 10}}>
                        <a onClick={() => this.delIco(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a>
                    </p>
                </div>
            }
        }]
    }

    createMarkup (str) {
        return {__html: str}
    }

    getOrderNum = (value) => {
        this.setState({
            order: value
        })
    }
    // 列表请求
    doSearch (page) {
        this.setState({
            loading: true
        })
        const {dispatch} = this.props
        let sendData = {
            pageSize: 20,
            currentPage: page
        }
        dispatch(getImgList(sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }

    // 改变页数
    changePage (page) {
        this.setState({
            loading: true
        })
        this.doSearch(page)
    }

    showModal = () => {
        this.setState({
            data: {
                visible: true
            }
        })
    }

    // 取消
    handleCancel = () => {
        this.setState({
            data: {
                visible: false
            }
        })
    }

    // 删除
    delIco (item) {
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id
                }
                axiosAjax('POST', '/power6/deleteImage', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch(_this.props.pageData.page)
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    getImgUrl = (data) => {
        this.setState({
            imgUrl: data
        })
    }

    // 编辑
    handleCompile = (item) => {
        this.setState({
            data: {
                visible: true,
                id: item.id,
                imageTitle: item.imageTitle,
                imageUrl: item.imageUrl,
                imageSeq: item.imageSeq
            }
        })
    }

    render () {
        const {imgList, pageData} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <Button type="primary" onClick={this.showModal}>新增图集</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={imgList.map((item, index) => ({...item, key: index}))}
                        columns={columns}
                        bordered
                        pagination={{
                            current: pageData.page,
                            total: pageData.recordCount,
                            pageSize: pageData.pageSize,
                            onChange: (page) => this.changePage(page)
                        }}
                    />
                </Spin>
            </div>
            <Modal className="pre-Modal" visible={this.state.previewVisible} footer={null} onCancel={this.handleImgModalCancel}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
            </Modal>
            {this.state.data.visible && <CollectionCreateForm
                loading={this.state.confirmLoading}
                visible={this.state.data.visible}
                onCancel={this.handleCancel}
                data={this.state.data}
                getImgData={(data) => {
                    this.getImgUrl(data)
                }}
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        imgList: state.powerSZImgList.imgList,
        pageData: state.powerSZImgList.pageData
    }
}

export default connect(mapStateToProps)(PowerImgList)
