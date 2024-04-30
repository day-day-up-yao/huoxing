import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

export default (props) => {
    const { t } = useTranslation()
    const {
        errtext, // 错误提示
        holdertext, // input提示文字
        rightbtn, // 是否显示input右边
        getInput, // 获取input内容
        gatherFn, // input失焦操作
        leaveFn, // input 聚焦
        errappear, // 是否显示错误提示
        inouttext, // input标题
        sendFn, // 点击发送执行函数
        initid, // 划片验证id
        istime, // 开始倒计时
        ispwd // 密码设置
    } = props
    const [sendnum, setSendnum] = useState(t('header.sign.sendVerifyCode'))
    const [cansend, setCansend] = useState(false)
    useEffect(() => {
        if (istime) {
            setCansend(true)
        }
    }, [istime])
    useEffect(() => {
        let timer = null
        if (cansend) {
            let num = 60
            setSendnum(`${num}s`)
            timer = setInterval(() => {
                if (num > 0) {
                    num--
                    setSendnum(`${num}s`)
                } else {
                    setSendnum(t('header.sign.sendVerifyCode'))
                    setCansend(false)
                    clearInterval(timer)
                }
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [cansend])
    return <div className="input-set">
        {inouttext && <h4>{inouttext}</h4>}
        <div className="input-info">
            <input
                type={ispwd ? 'password' : 'text'}
                placeholder={holdertext}
                onFocus={leaveFn}
                onBlur={() => {
                    gatherFn()
                }}
                className={`start-input ${rightbtn && 'input-few'} ${errappear && 'input-active'}`}
                onChange={(e) => {
                    getInput(e.target.value)
                }}
            />
            {rightbtn && <div className={`input-right ${cansend && 'right-btn'}`} onClick={() => {
                if (!cansend) {
                    sendFn()
                    // setCansend(true)
                }
            }}>{sendnum}</div>}
        </div>
        {errappear && errtext && <div className="input-err">{errtext}</div>}
        {initid && <div id={initid} style={{ marginTop: 10 }} />}
    </div>
}
