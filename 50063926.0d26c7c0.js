(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{1721:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=d(r),O=n,s=p["".concat(o,".").concat(O)]||p[O]||u[O]||c;return r?a.a.createElement(s,i(i({ref:t},l),{},{components:r})):a.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},556:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),c=(r(0),r(1721)),o={title:"Taro.createRewardedVideoAd(option)",sidebar_label:"createRewardedVideoAd"},i={unversionedId:"apis/ad/createRewardedVideoAd",id:"version-2.2.15/apis/ad/createRewardedVideoAd",isDocsHomePage:!1,title:"Taro.createRewardedVideoAd(option)",description:"\u521b\u5efa\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-2.2.15/apis/ad/createRewardedVideoAd.md",slug:"/apis/ad/createRewardedVideoAd",permalink:"/taro/docs/2.2.15/apis/ad/createRewardedVideoAd",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.15/apis/ad/createRewardedVideoAd.md",version:"2.2.15",sidebar_label:"createRewardedVideoAd",sidebar:"version-2.2.15/API",previous:{title:"SelectorQuery",permalink:"/taro/docs/2.2.15/apis/wxml/SelectorQuery"},next:{title:"Taro.createInterstitialAd(option)",permalink:"/taro/docs/2.2.15/apis/ad/createInterstitialAd"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],l={rightToc:b};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u521b\u5efa\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u7ec4\u4ef6\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createRewardedVideoAd.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => RewardedVideoAd\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"adUnitId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u5e7f\u544a\u5355\u5143 id")),Object(c.b)("tr",null,Object(c.b)("td",null,"multiton"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u542f\u7528\u591a\u4f8b\u6a21\u5f0f")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.createRewardedVideoAd"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);