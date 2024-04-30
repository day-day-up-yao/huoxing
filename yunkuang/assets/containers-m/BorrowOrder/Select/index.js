import React, { useState, useEffect, useRef } from 'react'

import './index.scss'
import { trim } from '../../../public/js'

export default ({ options, onSelected, onInput, value, selected, title }) => {
    const [optionsShow, setOptionsShow] = useState(false)

    useEffect(() => {
        document.body.addEventListener('click', function (event) {
            const className = event.target.className
            if (className && typeof className === 'string' && className.indexOf('body-click') === -1) {
                setOptionsShow(false)
            }
        }, false)
    }, [])

    const [filterOptions, setFilterOptions] = useState(options)
    useEffect(() => {
        setFilterOptions(options)
    }, [options])

    const defVal = useRef(null)
    const [selfVal, setSelfVal] = useState(value || (filterOptions.length > 0 && filterOptions[0].name))
    useEffect(() => {
        if (defVal.current === value || value === undefined) return
        defVal.current = value
        setSelfVal(value)
    }, [value, options])

    const defSelected = useRef(null)
    const [selfSelected, setSelfSelected] = useState(selected || (filterOptions.length > 0 && filterOptions[0]))
    useEffect(() => {
        if ((defSelected.current && selected && (defSelected.current.name === selected.name) && (defSelected.current.value === selected.value)) || (selected === undefined)) return
        defSelected.current = selected
        setSelfSelected(selected)
    }, [selected, options])
    return <div className={`css-qu162x borrow-order-select-wrapper ${optionsShow ? 'active' : ''}`}>
        <div className="css-dkdvv2 body-click" onClick={() => setOptionsShow(true)}>
            <input className="css-ukrvzh body-click" onChange={(event) => {
                if (onInput) onInput(event)
                const val = trim(event.target.value)
                setSelfVal(event.target.value)

                const tempOptions = []
                for (const item of options) {
                    if (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        tempOptions.push(item)
                    }
                }

                if (val === '') {
                    setFilterOptions(options)
                } else {
                    setFilterOptions(tempOptions)
                }
            }} value={selfVal || ''} />
            <div className="bn-input-suffix css-vurnku body-click">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    role="icon"
                    className="css-1yz0bro body-click">
                    <path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path>
                </svg>
            </div>
            <label className="bn-input-label">{title}</label>
        </div>
        <div className="borrow-order-select" style={{ display: optionsShow ? 'block' : 'none' }}>
            <div className="order-select-option">
                {filterOptions.map(function (item, index) {
                    return <span
                        className={`${selfSelected && selfSelected.value === item.value ? 'active' : ''}`}
                        key={index}
                        onClick={() => {
                            if (onSelected) onSelected(item, index)
                            setSelfSelected(item)
                            setSelfVal(item.name)
                        }}>
                        {item.name}
                    </span>
                })}
            </div>
        </div>
    </div>
}
