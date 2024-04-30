import React from 'react'

import userimg from '../../public/imgs/h5img/other/userimg.png'
import nsettingimg from '../../public/imgs/h5img/other/nsetting.png'
import waiterimg from '../../public/imgs/h5img/other/waiter.png'

export default (props) => {
    const { usermsg } = props
    return <div className="header">
        <div className="header-left">
            <div className="left-img">
                <img src={userimg} alt=""/>
            </div>
            <div className="left-text">{usermsg?.mobile === '' ? usermsg?.email : usermsg?.mobile}</div>
        </div>
        <div className="header-right">
            <a className="right-img setting">
                <img src={nsettingimg} alt=""/>
            </a>
            <a className="right-img">
                <img src={waiterimg} alt=""/>
            </a>
        </div>
    </div>
}
