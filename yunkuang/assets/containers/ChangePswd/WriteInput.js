import React, { useState } from 'react'

import seeimg from '../../public/imgs/new/see.png'
import notseeimg from '../../public/imgs/new/nosee.png'

export default (props) => {
    const { desc, getNum } = props
    const [look, setLook] = useState(false)
    return <div className="paswd-con-write">
        <input type={look ? 'text' : 'password'} placeholder={desc} onChange={(e) => {
            getNum(e.target.value)
        }}/>
        <img src={look ? seeimg : notseeimg} alt="" onClick={() => {
            setLook(!look)
        }}/>
    </div>
}
