/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {POWERZH} from '../../../constants'

const powerGuestInfo = (
    state = {
        pageData: {'page': 1, 'pageSize': 20, 'recordCount': 0},
        imgList: []
    }, action) => {
    switch (action.type) {
        case POWERZH.IMGLIST:
            return {
                ...state,
                imgList: action.data.inforList.length === 0 ? [] : action.data.inforList
            }
        case POWERZH.GUESTSETPAGE:
            return {
                ...state,
                pageData: {
                    pageSize: action.data.pageSize,
                    recordCount: action.data.recordCount,
                    page: action.data.page
                }
            }
        default:
            return state
    }
}

export default powerGuestInfo
