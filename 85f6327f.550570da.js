(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1721:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},j=function(e){var t=O(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),j=O(a),m=n,d=j["".concat(c,".").concat(m)]||j[m]||p[m]||b;return a?r.a.createElement(d,i(i({ref:t},o),{},{components:a})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},907:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(6),b=(a(0),a(1721)),c={title:"Taro.getSystemInfo(OBJECT)",sidebar_label:"getSystemInfo"},i={unversionedId:"apis/device/systeminfo/getSystemInfo",id:"version-1.3.45/apis/device/systeminfo/getSystemInfo",isDocsHomePage:!1,title:"Taro.getSystemInfo(OBJECT)",description:"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.3.45/apis/device/systeminfo/getSystemInfo.md",slug:"/apis/device/systeminfo/getSystemInfo",permalink:"/taro/docs/1.3.45/apis/device/systeminfo/getSystemInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/device/systeminfo/getSystemInfo.md",version:"1.3.45",sidebar_label:"getSystemInfo",sidebar:"version-1.3.45/API",previous:{title:"Taro.canIUse(String)",permalink:"/taro/docs/1.3.45/apis/device/systeminfo/canIUse"},next:{title:"Taro.getSystemInfoSync()",permalink:"/taro/docs/1.3.45/apis/device/systeminfo/getSystemInfoSync"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],o={rightToc:l};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff0c\u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"success"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8be6\u89c1\u8fd4\u56de\u53c2\u6570\u8bf4\u660e")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fail"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"complete"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"brand"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u624b\u673a\u54c1\u724c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"model"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u624b\u673a\u578b\u53f7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"system"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pixelRatio"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bbe\u5907\u50cf\u7d20\u6bd4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"screenWidth"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u5bbd\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"screenHeight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u9ad8\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windowWidth"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windowHeight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"version"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u7248\u672c\u53f7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"statusBarHeight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"platform"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u5e73\u53f0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"language"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fontSizeSetting"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\u8bbe\u7f6e\u3002\u4ee5\u201c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u201d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6\uff0c\u5355\u4f4d\uff1apx")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SDKVersion"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")))),Object(b.b)("p",null,"\u6ce8\u610f\uff1a",Object(b.b)("strong",{parentName:"p"},"H5")," \u7aef\u4e0d\u652f\u6301 version\u3001statusBarHeight\u3001fontSizeSetting\u3001SDKVersion"),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getSystemInfo({\n  success: res => console.log(res)\n})\n  .then(res => console.log(res))\n")),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getSystemInfo"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getSystemInfoSync"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);