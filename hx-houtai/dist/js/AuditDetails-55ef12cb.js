(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1449:function(e,t,a){"use strict";a.r(t);a(675);var i=a(676),n=a.n(i),l=(a(361),a(20)),s=a.n(l),c=(a(677),a(362)),r=a.n(c),m=(a(184),a(1378)),o=a.n(m),u=(a(678),a(363)),d=a.n(u),h=(a(1376),a(1377)),f=a.n(h),E=a(0),p=a.n(E),v=a(246),y=a(10),N=a(48);a(1627);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var R=f.a.confirm,j=d.a.Group,O=o.a.TextArea,_=r.a.Option,V=["上传资料不符合要求","上传照片模糊","用户信息与照片信息不匹配","暂不通过行情分析认证申请","与区块链无关","其它"],A=function(e){function t(){var e,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,i=D(t).call(this),e=!i||"object"!==g(i)&&"function"!=typeof i?w(a):i,b(w(e),"closeWindow",function(){y.hashHistory.push("/audit-identify")}),b(w(e),"getReason",function(t){e.setState({noPassReason:t.target.value})}),b(w(e),"doRejectSelect",function(t){e.setState({noPassReason:V[t],rejectSelectVal:t})}),b(w(e),"doRejectDo",function(t){t.preventDefault();var a=w(e);""!==e.state.noPassReason.trim()?(e.setState({loading:!0}),e.state.paramsValue.noPassReason=a.state.noPassReason,e.state.paramsValue.ifAddV=0,Object(N.i)("get","/account/updateauthstate",e.state.paramsValue,function(e){1===e.code?(s.a.success("操作成功！"),a.closeWindow()):s.a.error(e.msg)})):s.a.error("请填写驳回原因!")}),b(w(e),"handleSubmit",function(t){var a=t.target.getAttribute("data-status");t.preventDefault();var i=w(e),n=JSON.parse(window.sessionStorage.getItem("hx_identify_info"))||e.props.selectData,l={passportId:n.passportid,ifAddV:e.state.ifAddV,identityAuth:e.state.identityAuth,nickName:n.nickName,identityDesc:e.state.identityDesc,introduce:n.introduce,iconUrl:n.iconUrl,authorPhone:n.authorPhone,identityName:n.identityName,identityNum:n.identityNum,idUserUrl:n.idUserUrl,whiteListFlag:n.whiteListFlag,state:parseInt(a),noPassReason:""};e.setState({paramsValue:l},function(){-1===parseInt(a)?e.doReject():R({title:"提示",content:"确认要".concat(1===parseInt(a)?"通过审核":"驳回请求","吗 ?"),onOk:function(){Object(N.i)("get","/account/updateauthstate",l,function(e){1===e.code?(s.a.success("操作成功！"),i.closeWindow()):s.a.error(e.msg)})}})})}),b(w(e),"handleCancel",function(){return e.setState({previewVisible:!1})}),b(w(e),"showModal",function(t){e.setState({previewVisible:!0,previewImage:t})}),b(w(e),"addVChange",function(t){e.setState({ifAddV:t.target.value})}),b(w(e),"changeIdentityAuth",function(t){console.log(t.target.value),e.setState({identityAuth:t.target.value})}),e.state={isEdit:!1,loading:!1,previewVisible:!1,previewImage:"",noPassReason:"",rejectSelectVal:"",doRejectShow:!1,paramsValue:null,ifAddV:JSON.parse(window.sessionStorage.getItem("hx_identify_info")).type?parseInt(JSON.parse(window.sessionStorage.getItem("hx_identify_info")).type):1,identityAuth:JSON.parse(window.sessionStorage.getItem("hx_identify_info")).identityAuth?parseInt(JSON.parse(window.sessionStorage.getItem("hx_identify_info")).identityAuth):0,closeLoading:!1,identityDesc:JSON.parse(window.sessionStorage.getItem("hx_identify_info")).identityDesc?JSON.parse(window.sessionStorage.getItem("hx_identify_info")).identityDesc:""},e}var a,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,E["Component"]),a=t,(i=[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"auditStatus",value:function(e){var t="";return N.g.map(function(a,i){parseInt(a.value)===e&&(t=a.label)}),t}},{key:"doReject",value:function(){this.setState({noPassReason:V[0],rejectSelectVal:"0",doRejectShow:!0})}},{key:"componentWillMount",value:function(){var e=JSON.parse(window.sessionStorage.getItem("hx_identify_info")),t=this.props.selectData;this.setState({ifAddV:e.type?parseInt(e.type):t.type?parseInt(t.type):1,identityAuth:e.identityAuth?parseInt(e.identityAuth):t.identityAuth?parseInt(t.identityAuth):0,identityDesc:e.identityDesc?e.identityDesc:t.identityDesc?t.identityDesc:""})}},{key:"render",value:function(){var e=this,t=JSON.parse(window.sessionStorage.getItem("hx_identify_info"))||this.props.selectData;return p.a.createElement("div",null,p.a.createElement(n.a,{spinning:this.state.loading,size:"large"},t.passportid?p.a.createElement("div",{className:"audit-detail"},p.a.createElement("div",{className:"auditDetailItem otherTop"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h1",null,"认证状态")),p.a.createElement("div",{className:"auditDetailItemRight"})),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"状态：")),p.a.createElement("div",{className:"auditDetailItemRight"},-1===t.state?p.a.createElement("h3",{className:"nopass"},this.auditStatus(t.state),"     ",t.noPassReason):p.a.createElement("h3",null,this.auditStatus(t.state)))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"认证类型：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement(j,{onChange:this.addVChange,value:this.state.ifAddV},p.a.createElement(d.a,{className:"radioText",value:1},"个人"),p.a.createElement(d.a,{className:"radioText",value:2},"媒体"),p.a.createElement(d.a,{className:"radioText",value:3},"机构")))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"注册账号：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.phoneNum))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"用户ID：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.passportid))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"提交时间：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,Object(N.w)(t.createTime)))),p.a.createElement("div",{className:"auditDetailItem otherTop"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h1",null,"基础信息")),p.a.createElement("div",{className:"auditDetailItemRight"})),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"分类：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement(j,{onChange:this.changeIdentityAuth,value:this.state.identityAuth},p.a.createElement(d.a,{className:"radioText",value:1},"媒体"),p.a.createElement(d.a,{className:"radioText",value:2},"KOL"),p.a.createElement(d.a,{className:"radioText",value:3},"投研"),p.a.createElement(d.a,{className:"radioText",value:4},"项目"),p.a.createElement(d.a,{className:"radioText",value:5},"行情"),p.a.createElement(d.a,{className:"radioText",value:6},"社群"),p.a.createElement(d.a,{className:"radioText",value:0},"其他")))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"MarsBit专栏昵称：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.nickName))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"MarsBit专栏签名：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.identityDesc))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"MarsBit专栏介绍：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.introduce))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"作者头像：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("img",{className:"auditDetailItemRightImg1",onClick:function(){return e.showModal(t.iconUrl)},src:t.iconUrl}))),p.a.createElement("div",{className:"auditDetailItem otherTop"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h1",null,"认证信息")),p.a.createElement("div",{className:"auditDetailItemRight"})),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"联系电话：")),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.authorPhoneNum))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"".concat(1===t.type?"姓名：":"组织/企业名称："))),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.identityName))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"".concat(1===t.type?"身份证号：":"组织机构代码/营业执照编号："))),p.a.createElement("div",{className:"auditDetailItemRight"},p.a.createElement("h3",null,t.identityNum))),p.a.createElement("div",{className:"auditDetailItem"},p.a.createElement("div",{className:"auditDetailItemLeft"},p.a.createElement("h2",null,"".concat(1===t.type?"手持身份证：":"组织机构代码证/营业执照影印件："))),p.a.createElement("div",{className:"auditDetailItemRight"},""!==t.idUserUrl?p.a.createElement("img",{className:"auditDetailItemRightImg2",onClick:function(){return e.showModal(t.idUserUrl)},src:t.idUserUrl}):null)),p.a.createElement("div",{className:"auditDetailBtn"},p.a.createElement("button",{"data-status":"1",onClick:this.handleSubmit},"审核通过"),p.a.createElement("button",{"data-status":"-1",onClick:this.handleSubmit},"审核驳回"),p.a.createElement("button",{className:"cancel",onClick:this.closeWindow},"取消")),p.a.createElement(f.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel},p.a.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage})),p.a.createElement(f.a,{title:"审核驳回",visible:this.state.doRejectShow,onOk:this.doRejectDo,onCancel:function(){e.setState({doRejectShow:!1})}},p.a.createElement("div",{className:"modal-input-reject"},p.a.createElement("span",{style:{marginRight:10}},"请",parseInt(this.state.rejectSelectVal)===V.length-1?"填写":"选择","文章不通过原因：",this.state.noPassReason||""),p.a.createElement(r.a,{value:this.state.rejectSelectVal,style:{width:280},onChange:this.doRejectSelect},V.map(function(e,t){return p.a.createElement(_,{value:"".concat(t),key:t},e)})),p.a.createElement(O,{style:{display:parseInt(this.state.rejectSelectVal)===V.length-1?"block":"none"},rows:3,autoFocus:!0,onChange:function(t){e.getReason(t)}})))):p.a.createElement("div",{style:{height:300}},"加载中...")))}}])&&I(a.prototype,i),l&&I(a,l),t}();t.default=Object(v.connect)(function(e){return{selectData:e.auditInfo.selectedData}})(A)}}]);