import Router from 'express-promise-router'
import { resolve } from 'path'
import fse from 'fs-extra'
import cheerio from 'cheerio'
import axios from 'axios'

const router = new Router()

// http://10.0.8.65:3026/stylespier?htmlFileName=test&scssFileName=binance

router.get('/', async function (req, res, next) {
    const { htmlFileName, scssFileName } = req.query

    // 要读取的html文件
    const htmlFilePath = resolve(__dirname, `../../static/styleSpiderHtml/${htmlFileName}.html`)
    const htlmFileExist = await fse.pathExists(htmlFilePath)
    if (!htlmFileExist) throw Error(`HtmlFile dont't exit`)
    const htmlFile = await fse.readFile(htmlFilePath)
    const $ = cheerio.load(htmlFile)
    const $style = $('style')
    const $linkStyle = $('link[rel=stylesheet]')

    let styleStr = ''
    await new Promise(function (resolve, reject) {
        let num = 0
        $linkStyle.map(async function (index, item) {
            const data = await axios({
                method: 'get',
                url: $(item).attr('href')
            })
            styleStr += data.data
            num++
            if (num === $linkStyle.length) resolve(true)
        })
    })
    $style.map(function (index, item) {
        styleStr += item.children[0].data
    })

    // 生成的scss文件
    const scssFilePath = resolve(__dirname, `../../assets/public/css/pages/${scssFileName}.scss`)
    await fse.outputFile(scssFilePath, styleStr)

    res.send(styleStr)
})

export default router
