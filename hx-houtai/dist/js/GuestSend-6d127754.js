(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1505:function(e,t,a){"use strict";a.r(t);a(675);var n=a(676),r=a.n(n),o=(a(247),a(183)),i=a.n(o),s=(a(1390),a(1391)),l=a.n(s),c=(a(1376),a(1377)),p=a.n(c),u=(a(1388),a(1389)),f=a.n(u),d=(a(184),a(1378)),m=a.n(d),b=(a(1387),a(50)),h=a.n(b),y=(a(361),a(20)),g=a.n(y),v=(a(679),a(249)),O=a.n(v),w=(a(678),a(363)),E=a.n(w),I=(a(1379),a(1380)),S=a.n(I),k=a(0),j=a.n(k),C=a(246),T=a(10),V=a(248),P=a(1710),q=a(48);a(1684);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var A=S.a.Item,B=E.a.Group,D=O.a.Group,H=[{label:"往期嘉宾",value:1,disabled:!1},{label:"本期嘉宾",value:2,disabled:!1}],R=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=_(t).call(this,e),a=!r||"object"!==N(r)&&"function"!=typeof r?F(n):r,J(F(a),"typeChange",function(e){var t=a.props.form,n=[];2===e.length&&(n=[1,2]),1===e.length&&e[1]&&(n=[1]),2===e.length&&e[2]&&(n=[1]),a.setState({pastType:n}),t.setFieldsValue({pastType:n})}),J(F(a),"handleCancel",function(){return a.setState({previewVisible:!1})}),J(F(a),"handlePreview",function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),J(F(a),"handleChange",function(e){var t=e.file,n=e.fileList;a.setState({fileList:n}),"removed"===t.status&&a.setState({speakerIcon:""}),t.response&&(1===t.response.code&&"done"===t.status&&a.setState({speakerIcon:t.response.obj}),"error"===t.status&&(g.a.error("网络错误，上传失败"),a.setState({speakerIcon:"",fileList:[]})))}),J(F(a),"handleSubmit",function(e){e.preventDefault(),a.props.form.setFieldsValue({speakerIcon:a.state.speakerIcon}),a.props.form.validateFieldsAndScroll(function(e,t){e||(a.setState({loading:!0}),t.pastGuest=t.pastType.indexOf(1)>-1?1:0,t.guest=t.pastType.indexOf(2)>-1?1:0,t.speakerIcon=a.state.speakerIcon,t.intro="产品原型没有这个字段，暂时冗余",t.id=a.props.location.query.id||"",delete t.pastType,Object(q.i)("post","".concat(a.state.updateOrNot&&a.props.location.query.id?"/power/updateSpeaker":"/power/addSpeaker"),t,function(e){a.setState({loading:!1}),1===e.code?(g.a.success(a.state.updateOrNot?"修改成功":"添加成功"),T.hashHistory.goBack()):g.a.error(e.msg)}))})}),a.state={updateOrNot:!1,loading:!1,name:"",brief:"",topOrder:0,pastType:[],fileList:[],previewVisible:!1,previewImage:"",speakerIcon:"",conferenceId:1},a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,k["Component"]),a=t,(n=[{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.dispatch,n=t.location,r=this.state.pastType;a(Object(V.g)()),n.query.id?a(Object(P.a)({id:n.query.id,conferenceId:1},function(t){var a=t[0];console.log(JSON.stringify(a)+"结果~~~~~~~~~"),1===a.pastGuest&&r.push(a.pastGuest),1===a.guest&&r.push(2),e.setState({conferenceId:a.conferenceId,name:a.name,updateOrNot:!0,loading:!1,brief:a.brief,pastType:r,speakerIcon:a.speakerIcon,topOrder:a.topOrder,fileList:a.speakerIcon?[{uid:0,name:"xxx.png",status:"done",url:a.speakerIcon}]:[]})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.guestInfo,n=t.conferenceList,o={labelCol:{span:4},wrapperCol:{span:19,offset:1}},s=this.state,c=s.updateOrNot,u=s.name,d=s.brief,b=s.topOrder,y=s.pastType,g=s.fileList,v=s.previewImage,O=s.previewVisible,w=s.conferenceId,E=n.map(function(e){return{label:e.label,value:e.id}}),I=j.a.createElement("div",null,j.a.createElement(h.a,{type:"plus"}),j.a.createElement("div",{className:"ant-upload-text"},"上传图片"));return j.a.createElement("div",{className:"conference-send"},j.a.createElement(r.a,{spinning:this.state.loading,size:"large"},j.a.createElement(S.a,{onSubmit:this.handleSubmit},j.a.createElement(A,x({},o,{label:"大会："}),e("conferenceId",{initialValue:c&&a?w:1,rules:[{required:!0,message:"必须选择一个大会"}]})(j.a.createElement(B,{options:E}))),j.a.createElement(A,x({},o,{label:"嘉宾姓名："}),e("name",{initialValue:c&&a?u:"",rules:[{required:!0,message:"请输入姓名"}]})(j.a.createElement(m.a,{placeholder:"输入嘉宾姓名"}))),j.a.createElement(A,x({},o,{label:"一句话介绍："}),e("brief",{initialValue:c&&a?d:"",rules:[{required:!0,message:"一定要介绍一下"}]})(j.a.createElement(m.a,{placeholder:"一句话介绍"}))),j.a.createElement(A,x({},o,{label:"头像"}),e("speakerIcon",{initialValue:c&&a?g:"",rules:[{required:!0,message:"请上传头像"}]})(j.a.createElement(f.a,{headers:{"Sign-Param":Object(q.A)()},action:"".concat(q.a,"/pic/upload"),name:"uploadFile",listType:"picture-card",fileList:g,onPreview:this.handlePreview,onChange:this.handleChange},g.length>=1?null:I)),j.a.createElement(p.a,{visible:O,footer:null,onCancel:this.handleCancel},j.a.createElement("img",{src:v,style:{width:"100%"},alt:"example"})),j.a.createElement("span",{className:"cover-img-tip"},j.a.createElement("font",{style:{color:"red"}},""))),j.a.createElement(A,x({},o,{label:"身份组"}),e("pastType",{initialValue:c&&a?y:[],rules:[{required:!0,message:"请选择嘉宾类型"}]})(j.a.createElement(D,{options:H,onChange:this.typeChange}))),j.a.createElement(A,x({},o,{label:"排序"}),e("topOrder",{initialValue:c&&a?b:0,rules:[{required:!0,message:""}]})(j.a.createElement(l.a,{placeholder:"输入权重排序"}))),j.a.createElement(A,{wrapperCol:{span:12,offset:2}},j.a.createElement(i.a,{type:"primary",style:{marginRight:"30px"},className:"cancel",onClick:function(){T.hashHistory.goBack()}},"取 消"),j.a.createElement(i.a,{type:"primary","data-status":"1",htmlType:"submit"},"确 认")))))}}])&&L(a.prototype,n),o&&L(a,o),t}();t.default=Object(C.connect)(function(e){return{guestInfo:e.guestInfo,conferenceList:e.conferenceInfo}})(S.a.create()(R))}}]);