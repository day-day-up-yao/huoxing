(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[33],{1101:function(e,t,a){"use strict";a.d(t,"c",function(){return p}),a.d(t,"a",function(){return b}),a.d(t,"b",function(){return E});var n=a(0),c=a.n(n),r=a(27),s=a(23),l=(a(1139),a(1112)),i=a.n(l),o=a(1113),u=a.n(o),m=a(29),h=a(17),d=a(1),f=a(109),p=(Object(r.b)(function(e){return{userInfo:e.multi.login.userInfo.info}})(function(e){var t=e.authorInfo,a=e.userInfo,r=e.attentionSuccessed,l=e.className,i=e.dispatch,o=Object(s.c)().t,u=Object(n.useCallback)(function(){if(Object(m.b)(a.passportId,i)){var e=1===t.ifCollect?"delete":"add",n=t.passportId;Object(f.a)({passportid:a.passportId,token:a.token,authorId:n},e).then(function(e){1===e.code?r():h.a.info(e.msg)}).catch(function(e){throw h.a.info("关注作者错误"),e})}},[a,t]);return c.a.createElement("button",{onClick:u,className:"attention-author-button ".concat(1===t.ifCollect?"active":""," ").concat(l||"")},1===t.ifCollect?o("guan_zhu_ed"):o("guan_zhu"))}),function(e){var t=e.authorInfo,a=e.iconHide,n=e.className,r=Object(s.c)().t,l=null,o=r("author_info_ordinary_user");switch(parseInt(t.vGrade)){case 0:o=r("author_info_ordinary_user");break;case 1:l=i.a,o="MarsBit ".concat(r("author_info_zl_self"));break;case 2:l=u.a,o="MarsBit ".concat(r("author_info_zl_media"));break;case 3:l=u.a,o="MarsBit ".concat(r("author_info_zl_enterprise"));break;default:o=r("author_info_ordinary_user")}return c.a.createElement("a",{href:d.B.main("/userCenter/".concat(t.passportId)),title:t.nickName,className:"author-info-avatar ".concat(n||""),target:"_blank"},c.a.createElement("span",{className:"avatar-img"},c.a.createElement("img",{className:"img-clear-blur",src:t.iconUrl,alt:t.nickName})),l&&!a&&c.a.createElement("span",{title:o,className:"avatar-mark"},c.a.createElement("img",{className:"img-clear-blur",src:l,alt:t.nickName})))}),b=function(e){var t=e.authorInfo,a=e.className;return c.a.createElement("a",{href:d.B.main("/userCenter/".concat(t.passportId)),title:t.nickName,className:"author-info-user-name ".concat(a||""),target:"_blank"},t.nickName)},E=function(e){var t=e.authorInfo,a=e.className,n=Object(s.c)().t,r={display:"none"},l="";switch(parseInt(t.vGrade)){case 1:r={display:"block",color:"rgba(255, 123, 1, 1)",background:"rgba(255, 123, 1, 0.1)"},l=n("author_info_self");break;case 2:r={display:"block",color:"rgba(10, 127, 242, 1)",background:"rgba(10, 127, 242, 0.1)"},l=n("author_info_media");break;case 3:r={display:"block",color:"rgba(10, 127, 242, 1)",background:"rgba(10, 127, 242, 0.1)"},l=n("author_info_enterprise")}return c.a.createElement("div",{className:"author-info-user-type ".concat(a||""),style:r},l)}},1112:function(e,t,a){e.exports=a.p+"v-orange-ddf372b8.svg"},1113:function(e,t,a){e.exports=a.p+"v-blue-77c6a4e4.svg"},1139:function(e,t,a){},1185:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(23),s=a(27);a(1186);t.a=function(){var e=Object(r.c)().t,t=Object(s.e)(function(e){return{tagsData:e.home.tagsData}},s.c).tagsData;return c.a.createElement("div",{className:"right-tags",style:{display:t.length>0?"block":"none"}},c.a.createElement("a",{className:"right-tags-title"},e("hot_door_title")),c.a.createElement("div",{className:"right-tags-cont"},t&&t.map(function(e,t){return c.a.createElement("a",{style:{display:e.name?"flex":"none"},href:e.url,target:"_blank",title:e.name,key:t},e.name)})))}},1186:function(e,t,a){},1462:function(e,t,a){},1463:function(e,t,a){},1464:function(e,t,a){},1465:function(e,t,a){e.exports=a.p+"feature-backImg-d818821e.png"},1466:function(e,t,a){},1467:function(e,t,a){e.exports=a.p+"search-icon-5b5afaf1.png"},1468:function(e,t,a){},1469:function(e,t,a){},1470:function(e,t,a){},1471:function(e,t,a){},1472:function(e,t,a){},1473:function(e,t,a){},1474:function(e,t,a){},1476:function(e,t,a){},1477:function(e,t,a){},1478:function(e,t,a){},1479:function(e,t,a){},1480:function(e,t,a){e.exports=a.p+"search-no-38b4096c.png"},291:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=(a(1462),a(49)),l=a.n(s),i=a(1159),o=a(21),u=(a(1463),a(3)),m=a.n(u),h=(a(1464),function(e){var t=e.id,a=e.children,n=e.title,r=e.firstItem,s=e.titleBtn,l=e.titleStyle,i=e.onClick;return c.a.createElement("div",{id:t||"",className:"layout-content-right-item ".concat(r?"first-item":"")},n&&c.a.createElement("div",{className:"right-item-title"},c.a.createElement("h5",{style:l&&m()({},l)},n),c.a.createElement("div",{className:"button",style:{display:s&&""!==s?"flex":"none"},onClick:i&&i},s)),c.a.createElement("div",{className:"right-item-content"},a))}),d=a(1),f=a(1465),p=a.n(f),b=function(e){var t=e.title,a=e.id,n=e.coverPic,r=e.author,s=e.rank,l=e.tags,o=d.B.news("/".concat(a,".html"));return c.a.createElement("div",{className:"right-news-item"},c.a.createElement("a",{className:"left",title:t,href:o,target:"_blank"},c.a.createElement("span",null,s+1),c.a.createElement(i.SimpleImg,{applyAspectRatio:!0,width:90,height:65,placeholder:"#f6f8fa",src:Object(d.I)(n,"pc"),alt:l})),c.a.createElement("div",{className:"right"},c.a.createElement("a",{title:t,href:o,target:"_blank"},t),c.a.createElement("time",null,r)))};b.propTypes={title:o.string.isRequired,id:o.string.isRequired,coverPic:o.string.isRequired,publishTime:o.number.isRequired,author:o.string.isRequired};var E=function(e){var t=e.id,a=e.topicName,n=e.newSmallPcImgSrc,r=e.pcImgSrc,s=e.createTime,l=e.serverTime,o=d.B.news("/feature/".concat(t));return c.a.createElement("div",{className:"right-news-item"},c.a.createElement("a",{className:"left",title:a,href:o,target:"_blank"},c.a.createElement(i.SimpleImg,{applyAspectRatio:!0,width:90,height:65,placeholder:"#f6f8fa",src:n||r||p.a})),c.a.createElement("div",{className:"right"},c.a.createElement("a",{title:a,href:o,target:"_blank"},a),c.a.createElement("time",null,Object(d.k)(s,l&&""!==l&&l))))};E.propTypes={topicName:o.string.isRequired,id:o.string.isRequired,createTime:o.number.isRequired};var g=function(e){return c.a.createElement(h,{id:e.id||"",titleBtn:c.a.createElement("a",{className:"more-icon",style:{display:!1===e.ismore?"none":"block"},href:e.feature?d.B.news("/feature"):d.B.news(),target:"_blank"}),title:e.title},c.a.createElement("div",{className:"right-news-wrapper"},Object(d.n)(e.data)&&(0!==e.data.length?e.data.map(function(t,a){return e.feature?c.a.createElement(E,l()({key:t.topic.id},t.topic)):c.a.createElement(b,l()({key:t.id,rank:a},t))}):c.a.createElement("div",{className:"no-news"},"暂无内容"))))},v=a(1185),N=a(22),y=a.n(N),O=a(20),k=(a(1466),a(1467)),w=a.n(k),j=function(){var e=Object(O.f)().searchQuery,t=Object(n.useState)(e),a=y()(t,2),r=a[0],s=a[1],l=Object(n.useCallback)(function(e){s(e.target.value)},[]),i=Object(n.useCallback)(function(){""!==Object(d.J)(r)&&(window.location.href=d.B.main("/search/".concat(Object(d.h)(r))))},[r]),o=Object(n.useCallback)(function(e){if(e.keyCode&&13!==e.keyCode)return!1;i()},[r]);return c.a.createElement("div",{className:"search-top"},c.a.createElement("div",{className:"search-top-title"},"关键字：",c.a.createElement("span",null,e)),c.a.createElement("div",{className:"search-top-input-wrap"},c.a.createElement("div",{className:"search-top-input-box"},c.a.createElement("img",{className:"search-top-input-icon",src:w.a}),c.a.createElement("input",{className:"search-top-input",value:r,onChange:function(e){return l(e)},onKeyDown:function(e){return o(e)}})),c.a.createElement("div",{className:"search-top-btn",onClick:function(){return i()}},"搜索")))},C=(a(1468),a(113)),L=a(56),_=(a(1469),Object(L.a)().searchTabType),I=function(e){var t=e.pageType,a=e.setPageType;return c.a.createElement("div",{className:"search-top-type"},_.filter(function(e){return 99!==e.type}).map(function(e,n){return c.a.createElement("div",{className:"search-top-type-item ".concat(t===e.type?"select":""),onClick:function(){return a(e.type)},key:n},e.label,t===e.type&&c.a.createElement("div",{className:"search-top-type-line"}))}))},T=(a(1470),a(1471),a(1472),a(1101)),S=Object(L.a)().searchKeyColor,D=function(e){var t=e.authorInfo,a=e.searchQuery,r=t.keywords&&Object(d.n)(t.keywords)&&t.keywords.length>0?t.keywords:a,s=Object(n.useCallback)(function(){window.open(d.B.main("/userCenter/".concat(t.passportId)))},[t]);return c.a.createElement("div",{className:"search-author-item",onClick:function(){return s()}},c.a.createElement(T.c,{className:"search-author-item-head",authorInfo:t}),c.a.createElement("div",{className:"search-author-item-name",dangerouslySetInnerHTML:{__html:Object(d.z)(t.nickName,r,S)}}),t.introduce&&""!==t.introduce&&c.a.createElement("div",{className:"search-author-item-text",dangerouslySetInnerHTML:{__html:Object(d.z)(t.introduce,r,S)}}))},x=function(e){var t=Object(r.e)(function(e){return{authorListData:e.search.authorListData}},r.c).authorListData,a=Object(O.f)().searchQuery,s=e.pageType,l=Object(n.useCallback)(function(e){return parseInt(e)>9999?"9999+":e},[]);return c.a.createElement("div",{className:"search-author-list"},0!==s&&c.a.createElement("div",{className:"search-author-list-title"},"作者",c.a.createElement("span",{className:"search-author-list-title-num"},"(",l(t.recordCount),")")),c.a.createElement("div",{className:"search-author-list-wrap"},t&&t.inforList.length>0&&t.inforList.map(function(e,t){return 0===s&&t<5||0!==s?c.a.createElement(D,{authorInfo:e,searchQuery:a,key:t}):null})))},H=(a(1473),a(1474),function(e){var t=e.src,r=e.show,s=e.close,l=Object(n.useState)(!1),i=y()(l,2),o=i[0],u=i[1],h=Object(n.useState)({height:"auto",width:"100%"}),f=y()(h,2),p=f[0],b=f[1];Object(n.useEffect)(function(){if(t){var e=new Image;e.src=t,e.onload=function(){var t=e.height,a=e.width;if(Object(d.u)())b(a>=t&&(a>=1e3&&1e3*t/a<=600||a<1e3&&t<=600)?{height:"auto",maxWidth:"1000px"}:{maxHeight:"600px",width:"auto"});else{var n=.8*Object(d.N)().height,c=Object(d.N)().width;b(a>=c&&t*c/a<=n||a<c&&t<=n?{height:"auto",width:"100%"}:{height:n,width:"auto"})}u(!0)}}},[t]);var E=Object(n.useState)("pc"),g=y()(E,2),v=g[0],N=g[1];return Object(n.useEffect)(function(){if(!Object(d.u)()){N("mobile");var e=a(1475),t=document.getElementById("imgPopContent"),n=new e(t,{});n.get("pinch").set({enable:!0});var c=0,r=0,s=1,l=1,i=0,o=0,u=0,m=0,h="",f=t;n.on("doubletap pan pinch panend pinchend",function(e){if("doubletap"===e.type){h="translate3d(0, 0, 0) scale3d(2, 2, 1)",s=2,l=2;try{"matrix(1, 0, 0, 1, 0, 0)"!==window.getComputedStyle(f,null).getPropertyValue("-webkit-transform").toString()&&(h="translate3d(0, 0, 0) scale3d(1, 1, 1)",s=1,l=1)}catch(e){console.log(e)}f.style.webkitTransform=h,h=""}1!==s&&(c=i+e.deltaX,r=o+e.deltaY,u=Math.ceil((s-1)*f.clientWidth/2),m=Math.ceil((s-1)*f.clientHeight/2),c>u&&(c=u),c<-u&&(c=-u),r>m&&(r=m),r<-m&&(r=-m)),"pinch"===e.type&&(s=Math.max(.999,Math.min(l*e.scale,4))),"pinchend"===e.type&&(l=s),"panend"===e.type&&(i=c<u?c:u,o=r<m?r:m),1!==s&&(h="translate3d("+c+"px,"+r+"px, 0) scale3d("+s+", "+s+", 1)"),h&&(f.style.webkitTransform=h)})}},[]),c.a.createElement("div",{className:"img-popup-wrapper ".concat(v),style:{display:r&&o?"flex":"none"}},c.a.createElement("div",{className:"img-position",onClick:s},c.a.createElement("div",{id:"imgPopContent",className:"img-content ".concat("pc"===v?"beautify-scroll":"")},t&&c.a.createElement("img",{src:t,style:m()({},p),alt:"img-viewer"})),c.a.createElement("a",{className:"close-icon",onClick:s})),c.a.createElement("div",{className:"img-popup-mask",onClick:s}))});H.propTypes={show:o.bool.isRequired,close:o.func.isRequired};var A=H,B=(a(1476),Object(L.a)().searchKeyColor),R=function(e){var t=e.id,a=e.title,n=e.content,r=e.tag,s=e.url,l=e.images,i=e.imagesRemark,o=e.createdTime,u=e.keywords,m=e.searchQuery,h=e.showListImg,f=u&&Object(d.n)(u)&&u.length>0?u:m;return c.a.createElement("div",{className:"search-flash-item"},c.a.createElement("div",{className:"search-flash-item-wrap"},c.a.createElement("a",{target:"_blank",href:d.B.news("/flash/".concat(t,".html"))},c.a.createElement("h1",{className:"".concat(2===parseInt(r)?"news-title import":"news-title"),dangerouslySetInnerHTML:{__html:Object(d.z)(a,f,B)}})),c.a.createElement("h2",{className:"news-detail",dangerouslySetInnerHTML:{__html:Object(d.z)(n,f,B)}},s&&c.a.createElement("a",{rel:"nofollow",title:"查看原文",href:s,style:"color: #0a7ff2",target:"_blank"}," 「查看原文」")),l&&c.a.createElement("img",{style:{cursor:"pointer"},alt:"".concat(i||a),onClick:h,src:l}),c.a.createElement("div",{className:"time-left"},Object(d.k)(o))))},P=function(e){var t=Object(r.e)(function(e){return{livesListData:e.search.livesListData}},r.c).livesListData,a=Object(O.f)().searchQuery,s=e.pageType,i=Object(n.useState)(!1),o=y()(i,2),u=o[0],m=o[1],h=Object(n.useState)(""),d=y()(h,2),f=d[0],p=d[1],b=Object(n.useCallback)(function(e){p(e.target.getAttribute("src")),m(!0)},[]),E=Object(n.useCallback)(function(e){return parseInt(e)>9999?"9999+":e},[]);return c.a.createElement("div",{className:"search-flash-list"},0!==s&&c.a.createElement("div",{className:"search-flash-list-title"},"快讯",c.a.createElement("span",{className:"search-flash-list-title-num"},"(",E(t.recordCount),")")),t&&t.inforList.length>0&&t.inforList.map(function(e,t){return 0===s&&t<5||0!==s?c.a.createElement(R,l()({},e,{searchQuery:a,showListImg:b,key:t})):null}),c.a.createElement(A,{close:function(){return m(!u)},show:u,src:f}))},M=(a(1477),a(1478),Object(L.a)().searchKeyColor),z=function(e){var t=e.id,a=e.title,n=e.coverPic,r=e.synopsis,s=e.author,l=e.publishTime,i=e.keywords,o=e.searchQuery,u=i&&Object(d.n)(i)&&i.length>0?i:o;return c.a.createElement("div",{className:"search-news-item"},c.a.createElement("a",{title:a,target:"_blank",href:d.B.news("/".concat(t,".html"))},c.a.createElement("div",{className:"list-left"},c.a.createElement("img",{alt:a,src:n&&JSON.parse(n).pc?JSON.parse(n).pc:""})),c.a.createElement("div",{className:"list-right",style:{width:"560px"}},c.a.createElement("h1",{className:"headline",dangerouslySetInnerHTML:{__html:Object(d.z)(a,u,M)}}),c.a.createElement("h3",{className:"details",dangerouslySetInnerHTML:{__html:Object(d.z)(r.replace("【GPT】",""),u,M)}}))),c.a.createElement("div",{className:"list-bottom index-mian clearfix"},c.a.createElement("p",{className:"name"},s),c.a.createElement("p",{className:"lock-time"},Object(d.k)(l))),c.a.createElement("div",{className:"shadow"}))},q=function(e){var t=Object(r.e)(function(e){return{newsListData:e.search.newsListData}},r.c).newsListData,a=Object(O.f)().searchQuery,n=e.pageType;return c.a.createElement("div",{className:"search-news-list"},0!==n&&c.a.createElement("div",{className:"search-news-list-title"},"新闻"),t&&t.inforList.length>0&&t.inforList.map(function(e,t){return 0===n&&t<5||0!==n?c.a.createElement(z,l()({},e,{searchQuery:a,key:t})):null}))},Q=Object(L.a)().searchTabTypeEnum,W=function(e){var t=Object(r.e)(function(e){return{authorListData:e.search.authorListData,livesListData:e.search.livesListData,newsListData:e.search.newsListData}},r.c),a=t.authorListData,s=t.livesListData,l=t.newsListData,i=e.setPageType,o=Object(n.useCallback)(function(e){return parseInt(e)>9999?"9999+":e},[]);return c.a.createElement("div",{className:"search-all-list"},l.recordCount>0&&c.a.createElement("div",{className:"search-all-list-title",style:{marginBottom:"20px"}},"新闻"),l.recordCount>0&&c.a.createElement(q,{pageType:0}),l.totalIndex>1&&c.a.createElement("div",{className:"search-all-list-btn",onClick:function(){Object(d.c)(0),i(Q.NEWS)}},"查看更多新闻"),s.recordCount>0&&c.a.createElement("div",{className:"search-all-list-title",style:{marginBottom:"20px"}},"快讯",c.a.createElement("span",{className:"search-all-list-title-num"},"(",o(s.recordCount),")")),s.recordCount>0&&c.a.createElement(P,{pageType:0}),s.totalIndex>1&&c.a.createElement("div",{className:"search-all-list-btn",onClick:function(){Object(d.c)(0),i(Q.FLASH)}},"查看更多快讯"),a.recordCount>0&&c.a.createElement("div",{className:"search-all-list-title",style:{marginBottom:"20px"}},"作者",c.a.createElement("span",{className:"search-all-list-title-num"},"(",o(a.recordCount),")")),a.recordCount>0&&c.a.createElement(x,{pageType:0}),a.totalIndex>1&&c.a.createElement("div",{className:"search-all-list-btn",onClick:function(){Object(d.c)(0),i(Q.AUTHOR)}},"查看更多作者"))},U=(a(1479),a(1480)),K=a.n(U),F=function(e){return c.a.createElement("div",{className:"no-data"},c.a.createElement("div",{className:"no-data-wrap"},c.a.createElement("img",{className:"no-data-img",src:K.a}),c.a.createElement("div",{className:"no-data-title"},"暂无相关内容"),c.a.createElement("div",{className:"no-data-text"},"请修改或者尝试其他搜索词")))},G=Object(L.a)(),J=G.searchTabTypeEnum,X=G.searchSortTypeEnum,V=function(){var e=Object(O.f)().searchQuery,t=Object(r.e)(function(e){return{authorListData:e.search.authorListData,livesListData:e.search.livesListData,newsListData:e.search.newsListData}},r.c),a=t.authorListData,s=t.livesListData,l=t.newsListData;console.log(l);var i=Object(r.d)(),o=Object(n.useState)(0),u=y()(o,2),h=u[0],f=u[1],p=Object(n.useState)(1),b=y()(p,2),E=b[0],g=b[1],v=Object(n.useState)(X.DESC),N=y()(v,2),k=N[0],w=N[1],j=Object(n.useState)(!1),L=y()(j,2),_=L[0],T=L[1],S=Object(n.useState)(!1),D=y()(S,2),H=D[0],A=D[1],B=Object(n.useCallback)(function(t){T(!0);var a={q:e,page:1,pageSize:20,type:h===J.EXCELLENTNEWS?J.NEWS:h,excellentFlag:h===J.EXCELLENTNEWS?1:0};t&&(a=m()({},a,t)),i(Object(C.b)(a)).then(function(e){if(1===e.code){switch(h){case J.ALL:e.obj.News.recordCount>0||e.obj.Lives.recordCount>0||e.obj.Author.recordCount,A(!1);break;case J.NEWS:case J.FLASH:case J.AUTHOR:e.obj.recordCount,A(!1);break;default:A(!1)}T(!1)}else T(!1)})},[h,k,e]);Object(n.useEffect)(function(){var e=Object(d.O)(function(e){if("down"!==e||_||h===J.ALL)return!1;var t=1,n=parseInt(E)+1;switch(h){case J.FLASH:t=s.totalIndex;break;case J.NEWS:t=l.totalIndex;break;case J.AUTHOR:t=a.totalIndex}if(!(t<n)){var c=document.getElementById("searchPage");Object(d.g)(c).height<Object(d.G)().top+Object(d.N)().height&&(B({page:n}),g(n))}});return function(){window.removeEventListener("scroll",e,!1)}},[_,h,E]),Object(n.useEffect)(function(){g(1),w(X.DESC)},[h]),Object(n.useEffect)(function(){B({page:1}),g(1)},[k]);var R=Object(n.useCallback)(function(e){switch(e){case J.ALL:return l.recordCount>0||s.recordCount>0||a.recordCount>0?c.a.createElement(W,{setPageType:f}):c.a.createElement(F,null);case J.NEWS:return l.recordCount>0?c.a.createElement(q,null):c.a.createElement(F,null);case J.FLASH:return s.recordCount>0?c.a.createElement(P,null):c.a.createElement(F,null);case J.AUTHOR:return a.recordCount>0?c.a.createElement(x,null):c.a.createElement(F,null);default:return c.a.createElement(W,null)}},[l,s,a]);return c.a.createElement("div",{className:"search-bottom-list",id:"searchPage"},c.a.createElement(I,{pageType:h,setPageType:f}),h!==J.AUTHOR&&H?c.a.createElement(TopSort,{sortType:k,setSortType:w,pageType:h}):null,R(h))};t.default=function(){var e=Object(r.e)(function(e){return{hotNews24H:e.multi.news.hot24HNewsList.inforList}},r.c).hotNews24H;return c.a.createElement("div",{className:"search-page"},c.a.createElement(j,null),c.a.createElement("div",{className:"search-page-bottom-wrap"},c.a.createElement("div",{className:"search-page-bottom-left"},c.a.createElement(V,null)),c.a.createElement("div",{className:"search-page-bottom-right"},c.a.createElement(v.a,null),c.a.createElement(g,{id:"interestNews",data:e,title:"24H热门新闻"}))))}}}]);
//# sourceMappingURL=containers-Search-4340ff1b.js.map