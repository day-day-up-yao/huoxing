import React, { useCallback } from 'react'

import './index.scss'

// import Datetime from 'react-datetime'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Calendar from 'rc-calendar'
import DatePicker from 'rc-calendar/lib/Picker'
import zhCN from 'rc-calendar/lib/locale/zh_CN'
import TimePickerPanel from 'rc-time-picker/lib/Panel'
import RichEditor from '../../../public/js/RichEditor'
import btnDownIcon from '../Image/im-live-create-down.png'
import imgAddIcon from '../Image/im-live-create-add.png'
import dateIcon from '../Image/im-live-create-date.png'

/** @desc 输入框Item */
export const ImLiveCreateInputItem = (props) => {
    const { title, valRef, isWrong, wrongText } = props

    return (
        <div className={`im-live-create-item ${isWrong ? 'wrong' : ''}`}>
            <div className="im-live-create-item-title">
                {title}
            </div>
            <input className="im-live-create-item-input" ref={valRef} maxLength={25} placeholder={` ${'标题不超过25个字'}`} />
            {isWrong && <div className="im-live-create-item-wrong">{wrongText}</div>}
        </div>
    )
}

/** @desc 文本区Item */
export const ImLiveCreateTextareaItem = (props) => {
    const { title, brief, onBriefChange, isWrong, wrongText } = props

    return (
        <div className={`im-live-create-item ${isWrong ? 'wrong' : ''}`} style={{ height: '74px', alignItems: 'flex-start' }}>
            <div className="im-live-create-item-title">
                {title}
            </div>
            <textarea className="im-live-create-item-textarea" disabled placeholder={` ${'简介不超过200字'}`} />
            <RichEditor getContent={onBriefChange} content={brief} textDefault={` ${'简介不超过200字'}`} />
            {isWrong && <div className="im-live-create-item-wrong">{wrongText}</div>}
        </div>
    )
}

/** @desc 图片Item */
export const ImLiveCreatePictureItem = (props) => {
    const { title, src, inputFileVal, coverImgUpload, isWrong, wrongText } = props
    return (
        <div className="im-live-create-item" style={{ alignItems: 'flex-start' }}>
            <div className="im-live-create-item-title">
                {title}
            </div>
            <div className="im-live-create-item-img-box">
                {(!src || src === '') && <img className="im-live-create-item-icon" src={imgAddIcon} />}
                <input className="im-live-create-item-img-input" value={inputFileVal} onChange={(e) => coverImgUpload(e)} name="file" id="file" type="file" accept=".jpg,.jpeg,.png" />
                {src && src !== '' && <img className="im-live-create-item-img" src={src} />}
            </div>
            <div className="im-live-create-item-explain" style={{ width: '120px', marginLeft: '16px' }}>建议尺寸1280*720<br />比例16:9</div>
            {isWrong && <div className="im-live-create-item-wrong">{wrongText}</div>}
        </div >
    )
}

/** @desc 日期Item */
export const ImLiveDateInputItem = (props) => {
    const { title, onTimeChange, isWrong, wrongText } = props

    // 仅能选择三天天以内的时间
    // const valid = useCallback(
    //     (current) => {
    //         const tomorrow = moment().add(2, 'day')
    //         const yesterday = moment().subtract(1, 'day')
    //         return current.isAfter(yesterday) && current.isBefore(tomorrow)
    //     },
    //     []
    // )

    // 仅能选择三天天以内的天数
    const disabledDate = useCallback(
        (current) => {
            if (!current) {
                // allow empty select
                return false
            }

            const tomorrow = moment().add(2, 'day')
            const yesterday = moment().subtract(1, 'day')
            return !(current.isAfter(yesterday) && current.isBefore(tomorrow))
        },
        []
    )

    // 时间组件
    const timePickerElement = <TimePickerPanel defaultValue={moment('00:00:00', 'HH:mm')} showSecond={false} />

    // 日期组件
    const calendar = (
        <Calendar
            locale={zhCN}
            style={{ zIndex: 1001 }}
            dateInputPlaceholder="输入日期"
            format='YYYY-MM-DD HH:mm'
            timePicker={timePickerElement}
            disabledDate={disabledDate}
        />
    )

    return (
        <div className={`im-live-create-item ${isWrong ? 'wrong' : ''}`}>
            <div className="im-live-create-item-title">
                {title}
            </div>
            <img className="im-live-create-item-date-img" src={dateIcon} />
            {/* <Datetime
                className="im-live-create-item-date"
                dateFormat="YYYY-MM-DD"
                timeFormat="HH:mm"
                isValidDate={valid}
                inputProps={{ placeholder: ` ${'选择日期'}` }}
                locale={'zh-cn'}
                onChange={onTimeChange}
            /> */}
            <DatePicker
                locale={zhCN}
                animation="slide-up"
                calendar={calendar}
                onChange={onTimeChange}
            >
                {
                    ({ value }) => {
                        return (
                            <input
                                className="im-live-create-item-date"
                                placeholder={` ${'选择日期'}`}
                                readOnly
                                value={(value && value.format('YYYY-MM-DD HH:mm')) || ''}
                            />
                        )
                    }
                }
            </DatePicker>
            <div className="im-live-create-item-explain" style={{ width: '360px', marginLeft: '16px' }}>仅能选择三天以内时间；开播时间段仅供参考，不是实际直播可以开播时间，直播间在开始时间前也可以开播</div>
            {isWrong && <div className="im-live-create-item-wrong">{wrongText}</div>}
        </div>
    )
}

/** @desc 说明Item */
export const ImLiveCreateExplainItem = (props) => {
    const { data } = props

    return (
        <div className="im-live-create-item">
            <div className="im-live-create-item-explain">
                创建直播即为同意
                <a className="im-live-create-item-explain-a" href={data[0].url} target="_blank">{` 《${data[0].name}》 `}</a>
                与
                <a className="im-live-create-item-explain-a" href={data[1].url} target="_blank">{` 《${data[1].name}》 `}</a>
            </div>
        </div>
    )
}

/** @desc 按钮Item */
export const ImLiveCreateBtnItem = (props) => {
    const { text, click, url } = props

    return (
        <div className="im-live-create-item" style={{ marginBottom: 0 }}>
            <div className={`im-live-create-item-btn`} onClick={click}>
                {text}
            </div>
            <a className="im-live-create-item-btn-explain" href={url} target="_blank">
                <img className="im-live-create-item-btn-explain-icon" src={btnDownIcon} />
                下载OBS软件
            </a>
        </div>
    )
}

/** @desc 教程Item */
export const ImLiveCreateCourseItem = (props) => {
    const { img, title, text, urlText, url } = props

    return (
        <div className="im-live-create-course-item">
            <img className="im-live-create-course-item-img" src={img} />
            <div className="im-live-create-course-item-title">{title}</div>
            <div className="im-live-create-course-item-text">{text}</div>
            {url && url !== '' && <a className="im-live-create-course-item-url" href={url} target="_blank" >{urlText}</a>}
        </div>
    )
}
