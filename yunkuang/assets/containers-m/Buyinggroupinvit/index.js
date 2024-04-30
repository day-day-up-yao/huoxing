import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import './index.scss'
import Poster from './poster'
import Toast from '../../components/Toast'
export default () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const [inviteimg, setInviteimg] = useState()
    const [newimgcode, setNewimgcode] = useState()
    // 点击复制
    const tocopycode = useCallback(() => {
        var message = document.getElementById('addresscode')
        document.execCommand('Copy')
        // 创建一个range
        var range = document.createRange()
        // 清楚页面中已有的selection
        window.getSelection().removeAllRanges()
        // 选中需要复制的节点
        range.selectNode(message)
        // 执行选中元素
        window.getSelection().addRange(range)
        // 执行 copy 操作
        var successful = document.execCommand('copy')
        if (successful) {
            Toast.error('复制成功！')
        } else {
            Toast.error('复制失败，请手动复制！')
        }
    })
    useEffect(() => {
        dispatch.product.inviteshareInfo({
            picType: 15
        }).then((res) => {
            if (res.code) {
                Toast.info(res.smg)
            } else {
                if (res.data) {
                    setInviteimg(res.data[0].originalPic)
                } else {
                    Toast.info('暂无数据')
                }
            }
        })
    }, [])
    if (inviteimg) {
        Poster(inviteimg, window.location.protocol + '//' + window.location.hostname + '/buyinggroup/' + productId, base64 => {
            setNewimgcode(base64.replace('cocomgr/png', 'image/octet-stream'))
        })
    }
    return <div className="myinvite-m">
        <div className="myinvite-m-top">长按图片保存，即可转发微信好友或微信群</div>
        <div className="myinvite-m-img">
            <img src={newimgcode}/>
        </div>
        <div className="myinvite-m-top">
            <span>邀请链接</span>
            <span id="addresscode">{window.location.protocol + '//' + window.location.hostname + '/buyinggroup/' + productId}</span>
            <span onClick={tocopycode}>点击复制</span>
        </div>
    </div>
}
