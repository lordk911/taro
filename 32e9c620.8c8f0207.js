(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1721:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var l=n(0),c=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),O=l,j=p["".concat(b,".").concat(O)]||p[O]||d[O]||r;return n?c.a.createElement(j,a(a({ref:t},i),{},{components:n})):c.a.createElement(j,a({ref:t},i))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,b=new Array(r);b[0]=O;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,b[1]=a;for(var i=2;i<r;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},375:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var l=n(2),c=n(6),r=(n(0),n(1721)),b={title:"Taro.openDocument(option)",sidebar_label:"openDocument"},a={unversionedId:"apis/files/openDocument",id:"apis/files/openDocument",isDocsHomePage:!1,title:"Taro.openDocument(option)",description:"\u65b0\u5f00\u9875\u9762\u6253\u5f00\u6587\u6863\uff0c\u652f\u6301\u683c\u5f0f",source:"@site/docs/apis/files/openDocument.md",slug:"/apis/files/openDocument",permalink:"/taro/docs/next/apis/files/openDocument",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/files/openDocument.md",version:"current",sidebar_label:"openDocument",sidebar:"API",previous:{title:"Taro.removeSavedFile(option)",permalink:"/taro/docs/next/apis/files/removeSavedFile"},next:{title:"Taro.getSavedFileList(option)",permalink:"/taro/docs/next/apis/files/getSavedFileList"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"fileType",id:"filetype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u65b0\u5f00\u9875\u9762\u6253\u5f00\u6587\u6863\uff0c\u652f\u6301\u683c\u5f0f"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"filePath"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u901a\u8fc7 downloadFile \u83b7\u5f97")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"fileType"),Object(r.b)("td",null,Object(r.b)("code",null,'"doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u6307\u5b9a\u6587\u4ef6\u7c7b\u578b\u6253\u5f00\u6587\u4ef6")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"filetype"},"fileType"),Object(r.b)("p",null,"\u6587\u4ef6\u7c7b\u578b"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"doc"),Object(r.b)("td",null,"doc \u683c\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"docx"),Object(r.b)("td",null,"docx \u683c\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"xls"),Object(r.b)("td",null,"xls \u683c\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"xlsx"),Object(r.b)("td",null,"xlsx \u683c\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"ppt"),Object(r.b)("td",null,"ppt \u683c\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"pptx"),Object(r.b)("td",null,"pptx \u683c\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"pdf"),Object(r.b)("td",null,"pdf \u683c\u5f0f")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.downloadFile({\n  url: 'https://example.com/somefile.pdf',\n  success: function (res) {\n    var filePath = res.tempFilePath\n    Taro.openDocument({\n      filePath: filePath,\n      success: function (res) {\n        console.log('\u6253\u5f00\u6587\u6863\u6210\u529f')\n      }\n    })\n  }\n})\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.openDocument"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);