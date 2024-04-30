import JsEncrypt from 'jsencrypt'

/**
 * @desc 密码加密
 * @returns {string}
 * @Params {password}
 * @method encodePsd(password)
 */

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg3mRptcLRCaT2BiEH8ZI1cTWToCZyX/XUZHZ902Bhk4fvDZchHsI3JKQHx7iS4RrYyI8G94eIdh1yYnd2fuwylmG1+FGcZeV5N7lex57Uih9Sm4OOz9kJq3vRZLX+M5vMEb+sAgWICJByKxOlGNMZhAbnhYpu8PaZzJGFFwt/cjXIDY7RX7YIP3gRTc4sDUfjv6DkjGYyqVmjRQgggSFtjR0euaelCZxzOPF5xShNubXX5b9xJuBAz+NhWCJ8zeEchOZkRAwujRPC1ebmfsTumecopjyaRUAb1csvscgG+frluDfs8zSUKDutkLNOe8utD2/KkHnQfUxucaV1XbPOQIDAQAB'
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const encodePsd = (password) => {
    const encrypt = new JsEncrypt()
    encrypt.setPublicKey(publicKey)
    return encrypt.encrypt(JSON.stringify({
        content: password.toString(),
        nonce: randomNumber(0, 1000000).toString(),
        timestamp: (Date.parse(new Date()) / 1000).toString()
    }))
}
