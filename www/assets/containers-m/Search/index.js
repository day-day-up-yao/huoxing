import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchNewsList from './SearchNewsList'
import SearchLiveList from './SearchLiveList'
import SearchMarketList from './SearchMarketList'
import NoData from './NoData'
import { getNewsSearchList, getLiveSearchList } from '../../redux/actions/search'
import './index.scss'
import iconSearch from './img/m-search.svg'
import rankData from '../../public/js/rankData'
import { trim } from 'multiPublic'
import { getExchangeRate2, getSearchMarketData } from 'multiRedux/actions/market'
const { searchMTabType } = rankData()

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // 列表显示
            isResShow: false,
            // 列表数据
            listData: [],
            // 搜索数量
            recordCount: 0,
            // 搜索内容
            searchQuery: '',
            // 确定搜索内容 用于搜索列表里高亮文字显示
            searchKey: '',
            // 搜索类型 0空列表 其他与 searchMTabType type相同
            showType: 1,
            // 当前页数
            currPage: 0,
            // 每页数量
            pageSize: 10,
            // 总页数
            total: 0,
            // 美元汇率
            cnyPrice: 0
        }
    }

    // 是否正在搜索
    isSearching = false
    // 当前滚动条高度
    nowScrollTop = 0

    // 组件渲染后调用
    componentDidMount () {
        // 加载监听滚动
        const This = this
        const $contain = document.getElementById('searchPage')
        $contain.addEventListener('scroll', This.bindHandleScroll, false)

        // 请求美元汇率
        getExchangeRate2().then(res => {
            if (res.code === 1) {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].quote === 'CNY') {
                        let cnyPrice = res.data[i].price
                        This.setState({
                            cnyPrice: cnyPrice
                        })
                        break
                    }
                }
            }
        })
    }

    // 组件移除前调用
    componentWillUnmount () {
        // 移除监听滚动
        const This = this
        const $contain = document.getElementById('searchPage')
        $contain.removeEventListener('scroll', This.bindHandleScroll)
    }

    /** @desc 处理组件滚动 */
    bindHandleScroll = (event) => {
        let { scrollHeight, clientHeight, scrollTop } = event.target
        if (scrollTop > this.nowScrollTop && !this.isSearching && this.state.showType !== 3) {
            if (scrollTop + clientHeight + 50 > scrollHeight) {
                this.handleSearchList({ page: parseInt(this.state.currPage) + 1 })
            }
        }
        this.nowScrollTop = scrollTop
    }

    /** @desc 搜索确认按钮事件 */
    searchEnter = (event) => {
        if (!this.isSearching && event.keyCode && event.keyCode !== 13) return false
        if (trim(event.target.value) !== '') {
            this.setState({
                searchQuery: event.target.value,
                searchKey: event.target.value,
                showType: 1
            })
            this.handleSearchList({ page: 1 })
        }
    }

    /** @desc input输入获取 */
    searchChange = (event) => {
        this.setState({ searchQuery: trim(event.target.value) })

        if (trim(event.target.value) === '') {
            this.setState({
                isResShow: false
            })
        }
    }

    /** @desc 请求搜索列表 */
    handleSearchList = (obj) => {
        const { dispatch } = this.props
        const This = this
        let sendData = {
            q: this.state.searchQuery,
            keyWord: this.state.searchQuery,
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
        switch (sendData.type) {
            case 1:
                dispatch(getNewsSearchList(sendData)).then((res) => {
                    This.isSearching = false
                    if (res.code === 1) {
                        if (!res.obj || !res.obj.inforList) {
                            This.setState({
                                listData: [],
                                recordCount: 0,
                                total: 0,
                                currPage: sendData.page,
                                showType: sendData.type,
                                isResShow: true
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
                                showType: sendData.type,
                                isResShow: true
                            })
                        }
                    } else {
                        This.setState({
                            listData: [],
                            recordCount: 0,
                            total: 0,
                            currPage: sendData.page,
                            showType: sendData.type,
                            isResShow: true
                        })
                    }
                })
                break
            case 2:
                dispatch(getLiveSearchList(sendData)).then((res) => {
                    This.isSearching = false
                    if (res.code === 1) {
                        if (!res.obj || !res.obj.inforList) {
                            This.setState({
                                listData: [],
                                recordCount: 0,
                                total: 0,
                                currPage: sendData.page,
                                showType: sendData.type,
                                isResShow: true
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
                                showType: sendData.type,
                                isResShow: true
                            })
                        }
                    } else {
                        This.setState({
                            listData: [],
                            recordCount: 0,
                            total: 0,
                            currPage: sendData.page,
                            showType: sendData.type,
                            isResShow: true
                        })
                    }
                })
                break
            case 3:
                dispatch(getSearchMarketData({ search: this.state.searchQuery })).then((res) => {
                    This.isSearching = false
                    if (res.code === 1) {
                        if (!res.data || !res.data.inforList) {
                            This.setState({
                                listData: [],
                                recordCount: 0,
                                total: 0,
                                currPage: sendData.page,
                                showType: sendData.type,
                                isResShow: true
                            })
                        } else {
                            let listData = []
                            if (sendData.page === 1) {
                                listData = res.data.inforList
                            } else {
                                listData = This.state.listData.concat(res.data.inforList)
                            }

                            This.setState({
                                listData: listData,
                                recordCount: res.data.recordCount,
                                total: res.data.totalIndex,
                                currPage: sendData.page,
                                showType: sendData.type,
                                isResShow: true
                            })
                        }
                    } else {
                        This.setState({
                            listData: [],
                            recordCount: 0,
                            total: 0,
                            currPage: sendData.page,
                            showType: sendData.type,
                            isResShow: true
                        })
                    }
                })
                break
            default:
                break
        }
    }

    /** @desc 显示列表 */
    renderStr = (type, listData, currPage) => {
        if (this.isSearching) return
        if (!listData.length && currPage === 1) {
            return <NoData searchKey={this.state.searchKey} />
        }

        switch (parseInt(type)) {
            case 1:
                return <SearchNewsList cont={listData} searchKey={this.state.searchKey} />
            case 2:
                return <SearchLiveList cont={listData} searchKey={this.state.searchKey} />
            case 3:
                return <SearchMarketList cont={listData} price={this.state.cnyPrice} searchKey={this.state.searchKey} />
            default:
                break
        }
    }

    /** @desc 点击取消按钮事件 */
    onBtnCancelClick = () => {
        window.history.go(-1)
    }

    /** @desc 点击列表标签按钮事件 */
    onBtnSearchtabClick = (typeId) => {
        if (this.state.showType !== typeId) {
            this.handleSearchList({ page: 1, type: typeId })
        }
    }

    render () {
        let { isResShow, showType, searchQuery, listData, currPage } = this.state
        return <div className="m-search-content">
            <div className="search-group">
                <div className="input-group">
                    <img src={iconSearch}/>
                    <input type="search" className="input search" placeholder="请输入关键词" value={searchQuery} onChange={this.searchChange} onKeyDown={this.searchEnter}></input>
                </div>
                <span className={`cancel-search ${searchQuery !== '' ? 'input-in' : ''}`} onClick={this.onBtnCancelClick}>取消</span>
            </div>
            <div className="search-main">
                <div className="search-res" style={{ display: isResShow ? 'block' : 'none' }}>
                    <ul className="res-tab">
                        {
                            searchMTabType.map((item) => {
                                let active = showType === item.type ? 'active' : ''
                                return <li className={active} key={item.type} onClick={() => { this.onBtnSearchtabClick(item.type) }}>{item.label}</li>
                            })
                        }
                    </ul>
                    <div className="scroll-box" id="searchPage">
                        {
                            this.renderStr(showType, listData, currPage)
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    newsChannelId: state.multi.newsChannelId
})

export default connect(mapStateToProps)(Search)
