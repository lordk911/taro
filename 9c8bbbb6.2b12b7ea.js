(window.webpackJsonp=window.webpackJsonp||[]).push([[1012],{1068:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),c=n(6),a=(n(0),n(1721)),l={title:"Taro.notifyBLECharacteristicValueChange(option)",sidebar_label:"notifyBLECharacteristicValueChange"},i={unversionedId:"apis/device/ble/notifyBLECharacteristicValueChange",id:"version-3.0.14/apis/device/ble/notifyBLECharacteristicValueChange",isDocsHomePage:!1,title:"Taro.notifyBLECharacteristicValueChange(option)",description:"\u542f\u7528\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u53d8\u5316\u65f6\u7684 notify \u529f\u80fd\uff0c\u8ba2\u9605\u7279\u5f81\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 notify \u6216\u8005 indicate \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002",source:"@site/versioned_docs/version-3.0.14/apis/device/ble/notifyBLECharacteristicValueChange.md",slug:"/apis/device/ble/notifyBLECharacteristicValueChange",permalink:"/taro/docs/apis/device/ble/notifyBLECharacteristicValueChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/apis/device/ble/notifyBLECharacteristicValueChange.md",version:"3.0.14",sidebar_label:"notifyBLECharacteristicValueChange",sidebar:"version-3.0.14/API",previous:{title:"Taro.onBLECharacteristicValueChange(callback)",permalink:"/taro/docs/apis/device/ble/onBLECharacteristicValueChange"},next:{title:"Taro.getBLEDeviceServices(option)",permalink:"/taro/docs/apis/device/ble/getBLEDeviceServices"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:b};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u542f\u7528\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u53d8\u5316\u65f6\u7684 notify \u529f\u80fd\uff0c\u8ba2\u9605\u7279\u5f81\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 notify \u6216\u8005 indicate \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002"),Object(a.b)("p",null,"\u53e6\u5916\uff0c\u5fc5\u987b\u5148\u542f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"notifyBLECharacteristicValueChange")," \u624d\u80fd\u76d1\u542c\u5230\u8bbe\u5907 ",Object(a.b)("inlineCode",{parentName:"p"},"characteristicValueChange")," \u4e8b\u4ef6"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8ba2\u9605\u64cd\u4f5c\u6210\u529f\u540e\u9700\u8981\u8bbe\u5907\u4e3b\u52a8\u66f4\u65b0\u7279\u5f81\u503c\u7684 value\uff0c\u624d\u4f1a\u89e6\u53d1 Taro.onBLECharacteristicValueChange \u56de\u8c03\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5b89\u5353\u5e73\u53f0\u4e0a\uff0c\u5728\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"notifyBLECharacteristicValueChange")," \u6210\u529f\u540e\u7acb\u5373\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"writeBLECharacteristicValue")," \u63a5\u53e3\uff0c\u5728\u90e8\u5206\u673a\u578b\u4e0a\u4f1a\u53d1\u751f 10008 \u7cfb\u7edf\u9519\u8bef")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"promised"},"Promised"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"errMsg"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"characteristicId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),Object(a.b)("tr",null,Object(a.b)("td",null,"deviceId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(a.b)("tr",null,Object(a.b)("td",null,"serviceId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),Object(a.b)("tr",null,Object(a.b)("td",null,"state"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u662f\u5426\u542f\u7528 notify")),Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: BluetoothError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: BluetoothError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: BluetoothError) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.notifyBLECharacteristicValueChange({\n  state: true, // \u542f\u7528 notify \u529f\u80fd\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  // \u8fd9\u91cc\u7684 characteristicId \u9700\u8981\u5728 getBLEDeviceCharacteristics \u63a5\u53e3\u4e2d\u83b7\u53d6\n  characteristicId,\n  success: function (res) {\n    console.log('notifyBLECharacteristicValueChange success', res.errMsg)\n  }\n})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.notifyBLECharacteristicValueChange"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1721:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),u=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=u(n),O=r,j=d["".concat(l,".").concat(O)]||d[O]||s[O]||a;return n?c.a.createElement(j,i(i({ref:t},o),{},{components:n})):c.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<a;o++)l[o]=n[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);