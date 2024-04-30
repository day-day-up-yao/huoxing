import React from 'react'
// import { useDispatch } from 'react-redux'
import cocologo from '../../../public/imgs/def/cocologo.png'
import './index.scss'
export default () => {
    return <div className="cocolayoutbottom">
        <div className='coco-con'>
            <div className='coco-con-l'>
                <div className='coco-con-l-img'>
                    <img src={cocologo} alt=""/>
                </div>
                <p>@cococoin.com all right reserved</p>
            </div>
        </div>
    </div>
}
