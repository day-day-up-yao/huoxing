import React, { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { trim } from '../../public/js/index'
import './index.scss'

export default ({ setDays, curDays, electricDayMin, electricDayMax }) => {
    const { t } = useTranslation()
    const [daysType, setDaysType] = useState('select') // select选择，input输入
    const [electricDaysArr, setElectricDaysArr] = useState([90, 180, 270, 360])
    const [daysElectric, setDaysElectric] = useState(electricDaysArr[0])

    // 设置自定义选择天数
    useEffect(() => {
        // if (!electricDayMin || !electricDayMax || electricDayMin > electricDayMax) {
        //     setElectricDaysArr([90, 180, 270, 360])
        // } else if (electricDayMin === electricDayMax) {
        //     setElectricDaysArr([electricDayMin])
        // } else if (electricDayMin < 90 && electricDayMax > 270) {
        //     setElectricDaysArr([electricDayMin, 90, 270, electricDayMax])
        // } else if (electricDayMin >= 90 && electricDayMin < 270 && electricDayMax > 270) {
        //     setElectricDaysArr([electricDayMin, 270, electricDayMax])
        // } else {
        //     setElectricDaysArr([electricDayMin, electricDayMax])
        // }
        if (!electricDayMin || !electricDayMax || electricDayMin > electricDayMax) {
            setElectricDaysArr([90, 180, 270, 360])
        } else { setElectricDaysArr([electricDayMin, electricDayMax]) }
    }, [electricDayMin, electricDayMax])

    // 根据curDays当前缴纳电费天数显示默认状态
    useEffect(() => {
        setDaysType(curDays && curDays > 0 ? (electricDaysArr.indexOf(parseInt(curDays)) > -1 ? 'select' : 'input') : 'select')
        setDaysElectric(curDays && curDays > 0 ? parseInt(curDays) : electricDaysArr[0])
    }, [curDays, electricDaysArr])

    const daysSelect = useCallback((item) => {
        setDaysType('select')
        setDaysElectric(item)
        setDays(item)
    }, [daysType, daysElectric])

    const daysInput = useCallback((event) => {
        const val = parseInt(trim(event.target.value))
        if (event.target.value.length === 1) { event.target.value = event.target.value.replace(/[^1-9]/g, '') } else { event.target.value = event.target.value.replace(/\D/g, '') }
        if (val === '' || val < 1 || isNaN(val) || val < electricDayMin || val > electricDayMax) {
            setDaysType('select')
            setDaysElectric(electricDaysArr[0])
            setDays(electricDaysArr[0])
        } else {
            setDaysType('input')
            setDaysElectric(event.target.value)
            setDays(event.target.value)
        }
    }, [daysType, daysElectric, electricDaysArr])

    return <div className="electric-days">
        <div className="days-select">
            {Array.isArray(electricDaysArr) && electricDaysArr.map(function (item, index) {
                return <p key={index} className={(daysElectric === item && daysType === 'select') ? 'active' : ''} onClick={() => daysSelect(item)}>{item}{t('public.day')}</p>
            })}
        </div>
        <div className="days-input" style={{ display: (electricDayMin && electricDayMax && electricDayMin === electricDayMax) ? 'none' : 'flex' }}>
            <input className={daysType === 'input' ? 'active' : ''} placeholder={t('public.day')} onChange={daysInput} type="number" placeholder={curDays && daysType === 'input' ? curDays : ''} />
            {t('public.day')}
        </div>
    </div>
}
