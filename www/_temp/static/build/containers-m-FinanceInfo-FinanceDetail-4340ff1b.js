(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[40],{1117:function(e,t,s){"use strict";s.d(t,"a",function(){return m});var a=s(1180),n=s.n(a);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=arguments.length>2?arguments[2]:void 0,a=n.a.clone();a.config({DECIMAL_PLACES:t,ROUNDING_MODE:s&&s.roundUp?n.a.ROUND_UP:n.a.ROUND_DOWN,EXPONENTIAL_AT:1e9});var r="function"==typeof e?e(a):e;return s&&s.toFixed?new a(r).toFixed(t):new a(r).toString(10)}var m=function(e,t,s){if(!e||""===e)return"--";var a="";return Number(e)>=1e9?a="".concat(r(Number(Number(e)/1e9),1),"B"):Number(e)>=1e6?a="".concat(r(Number(Number(e)/1e6),1),"M"):Number(e)>=1e3?a="".concat(r(Number(Number(e)/1e3),1),"K"):t?t?e.toString():"--":(a=Number(e)<10?r(Number(e),s||2):r(Number(e),1),Number(a).toString())}},1142:function(e,t,s){var a={"./af":972,"./af.js":972,"./ar":973,"./ar-dz":974,"./ar-dz.js":974,"./ar-kw":975,"./ar-kw.js":975,"./ar-ly":976,"./ar-ly.js":976,"./ar-ma":977,"./ar-ma.js":977,"./ar-sa":978,"./ar-sa.js":978,"./ar-tn":979,"./ar-tn.js":979,"./ar.js":973,"./az":980,"./az.js":980,"./be":981,"./be.js":981,"./bg":982,"./bg.js":982,"./bm":983,"./bm.js":983,"./bn":984,"./bn.js":984,"./bo":985,"./bo.js":985,"./br":986,"./br.js":986,"./bs":987,"./bs.js":987,"./ca":988,"./ca.js":988,"./cs":989,"./cs.js":989,"./cv":990,"./cv.js":990,"./cy":991,"./cy.js":991,"./da":992,"./da.js":992,"./de":993,"./de-at":994,"./de-at.js":994,"./de-ch":995,"./de-ch.js":995,"./de.js":993,"./dv":996,"./dv.js":996,"./el":997,"./el.js":997,"./en-SG":998,"./en-SG.js":998,"./en-au":999,"./en-au.js":999,"./en-ca":1e3,"./en-ca.js":1e3,"./en-gb":1001,"./en-gb.js":1001,"./en-ie":1002,"./en-ie.js":1002,"./en-il":1003,"./en-il.js":1003,"./en-nz":1004,"./en-nz.js":1004,"./eo":1005,"./eo.js":1005,"./es":1006,"./es-do":1007,"./es-do.js":1007,"./es-us":1008,"./es-us.js":1008,"./es.js":1006,"./et":1009,"./et.js":1009,"./eu":1010,"./eu.js":1010,"./fa":1011,"./fa.js":1011,"./fi":1012,"./fi.js":1012,"./fo":1013,"./fo.js":1013,"./fr":1014,"./fr-ca":1015,"./fr-ca.js":1015,"./fr-ch":1016,"./fr-ch.js":1016,"./fr.js":1014,"./fy":1017,"./fy.js":1017,"./ga":1018,"./ga.js":1018,"./gd":1019,"./gd.js":1019,"./gl":1020,"./gl.js":1020,"./gom-latn":1021,"./gom-latn.js":1021,"./gu":1022,"./gu.js":1022,"./he":1023,"./he.js":1023,"./hi":1024,"./hi.js":1024,"./hr":1025,"./hr.js":1025,"./hu":1026,"./hu.js":1026,"./hy-am":1027,"./hy-am.js":1027,"./id":1028,"./id.js":1028,"./is":1029,"./is.js":1029,"./it":1030,"./it-ch":1031,"./it-ch.js":1031,"./it.js":1030,"./ja":1032,"./ja.js":1032,"./jv":1033,"./jv.js":1033,"./ka":1034,"./ka.js":1034,"./kk":1035,"./kk.js":1035,"./km":1036,"./km.js":1036,"./kn":1037,"./kn.js":1037,"./ko":1038,"./ko.js":1038,"./ku":1039,"./ku.js":1039,"./ky":1040,"./ky.js":1040,"./lb":1041,"./lb.js":1041,"./lo":1042,"./lo.js":1042,"./lt":1043,"./lt.js":1043,"./lv":1044,"./lv.js":1044,"./me":1045,"./me.js":1045,"./mi":1046,"./mi.js":1046,"./mk":1047,"./mk.js":1047,"./ml":1048,"./ml.js":1048,"./mn":1049,"./mn.js":1049,"./mr":1050,"./mr.js":1050,"./ms":1051,"./ms-my":1052,"./ms-my.js":1052,"./ms.js":1051,"./mt":1053,"./mt.js":1053,"./my":1054,"./my.js":1054,"./nb":1055,"./nb.js":1055,"./ne":1056,"./ne.js":1056,"./nl":1057,"./nl-be":1058,"./nl-be.js":1058,"./nl.js":1057,"./nn":1059,"./nn.js":1059,"./pa-in":1060,"./pa-in.js":1060,"./pl":1061,"./pl.js":1061,"./pt":1062,"./pt-br":1063,"./pt-br.js":1063,"./pt.js":1062,"./ro":1064,"./ro.js":1064,"./ru":1065,"./ru.js":1065,"./sd":1066,"./sd.js":1066,"./se":1067,"./se.js":1067,"./si":1068,"./si.js":1068,"./sk":1069,"./sk.js":1069,"./sl":1070,"./sl.js":1070,"./sq":1071,"./sq.js":1071,"./sr":1072,"./sr-cyrl":1073,"./sr-cyrl.js":1073,"./sr.js":1072,"./ss":1074,"./ss.js":1074,"./sv":1075,"./sv.js":1075,"./sw":1076,"./sw.js":1076,"./ta":1077,"./ta.js":1077,"./te":1078,"./te.js":1078,"./tet":1079,"./tet.js":1079,"./tg":1080,"./tg.js":1080,"./th":1081,"./th.js":1081,"./tl-ph":1082,"./tl-ph.js":1082,"./tlh":1083,"./tlh.js":1083,"./tr":1084,"./tr.js":1084,"./tzl":1085,"./tzl.js":1085,"./tzm":1086,"./tzm-latn":1087,"./tzm-latn.js":1087,"./tzm.js":1086,"./ug-cn":1088,"./ug-cn.js":1088,"./uk":1089,"./uk.js":1089,"./ur":1090,"./ur.js":1090,"./uz":1091,"./uz-latn":1092,"./uz-latn.js":1092,"./uz.js":1091,"./vi":1093,"./vi.js":1093,"./x-pseudo":1094,"./x-pseudo.js":1094,"./yo":1095,"./yo.js":1095,"./zh-cn":969,"./zh-cn.js":969,"./zh-hk":1096,"./zh-hk.js":1096,"./zh-tw":1097,"./zh-tw.js":1097};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=1142},1240:function(e,t,s){e.exports=s.p+"timeicon-30a50f7e.png"},1241:function(e,t,s){e.exports=s.p+"twitterico-14a86350.png"},1242:function(e,t,s){e.exports=s.p+"discordico-6594376f.png"},1243:function(e,t,s){e.exports=s.p+"mediumico-f8de26ce.png"},1767:function(e,t,s){},1768:function(e,t,s){},1769:function(e,t,s){},309:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(27),m=(s(1767),s(1768),s(1241)),i=s.n(m),c=s(1242),l=s.n(c),j=s(1243),o=s.n(j),u=function(e){var t=e.detail,s=[{name:"Twitter",icon:i.a,link:t.twitter},{name:"Discord",icon:l.a,link:t.discord},{name:"Medium",icon:o.a,link:t.medium}];return n.a.createElement("div",{className:"finheader-m"},n.a.createElement("div",{className:"finheader-m-top"},n.a.createElement("img",{src:t.logoUrl,alt:""}),n.a.createElement("div",{className:"finheader-m-top-right"},n.a.createElement("h3",null,t.projectName),n.a.createElement("div",{className:"categary-list"},n.a.createElement("div",{className:"categary-list-item"},"Social Network")))),n.a.createElement("div",{className:"finheader-m-desc"},t.brief),n.a.createElement("div",{className:"comniiton-m"},n.a.createElement("h4",null,"官网"),n.a.createElement("div",{className:"comniiton-m-website"},t.website)),n.a.createElement("div",{className:"comniiton-m"},n.a.createElement("h4",null,"社交媒体"),n.a.createElement("div",{className:"comniiton-m-mt"},s.map(function(e,t){return n.a.createElement("a",{className:"comniiton-m-other",key:t,target:"_blank",href:e.link},n.a.createElement("img",{src:e.icon,alt:""}),n.a.createElement("span",null,e.name))}))))},d=s(961),f=s.n(d),v=(s(1769),s(1240)),b=s.n(v),h=s(1117),E=function(e){var t=e.detail;return n.a.createElement("div",{className:"finbottom-m"},n.a.createElement("h3",null,"融资信息"),n.a.createElement("div",{className:"finbottom-m-list"},t.investRaisedList.map(function(e,t){return n.a.createElement("div",{className:"finbottom-m-list-item",key:t},n.a.createElement("div",{className:"m-list-item-top"},n.a.createElement("div",{className:"item-top-time"},n.a.createElement("img",{src:b.a,alt:""}),n.a.createElement("span",null,"日期：",f()(e.investDate).format("YYYY年MM月DD日"))),n.a.createElement("div",{className:"item-top-money"},n.a.createElement("h4",null,"融资金额"),n.a.createElement("div",{className:"top-money-amount"},"$",Object(h.a)(e.amount)),n.a.createElement("a",{href:e.reportUrl,target:"_blank"},"相关报道"))),n.a.createElement("div",{className:"m-list-item-bottom"},n.a.createElement("h4",null,"投资机构"),n.a.createElement("div",{className:"item-bottom-invest"},e.orgList.map(function(e,t){return n.a.createElement("div",{className:"bottom-invest-item",key:t},n.a.createElement("img",{src:e.logoUrl,alt:""}))}))))})))};t.default=function(){var e=Object(r.e)(function(e){return{productdetail:e.finance.pruductDetail}}).productdetail;return n.a.createElement("div",{className:"fince-m-detail"},n.a.createElement(u,{detail:e}),n.a.createElement(E,{detail:e}))}}}]);
//# sourceMappingURL=containers-m-FinanceInfo-FinanceDetail-4340ff1b.js.map