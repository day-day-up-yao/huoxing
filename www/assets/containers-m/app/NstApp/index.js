import React from 'react'
import './index.scss'

export default () => {
    return (
        <div className="nst-app">
            <div className="nst-operation">
                <h6>日常操作：</h6>
                <p>1.阅读新闻获得5积分，每篇新闻只能获得一次</p>
                <p>2.评论成功获得2积分，每篇新闻只能获得一次</p>
                <p>3.分享新闻或快讯成功获得2积分，每篇新闻或者快讯只能获得一次，最多可获得20积分</p>
                <p>4.评论因违规而被删除的情况下回收积分</p>
            </div>
            <div className="nst-introduce">
                <h6>注册登录：</h6>
                <p>在不同的阶段，登录注册可获得积分不同，具体积分数量请看下表</p>
                <div className="tab-introduce">
                    <table>
                        <tr className="first">
                            <td>当前用户总数</td>
                            <td>注册获得积分</td>
                            <td>邀请人积分</td>
                            <td>被邀请人积分</td>
                        </tr>
                        <tr>
                            <td>1-1w</td>
                            <td>900</td>
                            <td>300</td>
                            <td>600</td>
                        </tr>
                        <tr>
                            <td>1w-5w</td>
                            <td>700</td>
                            <td>200</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>5w-10w</td>
                            <td>300</td>
                            <td>100</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>10w-20w</td>
                            <td>200</td>
                            <td>80</td>
                            <td>160</td>
                        </tr>
                        <tr>
                            <td>20w+</td>
                            <td>80</td>
                            <td>20</td>
                            <td>40</td>
                        </tr>
                    </table>
                    <span className="remark">注：一名用户只能成功邀请5名其他用户</span>
                </div>
            </div>
        </div>
    )
}
