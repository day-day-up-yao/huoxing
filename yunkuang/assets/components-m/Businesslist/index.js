import React from 'react'
import './index.scss'
import Itemproduct from './itemproduct'
export default ({ productList, chancode }) => {
    return <div>
        <div className="HomeCon-m" id='#productlists'>
            {Array.isArray(productList) && productList.map((item, index) => (
                <Itemproduct item={item} key={index} code = {chancode}/>
            ))}
        </div>
    </div>
}
