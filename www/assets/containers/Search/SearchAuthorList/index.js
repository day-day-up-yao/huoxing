import React from 'react'
import './index.scss'
import { keyLight } from 'multiPublic'

const SearchAuthorList = (props) => {
    return props.cont.map((item, index) => {
        return <div className="author-list-item" key={index}>
            <a target="_blank" title={item.nickName} className="author-icon" href={`/userCenter/${item.passportId}`}>
                <img alt={item.nickName} src={item.iconUrl}/>
            </a>
            <a target="_blank" title={item.nickName} className="author-name" href={`/userCenter/${item.passportId}`} dangerouslySetInnerHTML={{ __html: keyLight(item.nickName, props.searchKey) }}>
            </a>
            <p className="author-desc">{!item.introduce ? '' : <span dangerouslySetInnerHTML={{ __html: keyLight(item.introduce, props.searchKey) }} /> }</p>
        </div>
    })
}

export default SearchAuthorList
