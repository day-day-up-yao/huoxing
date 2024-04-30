import React from 'react'

import './index.scss'

export default (props) => {
    const { title, halftitle, textList, onCloseClick, onOkClick, ImageCropper, onComplete, image } = props

    return (
        <div className="im-live-create-cropper-popup">
            <div className="im-live-create-cropper-popup-title">{title}</div>
            <div className="im-live-create-cropper-popup-halftitle">{halftitle}</div>
            <div className="im-live-create-cropper-popup-box">
                <div className="im-live-create-cropper-popup-left">
                    {/* <img className="im-live-create-cropper-popup-image" /> */}
                    <ImageCropper onComplete={onComplete} image={image} />
                </div>
                <div className="im-live-create-cropper-popup-right">
                    {
                        textList && textList.map((item, index) => {
                            return (
                                <div className="im-live-create-cropper-popup-text-item" key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                    <div className="im-live-create-cropper-popup-btn-box">
                        <div className="im-live-create-cropper-popup-btn close" onClick={onCloseClick}>取消</div>
                        <div className="im-live-create-cropper-popup-btn ok" onClick={onOkClick}>确定</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
