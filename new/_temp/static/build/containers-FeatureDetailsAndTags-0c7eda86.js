(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[7],{142:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),r=a(16),c=a.n(r),l=a(0),s=a.n(l),o=a(24),m=a(18),u=(a(301),a(216)),f=a(13),p=a(1),d=a(215),g=(a(302),a(303)),E=a.n(g),h=a(219),b=Object(o.b)(function(e){return{topicContentList:e.news.featureDetails.topicContentList,adImplant:e.multi.adImplant}})(function(e){var t=e.topicContentList,a=e.loadMore;return s.a.createElement("div",{className:"feature-topic-list-wrapper"},Object(p.n)(t.inforList)&&t.inforList.map(function(e,t){return s.a.createElement("div",{className:"feature-topic-list-item",key:t},s.a.createElement("a",{className:"item-left",title:e.title,href:e.url,target:"_blank"},e.newsCat&&""!==e.newsCat&&s.a.createElement("span",null,e.newsCat),s.a.createElement(d.SimpleImg,{applyAspectRatio:!0,width:220,height:160,placeholder:"#f6f8fa",src:Object(p.E)(e.coverPic,"pc"),alt:""}),1===e.contentType?s.a.createElement("img",{className:"videoImg",src:E.a}):null),s.a.createElement("div",{className:"item-right"},s.a.createElement("a",{className:"title-synopsis",title:e.title,href:e.url,target:"_blank"},s.a.createElement("h5",null,e.authCat&&""!==e.authCat&&s.a.createElement("span",null,e.authCat),e.title),s.a.createElement("p",null,e.synopsis&&e.synopsis.replace("【GPT】",""))),s.a.createElement("div",{className:"relate-info"},s.a.createElement("div",{className:"author-time"},s.a.createElement("time",null,Object(p.k)(e.publishTime,e.serverTime&&""!==e.serverTime&&e.serverTime))))))}),s.a.createElement("div",{className:"no-feature",style:{display:0===t.inforList.length?"block":""}},"暂无内容"),e.isMore?s.a.createElement(h.a,{onClick:a,dataleng:t.inforList.length,style:{display:0===t.inforList.length||t.currentPage===t.pageCount?"none":"block"}}):"")}),v=a(29);t.default=Object(o.b)(function(e){var t=e.multi.news;return{hotNewsList:t.hotNewsList,featureList:t.featureList,featureDetails:e.news.featureDetails}})(function(e){var t=e.hotNewsList,a=e.featureList,n=e.featureDetails,r=e.dispatch,o=e.match,d=e.pageType,g=Object(m.c)().t,E=Object(l.useState)({currentPage:2,pageSize:15,id:o.params.featureId}),h=c()(E,2),N=h[0],y=h[1],w=Object(l.useState)(!0),L=c()(w,2),k=L[0],_=L[1];Object(l.useEffect)(function(){o.params.featureId||_(!1)},[]);var O=Object(l.useCallback)(function(){r(Object(v.b)(N,"isMore")).then(function(e){if(1===e.code){console.log(e);var t=e.obj.topicContentList.currentPage,a=e.obj.topicContentList.inforList;Object(p.n)(a)&&0!==a.length?y(i()({},N,{currentPage:t+1})):f.a.info("暂无更多新闻")}else f.a.info(e.msg)}).catch(function(e){console.log(e),f.a.info("获取关键字或专题新闻列表错误")})},[N]),j=Object(l.useState)(a),C=c()(j,2),S=C[0],I=C[1];return Object(l.useEffect)(function(){var e=S.inforList.filter(function(e){return e.topic.id!==n.topic.id});a.inforList=e,I(a.inforList)},[a]),[s.a.createElement("div",{className:"tags-feature-banner",key:"tagsFeatureBanner"},"tags"===d&&s.a.createElement("div",{className:"tags-banner"}),"feature"===d&&s.a.createElement("div",{className:"feature-banner",style:{background:"url(".concat(n.topic.pcBackImage,") no-repeat center top"),backgroundSize:"auto 300px"}},s.a.createElement("div",{className:"feature-title"},s.a.createElement("h1",null,0===n.topic.titleDisplayFlag?"":n.topic.topicName)),s.a.createElement("div",{className:"feature-desc"},s.a.createElement("h5",null,g("feature_desc"),":"),s.a.createElement("p",null,n.topic.description)))),s.a.createElement("div",{className:"layout-main tags-feature-wrapper",key:"tagsFeature"},s.a.createElement("div",{className:"layout-left"},s.a.createElement(b,{loadMore:O,isMore:k})),s.a.createElement("div",{className:"layout-right"},s.a.createElement(u.a,{data:a.inforList,title:g("feature_recommended_topic"),feature:!0}),s.a.createElement(u.a,{data:t.inforList,title:g("feature_hot_news")})))]})},212:function(e,t,a){"use strict";var n=a(4),i=a.n(n),r=a(0),c=a.n(r);a(214);t.a=function(e){var t=e.id,a=e.children,n=e.title,r=e.firstItem,l=e.titleBtn,s=e.titleStyle,o=e.onClick;return c.a.createElement("div",{id:t||"",className:"layout-content-right-item ".concat(r?"first-item":"")},n&&c.a.createElement("div",{className:"right-item-title"},c.a.createElement("h5",{style:s&&i()({},s)},n),c.a.createElement("div",{className:"button",style:{display:l&&""!==l?"flex":"none"},onClick:o&&o},l)),c.a.createElement("div",{className:"right-item-content"},a))}},213:function(e,t,a){e.exports=a.p+"feature-backImg-d818821e.png"},214:function(e,t,a){},216:function(e,t,a){"use strict";var n=a(39),i=a.n(n),r=a(0),c=a.n(r),l=a(215),s=a(17),o=(a(217),a(212)),m=a(1),u=a(213),f=a.n(u),p=function(e){var t=e.title,a=e.id,n=e.coverPic,i=e.author,r=e.rank,s=e.tags,o=m.y.news("/".concat(a,".html"));return c.a.createElement("div",{className:"right-news-item"},c.a.createElement("a",{className:"left",title:t,href:o,target:"_blank"},c.a.createElement("span",null,r+1),c.a.createElement(l.SimpleImg,{applyAspectRatio:!0,width:90,height:65,placeholder:"#f6f8fa",src:Object(m.E)(n,"pc"),alt:s})),c.a.createElement("div",{className:"right"},c.a.createElement("a",{title:t,href:o,target:"_blank"},t),c.a.createElement("time",null,i)))};p.propTypes={title:s.string.isRequired,id:s.string.isRequired,coverPic:s.string.isRequired,publishTime:s.number.isRequired,author:s.string.isRequired};var d=function(e){var t=e.id,a=e.topicName,n=e.newSmallPcImgSrc,i=e.pcImgSrc,r=e.createTime,s=e.serverTime,o=m.y.news("/feature/".concat(t));return c.a.createElement("div",{className:"right-news-item"},c.a.createElement("a",{className:"left",title:a,href:o,target:"_blank"},c.a.createElement(l.SimpleImg,{applyAspectRatio:!0,width:90,height:65,placeholder:"#f6f8fa",src:n||i||f.a})),c.a.createElement("div",{className:"right"},c.a.createElement("a",{title:a,href:o,target:"_blank"},a),c.a.createElement("time",null,Object(m.k)(r,s&&""!==s&&s))))};d.propTypes={topicName:s.string.isRequired,id:s.string.isRequired,createTime:s.number.isRequired};t.a=function(e){return c.a.createElement(o.a,{id:e.id||"",titleBtn:c.a.createElement("a",{className:"more-icon",style:{display:!1===e.ismore?"none":"block"},href:e.feature?m.y.news("/feature"):m.y.news(),target:"_blank"}),title:e.title},c.a.createElement("div",{className:"right-news-wrapper"},Object(m.n)(e.data)&&(0!==e.data.length?e.data.map(function(t,a){return e.feature?c.a.createElement(d,i()({key:t.topic.id},t.topic)):c.a.createElement(p,i()({key:t.id,rank:a},t))}):c.a.createElement("div",{className:"no-news"},"暂无内容"))))}},217:function(e,t,a){},219:function(e,t,a){"use strict";var n=a(39),i=a.n(n),r=a(0),c=a.n(r);a(220);t.a=function(e){return c.a.createElement("a",i()({},e,{className:"load-more-btn"}),"加载更多")}},220:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){e.exports=a.p+"video-btn-417b2428.png"}}]);
//# sourceMappingURL=containers-FeatureDetailsAndTags-0c7eda86.js.map