import React, { useEffect, useCallback, useState, forwardRef, useRef } from 'react'
import Toast from '../../../components/Toast'

export default forwardRef(({ onSuccess, onError, onClose, onNextWillShow }, ref) => {
    const refSelf = ref || useRef()

    const onSuccessSelf = useCallback((senseResId) => {
        onSuccess && onSuccess(senseResId)
        ref.current ? ref.current.reset() : ref.reset()
    }, [])
    const onErrorSelf = useCallback((err) => {
        Toast.error(err.msg)
    }, [])
    const onCloseSelf = useCallback(() => {

    }, [])

    const [senseCon, setSenseCon] = useState('')
    const senseGenerate = useCallback(() => {
        const Sense = require('../Sense/sense').default
        return <Sense
            type="1"
            lang={(window.localStorage.i18nextLng).toLowerCase().substring(0, 2) === 'zh' ? 'zh-cn' : 'en'}
            onSuccess={onSuccessSelf}
            onError={onError || onErrorSelf}
            onClose={onClose || onCloseSelf}
            onNextWillShow={onNextWillShow && onNextWillShow}
            ref={refSelf}
        />
    }, [])
    useEffect(() => {
        setSenseCon(senseGenerate())
    }, [])

    return senseCon
})
