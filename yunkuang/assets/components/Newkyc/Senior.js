import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Upload from 'rc-upload'
// import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { user } from '../../public/js/apis/index'
import { isQuattroWallet } from '../../public/js/index'
import pic1 from '../../public/imgs/pic1@2x.png'
import pic2 from '../../public/imgs/pic2@2x.png'
// const hostname = typeof window !== 'undefined' && window.location.hostname
// const imghost = typeof window !== 'undefined' && (window.location.protocol === 'http:' ? window.location.protocol + '//' + hostname + ':3026' : window.location.protocol + '//' + hostname)
export default ({ Toast, usa }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [imgurl, setImgurl] = useState()
    const [imgurls, setImgurls] = useState()
    const [topimg, setTopimg] = useState(false)
    const [conimg, setConimg] = useState(false)
    const handleTosure = useCallback(() => {
        if (imgurl && imgurls) {
            dispatch.public.photoVerify({
                card_front_url: imgurl,
                card_hand_url: imgurls
            }).then((res) => {
                if (res.code !== 0) {
                    Toast.info(res.msg)
                } else {
                    if (usa === true) {
                        window.location.href = '/secure/enusercenter'
                    } else {
                        if (isQuattroWallet()) {
                            window.location.href = '/Jpindex'
                        } else {
                            window.location.href = '/usercenter'
                        }
                    }
                }
            })
        }
    })
    return <div className="senior">
        <div className='senior-one'>
            <h4>{t('userkyc.self')}</h4>
            <p>{t('userkyc.getself')}</p>
            <div className="senior-one-img">
                <div className="img-left">
                    <img src={pic1} alt=""/>
                </div>
                <div className="img-right">
                    <Upload
                        component="div"
                        name="upload_image_file"
                        action={user.upload_image}
                        // data={{
                        //     c_token: Cookies.get('c_token') || ''
                        // }}
                        withCredentials={true}
                        onSuccess={(res) => {
                            // console.log(fileObjectURL(file))
                            if (res.code === 0) {
                                setImgurl(res.data.url)
                                setTopimg(true)
                            } else {
                                Toast.info(res.msg)
                            }
                        }}
                        beforeUpload={(file) => {
                            // console.log(file)
                            return new Promise((resolve, reject) => {
                                if (!/png|jpg|jpeg/i.test(file.type)) {
                                    console.log(1)
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
                        onPreview={(file) => {
                            console.log(file)
                        }}
                    >
                        {topimg === true ? t('userkyc.point') : t('userkyc.put')}
                    </Upload>
                    <img src={imgurl} alt=""/>
                </div>
            </div>
            <h4>{t('userkyc.inputcarphone')}</h4>
            <p>{t('userkyc.indicate')}</p>
            <div className="senior-one-img">
                <div className="img-left">
                    <img src={pic2} alt=""/>
                </div>
                <div className="img-right">
                    <Upload
                        component="div"
                        name="upload_image_file"
                        action={user.upload_image}
                        // data={{
                        //     c_token: Cookies.get('c_token') || ''
                        // }}
                        withCredentials={true}
                        onSuccess={(res) => {
                            // console.log(fileObjectURL(file))
                            setImgurls(res.data.url)
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
                    >
                        {conimg === true ? t('userkyc.point') : t('userkyc.put')}
                    </Upload>
                    <img src={imgurls} alt=""/>
                </div>
            </div>
            <p>{t('userkyc.photoone')}</p>
            <p>{t('userkyc.photowidth')}</p>
            <p>{t('userkyc.photog')}jpg,png,jpeg</p>
        </div>
        <div className={`senior-btn ${(imgurl && imgurls) ? 'allinfo' : ''}`} onClick={handleTosure}>{t('userkyc.submit')}</div>
    </div>
}
