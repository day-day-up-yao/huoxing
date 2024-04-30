import React from 'react'

import './index.scss'

import closeimg from '../../../public/img/close_icon.png'

export default (props) => {
    const { closeFn } = props
    return <div className="coming-soon">
        <div className="coming-center">
            <span>Coming soon</span>
            <div className="close-popup" onClick={() => {
                closeFn()
            }}>
                <img src={closeimg} alt=""/>
            </div>
        </div>
    </div>
}
