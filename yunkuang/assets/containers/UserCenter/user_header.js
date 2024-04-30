import React from 'react'
export default ({ userinfo }) => {
    return <div className='userhader'>
        <div className='userhader-con'>
            <div className='con-top'>{userinfo.mobile === '' ? userinfo.email : userinfo.mobile}</div>
            <div className='con-bottom'>
                <span>UID</span>
                <span>{userinfo.userId}</span>
            </div>
        </div>
    </div>
}
