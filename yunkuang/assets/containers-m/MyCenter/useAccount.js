import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

import Toast from '../../components/Toast'

export default () => {
    const dispatch = useDispatch()
    const [userinfo, setUserinfo] = useState()
    useEffect(() => {
        if (Cookies.get('user_id')) {
            dispatch.public.getUseinfo().then((res) => {
                if (res.code === 0) {
                    setUserinfo(res.data)
                } else {
                    Toast.info(res.msg)
                }
            })
        }
    }, [])
    return { userinfo }
}
