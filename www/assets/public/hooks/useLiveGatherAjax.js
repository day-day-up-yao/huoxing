import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { gather } from 'multiRedux/actions/public'

export default () => {
    const { gatherPayload } = useSelector((state) => ({
        gatherPayload: state.multi.gather
    }))
    console.log(gatherPayload)
    useEffect(() => {
        if (typeof window === 'undefined') return
        window.onunload = function () {
            gather(gatherPayload)
        }
    }, [gatherPayload])
}
