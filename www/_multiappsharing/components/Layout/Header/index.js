import React from 'react'

import './index.scss'

// import ProductLink from './ProductLink'
import Navigation from './Navigation'

export default () => {
    return (
        <div className="layout-header">
            {/* <ProductLink key="productLink" /> */}
            <Navigation key="navigation" />
        </div>
    )
}
