(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1524:function(e,t,n){"use strict";n.r(t);n(1381);var r=n(1382),a=n.n(r),o=(n(1383),n(1384)),i=n.n(o),c=(n(247),n(183)),s=n.n(c),l=(n(361),n(20)),u=n.n(l),f=(n(1403),n(1404)),p=n.n(f),m=n(0),y=n.n(m),h=n(246),b=n(1605),g=(n(683),n(684)),v=n.n(g),d=(n(679),n(249)),O=n.n(d),S=(n(1387),n(50)),E=n.n(S),w=n(48),k=(n(1376),n(1377)),j=n.n(k);n(1693);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T={1:"帖子图片",2:"评论图片"},D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,C(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,m["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.isShow,n=e.imgSrc,r=e.onClose,o=e.type,c=e.modalInfo;return y.a.createElement("div",{className:"img-show"},y.a.createElement(j.a,{className:"img-main",title:"".concat(T[o],"预览"),visible:t,footer:null,onCancel:r,width:800},y.a.createElement(a.a,null,y.a.createElement(i.a,{span:15},y.a.createElement("img",{src:n})),y.a.createElement(i.a,{span:8,offset:1},y.a.createElement("p",null,"评论人账号：",c.userName?c.userName:""),y.a.createElement("p",null,"评论人昵称：",c.nickName),y.a.createElement("p",null,"评论人时间：",c.time)))))}}])&&I(n.prototype,r),o&&I(n,o),t}(),x=n(1671);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=W(this,J(t).call(this))).state={currPage:1,pageSize:10,totalCount:0,isShow:!1,imgUrl:"",modalInfo:{},chkObj:{}},e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,m["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){this.getList()}},{key:"componentWillReceiveProps",value:function(e){e.isSearch&&e.isSearch!==this.props.isSearch&&this.getList()}},{key:"chkImg",value:function(e,t,n){var r=this.props.dispatch;r(Object(x.a)({isChk:e.target.checked},n)),r(Object(x.b)(t,e.target.checked))}},{key:"getList",value:function(e){var t=this,n=this.props.dispatch,r={page:this.state.currPage};r=e?U({},r,e):r,n(Object(x.d)(r,function(e){t.setState({pageSize:e.pageSize,totalCount:e.totalCount})}))}},{key:"changePage",value:function(e){this.setState({currPage:e}),this.getList({page:e})}},{key:"choseImgs",value:function(e,t,n){var r=this.props.selectData,a=this.state.chkObj,o=a[e]?a[e]:[];if(n)o=o.length?[].concat(L(o),["".concat(t)]):["".concat(t)];else{var i=o.indexOf(t);o=[].concat(L(o.slice(0,i)),L(o.slice(i+1)))}if(o.length){var c=z({},e,o);this.setState({chkObj:U({},a,c)}),r(U({},a,c))}else delete a[e],this.setState({chkObj:U({},a)}),r(a)}},{key:"isChk",value:function(e,t){var n=this.state.chkObj;return!n[e]||-1===n[e].indexOf(t)}},{key:"render",value:function(){var e=this,t=this.props.list;return y.a.createElement("div",null,y.a.createElement("div",{className:"img-review-main clearfix"},y.a.createElement("div",{className:"page-box contain"},y.a.createElement("div",{className:"items"},t.length?t.map(function(t,n){return y.a.createElement("div",{key:n,className:"item",onClick:function(){e.choseImgs(t.replyId,t.pictureUrl,e.isChk(t.replyId,t.pictureUrl))}},y.a.createElement("div",{className:"item-img"},y.a.createElement("img",{src:t.pictureUrl}),y.a.createElement(E.a,{className:"eye",type:"eye-o",onClick:function(n){n.nativeEvent.stopImmediatePropagation(),n.stopPropagation(),e.setState({isShow:!0,imgUrl:t.pictureUrl,modalInfo:{userName:t.userName,nickName:t.nickName,time:Object(w.w)(t.replyTime)}})}})),y.a.createElement("div",{className:"check-box"},y.a.createElement(O.a,{checked:!e.isChk(t.replyId,t.pictureUrl)})))}):y.a.createElement("div",{className:"no-data"},y.a.createElement("i",{className:"iconfont icon-kong"}),y.a.createElement("span",null,"暂无评论图片！")))),y.a.createElement("div",{className:"pagination"},y.a.createElement(v.a,{current:this.state.currPage,total:this.state.totalCount,pageSize:this.state.pageSize,onChange:function(t){return e.changePage(t)}}))),y.a.createElement(D,{type:"2",modalInfo:this.state.modalInfo,isShow:this.state.isShow,imgSrc:this.state.imgUrl,onClose:function(){return e.setState({isShow:!1})}}))}}])&&R(n.prototype,r),a&&R(n,a),t}(),K=Object(h.connect)(function(e){return{list:e.imgsInfo.ReviewList}})(Q);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){G(e,t,n[t])})}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=V(this,X(t).call(this))).state={currPage:1,pageSize:10,totalCount:0,isShow:!1,imgUrl:"",modalInfo:{},chkObj:{}},e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,m["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){this.getList()}},{key:"componentWillReceiveProps",value:function(e){e.isSearch&&e.isSearch!==this.props.isSearch&&this.getList()}},{key:"getList",value:function(e){var t=this,n=this.props.dispatch,r={page:this.state.currPage};r=e?F({},r,e):r,n(Object(x.c)(r,function(e){t.setState({pageSize:e.pageSize,totalCount:e.totalCount})}))}},{key:"changePage",value:function(e){this.setState({currPage:e}),this.getList({page:e})}},{key:"formatImgs",value:function(e){return e?e.split(","):[]}},{key:"choseImgs",value:function(e,t,n){var r=this.props.selectData,a=this.state.chkObj,o=a[e]?a[e]:[];if(n)o=o.length?[].concat(B(o),["".concat(t)]):["".concat(t)];else{var i=o.indexOf(t);o=[].concat(B(o.slice(0,i)),B(o.slice(i+1)))}if(o.length){var c=G({},e,o);this.setState({chkObj:F({},a,c)}),r(F({},a,c))}else delete a[e],this.setState({chkObj:F({},a)}),r(a)}},{key:"isChk",value:function(e,t){var n=this.state.chkObj;return!n[e]||-1===n[e].indexOf(t)}},{key:"render",value:function(){var e=this,t=this.props.list;return y.a.createElement("div",null,y.a.createElement("div",{className:"img-post-main clearfix"},y.a.createElement("div",{className:"contain"},t.length?t.map(function(t,n){return y.a.createElement("div",{key:n,className:"post-row"},y.a.createElement("div",{className:"left"},y.a.createElement("p",{className:"blue-color"},Object(w.w)(t.createTime)),y.a.createElement("h4",null,t.title),y.a.createElement("p",null,t.nickName)),y.a.createElement("div",{className:"items"},e.formatImgs(t.pictureUrl).map(function(n,r){return y.a.createElement("div",{key:r,className:"item",onClick:function(){e.choseImgs(t.postsId,n,e.isChk(t.postsId,n))}},y.a.createElement("div",{className:"item-img"},y.a.createElement("img",{src:n}),y.a.createElement(E.a,{className:"eye",type:"eye-o",onClick:function(r){r.nativeEvent.stopImmediatePropagation(),r.stopPropagation(),e.setState({isShow:!0,imgUrl:n,modalInfo:{userName:t.userName,nickName:t.nickName,time:Object(w.w)(t.createTime)}})}})),y.a.createElement("div",{className:"check-box"},y.a.createElement(O.a,{checked:!e.isChk(t.postsId,n)})))})))}):y.a.createElement("div",{className:"no-data"},y.a.createElement("i",{className:"iconfont icon-kong"}),y.a.createElement("span",null,"暂无图片帖子！"))),y.a.createElement("div",{className:"pagination"},y.a.createElement(v.a,{current:this.state.currPage,total:this.state.totalCount,pageSize:this.state.pageSize,onChange:function(t){return e.changePage(t)}}))),y.a.createElement(D,{type:"1",modalInfo:this.state.modalInfo,isShow:this.state.isShow,imgSrc:this.state.imgUrl,onClose:function(){return e.setState({isShow:!1})}}))}}])&&H(n.prototype,r),a&&H(n,a),t}(),$=Object(h.connect)(function(e){return{list:e.imgsInfo.postList}})(Z);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ce=p.a.TabPane,se=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=ae(this,oe(t).call(this))).state={ley:"",type:"post",isSearch:!1,chkData:{}},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,m["Component"]),n=t,(r=[{key:"selectData",value:function(e){this.setState({chkData:e})}},{key:"replace",value:function(){var e=this,t=this.state,n=t.chkData,r=t.type,a="post"===r?"/image/replacePostPic":"/image/replaceReplyPic",o=this.formatData(n,r);if(o.length){var i=ne({},r,o);this.props.dispatch(Object(x.e)(i,a,function(){e.setState({isSearch:!0})}))}else u.a.warning("请选择图片！")}},{key:"formatData",value:function(e,t){for(var n=[],r="post"===t?"postsId":"replyId",a=0,o=Object.entries(e);a<o.length;a++)for(var i=te(o[a],2),c=i[0],s=i[1],l=0;l<s.length;l++){var u;n.push((ne(u={},r,c),ne(u,"pictureUrl",s[l]),u))}return n}},{key:"render",value:function(){var e=this;return y.a.createElement("div",null,y.a.createElement("div",{className:"img-main clearfix"},y.a.createElement(a.a,null,y.a.createElement(i.a,{className:"text-right",span:21,offset:3},y.a.createElement(s.a,{onClick:function(){return e.replace()},className:"mr10",type:"primary"},y.a.createElement(b.a,{type:"icon-img-replace"}),"批量替换"))),y.a.createElement(p.a,{activeKey:this.state.type,onChange:function(t){return e.setState({type:t})}},y.a.createElement(ce,{tab:"帖子图片鉴别",key:"post"},y.a.createElement($,{isSearch:this.state.isSearch,selectData:function(t){return e.selectData(t)}})),y.a.createElement(ce,{tab:"评论图片鉴别",key:"reply"},y.a.createElement(K,{isSearch:this.state.isSearch,selectData:function(t){return e.selectData(t)}})))))}}])&&re(n.prototype,r),o&&re(n,o),t}();t.default=Object(h.connect)(function(e){return{list:e.imgsInfo.list,selectData:e.imgsInfo.selectData}})(se)},1671:function(e,t,n){"use strict";(function(e){n.d(t,"d",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return f}),n.d(t,"a",function(){return m}),n.d(t,"b",function(){return y});n(361);var r=n(20),a=n.n(r),o=n(48),i=n(2);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(t,n){return function(r){Object(o.i)("POST","/image/replylist",c({},t,{appId:e.cookie("gameId")}),function(e){if(200===e.status){var t=e.data;r(p({ReviewList:t.datas})),n&&n(t)}else a.a.error(e.msg)})}},u=function(t,n){return function(r){Object(o.i)("POST","/image/postlist",c({},t,{appId:e.cookie("gameId")}),function(e){if(200===e.status){var t=e.data;r(p({postList:t.datas})),n&&n(t)}else a.a.error(e.msg)})}},f=function(t,n,r){return function(i){var s=JSON.stringify(c({appId:e.cookie("gameId")},t));Object(o.i)("POST",n,s,function(e){200===e.status?(a.a.success("替换成功"),r&&r()):a.a.error(e.msg)},{"Content-Type":"application/json"})}},p=function(e){return{type:i.Q.ADD_DATA,data:e}},m=function(e,t){return{type:i.Q.EDIT_LIST_ITEM,index:t}},y=function(e,t){return{type:i.Q.EDIT_SELECT_DATA,data:e,isChk:t}}}).call(this,n(97))},1693:function(e,t,n){var r=n(1759);"string"==typeof r&&(r=[[e.i,r,""]]);var a={transform:void 0};n(186)(r,a);r.locals&&(e.exports=r.locals)},1759:function(e,t,n){(e.exports=n(185)(!1)).push([e.i,"",""])}}]);