import React from 'react'
import Itemproducts from './otherproduct'
import './index.scss'
export default ({ products, chancode }) => {
    return <div className="feature-top" id="featurelist">
        {products && products.map((item, index) => (
            <Itemproducts item = {item} key={index} code = {chancode} />
        ))}
    </div>
}
