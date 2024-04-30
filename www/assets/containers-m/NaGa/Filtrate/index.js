import React from 'react'

import PopupPage from '../Popup'

import './index.scss'

import closeimg from '../../../public/img/close_icon.png'
import Filter from '../../../components/NaGa/Filter'

export default (props) => {
    const { closeFn } = props
    const multilist = [
        { id: 1, name: 'Legendary1）', checked: false },
        { id: 2, name: 'Legendary2（87）', checked: false },
        { id: 3, name: 'Legendary3（87）', checked: false },
        { id: 4, name: 'Legendary4（87）', checked: false },
        { id: 5, name: 'Legendary5（87）', checked: false }
    ]
    return <PopupPage
        isother
        children={
            <div className="filtrate">
                <h2>Filter</h2>
                <div className="close-filter" onClick={() => {
                    closeFn(false)
                }}>
                    <img src={closeimg} alt=""/>
                </div>
                <Filter
                    filterlist={multilist}
                    ish5
                    getdataFn={(e) => {
                        console.log(e)
                    }}
                />
            </div>
        }
    />
}
