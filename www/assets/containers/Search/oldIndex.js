import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchNewsList from './SearchNewsList'
import SearchFlashList from './SearchFlashList'
import SearchAuthorList from './SearchAuthorList'
import SearchHotList from './SearchHotList'
import NoData from './NoData'
import { getMultiSearchList } from '../../redux/actions/search'
import './index.scss'
import rankData from '../../public/js/rankData'
import { trim, windowScroll, windowOffset, elementOffset, scrollOffset } from 'multiPublic'
import RightNews from 'multiComps/RightNews'
import ImgPopup from 'multiComps/ImgPopup'

const { searchTabType } = rankData()

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // 列表数据
            listData: [],
            // 搜索数量
            recordCount: 0,
            // 搜索内容
            searchQuery: '',
            // 确定搜索内容 用于搜索列表里高亮文字显示
            searchKey: '',
            // 搜索类型 0空列表 其他与searchTabType type相同
            showType: 1,
            // 当前页数
            currPage: 0,
            // 每页数量
            pageSize: 18,
            // 总页数
            total: 0,
            // 大图是否显示
            imgShow: false,
            // 大图显示路径
            imgSrc: null
        }
    }

    // 是否正在搜索
    isSearching = false

    // 在渲染前调用
    componentWillMount () {
        const This = this
        this.setState({
            searchQuery: This.props.match.params.searchQuery,
            searchKey: This.props.match.params.searchQuery
        })
    }

    // 组件渲染后调用
    componentDidMount () {
        // 监听滚动加载
        const This = this
        windowScroll((res) => {
            if (res !== 'down' || This.isSearching) return false

            const $contain = document.getElementById('searchPage')
            if (elementOffset($contain).height < scrollOffset().top + windowOffset().height) {
                This.handleSearchList({ page: parseInt(This.state.currPage) + 1 })
            }
        })

        // 初始加载
        this.handleSearchList({ page: 1 })
    }

    /** @desc 搜索确认按钮事件 */
    searchEnter = (event) => {
        if (!this.isSearching && event.keyCode && event.keyCode !== 13) return false
        if (trim(event.target.value) !== '') {
            this.setState({
                searchQuery: event.target.value,
                searchKey: event.target.value
            })
            this.handleSearchList({ page: 1 })
        }
    }

    /** @desc input输入获取 */
    searchChange = (event) => {
        this.setState({ searchQuery: trim(event.target.value) })
    }

    /** @desc 请求搜索列表 */
    handleSearchList = (obj) => {
        const { dispatch } = this.props
        const This = this
        let sendData = {
            q: this.state.searchQuery,
            page: this.state.currPage,
            pageSize: this.state.pageSize,
            type: this.state.showType
        }

        if (obj) {
            sendData = {
                ...sendData,
                ...obj
            }
        }

        if ((sendData.page > 1) && (sendData.page > this.state.total)) {
            return
        }

        this.isSearching = true
        dispatch(getMultiSearchList(sendData)).then((res) => {
            This.isSearching = false
            if (res.code === 1) {
                if (!res.obj || !res.obj.inforList) {
                    This.setState({
                        listData: [],
                        recordCount: 0,
                        total: 0,
                        currPage: sendData.page,
                        showType: sendData.type
                    })
                } else {
                    let listData = []
                    if (sendData.page === 1) {
                        listData = res.obj.inforList
                    } else {
                        listData = This.state.listData.concat(res.obj.inforList)
                    }

                    This.setState({
                        listData: listData,
                        recordCount: res.obj.recordCount,
                        total: res.obj.totalIndex,
                        currPage: sendData.page,
                        showType: sendData.type
                    })
                }
            } else {
                This.setState({
                    listData: [],
                    recordCount: 0,
                    total: 0,
                    currPage: sendData.page,
                    showType: sendData.type
                })
            }
        })

        // 更改浏览器title
        document.title = `${this.state.searchQuery} - 搜索 - MarsBit`
    }

    /** @desc 显示列表 */
    renderStr = (type, listData, currPage) => {
        if (!listData.length && currPage === 1) {
            return <NoData searchKey={this.state.searchKey} />
        }

        switch (parseInt(type)) {
            case 1:
                return <SearchNewsList cont={listData} searchKey={this.state.searchKey} />
            case 2:
                return <SearchFlashList cont={listData} searchKey={this.state.searchKey} showListImg={this.showListImg} />
            case 3:
                return <SearchAuthorList cont={listData} searchKey={this.state.searchKey} />
            case 4:
                return <SearchHotList cont={listData} searchKey={this.state.searchKey} />
            default:
                break
        }
    }

    /** @desc 设置图片显示 */
    showListImg = (event) => {
        this.setState({
            imgSrc: event.target.getAttribute('src'),
            imgShow: true
        })
    }

    /** @desc 点击列表标签按钮事件 */
    onBtnSearchtabClick = (typeId) => {
        if (this.state.showType !== typeId) {
            this.handleSearchList({ page: 1, type: typeId })
        }
    }

    render () {
        // let This = this
        const { hotNews24H } = this.props
        let { listData, showType, recordCount, searchQuery, currPage, imgShow, imgSrc } = this.state
        return <div className="search-content clearfix" id="searchPage">
            <div className="search-content-left">
                <div className="search-import">
                    <input className="search-input" type="text" placeholder="输入关键词搜索" value={searchQuery} onChange={this.searchChange} onKeyDown={this.searchEnter}></input>
                </div>
                <div className="search-contet-top clearfix">
                    <ul className="tabs">
                        {
                            searchTabType.map((item) => {
                                let active = showType === item.type ? 'active' : ''
                                return <li className={active} key={item.type} onClick={() => { this.onBtnSearchtabClick(item.type) }}>{item.label}</li>
                            })
                        }
                    </ul>
                    <div className="result-num">搜索出<span>{recordCount}</span>条结果</div>
                </div>
                <div className="search-result-list w850 col-2">
                    <div className="clearfix">
                        {
                            this.renderStr(showType, listData, currPage)
                        }
                    </div>
                </div>
            </div>
            <div className="search-content-right">
                <RightNews id="interestNews" data={hotNews24H} title="24H热门新闻" />
            </div>
            <ImgPopup close={() => this.setState({ imgShow: !this.state.imgShow })} show={imgShow} src={imgSrc} />
        </div>
    }
}

const mapStateToProps = (state) => ({
    hotNews24H: state.multi.news.hot24HNewsList.inforList
})

export default connect(mapStateToProps)(Search)
