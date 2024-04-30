import React from 'react'
import './index.scss'
export default () => {
    return <div className="bowmore">
        <h2>质押借币 FAQ</h2>
        <div className="bowmore-list">
            <p>1.什么是数字资产质押借币？</p>
            <span>数字资产质押借币是平台推出的一款针对数字货币的质押借款服务，主要为及时解决用户资金使用难题。操作方便、审批快、放款迅速，借款时，您只需要质押一定量 BTC、ETH、USDT 等，即可收到借款。</span>
        </div>
        <div className="bowmore-list">
            <p>2.质押借币使用场景？</p>
            <span>（1）不卖币解决现金流问题。比如您想买一件稍微有点贵重的物品，但是现金流不够，同时手里有一部分 BTC ，却又不想卖掉。那么您可以通过 火星云矿 的质押借币平台抵押 BTC，贷出对应量的 USDT，然后再把 USDT 换成法币，就可以解决现金流的问题了。</span>
            <span>（2）看多行情加仓。通过抵押 BTC 借贷 USDT 并继续购买 BTC 或其他币种，以此实现超额收益。</span>
            <span>（3） 看空行情止损。比如目前行情下跌趋势，您可以将手中的 BTC 通过 火星云矿 质押借币换成 USDT，实现不卖币来对抗下跌趋势。</span>
        </div>
        <div className="bowmore-list">
            <p>3.如何使用 火星云矿 的质押借币功能？ </p>
            <span>（1） 进入「火星云矿」页面，点击「质押借币」</span>
            <span>（2） 选择想要借出的币种</span>
            <span>（3） 输入借款金额，选择借款期数，点击「确认」</span>
            <span>（4） 输入交易密码</span>
            <span>（5） 借款成功，系统自动将相应的币种发放到您的理财账户</span>
        </div>
        <div className="bowmore-list">
            <p>4.质押如何计算？</p>
            <span>目前 BTC 质押率55%，ETH质押率50%，例如：您质押 10 个 BTC，质押率为55%，那么可以借贷的金额就是 10 BTC×55% 对应的 USDT 数量。</span>
        </div>
        <div className="bowmore-list">
            <p>5.还款与付息方式？ </p>
            <span>火星云矿 的借贷采用先息后本，按月付息，最后一天归还本金的方式。例如：您的借款 3 个月，那么前两个月您仅需要归还利息，最后一个月归还本金+利息。</span>
        </div>
        <div className="bowmore-list">
            <p>6.提前还款的要求？</p>
            <span>您可以在任何一天选择提前还款，提前还款要求一次性归还本金以及已经产生的利息。</span>
        </div>
        <div className="bowmore-list">
            <p>7.提前还款利息如何计算？</p>
            <span>如果提前还款，按照实际借币时长计算，并需额外归还7天利息。例：您的借币期限为 1 个月，实际借币时长为 15 日，则按照 15+7 即22 日计息。</span>
        </div>
        <div className="bowmore-list">
            <p>8.提前还款有手续费吗？</p>
            <span>提前还款没有手续费，归还本金+利息即可。</span>
        </div>
        <div className="bowmore-list">
            <p>9.逾期会有什么影响？</p>
            <span>逾期平台将自动为其平仓，通过出售质押资产收回借款本金+利息。</span>
        </div>
        <div className="bowmore-list">
            <p>10.利息可以降低吗？</p>
            <span>您可以关注 火星云矿 平台的优惠活动，通过参与活动获得日利率的优惠。</span>
        </div>
        <div className="bowmore-list">
            <p>11.火星云矿 的借贷可以转账吗？</p>
            <span>您通过 火星云矿 收到的借款，可以随时转账到其他钱包或交易所等，还可以使用 火星云矿 提供的各种数字货币相关服务。</span>
        </div>
        <div className="bowmore-list">
            <p>12.借贷期限和费率？</p>
            <span>用户申请借款时，系统自动在钱包账户中按顺序冻结相应的价值资产作为保证金，各币种具体详情可参考「费率说明」，借款期数可按需选择。</span>
        </div>
        <div className="bowmore-list">
            <p>13.预警和平仓？</p>
            <span>为了严格资产风控，火星云矿 设定了自动预警及平仓机制。当遇到数字货币大幅涨跌时（其中：BTC、USDT 初始质押率为 55%，ETH 初始质押率为50%，BTC、USDT、ETH 三个币种提示补仓预警线为 75%，平仓线为 85%），平台系统会自动发出预警线提醒，请及时查看您的账户仓位并处理，避免您的资产因触及平仓线而被强制平仓。</span>
            <span>举例说明：可乐现在质押 1 个 BTC，现在 BTC 价格为 10000 USDT，BTC 初始质押率为 55%，则可乐现在可以借：1 BTC ✖️ 10000 ✖️ 55% = 5500 USDT，根据相应的风险率公式可以计算出：</span>
            <span>当 BTC 价格下降到约 7336.26 USDT，即下降26.63%时，达到预警线 75%；</span>
            <span>当 BTC 价格下降到约 6473.17 USDT，即下降 35.26%时，达到平仓线 80%。</span>
        </div>
        <div className="bowmore-list">
            <p>计算公式如下：</p>
            <p>风险率 = (借款金额 + 利息) / 质押物估值</p>
            <span>为方便计算，设置计算时间为 1 天，假设日息为 0.04%</span>
            <span>借款金额 + 利息 = 5500 + （5500 ✖️ 0.04%）= 5502.2 USDT</span>
            <span>假设 BTC 的实时价格为 Y</span>
            <span>预警线计算公式为：5502.2 ➗ （1 BTC ✖️ Y）= 75%</span>
            <span>平仓线计算公式为：5502.2 ➗ （1 BTC ✖️ Y）= 85%</span>
            <span>是的，这是一道数学题，解出方程式就可以。</span>
        </div>
        <div className="bowmore-list">
            <p>14. 平均价格指数是什么？</p>
            <span>为了使 B2C 借贷计算平仓的价格更合理，火星云矿 采用了平均价格指数的方式：即选取 Huobi、币安、OKEx、 可可金融、 霍比特 等 5 家现货交易所相应价格进行比对，取平均价格。</span>
            <span>计算规则如下：</span>
            <span>5 个交易所中去掉一个最高价，去掉一个最低价，剩余 3 个平台取平均价格。</span>
            <span>以 200 ms 为间隔轮巡交易所价格</span>
            <p>情况描述：</p>
            <span>如果单一交易对价格获取失败，则用剩余交易对重新计算价格。</span>
            <span>因去掉了最高价和最低价，已规避了单个平台行情异常的情况。</span>
        </div>
        <div className="bowmore-list">
            <p>15. 抵押资产如何赎回？</p>
            <span>履约完成，系统将自动释放冻结资产，如未按时还款，逾期平台将自动为其平仓，通过出售质押资产收回借款本金+利息。</span>
        </div>
        <div className="bowmore-list">
            <p>16. 为什么选择 火星云矿 ？</p>
            <span>安全。火星云矿 有技术过硬的钱包安全方案，两年来没有发生过任何安全事故，从源头上杜绝被盗风险。</span>
            <span>资金充足。火星云矿 一直坚守 100% 准备金的原则，保证资金充足，资产透明，保证用户的兑付。</span>
            <span>质押资产丰富。火星云矿 目前已经开通了 BTC、ETH、USDT资产的质押。</span>
            <span>效率高。手续简单透明，审批快，放款迅速，秒到账。</span>
            <span>自由还款。火星云矿 目前提供  1 个月、2个月、3 个月、6 个月的借贷，期间可提前还款。</span>
            <span>按日计息。提前还款时，利息按照实际的借贷天数计算。</span>
        </div>
    </div>
}
