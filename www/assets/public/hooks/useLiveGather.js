import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { gatherLive } from 'multiRedux/actions/public'
export default () => {
    const dispatch = useDispatch()
    const { room } = useSelector((state) => ({
        room: state.live.room
    }))

    return useCallback(({ eventId, eventInfo }) => {
        dispatch(gatherLive({ liveState: room, eventId, eventInfo }))
    }, [])
}
