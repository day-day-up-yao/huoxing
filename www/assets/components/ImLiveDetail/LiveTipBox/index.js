import React, { useState, useCallback, useRef } from 'react'

import './index.scss'

import { trim } from 'multiPublic'
import Toast from 'multiComps/Toast'
import { uploadImg, getLiveTipAdd } from '../../../redux/actions/live'
import clearIcon from '../image/live-tip-clear.png'
import closeIcon from '../image/live-tip-close.png'
import crossIcon from '../image/live-tip-cross.png'

// 举报类型数组
const typeArr = [
    { type: 1, name: '违法违禁' },
    { type: 2, name: '淫秽色情' },
    { type: 3, name: '抽烟喝酒' },
    { type: 4, name: '危险行为' },
    { type: 5, name: '侮辱谩骂' },
    { type: 6, name: '其他' }
]

export default (props) => {
    const { room, onBtnGetTipAddClick } = props
    const [nowType, setNowType] = useState(0) // 当前选择的举报类型
    const [textImg, setTextImg] = useState('') // 举报图片
    const [isUpImg, setIsUpImg] = useState(false) // 是否正在上传图片
    const textArea = useRef() // 输入框实例
    const curWordsNum = useRef() // 输入字数

    /** @desc 评论输入字数量 */
    const wordsNum = useCallback((event) => {
        const val = trim(event.target.value)
        if (val.length <= 100) {
            curWordsNum.current.innerText = val.length
        } else {
            event.target.value = val.substring(0, 300)
        }
    }, [])

    // 点击举报类型按钮事件
    const onBtnChangeTypeClick = useCallback(
        (type) => {
            setNowType(type)
        },
        []
    )

    // 图片地址转换Blob格式
    const dataURLtoBlob = (dataurl) => {
        let arr = dataurl.split(',')
        let mime = arr[0].match(/:(.*?);/)[1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], { type: mime })
    }

    // 上传图片事件
    const coverImgUpload = useCallback(
        (e) => {
            let file = e.target.files[0] // 获取文件
            if (window.FileReader) { // 如果浏览器支持FileReader
                const reader = new FileReader() // 新建一个FileReader对象
                reader.readAsDataURL(file) // 读取文件url
                reader.onloadend = (e) => {
                    setTextImg(e.target.result)
                    setIsUpImg(true)
                    uploadImg({
                        uploadFile: dataURLtoBlob(e.target.result),
                        type: 'news',
                        data: '',
                        watermark: 0
                    }).then((res) => {
                        if (res.code === 1) {
                            setTextImg(res.obj)
                        }
                        setIsUpImg(false)
                    }).catch((err) => {
                        console.log('上传图片失败')
                        setIsUpImg(false)
                        throw err
                    })
                }
            }
        },
        []
    )

    // 点击取消图片事件
    const closeImg = useCallback(
        () => {
            setTextImg('')
        },
        []
    )

    // 点击提交按钮事件
    const onBtnOKClick = useCallback(
        () => {
            if (isUpImg === true) return
            if (nowType === 0) {
                Toast.info('请选择举报类型')
                return
            }

            let passportId = room.presenterList && room.presenterList.length > 0 ? room.presenterList[0].passportId : ''
            if (passportId === '') return
            let val = trim(textArea.current.value)
            let obj = {
                roomId: room.roomId,
                passportId: passportId,
                type: nowType,
                reason: val,
                imgUrl: textImg
            }

            getLiveTipAdd(obj).then((res) => {
                if (res.code === 1) {
                    Toast.info('举报成功')
                    setTimeout(() => {
                        onBtnGetTipAddClick()
                    }, 1000)
                }
            }).catch((err) => {
                Toast.info('举报失败')
                throw err
            })
        },
        [isUpImg, nowType, onBtnGetTipAddClick]
    )

    // 点击取消按钮事件
    const onBtnClearClick = useCallback(
        () => {
            onBtnGetTipAddClick()
        },
        [onBtnGetTipAddClick]
    )

    return (
        <div className="im-live-tip-box">
            <div className="im-live-tip-box-bg"></div>
            <div className="im-live-tip-box-popup">
                <div className="im-live-tip-box-top">
                    <div className="im-live-tip-box-title">举报理由</div>
                    <div className="im-live-tip-box-clear" onClick={() => onBtnClearClick()}>
                        <img className="im-live-tip-box-clear-img" src={clearIcon} />
                    </div>
                </div>
                <div className="im-live-tip-box-type-list">
                    {
                        typeArr.map((item, index) => {
                            return (
                                <div className={`im-live-tip-box-type-item ${item.type === nowType ? 'im-live-tip-box-type-item-active' : ''}`} key={index} onClick={() => onBtnChangeTypeClick(item.type)} >
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="im-live-tip-box-reason">
                    <textarea className="im-live-tip-box-reason-input" placeholder="（必填）填写举报理由与上传截图，可让快速处理相关问题" ref={textArea} onChange={wordsNum}></textarea>
                    <div className="im-live-tip-box-reason-input-sp"><em ref={curWordsNum}>0</em>/300</div>
                </div>
                <div className="im-live-tip-box-update">
                    <div className="im-live-tip-box-update-img-bg">
                        <img className={`im-live-tip-box-update-img-cross ${textImg !== '' ? 'im-live-tip-box-update-img-text' : ''}`} src={textImg !== '' ? textImg : crossIcon} />
                        <input className="im-live-tip-box-update-img-inputfile" onChange={(e) => coverImgUpload(e)} name="file" id="file" type="file" accept=".jpg,.jpeg,.png" />
                        {textImg !== '' ? <img className="im-live-tip-box-update-img-close" onClick={() => closeImg()} src={closeIcon} /> : null}
                    </div>
                    <div className="im-live-tip-box-update-text">（必填）图片大小不超过4M</div>
                </div>
                <div className="im-live-tip-box-btn" onClick={() => onBtnOKClick()}>提交</div>
            </div>
        </div>
    )
}
