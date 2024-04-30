import { HEADERCHANNELS } from '../constants/header'
import { mixUrl } from '../../public'

const navData = [
    { channelName: '头条', channelId: '0', url: mixUrl.m() },
    { channelName: '快讯', channelId: '100', url: mixUrl.m(`/flash`) },
    { channelName: '视频', channelId: '200', url: mixUrl.m(`/video`) },
    { channelName: '活动', channelId: '300', url: mixUrl.m(`/huodong`) },
    { channelName: '专题', channelId: '500', url: mixUrl.m('/feature') }
]

const initState = {
    channelsList: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case HEADERCHANNELS:
            return { ...state, channelsList: navData.concat(action.data) }
        default:
            return state
    }
}
