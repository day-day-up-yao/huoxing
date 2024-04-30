import React, { useCallback, useState, useRef, useEffect } from 'react'
import Upload from 'rc-upload'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { user } from '../../public/js/apis/index'
import Toast from '../../components/Toast'
import pic1 from '../../public/imgs/pic1@2x.png'
import pic2 from '../../public/imgs/pic2@2x.png'
// import Bindmobil from '../BindEmail'
import { isPc, isJp, isQuattroWallet } from '../../public/js/index'
import Header from '../../components-m/Headers/index'
import './index.scss'
const hostname = window.location.hostname
const imghost = window.location.protocol + '//' + hostname
export default () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [imgurl, setImgurl] = useState()
    const [imgurls, setImgurls] = useState()
    const [topimg, setTopimg] = useState(false)
    const [conimg, setConimg] = useState(false)
    const [errgender, useErrgender] = useState()
    const [errname, useErrname] = useState()
    const [erridnumber, useIdnumber] = useState()
    const [errtopimg, useErrtopimg] = useState()
    const [errconimg, useErrconimg] = useState()
    // const [nobindip, setNobindip] = useState(false)
    const [selectidname, setSelectidname] = useState()
    const [sexlist, setSexlist] = useState()
    const [bindga, setBindga] = useState()
    const [bindmobile, setBindmobile] = useState()
    const [bindemail, setBindemail] = useState()
    // const [kycsucc, setKycsucc] = useState(false)
    const [contry, setContry] = useState()
    const [onenane, setOnenane] = useState()
    const [twonane, setTwonane] = useState()
    const [cardtype, setCardType] = useState()
    const [cardno, setCardno] = useState()
    // const [sex, setSex] = useState()
    const [kycstatus, setKycstatus] = useState()
    const gender = useRef()
    const usename = useRef()
    const idnumber = useRef()
    const [nationtype, setNationtype] = useState(isJp ? '11' : '1')
    useEffect(() => {
        dispatch.public.verifyInfo({}).then((res) => {
            // if (res.kycLevel === 20) {
            //     setKycsucc(true)
            // }
            setContry(res.nationality)
            setOnenane(res.firstName)
            setTwonane(res.secondName)
            setCardType(res.cardType)
            setCardno(res.cardNo)
            // setSex(res.gender)
        })
        dispatch.public.getUseinfo({}).then((res) => {
            setBindga(res.bindGA)
            setBindmobile(res.mobile)
            setBindemail(res.email)
            setKycstatus(res.verifyStatus)
            if (res.verifyStatus === 1) {
                Toast.info('实名认证审核中，请稍等')
            }
        }).catch(function (err) {
            console.log(err)
            Toast.info('获取用户信息错误')
        })
    }, [])
    const handleman = useCallback(() => {
        setSexlist(1)
    }, [])
    const handlewoman = useCallback(() => {
        setSexlist(2)
    }, [])
    const handleSuccess = useCallback(() => {
        if (usename.current.value === '') {
            useErrgender(t('userkyc.inputname'))
        }
        if (gender.current.value === '') {
            useErrname(t('userkyc.inputnames'))
        }
        if (idnumber.current.value === '') {
            useIdnumber(t('userkyc.inputcarnum'))
        }
        if (topimg === false) {
            useErrtopimg(t('userkyc.inputphone'))
        }
        if (conimg === false) {
            useErrconimg(t('userkyc.inputcarphone'))
        }
        if (usename.current.value !== '' && gender.current.value !== '' && idnumber.current.value !== '' && topimg && conimg) {
            dispatch.public.getUseinfo({}).then((res) => {
                // if (res.mobile === '') {
                //     setNobindip(true)
                // } else {

                // }
                dispatch.public.useKyc({
                    nationality: nationtype,
                    first_name: gender.current.value,
                    second_name: usename.current.value,
                    gender: sexlist,
                    card_type: selectidname,
                    card_no: idnumber.current.value,
                    card_front_url: imgurl,
                    card_hand_url: imgurls
                }).then((res) => {
                    if (res.code) {
                        Toast.info(res.msg)
                    } else {
                        Toast.info(t('userkyc.waitkyc'))
                        if (isQuattroWallet()) {
                            window.location.href = '/Jpindex'
                        } else {
                            window.location.href = '/usercenter'
                        }
                    }
                }).catch((err) => {
                    Toast.info(t('userkyc.kycfail'))
                    console.log(err)
                })
            })
        }
    })
    const handleNation = useCallback((event) => {
        if (event.target.value === '日本') {
            setNationtype(11)
        }
        if (event.target.value === '中国') {
            setNationtype(1)
        }
        if (event.target.value === '美国') {
            setNationtype(19)
        }
        console.log(event.target.value)
    })
    const handleselectid = useCallback((event) => {
        if (event.target.value === '身份证') {
            setSelectidname(1)
        }
        if (event.target.value === '护照') {
            setSelectidname(3)
        }
    })
    return <div>
        {isPc() ? '' : <Header title={t('userkyc.userkyc')}/>}
        <div className="userkyctitle">
            <h3>{t('userkyc.userkyc')}</h3>
            <div className="kyccon">
                <div className="kyccon-input">
                    <ul>
                        <li>
                            <label>{t('userkyc.contry')}</label><br/>
                            {isJp ? (
                                <select onChange={handleNation}>
                                    <option value="日本">{t('userkyc.Jap')}</option>
                                </select>
                            ) : (
                                <select onChange={handleNation}>
                                    <option value="中国">{t('userkyc.china')}</option>
                                    <option value="美国">{t('userkyc.amarca')}</option>
                                    <option value="日本">{t('userkyc.Jap')}</option>
                                </select>
                            )}
                        </li>
                        <li>
                            <label>{t('userkyc.name')}</label><br/>
                            <input type="text" ref={gender}/>
                            <span className="err">{errgender}</span>
                        </li>
                        <li>
                            <label>{t('userkyc.names')}</label><br/>
                            <input type="text" ref={usename}/>
                            <span className="err">{errname}</span>
                        </li>
                        <li>
                            <label>{t('userkyc.car')}</label><br/>
                            <select onChange={handleselectid}>
                                <option value=""></option>
                                <option value="身份证">{t('userkyc.body')}</option>
                                <option value="护照">{t('userkyc.world')}</option>
                            </select>
                        </li>
                        <li>
                            <label>{t('userkyc.bodynumber')}</label><br/>
                            <input type="text" ref={idnumber}/>
                            <span className="err">{erridnumber}</span>
                        </li>
                        <li>
                            <label>{t('userkyc.sex')}</label><br/>
                            <input id="man" type="radio" className="sex" onChange={handleman} name='1'/>{t('userkyc.man')}
                            <input id="woman" type="radio" className="sex" onChange={handlewoman} name='1'/>{t('userkyc.woman')}
                        </li>
                    </ul>
                    <div className="kyccon-pictitle">
                        <p>{t('userkyc.photo')}</p>
                        <p>{t('userkyc.photoone')}</p>
                        <p>{t('userkyc.photowidth')}</p>
                        <p>{t('userkyc.photog')}jpg，png，jpeg</p>
                    </div>
                    <div className="kyccon-pic">
                        <div className="kyccon-pic-list">
                            <p>{t('userkyc.self')}</p>
                            <p>{t('userkyc.getself')}</p>
                            <div className="kyccon-pic-list-img">
                                <div className="kyccon-pic-list-img-frist">
                                    <Upload
                                        component="div"
                                        name="upload_image_file"
                                        action={user.upload_image}
                                        data={{
                                            c_token: Cookies.get('c_token') || ''
                                        }}
                                        withCredentials={true}
                                        onSuccess={(res) => {
                                            setImgurl(res.url)
                                            setTopimg(true)
                                        }}
                                        beforeUpload={(file) => {
                                            return new Promise((resolve, reject) => {
                                                if (!/png|jpg|jpeg/i.test(file.type)) {
                                                    Toast.info(t('userkyc.photofail'))
                                                    return reject(
                                                        Toast.info(t('userkyc.photofail'))
                                                    )
                                                }
                                                if (file.size > 10 * 1024 * 1024) {
                                                    Toast.info(t('userkyc.photofail'))
                                                    return reject(
                                                        Toast.info(t('userkyc.photofail'))
                                                    )
                                                }
                                                return resolve(file)
                                            })
                                        }}
                                        onError={(res) => {
                                            Toast.info(t('userkyc.photofail'))
                                        }}
                                    >{topimg === true ? t('userkyc.point') : t('userkyc.put')}</Upload>
                                    <img src={imghost + imgurl} alt=""/>
                                </div>
                                <div>
                                    <img src={pic1} alt=""/>
                                </div>
                            </div>
                            <p className="err">{errtopimg}</p>
                        </div>
                        <div className="kyccon-pic-list">
                            <p>{t('userkyc.self')}</p>
                            {/* <p>请您上传手持有效证件正面照，请确保内容清晰可见，注明：姓名，火星云矿，申请日期</p> */}
                            <p>{t('userkyc.getself')}</p>
                            <div className="kyccon-pic-list-img">
                                <div className="kyccon-pic-list-img-frist">
                                    <Upload
                                        component="div"
                                        name="upload_image_file"
                                        action={user.upload_image}
                                        data={{
                                            c_token: Cookies.get('c_token') || ''
                                        }}
                                        withCredentials={true}
                                        onSuccess={(res) => {
                                            setImgurls(res.url)
                                            setConimg(true)
                                        }}
                                        beforeUpload={(file) => {
                                            return new Promise((resolve, reject) => {
                                                if (!/png|jpg|jpeg/i.test(file.type)) {
                                                    Toast.info(t('userkyc.photofail'))
                                                    return reject(
                                                        Toast.info(t('userkyc.photofail'))
                                                    )
                                                }
                                                if (file.size > 10 * 1024 * 1024) {
                                                    Toast.info(t('userkyc.photofail'))
                                                    return reject(
                                                        Toast.info(t('userkyc.photofail'))
                                                    )
                                                }
                                                return resolve(file)
                                            })
                                        }}
                                        onError={(res) => {
                                            Toast.info('图片尺寸或格式错误')
                                        }}
                                    >{conimg === true ? t('userkyc.point') : t('userkyc.put')}</Upload>
                                    <img src={imghost + imgurls} alt=""/>
                                </div>
                                <div>
                                    <img src={pic2} alt=""/>
                                </div>
                            </div>
                            <p className="err">{errconimg}</p>
                        </div>
                    </div>
                    <button onClick={handleSuccess}>{t('header.sign.sure')}</button>
                </div>
            </div>
            {/* <div className='tobindmobil' style={{ display: nobindip === true ? 'block' : 'none' }}>
                <div className="tobindmobillists">
                    <Bindmobil/>
                    <div className="tobindmobilclose" onClick={() => { setNobindip(false) }}>{t('public.close')}</div>
                </div>
            </div> */}
            <div className='tobindmobil' style={{ display: (bindga !== true && (bindmobile === '' || bindemail === '')) ? 'block' : 'none' }}>
                <div className="tobindmobillist">
                    <h5>{t('public.an')}</h5>
                    <div className="tobindmsg">
                        <h4>{t('public.antitle')}</h4>
                        <div className="tobindmsg-select">
                            <div onClick={() => {
                                window.location.href = '/bindgoogle'
                            }}>{t('header.sign.googlecode')}</div>
                            <div onClick={() => {
                                window.location.href = bindmobile === '' ? '/bindmobile' : '/bindemail'
                            }}>{bindmobile === '' ? t('header.sign.phonecode') : bindemail === '' ? t('header.sign.emailcode') : ''}</div>
                        </div>
                    </div>
                    <div className="bindclose" onClick={() => {
                        window.history.go(-1)
                    }}>{t('userkyc.name')}</div>
                </div>
            </div>
            <div className='tobindmobil' style={{ display: kycstatus === 2 ? 'block' : 'none' }}>
                <div className="tobindmobillist">
                    <p>{t('userkyc.noneed')}</p>
                    <p>
                        <span>{t('userkyc.contry')}</span>
                        <span>{contry}</span>
                    </p>
                    <p>
                        <span>{t('userkyc.name')}</span>
                        <span>{onenane}</span>
                    </p>
                    <p>
                        <span>{t('userkyc.names')}</span>
                        <span>{twonane}</span>
                    </p>
                    <p>
                        <span>{t('userkyc.car')}</span>
                        <span>{cardtype}</span>
                    </p>
                    <p>
                        <span>{t('userkyc.bodynumber')}</span>
                        <span>{cardno}</span>
                    </p>
                    {/* <p>
                        <span>{t('userkyc.sex')}</span>
                        <span>{sex === 1 ? '男' : sex === 2 ? '女' : ''}</span>
                    </p> */}
                    <div className="tobindmobillist-btn" onClick={() => {
                        window.history.go(-1)
                    }}>{t('header.sign.sure')}</div>
                </div>
            </div>
        </div>
    </div>
}
