(window.webpackJsonp=window.webpackJsonp||[]).push([[1293],{1348:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(1721)),o={title:"Nerv"},i={unversionedId:"nerv",id:"nerv",isDocsHomePage:!1,title:"Nerv",description:"`\uff09\u3002\u76f8\u6bd4\u8d77 React\uff0cNerv \u80fd\u63d0\u9ad8\u66f4\u9ad8\u7684\u6027\u80fd\u548c\u66f4\u5c0f\u7684\u4f53\u79ef\uff0c\u8fd9\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e2d\u975e\u5e38\u5173\u952e\u3002",source:"@site/docs/nerv.md",slug:"/nerv",permalink:"/taro/docs/next/nerv",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/nerv.md",version:"current",sidebar:"docs",previous:{title:"Vue3",permalink:"/taro/docs/next/vue3"},next:{title:"\u6846\u67b6",permalink:"/taro/docs/next/tutorial"}},p=[{value:"\u4f7f\u7528\u7b2c\u4e09\u65b9 React \u5e93",id:"\u4f7f\u7528\u7b2c\u4e09\u65b9-react-\u5e93",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/nerv"}),"Nerv")," \u662f\u51f9\u51f8\u5b9e\u9a8c\u5ba4\u7814\u53d1\u7684\u9ad8\u6027\u80fd\u7c7b React \u6846\u67b6\u3002\u5728 Taro \u4e2d\u4f7f\u7528 Nerv \u57fa\u672c\u9075\u5faa\u548c",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/taro/docs/next/react"}),"\u5728 Taro \u4e2d\u4f7f\u7528 React")," \u4e00\u6837\u7684\u7528\u6cd5\uff08\u53ea\u4e0d\u8fc7\u76f8\u6bd4\u8d77 ",Object(c.b)("inlineCode",{parentName:"p"},"import * as React from 'React'"),"\uff0c\u4f60\u9700\u8981 ",Object(c.b)("inlineCode",{parentName:"p"},"import Nerv from 'nervjs'"),"\uff09\u3002\u76f8\u6bd4\u8d77 React\uff0cNerv \u80fd\u63d0\u9ad8",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://stefankrause.net/js-frameworks-benchmark8/table.html"}),"\u66f4\u9ad8\u7684\u6027\u80fd"),"\u548c\u66f4\u5c0f\u7684\u4f53\u79ef\uff0c\u8fd9\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e2d\u975e\u5e38\u5173\u952e\u3002"),Object(c.b)("h2",{id:"\u4f7f\u7528\u7b2c\u4e09\u65b9-react-\u5e93"},"\u4f7f\u7528\u7b2c\u4e09\u65b9 React \u5e93"),Object(c.b)("p",null,"\u5728\u4f7f\u7528\u7b2c\u4e09\u65b9 React \u5e93\u65f6\uff0c\u9700\u8981\u5728",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/taro/docs/next/config-detail#miniwebpackchain"}),"\u914d\u7f6e\u6587\u4ef6")," ",Object(c.b)("inlineCode",{parentName:"p"},"webpack.resolve.alias"),"\uff0c\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"react")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"react-dom")," \u6620\u5c04\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"nervjs"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n  webpackChain (chain, webpack) {\n    chain.merge({\n      resolve: {\n        alias: {\n          react: 'nervjs',\n          'react-dom': 'nervjs'\n        }\n      }\n    })\n  }\n}\n")))}u.isMDXComponent=!0},1721:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,f=b["".concat(o,".").concat(m)]||b[m]||s[m]||c;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);