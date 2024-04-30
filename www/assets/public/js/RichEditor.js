import React, { Component } from 'react'
import { string, func } from 'prop-types'
// import { urlImgUpload, fileImgUpload, fileLargeUpload } from '../../redux/actions/richEditor'

const toolbarOptions = [
    [{ header: [2, 3, false] }],
    // [{ header: 2 }, 'bold', 'italic', 'underline', 'strike'],
    [{ header: 2 }, 'bold'],
    ['blockquote'],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    // ['link', 'image', 'video'],
    ['link', 'image'],
    ['clean']
]

let editorQuill = null
class RichEditor extends Component {
    state = {
        fullscreen: false
    }

    // 点击全屏与退出全屏
    fullscreenHandle = (event) => {
        const className = event.target.getAttribute('class')
        if (className && className.indexOf('ql-fullscreen') > -1) {
            this.setState({
                fullscreen: !this.state.fullscreen
            })
        }
    }

    componentDidMount () {
        const MediaQuill = require('media-quill')
        const Delta = MediaQuill.import('delta')
        // 自定义格式清除
        const qlClean = function (value) {
            const range = this.quill.getSelection(true)
            const delta2 = this.quill.getContents(range.index, range.length)
            let delta = new Delta().retain(range.index + range.length)
            delta2.ops = delta2.ops.map((item) => {
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

        const options = {
            modules: {
                toolbar: {
                    container: toolbarOptions,
                    handlers: {
                        clean: qlClean
                    }
                },
                imageResize: {}
                // clipboard: {
                // imageUpload: async (url) => {
                //     const res = await urlImgUpload([
                //         {
                //             signTime: new Date().getTime(),
                //             imgSrc: url || ''
                //         }
                //     ])
                //     if (res.code === 1 && res.obj[0].imgSrc) {
                //         return res.obj[0].imgSrc
                //     }
                // }
                // },
                // mediaUploader: {
                // imageUpload: async (file) => {
                //     const res = await fileImgUpload({
                //         type: 'news',
                //         uploadFile: file
                //     })

                //     if (res.code === 1) {
                //         return res.obj
                //     }
                // },
                // videoUpload: async (file) => {
                //     const videoUrl = await fileLargeUpload({ file })
                //     if (videoUrl) return videoUrl
                // }
                // }
            },
            placeholder: this.props.textDefault,
            theme: 'snow'
        }

        editorQuill = new MediaQuill('#editorQuill', options)

        editorQuill.on('text-change', () => {
            // 通过onChange传给Antd的Form
            if (this.props.getContent) {
                const editorVal = editorQuill.root.innerHTML
                if (editorQuill.mediaUploading() === false) {
                    this.props.getContent(editorVal)
                }
            }
        })

        if (this.props.content) {
            const oldDelta = editorQuill.root.innerHTML
            if (this.props.content !== oldDelta && oldDelta === '<p><br></p>') {
                editorQuill.setContents(editorQuill.clipboard.convert(this.props.content))
            }
        }

        editorQuill.videoInit()

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

        if (editorQuill) {
            document.addEventListener('click', this.fullscreenHandle, false)
        }
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.fullscreenHandle, false)
    }

    render () {
        const { fullscreen } = this.state
        return <div className={`editor-quill-box ${fullscreen ? 'active' : ''}`}>
            <div className='editor-quill-cotent'>
                <div id='editorQuill'></div>
            </div>
        </div>
    }
}

RichEditor.propTypes = {
    content: string.isRequired,
    getContent: func.isRequired,
    textDefault: string.isRequired
}

export default RichEditor
