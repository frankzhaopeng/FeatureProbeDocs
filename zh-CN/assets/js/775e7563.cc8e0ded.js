"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[6915],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4},i="\u5c0f\u7a0b\u5e8fSDK",o={unversionedId:"how-to/Client-Side SDKs/minirprogram-sdk",id:"how-to/Client-Side SDKs/minirprogram-sdk",title:"\u5c0f\u7a0b\u5e8fSDK",description:"\u5c0f\u7a0b\u5e8fSDK\u76ee\u524d\u4ec5\u9002\u7528\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5305\u62ec\uff1a\u652f\u4ed8\u5b9d\u3001\u767e\u5ea6\u3001\u9489\u9489\u3001\u4eca\u65e5\u5934\u6761\u6b63\u5728\u51c6\u5907\u4e2d\u3002\u5c0f\u7a0b\u5e8fSDK\u662f\u5728 JavaScript SDK\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u7684\u5c01\u88c5\uff0c\u4e3b\u8981\u4e3a\u4e86\u63d0\u5347\u5728\u5c0f\u7a0b\u5e8f\u9879\u76ee\u4e2d\u7684\u4f7f\u7528\u4f53\u9a8c\u3002JavaScript SDK\u4e2d\u7684\u5927\u90e8\u5206\u65b9\u6cd5\u5728React SDK\u4e2d\u4e5f\u540c\u6837\u9002\u7528\uff0c\u8be6\u89c1JavaScript SDK\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/Client-Side SDKs/minirprogram-sdk.md",sourceDirName:"how-to/Client-Side SDKs",slug:"/how-to/Client-Side SDKs/minirprogram-sdk",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/minirprogram-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/Client-Side SDKs/minirprogram-sdk.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"iOS SDK",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/ios-sdk"},next:{title:"React SDK",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/react-sdk"}},p={},m=[{value:"\u5feb\u901f\u5c1d\u8bd5 Demo Code",id:"\u5feb\u901f\u5c1d\u8bd5-demo-code",level:2},{value:"\u5206\u6b65\u6307\u5357",id:"\u5206\u6b65\u6307\u5357",level:2},{value:"Step 1. \u5b89\u88c5\u5c0f\u7a0b\u5e8fSDK",id:"step-1-\u5b89\u88c5\u5c0f\u7a0b\u5e8fsdk",level:3},{value:"Step 2. \u521d\u59cb\u5316SDK\u5ba2\u6237\u7aef",id:"step-2-\u521d\u59cb\u5316sdk\u5ba2\u6237\u7aef",level:3},{value:"Step 3. \u83b7\u53d6\u5f00\u5173\u7684\u8fd4\u56de\u503c",id:"step-3-\u83b7\u53d6\u5f00\u5173\u7684\u8fd4\u56de\u503c",level:3},{value:"\u4e8b\u4ef6\u4e0a\u62a5",id:"\u4e8b\u4ef6\u4e0a\u62a5",level:2},{value:"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6",level:3},{value:"SDK\u521d\u59cb\u5316\u7684\u53c2\u6570",id:"sdk\u521d\u59cb\u5316\u7684\u53c2\u6570",level:2}],d={toc:m};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5c0f\u7a0b\u5e8fsdk"},"\u5c0f\u7a0b\u5e8fSDK"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8fSDK\u76ee\u524d\u4ec5\u9002\u7528\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5305\u62ec\uff1a\u652f\u4ed8\u5b9d\u3001\u767e\u5ea6\u3001\u9489\u9489\u3001\u4eca\u65e5\u5934\u6761\u6b63\u5728\u51c6\u5907\u4e2d\u3002\u5c0f\u7a0b\u5e8fSDK\u662f\u5728 JavaScript SDK\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u7684\u5c01\u88c5\uff0c\u4e3b\u8981\u4e3a\u4e86\u63d0\u5347\u5728\u5c0f\u7a0b\u5e8f\u9879\u76ee\u4e2d\u7684\u4f7f\u7528\u4f53\u9a8c\u3002JavaScript SDK\u4e2d\u7684\u5927\u90e8\u5206\u65b9\u6cd5\u5728React SDK\u4e2d\u4e5f\u540c\u6837\u9002\u7528\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"/FeatureProbeDocs/zh-CN/how-to/Client-Side%20SDKs/javascript-sdk"},"JavaScript SDK"),"\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8fSDK \u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/featureprobe-client-sdk-miniprogram/v/2.0.1"}," 2.0.1 ")," \u7248\u672c\u5f00\u59cb\u652f\u6301\u4e8b\u4ef6\u4e0a\u62a5\u7684\u80fd\u529b\u3002")),(0,r.kt)("admonition",{title:"SDK quick links",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u672c\u53c2\u8003\u6307\u5357\u5916\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u6e90\u4ee3\u7801\u3001API \u53c2\u8003\u6587\u6863\u548c\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\uff0c\u76f8\u5173\u94fe\u63a5\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Resource")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Location")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDK API \u6587\u6863"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://featureprobe.github.io/client-sdk-miniprogram/"}," SDK API docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub \u4ee3\u7801\u5e93"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-miniprogram"},"Client Side SDK for MiniProgram"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u793a\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-miniprogram/tree/main/example"},"Demo code"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u53d1\u5e03\u6a21\u5757"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/featureprobe-client-sdk-miniprogram"},"npm")))))),(0,r.kt)("h2",{id:"\u5feb\u901f\u5c1d\u8bd5-demo-code"},"\u5feb\u901f\u5c1d\u8bd5 Demo Code"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u8fd0\u884c\u7684\u6f14\u793a\u4ee3\u7801\uff0c\u8ba9\u60a8\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 FeatureProbe SDK\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u9700\u8981\u9009\u62e9\u901a\u8fc7\u8fde\u63a5\u54ea\u4e2a\u73af\u5883\u7684FeatureProbe\u6765\u63a7\u5236\u4f60\u7684\u7a0b\u5e8f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u5728\u7ebf\u7684",(0,r.kt)("a",{parentName:"li",href:"https://featureprobe.io/login"},"\u6f14\u793a\u73af\u5883")),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u642d\u5efa\u7684",(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/featureprobe/FeatureProbe"},"docker\u73af\u5883")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u8fd9\u4e2a repo \u5e76\u8fd0\u884c\u6f14\u793a\u7a0b\u5e8f\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/client-sdk-miniprogram.git\ncd client-sdk-miniprogram\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-miniprogram/tree/main/example"},"example"),"\u7a0b\u5e8f\u4e2d\u7684\u94fe\u63a5\u4fe1\u606f\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5728\u7ebf\u6f14\u793a\u73af\u5883:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "',(0,r.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSdkKey"),"  \u8bf7\u4ece\u5982\u4e0b\u754c\u9762\u4e2d\u62f7\u8d1d\uff1a")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"client_sdk_key snapshot",src:a(4458).Z,width:"414",height:"385"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u672c\u5730docker\u73af\u5883:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "http://YOUR_DOCKER_IP:4009/server"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSdkKey"),' = "client-25614c7e03e9cb49c0e96357b797b1e47e7f2dff"'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7a0b\u5e8f\u3002"))),(0,r.kt)("h2",{id:"\u5206\u6b65\u6307\u5357"},"\u5206\u6b65\u6307\u5357"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u8bf4\u660e\u4e2d\u5982\u4f55\u5728 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f \u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528 FeatureProbe \u529f\u80fd\u5f00\u5173\u3002"),(0,r.kt)("h3",{id:"step-1-\u5b89\u88c5\u5c0f\u7a0b\u5e8fsdk"},"Step 1. \u5b89\u88c5\u5c0f\u7a0b\u5e8fSDK"),(0,r.kt)("p",null,"\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5b89\u88c5 FeatureProbe SDK \u4f5c\u4e3a\u4f9d\u8d56\u9879\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm install featureprobe-client-sdk-miniprogram --save\n")),(0,r.kt)("h3",{id:"step-2-\u521d\u59cb\u5316sdk\u5ba2\u6237\u7aef"},"Step 2. \u521d\u59cb\u5316SDK\u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u521d\u59cb\u5316 SDK \u5ba2\u6237\u7aef\uff0c\u586b\u5199SDK\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684\u5fc5\u586b\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { initialize, FPUser } from \'featureprobe-client-sdk-miniprogram\';\n\nconst user = new FPUser();\nuser.with("userId", /* userId */);\n\nconst featureProbeClient = initialize({\n  remoteUrl: "https://featureprobe.io/server",\n  // remoteUrl: "https://127.0.0.1:4007", // for local docker\n  clientSdkKey: /* clientSdkKey */\n  user,\n});\n\nfeatureProbeClient.start();\n')),(0,r.kt)("h3",{id:"step-3-\u83b7\u53d6\u5f00\u5173\u7684\u8fd4\u56de\u503c"},"Step 3. \u83b7\u53d6\u5f00\u5173\u7684\u8fd4\u56de\u503c"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece globalData \u5bf9\u8c61\u4e2d\u83b7\u53d6\u53d8\u91cf\u503c\uff0cSDK\u4f1a\u81ea\u52a8\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"globalData.toggles")," \u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const app = getApp();   // getApp\u662f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d0\u4f9b\u7684\u5168\u5c40\u65b9\u6cd5\n\nconst value = app.globalData.toggles[/* toggleKey */].value;\nconst reason = app.globalData.toggles[/* toggleKey */].reason;\n")),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 SDK \u5bf9\u5916\u66b4\u9732\u7684 API \u6765\u83b7\u53d6\u5f00\u5173\u8fd4\u56de\u503c\u6216\u8fd4\u56de\u503c\u8be6\u60c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'featureProbeClient.on("ready", function() {\n  const result = featureProbeClient.boolValue(/* toggleKey */, false);\n  if (result) {\n    do_some_thing();\n  } else {\n    do_other_thing();\n  }\n  const reason = featureProbeClient.boolDetail(/* toggleKey */, false);\n  console.log(reason);\n})\n')),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u4e0a\u62a5"},"\u4e8b\u4ef6\u4e0a\u62a5"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8fSDK \u4ece 2.0.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u4e8b\u4ef6\u4e0a\u62a5\u7684\u80fd\u529b\u3002")),(0,r.kt)("h3",{id:"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5f53SDK",(0,r.kt)("inlineCode",{parentName:"p"},"ready"),"\u540e\uff0c\u8c03\u7528SDK\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"track"),"\u65b9\u6cd5\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"featureProbeClient.on('ready', function() {\n  // \u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\n  // \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\n  // \u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u662f\u81ea\u5b9a\u4e49\u6307\u6807\u503c\n  // highlight-start\n  featureProbeClient.track('YOUR_CUSTOM_EVENT_NAME_1');\n  featureProbeClient.track('YOUR_CUSTOM_EVENT_NAME_2', 5.5);\n  // highlight-end\n})\n")),(0,r.kt)("h2",{id:"sdk\u521d\u59cb\u5316\u7684\u53c2\u6570"},"SDK\u521d\u59cb\u5316\u7684\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"\u82e5\u5176\u4ed6URL\u672a\u586b\u5199\u5219\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdc\u7aef URL \u7528\u6765\u83b7\u53d6\u5f00\u5173\u548c\u4e0a\u62a5\u4e8b\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"togglesUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u72ec\u8bbe\u7f6e\u5f00\u5173\u4e0b\u53d1 URL\uff0c\u5982\u679c\u8bbe\u7f6e\u4f1a\u5ffd\u7565 remoteUrl\u524d\u7f00\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventsUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u72ec\u8bbe\u7f6e\u4e8b\u4ef6\u4e0a\u62a5 URL\uff0c\u5982\u679c\u8bbe\u7f6e\u4f1a\u5ffd\u7565 remoteUrl\u524d\u7f00\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientSdkKey"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"SDK Key\u7528\u6765\u9a8c\u8bc1\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"User \u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7With\u65b9\u6cd5\u8bbe\u7f6e\u5c5e\u6027\uff0c\u7528\u6765\u6839\u636e\u5c5e\u6027\u5224\u65ad\u5f00\u5173\u89c4\u5219")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refreshInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e SDK \u7684\u5f00\u5173\u548c\u4e8b\u4ef6\u5237\u65b0\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeoutInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e SDK \u521d\u59cb\u5316\u7b49\u5f85\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u8d85\u65f6\u540eSDK\u5c06\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"td"},"error"),"\u4e8b\u4ef6")))))}u.isMDXComponent=!0},4458:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client_sdk_key_snapshot_cn-441a8bffad52964614b63b1961967db9.png"}}]);