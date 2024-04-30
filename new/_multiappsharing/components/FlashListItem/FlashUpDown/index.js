import React from 'react'
import { object } from 'prop-types'

import './index.scss'

const FlashUpDown = (props) => {
    const { details, upOrDown } = props
    return <div className="judge-profit-wrapper" style={{ display: 'none' }}>
        <p className={`good-profit ${parseInt(details.type) === 1 ? 'active' : ''}`}>
            <span data-status="1" data-id={details.id} onClick={upOrDown}>利好</span>
            <span data-status="1" data-id={details.id} onClick={upOrDown}>{details.upCounts}</span>
        </p>
        <p className={`bad-profit ${parseInt(details.type) === 0 ? 'active' : ''}`}>
            <span data-status="0" data-id={details.id} onClick={upOrDown}>利空</span>
            <span data-status="0" data-id={details.id} onClick={upOrDown}>{details.downCounts}</span>
        </p>
    </div>
}

FlashUpDown.propTypes = {
    details: object.isRequired
}

export default FlashUpDown
