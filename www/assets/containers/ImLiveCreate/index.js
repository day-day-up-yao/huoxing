import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import moment from 'moment'

import './index.scss'

import { uploadImg, getRoomAdd, getRoomLiveList } from '../../redux/actions/live'
import Popup from 'multiComps/Popup'
import Toast from 'multiComps/Toast'
import ImageCropper from 'multiComps/ImageCropper'
import { mixUrl, trim } from 'multiPublic'
import { ImLiveCreateInputItem, ImLiveCreateTextareaItem, ImLiveCreateBtnItem, ImLiveCreatePictureItem, ImLiveCreateExplainItem, ImLiveDateInputItem, ImLiveCreateCourseItem } from './ImLiveCreateItem'
import ImLiveCreateCropperPopup from './ImLiveCreateCropperPopup'
import ImLiveControlPopup from '../ImLiveControl/ImLiveControlPopup'
// import bgIcon from './Image/im-live-create-bg.png'
import popupCloseIcon from './Image/im-live-create-popup-close.png'
import courseIcon1 from './Image/im-live-create-course1.png'
import courseIcon2 from './Image/im-live-create-course2.png'
import courseIcon3 from './Image/im-live-create-course3.png'

// 截图弹窗说明
const cropperTextList = ['图片格式：JPG、PNG', '文件大小：≦2M', '建议尺寸：1280*720', '图片比例：16:9']

// 协议数据
const explainData = [
    {
        name: 'MarsBit用户服务协议',
        url: mixUrl.main('/protocol')
    }, {
        name: 'MarsBit直播协议',
        url: mixUrl.main('/imlive/protocol')
    }
]

// MarsBit电脑直播教程
const coursUrl = 'https://news.huoxing24.com/20210201154152675262.html'

// obs下载链接
const obsUrl = 'https://obsproject.com/zh-cn/download'

// 教程数据
const courseData = [
    {
        img: courseIcon1,
        title: '1. 下载与安装OBS软件',
        text: '在官网下载软件安装包，需要Windows8或者Mac10.13及以上系统'
    }, {
        img: courseIcon2,
        title: '2. 软件设置',
        text: '设置推流地址与输出码率',
        urlText: '查看MarsBit电脑直播教程',
        url: 'https://news.huoxing24.com/20210201154152675262.html'
    }, {
        img: courseIcon3,
        title: '3. 开始直播',
        text: '设置完成，直播页面点击开始直播'
    }
]

export default () => {
    const { userInfo } = useSelector((state) => ({
        userInfo: state.login.userInfo.info
    }), shallowEqual)
    const dispatch = useDispatch()
    const inputVal = useRef() // 直播标题
    const [inputWrong, setInputWrong] = useState(false) // 是否显示错误
    // const textareaVal = useRef() // 直播简介
    const [brief, setBrief] = useState('') // 直播简介
    const textImg = useRef('') // 直播图片
    const [imgWrong, setImgWrong] = useState(false) // 是否显示图片错误
    const [inputFileVal, setInputFileVal] = useState('') // 图片输入框值, 确定取消置空，避免同一张图不触发onChange
    const [textareaWrong, setTextareaWrong] = useState(false) // 是否显示错误
    const [imgDataUrl, setImgDataUrl] = useState('') // 上传的图片DataUrl
    const [imgBolb, setImgBolb] = useState('') // 上传的图片DataUrl
    const [isUpImg, setIsUpImg] = useState(false) // 是否正在上传图片
    const [isCropperShow, setIsCropperShow] = useState(false) // 是否打开裁剪弹窗
    const [timeVal, setTimeVal] = useState(0) // 时间戳
    const [timeWrong, setTimeWrong] = useState('') // 是否显示时间错误
    const [isPopShow2, setIsPopShow2] = useState(false) // 已有直播间确认弹窗
    const [isHaveRoomId, setIsHaveRoomId] = useState('') // 已有直播间RoomId

    useEffect(() => {
        if (inputWrong === true && inputVal.current.value !== '') {
            setInputWrong(false)
        }
    }, [inputVal.current, inputWrong])

    // 图片地址转换Blob格式
    // const dataURLtoBlob = (dataurl) => {
    //     let arr = dataurl.split(',')
    //     let mime = arr[0].match(/:(.*?);/)[1]
    //     let bstr = atob(arr[1])
    //     let n = bstr.length
    //     let u8arr = new Uint8Array(n)
    //     while (n--) {
    //         u8arr[n] = bstr.charCodeAt(n)
    //     }
    //     return new Blob([u8arr], { type: mime })
    // }

    // 选择图片文件
    const onSetInputFiles = useCallback(
        (e) => {
            let file = e.target.files[0] // 获取文件
            if (window.FileReader) { // 如果浏览器支持FileReader
                const reader = new FileReader() // 新建一个FileReader对象
                reader.readAsDataURL(file) // 读取文件url
                reader.onloadend = (e) => {
                    setImgDataUrl(e.target.result)
                    setIsCropperShow(true)
                }
            }

            setInputFileVal('')
        },
        []
    )

    // 上传图片事件
    const coverImgUpload = useCallback(
        () => {
            setIsUpImg(true)
            uploadImg({
                uploadFile: imgBolb,
                type: 'news',
                data: '',
                watermark: 0
            }).then((res) => {
                if (res.code === 1) {
                    textImg.current = res.obj
                    setIsCropperShow(false)
                }
                setIsUpImg(false)
            }).catch((err) => {
                console.log('上传图片失败')
                setIsUpImg(false)
                throw err
            })
        },
        [imgBolb, textImg]
    )

    // 获取直播简介变化
    const onBriefChange = useCallback(
        (content) => {
            setBrief(content)
        },
        []
    )

    // 获取截取图片的Bolb
    const onComplete = useCallback(
        (e) => {
            setImgBolb(e)
        },
        []
    )

    // 获取时间变化
    const onTimeChange = useCallback(
        (value) => {
            if (!value) {
                setTimeVal('')
            } else {
                setTimeVal(value.valueOf())
            }
        },
        []
    )

    // 点击创建按钮事件
    const onBtnCreateClick = useCallback(
        async () => {
            setInputWrong(inputVal.current.value === '')
            setTextareaWrong(brief === '' || brief === '<p></p>' || brief === '<p><br></p>')
            setImgWrong(textImg.current === '')
            setTimeWrong(timeVal === 0 || timeVal === '')
            if (isUpImg === true || textImg.current === '' || timeVal === 0 || timeVal === '' || trim(inputVal.current.value) === '' || trim(brief) === '' || brief === '<p></p>' || brief === '<p><br></p>') return

            // 如果所选时间小于此刻时间，直接用此刻时间
            const time = timeVal < moment().valueOf() ? moment().valueOf() : timeVal

            const liveListData = await dispatch(getRoomLiveList({ passportId: userInfo.passportId, adminCreateFlag: 0, main: true }))
            if (liveListData.code === 1) {
                const liveList = liveListData.obj.inforList
                let isHave = -1
                for (let i = 0; i < liveList.length; i++) {
                    const element = liveList[i]
                    if (parseInt(element.status) !== 2) {
                        isHave = i
                        break
                    }
                }

                if (isHave !== -1) {
                    setIsHaveRoomId(liveList[isHave].roomId)
                    setIsPopShow2(true)
                    return { customRes: true }
                }
            } else {
                throw Error(liveListData.msg)
            }

            const roomAddRes = await getRoomAdd({
                name: inputVal.current.value,
                brief: brief,
                passportId: userInfo.passportId,
                nickName: userInfo.nickName,
                coverPicUrl: textImg.current,
                beginTime: time,
                roomType: 1
                // displayFlag: 0 // 临时添加：创建不展示的直播间
            }).catch(function (err) {
                Toast.info('获取直播间错误')
                throw err
            })

            if (roomAddRes.code === 1) {
                window.location.href = mixUrl.main(`/live/control/${roomAddRes.obj}`)
            } else {
                Toast.info(roomAddRes.msg)
            }
        },
        [dispatch, inputVal, isUpImg, textImg, userInfo, brief, timeVal]
    )

    // 点击关闭裁剪弹窗
    const onBtnCropperCloseClick = useCallback(
        () => {
            setInputFileVal('')
            setImgDataUrl('')
            setIsCropperShow(false)
        },
        []
    )

    // 点击已存在直播间按钮
    const onBtnPopupOKClick2 = useCallback(
        () => {
            if (isHaveRoomId !== '') {
                window.location.href = mixUrl.main(`/live/control/${isHaveRoomId}`)
            }
        },
        [isHaveRoomId]
    )

    return (
        <div className="im-live-create-page">
            <div className="im-live-create-page-title-box">
                <div className="im-live-create-page-title">创建电脑端直播</div>
                <div className="im-live-create-page-explain-box">
                    <div className="im-live-create-page-explain">电脑直播需要OBS软件辅助，手机直播请在MarsBit上开启</div>
                    <a className="im-live-create-page-explain explain2" href={coursUrl} target="_blank">MarsBit电脑直播教程</a>
                </div>
            </div>
            <div className="im-live-create-page-create-box">
                <ImLiveCreateInputItem title={'直播标题：'} valRef={inputVal} isWrong={inputWrong} wrongText={'请填写直播标题'} />
                <ImLiveCreateTextareaItem title={'直播简介：'} brief={brief} onBriefChange={onBriefChange} isWrong={textareaWrong} wrongText={'请填写直播简介'} />
                <ImLiveCreatePictureItem title={'直播封面：'} src={!textImg.current ? imgDataUrl : textImg.current} inputFileVal={inputFileVal} coverImgUpload={onSetInputFiles} isWrong={imgWrong} wrongText={'请上传直播封面'} />
                <ImLiveDateInputItem title={'直播日期：'} onTimeChange={onTimeChange} isWrong={timeWrong} wrongText={'请选择直播日期'} />
                <ImLiveCreateExplainItem data={explainData} />
                <ImLiveCreateBtnItem text={'创建直播'} click={onBtnCreateClick} url={obsUrl} />
                {/* <img className="im-live-create-page-create-bg" src={bgIcon} /> */}
            </div>
            <div className="im-live-create-page-title-box">
                <div className="im-live-create-page-title">开启直播教程</div>
                <div className="im-live-create-page-explain-box">
                    <div className="im-live-create-page-explain">MarsBit电脑直播需使用OBS或者其他同类型软件辅助，以下教程以OBS软件为例</div>
                </div>
            </div>
            <div className="im-live-create-page-course-box">
                {
                    courseData.map((item, index) => {
                        return (
                            <ImLiveCreateCourseItem {...item} key={index} />
                        )
                    })
                }
            </div>
            <Popup
                children={
                    <ImLiveCreateCropperPopup
                        title={'图片裁剪'}
                        halftitle={'优秀的封面是获得流量的基础'}
                        textList={cropperTextList}
                        onCloseClick={onBtnCropperCloseClick}
                        onOkClick={coverImgUpload}
                        ImageCropper={ImageCropper}
                        onComplete={onComplete}
                        image={imgDataUrl}
                    />
                }
                show={isCropperShow}
                close={onBtnCropperCloseClick}
                closeIcon={popupCloseIcon}
                closeClassName={'im-live-create-cropper-popup-close '}
            />
            <Popup
                children={
                    <ImLiveControlPopup
                        title={'提示'}
                        text={'您已存在直播间'}
                        ok={onBtnPopupOKClick2}
                        okText={'确定'}
                    />
                }
                show={isPopShow2}
                closeClassName={'im-live-control-popup-close2'}
            />
        </div>
    )
}
