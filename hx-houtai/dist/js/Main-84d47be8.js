(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1523:function(e,t,n){"use strict";n.r(t);n(1715);var o=n(1718),i=n.n(o),a=(n(1400),n(1401)),c=n.n(a),l=n(0),r=n.n(l),s=(n(1690),n(247),n(183)),u=n.n(s),p=n(89),f=n(246),y=n(10),d=n(51),m=n.n(d),k=n(248);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=c.a.Header,O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,v(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,l["Component"]),n=t,(o=[{key:"loginOut",value:function(){this.props.actions.logout({passportId:m.a.get("hx_passportId")})}},{key:"render",value:function(){var e=this;return r.a.createElement(g,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement("h3",{className:"system-title"},"MarsBit管理后台"),this.props.tag?this.props.tag:"",r.a.createElement("div",{className:"shop-func"},r.a.createElement(u.a,{title:"主页",type:"primary",shape:"circle",icon:"home",onClick:function(){y.hashHistory.push("/")}}),r.a.createElement(u.a,{title:"退出",type:"primary",shape:"circle",icon:"logout",onClick:function(){e.loginOut()}})))}}])&&b(n.prototype,o),i&&b(n,i),t}(),_=Object(f.connect)(function(e){return{loginInfo:e.loginInfo}},function(e){return{actions:Object(p.bindActionCreators)({breadcrumb:k.b,navigation:k.o,logout:k.n},e)}})(O),w=(n(1723),n(686)),j=n.n(w),P=[{key:"push",icon:"icon-push",link:"/push-flash",symbol:30,text:"App推送列表"},{key:"mobile",icon:"icon-push",link:"",text:"移动排版",children:[{key:"mobile-index",icon:"icon-push",link:"/mobile-index",text:"移动首页"}]},{key:"count",icon:"icon-count",link:"",text:"简单数据统计",children:[{key:"count-total",icon:"icon-count",link:"/count-total",text:"发布数量统计"},{key:"count-news",icon:"icon-count",link:"/count-news",text:"新闻阅读统计"}]},{key:"socialMedia",symbol:24,icon:"icon-socialMedia",link:"/socialMedia-twitter",text:"工作台"},{key:"post",symbol:1,icon:"icon-post",link:"",text:"新闻管理",children:[{key:"post-list",icon:"icon-post-list",link:"/post-list",text:"新闻列表"},{key:"post-send",icon:"icon-post-send",link:"/post-send",text:"新闻添加/编辑"},{key:"post-channel",icon:"icon-post-channel",link:"/post-channel",text:"频道管理"},{key:"post-account",icon:"icon-post-channel",link:"/post-account",text:"新闻账号管理"},{key:"post-tactics",icon:"icon-post-tactics",link:"/post-tactics",text:"策略分类管理"},{key:"post-notice",icon:"icon-post-notice",link:"/post-notice",text:"公告管理"}]},{key:"flash",symbol:4,icon:"icon-flash",link:"",text:"快讯管理",children:[{key:"flash-lists",icon:"icon-flash-list",link:"/flash-lists",text:"快讯列表"},{key:"flash-edit",icon:"icon-flash-send",link:"/flash-edit",text:"快讯添加/编辑"},{key:"flash-type",icon:"icon-post-channel",link:"/flash-type",text:"快讯频道管理"},{key:"flash-audit",icon:"icon-flash-audit",link:"/flash-audit",text:"快讯审核"}]},{key:"cc",symbol:55,icon:"icon-flash-rili",link:"",text:"日历机会管理",children:[{key:"cc-calendarAdd",icon:"icon-flash-send",link:"/cc-calendarAdd",text:"新增日历"},{key:"cc-calendarLists",icon:"icon-flash-list",link:"/cc-calendarLists",text:"日历列表"},{key:"cc-chanceAdd",icon:"icon-flash-send",link:"/cc-chanceAdd",text:"新增机会"},{key:"cc-chanceLists",icon:"icon-flash-list",link:"/cc-chanceLists",text:"机会列表"}]},{key:"audit",symbol:3,icon:"icon-audit",link:"",text:"MarsBit专栏管理",children:[{key:"audit-identify",icon:"icon-identify",link:"/audit-identify",text:"用户认证审核"},{key:"audit-official",icon:"icon-identify",link:"/audit-official",text:"用户管理列表"},{key:"audit-list",icon:"icon-article",link:"/audit-list",text:"文章审核"},{key:"audit-draft",icon:"icon-article",link:"/audit-draft",text:"草稿审核"},{key:"audit-video",icon:"icon-video",link:"/audit-video",text:"视频审核"},{key:"audit-whitelist",icon:"icon-baimingdan",link:"/audit-whitelist",text:"白名单列表"},{key:"audit-mprank",icon:"icon-bangdan",link:"/audit-mprank",text:"MarsBit专栏榜单管理"}]},{key:"ad",symbol:5,icon:"icon-ad",link:"",text:"广告管理",children:[{key:"ad-pc",icon:"icon-pc-list",link:"/ad-pc",text:"WEB端广告"},{key:"ad-mobile",icon:"icon-mobile-list",link:"/ad-mobile",text:"App端广告"}]},{key:"columnAuthor",symbol:8,icon:"icon-columnAuthor",link:"/columnAuthor-list",text:"专栏作者管理"},{key:"tagv2",symbol:27,icon:"icon-comment",link:"/tagv2-list",text:"新版标签管理",chileren:[{key:"tagv2-list",icon:"icon-comment-list",link:"/comment-list",text:"评论列表"}]},{key:"conference",symbol:10,icon:"icon-comment",link:"",text:"大会管理",children:[{key:"agenda-list",icon:"icon-post-list",link:"/agenda-list",text:"议程列表"},{key:"guest-list",icon:"icon-post-send",link:"/guest-list",text:"嘉宾列表"},{key:"media-list",icon:"icon-post-channel",link:"/media-list",text:"合作媒体"}]},{key:"coinRecommend",symbol:15,icon:"icon-cr",link:"",text:"APP 词条管理",children:[{key:"appGuideCoin-list",icon:"icon-homecr",link:"/appGuideCoin-list",text:"引导页币种"},{key:"coinRecommend-list",icon:"icon-coinRecommend-list",link:"/coinRecommend-list",text:"币种推荐列表"},{key:"hotCoin-list",icon:"icon-hotCoin-list",link:"/hotCoin-list",text:"热搜币种列表"},{key:"newsHotWords-list",icon:"icon-newsHotWords-list",link:"/newsHotWords-list",text:"热搜新闻列表"}]},{key:"tagsAndAuthor",symbol:25,icon:"icon-hotTags",link:"/tagsAndAuthor-list",text:"热门标签管理"},{key:"wordsFilter",symbol:17,icon:"icon-wordsFilter",link:"/wordsFilter",text:"敏感词过滤"},{key:"account",symbol:19,icon:"icon-accountManager",link:"",text:"账号管理",children:[{key:"account-flashAccount",icon:"icon-post-list",link:"/account-flashAccount",text:"快讯账号管理"},{key:"account-blackList",icon:"icon-heimingdan",link:"/account-blackList",text:"黑名单管理"}]},{key:"amendPhone",symbol:32,icon:"icon-phoneB",link:"/amendPhone",text:"用户手机号替换"}],C=function(){var e=parseInt(m.a.get("hx_role"));return 4===e?[{key:"push",icon:"icon-push",link:"/push-flash",text:"App推送列表"}]:3===e?[{key:"systemAccount",icon:"icon-systemAccount",link:"/systemAccount-list",symbol:28,text:"系统账号管理"},{key:"push",icon:"icon-push",link:"/push-flash",symbol:30,text:"App推送列表"},{key:"version",symbol:23,icon:"icon-version",link:"/version-list",text:"APP 版本更新"}].concat(P):5===e?[{key:"marsTrip",icon:"icon-mars",link:"/marsTrip-list",symbol:29,text:"MarsBit中国行"}]:6===e?[{key:"adData",symbol:26,icon:"icon-pc-list",link:"/adData-list",text:"广告数据管理"}]:7===e?[{key:"mobile",icon:"icon-push",link:"",text:"移动排版",children:[{key:"mobile-index",icon:"icon-push",link:"/mobile-index",text:"移动首页"}]},{key:"socialMedia",symbol:24,icon:"icon-socialMedia",link:"/socialMedia-twitter",text:"工作台"},{key:"post",symbol:1,icon:"icon-post",link:"",text:"新闻管理",children:[{key:"post-list",icon:"icon-post-list",link:"/post-list",text:"新闻列表"},{key:"post-send",icon:"icon-post-send",link:"/post-send",text:"新闻添加/编辑"},{key:"post-channel",icon:"icon-post-channel",link:"/post-channel",text:"频道管理"},{key:"post-account",icon:"icon-post-channel",link:"/post-account",text:"新闻账号管理"},{key:"post-tactics",icon:"icon-post-tactics",link:"/post-tactics",text:"策略分类管理"},{key:"post-notice",icon:"icon-post-notice",link:"/post-notice",text:"公告管理"}]},{key:"flash",symbol:4,icon:"icon-flash",link:"",text:"快讯管理",children:[{key:"flash-lists",icon:"icon-flash-list",link:"/flash-lists",text:"快讯列表"},{key:"flash-edit",icon:"icon-flash-send",link:"/flash-edit",text:"快讯添加/编辑"},{key:"flash-type",icon:"icon-post-channel",link:"/flash-type",text:"快讯频道管理"},{key:"flash-audit",icon:"icon-flash-audit",link:"/flash-audit",text:"快讯审核"}]}]:2===e?P:[]},A=n(48),M=n(1605);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=j.a.SubMenu,L=j.a.Item,D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,T(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,l["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props.location;return r.a.createElement(j.a,{className:"shop-menu",selectedKeys:Object(A.z)(e),defaultOpenKeys:Object(A.z)(e),mode:"inline"},5!==parseInt(m.a.get("hx_role"))?C().map(function(e){return e.children?r.a.createElement(B,{key:e.key,title:r.a.createElement("span",null,r.a.createElement(M.a,{type:e.icon}),e.text)},e.children.map(function(e){return e.children?r.a.createElement(B,{key:e.key,title:r.a.createElement("span",null,r.a.createElement(M.a,{type:e.icon}),e.text)},e.children.map(function(e){return r.a.createElement(L,{key:e.key},r.a.createElement("span",null,r.a.createElement(M.a,{type:e.icon}),r.a.createElement("span",null,e.text)),r.a.createElement(y.Link,{to:{pathname:e.link}}))})):r.a.createElement(L,{key:e.key},r.a.createElement("span",null,r.a.createElement(M.a,{type:e.icon}),r.a.createElement("span",null,e.text)),r.a.createElement(y.Link,{to:{pathname:e.link}}))})):3===parseInt(m.a.get("hx_role"))?r.a.createElement(L,{key:e.key},r.a.createElement("span",null,r.a.createElement(M.a,{type:e.icon}),r.a.createElement("span",null,e.text)),r.a.createElement(y.Link,{to:{pathname:e.link}})):"/systemAccount-list"!==e.link?r.a.createElement(L,{key:e.key},r.a.createElement("span",null,r.a.createElement(M.a,{type:e.icon}),r.a.createElement("span",null,e.text)),r.a.createElement(y.Link,{to:{pathname:e.link}})):void 0}):r.a.createElement(L,{key:"marsTrip"},r.a.createElement("span",null,r.a.createElement(M.a,{type:"icon-mars"}),r.a.createElement("span",null,"MarsBit中国行")),r.a.createElement(y.Link,{to:{pathname:"/marsTrip-list"}})))}}])&&R(n.prototype,o),i&&R(n,i),t}(),H=Object(f.connect)(function(e){return{loginInfo:e.loginInfo}})(D),W=n(1666);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return V});var q=c.a.Content,Q=c.a.Sider,V=function(e){function t(){var e,n,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return o=this,i=(e=G(t)).call.apply(e,[this].concat(c)),n=!i||"object"!==z(i)&&"function"!=typeof i?J(o):i,U(J(n),"state",{collapsed:!1}),U(J(n),"onCollapse",function(e){n.setState({collapsed:e})}),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,l["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props.location;return r.a.createElement(c.a,null,r.a.createElement(_,null),r.a.createElement(c.a,null,r.a.createElement(Q,{collapsed:this.state.collapsed,onCollapse:this.onCollapse,width:200,className:"shop-slider"},r.a.createElement(H,{location:e})),r.a.createElement(c.a,{className:"shop-content-wrap"},r.a.createElement(i.a,{className:"shop-breadcrumb"},Object(A.z)(e).map(function(e,t){return r.a.createElement(i.a.Item,{key:t},W.a[e])})),r.a.createElement(q,{className:"shop-content"},this.props.children))))}}])&&F(n.prototype,o),a&&F(n,a),t}()},1689:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(3)),i=u(n(6)),a=u(n(8)),c=u(n(5)),l=u(n(7)),r=u(n(0)),s=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n},f=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.separator,i=e.children,a=p(e,["prefixCls","separator","children"]),c=void 0;return c="href"in this.props?r.default.createElement("a",(0,o.default)({className:t+"-link"},a),i):r.default.createElement("span",(0,o.default)({className:t+"-link"},a),i),i?r.default.createElement("span",null,c,r.default.createElement("span",{className:t+"-separator"},n)):null}}]),t}(r.default.Component);t.default=f,f.__ANT_BREADCRUMB_ITEM=!0,f.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},f.propTypes={prefixCls:s.default.string,separator:s.default.oneOfType([s.default.string,s.default.element]),href:s.default.string},e.exports=t.default},1690:function(e,t,n){var o=n(1721);"string"==typeof o&&(o=[[e.i,o,""]]);var i={transform:void 0};n(186)(o,i);o.locals&&(e.exports=o.locals)},1715:function(e,t,n){"use strict";n(32),n(1716)},1718:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(1719)),i=a(n(1689));function a(e){return e&&e.__esModule?e:{default:e}}o.default.Item=i.default,t.default=o.default,e.exports=t.default},1719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=y(n(6)),i=y(n(8)),a=y(n(5)),c=y(n(7)),l=n(0),r=y(l),s=y(n(1)),u=y(n(74)),p=y(n(1689)),f=y(n(9));function y(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n,o){var i=n.indexOf(e)===n.length-1,a=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":("+n+")","g"),function(e,n){return t[n]||e})}(e,t);return i?r.default.createElement("span",null,a):r.default.createElement("a",{href:"#/"+o.join("/")},a)}var m=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,u.default)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){var e=void 0,t=this.props,n=t.separator,o=t.prefixCls,i=t.style,a=t.className,c=t.routes,s=t.params,y=void 0===s?{}:s,m=t.children,k=t.itemRender,h=void 0===k?d:k;if(c&&c.length>0){var b=[];e=c.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(y).forEach(function(e){t=t.replace(":"+e,y[e])}),t&&b.push(t),r.default.createElement(p.default,{separator:n,key:e.breadcrumbName||t},h(e,y,c,b))})}else m&&(e=r.default.Children.map(m,function(e,t){return e?((0,u.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),(0,l.cloneElement)(e,{separator:n,key:t})):e}));return r.default.createElement("div",{className:(0,f.default)(a,o),style:i},e)}}]),t}(r.default.Component);t.default=m,m.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},m.propTypes={prefixCls:s.default.string,separator:s.default.node,routes:s.default.array,params:s.default.object,linkRender:s.default.func,nameRender:s.default.func},e.exports=t.default},1721:function(e,t,n){(e.exports=n(185)(!1)).push([e.i,"",""])},1723:function(e,t,n){"use strict";n(32),n(1724),n(680)}}]);