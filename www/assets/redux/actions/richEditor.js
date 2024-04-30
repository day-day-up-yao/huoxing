// import axios from 'axios'

import { axiosAjax, hxCookie } from '../../utils/public'

/**
 * 复制图片请求
 */
export const urlImgUpload = (payload) => {
    const res = axiosAjax({
        type: 'post',
        url: '/mgr/pic/url_upload',
        params: { data: JSON.stringify(payload) },
        userDefined: hxCookie
    })
    return res
}

/**
 * 上传图片请求
 */
export const fileImgUpload = (payload) => {
    const res = axiosAjax({
        type: 'post',
        url: '/mgr/picture/upload',
        formData: true,
        contentType: 'multipart/form-data',
        params: payload,
        userDefined: hxCookie
    })
    return res
}

/**
 * 上传视频请求
 */
export const fileLargeUpload = async ({ file, fn }) => {
    const totalSize = file.size // 文件大小
    const blockSize = 1024 * 1024 * 2 // 块大小
    const blockCount = Math.ceil(totalSize / blockSize) // 总块数

    const params = {
        fileName: file.name,
        blockCount: blockCount,
        type: 'video',
        uploadFile: null,
        currIndex: 1,
        uploadId: ''
    }

    const videoUrl = await new Promise(function (resolve, reject) {
        const uploading = async (params) => {
            const start = (params.currIndex - 1) * blockSize
            const end = Math.min(totalSize, start + blockSize)
            const uploadFile = file.slice(start, end)
            params.uploadFile = uploadFile

            let res = await axiosAjax({
                type: 'post',
                url: '/mgr/file/upload',
                formData: true,
                contentType: 'multipart/form-data',
                params: params,
                userDefined: hxCookie
            }).catch(function (err) {
                console.log(err)
            })

            // 请求错误或未上传成功，重新上传当前块
            if (!res || (res.code !== 1 && res.code !== 2)) res = await uploading(params)
            // 当前块上传成功，如果当前块currIndex<总块blockCount，继续上传下一块
            if (res.code === 1) {
                params.uploadId = res.obj
                if (params.currIndex < blockCount) {
                    params.currIndex = params.currIndex + 1
                    res = await uploading(params)
                }
            }
            // 全部上传成功，返回视频url
            if (res.code === 2) resolve(res.obj)

            return res
        }

        uploading(params)
    })

    return videoUrl
}
