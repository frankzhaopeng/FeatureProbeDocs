"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[1582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},i="\u4f7f\u7528REST API\u53d1\u5e03\u5f00\u5173",l={unversionedId:"tutorials/open_api",id:"tutorials/open_api",title:"\u4f7f\u7528REST API\u53d1\u5e03\u5f00\u5173",description:"\u6bcf\u4e00\u4e2aFeatureProbe\u4e0a\u7684\u529f\u80fd\u90fd\u662f\u4e00\u4e2aREST API\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7REST API\u6267\u884cFeatureProbe \u4ea7\u54c1\u4e2d\u7684\u4efb\u4f55\u64cd\u4f5c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/open_api.md",sourceDirName:"tutorials",slug:"/tutorials/open_api",permalink:"/FeatureProbeDocs/zh-CN/tutorials/open_api",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/open_api.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"\u4f7f\u7528\u4eba\u7fa4\u7ec4",permalink:"/FeatureProbeDocs/zh-CN/tutorials/user_segment_tutorial"},next:{title:"\u4f7f\u7528\u6307\u6807\u5206\u6790",permalink:"/FeatureProbeDocs/zh-CN/tutorials/analysis"}},s={},p=[{value:"\u521b\u5efa Access Token",id:"\u521b\u5efa-access-token",level:2},{value:"\u521b\u5efa\u4e00\u4e2a\u5f00\u5173",id:"\u521b\u5efa\u4e00\u4e2a\u5f00\u5173",level:2},{value:"\u6253\u5f00\u5f00\u5173\u5e76\u53d1\u5e03",id:"\u6253\u5f00\u5f00\u5173\u5e76\u53d1\u5e03",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528rest-api\u53d1\u5e03\u5f00\u5173"},"\u4f7f\u7528REST API\u53d1\u5e03\u5f00\u5173"),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2aFeatureProbe\u4e0a\u7684\u529f\u80fd\u90fd\u662f\u4e00\u4e2aREST API\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7REST API\u6267\u884cFeatureProbe \u4ea7\u54c1\u4e2d\u7684\u4efb\u4f55\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5047\u5b9a\u6211\u4eec\u9700\u8981\u901a\u8fc7REST API\u5b9e\u73b0\u5982\u4e0b\u573a\u666f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5f00\u5173"),(0,a.kt)("li",{parentName:"ul"},"\u6253\u5f00\u8fd9\u4e2a\u5f00\u5173\u5e76\u53d1\u5e03")),(0,a.kt)("h2",{id:"\u521b\u5efa-access-token"},"\u521b\u5efa Access Token"),(0,a.kt)("p",null,"\u6240\u6709 REST API \u8d44\u6e90\u8bbf\u95ee\u4f7f\u7528 Access Token \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4e0d\u652f\u6301\u5176\u4ed6\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236\u3002 "),(0,a.kt)("p",null,"1\u3001\u767b\u5f55\u6211\u4eec\u63d0\u4f9b\u7684FeatureProbe",(0,a.kt)("a",{parentName:"p",href:"https://featureprobe.io"},"\u6f14\u793a\u5e73\u53f0"),"\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u767b\u5f55\uff0c\u8bf7\u8f93\u5165\u90ae\u7bb1\u3002\u540e\u7eed\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u4f60\u7684\u90ae\u7bb1\u8bbf\u95ee\u5230\u5c5e\u4e8e\u4f60\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,'2\u3001\u70b9\u51fb\u9875\u9762\u9876\u90e8\u7684 "\u79df\u6237\u8bbe\u7f6e"\uff0c\u7136\u540e\u9009\u62e9\u5de6\u4fa7 "Access Tokens" \uff0c\u70b9\u51fb',(0,a.kt)("inlineCode",{parentName:"p"},"+ Token"),"\u5f00\u5173\u65b0\u5efa\u4e00\u4e2aAccess Token\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u586b\u5165\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},'\u9009\u62e9"Owner"\u89d2\u8272'),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"li"},"\u521b\u5efa"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create tokken",src:n(6041).Z,width:"2803",height:"1516"})),(0,a.kt)("p",null,"3\u3001\u590d\u5236\u4fdd\u5b58TOKEN, Access Token\u521b\u5efa\u6210\u529f\u540e\u6211\u4eec\u9700\u8981\u590d\u5236\u4fdd\u5b58\u5728TOKEN\uff0c\u540e\u7eed\u5c06\u65e0\u6cd5\u67e5\u770b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create_success_token",src:n(7843).Z,width:"2804",height:"1520"})),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u5f00\u5173"},"\u521b\u5efa\u4e00\u4e2a\u5f00\u5173"),(0,a.kt)("p",null,"FeatureProbe  \u9ed8\u8ba4\u4f1a\u521b\u5efa\u4e00\u4e2a My_Project \u7684\u9879\u76ee\u4ee5\u53ca\u5728\u8be5\u9879\u76ee\u4e0b\u4e00\u4e2a online \u73af\u5883\u3002\n\u6211\u4eec\u5c06\u6f14\u793a\u5728\u8be5\u9879\u76ee\u4e0b\u521b\u5efa\u4e00\u4e2aNew Feature\u7684\u5f00\u5173"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5c06\u4e0b\u9762\u547d\u4ee4\u4e2d\u7684 ${API_ACCESS_TOKEN}\u66ff\u6362\u4e3a\u4e0a\u9762\u4fdd\u5b58\u7684TOKEN")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i \'https://featureprobe.io/api/projects/My_Project/toggles\' \\\n  -X \'POST\' \\\n  -H \'Authorization: ${API_ACCESS_TOKEN}\' \\\n  -H \'Content-Type: application/json\' \\\n  --data-raw \'{\n      "name": "New Feature",\n      "key": "new_feature",\n      "desc": "This is a feature control toggle.",\n      "tags": [],\n      "clientAvailability": true,\n      "returnType": "boolean",\n      "variations": [{\n            "value": "false",\n            "name": "\u5173\u95ed",\n            "description": "\u5173\u95ed\u65b0\u529f\u80fd"\n        }, {\n            "value": "true",\n            "name": "\u6253\u5f00",\n            "description": "\u6253\u5f00\u65b0\u529f\u80fd"\n        }],\n      "disabledServe": 0,\n      "permanent": false\n    }\'\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u662f\u5426\u521b\u5efa\u6210\u529f")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new_feature_toggle",src:n(9546).Z,width:"2273",height:"565"})),(0,a.kt)("h2",{id:"\u6253\u5f00\u5f00\u5173\u5e76\u53d1\u5e03"},"\u6253\u5f00\u5f00\u5173\u5e76\u53d1\u5e03"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u521b\u5efa\u5f00\u5173\u4f1a\u5728\u73af\u5883\u4e0b\u521d\u59cb\u5316\u4e00\u4e2a\u6ca1\u6709\u4efb\u4f55\u89c4\u5219\u7684\u7981\u7528\u5f00\u5173\uff0c\u4e0b\u9762\u6211\u4eec\u901a\u8fc7REST API\u6765\u6253\u5f00\u8fd9\u4e2a\u5f00\u5173\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5c06\u4e0b\u9762\u547d\u4ee4\u4e2d\u7684 ${API_ACCESS_TOKEN}\u66ff\u6362\u4e3a\u4e0a\u9762\u4fdd\u5b58\u7684TOKEN")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i \'https://featureprobe.io/api/projects/My_Project/environments/online/toggles/new_feature/targeting\' \\\n  -X \'PATCH\' \\\n  -H \'Authorization: ${API_ACCESS_TOKEN}\' \\\n  -H \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "comment": "\u6253\u5f00\u5f00\u5173",\n    "disabled": false,\n    "content": {\n        "defaultServe": {\n            "select": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u5f00\u5173\u662f\u5426\u6253\u5f00")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"open_new_feature_toggle",src:n(2699).Z,width:"2335",height:"566"})))}u.isMDXComponent=!0},7843:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_success_token-4e026c282b76f1c55b258de01d2bbf5e.png"},6041:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_token-d92fd86adbbad771357c1724e602d17e.png"},9546:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/new_feature_toggle-e31a01d90ddf9471370bfb0a80885e3f.png"},2699:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/open_new_feature_toggle-c40fb840c5c48d0db57c549740882c18.png"}}]);