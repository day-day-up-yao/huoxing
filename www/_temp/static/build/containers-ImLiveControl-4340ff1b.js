(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[18],{1138:function(e,t,a){},1158:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=(a(1138),function(e){var t=e.children,a=e.deps,o=void 0===a?[]:a,r=e.wrap,l=void 0===r?n.Fragment:r,i=Object(n.useMemo)(t,o);return c.a.createElement(l,null,i)});t.a=function(e){var t=e.children,a=e.show,r=e.close,l=e.closeIcon,i=e.closeClassName,s=e.wrapperClassName;return Object(n.useEffect)(function(){var e=document.querySelector(".layout-content");if(e){var t=function(){var t=e.getAttribute("style");t&&t.indexOf("; z-index: 10")>-1&&e.setAttribute("style",t.replace("; z-index: 10",""))};if(a){var n=e.getAttribute("style");n&&-1===n.indexOf("; z-index: 10")&&e.setAttribute("style",n+"; z-index: 10")}else t();return function(){t()}}},[a]),c.a.createElement(o,{deps:[t,a,r]},function(){return c.a.createElement("div",{className:"popup-wrapper ".concat(s||""),style:{display:a?"flex":"none"}},c.a.createElement("div",{className:"popup-content"},c.a.createElement("img",{className:"popup-close ".concat(i||""),src:l,onClick:r}),t),c.a.createElement("div",{className:"popup-mask",onClick:r}))})}},1196:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(1197);t.a=function(e){var t=e.title,a=e.text,n=e.close,o=e.ok,r=e.okText;return c.a.createElement("div",{className:"im-live-control-popup"},c.a.createElement("div",{className:"im-live-control-popup-title"},t),c.a.createElement("div",{className:"im-live-control-popup-text"},a),c.a.createElement("div",{className:"im-live-control-popup-btn-box",style:{justifyContent:n&&o?"space-between":"center"}},n&&c.a.createElement("div",{className:"im-live-control-popup-btn close",onClick:n},"取消"),o&&c.a.createElement("div",{className:"im-live-control-popup-btn ok",onClick:o},r)))}},1197:function(e,t,a){},1522:function(e,t,a){},1523:function(e,t,a){},1524:function(e,t,a){e.exports=a.p+"im-live-control-arrow-3d60a162.png"},1525:function(e,t,a){e.exports=a.p+"im-live-control-close-011bb54b.png"},1526:function(e,t,a){e.exports=a.p+"im-live-control-play-2d150157.png"},1527:function(e,t,a){e.exports=a.p+"im-live-control-popup-close-d56650a0.png"},311:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),o=a(4),r=a.n(o),l=a(22),i=a.n(l),s=a(0),m=a.n(s),u=a(27),p=(a(1522),a(1158)),v=a(17),f=a(1),d=a(16),b=a(19),E=(a(1523),a(1524)),x=a.n(E),N=function(e){var t=e.title,a=e.src;return m.a.createElement("div",{className:"im-live-control-item",style:{alignItems:"flex-start"}},m.a.createElement("div",{className:"im-live-control-item-title"},t),m.a.createElement("img",{className:"im-live-control-item-img",src:a}))},k=function(e){var t=e.title,a=e.text;return m.a.createElement("div",{className:"im-live-control-item"},m.a.createElement("div",{className:"im-live-control-item-title"},t),m.a.createElement("div",{className:"im-live-control-item-text"},a))},h=function(e){var t=e.title,a=e.value,n=Object(s.useCallback)(function(){},[]),c=Object(s.useCallback)(function(){Object(f.i)(a)?v.a.success("复制成功"):v.a.info("复制失败，该浏览器不支持点击复制到剪贴板")},[a]);return m.a.createElement("div",{className:"im-live-control-item"},m.a.createElement("div",{className:"im-live-control-item-title"},t),m.a.createElement("input",{className:"im-live-control-item-input",value:a,onChange:n,spellCheck:!1}),m.a.createElement("div",{className:"im-live-control-item-copy",onClick:function(){return c()}},"一键复制"))},O=function(e){var t=e.text,a=e.roomType;return m.a.createElement("div",{className:"im-live-control-item"},m.a.createElement("div",{className:"im-live-control-item-explain",style:{color:1===a?"#999":"#F63C2A"}},t))},y=function(e){var t=e.text,a=e.roomType,n=e.src,c=e.click,o=e.coursUrl;return m.a.createElement("div",{className:"im-live-control-item",style:{marginBottom:0}},m.a.createElement("div",{className:"im-live-control-item-btn ".concat(1===a?"backColor1":"backColor2"),onClick:c},m.a.createElement("img",{className:"im-live-control-item-btn-icon",src:n}),t),m.a.createElement("a",{className:"im-live-control-item-btn-explain",href:o,target:"_blank"},"MarsBit电脑直播教程"),m.a.createElement("img",{className:"im-live-control-item-btn-explain-icon",src:x.a}))},j=a(1196),w=a(1525),C=a.n(w),g=a(1526),I=a.n(g),S=a(1527),T=a.n(S),_=["直播软件（如OBS软件）设置完成推流后，点击“开始直播”按钮后直播才会正式开始","直播结束后，点击“结束直播”按钮后，直播间状态会自动更改为回放中","当前为手机直播，请在MarsBit上开启或关闭直播"];t.default=function(){var e=Object(u.e)(function(e){return{userInfo:e.login.userInfo.info,room:e.live.room}},u.c),t=e.userInfo,a=e.room,n=Object(u.d)(),o=Object(s.useRef)(),l=Object(s.useState)(!1),E=i()(l,2),x=E[0],w=E[1],g=Object(s.useState)(!1),S=i()(g,2),A=S[0],U=S[1];Object(s.useEffect)(function(){if(2!==a.status){if(!o.current)return o.current=setInterval(r()(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.j)({roomId:a.roomId});case 2:t=e.sent,2===parseInt(t.obj)&&(U(!0),clearInterval(o));case 4:case"end":return e.stop()}},e)})),1e4),function(){clearInterval(o),o.current=null}}else U(!0)},[a]);var B=Object(s.useCallback)(r()(c.a.mark(function e(){var o,r,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.passportId||n(Object(d.i)("account",!0)),e.next=3,Object(b.j)({roomId:a.roomId}).catch(function(e){throw v.a.info("获取直播间错误"),e});case 3:if(1!==(o=e.sent).code){e.next=20;break}r=parseInt(o.obj),e.t0=r,e.next=0===e.t0?9:1===e.t0?9:2===e.t0?14:16;break;case 9:return e.next=11,Object(b.l)({roomId:a.roomId,passportId:t.passportId,status:r+1}).catch(function(e){throw v.a.info("获取直播间错误"),e});case 11:return 1===(l=e.sent).code?n(Object(b.d)({roomId:a.roomId})).then(function(e){1!==e.code&&v.a.info(e.msg)}).catch(function(e){throw v.a.info("获取直播间错误"),e}):v.a.info(l.msg),e.abrupt("break",18);case 14:case 16:return U(!0),e.abrupt("break",18);case 18:e.next=21;break;case 20:v.a.info(o.msg);case 21:w(!1);case 22:case"end":return e.stop()}},e)})),[n,a,t]),D=Object(s.useCallback)(function(){w(!0)},[]),L=Object(s.useCallback)(function(){w(!1)},[]),M=Object(s.useCallback)(function(){window.location.href=f.B.main("/live")},[]);return m.a.createElement("div",{className:"im-live-control-page"},m.a.createElement("div",{className:"im-live-control-page-main-box"},m.a.createElement(N,{title:"直播封面：",src:a.coverPicUrl}),m.a.createElement(k,{title:"直播标题：",text:a.name}),m.a.createElement(k,{title:"直播时间：",text:Object(f.l)(a.beginTime,"yyyy-MM-dd hh:mm")}),1===a.roomType&&a.pushStreamUrl?m.a.createElement(h,{title:"服务器：",value:"".concat(a.pushStreamUrl.split("/")[0],"//").concat(a.pushStreamUrl.split("/")[2],"/").concat(a.pushStreamUrl.split("/")[3])}):m.a.createElement(k,{title:"服务器：",text:"手机直播不支持串流"}),1===a.roomType&&a.pushStreamUrl?m.a.createElement(h,{title:"串流密钥：",value:a.pushStreamUrl.split("/")[4]}):m.a.createElement(k,{title:"串流密钥：",text:"手机直播不支持串流"}),m.a.createElement(h,{title:"直播间观看地址：",value:"https://www.marsbit.co/live/".concat(a.roomId)}),m.a.createElement(O,{text:1===a.roomType?_[a.status]:_[2],roomType:a.roomType,status:a.status}),m.a.createElement(y,{text:0===a.status?"开始直播":"结束直播",roomType:a.roomType,src:0===a.status?I.a:C.a,click:D,coursUrl:"https://news.marsbit.co/20210201154152675262.html"})),m.a.createElement(p.a,{children:m.a.createElement(j.a,{title:"提示",text:0===a.status?"直播软件（如OBS）设置完成后才可正常开始直播。":"是否结束直播",close:L,okText:0===a.status?"开始直播":"结束直播",ok:B}),show:x,close:L,closeIcon:T.a,closeClassName:"im-live-control-popup-close"}),m.a.createElement(p.a,{children:m.a.createElement(j.a,{title:"提示",text:"直播间已被关闭",ok:M,okText:"确定"}),show:A,closeClassName:"im-live-control-popup-close2"}))}}}]);
//# sourceMappingURL=containers-ImLiveControl-4340ff1b.js.map