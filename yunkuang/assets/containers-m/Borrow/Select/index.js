import React, { useState, useEffect } from 'react'

import './index.scss'

export default (props) => {
    const {
        options,
        value,
        onInput,
        selected,
        onSelected,
        placeholder,
        error,
        readOnly,
        selectOnly,
        inputOnly
    } = props
    const [optionShow, setOptionShow] = useState(false)

    useEffect(() => {
        document.body.addEventListener('click', function (event) {
            const className = event.target.className
            if (className && typeof className === 'string' && className.indexOf('body-click') === -1) {
                setOptionShow(false)
            }
        }, false)
    }, [])

    const inputReadOnly = readOnly ? { readOnly: true } : {}
    const inputSelectOnly = selectOnly ? { readOnly: true } : {}
    return <div
        className={`input-wrap ${error ? 'error' : ''} ${readOnly ? 'readonlys' : ''}`}>
        <div
            className="input-box">
            <input
                {...inputReadOnly}
                {...inputSelectOnly}
                onChange={(event) => {
                    if (readOnly) return
                    onInput(event)
                }}
                type="rel"
                value={value || ''}
                placeholder={placeholder}
            />
        </div>
        <div className="coin-cur-select body-click" onClick={() => {
            if (readOnly || inputOnly) return
            setOptionShow(!optionShow)
        }}>
            <div className="cur-select-icon body-click">
                <img
                    className="body-click"
                    src={(selected && selected.currencyLogo) || 'https://mclouds.huoxing24.com/build/btcicons-17ebb8ae.png'}
                    alt={selected && selected.currency}
                    title={selected && selected.currency}
                />
            </div>
            <span className="body-click">{selected && selected.currency}</span>
            <svg className="icon body-click" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M0 255.516672L511.225856 770.048 1024 253.952l-1024 1.564672zM1024 253.952"></path>
            </svg>
        </div>
        <div className="select-wrapper" style={{ display: optionShow ? 'block' : 'none' }}>
            <ul>
                {options.map(function (item, index) {
                    return <li
                        onClick={() => {
                            if (onSelected) onSelected(item, index)
                            setOptionShow(false)
                        }}
                        title={item.currency}
                        key={index}
                        className={`select-option body-click ${selected && selected.currency === item.currency ? 'active' : ''}`}>
                        <div className="option-name">
                            <div className="icon-box">
                                <img
                                    src={item.currencyLogo || 'https://mclouds.huoxing24.com/build/btcicons-17ebb8ae.png'}
                                    alt={item.currency}
                                    title={item.currency}
                                />
                            </div>
                            <span>{item.currency}</span>
                        </div>
                        {selected.currency === item.currency ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='16' height='16' fill="primary"><path d="M20.5 7.42L9.41 18.5 8 17.09l-5-5 1.41-1.42 5 5L19.08 6l1.42 1.42z" fill="primary"></path></svg>
                        ) : ('')}

                    </li>
                })}
            </ul>
        </div>
    </div>
}
