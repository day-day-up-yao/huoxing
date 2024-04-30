// 首页火星云矿优势
import React from 'react'
import howimg from '../../public/imgs/newpage/hit.png'
import newsure from '../../public/imgs/newedition/newsure.png'
import newno from '../../public/imgs/newedition/newno.png'
import perchas from '../../public/imgs/newpage/purchas.png'
import shopingcar from '../../public/imgs/newpage/shopingcar.png'
import tool from '../../public/imgs/newpage/tool.png'
import clean from '../../public/imgs/newpage/clean.png'
import electriction from '../../public/imgs/newpage/electriction.png'
import barter from '../../public/imgs/newpage/barter.png'
import fault from '../../public/imgs/newpage/fault.png'
import connects from '../../public/imgs/newpage/connects.png'
export default ({ t }) => {
    const contrast = [
        { title: t('newpage.home.xg'),
            conlistleft: [
                t('newpage.home.xgl1'),
                t('newpage.home.xgl2')
            ],
            conlistright: [
                t('newpage.home.xgr1'),
                t('newpage.home.xgr2')
            ]
        },
        { title: t('newpage.home.gm'),
            conlistleft: [
                t('newpage.home.gml1'),
                t('newpage.home.gml2'),
                t('newpage.home.gml3')
            ],
            conlistright: [
                t('newpage.home.gmr1'),
                t('newpage.home.gmr2'),
                t('newpage.home.gmr3')
            ]
        },
        // { title: t('newpage.home.cs'),
        //     conlistleft: [
        //         t('newpage.home.csl1'),
        //         t('newpage.home.csl2')
        //     ],
        //     conlistright: [
        //         t('newpage.home.csr1'),
        //         t('newpage.home.csr2')
        //     ]
        // },
        // { title: t('newpage.home.jr'),
        //     conlistleft: [
        //         t('newpage.home.jrl1'),
        //         t('newpage.home.jrl2')
        //     ],
        //     conlistright: [
        //         t('newpage.home.jrr1'),
        //         t('newpage.home.jrr2')
        //     ]
        // },
        { title: t('newpage.home.yw'),
            conlistleft: [
                t('newpage.home.ywl1'),
                t('newpage.home.ywl2'),
                t('newpage.home.ywl3')
            ],
            conlistright: [
                t('newpage.home.ywr1'),
                t('newpage.home.ywr2'),
                t('newpage.home.ywl3')
            ]
        },
        { title: t('newpage.home.fp'),
            conlistleft: [
                t('newpage.home.fpl1'),
                t('newpage.home.fpl2'),
                t('newpage.home.fpl3')
            ],
            conlistright: [
                t('newpage.home.fpr1'),
                t('newpage.home.fpr2'),
                t('newpage.home.fpr3')
            ]
        }
    ]
    const Servicelist = [
        {
            img: perchas,
            title: t('newpage.home.kjcg'),
            posit: t('newpage.home.kjcgtit')
        },
        {
            img: shopingcar,
            title: t('newpage.home.ysbs'),
            posit: t('newpage.home.ysbstit')
        },
        {
            img: tool,
            title: t('newpage.home.yxwh'),
            posit: t('newpage.home.yxwhtit')
        },
        {
            img: clean,
            title: t('newpage.home.jqql'),
            posit: t('newpage.home.jqqltit')
        },
        {
            img: electriction,
            title: t('newpage.home.dfjn'),
            posit: t('newpage.home.dfjntit')
        },
        {
            img: barter,
            title: t('newpage.home.yjhb'),
            posit: t('newpage.home.yjhbtit')
        },
        {
            img: fault,
            title: t('newpage.home.gzdf'),
            posit: t('newpage.home.gzdftit')
        },
        {
            img: connects,
            title: t('newpage.home.zxkf'),
            posit: t('newpage.home.zxkftit')
        }
    ]
    return <div className='disc'>
        <div className='disc-works'>
            <h3>{t('newpage.home.work')}</h3>
            <div className='disc-work'>
                <div className="disc-work-img">
                    <img src={howimg} alt=""/>
                </div>
                <div className='disc-work-list'>
                    <div className='disc-work-list-ever'>
                        <h4>{t('newpage.home.workl')}</h4>
                        <p>{t('newpage.home.worklt')}</p>
                    </div>
                    <div className='disc-work-list-ever'>
                        <h4>{t('newpage.home.workc')} </h4>
                        <p>{t('newpage.home.workct')}</p>
                    </div>
                    <div className='disc-work-list-ever'>
                        <h4>{t('newpage.home.workr')}</h4>
                        <p>{t('newpage.home.workrt')}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="disc-analyze">
            <h3>{t('newpage.home.analysis')}</h3>
            <div className="disc-analyze-con">
                <div className="analyze-top">
                    <div className="analyze-top-l">{t('newpage.home.analyl')}</div>
                    <div className="analyze-top-r">{t('newpage.home.analyr')}</div>
                </div>
                <div className="analyze-center">
                    {contrast.map((item, index) => {
                        return <div className="center" key={index}>
                            <div className="center-left">
                                <div className="left-l">
                                    <p>{item.title}</p>
                                </div>
                                <div className="left-r">
                                    <ul>
                                        {item.conlistleft.map((itm, idx) => {
                                            return <li key={idx}>
                                                <span>{itm}</span>
                                                <img src={newsure} alt=""/>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="center-right">
                                <ul>
                                    {item.conlistright.map((itm, idx) => {
                                        return <li key={idx}>
                                            <span>{itm}</span>
                                            <img src={newno} alt=""/>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <a name='service'></a>
        <div className='disc-sup'>
            <h4>{t('newpage.home.service')}</h4>
            <div className="disc-sup-con">
                <div className="disc-sup-con-itm">
                    {Servicelist.map((item, index) => {
                        return <div className="disc-sup-con-itm-i" key={index}>
                            <div className="itm-i-img">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="itm-i-text">
                                <h5>{item.title}</h5>
                                <p>{item.posit}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}
