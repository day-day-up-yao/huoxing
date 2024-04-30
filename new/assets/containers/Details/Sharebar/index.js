import React, { useEffect, useState, useCallback } from 'react'
import './index.scss'

const Sharebar = (props) => {
    const [shareCon, setShareCon] = useState('')
    const shareGenerate = useCallback(() => {
        const SocialShareBar = require('multiComps/SocialShareBar').default
        return <SocialShareBar
            url={window.location.href}
            sites={['twitter', 'facebook']}
        />
    }, [])
    useEffect(() => {
        setShareCon(shareGenerate())
    }, [])
    return <div className="flashbar-share-wrapper" id="flash-detail-share">
        {typeof window !== 'undefined' && shareCon}
    </div>
}

export default Sharebar
