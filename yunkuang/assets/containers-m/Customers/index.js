import React from 'react'
import './index.scss'
import { isPc } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import bingimg from '../../public/imgs/customerh5.png'
export default () => {
    return <div>
        {isPc() ? '' : <Header title={'大客户'}/>}
        <div className="customer">
            <h2>大客户</h2>
            <div className="aboutus-conimg">
                <div className="aboutus-img">
                    <img src={bingimg} />
                </div>
            </div>
        </div>
    </div>
}
