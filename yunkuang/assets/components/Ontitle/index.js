import React from 'react'
import './index.scss'
import datatitle from '../../public/imgs/datatitle.png'
export default () => {
    return <div className="helpcenter">
        <div className="helpcenter_top">
            <h3>为什么挖矿比买币更划算？</h3>
        </div>
        <div className="helpcenter_con">
            <a name="scrollone"></a>
            <div className="helpcenter_con_one" id="scrollone">
                <p>
                    <span>据比特币第三次减半还有不到100天，对比历史走势，当前市场对比特币减半行情仍显得谨慎与迷茫，多种观点针锋相对。部分研究通过对历史数据分析表示，比特币减半大涨仍会到来，比如某机构用S2F模型预测比特币将减半后将达到10万美元；也有研究表示这第三次减半与之前不同，当前比特币活跃用户没有明显增长，市场也没有大量新资金入场，场内资金很难推动比特币形成此前两次减半时的暴涨；更甚者认为减半之后，若比特币没有大涨，收益骤降的矿圈将面临巨大的生存压力。</span>
                </p>
                <p>
                    <span>随着减半一天天逼近，各种观点充斥下的市场再次出现回暖迹象。比特币自6500美元逐渐拉升，回到一万美元上方，在此过程中，比特币矿机价格也水涨船高，且再次出现脱销趋势。种种迹象表明，虽然市场仍在为是否有减半行情争执不休，但比特币和比特币矿机的市场行情已经真实反映了挖矿产业对比特币升值的预期。</span><br/>
                </p>
                <p>
                    <span>然而对很多散户投资者来说，已经涨到1万美元的比特币有些高攀不起，虽然有升值预期，但不得不担忧那些听上去很有道理的讨论：比特币已经1万美元了，还能涨多少？上涨空间不多了吧！比特币的远期升值空间不确定，价格高昂限制了散户们的投入热情。当然，在数字货币市场，你不需要花费1万美元也可以拥有比特币，数字资产交易所普遍设定的最小交易单位是0.00000001，也就是仅需0.0001美元就可以获得BTC。</span><br/>
                </p>
            </div>
            <a name="scrolltwo"></a>
            <div className="helpcenter_con_one" id="scrolltwo">
                <p>但是，谁不想拥有一枚完整的比特币呢？</p>
                <p>
                    <span>购买一枚比特币是非常方便的，我们可以在所有的数字资产交易所解锁“拥有一枚比特币”这一成就，但是其成本也是实打实的7万元人民币。这让人不禁想，如果在比特币7000美元时候，甚至5000美元时候买上几枚岂不美滋滋？实际上，这里可能还有一辆末班车，自己挖比特币！</span><br/>
                </p>
                <p>
                    <span>让我们来算个账，根据BTC.com，当前比特币产能为0.00001617 BTC/T，减半后产能0.000008085 BTC/T，而当代机皇蚂蚁S17-67T型售价13855元，当前比特币价格假定为70000元，相当于4台蚂蚁S17-67T。</span>
                </p>
                <p>
                    <span>方案1. 连续挖1年BTC vs 买BTC</span><br/>
                </p>
                <p>
                    <span>我们就买这4台当代机皇蚂蚁S17-67T来挖比特币，减半前4台矿机日产量[0.00001617*67*4=0.00433356] BTC，减半后日产0.00216678 BTC。挖矿1年可以获得[0.00433356*n+0.00216678*(365-n)] BTC，当n=80，可获得0.9642 BTC。当前蚂蚁S17-67T价格为13855元，功率2800W，电价按0.4元/度，4台每天电费107.52元，按矿机寿命3年计算日折损率为[1/1095=0.0913%]。</span><br/>
                </p>
                <p>
                    <span>1年后，假设比特币维持70000元，我们持有资产总值为矿机残值和比特币价值之和，即[13855*4*(1-0.0913%*365)+70000*0.9642=104445.56] 元；总支出为矿机购买费用与电费之和，即[13855*4+107.52*365=94664.8] 元。</span><br/>
                </p>
                <p>
                    <span>在365天里，我们可以获得[104445.56-94664.8=9780.76] 元净收益，持有0.9642枚比特币。如果我们把矿机购买成本及电费全部用来买比特币，矿机成本作为首付，电费作为定投，比特币不升值假设下，70000元单价下可购得[0.7917+0.5606=1.3523枚比特币，但是因为比特币没有升值，这1.3523 BTC仍价值94664.8元。</span><br/>
                </p>
                <p>
                    <span>所以我们可得出，在比特币价格不变情况下，即使涉及到比特币产量减半，挖矿仍比买币、持币划算。</span><br/>
                </p>
                <p>
                    <span>若比特币在此期间价格上涨，矿机残值将随之上涨，持有资产总值（矿机残值和比特币价值之和）上升；买币过程中，后期定投成本逐渐上升，虽然随着比特币升值，所持价值上升，但最终所能购得的比特币数量下降。挖矿比买币仍有较高的预期收益。</span><br/>
                </p>
                <p>
                    <span>方案2. 挖1个BTC vs 买1个BTC</span><br/>
                </p>
                <p>
                    <span>我们仍然买4台蚂蚁S17-67T来挖比特币，减半前日产0.00433356 BTC，减半后日产0.00216678 BTC。我们需要[(1-0.00433356*n)/ 0.00216678+n] 天能够挖出一枚比特币，当n=80，需要381.5天。381.5天后4台矿机残值为[13855*4*(1-0.0913%*381.5)= 36116.69] 元。若比特币维持当前价格70000元，那我们持有资产总值为[36116.69+70000=106116.69] 元，而我们总共支出的是矿机和电费[13855*4+107.52*381.5=96438.88] 元。</span><br/>
                </p>
                <p>
                    <span>即使比特币不升值，我们在381.5天里可以净赚[106116.69-96438.88=9677.81] 元；而买1个比特币价值70000元，381.5天后仍价值70000元。若比特币在此期间价格上涨，与方案1相同，对比双方比特币数量相等，则价值相等，但我们还持有比特币矿机，矿机残值随比特币升值而升值，我们不难得出“比特币升值，挖矿更赚钱”的结论。</span><br/>
                </p>
                <p className="data-title">
                    <img src={datatitle} />
                </p>
                <p>
                    <span>比特币不涨，挖矿可盈利；比特币升值，挖矿更赚钱。</span><br/>
                </p>
                <p>
                    <span>两个方案中，从金本位讲，在比特币不升值的假设下，均能获得万元净利润，较持有比特币却不能享受升值收益更划算，若比特币升值则享受比特币和矿机的双重收益，方案2中受比特币升值影响，挖矿更赚钱的结论尤其明显；从币本位讲，除了比特币，我们还拥有一台比特币生产工具，只要挖矿收益大于电费与矿机损耗之和，挖矿就较单纯的持币划算。</span><br/>
                </p>
                <p>
                    <span>此外，挖矿除了能赚取比持币更高的净收益，同时可以降低获取比特币的难度，在挖矿活动中，我们仅需支付比特币矿机的费用，后期连续支付维持矿机运行的电费、运维费用，相当于分期付款、或定投购买比特币，同时规避了定投时比特币升值带来的币本位损失。然而，随着减半临近，挖矿收益大幅下降，但电费和矿机损耗是持续支出的，若比特币减半后不能大涨，挖矿收益势必下降，所以，趁减半未至，来火星云矿挖取你的第一枚比特币吧！</span>
                </p>
            </div>
        </div>
    </div>
}