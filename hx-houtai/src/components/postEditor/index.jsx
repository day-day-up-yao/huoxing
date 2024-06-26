import React, {Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'
import Simditor from 'simditor'
import '../../../node_modules/simditor/styles/simditor.css'
import LargedefaultImg from './img/default-large.png'
import {Input} from 'antd'
import './index.scss'
import {URL, getSig, axiosAjax, isJsonString} from '../../public/index'
import '../ClearHtml/SimditorClearhtml'
const {TextArea} = Input
let editor = ''
class PostEditor extends Component {
    constructor (props) {
        super(props)
        const {info, toolBar} = props
        this.state = {
            'postContent': !(info && info.postContent) ? '' : info.postContent
        }
        this.EDITTOOLBAR = !toolBar ? [
            'title',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontScale',
            'color',
            'ol',
            'ul',
            'blockquote',
            'code',
            'table',
            'link',
            'image',
            'hr',
            'indent',
            'outdent',
            'alignment',
            'clearhtml'
        ] : toolBar
    }

    componentDidMount () {
        editor = new Simditor({
            pasteImage: true,
            textarea: $('.editor'),
            defaultImage: LargedefaultImg,
            // placeholder: '这里输入内容...',
            toolbar: this.EDITTOOLBAR,
            upload: {
                pasteImage: true,
                // url: '/pic/upload', // 文件上传的接口地址
                url: `${URL}/picture/upload`, // 文件上传的接口地址
                params: {
                    type: 'news'
                }, // 键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
                fileKey: 'uploadFile', // 服务器端获取文件数据的参数名
                connectionCount: 1,
                headers: {'Sign-Param': getSig()},
                leaveConfirm: '正在上传文件',
                success: function (result) {
                    this.editor.opts.upload.headers['Sign-Param'] = getSig()
                    let msg = ''
                    let imgPath = ''
                    if (result.code !== 1) {
                        msg = result.msg || this._t('uploadFailed')
                        window.layer.msg(msg)
                        imgPath = this.defaultImage
                    } else {
                        // message.success('图片上传成功！')
                        imgPath = result.obj
                    }
                    return imgPath
                }
            }
        })

        // 只保留h3,h4标题
        // 链接设置不要链接文字+默认新标签打开
        editor.on('focus', function () {
            const $title = $('.toolbar-menu-title').find('li')
            $title.eq(2).hide()
            $title.eq(3).hide()
            $title.eq(6).hide()
            $title.eq(7).hide()

            const $setting = $('.link-popover').find('.settings-field')
            $setting.eq(0).hide()
            $setting.eq(1).find('input').val('')
            $setting.eq(2).hide()
        })

        editor.on('pasting', (e, $pasteContent) => {
            $pasteContent.each(function () {
                $(this).removeAttr('style')
                $(this).find('*').removeAttr('style')
                $(this).removeAttr('class')
                $(this).find('*').removeAttr('class')
            })
            const $signEl = $($pasteContent[0])
            const signData = isJsonString($signEl.html()) ? $signEl.html() : []
            const $simditorBody = $('.simditor-body')
            const $simditor = $('.simditor')

            // 删除图片数据数组，pasting此时获取内容是粘贴之前，故此延迟10毫秒
            setTimeout(function () {
                $simditorBody.children('p').each(function () {
                    const $this = $(this)
                    const htmlStr = $(this).html()
                    if (isJsonString(htmlStr) && htmlStr.indexOf('signTime') > -1 && htmlStr.indexOf('imgSrc') > -1) {
                        $this.remove()
                    }
                })
            }, 10)

            const str = '<div class="simditorModal" style="position:absolute;top: 0;left: 0;z-index: 6; width:100%;height:100%;box-sizing:border-box;padding-top:40px;text-align: center;line-height: 150%;font-size: 1.2rem;background-color: rgba(255,255,255,0.5);">图片上传中</div>'

            // 复制图片上传，并替换占位img的src
            if (signData.length !== 0) {
                if ($simditor.find('.simditorModal').length > 0) {
                    $('.simditorModal').show()
                } else {
                    $simditor.append(str)
                }
                axiosAjax('POST', '/pic/url_upload', {data: signData}, (response) => {
                    if (response.code === 1) {
                        $.each(response.obj, function (index, item) {
                            let signTime = 'pasteUploadingImg' + item.signTime
                            $('img[src=' + signTime + ']').attr('src', item.imgSrc)
                        })
                        $('.simditorModal').hide()
                        // message.success('图片上传成功！')
                        editor.setValue($simditorBody.html())
                    }
                })
            }
        })

        if (this.props.setSimditor) {
            this.props.setSimditor(editor)
        }

        const {info} = this.props
        if (info && info.postContent) {
            editor.setValue(info.postContent)
        }

        editor.on('valuechanged ', (e) => {
            this.setState({'postContent': editor.getValue()})
            this.sendPost()
        })
    }

    // 发布
    sendPost () {
        const {subSend} = this.props
        subSend(this.state)
    }

    // this.props.clear && this.clearContent()

    // 清空
    clearContent () {
        editor.setValue('')
        this.setState({
            'postContent': ''
        })
    }

    render () {
        return <div className="editor-post-content">
            <TextArea className="editor" autosize/>
            {/*
            <div className="btns">
                <Button className="mr10" onClick={() => this.clearContent()}><IconItem type="icon-clear"/>清空</Button>
            </div>
            */}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        query: state.postInfo.query
    }
}

export default connect(mapStateToProps)(PostEditor)
