import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Mobile extends Component {
    render () {
        return (
            <div><Link to="/mobile">点击访问移动端的首页</Link></div>
        )
    }
}
