import React from 'react'

import searchimg from '../../../public/img/search_naga.png'

import './index.scss'

export default (props) => {
    const { little } = props
    return <div className={`search-center ${little && 'little-search'}`}>
        <img src={searchimg} alt=""/>
        <input type="text" placeholder="Search"/>
    </div>
}
