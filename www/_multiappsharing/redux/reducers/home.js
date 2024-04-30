import {
    GETSHOWLIVESLIST,
    GETCALENDARLIST,
    GETHOOMROOMLIVERECOMMENDLIST,
    GETHOOMROOMLIVELIST,
    HOMELIVEVERIFYPOPUPSHOW
} from '../constants/home'
import { mixUrl } from '../../public/index'

const initState = {
    // 7x24H 快讯
    showlivesData: [],
    // 项目动态(潜伏日历)
    calendarData: [],

    // 弹窗状态
    popupState: {
        liveVerify: false // 创建直播实名验证弹窗
    },

    /* ----------- 临时添加，右侧推荐直播列表 ---------- */
    roomLiveRecommendList: {
        pageSize: 1,
        recordCount: 1,
        currentPage: 1,
        pageCount: 1,
        inforList: []
    },
    roomLiveTypeListObjData: {},
    roomLiveList: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETSHOWLIVESLIST:
            let liveList = action.data.inforList
            liveList.map((item) => {
                if (!item.content) return
                let startIndex = item.content.indexOf('【') === -1 ? 0 : item.content.indexOf('【') + 1
                let endIndex = item.content.indexOf('】') === -1 ? 0 : item.content.indexOf('】')
                item.title = item.content.substring(startIndex, endIndex)
                item.url = mixUrl.news(`/flash/${item.id}.html`)
            })

            return { ...state, showlivesData: liveList }
        case GETCALENDARLIST:
            return { ...state, calendarData: action.data }
        case HOMELIVEVERIFYPOPUPSHOW:
            return { ...state, popupState: action.data }
        /* ----------- 临时添加，右侧推荐直播列表 ---------- */
        case GETHOOMROOMLIVELIST:
            return { ...state, roomLiveList: action.data }
        case GETHOOMROOMLIVERECOMMENDLIST:
            let recommendListData = action.data
            if (action.data.currentPage > 1) {
                recommendListData.inforList.concat(action.data.inforList)
                return { ...state, roomLiveRecommendList: recommendListData }
            } else {
                return { ...state, roomLiveRecommendList: recommendListData }
            }
        default:
            return state
    }
}
