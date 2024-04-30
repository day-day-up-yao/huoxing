import QRCode from 'qrcode'
const getImg = (url, cb) => {
    let img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => {
        cb(img)
    }
    img.src = url
}
const drawImg = (backgound, code, cb) => {
    let bgSize = {
        height: 1600,
        width: 728
    }
    let codeSize = {
        height: 125,
        width: 125,
        right: 45,
        bottom: 30
    }
    // 背景图片，上面图片
    let canvas = document.createElement('canvas')
    canvas.width = bgSize.width
    canvas.height = bgSize.height
    let context = canvas.getContext('2d')

    getImg(backgound, backgound => {
        context.drawImage(backgound, 0, 0, bgSize.width, bgSize.height)
        // 绘制二维码
        getImg(code, code => {
            context.drawImage(
                code,
                bgSize.width - codeSize.width - codeSize.right,
                bgSize.height - codeSize.height - codeSize.bottom,
                codeSize.width,
                codeSize.height
            )
            cb(canvas.toDataURL('image/png'))
        })
    })
}
const draw = (backgound, url, cb) => {
    QRCode.toDataURL(
        url,
        {
            margin: 2.5
        },
        (err, url) => {
            drawImg(backgound, url, cb)
            console.log(err)
        }
    )
}
export default draw
