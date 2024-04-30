import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNoticeList } from '../../../redux/actions/notice'
import { isArray, formatPublishTime } from 'multiPublic/index'
import Pagination from 'multiComps/Pagination'
import './index.scss'
import originalIcon from '../images/text-icon.png'
import { trim } from '../../../../_multiappsharing/public'

const NoticeCont = (props) => {
    const { dispatch, bourseObj, noticeObj } = props
    const [bourseSymbol, setBourseSymbol] = useState('')
    const [bourseType, setBourseType] = useState('')
    const [searchVal, setSearchVal] = useState('')
    const [curPage, setCurPage] = useState(1)
    useEffect(() => {
        dispatch(getNoticeList({
            exchangeSymbol: bourseSymbol,
            type: bourseType,
            search: '',
            page: curPage,
            pageSize: 20
        }))
    }, [curPage])
    const getFiltrateSymbol = useCallback((e) => {
        let val = ''
        if (e.target.value) {
            val = e.target.value
        } else if (e.target.getAttribute('datasymbol')) {
            val = e.target.getAttribute('datasymbol')
            let nIndex = 0
            bourseObj.obj.exchange.map((item, index) => {
                if (item.symbol === val) {
                    nIndex = index
                }
            })
            let optionSelected = document.getElementById(`bourse_${nIndex}`)
            optionSelected.selected = true
        }
        setBourseSymbol(val)
        dispatch(getNoticeList({
            exchangeSymbol: val,
            type: bourseType,
            search: searchVal
        }))
    })
    const getFiltrateType = useCallback((e) => {
        let val = ''
        if (e.target.value) {
            val = e.target.value
        } else if (e.target.getAttribute('datatype')) {
            val = e.target.getAttribute('datatype')
            let nIndex = 0
            bourseObj.obj.type.map((item, index) => {
                if (item.id === parseInt(val)) {
                    nIndex = index
                }
            })
            let optionSelectedType = document.getElementById(`type_${nIndex}`)
            optionSelectedType.selected = true
        }
        setBourseType(val)
        dispatch(getNoticeList({
            exchangeSymbol: bourseSymbol,
            type: val,
            search: searchVal
        }))
    })
    const getSearchVal = useCallback((e) => {
        let val = e.target.value
        setSearchVal(val)
    })
    const searchBtn = useCallback((e) => {
        dispatch(getNoticeList({
            exchangeSymbol: '',
            type: '',
            search: searchVal
        }))
    })
    const searchEnter = useCallback((event) => {
        if (event.keyCode && event.keyCode !== 13) return false
        let val = event.target.tagName.toLowerCase() !== 'input' ? searchVal : event.target.value
        if (trim(val) !== '') {
            dispatch(getNoticeList({
                exchangeSymbol: '',
                type: '',
                search: val
            }))
        }
    }, [])
    return <div className="notice-cont-box">
        <div className="cont-type">
            <select className="cont-option-type" id="bourseType" onChange={getFiltrateSymbol}>
                {
                    isArray(bourseObj.obj.exchange) && bourseObj.obj.exchange.map((item, index) => {
                        return <option key={index} value={item.symbol} id={`bourse_${index}`}>{item.name}</option>
                    })
                }
            </select>
            <select className="cont-option-type" id="noticeType" onChange={getFiltrateType}>
                {
                    isArray(bourseObj.obj.type) && bourseObj.obj.type.map((item, index) => {
                        return <option key={index} value={item.id} id={`type_${index}`}>{item.name}</option>
                    })
                }
            </select>
            <div className="notice-input-search">
                <input onChange={getSearchVal} type="text" onKeyDown={searchEnter} placeholder="公告搜索"/>
                <span onClick={searchBtn}></span>
            </div>
        </div>
        <div className="notice-cont-list clearfix">
            <div className="list-header clearfix">
                <span>平台</span>
                <span>类型</span>
                <span>内容</span>
                <span>时间</span>
                <span>原文</span>
            </div>
            <div className="cont-tbody">
                {
                    isArray(noticeObj.obj.inforList) && noticeObj.obj.inforList.map(item => {
                        return <div className="cont-item" key={item.id}>
                            <a className="bourse-name" onClick={getFiltrateSymbol} datasymbol={item.exchangeSymbol}>
                                <img src={item.exchangeIconUrl} alt=""/>
                                {item.exchangeName}
                            </a>
                            <a className="item-type" onClick={getFiltrateType} datatype={item.type}>{item.typeName}</a>
                            <Link to={`/noticeDetail/${item.noticeId}`} className="item-cont" target="_blank">{item.title}</Link>
                            <Link to={`/noticeDetail/${item.noticeId}`} className="item-time" target="_blank">{formatPublishTime(item.publishTime, '')}</Link>
                            <a href={item.orignUrl} className="item-link" target="_blank"><img src={originalIcon} alt={item.title}/></a>
                        </div>
                    })
                }
            </div>
            <div
                className="pagination"
                style={{ display: (noticeObj.obj.inforList.length === 0 || noticeObj.obj.recordCount < noticeObj.pageSize) && 'none' }}>
                <Pagination
                    currentPage={noticeObj.obj.currentPage}
                    pageSize={noticeObj.obj.pageSize}
                    totalData={noticeObj.obj.recordCount}
                    pageChange={(curPage) => setCurPage(curPage)}
                />
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    noticeObj: state.notice.noticeObj,
    bourseObj: state.notice.bourseObj
})

export default connect(mapStateToProps)(NoticeCont)
