import {
    GETACTIVITYLIST,
    GETACTIVITYRECOMMENDLIST,
    GETACTIVITYPLACELIST,
    GETACTIVITYINFODATA
} from '../constants/activity'

const initState = {
    // 全部活动列表
    activityAllListData: {
        pageSize: 1,
        recordCount: 1,
        currentPage: 1,
        pageCount: 1,
        currentTime: 0,
        inforList: []
    },
    // 推荐活动列表
    activityRecommendListData: {
        pageSize: 1,
        recordCount: 1,
        currentPage: 1,
        pageCount: 1,
        inforList: []
    },
    // 举办地址列表
    activityPlaceList: [],
    // 活动详情
    activityInfoData: {
        id: 0,
        title: '',
        url: '',
        content: '',
        fee: '',
        numPeople: 0,
        detailPlace: '',
        place: '',
        placeType: 1,
        sponsor: '',
        coverPic: '',
        synopsis: '',
        status: 0,
        recommend: 0,
        startTime: 0,
        endTime: 0,
        createTime: 0,
        ingOrEnd: 0
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETACTIVITYLIST:
            return { ...state, activityAllListData: action.data }
        case GETACTIVITYRECOMMENDLIST:
            return { ...state, activityRecommendListData: action.data }
        case GETACTIVITYPLACELIST:
            const placeItemAll = {
                'place': 'all',
                'rank': 'all',
                'placeCount': ''
            }
            const placeList = action.data.concat()
            placeList.unshift(placeItemAll)

            return { ...state, activityPlaceList: placeList }
        case GETACTIVITYINFODATA:
            return { ...state, activityInfoData: action.data }
        default:
            return state
    }
}
