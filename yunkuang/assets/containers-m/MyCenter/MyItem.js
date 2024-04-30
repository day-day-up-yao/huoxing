import React, { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import linkicon from '../../public/imgs/h5img/other/pointright.png'
import switchicon from '../../public/imgs/newedition/redesign/switching_icon.png'
import noswitchicon from '../../public/imgs/newedition/redesign/switch_icon.png'
import PopupBg from '../../components/PopupBg'
import PromptBox from '../../components/PromptBox'
import Toast from '../../components/Toast'

import './index.scss'

export default (props) => {
    const { item, isaccount, clickFn, bindflag } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [bgflag, setBgflag] = useState(false)
    const [togo, setTogo] = useState(false)
    const [equip, setEquip] = useState(item?.equipment)
    useEffect(() => {
        setBgflag(bindflag)
        if (bindflag) {
            setTogo(true)
        }
    }, [bindflag])
    const setaccuntFn = useCallback((itm) => {
        if (itm.assate === 0 && itm.name === 'google') {
            setBgflag(true)
            return
        }
        if (itm.name === 'device') {
            dispatch.public.multiDevice({
                multiDeviceLogin: equip ? 0 : 1
            }).then((res) => {
                if (res.code === 0) {
                    setEquip(!equip)
                } else {
                    Toast.info(res.msg)
                }
            })
            return
        }
        if (itm.link === '*') {
            const obj = {
                flage: true,
                type: itm.name,
                setway: itm.state
            }
            clickFn(obj)
        } else {
            window.location.href = itm.link
        }
    }, [equip])
    // 继续解绑身份验证
    const closegoogleFn = useCallback(() => {
        clickFn({
            flage: true,
            type: 'unbingga',
            setway: 1
        })
        setBgflag(false)
        setTogo(true)
    }, [])
    return <div className="mycenter-list">
        {item.list.map((itm, idx) => {
            return <div className="mycenter-item" key={idx}>
                <div className="mycenter-item-left">
                    <img src={itm.icon} alt=""/>
                    <p>{itm.text}</p>
                </div>
                {isaccount && (itm.name === 'google' || itm.name === 'device') ? (
                    <div>
                        <div className="mycenter-item-img" onClick={() => {
                            setaccuntFn(itm)
                        }}>
                            <img src={equip ? switchicon : noswitchicon} alt=""/>
                        </div>
                    </div>
                ) : (
                    <div className="mycenter-item-right" onClick={() => {
                        setaccuntFn(itm)
                    }}>
                        {isaccount && <div className="item-right-left">
                            {itm.state === 0 && <div className="item-right-left-amend">修改</div>}
                            {itm.state === 1 && <div className="item-right-left-set">设置</div>}
                        </div>}
                        <img src={linkicon} alt=""/>
                    </div>
                )}
            </div>
        })}
        {bgflag && <PopupBg
            children={
                <>
                    <PromptBox
                        title={t('public.closega')}
                        type={togo ? 1 : 0}
                        desc={!togo ? t('public.googletitle') : t('public.gaclasesucc')}
                        onGofn={() => {
                            closegoogleFn()
                        }}
                        onCancel={() => {
                            setBgflag(false)
                        }}
                        onSurefn={() => {
                            window.location.reload()
                        }}
                    />
                </>
            }
        />}
    </div>
}
