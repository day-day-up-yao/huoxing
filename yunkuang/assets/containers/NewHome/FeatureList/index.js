import React, { useMemo, useContext } from 'react'
import classes from 'classnames'

import './index.scss'

import { Context } from '../Context'
import HashrateList from './HashrateList'

export default () => {
    const { featureselectlist, featuretype, handleSelectFn } = useContext(Context)
    const FeatureSelect = useMemo(() => {
        return (
            <div className="feature-top">
                {featureselectlist.map((item, index) => {
                    const clessname = classes('feature-top-item', { 'select-active': featuretype === item.type })
                    return (
                        <div
                            className={clessname}
                            key={index}
                            onClick={() => {
                                handleSelectFn(item.type)
                            }}
                        >
                            {item.title}
                        </div>
                    )
                })}
            </div>
        )
    }, [featuretype])
    return (
        <div className="feature-list">
            {FeatureSelect}
            <div className="feature-list-con">{<HashrateList />}</div>
        </div>
    )
}
