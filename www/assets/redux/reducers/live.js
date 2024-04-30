import { data } from 'autoprefixer'
import {
    GETLIVELIST,
    PUSHSENDTOCONT,
    LISTRANK,
    GETROOMBYID,
    GETROOMLIVELIST,
    GETROOMLIVENOWMAINLIST,
    GETROOMPOPULARITY,
    GETROOMCHATHISTORY,
    GETROOMLIVETYPELIST,
    GETROOMLIVETYPELISTOBJDATA,
    GETROOMLIVERECOMMENDLIST,
    GETROOMLIVEUSERPOPULAR,
    SETROLE,
    SETCHATINFO,
    PUSHCURRENTMESSAGELIST,
    PUSHCURRENTTIPSLIST,
    LIVERESET,
    ISSDKREADY
} from '../constants/live'

const initList = {
    liveData: [],
    popularityList: [], // 人气列表
    // 直播全部列表
    roomLiveList: {
        pageSize: 1,
        recordCount: 1,
        currentPage: 1,
        pageCount: 1,
        inforList: []
    },
    // 正在使用的直播间列表
    roomLiveNowMainList: {
        pageSize: 1,
        recordCount: 1,
        currentPage: 1,
        pageCount: 1,
        inforList: []
    },
    roomHistoryList: [], // 直播聊天室历史记录
    roomLiveTypeList: [], // 直播类型列表
    // 直播推荐列表
    roomLiveRecommendList: {
        pageSize: 1,
        recordCount: 1,
        currentPage: 1,
        pageCount: 1,
        inforList: []
    },
    roomLiveTypeListObjData: {}, // 直播分类列表
    roomLiveUsePopularList: [], // 人气主播
    // 直播间信息
    room: {
        beginTime: null,
        brief: null,
        coverPicUrl: null,
        createTime: null,
        guestList: [],
        name: null,
        personNum: null,
        popularity: null,
        presenterList: [],
        pullStreamUrl: null,
        pushStreamUrl: null,
        realBeginTime: null,
        realEndTime: null,
        recordVideoUrl: null,
        roomId: null,
        roomType: null,
        sharePicUrl: null,
        shareUrl: null,
        status: null
    },
    err: {},

    /* ----------- tweblive ---------- */
    currentMessageList: [], // 当前消息列表
    currentLiveTips: [], // 当前直播提示
    chatInfo: { // 当前聊天信息
        groupId: '',
        userId: '',
        userSig: '',
        sdkAppID: 'SDKAPPID',
        streamId: '',
        role: '',
        resolution: ''
    },
    isSDKReady: false
}

export default (state = initList, action) => {
    const chatInfo = JSON.parse(JSON.stringify(state.chatInfo))
    const oldRoomLiveTypeListObjData = state.roomLiveTypeListObjData
    switch (action.type) {
        case GETLIVELIST:
            const dataOjb = action.data
            let room = dataOjb.room
            let list = dataOjb.contentList
            let moreStart = list.length < 20 ? 0 : 1
            const liveObj = state.liveData.concat(list)
            return { ...state, room: room, liveData: liveObj, moreStart: moreStart }
        case GETROOMPOPULARITY:
            let popArr = action.data
            return { ...state, popularityList: popArr }
        case LISTRANK:
            let rankArr = action.data.contentList
            return { ...state, liveData: rankArr }
        case PUSHSENDTOCONT:
            let pushObj = JSON.parse(action.data.obj)
            let type = pushObj.type
            if (type === 4) {
                return { ...state, type: 4 }
            } else if (type === 5) {
                return { ...state, type: 5 }
            }
            let pushList = !pushObj.data.contentList ? '' : pushObj.data.contentList
            let objId = pushObj.data.content
            let listId = ''
            if (type === 7) {
                return { ...state, liveData: pushList }
            } else if (type === 1) { // 增加
                let newsLiveData = state.liveData
                newsLiveData.unshift(pushObj.data)
                return { ...state, liveData: newsLiveData }
            } else if (type === 2) { // 删除
                listId = !pushList ? objId.contentId : ''
                let deleteArr = []
                state.liveData.map(item => {
                    if (item.content.contentId !== listId) {
                        deleteArr.push(item)
                    }
                })
                return { ...state, liveData: deleteArr }
            } else if (type === 3) { // 修改
                listId = !pushList ? objId.contentId : ''
                state.liveData.map((item, index) => {
                    if (item.content.contentId === listId) {
                        state.liveData[index] = pushObj.data
                    }
                })
                return { ...state, liveData: state.liveData }
            } else {
                return state
            }
        case GETROOMBYID:
            return { ...state, room: action.data }
        case GETROOMLIVELIST:
            let roomLiveListData = action.data
            if (action.data.currentPage > 1) {
                roomLiveListData.inforList.concat(action.data.inforList)
                return { ...state, roomLiveList: roomLiveListData }
            } else {
                return { ...state, roomLiveList: roomLiveListData }
            }
        case GETROOMLIVENOWMAINLIST:
            return { ...state, roomLiveNowMainList: action.data }
        case GETROOMLIVERECOMMENDLIST:
            let recommendListData = action.data
            if (action.data.currentPage > 1) {
                recommendListData.inforList.concat(action.data.inforList)
                return { ...state, roomLiveRecommendList: recommendListData }
            } else {
                return { ...state, roomLiveRecommendList: recommendListData }
            }
        case GETROOMLIVETYPELIST:
            return { ...state, roomLiveTypeList: action.data }
        case GETROOMLIVETYPELISTOBJDATA:
            if (action.data.currentPage > 1) {
                oldRoomLiveTypeListObjData[action.liveType] = {
                    currentPage: action.data.currentPage,
                    inforList: oldRoomLiveTypeListObjData[action.liveType].inforList.concat(action.data.inforList),
                    pageCount: action.data.pageCount,
                    pageSize: action.data.pageSize,
                    recordCount: action.data.recordCount
                }
                return JSON.parse(JSON.stringify({ ...state, roomLiveTypeListObjData: oldRoomLiveTypeListObjData }))
            } else {
                oldRoomLiveTypeListObjData[action.liveType] = action.data
                return JSON.parse(JSON.stringify({ ...state, roomLiveTypeListObjData: oldRoomLiveTypeListObjData }))
            }
        case GETROOMCHATHISTORY:
            return { ...state, roomHistoryList: action.data }
        case GETROOMLIVEUSERPOPULAR:
            return { ...state, roomLiveUsePopularList: action.data }
        /* ----------- tweblive ---------- */
        case SETROLE:
            chatInfo.role = data
            return { ...state, chatInfo: chatInfo }
        case SETCHATINFO:
            chatInfo.groupId = data.roomID
            chatInfo.userId = data.userID
            chatInfo.userSig = data.userSig
            chatInfo.streamId = data.streamID
            chatInfo.role = data.role
            chatInfo.resolution = data.resolution
            return { ...state, chatInfo: chatInfo }
        case PUSHCURRENTMESSAGELIST:
            if (Array.isArray(action.data)) {
                return { ...state, currentMessageList: [...state.currentMessageList, ...action.data] }
            } else {
                return { ...state, currentMessageList: [...state.currentMessageList, action.data] }
            }
        case PUSHCURRENTTIPSLIST:
            if (Array.isArray(data)) {
                return { ...state, currentLiveTips: [...state.currentLiveTips, ...action.data] }
            } else {
                return { ...state, currentLiveTips: [...state.currentLiveTips, action.data] }
            }
        // let timer = null
        // timer = setTimeout(() => {
        //     state.currentLiveTips.shift()
        // }, 2000)
        // if (state.currentLiveTips.length === 0) {
        //     clearTimeout(timer)
        // }
        // return state
        case LIVERESET:
            return { ...state, currentMessageList: [], currentLiveTips: [] }
        case ISSDKREADY:
            return { ...state, isSDKReady: action.data }
        default:
            return state
    }
}
