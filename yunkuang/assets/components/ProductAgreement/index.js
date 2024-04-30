import React from 'react'
import { useParams } from 'react-router-dom'
import Agreement from '../Public/Agreement'

export default () => {
    const { jointMiningType } = useParams()
    return <div>
        <Agreement num={Number(jointMiningType) === 4 ? 4 : 3} />
    </div>
}
