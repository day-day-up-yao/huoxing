(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1660:function(t,n,e){"use strict";e.d(n,"b",function(){return f}),e.d(n,"a",function(){return p}),e.d(n,"c",function(){return b}),e.d(n,"d",function(){return s}),e.d(n,"g",function(){return g}),e.d(n,"e",function(){return y}),e.d(n,"f",function(){return l});e(361);var r=e(20),o=e.n(r),c=e(48),i=e(2);function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){a(t,n,e[n])})}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f=function(t,n,e){return function(r){var i="init"===t?"/topic/list":"/post/search";Object(c.i)("get",i,n?u({},n):{},function(t){if(1===t.code){var n=t.obj;r(d({list:n.inforList})),r(l({totalCount:n.recordCount,pageSize:n.pageSize,currentPage:n.currentPage})),e&&e(n)}else o.a.error(t.msg)})}},p=function(t,n){return function(e){Object(c.i)("post","/topic/querytopic",u({},t),function(t){if(1===t.code){var r=t.obj;e(d({info:r})),n&&n(r)}else o.a.error(t.msg)})}},b=function(t,n){return function(e){Object(c.i)("get","/topic/recommendnum",{type:t},function(t){if(1===t.code){var r=t.obj;e({type:i.yb.GET_TOP_NUM,actionData:r}),n&&n(r)}else o.a.error(t.msg)})}},s=function(t,n,e){return function(r){var i="init"===t?"/topic/querycontent":"/post/search";Object(c.i)("get",i,n?u({},n):{},function(t){if(1===t.code){var n=t.obj;r(d({contentList:n.inforList})),r(l({totalCount:n.recordCount,pageSize:n.pageSize,currentPage:n.currentPage})),e&&e(n)}else o.a.error(t.msg)})}},d=function(t){return{type:i.yb.ADD_DATA,data:t}},g=function(t){return{type:i.yb.SET_SEARCH_QUERY,data:t}},y=function(t){return{type:i.yb.SET_FILTER_DATA,data:t}},l=function(t){return{type:i.yb.SET_PAGE_DATA,data:t}}}}]);