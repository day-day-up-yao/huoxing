import React, { useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import Popup from 'multiComps/Popup'
import { homeLiveVerifyPopupShow } from 'multiRedux/actions/home'
import popupCloseIcon from '../image/home-popup-close.png'
import PopupLiveVerify from './PopupLiveVerify'

export default () => {
    const { isLiveVerifyShow } = useSelector((state) => ({
        isLiveVerifyShow: state.multi.home.popupState.liveVerify
    }), shallowEqual)

    const dispatch = useDispatch()

    const onBtnCloseClick = useCallback(
        () => {
            dispatch(homeLiveVerifyPopupShow(false))
        },
        []
    )

    return (
        <Popup
            children={<PopupLiveVerify />}
            show={isLiveVerifyShow}
            close={onBtnCloseClick}
            closeIcon={popupCloseIcon}
            closeClassName={'home-popup-live-verify-popup-close'}
        />
    )
}
