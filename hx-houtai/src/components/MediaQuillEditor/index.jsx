import React, { Component } from 'react'
import MediaQuill from 'media-quill'
import {urlImgUpload, fileImgUpload, fileLargeUpload} from '../../actions/index'

import './index.scss'

const Delta = MediaQuill.import('delta')

// 自定义div标签格式，用于换行
// const Embed = MediaQuill.import('blots/block/embed')
// class P extends Embed {
//     static create (value) {
//         let node = super.create(value)
//         // give it some margin
//         // node.setAttribute('style', 'margin:0 !important;')
//         return node
//     }
// }

// 设置自定义按钮事件
// const bindings = {
//     linefeed: {
//         key: 13,
//         shiftKey: true,
//         handler: function (range, context) {
//             // 当按shift+enter 获取当前标签位置，插入自定义标签，换行
//             // this.quill.insertEmbed(range.index, 'p', '这是内容')
//             // this.quill.clipboard.dangerouslyPasteHTML(range.index, '<br /><div class="my-p">测试</div>')
//             // this.quill.insertText(range.index, '测试测试', {
//             //     'margin': '0 !important;'
//             // })
//             this.quill.insertEmbed(range.index, 'p', '这是内容')
//         }
//     }
// }

// 自定义格式清除
const qlClean = function (value) {
    let range = this.quill.getSelection(true)
    let delta2 = this.quill.getContents(range.index, range.length)
    let delta = new Delta().retain(range.index + range.length)
    delta2.ops = delta2.ops.map(item => {
        if (!item.insert) {
            return item
        }

        if (typeof item.insert !== 'object') {
            return {
                insert: item.insert
            }
        }

        switch (Object.keys(item.insert)[0]) {
            case 'LinkBlot':
                return {
                    insert: item.insert.LinkBlot.text
                }
            default:
                return {
                    insert: item.insert
                }
        }
    })
    delta = delta.concat(delta2)
    this.quill.updateContents(delta, MediaQuill.sources.USER)
    this.quill.deleteText(range.index, range.length)

    this.quill.videoInit()
}

// 自定义 源码编辑按钮
// const sourceEditor = function (params) {
//     const reg = /<br>/g
//     const container = this.container
//     const firstChild = container.nextElementSibling.firstChild
//     if (!this.shadeBox) {
//         let shadeBox = this.shadeBox = document.createElement('div')
//         shadeBox.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); cursor:pointer'
//         container.style.position = 'relative'
//         shadeBox.addEventListener('click', function () {
//             this.style.display = 'none'
//             firstChild.innerHTML = firstChild.innerText.trim()
//         }, false)
//         container.appendChild(shadeBox)
//         let innerHTML = firstChild.innerHTML
//         innerHTML = innerHTML.replace(reg, '')
//         firstChild.innerText = innerHTML
//     } else {
//         let innerHTML = firstChild.innerHTML
//         innerHTML = innerHTML.replace(reg, '')
//         firstChild.innerText = innerHTML
//         this.shadeBox.style.display = 'block'
//     }
// }

export default class MediaQuillEditor extends Component {
    constructor (props) {
        super(props)
        const { toolbar } = props
        this.toolbarOptions = !toolbar ? [
            [{ header: [1, 2, 3, 4, false] }],
            [{ 'header': 2 }, 'bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'], // remove formatting button
            ['sourceEditor']
        ] : toolbar
        this.state = {
            editor: null,
            fullscreen: false
        }
    }

    componentDidMount () {
        const options = {
            modules: {
                toolbar: {
                    container: this.toolbarOptions,
                    handlers: {
                        'clean': qlClean
                        // 'shadeBox': null,
                        // 'sourceEditor': sourceEditor
                    }
                },
                // keyboard: {
                //     bindings: bindings
                // },
                imageResize: {},
                clipboard: {
                    imageUpload: async (url) => {
                        console.log(url)
                        const res = await urlImgUpload([
                            {
                                signTime: new Date().getTime(),
                                imgSrc: url || ''
                            }
                        ])
                        if (res && res.code && res.code === 1 && res.obj[0] && res.obj[0].imgSrc) {
                            return res.obj[0].imgSrc
                        }
                    },
                    paste: (event) => {
                        if (this.props.state) this.props.paste(event)
                    },
                    matchVisual: false
                },
                mediaUploader: {
                    imageUpload: async (file) => {
                        console.log(file)
                        const res = await fileImgUpload({
                            type: 'news',
                            uploadFile: file
                        })

                        if (res && res.code === 1) {
                            return res.obj
                        }
                    },
                    videoUpload: async (file) => {
                        const videoUrl = await fileLargeUpload({ file })
                        if (videoUrl) return videoUrl
                    }
                }
            },
            placeholder: '请输入文章内容',
            theme: 'snow'
            // initButton: function () {
            //     const sourceEditorButton = document.querySelector('.ql-sourceEditor')
            //     sourceEditorButton.style.cssText = 'width:80px; border:1px solid #ccc; border-radius:5px;'
            //     sourceEditorButton.innerText = '源码编辑'
            // }
        }

        // 注册新格式
        // MediaQuill.register({ 'formats/p': P })
        // const Ps = MediaQuill.import('formats/p')
        // Ps.blotName = 'p' // now you can use .ql-hr classname in your toolbar
        // Ps.tagName = 'p'
        // Ps.className = 'my-p'
        // MediaQuill.register(Ps, true)

        // console.log(options)

        const editorQuill = new MediaQuill('#editorQuill', options)

        // console.log(editorQuill.getModule('toolbar'))

        // 内容更改时，传递当前内容到父级
        editorQuill.on('text-change', (delta, oldDelta, source) => {
            // const imghtmls = document.getElementById('editorQuill').getElementsByTagName('img')
            // // console.log(Array.from(imghtmls), 111)
            // // 删除重复图片显示
            // if (imghtmls && imghtmls.length > 0) {
            //     Array.from(imghtmls).map((item, index) => {
            //         if (item.src.indexOf('/crawler') !== -1) {
            //             Array.from(imghtmls)[index].remove()
            //         }
            //     })
            // }
            this.props.subSend({postContent: editorQuill.root.innerHTML})
        })

        // 设置父组件editor
        if (this.props.setEditor) {
            this.props.setEditor(editorQuill)
        }

        this.setState({
            editor: editorQuill
        })

        // 添加全屏按钮
        const fullscreenIcon = `<svg class="ql-fullscreen-svg" viewBox="0 0 1024 1024"><path d="M160 96h192q14.016 0.992 23.008 10.016t8.992 22.496-8.992 22.496T352 160H160v192q0 14.016-8.992 23.008T128 384t-23.008-8.992T96 352V96h64z m0 832H96v-256q0-14.016 8.992-23.008T128 640t23.008 8.992T160 672v192h192q14.016 0 23.008 8.992t8.992 22.496-8.992 22.496T352 928H160zM864 96h64v256q0 14.016-8.992 23.008T896 384t-23.008-8.992T864 352V160h-192q-14.016 0-23.008-8.992T640 128.512t8.992-22.496T672 96h192z m0 832h-192q-14.016-0.992-23.008-10.016T640 895.488t8.992-22.496T672 864h192v-192q0-14.016 8.992-23.008T896 640t23.008 8.992T928 672v256h-64z" p-id="8486"></path></svg>`
        const formats = document.createElement('span')
        formats.setAttribute('class', 'ql-formats ql-fullscreen-formats')
        const button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('class', 'ql-fullscreen')
        button.innerHTML = fullscreenIcon
        formats.appendChild(button)
        document.querySelector('.ql-toolbar').appendChild(formats)

        document.addEventListener('click', (event) => {
            const className = event.target.getAttribute('class')
            if (className && className.indexOf('ql-fullscreen') > -1) {
                this.setState({
                    fullscreen: !this.state.fullscreen
                })
            }
        }, false)
    }
    render () {
        return <div className={`editor-quill-box ${this.state.fullscreen ? 'active' : ''}`}>
            <div className="editor-quill-cotent">
                <div id="editorQuill"></div>
            </div>
        </div>
    }
}
