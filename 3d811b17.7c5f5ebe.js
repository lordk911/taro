(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{1721:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),i=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),d=i(n),p=r,s=d["".concat(a,".").concat(p)]||d[p]||O[p]||o;return n?c.a.createElement(s,l(l({ref:t},u),{},{components:n})):c.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(2),c=n(6),o=(n(0),n(1721)),a={title:"Taro.setBackgroundColor(option)",sidebar_label:"setBackgroundColor"},l={unversionedId:"apis/ui/background/setBackgroundColor",id:"apis/ui/background/setBackgroundColor",isDocsHomePage:!1,title:"Taro.setBackgroundColor(option)",description:"\u52a8\u6001\u8bbe\u7f6e\u7a97\u53e3\u7684\u80cc\u666f\u8272",source:"@site/docs/apis/ui/background/setBackgroundColor.md",slug:"/apis/ui/background/setBackgroundColor",permalink:"/taro/docs/next/apis/ui/background/setBackgroundColor",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/ui/background/setBackgroundColor.md",version:"current",sidebar_label:"setBackgroundColor",sidebar:"API",previous:{title:"Taro.setBackgroundTextStyle(option)",permalink:"/taro/docs/next/apis/ui/background/setBackgroundTextStyle"},next:{title:"Taro.showTabBarRedDot(option)",permalink:"/taro/docs/next/apis/ui/tab-bar/showTabBarRedDot"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:b};function i(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u52a8\u6001\u8bbe\u7f6e\u7a97\u53e3\u7684\u80cc\u666f\u8272"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"option"},"Option"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"backgroundColor"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c")),Object(o.b)("tr",null,Object(o.b)("td",null,"backgroundColorBottom"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301")),Object(o.b)("tr",null,Object(o.b)("td",null,"backgroundColorTop"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301")),Object(o.b)("tr",null,Object(o.b)("td",null,"complete"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.b)("tr",null,Object(o.b)("td",null,"fail"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"success"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.setBackgroundColor({\n  backgroundColor: '#ffffff', // \u7a97\u53e3\u7684\u80cc\u666f\u8272\u4e3a\u767d\u8272\n})\nTaro.setBackgroundColor({\n  backgroundColorTop: '#ffffff', // \u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\u4e3a\u767d\u8272\n  backgroundColorBottom: '#ffffff', // \u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\u4e3a\u767d\u8272\n})\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.setBackgroundColor"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0}}]);