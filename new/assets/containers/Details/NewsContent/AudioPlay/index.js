import React, { useEffect, useState, useCallback } from 'react'

import Toast from 'multiComps/Toast'
import { mouseOffset, elementOffset, isIos } from 'multiPublic/index'

import './index.scss'

const calcTime = (time) => {
    let hour
    let minute
    let second
    let timer = ''
    hour = String(parseInt(time / 3600, 10))
    minute = String(parseInt((time % 3600) / 60, 10))
    second = String(parseInt(time % 60, 10))
    if (hour !== '0') {
        if (hour.length === 1) hour = '0' + hour
        timer += (hour + ':')
    }
    if (minute.length === 1) minute = '0' + minute
    timer += (minute + ':')
    if (second.length === 1) second = '0' + second
    timer += second
    return timer
}

const audioLoad = (musicSrc) => new Promise((resolve, reject) => {
    try {
        const audio = new Audio()
        audio.src = musicSrc
        audio.addEventListener('loadedmetadata', resolve)
    } catch (err) {
        reject(err)
    }
})

const AudioPlay = (props) => {
    const { file } = props

    const [duration, setDuration] = useState(0)
    const [audio, setAudio] = useState(null)
    const [curTime, setCurTime] = useState(0)
    const [curLoad, setCurLoad] = useState(0)
    const [curPlay, setCurPlay] = useState(0)
    const [audioStatus, setAudioStatus] = useState('pause')

    const audioPlay = useCallback(() => {
        if (audioStatus === 'pause') {
            audio.play()
            setAudioStatus('play')
        } else if (audioStatus === 'play') {
            audio.pause()
            setAudioStatus('pause')
        }
    }, [audio, audioStatus])

    const clickProgressPlay = useCallback((event) => {
        const $ele = event.target
        const curWidth = mouseOffset().x - elementOffset($ele).left
        const curTime = curWidth / 630 * duration
        setCurTime(curTime)
        setCurPlay(curWidth)
        setAudioStatus('play')
        audio.currentTime = curTime
        audio.play()
    }, [audio, duration])

    useEffect(() => {
        audioLoad(file.fileUrl).then(function (event) {
            setAudio(event.target)
            // 由于ios不能读取讯飞传递过来的mp3音频的时间，故用总问字数/语速（语速由总问字数/总时长-此时长在安卓或PC获取）
            const iosDuration = document.getElementById('newsDetailsContent').textContent.length / 5
            const audioDuration = isIos() ? iosDuration : event.target.duration
            setDuration(audioDuration)
        }).catch(function (err) {
            console.log(err)
            Toast.info('音频加载错误')
        })
    }, [])

    useEffect(() => {
        if (!audio || duration === 0) return

        // 当前播放进度
        audio.addEventListener('timeupdate', function () {
            if (duration === 0) return
            setCurTime(audio.currentTime)
            const allTimeDuration = audio.currentTime / duration * 630
            setCurPlay(allTimeDuration > 630 ? 630 : allTimeDuration)
        })

        // 当前加载进度: 暂时有问题-有时候缓冲最终时间bufferTime跟duration不一致始终小很多
        let bufferCount
        const timer = setInterval(() => {
            const buffer = audio.buffered
            if (!buffer || buffer.length === 0) return false

            const bufferTime = buffer.end(buffer.length - 1)
            setCurLoad(bufferTime / duration * 630)
            if (Math.abs(duration - bufferTime) < 1 || bufferCount === bufferTime) {
                setCurLoad(630)
                clearInterval(timer)
            }
            bufferCount = bufferTime
        }, 1000)

        return () => {
            audio.removeEventListener('timeupdate')
            clearInterval(timer)
        }
    }, [audio, duration])

    return <div className="news-details-audio">
        <div className="play-pause" onClick={audioPlay}>
            <div className="play" style={{ display: audioStatus === 'pause' ? 'block' : 'none' }}/>
            <div
                className="pause"
                style={{ display: audioStatus === 'play' ? 'block' : 'none' }}>
                <em/><em/><em/><em/>
            </div>
        </div>
        <div className="time-progress">
            <time className="cur-time">{calcTime(curTime)}</time>
            <div className="progress" onClick={clickProgressPlay}>
                <div className="loaded" style={{ width: curLoad }}/>
                <div className="playing" style={{ width: curPlay }}/>
            </div>
            <time className="all-time">{calcTime(duration)}</time>
        </div>
    </div>
}

export default AudioPlay
