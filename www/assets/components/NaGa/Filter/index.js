import React, { useState, useCallback } from 'react'

import DownSelect from '../DownSelect'
import Pregress from '../../Progress'
import Screening from '../Screening'
import multiedimg from '../../../public/img/multied.png'
import multiimg from '../../../public/img/multiimg.png'

import './index.scss'

export default (props) => {
    const { filterlist, getdataFn, ish5 } = props
    const [maxnum, setMaxnum] = useState((100 / 400).toFixed(2))
    const [minnum, setMinnum] = useState(0)
    const allnumber = 500
    const [filterdata, setFilterdata] = useState(filterlist)
    const itemlist = ['Primus(59)', 'Sinisters(45)', 'Elites(34)', 'Invaders(32)', 'Heroes(29)', 'Ronin(29)', 'Hut 8(5)', 'Outlanders(4)']
    // 多选点击
    const selectMulti = useCallback((e) => {
        const id = e.target.getAttribute('dataid')
        const data = []
        filterdata.map((itm, idx) => {
            if (parseInt(id) === parseInt(itm.id)) {
                filterdata[idx].checked = !itm.checked
            }
            data.push(itm)
        })
        const condata = []
        // 筛选条件列表
        data.map((item) => {
            if (item.checked === true) {
                condata.push(item.name)
            }
        })
        getdataFn(condata)
        setFilterdata(data)
    }, [filterdata])
    return <div className={`center-items-left ${ish5 && 'h5-filter'}`}>
        <Screening
            title="Faction"
            spread
            children={
                <DownSelect
                    title="select Faction..."
                    itemlist={itemlist}
                />
            }
        />
        <Screening
            title="Power - Level"
            spread
            children={
                <div className="select-amount">
                    {/* <div className="select-amount-line"></div> */}
                    <Pregress
                        valnum={maxnum}
                        ish5={ish5}
                        allnum={allnumber}
                        onChange={(e) => {
                            setMaxnum(e)
                        }}
                        minnum={minnum}
                        onMinchange={(e) => {
                            setMinnum(e)
                        }}
                    />
                    <div className="select-amount-box">
                        <div className="amount-box-any">
                            <input type="text" value={parseInt(minnum * allnumber)} onChange={(e) => {
                                if (e.target.value >= parseInt(maxnum * allnumber)) {
                                    // console.log(e.target.value)
                                    setMinnum(maxnum)
                                    return
                                }
                                setMinnum(e.target.value / allnumber)
                                // if (e.target.value >= parseInt(maxnum * 100)) {
                                //     setMinnum(maxnum)
                                // } else {
                                //     setMinnum(parseInt(e.target.value / 100))
                                // }
                            }}/>
                        </div>
                        <div>一</div>
                        <div className="amount-box-any box-active">
                            {/* {parseInt(maxnum * 100)} */}
                            <input type="text" value={parseInt(maxnum * allnumber)} onChange={(e) => {
                                if (e.target.value > allnumber) {
                                    setMaxnum(allnumber / allnumber)
                                    return
                                }
                                if (e.target.value <= minnum * allnumber) {
                                    setMaxnum(minnum)
                                    return
                                }
                                setMaxnum(e.target.value / allnumber)
                            }} />
                        </div>
                    </div>
                </div>
            }
        />
        <Screening
            title="Tier"
            spread
            children={
                <div className="multi-select">
                    {filterdata.map((item, index) => {
                        return <div className="multi-select-con" key={index}>
                            <div className="multi-select-con-img"
                                dataid={item.id}
                                datatradeno={item.name}
                                onClick={selectMulti}
                            >
                                <img
                                    src={item.checked ? multiedimg : multiimg}
                                    alt=""
                                    dataid={item.id}
                                    datatradeno={item.name}
                                />
                            </div>
                            <span>{item.name}</span>
                        </div>
                    })}
                </div>
            }
        />
        <Screening
            title="Game-Node-Id"
            // spread
            children={
                <div className="multi-select">
                    {filterdata.map((item, index) => {
                        return <div className="multi-select-con" key={index}>
                            <div className="multi-select-con-img"
                                dataid={item.id}
                                datatradeno={item.name}
                                onClick={selectMulti}
                            >
                                <img
                                    src={item.checked ? multiedimg : multiimg}
                                    alt=""
                                    dataid={item.id}
                                    datatradeno={item.name}
                                />
                            </div>
                            <span>{item.name}</span>
                        </div>
                    })}
                </div>
            }
        />
    </div>
}
