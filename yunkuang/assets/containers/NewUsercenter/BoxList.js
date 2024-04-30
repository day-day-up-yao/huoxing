import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import failimg from '../../public/imgs/newedition/redesign/failsicon.png'
import usuccimg from '../../public/imgs/newedition/redesign/successicon.png'
import switchimg from '../../public/imgs/newedition/redesign/switching_icon.png'
import switchingimg from '../../public/imgs/newedition/redesign/switch_icon.png'
import Toast from '../../components/Toast'
import PopupBg from '../../components/PopupBg'
import PromptBox from '../../components/PromptBox'

export default (props) => {
    const { item, iskyc, clickFn, bindflag } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [equip, setEquip] = useState(item?.equipment)
    const [bgflag, setBgflag] = useState(false)
    const [togo, setTogo] = useState(false)
    // const [objinfo, setObjinfo] = useState({
    //     flage: false,
    //     type: '',
    //     setway: ''
    // })
    useEffect(() => {
        setBgflag(bindflag)
        if (bindflag) {
            setTogo(true)
        }
    }, [bindflag])
    const settingequipFn = useCallback(
        (name) => {
            if (name === 'google') {
                setBgflag(true)
            } else {
                dispatch.public
                    .multiDevice({
                        multiDeviceLogin: equip ? 0 : 1
                    })
                    .then((res) => {
                        if (res.code === 0) {
                            setEquip(!equip)
                        } else {
                            Toast.info(res.msg)
                        }
                    })
            }
        },
        [equip]
    )
    // 继续解绑身份验证
    const closegoogleFn = useCallback(() => {
        clickFn({
            flage: false,
            type: 'unbingga',
            setway: 1
        })
        setBgflag(false)
        setTogo(true)
    }, [])
    // 删除账户
    const cancelloginFn = useCallback(() => {
        dispatch.public.userCancel().then((res) => {
            if (res.code === 0) {
                window.location.href = '/'
            } else {
                Toast.info(res.msg)
            }
        })
    })
    return (
        <div className="accountsety-list">
            {item.info.map((itm, idx) => {
                return (
                    <div className="accountsety-list-item" key={idx}>
                        <div className="account-item-left">{itm.title}</div>
                        <div className="account-item-right">
                            <div className="item-right-text">
                                <div className="right-text-left">
                                    {itm.text}
                                    {itm.imgs && <img src={itm.assate === 0 ? failimg : usuccimg} alt="" />}
                                </div>
                                <div className="right-text-right">{itm.desc}</div>
                            </div>
                            {!itm.noset && (
                                <div className="item-right-operation">
                                    {(itm.assate === -2 || (itm.assate === 0 && itm.name === 'googlego')) && (
                                        <div
                                            className="right-operation-left"
                                            onClick={() => {
                                                settingequipFn(itm.name)
                                                // setObjinfo({
                                                //     flage: false,
                                                //     type: itm.name,
                                                //     setway: itm.assate
                                                // })
                                            }}
                                        >
                                            <img src={equip ? switchimg : switchingimg} alt="" />
                                        </div>
                                    )}
                                    {!(itm.assate === 0 && itm.name === 'googlego') && (
                                        <div
                                            className={`right-operation-right`}
                                            onClick={() => {
                                                console.log(itm)
                                                if (itm.link === '*') {
                                                    const obj = {
                                                        flage: false,
                                                        type: itm.name,
                                                        setway: itm.assate
                                                    }
                                                    clickFn(obj)
                                                }
                                                if (itm.link) {
                                                    window.location.href = itm.link
                                                }
                                                if (itm.link === 'cancels') {
                                                    cancelloginFn()
                                                }
                                            }}
                                        >
                                            {iskyc ? (
                                                <>{itm.assate === 0 && t('public.notkyc')}</>
                                            ) : (
                                                <>
                                                    {itm.assate === -1 && t('public.loginouts')}
                                                    {itm.assate === 0 && t('usercenter.amend')}
                                                    {itm.assate === 1 && t('usercenter.setting')}
                                                    {itm.assate === -2 && t('public.equipmoment')}
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
            {bgflag && (
                <PopupBg
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
                />
            )}
        </div>
    )
}
