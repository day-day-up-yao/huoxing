import { GETMULTISEARCHLIST, GETNEWSSEARCHLIST, GETLIVESEARCHLIST } from '../constants/search'
import searchData from '../../public/js/searchData'

const { searchTabTypeEnum } = searchData()

const initList = {
    tagsArr: [],
    hotColumn: [],

    // 作者列表数据
    authorListData: {
        currentIndex: 1, // 当前页数
        inforList: [], // 数据列表
        pageSize: 1, // 一页显示数量
        recordCount: 0, // 总共数量
        totalIndex: 1 // 总共页数
    },

    // 精选列表数据
    excellentNewsListData: {
        currentIndex: 1, // 当前页数
        inforList: [], // 数据列表
        pageSize: 1, // 一页显示数量
        recordCount: 0, // 总共数量
        totalIndex: 1 // 总共页数
    },

    // 快讯列表数据
    livesListData: {
        currentIndex: 1, // 当前页数
        inforList: [], // 数据列表
        pageSize: 1, // 一页显示数量
        recordCount: 0, // 总共数量
        totalIndex: 1 // 总共页数
    },

    // 新闻列表数据
    newsListData: {
        currentIndex: 1, // 当前页数
        inforList: [], // 数据列表
        pageSize: 1, // 一页显示数量
        recordCount: 0, // 总共数量
        totalIndex: 1 // 总共页数
    }
}
export default (state = initList, action) => {
    switch (action.type) {
        case GETMULTISEARCHLIST:
            switch (action.pageType) {
                case searchTabTypeEnum.ALL:
                    return {
                        ...state,
                        authorListData: !action.data.Author ? state.authorListData : action.data.Author,
                        excellentNewsListData: !action.data.ExcellentNews ? state.excellentNewsListData : action.data.ExcellentNews,
                        livesListData: !action.data.Lives ? state.livesListData : action.data.Lives,
                        newsListData: !action.data.News ? state.newsListData : action.data.News
                    }
                case searchTabTypeEnum.EXCELLENTNEWS:
                    if (action.pageNum > 1) {
                        const moreList = action.data.inforList
                        if (moreList.length !== 0) {
                            const newListData = {
                                currentIndex: action.data.currentIndex,
                                inforList: state.excellentNewsListData.inforList.concat(moreList),
                                pageSize: action.data.pageSize,
                                recordCount: action.data.recordCount,
                                totalIndex: action.data.totalIndex
                            }
                            return {
                                ...state,
                                excellentNewsListData: newListData
                            }
                        } else {
                            return state
                        }
                    } else {
                        return {
                            ...state,
                            excellentNewsListData: action.data
                        }
                    }
                case searchTabTypeEnum.NEWS:
                    if (action.pageNum > 1) {
                        const moreList = action.data.inforList
                        if (moreList.length !== 0) {
                            const newListData = {
                                currentIndex: action.data.currentIndex,
                                inforList: state.newsListData.inforList.concat(moreList),
                                pageSize: action.data.pageSize,
                                recordCount: action.data.recordCount,
                                totalIndex: action.data.totalIndex
                            }
                            return {
                                ...state,
                                newsListData: newListData
                            }
                        } else {
                            return state
                        }
                    } else {
                        return {
                            ...state,
                            newsListData: action.data
                        }
                    }
                case searchTabTypeEnum.FLASH:
                    if (action.pageNum > 1) {
                        const moreList = action.data.inforList
                        if (moreList.length !== 0) {
                            const newListData = {
                                currentIndex: action.data.currentIndex,
                                inforList: state.livesListData.inforList.concat(moreList),
                                pageSize: action.data.pageSize,
                                recordCount: action.data.recordCount,
                                totalIndex: action.data.totalIndex
                            }
                            return {
                                ...state,
                                livesListData: newListData
                            }
                        } else {
                            return state
                        }
                    } else {
                        return {
                            ...state,
                            livesListData: action.data
                        }
                    }
                case searchTabTypeEnum.AUTHOR:
                    if (action.pageNum > 1) {
                        const moreList = action.data.inforList
                        if (moreList.length !== 0) {
                            const newListData = {
                                currentIndex: action.data.currentIndex,
                                inforList: state.authorListData.inforList.concat(moreList),
                                pageSize: action.data.pageSize,
                                recordCount: action.data.recordCount,
                                totalIndex: action.data.totalIndex
                            }
                            return {
                                ...state,
                                authorListData: newListData
                            }
                        } else {
                            return state
                        }
                    } else {
                        return {
                            ...state,
                            authorListData: action.data
                        }
                    }
                default:
                    return state
            }
        case GETNEWSSEARCHLIST:
            return { ...state, tagsArr: action.data.inforList }
        case GETLIVESEARCHLIST:
            return { ...state, tagsArr: action.data.inforList }
        default:
            return state
    }
}
