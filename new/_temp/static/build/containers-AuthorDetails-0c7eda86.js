(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a(238),i=(a(296),a(297)),s=a.n(i),m=function(e){return r.a.createElement("div",{className:"author-banner"},r.a.createElement("div",{className:"banner-cont"},r.a.createElement("div",{className:"author-introduce"},r.a.createElement("div",{className:"introduce-cont"},r.a.createElement("div",{className:"author-img"}),r.a.createElement("div",{className:"author-account"},r.a.createElement("div",{className:"attention-state not"},"关注"),r.a.createElement("h5",null,"腾讯科技 "),r.a.createElement("p",null,"腾讯网五大核心资讯频道之一，囊括Business Insider等多家美国顶尖科技媒体的独家中文版权。腾讯网五大核心资讯频道之一，囊括Business Insider等多家美国顶尖科技媒体的独家中文版权。"))),r.a.createElement("div",{className:"author-cont-type"},r.a.createElement("p",{className:"active"},"他的文章 ",r.a.createElement("span",null,"100")),r.a.createElement("p",null,"他的视频 ",r.a.createElement("span",null,"100")),r.a.createElement("p",null,"他的收藏 ",r.a.createElement("span",null,"100")))),r.a.createElement("div",{className:"banner-hxh"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:s.a,alt:""})))))},o=(a(240),a(6)),u=a.n(o),h=a(7),d=a.n(h),E=a(8),f=a.n(E),p=a(9),v=a.n(p),g=a(10),b=a.n(g),y=a(52),N=function(e){function t(){return u()(this,t),f()(this,v()(t).apply(this,arguments))}return b()(t,e),d()(t,[{key:"render",value:function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:"https://www.huoxing24.com/img/userCenter/achievement-1-1beeaf265f.png",alt:"h"}),"共发表 ",r.a.createElement("span",null,this.props.data.authorFollowCounts),"篇文章，",r.a.createElement("span",null,this.props.data.videoCounts),"部电影"),r.a.createElement("li",null,r.a.createElement("img",{src:"https://www.huoxing24.com/img/userCenter/achievement-2-20e377003d.png",alt:"h"}),"发布的文章总热度超过",r.a.createElement("span",null,this.props.data.newsHotCounts)),r.a.createElement("li",null,r.a.createElement("img",{src:"https://www.huoxing24.com/img/userCenter/achievement-3-bfaa114c91.png",alt:"h"}),"文章共获得",r.a.createElement("span",null,this.props.data.newsCommentCounts),"次评论"))}}]),t}(n.Component),w=Object(l.b)(function(e){return{data:e.author.authorAchieve}},{getAuthorAchieve:y.b})(N),k=function(e){function t(){return u()(this,t),f()(this,v()(t).apply(this,arguments))}return b()(t,e),d()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav_header clearfix"},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,"关注")," ",r.a.createElement("h3",null,this.props.data.newsCounts)),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,"粉丝")," ",r.a.createElement("h3",null,this.props.data.newsHotCounts)))}}]),t}(n.Component),C=Object(l.b)(function(e){return{data:e.author.authorAchieve}})(k),O=function(e){function t(e){var a;return u()(this,t),(a=f()(this,v()(t).call(this,e))).swSlide=function(){var e=function(){a.setState({arrList:a.state.newArr[a.state.flag]})};a.state.flag<a.state.newArrLength-1?a.setState({flag:a.state.flag+1},e):a.setState({flag:0},e)},a.state={flag:0,arrList:[],newArr:[],newArrLength:0},a}return b()(t,e),d()(t,[{key:"componentDidMount",value:function(){for(var e=this.state.newArr,t=this.props.authorData,a=Object.keys(t).length,n=0,r=0;r<a;r++)r%6==0&&0!==r&&(e.push(t.slice(n,r)),n=r),r+1===a&&e.push(t.slice(n,r+1));this.setState({newArr:e,arrList:e[0],newArrLength:e.length})}},{key:"render",value:function(){var e=this.state.arrList.map(function(e){return r.a.createElement("div",{className:"list-author",key:e.passportId},r.a.createElement("a",{target:"_blank",href:"#"},r.a.createElement("div",{className:"list-author-img"},r.a.createElement("img",{title:e.iconUrl,src:e.iconUrl,alt:e.iconUrl}),r.a.createElement("span",{className:"v-blue",title:"企业用户",style:{backgroundImage:"url("+e.shareLink+")"}})),r.a.createElement("div",{className:"list-author-text"},r.a.createElement("h3",{title:e.nickName},e.nickName),r.a.createElement("p",{title:e.introduce},e.introduce))))});return r.a.createElement("div",null,r.a.createElement("div",{className:"author-title clearfix"},r.a.createElement("h3",null,"MarsBit专栏作家"),r.a.createElement("div",{className:"next-page",tabIndex:"0",role:"button",onClick:this.swSlide},"换一批")),e)}}]),t}(n.Component),L=Object(l.b)(function(e){return{authorData:e.author.author.inforList}})(O),_=a(212),j=Object(l.b)()(function(e){return r.a.createElement("div",{className:"userContRight-nav"},r.a.createElement(_.a,{firstItem:!0},r.a.createElement(C,null)),r.a.createElement(_.a,null,r.a.createElement("div",{className:"nav_main clearfix"},r.a.createElement("h4",null,"个人成就"),r.a.createElement(w,null))),r.a.createElement(_.a,null,r.a.createElement("div",{className:"index-news-right clearfix"},r.a.createElement(L,null),r.a.createElement("a",{href:"/author",className:"author-more",target:"_black"},"查看更多"))))});a(298),t.default=Object(l.b)(function(e){return{authorNewsList:e.author.authorNewsList}})(function(e){return[r.a.createElement(m,{key:"authorBanner"}),r.a.createElement("div",{className:"layout-main",key:"authorContent"},r.a.createElement("div",{className:"layout-left"},r.a.createElement(c.a,null)),r.a.createElement("div",{className:"layout-right"},r.a.createElement(j,null)))]})},212:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(0),c=a.n(l);a(214);t.a=function(e){var t=e.id,a=e.children,n=e.title,l=e.firstItem,i=e.titleBtn,s=e.titleStyle,m=e.onClick;return c.a.createElement("div",{id:t||"",className:"layout-content-right-item ".concat(l?"first-item":"")},n&&c.a.createElement("div",{className:"right-item-title"},c.a.createElement("h5",{style:s&&r()({},s)},n),c.a.createElement("div",{className:"button",style:{display:i&&""!==i?"flex":"none"},onClick:m&&m},i)),c.a.createElement("div",{className:"right-item-content"},a))}},214:function(e,t,a){},219:function(e,t,a){"use strict";var n=a(39),r=a.n(n),l=a(0),c=a.n(l);a(220);t.a=function(e){return c.a.createElement("a",r()({},e,{className:"load-more-btn"}),"加载更多")}},220:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},238:function(e,t,a){"use strict";var n=a(39),r=a.n(n),l=a(0),c=a.n(l),i=a(24),s=(a(226),a(1)),m=a(219),o=a(16),u=a.n(o),h=a(17),d=(a(227),a(215)),E=function(e){var t=e.coverPic,a=e.tags,n=e.type,r=Object(l.useState)(t),i=u()(r,2),m=i[0],o=i[1],h=Object(l.useState)(t),E=u()(h,2),f=E[0],p=E[1];return Object(l.useEffect)(function(){t!==f&&(o(null),p(t))},[t]),Object(l.useEffect)(function(){o(f)},[f]),c.a.createElement(c.a.Fragment,null,null!==m&&c.a.createElement(d.SimpleImg,{applyAspectRatio:!0,importance:"high",width:220,height:160,placeholder:"#f6f8fa",src:Object(s.E)(t,n),alt:a}))},f=function(e){var t=e.title,a=e.synopsis,n=e.id,r=e.coverPic,i=e.author,m=e.createdBy,o=e.publishTime,h=e.tagsV2,d=e.serverTime,f=e.hotCounts,p=e.newsCat,v=e.authCat,g=e.nameHide,b=e.tagsHide,y=e.hotShow,N=e.advertised,w=e.tags,k=e.infoType,C=e.content,O=s.y.main("/userCenter/".concat(m)),L=""!==Object(s.E)(r,"video_pc")?"video_pc":"video_m",_=Object(l.useState)(s.y.news("/".concat(n,".html"))),j=u()(_,2),A=j[0],x=j[1];return Object(l.useEffect)(function(){if("undefined"!=typeof window){var e=window.location;x(k&&"video"===k?s.y.main("/video/detail/".concat(n,"/").concat(o),e):s.y.news("/".concat(n,".html"),e))}},[k,n]),c.a.createElement("div",{className:"news-list-item"},c.a.createElement("a",{className:"item-left",title:t,href:A,target:"_blank"},p&&""!==p&&c.a.createElement("span",null,p),k&&"video"===k&&c.a.createElement("div",{className:"type-video"},"视频"),k&&"video"===k&&c.a.createElement("div",{className:"type-video-btn"}),c.a.createElement(E,{coverPic:r,tags:w,type:k&&"video"===k?L:"pc"})),c.a.createElement("div",{className:"item-right"},c.a.createElement("a",{className:"title-synopsis",title:t,href:A,target:"_blank"},c.a.createElement("h5",null,v&&""!==v&&c.a.createElement("span",null,v),t),c.a.createElement("p",null,k&&"video"===k?C:a.replace("【GPT】",""))),c.a.createElement("div",{className:"relate-info"},c.a.createElement("div",{className:"author-time"},null!==N&&1===N&&c.a.createElement("span",{style:{color:"#5a83f9"}},"推广 | "),!g&&c.a.createElement("a",{href:O,title:i,target:"_blank"},i),c.a.createElement("time",null,Object(s.k)(o,d&&""!==d&&d))),!b&&0!==Object(s.D)(h).length&&c.a.createElement("div",{className:"tags",style:{display:"none"}},"关键字:",Object(s.D)(h).map(function(e,t){if(t>=3||!e.name)return!1;var a=Object(s.E)(e.name,"symbol"),n=Object(s.E)(e.name,"full_name"),r=(3===e.type||""===a)&&s.y.news("/tags/".concat(Object(s.h)(e.name)))||s.y.main("/marketsDetail/".concat(n,"/").concat(a)),l=(3===e.type||""===n)&&e.name||n;return c.a.createElement("a",{className:"relate-text",key:e.id,title:e.name,href:r,target:"_blank"},l)})),y&&c.a.createElement("div",{className:"hot"},"热度: ",f))))};f.propTypes={title:h.string.isRequired,id:h.string.isRequired,coverPic:h.string.isRequired,author:h.string.isRequired,createdBy:h.string.isRequired,publishTime:h.number.isRequired};var p=f;t.a=Object(i.b)(function(e){return{newsList:e.multi.news.newsList,adImplant:e.multi.adImplant}})(function(e){var t=e.newsList,a=e.loadMore,n=e.itemProps;return c.a.createElement("div",{className:"news-list-wrapper"},Object(s.n)(t.inforList)&&t.inforList.map(function(e,t){return c.a.createElement(p,r()({key:e.id},e,n))}),c.a.createElement("div",{className:"no-news",style:{display:0===t.inforList.length?"block":""}},"暂无内容"),e.isMore?c.a.createElement(m.a,{onClick:a,dataleng:t.inforList.length,style:{display:0===t.inforList.length||t.currentPage===t.pageCount?"none":"block"}}):"")})},240:function(e,t,a){},296:function(e,t,a){},297:function(e,t,a){e.exports=a.p+"huoxing-mark-bg-7009e2cf.jpg"},298:function(e,t,a){}}]);
//# sourceMappingURL=containers-AuthorDetails-0c7eda86.js.map