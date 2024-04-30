// 新版首页
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Cookie from 'js-cookie'
import Banner from './Banner'
import Announce from './Announce'
import Rarn from './Earn'
import Feature from './Feature'
import Describe from './Describe'
import Evaluation from './Evaluation'
import Organ from './Organ'
import Disclaimer from '../../components/Disclaimer'
import Toast from '../../components/Toast'
import Prompt from '../../components/Prompt'
import HomePopup from '../../components/Public/HomePopup'
// import { Decrypt } from '../../public/js/index'

export default () => {
    // console.log(Decrypt('9F53E3D8627E8318C3A6479A894F602B'), Decrypt('6140C125EE15283A735FCD532BD851E9'))
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const { bannerlist, products, partnerlist, lists, userKnows } = useSelector((state) => ({
        bannerlist: state.product.bannerone,
        products: state.public.apppuductlist && state.public.apppuductlist.length > 4 ? state.public.apppuductlist.slice(0, 4) : state.public.apppuductlist,
        partnerlist: state.product.getpartlist,
        lists: state.product.list && state.product.list.length > 8 ? state.product.list.slice(0, 8) : state.product.list,
        announcelist: state.public.annlist,
        userKnows: state.public.userKnow
    }))
    const [msginfo, setMsginfo] = useState()
    const [youknow, setYouknow] = useState(1)
    const [costlist, setCostlist] = useState([])
    const [costflag, setCostflag] = useState(false)
    // const [userKnows, setUserKnows] = useState()

    // const describeinfo = ['登录密码修改成功，为保障您的资金全，24小时内无法提币', '用户系统已更新，原充值地址已失效，请在钱包页查看当前地址']

    useEffect(() => {
        if (products.length < 3) {
            // console.log(document.getElementById('featurelist'))
            document.getElementById('featurelist').style.justifyContent = 'center'
        }
        // dispatch.public.userAgreement({
        //     type: 5
        // }).then((res) => {
        //     if (res.code === 0) {
        //         setUserKnows(res.data)
        //     }
        // })
        if (window.localStorage.getItem('costorder')) {
            setCostflag(true)
        }
        if (Cookie.get('user_id')) {
            dispatch.public.messageList({
                type: 0,
                curPage: 1,
                pageSize: 4
            }).then((res) => {
                if (res.code === 0) {
                    setMsginfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
            dispatch.order.collectOrder({
                status: 0
            }).then((res) => {
                if (res.code === 0) {
                    setCostlist(res.data !== null ? res.data : [])
                }
            })
        } else {
            setYouknow(2)
        }
    }, [])
    return <div className="newhome">
        <Banner {...{ bannerlist }} />
        {msginfo ? (
            <Announce announcelist={msginfo} />
        ) : ('')}
        <Rarn {...{ t }} />
        <Feature {...{ products, partnerlist, lists, t, i18n }} />
        <Describe {...{ t }} />
        <Evaluation {...{ t, i18n }} />
        <Organ {...{ t }} />
        {youknow === 2 && <Disclaimer knowinfo={userKnows} />}
        {costlist.length > 0 && !costflag && <Prompt num={costlist.length} />}
        <HomePopup />
    </div>
}
