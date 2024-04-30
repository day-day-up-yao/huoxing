import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

import './index.scss'
import { renameShowHide, getUpdateUserNick } from '../../redux/actions/login'
import { trim, cookiesName } from '../../public/index'
import Toast from '../Toast'

export default (porps) => {
    const { info } = porps
    const dispatch = useDispatch()

    /** @desc 昵称 */
    const nickName = useRef()
    const [nickNameErr, setNickNameErr] = useState('')

    /** @desc 确认登录 */
    const confirm = useCallback(() => {
        const nickNameVal = trim(nickName.current.value)

        if (nickNameVal === '') {
            setNickNameErr('昵称不能为空！')
            return false
        }

        getUpdateUserNick({
            passportid: info.passportId,
            token: info.token,
            nickName: nickNameVal
        }).then(function (res) {
            if (res.code === 1) {
                let domain = ''
                const env = process.env.NODE_ENV
                if (env === 'test') domain = 'marslib.com'
                if (env === 'production') domain = 'marsbit.co'
                Cookies.set(cookiesName.nickName, nickNameVal, { domain: domain, expires: 28 })

                window.location.reload()
            } else {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('修改昵称错误')
            throw err
        })
    }, [info])

    /** @desc 回车确认修改 */
    useEffect(() => {
        window.onkeyup = function (event) {
            if (event.keyCode === 13) {
                confirm()
            }
        }
    }, [])

    /** @desc 控制弹出框显示 */
    const isRenameBoxShow = useCallback((bool) => {
        dispatch(renameShowHide(bool))
    }, [])

    return (
        <div className="rename-box-wrapper">
            <a className="close-icon" onClick={() => {
                isRenameBoxShow(false)
            }} />
            <div className="header">
                <h1>修改昵称</h1>
            </div>
            <div className="body">
                <div className="item">
                    <div className="input-box">
                        <input ref={nickName} onFocus={() => {
                            setNickNameErr('')
                        }} type="text" maxLength={16} placeholder="请修改昵称后参与直播互动" />
                    </div>
                    <p className="error">{nickNameErr}</p>
                </div>
                <button className="submit" onClick={confirm}>确定</button>
            </div>
        </div>
    )
}
