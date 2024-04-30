import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import './index.scss'

import { isArray, arriveAtDom } from 'multiPublic/index'
import { Avatar, AttentionButton, AuthorName } from 'multiComps/AuthorInfo'
import { getAuthorList } from 'multiRedux/actions/news'
import Toast from 'multiComps/Toast'
import Pagination from 'multiComps/Pagination'

const identityData = [
    {
        type: 0,
        name: '全部'
    }, {
        type: 3,
        name: '投研'
    }, {
        type: 1,
        name: '媒体'
    }, {
        type: 6,
        name: '社群 '
    }, {
        type: 4,
        name: '项目'
    }, {
        type: 2,
        name: 'KOL'
    }/* , {
        type: 5,
        name: '行情'
    } */
]

const Author = (props) => {
    const { authorList, dispatch, userInfo, match, history } = props
    const order = match.params.order || 5
    const type = match.params.type || 0
    const page = match.params.page || 1
    const attentionSuccessed = useCallback(() => {
        dispatch(getAuthorList({
            type: order,
            currentPage: page,
            identityAuth: type,
            pageSize: 30,
            myPassportId: userInfo.passportId || ''
        })).then(function (res) {
            if (res.code !== 1) {
                Toast.info(res.msg)
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取作者列表错误')
        })
    }, [order, type, page, userInfo])

    const goPage = useCallback((curPage) => {
        arriveAtDom(0)
        history.push(`/author/${order}/${type}/${curPage}`)
    }, [order, type])

    return <div className="author-list-wrapper">
        <div className="sort">
            排序:
            <Link
                to={`/author/5/${type}/1`}
                className={`${parseInt(order) === 5 && 'active'}`}>
                推荐作者
            </Link>
            <Link
                to={`/author/6/${type}/1`}
                className={`${parseInt(order) === 6 && 'active'}`}>
                最新入驻
            </Link>
        </div>
        <div className="type">
            类别:
            {identityData.map(function (item, index) {
                return <Link
                    key={item.type}
                    to={`/author/${order}/${item.type}/1`}
                    className={`${parseInt(type) === item.type && 'active'}`}>
                    {item.name}
                </Link>
            })}
        </div>
        <ul>{isArray(authorList.inforList) && authorList.inforList.map(function (item, index) {
            return <li key={index}>
                <div className="left">
                    <Avatar authorInfo={item} />
                </div>
                <div className="right">
                    <div className="info-up">
                        <div className="title">
                            <div className="name">
                                <AuthorName authorInfo={item} />
                                {/* <span>意见领袖</span> */}
                            </div>
                            <AttentionButton authorInfo={item} attentionSuccessed={attentionSuccessed} />
                        </div>
                        <p title={item.introduce}>{item.introduce}</p>
                    </div>
                    <div className="info-down">
                        <span>文章数：{item.newsCount || 0}</span>
                        <span>粉丝数：{item.followCount || 0}</span>
                    </div>
                </div>
            </li>
        })}</ul>
        <div
            className="pagination"
            style={{ display: (authorList.inforList.length === 0 || authorList.recordCount < authorList.pageSize) && 'none' }}>
            <Pagination
                currentPage={page}
                pageSize={authorList.pageSize}
                totalData={authorList.recordCount}
                pageChange={goPage}
            />
        </div>
    </div>
}

const mapStateToProps = (state) => {
    const multi = state.multi
    return {
        authorList: multi.news.author.authorList,
        userInfo: multi.login.userInfo.info
    }
}

export default connect(mapStateToProps)(withRouter(Author))
