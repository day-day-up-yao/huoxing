import React, { useEffect, useState, useCallback } from 'react'
// import { useTranslation } from 'react-i18next'

import './index.scss'

import useLang from '../../../public/hooks/useLang'
import { langWhat, isJp } from '../../../public/js/index'
import ndown from '../../../public/imgs/newpage/ndown1.png'
import pup from '../../../public/imgs/newpage/point_up.png'

const HeaderTitle = (props) => {
    const { getlocal, setlangflag } = props
    const changeLang = useLang()
    const [langtext, setLnagtext] = useState({
        flag: false,
        text: ''
    })
    useEffect(() => {
        if (langWhat(getlocal) === 'ja') {
            setLnagtext({
                flag: false,
                text: 'mclouds.jp'
            })
        }
        if (langWhat(getlocal) === 'en') {
            setLnagtext({
                flag: false,
                text: 'Global Site'
            })
        }
        if (langWhat(getlocal) === 'zh') {
            setLnagtext({
                flag: false,
                text: '中文站'
            })
        }
    }, [])
    // 点击其他地方隐藏下拉列表
    const hideAllMenu = useCallback(() => {
        setLnagtext({
            flag: false,
            text: langtext.text
        })
    })
    useEffect(() => {
        document.addEventListener('click', hideAllMenu)
    }, [hideAllMenu])
    return <div className="add-header-title">
        {langWhat(getlocal) === 'zh' && <div className="title-text">我们检测到您的浏览器语言与当前站点不同。是否希望前往其他站点？</div>}
        {langWhat(getlocal) === 'ja' && <div className="title-text">お使いのブラウザの言語が現在のサイトと異なることが検出されました。他のサイトをご覧になりたいですか？</div>}
        {langWhat(getlocal) === 'en' && <div className="title-text">We have detected that your browser language is different from the current site. Would you like to go to other sites?</div>}
        <div className="title-select">
            <div className="title-select-text" onClick={(e) => {
                setLnagtext({
                    flag: true,
                    text: langtext.text
                })
                e.nativeEvent.stopImmediatePropagation()
            }}>
                <span>{langtext.text}</span>
                <img src={langtext.flag ? pup : ndown} alt=""/>
            </div>
            {langtext.flag && <div className="title-select-list">
                <div className="title-select-list-item" onClick={() => {
                    setLnagtext({
                        flag: false,
                        text: langtext.text
                    })
                }}>{langtext.text}</div>
            </div>}
        </div>
        <div className="title-btn" onClick={() => {
            if (langWhat(getlocal) === 'ja') {
                window.location.href = 'https://www.mclouds.jp'
                return
            }
            if (isJp) {
                window.location.href = 'https://www.mclouds.io/?lang=en-us'
            } else {
                changeLang(getlocal)
            }
        }}>GO</div>
        <div className="title-close" onClick={() => {
            window.localStorage.setItem('headertitle', 'ok')
            setlangflag(false)
        }}>×</div>
    </div>
}

export default HeaderTitle
