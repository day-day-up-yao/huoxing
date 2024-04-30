/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../../../node_modules/cropperjs/dist/cropper.css'
import {
    Form,
    Input,
    Upload,
    Icon,
    Button,
    message,
    Row,
    Col,
    Spin,
    DatePicker,
    Select,
    Modal
} from 'antd'
import moment from 'moment'
import {getMpRankType, getMpRankDetail} from '../../../actions/mpRank/mpRank.action'
import {axiosAjax, URL, formatDate, getSig, formatTime} from '../../../public/index'
import './mprankAudit.scss'
const Option = Select.Option
const FormItem = Form.Item
const { MonthPicker } = DatePicker
let id = 1
class MprankAuditAdd extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loading: true,
            coverImgUrl: '',
            previewImage: '',
            fileList: [],
            firstType: 1,
            secondType: 1,
            addList: [],
            rankUserList: [],
            twoType: [],
            tag: true,
            optionsTwo: '',
            visible: false,
            objPhone: []
        }
    }

    componentWillMount () {
        const {dispatch, location} = this.props
        dispatch(getMpRankType())

        if (location.query.id || location.query.url) {
            dispatch(getMpRankDetail({'rankId': location.query.id}, (res) => {
                console.log(res)
                this.setState({
                    loading: false,
                    coverImgUrl: res.imgUrl,
                    firstType: res.firstType,
                    secondType: res.secondType,
                    fileList: res.imgUrl === '' ? [] : [{
                        uid: 0,
                        name: 'xxx.png',
                        status: 'done',
                        url: res.imgUrl
                    }],
                    rankUserList: res.rankUserList
                })
                let twoType = []
                for (let key in this.props.rankType[res.firstType]) {
                    twoType.push(this.props.rankType[res.firstType][key])
                }

                let optionsTwo = twoType.map(d => {
                    return <Option value={d.typeId.toString()} key={d.typeId}>{d.typeName}</Option>
                })
                this.setState({
                    optionsTwo: optionsTwo
                })
                this.channelChangeOne(res.firstType)
            }))
        } else {
            this.setState({
                loading: false
            })
        }
    }
    componentDidMount () {
        this.forceUpdate()
        this.add()
    }
    componentWillUnmount () {
        document.location.reload()
    }

    fileList = (picJson, imgUrl) => {
        if (picJson[imgUrl] && picJson[imgUrl] !== '') {
            return [{
                uid: 0,
                name: 'xxx.png',
                status: 'done',
                url: picJson[imgUrl]
            }]
        } else {
            return []
        }
    }

    // 榜单类别
    channelChangeOne = (value) => {
        let twoType = []
        for (let key in this.props.rankType[value]) {
            twoType.push(this.props.rankType[value][key])
        }
        let optionsTwo = twoType.map(d => {
            return <Option value={d.typeId.toString()} key={d.typeId}>{d.typeName}</Option>
        })
        this.setState({
            firstType: value,
            tag: false,
            optionsTwo: optionsTwo
        })
    }
    channelChangeTwo = (value) => {
        this.setState({
            secondType: value
        })
    }

    // 上传图片
    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    // 提交
    handleSubmit = () => {
        const {form} = this.props
        form.validateFields((err, values) => {
            console.log(values)
            let rankUserList = []
            if (err) {
                return false
            }
            this.setState({
                loading: true
            })
            let rankMonth = moment(values.rankMonth).valueOf()
            let date = (formatTime(rankMonth, 'yyyy-MM'))
            for (let k in values) {
                let key = k.split('_')
                if (!Array.isArray(values[k])) {
                    if (key[0] === 'marsPhone') {
                        rankUserList.push({
                            marsPhone: values[k],
                            effectPoint: values[`effectPoint_${key[1]}`].toString(),
                            articleCount: values[`articleCount_${key[1]}`].toString(),
                            readCount: values[`readCount_${key[1]}`].toString()
                        })
                    }
                }
            }
            const paramsAdd = {
                'name': values.name,
                'firstType': this.state.firstType,
                'secondType': this.state.secondType,
                'rankMonth': new Date(date).getTime() - (3600 * 1000 * 8),
                'imgUrl': this.state.coverImgUrl,
                'rankUserList': rankUserList
            }
            const paramsUpdate = {
                'name': values.name,
                'firstType': this.state.firstType,
                'secondType': this.state.secondType,
                'rankMonth': new Date(date).getTime() - (3600 * 1000 * 8),
                'imgUrl': this.state.coverImgUrl,
                'rankId': this.props.rankDetail.rankId
            }
            let params = this.props.rankDetail.id ? paramsUpdate : paramsAdd
            let url = this.props.rankDetail.id ? '/rank/update' : '/rank/add'
            axiosAjax('post', url, JSON.stringify(params), (res) => {
                this.setState({
                    loading: false
                })
                if (res.code === 1) {
                    this.setState({
                        objPhone: res.obj
                    })
                    form.resetFields()
                    if (this.props.rankDetail.id) {
                        message.success('修改成功')
                    } else {
                        message.success('添加成功')
                    }
                    if (res.obj.length !== 0) {
                        this.setState({
                            visible: true
                        })
                        return false
                    }
                    window.location.href = `/#/audit-mprank`
                    document.location.reload()
                } else {
                    this.setState({
                        loading: false
                    })
                    message.error(res.msg)
                }
            }, {
                'Sign-Param': getSig(),
                'Content-Type': 'application/json'
            })
        })
    }
    handleOk = () => {
        this.setState({
            visible: false
        })
        window.location.href = `/#/audit-mprank`
        document.location.reload()
    }
    // 修改火星排行榜用户
    modifyUser = (item) => {
        console.log(item)
        let marsPhone = document.getElementById(`marsPhone_${item.id}`).value
        let effectPoint = document.getElementById(`effectPoint_${item.id}`).value
        let articleCount = document.getElementById(`articleCount_${item.id}`).value
        let readCount = document.getElementById(`readCount_${item.id}`).value
        const params = {
            'rankId': item.rankId,
            'marsPhone': marsPhone,
            'effectPoint': effectPoint,
            'articleCount': articleCount,
            'readCount': readCount,
            'rankUserId': item.rankUserId
        }
        this.setState({
            loading: true
        })
        axiosAjax('post', '/rank/user/update', JSON.stringify(params), (res) => {
            if (res.code === 1) {
                this.setState({
                    loading: false
                })
                message.success('修改成功')
            } else {
                this.setState({
                    loading: false
                })
                message.error(res.msg)
            }
        }, {
            'Sign-Param': getSig(),
            'Content-Type': 'application/json'
        })
    }

    // 删除火星排行榜用户
    deleteUser = (item) => {
        const params = {
            'rankUserId': item.rankUserId
        }
        this.setState({
            loading: true
        })
        axiosAjax('post', '/rank/user/delete', params, (res) => {
            if (res.code === 1) {
                this.setState({
                    loading: false
                })
                message.success('删除成功')
                location.reload()
            } else {
                this.setState({
                    loading: false
                })
                message.error(res.msg)
            }
        })
    }

    handleChange = ({file, fileList}) => {
        this.setState({
            fileList: fileList
        })

        if (file.status === 'removed') {
            this.setState({
                coverImgUrl: ''
            })
        }

        if (file.response) {
            if (file.response.code === 1 && file.status === 'done') {
                this.setState({
                    coverImgUrl: file.response.obj
                })
            }
            if (file.status === 'error') {
                message.error('网络错误，上传失败！')
                this.setState({
                    coverImgUrl: '',
                    fileList: []
                })
            }
        }
    }

    remove = k => {
        const { form, rankDetail } = this.props
        const keys = rankDetail.id ? rankDetail.rankUserList : form.getFieldValue('keys')
        if (keys.length === 1) {
            return
        }
        rankDetail.id ? this.deleteUser(k) : form.setFieldsValue({
            keys: keys.filter(key => key !== k)
        })
    }

    add = () => {
        const { form } = this.props
        const keys = form.getFieldValue('keys')
        const nextKeys = keys.concat(id++)
        form.setFieldsValue({
            keys: nextKeys
        })
        // let data = {
        //     marsPhone: '',
        //     effectPoint: ''
        // }
        // this.setState({
        //     rankUserList: this.state.rankUserList.concat(data)
        // })
    }

    // 上传图片组件
    FormItem = (require, imgName, label, imgUrl, fileList, changeEvent, size, noBtn) => {
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 15, offset: 1}
        }
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )

        return <FormItem
            {...formItemLayout}
            label={label}>
            <div className="dropbox">
                {getFieldDecorator(imgName, {
                    initialValue: this.props.rankDetail.id ? fileList : '',
                    rules: [{required: require, message: `请上传榜单图片！`}]
                })(
                    <Upload
                        headers={{'Sign-Param': getSig()}}
                        action={`${URL}/pic/upload`}
                        name='uploadFile'
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={changeEvent}>
                        {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                )}
                {noBtn ? '' : <Button
                    data-type={imgUrl}
                    onClick={this.handlePreview}
                    className="img-preview"
                    type="primary">预览</Button>}
                <span className="cover-img-tip">建议尺寸: <font style={{color: 'red'}}>{size}</font></span>
            </div>
        </FormItem>
    }
    disabledEndDate = (endValue) => {
        const startValue = this.state.currentTime
        if (!endValue || !startValue) {
            return false
        }
        return endValue.valueOf() >= startValue.valueOf() + 3600 * 24 * 1000 * 30
    }
    handleEndOpenChange = (open) => {
        let me = this
        if (open) {
            me.currentTime = moment()
        }
        this.setState({currentTime: moment()})
    }
    render () {
        const {rankType, rankDetail} = this.props
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        )
        const { form } = this.props
        const { getFieldDecorator, getFieldValue } = form
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 }
            }
        }
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 }
            }
        }
        getFieldDecorator('keys', { initialValue: [] })
        const keys = rankDetail.id && rankDetail.rankUserList ? this.state.rankUserList : getFieldValue('keys')
        const formItems = keys.map((k, index) => (
            <Row key={index} style={{marginBottom: 15}}>
                <div className="rank_index">
                    {index + 1}
                </div>
                <Col span="3" offset={1}>
                    <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        required={false}
                        key={index}
                    >
                        {getFieldDecorator(`marsPhone_${!k.id ? index : k.id}`, {
                            initialValue: rankDetail.id ? k.marsPhone : '',
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [
                                {
                                    required: true,
                                    message: '不能为空！'
                                }
                            ]
                        })(
                            <Input
                                placeholder={'MarsBit专栏账号（手机号）'}
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col span="3" offset={1}>
                    <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        required={false}
                        key={index}
                    >
                        {getFieldDecorator(`effectPoint_${!k.id ? index : k.id}`, {
                            initialValue: rankDetail.id ? k.effectPoint : '',
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [
                                {
                                    required: true,
                                    message: '不能为空！'
                                }
                            ]
                        })(
                            <Input
                                placeholder={'影响力'}
                                type='number'
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col span="3" offset={1}>
                    <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        required={false}
                        key={index}
                    >
                        {getFieldDecorator(`articleCount_${!k.id ? index : k.id}`, {
                            initialValue: rankDetail.id ? k.articleCount : '',
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [
                                {
                                    required: true,
                                    message: '不能为空！'
                                }
                            ]
                        })(
                            <Input
                                placeholder={'文章数'}
                                type='number'
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col span="3" offset={1}>
                    <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        required={false}
                        key={index}
                    >
                        {getFieldDecorator(`readCount_${!k.id ? index : k.id}`, {
                            initialValue: rankDetail.id ? k.readCount : '',
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [
                                {
                                    required: true,
                                    message: '不能为空！'
                                }
                            ]
                        })(
                            <Input
                                placeholder={'阅读数'}
                                type='number'
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col style={{ display: 'inline-block' }}>
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </Col>
                <Col style={{ display: rankDetail.id ? 'inline-block' : 'none', marginLeft: 10 }}>
                    <Button className="rank-list-btn" onClick={ () => { this.modifyUser(k) }}>修改</Button>
                </Col>
            </Row>
        ))
        let oneType = []
        for (let key in rankType[0]) {
            oneType.push(rankType[0][key])
            if (key === '0' && this.state.tag) {
                let twoType = []
                for (let i = 0; i < rankType[1].length; i++) {
                    twoType.push(rankType[1][i])
                }
                this.state.optionsTwo = twoType.map(d => {
                    return <Option value={d.typeId.toString()} key={d.typeId}>{d.typeName}</Option>
                })
            }
        }
        const options = oneType.map((d, i) => {
            return <Option value={d.typeId.toString()} key={i}>{d.typeName}</Option>
        })
        return <div className="videoAudit-send">
            <Spin spinning={this.state.loading} size='large'>
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="榜单名称: ">
                        {getFieldDecorator('name', {
                            initialValue: rankDetail.id ? `${rankDetail.name}` : '',
                            rules: [{required: true, message: '请输入榜单名称！'}]
                        })(
                            <Input className="news-author" placeholder="请输入榜单名称"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="榜单类别: "
                    >
                        <Row>
                            <Col>
                                {getFieldDecorator('firstType', {
                                    initialValue: rankDetail.id ? `${rankDetail.firstType}` : '1',
                                    rules: [{required: true, message: '请选择类型！'}]
                                })(
                                    <Select
                                        style={{ width: 100 }}
                                        placeholder='请选择类型'
                                        onChange={ this.channelChangeOne }>
                                        {options}
                                    </Select>
                                )}
                                <span style={{marginLeft: 15}}></span>
                                {getFieldDecorator('secondType', {
                                    initialValue: rankDetail.id ? `${rankDetail.secondType}` : '1',
                                    rules: [{required: true, message: '请选择类型！'}]
                                })(
                                    <Select
                                        style={{ width: 100 }}
                                        placeholder='请选择类型'
                                        onChange={ this.channelChangeTwo }>
                                        {this.state.optionsTwo}
                                    </Select>
                                )}
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="榜单时间: "
                    >
                        {getFieldDecorator('rankMonth', {
                            rules: [{required: true, message: '请选择视榜单时间！'}],
                            initialValue: rankDetail.id ? moment(formatDate(rankDetail.rankMonth), 'YYYY-MM') : moment()
                        })(
                            <MonthPicker
                                renderExtraFooter={() => 'extra footer'}
                                placeholder="Select month"
                                disabledDate={this.disabledEndDate}
                                onOpenChange={this.handleEndOpenChange}
                            />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="榜单图片: "
                    >
                        <div className="dropbox">
                            {getFieldDecorator('imgUrl', {
                                initialValue: rankDetail.id ? `${rankDetail.imgUrl}` : '',
                                rules: [{required: false, message: '请上传榜单图片！'}]
                            })(
                                <Upload
                                    headers={{'Sign-Param': getSig()}}
                                    action={`${URL}/pic/upload`}
                                    name='uploadFile'
                                    listType="picture-card"
                                    fileList={this.state.fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {this.state.fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            )}
                            <Modal footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={this.state.coverImgUrl}/>
                            </Modal>
                            <span className="cover-img-tip" style={{display: 'inline-block', marginTop: '70px', position: 'absolute'}}>长宽比例: <font style={{color: 'red'}}>1 : 1</font></span>
                        </div>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <div>
                            {formItems}
                        </div>
                        <Button type="dashed" onClick={this.add} style={{ width: '30%', marginLeft: 160, visibility: `${this.props.location.query.id ? 'hidden' : 'inherit'}` }}>
                            <Icon type="plus" /> 增加榜单用户
                        </Button>
                    </FormItem>
                    <FormItem {...formItemLayout}>
                        <Button onClick={this.handleSubmit} style={{ marginLeft: 340, marginTop: 40 }}>提交</Button>
                    </FormItem>
                </Form>
            </Spin>
            <Modal
                title="错误提示"
                visible={this.state.visible}
                onCancel={this.handleOk}
                footer={
                    [
                        <Button key="back" onClick={this.handleOk}>确定</Button>
                    ]
                }
            >
                {
                    this.state.objPhone.map((item, index) => {
                        return <span key={index} style={{ marginRight: '10px', lineHeight: '22px' }}>{item}、 {index === this.state.objPhone.length - 1 ? '非MarsBit专栏或手机号格式错误！' : ''}</span>
                    })
                }
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        rankType: state.mpRankInfo.rankType,
        rankDetail: state.mpRankInfo.rankDetail
    }
}

export default connect(mapStateToProps)(Form.create()(MprankAuditAdd))
