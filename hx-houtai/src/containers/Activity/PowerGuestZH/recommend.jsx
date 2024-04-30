/**
 * @Author：zhangaoxiang
 * @Date：2019/3/6
 * @Last Modified By: zhangaoxiang
 * @Last Modified Time: 2019/3/6
 **/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Row, Col, Modal, message, Spin, Button} from 'antd'
import CollectionCreateForm from './ModalForm/recommend'
import './index.scss'
import {
    getRecommendList
} from '../../../actions/activity/powerBj/guestList.action'
import {axiosAjax} from '../../../public/index'

const confirm = Modal.confirm
let columns = []

class PowerRecommend extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            data: {
                visible: false,
                id: '',
                bannerSeq: '',
                mobileImageUrl: '',
                pcImageUrl: '',
                bannerTitle: '',
                bannerActivityUrl: ''
            },
            imgUrl: '',
            previewVisible: false,
            previewImage: '',
            confirmLoading: false
        }
    }

    componentWillMount () {
        this.doSearch(1)
        columns = [{
            title: '标题',
            key: 'bannerTitle',
            render: (record) => {
                return <p>{record.bannerTitle}</p>
            }
        }, {
            title: 'PC缩略图',
            key: 'pcImageUrl',
            render: (record) => (<img
                className="shrinkPic"
                src={record.pcImageUrl}
                onClick={this.handlePreview}
            />)
        }, {
            title: '排序',
            key: 'bannerSeq',
            render: (record) => {
                return <p>{record.bannerSeq}</p>
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
        dispatch(getRecommendList(sendData, () => {
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

    getImgUrl = (data) => {
        this.setState({
            imgUrl: data
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
                axiosAjax('POST', '/power2/deleteBanner', {...sendData}, (res) => {
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

    // 编辑
    handleCompile = (item) => {
        this.setState({
            data: {
                visible: true,
                id: item.id,
                bannerTitle: item.bannerTitle,
                pcImageUrl: item.pcImageUrl,
                mobileImageUrl: item.mobileImageUrl,
                bannerSeq: item.bannerSeq,
                bannerActivityUrl: item.bannerActivityUrl
            }
        })
    }

    render () {
        const {recommendList, pageData} = this.props
        return <div className="powerGuest-index">
            <Row>
                <Col>
                    <Button type="primary" onClick={this.showModal}>新增推荐</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table
                        dataSource={recommendList.map((item, index) => ({...item, key: index}))}
                        columns={columns}
                        bordered
                        pagination={{
                            current: pageData.page,
                            total: pageData.totalCount,
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
                getImgData={(data) => {
                    this.getImgUrl(data)
                }}
                ref={this.saveFormRef}
                visible={this.state.data.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                data={this.state.data}
            />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.powerZHRecommendList.recommendList,
        pageData: state.powerZHRecommendList.pageData
    }
}

export default connect(mapStateToProps)(PowerRecommend)
