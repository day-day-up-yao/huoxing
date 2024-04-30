import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Cookie from 'js-cookie'
import ChangePad from '../ChangePsd'

import Succimg from '../../../public/imgs/new/noticeinfo.png'

export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [firstinfo, setFirstinfo] = useState(0)
    const [pasdflag, setPasdflag] = useState(false)
    useEffect(() => {
        if (Cookie.get('user_id')) {
            dispatch.public.resetInfo().then((res) => {
                if (res.code === 0) {
                    if (!res.data.closePopUp) {
                        setFirstinfo(1)
                    } else {
                        setFirstinfo(0)
                    }
                    setPasdflag(res.data.resetTradePwd)
                }
            })
        }
    }, [])
    const notShow = useCallback((num) => {
        setFirstinfo(num)
    })
    return <div>
        {/* 钱包地址查看提示 */}
        {firstinfo === 1 && <ChangePad
            Topimg = {Succimg}
            succtitle = {t('public.addresshint')}
            // describe = {describeinfo}
            btntext = {t('orderdetail.see')}
            linkbtn
            timeflag
            isIndex
            showInfo = {notShow}
        />}
        {/* 损失提示 */}
        {firstinfo === 2 && <ChangePad
            Topimg = {Succimg}
            succtitle = {t('public.sunhint')}
            // describe = {describeinfo}
            // btntext = '查看'
            surebtn
            timeflag
            showInfo = {notShow}
            // isIndex
        />}
        {/* 资金密码修改提示 */}
        {firstinfo === 0 && pasdflag && <ChangePad
            Topimg = {Succimg}
            succtitle = {t('public.changepasd')}
            btntext = {t('public.gochange')}
            linkbtn
            gomenypasd
            // showInfo = {notShow}
        />}
    </div>
}
