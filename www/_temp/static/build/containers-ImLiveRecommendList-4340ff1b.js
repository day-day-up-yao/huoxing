(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[22],{1194:function(e,t,i){"use strict";var a=i(0),n=i.n(a);i(1195);t.a=function(e){var t=e.title,i=e.typeList,a=e.nowType,l=e.onBtnTypeClick,r=e.notLine,c=e.moreUrl;return n.a.createElement("div",{className:"im-live-list-left-live-header ".concat(r?"im-live-list-left-live-header-notLine":"")},n.a.createElement("div",{className:"im-live-list-left-live-header-left"},t&&""!==t&&n.a.createElement("div",{className:"im-live-list-left-live-header-title"},t),i&&i.length>1&&i.map(function(e){return n.a.createElement("div",{className:"im-live-list-left-live-header-type ".concat(a===e.id?"im-live-list-left-live-header-type-select":""),key:e.id,onClick:function(){return l(e.id)}},e.name)})),n.a.createElement("div",{className:"im-live-list-left-live-header-right"},void 0!==c&&""!==c&&n.a.createElement("a",{className:"im-live-list-left-live-header-more",href:c,target:"_blank"},"查看更多")))}},1195:function(e,t,i){},1517:function(e,t,i){},1518:function(e,t,i){},1519:function(e,t,i){},1520:function(e,t,i){},1521:function(e,t,i){e.exports=i.p+"live-join-cc8722ad.png"},303:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),l=(i(1517),i(22)),r=i.n(l),c=i(27),m=(i(1518),i(19)),s=i(1194),o=i(1164),v=function(){var e=Object(c.e)(function(e){return{roomLiveRecommendList:e.live.roomLiveRecommendList}},c.c).roomLiveRecommendList,t=Object(c.d)(),i=Object(a.useState)(!1),l=r()(i,2),v=l[0],u=l[1];Object(a.useEffect)(function(){var t=parseInt(e.currentPage)+1;e.pageCount>=t?u(!0):u(!1)},[e]);var d=Object(a.useCallback)(function(){var i=parseInt(e.currentPage)+1;e.pageCount>=i&&t(Object(m.f)({pageSize:32,page:i,recommendFlag:1,newFlag:1}))},[e]);return n.a.createElement("div",{className:"im-live-list-left-live-list-top"},n.a.createElement(s.a,{title:"精选直播",notLine:!0}),n.a.createElement(o.a,{listData:e.inforList,onBtnClick:d,isHaveMore:v}))},u=i(49),d=i.n(u),f=(i(1519),i(1)),E=i(1165),p=i(1408),g=function(){var e=Object(c.e)(function(e){return{roomLiveUsePopularList:e.live.roomLiveUsePopularList}},c.c).roomLiveUsePopularList;return n.a.createElement("div",{className:"im-live-list-right-live-list-player"},n.a.createElement(E.a,{title:"MarBit人气主播",crown:!0}),n.a.createElement("div",{className:"im-live-list-right-live-list-player-box"},e&&Object(f.n)(e)&&e.map(function(e,t){return n.a.createElement(p.a,d()({},e,{key:t}))})))},L=(i(1520),i(1521)),b=i.n(L),h=function(){return n.a.createElement("div",{className:"im-live-list-right-join"},n.a.createElement("a",{className:"im-live-list-right-join-box",href:f.B.main("/download"),target:"_blank"},n.a.createElement("img",{className:"im-live-list-right-join-box",src:b.a})))},N=i(1111),j=i(1102),O=i(1167);t.default=function(){Object(O.a)();var e=Object(j.a)();return Object(a.useEffect)(function(){e({eventId:"recommended_enter"})},[]),n.a.createElement("div",{className:"im-live-recommend-list-page"},n.a.createElement("div",{className:"im-live-recommend-list-page-main-box"},n.a.createElement("div",{className:"im-live-recommend-list-page-main-box-left"},n.a.createElement(v,null)),n.a.createElement("div",{className:"im-live-recommend-list-page-main-box-right"},n.a.createElement(h,null),n.a.createElement(g,null),n.a.createElement(N.a,{isLive:!0}))))}}}]);
//# sourceMappingURL=containers-ImLiveRecommendList-4340ff1b.js.map