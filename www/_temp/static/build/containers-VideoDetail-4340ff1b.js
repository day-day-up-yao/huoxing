(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[36],{1111:function(e,t,a){"use strict";var i=a(22),n=a.n(i),r=a(0),o=a.n(r),c=a(23),l=a(108),d=(a(1134),a(17)),m=a(1135),s=a.n(m),v=a(1136),u=a.n(v),h=a(1137),g=a.n(h);t.a=function(e){var t=Object(c.c)().t,a=e.isLive,i=Object(r.useState)(""),m=n()(i,2),v=m[0],h=m[1];return Object(r.useEffect)(function(){Object(l.c)().then(function(e){1===e.code?h(e.obj):d.a.info(e.msg)}).catch(function(e){throw e})},[v]),o.a.createElement("div",{className:"right-download-box ".concat(void 0!==a?"right-download-box-live":"")},o.a.createElement("div",{className:"right-download-box-title"},t("download_marsbit_app")),o.a.createElement("div",{className:"right-download-box-content"},t("marsbit_app_desc")),o.a.createElement("div",{className:"right-download-box-btn-box"},o.a.createElement("a",{className:"right-download-box-btn right-download-box-btn-color1",href:"https://apps.apple.com/cn/app/id1343659925",target:"_blank"},o.a.createElement("img",{className:"right-download-box-btn-img",src:s.a,style:{marginRight:"8px"}}),o.a.createElement("div",{className:"right-download-box-btn-text"},"iPhone 版")),o.a.createElement("a",{className:"right-download-box-btn right-download-box-btn-color2",href:v,target:"_blank"},o.a.createElement("img",{className:"right-download-box-btn-img",src:u.a,style:{marginRight:"6px"}}),o.a.createElement("div",{className:"right-download-box-btn-text"},"Android 版")),o.a.createElement("div",{className:"right-download-box-btn-code"},o.a.createElement("div",{className:"right-download-box-btn-code-show"},o.a.createElement("img",{className:"right-download-box-btn-code-show-img",src:g.a})))))}},1134:function(e,t,a){},1135:function(e,t,a){e.exports=a.p+"right-download-ios-bfae97d1.png"},1136:function(e,t,a){e.exports=a.p+"right-download-android-e33868e0.png"},1137:function(e,t,a){e.exports=a.p+"right-download-QRcode-e79e9b7e.jpg"},1629:function(e,t,a){},1630:function(e,t,a){},1631:function(e,t,a){},1632:function(e,t,a){e.exports=a.p+"video_author_arrow-02df9638.png"},1633:function(e,t,a){e.exports=a.p+"video_author_blue-77c6a4e4.svg"},1634:function(e,t,a){e.exports=a.p+"video_author_orange-ddf372b8.svg"},1635:function(e,t,a){},1636:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=(a(1629),a(22)),o=a.n(r),c=a(27),l=(a(1630),a(17)),d=function(){var e=Object(c.e)(function(e){return{videoDetail:e.video.videoDetail}},c.c).videoDetail,t=Object(i.useState)(""),a=o()(t,2),r=a[0],d=a[1];return Object(i.useEffect)(function(){if(e){var t=JSON.parse(e.current.url);t?(t=t[0].fileUrl,d(t)):l.a.info("未获取到视频地址，请刷新试试")}else setTimeout(function(){l.a.info("视频不存在或已删除")},500)},[e]),n.a.createElement("div",{className:"video-detail-left-video"},n.a.createElement("div",{className:"video-detail-left-video-wrapper"},n.a.createElement("div",{className:"video-detail-video-wrapper"},n.a.createElement("div",{id:"video-detail-left-video",style:{width:"100%",height:"100%",zIndex:0}},n.a.createElement("video",{preload:"auto",autoPlay:"autoplay",controls:!0,src:r,className:"topshow-video",poster:JSON.parse(e.current.coverPic).video_pc})))))},m=(a(1631),a(1)),s=a(1632),v=a.n(s),u=a(1633),h=a.n(u),g=a(1634),f=a.n(g),b=function(){var e=Object(c.e)(function(e){return{videoDetail:e.video.videoDetail}},c.c).videoDetail,t=Object(i.useState)(!1),a=o()(t,2),r=a[0],l=a[1],d=Object(i.useCallback)(function(){l(!r)},[r]);return n.a.createElement("div",{className:"video-detail-left-author"},n.a.createElement("div",{className:"video-detail-left-author-title"},e.current.title),n.a.createElement("a",{className:"video-detail-left-author-header-box",href:m.B.main("/userCenter/".concat(e.current.createdBy)),target:"_blank"},n.a.createElement("img",{className:"video-detail-left-author-header-img",src:e.current.iconUrl,alt:e.current.nickName}),n.a.createElement("div",{className:"video-detail-left-author-header-text"},e.current.nickName),e.current.vGrade&&1===parseInt(e.current.vGrade)&&n.a.createElement("img",{className:"video-detail-left-author-header-icon",src:f.a}),e.current.vGrade&&2===parseInt(e.current.vGrade)&&n.a.createElement("img",{className:"video-detail-left-author-header-icon",src:h.a}),e.current.vGrade&&3===parseInt(e.current.vGrade)&&n.a.createElement("img",{className:"video-detail-left-author-header-icon",src:h.a}),n.a.createElement("div",{className:"video-detail-left-author-header-text"},"发布于".concat(Object(m.l)(e.current.publishTime,"yyyy年MM月dd日 hh:mm")," · ").concat(e.current.hotCounts," 播放"))),n.a.createElement("div",{className:"video-detail-left-author-content-box"},n.a.createElement("div",{className:"video-detail-left-author-content-text",style:{display:r?"block":"-webkit-box"}},e.current.content),e.current.content&&e.current.content.length>=46&&n.a.createElement("div",{className:"video-detail-left-author-content-btn",onClick:d},r?"收起":"展开",n.a.createElement("img",{className:"video-detail-left-author-content-btn-img",src:v.a,style:{transform:r?"rotate(180deg)":"rotate(0deg)"}}))),n.a.createElement("div",{className:"video-detail-left-author-tag-box"},e.current.tagsV2&&0!==Object(m.H)(e.current.tagsV2).length&&Object(m.H)(e.current.tagsV2).map(function(e,t){if(t>=3||!e.name)return!1;var a=Object(m.I)(e.name,"symbol"),i=Object(m.I)(e.name,"full_name"),r=(3===e.type||""===a)&&m.B.news("/tags/".concat(Object(m.h)(e.name)))||m.B.main("/marketsDetail/".concat(i,"/").concat(a)),o=(3===e.type||""===i)&&e.name||i;return n.a.createElement("a",{className:"video-detail-left-author-tag-item",key:t,title:e.name,href:r,target:"_blank"},o)})))},E=a(49),p=a.n(E),N=(a(1635),a(1636),function(e){var t=e.id,a=e.title,i=e.publishTime,r=e.coverPic,o=e.author,c=e.hotCounts,l=r?JSON.parse(r).pc:"";return n.a.createElement("a",{className:"video-detail-right-recommend-item",href:m.B.main("/video/detail/".concat(t,"/").concat(i)),target:"_blank",title:a},n.a.createElement("div",{className:"video-detail-right-recommend-item-left"},n.a.createElement("img",{className:"video-detail-right-recommend-item-img",src:l})),n.a.createElement("div",{className:"video-detail-right-recommend-item-right"},n.a.createElement("div",{className:"video-detail-right-recommend-item-title"},a),n.a.createElement("div",{className:"video-detail-right-recommend-item-text-box"},n.a.createElement("div",{className:"video-detail-right-recommend-item-text"},o),n.a.createElement("div",{className:"video-detail-right-recommend-item-text-line"}),n.a.createElement("div",{className:"video-detail-right-recommend-item-text"},"播放量 ".concat(c)))))}),x=function(){var e=Object(c.e)(function(e){return{videoByTagsListData:e.video.videoByTagsListData,videoRecommendListData:e.video.videoRecommendListData}},c.c),t=e.videoByTagsListData,a=e.videoRecommendListData;return n.a.createElement("div",{className:"video-detail-right-recommend"},n.a.createElement("div",{className:"video-detail-right-recommend-title-box"},n.a.createElement("div",{className:"video-detail-right-recommend-line"}),n.a.createElement("div",{className:"video-detail-right-recommend-title"},"精选视频")),t&&t.inforList.length>0&&t.inforList.map(function(e,t){return n.a.createElement(N,p()({},e,{key:t}))}),t&&a&&t.inforList.length<4&&a.slice(0,parseInt(4-t.inforList.length)).map(function(e,t){return n.a.createElement(N,p()({},e,{key:t}))}))},w=a(1111);t.default=function(){return n.a.createElement("div",{className:"video-detail-page"},n.a.createElement("div",{className:"video-detail-page-main-box"},n.a.createElement("div",{className:"video-detail-page-main-box-left"},n.a.createElement(d,null),n.a.createElement(b,null)),n.a.createElement("div",{className:"video-detail-page-main-box-right"},n.a.createElement(x,null),n.a.createElement(w.a,null))))}}}]);
//# sourceMappingURL=containers-VideoDetail-4340ff1b.js.map