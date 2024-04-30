import React from 'react'

import RenderCenter from '../../components/ReaderCenter'
import Context from './Context'
import HomeHeader from './HomeHeader'
import FeatureList from './FeatureList'
import ProductDesc from './ProductDesc'

export default () => {
    return (
        <Context>
            <HomeHeader />
            <RenderCenter
                children={
                    <>
                        <FeatureList />
                        <ProductDesc />
                    </>
                }
            />
        </Context>
    )
}
