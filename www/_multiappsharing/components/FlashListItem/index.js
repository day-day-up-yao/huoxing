import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { object, number } from 'prop-types'

import './index.scss'

import { flashTime, flashRecognize, mixUrl, urlToLink } from '../../public/index'
import { getUporDown } from '../../redux/actions/flash'
import { isLogin } from '../RegisterLogin/public'
import ImgPopup from '../ImgPopup'
import Toast from '../Toast'
import FlashUpDown from './FlashUpDown'

const FlashListItem = (props) => {
    const { item, serverTime, loginInfo, dispatch } = props

    const [imgSrc, setImgSrc] = useState('')
    const [imgShow, setImgShow] = useState(false)

    const upOrDown = useCallback((event) => {
        if (!isLogin(loginInfo.passportId, dispatch)) return false

        dispatch(getUporDown({
            id: event.target.getAttribute('data-id'),
            status: event.target.getAttribute('data-status'),
            passportid: loginInfo.passportId,
            token: loginInfo.token
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            Toast.info('快讯利好利空错误')
            throw err
        })
    }, [loginInfo])

    const titleContent = flashRecognize(item)
    const title = titleContent.title
    let content = titleContent.content
    content = unescape(content)
    let reg = 'rel="noopener noreferrer"'
    content.replace(reg, '')
    return <div className="flash-list-item-wrapper">
        <div className={`item-icons ${item.tag === 2 ? 'import' : ''}`}>
            <div className="round"/>
            <div className="time-left">{flashTime(item.createdTime, serverTime)}</div>
        </div>
        <a href={mixUrl.news(`/flash/${item.id}.html`)} className={`item-title ${item.tag === 2 ? 'import' : ''}`} target="_blank">{title}</a>
        <h3 className="item-detail">
            <div dangerouslySetInnerHTML={{ __html: urlToLink(content).replace(/\n/g, '</br>') }}/>
            {item.url && <a title="查看原文" href={item.url} target="_blank"> 「查看原文」</a>}
        </h3>
        {item.images && <img className="little-img" onClick={() => {
            setImgShow(!imgShow)
            setImgSrc(item.images)
        }} alt={item.imagesRemark || title} src={item.images}/>}
        <FlashUpDown details={item} upOrDown={upOrDown}/>
        <ImgPopup close={() => setImgShow(!imgShow)} show={imgShow} src={imgSrc}/>
    </div>
}

FlashListItem.propTypes = {
    item: object.isRequired,
    serverTime: number.isRequired
}

const mapStateToProps = (state) => ({
    loginInfo: state.multi.login.userInfo.info
})

export default connect(mapStateToProps)(FlashListItem)
