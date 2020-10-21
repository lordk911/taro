(window.webpackJsonp=window.webpackJsonp||[]).push([[1493],{1547:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return O})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return a}));var b=l(2),n=l(6),c=(l(0),l(1721)),r={title:"Taro.request(option)",sidebar_label:"request"},O={unversionedId:"apis/network/request/request",id:"version-3.0.14/apis/network/request/request",isDocsHomePage:!1,title:"Taro.request(option)",description:"\u53d1\u8d77 HTTPS \u7f51\u7edc\u8bf7\u6c42\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-3.0.14/apis/network/request/request.md",slug:"/apis/network/request/request",permalink:"/taro/docs/apis/network/request/request",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/apis/network/request/request.md",version:"3.0.14",sidebar_label:"request",sidebar:"version-3.0.14/API",previous:{title:"Taro.getSelectedTextRange(option)",permalink:"/taro/docs/apis/ui/keyboard/getSelectedTextRange"},next:{title:"RequestTask",permalink:"/taro/docs/apis/network/request/RequestTask"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"dataType",id:"datatype",children:[]},{value:"method",id:"method",children:[]},{value:"responseType",id:"responsetype",children:[]},{value:"cors_mode",id:"cors_mode",children:[]},{value:"credentials",id:"credentials",children:[]},{value:"cache",id:"cache",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[]},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],j={rightToc:u};function a(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},j,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u53d1\u8d77 HTTPS \u7f51\u7edc\u8bf7\u6c42\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"}),"\u76f8\u5173\u8bf4\u660e"),"\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"data \u53c2\u6570\u8bf4\u660e"),"\n\u6700\u7ec8\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7684\u6570\u636e\u662f String \u7c7b\u578b\uff0c\u5982\u679c\u4f20\u5165\u7684 data \u4e0d\u662f String \u7c7b\u578b\uff0c\u4f1a\u88ab\u8f6c\u6362\u6210 String \u3002\u8f6c\u6362\u89c4\u5219\u5982\u4e0b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e ",Object(c.b)("inlineCode",{parentName:"li"},"GET")," \u65b9\u6cd5\u7684\u6570\u636e\uff0c\u4f1a\u5c06\u6570\u636e\u8f6c\u6362\u6210 query string\uff08",Object(c.b)("inlineCode",{parentName:"li"},"encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)..."),"\uff09"),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e ",Object(c.b)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\u4e14 ",Object(c.b)("inlineCode",{parentName:"li"},"header['content-type']")," \u4e3a ",Object(c.b)("inlineCode",{parentName:"li"},"application/json")," \u7684\u6570\u636e\uff0c\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c JSON \u5e8f\u5217\u5316"),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e ",Object(c.b)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\u4e14 ",Object(c.b)("inlineCode",{parentName:"li"},"header['content-type']")," \u4e3a ",Object(c.b)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")," \u7684\u6570\u636e\uff0c\u4f1a\u5c06\u6570\u636e\u8f6c\u6362\u6210 query string ",Object(c.b)("inlineCode",{parentName:"li"},"\uff08encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...\uff09"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"<T = any, U = any>(option: Option<U>) => RequestTask<T>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"url"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"data"),Object(c.b)("td",null,Object(c.b)("code",null,"U")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bf7\u6c42\u7684\u53c2\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"dataType"),Object(c.b)("td",null,Object(c.b)("code",null,'"json" | "\u5176\u4ed6"')),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"header"),Object(c.b)("td",null,Object(c.b)("code",null,"Record<string, any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u8bf7\u6c42\u7684 header\uff0cheader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer\u3002",Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("code",null,"content-type")," \u9ed8\u8ba4\u4e3a ",Object(c.b)("code",null,"application/json"))),Object(c.b)("tr",null,Object(c.b)("td",null,"method"),Object(c.b)("td",null,Object(c.b)("code",null,'"OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"')),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42\u65b9\u6cd5")),Object(c.b)("tr",null,Object(c.b)("td",null,"responseType"),Object(c.b)("td",null,Object(c.b)("code",null,'"text" | "arraybuffer"')),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u54cd\u5e94\u7684\u6570\u636e\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult<any>) => void")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"jsonp"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u4f7f\u7528jsonp\u65b9\u5f0f\u83b7\u53d6\u6570\u636e")),Object(c.b)("tr",null,Object(c.b)("td",null,"jsonpCache"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef jsonp \u8bf7\u6c42 url \u662f\u5426\u9700\u8981\u88ab\u7f13\u5b58")),Object(c.b)("tr",null,Object(c.b)("td",null,"mode"),Object(c.b)("td",null,Object(c.b)("code",null,'"no-cors" | "cors" | "same-origin"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"same-origin")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42")),Object(c.b)("tr",null,Object(c.b)("td",null,"credentials"),Object(c.b)("td",null,Object(c.b)("code",null,'"same-origin" | "include" | "omit"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"omit")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u643a\u5e26 Cookie")),Object(c.b)("tr",null,Object(c.b)("td",null,"cache"),Object(c.b)("td",null,Object(c.b)("code",null,'"default" | "no-cache" | "reload" | "force-cache" | "only-if-cached"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"default")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u7f13\u5b58\u6a21\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"timeout"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"2000")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u54cd\u5e94\u8d85\u65f6\u65f6\u95f4")),Object(c.b)("tr",null,Object(c.b)("td",null,"retryTimes"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"2")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u91cd\u8bd5\u6b21\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"backup"),Object(c.b)("td",null,Object(c.b)("code",null,"string | string[]")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7684\u515c\u5e95\u63a5\u53e3")),Object(c.b)("tr",null,Object(c.b)("td",null,"dataCheck"),Object(c.b)("td",null,Object(c.b)("code",null,"() => boolean")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u54cd\u5e94\u7684\u6570\u636e\u6821\u9a8c\u51fd\u6570\uff0c\u82e5\u8fd4\u56de false\uff0c\u5219\u8bf7\u6c42\u515c\u5e95\u63a5\u53e3\uff0c\u82e5\u65e0\u515c\u5e95\u63a5\u53e3\uff0c\u5219\u62a5\u8bf7\u6c42\u5931\u8d25")),Object(c.b)("tr",null,Object(c.b)("td",null,"useStore"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u662f\u5426\u4f7f\u7528\u7f13\u5b58")),Object(c.b)("tr",null,Object(c.b)("td",null,"storeCheckKey"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7f13\u5b58\u6821\u9a8c\u7684 key")),Object(c.b)("tr",null,Object(c.b)("td",null,"storeSign"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7f13\u5b58\u7b7e\u540d")),Object(c.b)("tr",null,Object(c.b)("td",null,"storeCheck"),Object(c.b)("td",null,Object(c.b)("code",null,"() => boolean")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u6821\u9a8c\u51fd\u6570\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8bbe\u7f6e")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"data"),Object(c.b)("td",null,Object(c.b)("code",null,"T")),Object(c.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e")),Object(c.b)("tr",null,Object(c.b)("td",null,"header"),Object(c.b)("td",null,Object(c.b)("code",null,"Record<string, any>")),Object(c.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP Response Header")),Object(c.b)("tr",null,Object(c.b)("td",null,"statusCode"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"datatype"},"dataType"),Object(c.b)("p",null,"\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"json"),Object(c.b)("td",null,"\u8fd4\u56de\u7684\u6570\u636e\u4e3a JSON\uff0c\u8fd4\u56de\u540e\u4f1a\u5bf9\u8fd4\u56de\u7684\u6570\u636e\u8fdb\u884c\u4e00\u6b21 JSON.parse")),Object(c.b)("tr",null,Object(c.b)("td",null,"\u5176\u4ed6"),Object(c.b)("td",null,"\u4e0d\u5bf9\u8fd4\u56de\u7684\u5185\u5bb9\u8fdb\u884c JSON.parse")))),Object(c.b)("h3",{id:"method"},"method"),Object(c.b)("p",null,"HTTP \u8bf7\u6c42\u65b9\u6cd5"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"OPTIONS"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 OPTIONS")),Object(c.b)("tr",null,Object(c.b)("td",null,"GET"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 GET")),Object(c.b)("tr",null,Object(c.b)("td",null,"HEAD"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 HEAD")),Object(c.b)("tr",null,Object(c.b)("td",null,"POST"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 POST")),Object(c.b)("tr",null,Object(c.b)("td",null,"PUT"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 PUT")),Object(c.b)("tr",null,Object(c.b)("td",null,"DELETE"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 DELETE")),Object(c.b)("tr",null,Object(c.b)("td",null,"TRACE"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 TRACE")),Object(c.b)("tr",null,Object(c.b)("td",null,"CONNECT"),Object(c.b)("td",null,"HTTP \u8bf7\u6c42 CONNECT")))),Object(c.b)("h3",{id:"responsetype"},"responseType"),Object(c.b)("p",null,"\u54cd\u5e94\u7684\u6570\u636e\u7c7b\u578b"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"text"),Object(c.b)("td",null,"\u54cd\u5e94\u7684\u6570\u636e\u4e3a\u6587\u672c")),Object(c.b)("tr",null,Object(c.b)("td",null,"arraybuffer"),Object(c.b)("td",null,"\u54cd\u5e94\u7684\u6570\u636e\u4e3a ArrayBuffer")))),Object(c.b)("h3",{id:"cors_mode"},"cors_mode"),Object(c.b)("p",null,"\u8de8\u57df\u7b56\u7565"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"no-cors"),Object(c.b)("td",null,"\u8de8\u57df\u8bf7\u6c42\u5c06\u83b7\u53d6\u4e0d\u900f\u660e\u7684\u54cd\u5e94")),Object(c.b)("tr",null,Object(c.b)("td",null,"cors"),Object(c.b)("td",null,"\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42")),Object(c.b)("tr",null,Object(c.b)("td",null,"same-origin"),Object(c.b)("td",null,"\u8bf7\u6c42\u603b\u662f\u5411\u5f53\u524d\u7684\u6e90\u53d1\u8d77\u7684")))),Object(c.b)("h3",{id:"credentials"},"credentials"),Object(c.b)("p",null,"\u8bc1\u4e66"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"include"),Object(c.b)("td",null,"\u4e0d\u8bba\u662f\u4e0d\u662f\u8de8\u57df\u7684\u8bf7\u6c42,\u603b\u662f\u53d1\u9001\u8bf7\u6c42\u8d44\u6e90\u57df\u5728\u672c\u5730\u7684 cookies\u3001 HTTP Basic authentication \u7b49\u9a8c\u8bc1\u4fe1\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"same-origin"),Object(c.b)("td",null,"\u53ea\u6709\u5f53URL\u4e0e\u54cd\u5e94\u811a\u672c\u540c\u6e90\u624d\u53d1\u9001 cookies\u3001 HTTP Basic authentication \u7b49\u9a8c\u8bc1\u4fe1\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"omit"),Object(c.b)("td",null,"\u4ece\u4e0d\u53d1\u9001cookies")))),Object(c.b)("h3",{id:"cache"},"cache"),Object(c.b)("p",null,"\u7f13\u5b58\u7b56\u7565"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"default"),Object(c.b)("td",null,"\u6d4f\u89c8\u5668\u4eceHTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),Object(c.b)("tr",null,Object(c.b)("td",null,"no-cache"),Object(c.b)("td",null,"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),Object(c.b)("tr",null,Object(c.b)("td",null,"reload"),Object(c.b)("td",null,"\u6d4f\u89c8\u5668\u76f4\u63a5\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u83b7\u53d6\u8d44\u6e90\uff0c\u4e0d\u67e5\u770b\u7f13\u5b58\uff0c\u7136\u540e\u4f7f\u7528\u4e0b\u8f7d\u7684\u8d44\u6e90\u66f4\u65b0\u7f13\u5b58")),Object(c.b)("tr",null,Object(c.b)("td",null,"force-cache"),Object(c.b)("td",null,"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),Object(c.b)("tr",null,Object(c.b)("td",null,"only-if-cached"),Object(c.b)("td",null,"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '',\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // \u9ed8\u8ba4\u503c\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\n")),Object(c.b)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),Object(c.b)("p",null,"async/await \u7528\u6cd5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"const res = await Taro.request(params)\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Taro.request"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}a.isMDXComponent=!0},1721:function(e,t,l){"use strict";l.d(t,"a",(function(){return d})),l.d(t,"b",(function(){return s}));var b=l(0),n=l.n(b);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function O(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var j=n.a.createContext({}),a=function(e){var t=n.a.useContext(j),l=t;return e&&(l="function"==typeof e?e(t):O(O({},t),e)),l},d=function(e){var t=a(e.components);return n.a.createElement(j.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},i=n.a.forwardRef((function(e,t){var l=e.components,b=e.mdxType,c=e.originalType,r=e.parentName,j=u(e,["components","mdxType","originalType","parentName"]),d=a(l),i=b,s=d["".concat(r,".").concat(i)]||d[i]||o[i]||c;return l?n.a.createElement(s,O(O({ref:t},j),{},{components:l})):n.a.createElement(s,O({ref:t},j))}));function s(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=l.length,r=new Array(c);r[0]=i;var O={};for(var u in t)hasOwnProperty.call(t,u)&&(O[u]=t[u]);O.originalType=e,O.mdxType="string"==typeof e?e:b,r[1]=O;for(var j=2;j<c;j++)r[j]=l[j];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,l)}i.displayName="MDXCreateElement"}}]);