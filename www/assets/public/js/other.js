import BN from 'bignumber.js'

/**
 * @desc 是否是 naga.one || naga.is
 */
export const nagacomlist = ['www.naga.one', 'www.naga.is']
export const nagacom = (req) => req && typeof window === 'undefined'
    ? nagacomlist.indexOf((req.hostname || req.headers['x-forwarded-host'])) > -1
    : nagacomlist.indexOf(window.location.hostname) > -1

/**
 * @desc 普通数值显示保留几位小数
 * @Params (value, decimalDigits, params)
 * @method numberDecimal(value, decimalDigits, params)
 */
export function numberDecimal (
    value,
    decimalDigits = 2,
    params) {
    const CloneBn = BN.clone()
    CloneBn.config({
        DECIMAL_PLACES: decimalDigits,
        ROUNDING_MODE: params && params.roundUp ? BN.ROUND_UP : BN.ROUND_DOWN,
        EXPONENTIAL_AT: 1e9
    })
    const val = typeof value === 'function' ? value(CloneBn) : value

    if (params && params.toFixed) {
        return new CloneBn(val).toFixed(decimalDigits)
    }
    return new CloneBn(val).toString(10)
}

/**
 * @desc 数字百万M千K分割
 * @param num
 * @param isman // 小于10整数
 * @param isFixed // 小数位数 默认2位 小于10用
 * @returns {string}
 */
export const formattingNum = (num, isman, isFixed) => {
    if (!num || num === '') return '--'

    let newnum = ''
    if (Number(num) >= 1000000000) {
        newnum = `${numberDecimal(Number(Number(num) / 1000000000), 1)}B`
        return newnum
    }
    if (Number(num) >= 1000000) {
        newnum = `${numberDecimal(Number(Number(num) / 1000000), 1)}M`
        return newnum
    }
    if (Number(num) >= 1000) {
        newnum = `${numberDecimal(Number(Number(num) / 1000), 1)}K`
        return newnum
    }
    if (!isman) {
        newnum =
        Number(num) < 10 ? isFixed
            ? numberDecimal(Number(num), isFixed)
            : numberDecimal(Number(num), 2)
            : numberDecimal(Number(num), 1)
        return Number(newnum).toString()
    }
    if (isman) {
        return num.toString()
    }

    return '--'
}

/**
 * @desc 数字百万M千K分割————特殊规则   0显示，-1显示 - -
 * @param num
 * @param isman // 小于10整数
 * @param isFixed // 小数位数 默认2位 小于10用 不四舍五入
 * @returns {string}
 */
export const formattingSpecialNum = (num, isman, isFixed) => {
    if (typeof num === 'undefined' || num === '') return '--'
    if (Number(num) < 0) return '--'
    if (Number(num) === 0) return '0'

    let newnum = ''
    if (Number(num) >= 1000000000) {
        newnum = `${numberDecimal(Number(Number(num) / 1000000000), 1)}B`
        return newnum
    }
    if (Number(num) >= 1000000) {
        newnum = `${numberDecimal(Number(Number(num) / 1000000), 1)}M`
        return newnum
    }
    if (Number(num) >= 1000) {
        newnum = `${numberDecimal(Number(Number(num) / 1000), 1)}K`
        return newnum
    }
    if (!isman) {
        newnum =
        Number(num) < 1000 ? isFixed
            ? numberDecimal(Number(num), isFixed)
            : numberDecimal(Number(num), 2)
            : numberDecimal(Number(num), 1)
        return Number(newnum).toString()
    }
    if (isman) {
        return num.toString()
    }

    return '--'
}

export default {
    nagacom,
    formattingNum
}
