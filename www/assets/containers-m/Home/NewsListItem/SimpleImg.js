import React, { useState, useEffect } from 'react'
import { SimpleImg } from 'react-simple-img'
import { stringJsonItem } from 'multiPublic/index'

export default ({ coverPic, tags, type }) => {
    const [oldImg, setOldImg] = useState(coverPic)
    const [newPic, setNewPic] = useState(coverPic)

    useEffect(() => {
        if (coverPic !== newPic) {
            setOldImg(null)
            setNewPic(coverPic)
        }
    }, [coverPic])

    useEffect(() => {
        setOldImg(newPic)
    }, [newPic])

    return <>
        {oldImg !== null && <SimpleImg
            applyAspectRatio
            importance={'high'}
            width={220}
            height={160}
            placeholder={'#f6f8fa'}
            src={stringJsonItem(coverPic, type)}
            alt={tags}
        />}
    </>
}
