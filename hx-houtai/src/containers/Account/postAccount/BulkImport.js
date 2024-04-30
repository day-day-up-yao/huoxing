import React, {Component} from 'react'
import {Modal, Button, Progress, Table, Tooltip, message} from 'antd'

import {postAccountListPure, importNews} from '../../../actions/account/postAccount.action'

class BuldImport extends Component {
    state = {
        importing: false, // 是否导入中
        columns: [{
            title: '昵称',
            dataIndex: 'name'
        }, {
            title: '状态',
            dataIndex: 'status'
        }],
        columnsData: [], // 已经导入文章的用户
        authorTotal: [], // 总作者数
        beingImpoted: {
            name: '请点击确认键开始',
            status: -1
        } // 正在导入文章用户
    }

    /**
     * @Desc: 批量导入
     * */
    bulkImport = () => {
        this.setState({
            importing: true,
            columnsData: [],
            authorTotal: []
        })

        const This = this
        postAccountListPure().then(function (res) {
            const authorArr = res.obj.inforList
            This.setState({
                authorTotal: authorArr
            }, function () {
                const importArticle = () => {
                    const columnsData = This.state.columnsData
                    const authorTotal = This.state.authorTotal
                    const index = columnsData.length
                    const all = authorTotal.length

                    if (index < all) {
                        importNews(authorTotal[index].passportId).then(function (res) {
                            if (res.code) {
                                const stateSet = (bool) => {
                                    const name = authorTotal[index].nickName
                                    columnsData.push({
                                        key: index,
                                        name: name,
                                        status: bool ? '成功' : '失败'
                                    })
                                    This.setState({
                                        beingImpoted: {
                                            name: name,
                                            status: bool
                                        },
                                        columnsData: columnsData
                                    }, function () {
                                        importArticle()
                                    })
                                }

                                if (res.code === 1) {
                                    stateSet(true)
                                } else {
                                    stateSet(false)
                                }
                            }
                        }).catch(function (err) {
                            message.error(err)
                        })
                    } else {
                        This.setState({
                            importing: false,
                            beingImpoted: {
                                name: '请点击确认键开始',
                                status: -1
                            }
                        })
                    }
                }

                importArticle()
            })
        }).catch(function (err) {
            message.error(err)
        })
    }

    render () {
        const {importing, columns, beingImpoted, columnsData, authorTotal} = this.state
        const {show, close} = this.props
        return <Modal
            visible={show}
            title="批量导入账号新闻"
            onOk={this.bulkImport}
            onCancel={close}
            footer={[
                <Button key="back" onClick={close}>取消</Button>,
                <Button key="submit" type="primary" loading={importing} onClick={this.bulkImport}>确定</Button>
            ]}>
            <Tooltip title="正在导入">
                <span>正在导入: {beingImpoted.name}{beingImpoted.status !== -1 ? `-${beingImpoted.status ? '成功' : '失败'}` : ''}</span>
            </Tooltip>
            <div
                style={{width: 488, margin: '10px 0'}}>
                <Progress percent={columnsData.length === 0 ? 0 : columnsData.length / authorTotal.length * 100}/>
            </div>
            <Table
                size="middle"
                columns={columns}
                dataSource={columnsData}
                pagination={{pageSize: 20}}
                scroll={{y: 240}}
            />
        </Modal>
    }
}

export default BuldImport
