
// 如下配置仅作为示例，具体可参考'配置验证对象'小节
const initYpRiddler = (classname, callback) => {
  new window.YpRiddler({
    appId: '请在这里填入实际的appId',
    expired: 10,
    mode: 'dialog',
    winWidth: 500,
    lang: 'zh-cn',
    container: document.getElementById(classname),
    version: 'v1',
    onSuccess: function (validInfo, close, useDefaultSuccess) {
      callback(validInfo)
      alert(
        '验证通过! token=' +
          validInfo.token +
          ', authenticate=' +
          validInfo.authenticate
      )
      useDefaultSuccess.call(null, true)
      close()
    },
    onFail: function (code, msg, retry) {
      alert('出错啦：' + msg + ' code: ' + code)
      retry()
    },
    beforeStart: function (next) {
      console.log('验证马上开始')
      next()
    },
    onExit: function () {
      console.log('退出验证')
    },
  })
}


export default initYpRiddler