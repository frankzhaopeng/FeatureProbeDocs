"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[4627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:3},o="SDK \u5b9e\u73b0\u539f\u7406",l={unversionedId:"reference/sdk-specification",id:"reference/sdk-specification",title:"SDK \u5b9e\u73b0\u539f\u7406",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd FeatureProbe SDK \u7684\u5b9e\u73b0\u539f\u7406\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/sdk-specification.md",sourceDirName:"reference",slug:"/reference/sdk-specification",permalink:"/FeatureProbeDocs/zh-CN/reference/sdk-specification",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/sdk-specification.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"SDK \u57fa\u672c\u6982\u5ff5",permalink:"/FeatureProbeDocs/zh-CN/reference/sdk-introduction"},next:{title:"SDK \u8d21\u732e\u6307\u5357",permalink:"/FeatureProbeDocs/zh-CN/reference/sdk-contributor"}},s={},p=[{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"Server-side SDK",id:"server-side-sdk",level:3},{value:"1\u3001\u521d\u59cb\u5316",id:"1\u521d\u59cb\u5316",level:4},{value:"2\u3001\u83b7\u53d6\u5f00\u5173\u7ed3\u679c",id:"2\u83b7\u53d6\u5f00\u5173\u7ed3\u679c",level:4},{value:"3\u3001\u540c\u6b65\u5f00\u5173\u89c4\u5219",id:"3\u540c\u6b65\u5f00\u5173\u89c4\u5219",level:4},{value:"4\u3001\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5",id:"4\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5",level:4},{value:"Client-side SDK",id:"client-side-sdk",level:3},{value:"1\u3001\u521d\u59cb\u5316",id:"1\u521d\u59cb\u5316-1",level:4},{value:"2\u3001\u83b7\u53d6\u5f00\u5173\u7ed3\u679c",id:"2\u83b7\u53d6\u5f00\u5173\u7ed3\u679c-1",level:4},{value:"3\u3001\u540c\u6b65\u5f00\u5173\u7ed3\u679c",id:"3\u540c\u6b65\u5f00\u5173\u7ed3\u679c",level:4},{value:"4\u3001\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5",id:"4\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5-1",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk-\u5b9e\u73b0\u539f\u7406"},"SDK \u5b9e\u73b0\u539f\u7406"),(0,i.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd FeatureProbe SDK \u7684\u5b9e\u73b0\u539f\u7406\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"FeatureProbe SDK \u5206\u4e3a Client-side SDK \u548c Server-side SDK \u4e24\u79cd\uff0c\u76f8\u5173\u6982\u5ff5\u53ef\u4ee5\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/reference/sdk-introduction"},"SDK \u57fa\u672c\u6982\u5ff5"),"\u6587\u6863\u3002")),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,i.kt)("h3",{id:"server-side-sdk"},"Server-side SDK"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221028095725775",src:r(8768).Z,width:"1778",height:"556"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cServer-Side SDK \u4e3b\u8981\u7528\u5728\u4e1a\u52a1\u7cfb\u7edf\u7684\u540e\u7aef\u670d\u52a1\uff0c\u6838\u5fc3\u5b9e\u73b0\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,i.kt)("h4",{id:"1\u521d\u59cb\u5316"},"1\u3001\u521d\u59cb\u5316"),(0,i.kt)("p",null,"\u521d\u59cb\u5316 FeatureProbe Client \u5b9e\u4f8b\u3002\u4ee5 Java \u4ee3\u7801\u4e3a\u4f8b ",(0,i.kt)("inlineCode",{parentName:"p"},"FeatureProbe")," \u5b9e\u4f8b\u521b\u5efa\u540e\uff0c\u5373\u8868\u793a\u5b8c\u6210\u521d\u59cb\u5316\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"FPConfig config = FPConfig.builder().remoteUri(/* FeatureProbe Server URI */)\n        .build();\n// \u6267\u884c\u521d\u59cb\u5316\nFeatureProbe fpClient = new FeatureProbe(/* FeatureProbe Server SDK Key */, config);\n")),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u7684\u5de5\u4f5c\u539f\u7406\u662f SDK \u901a\u8fc7 HTTP \u65b9\u5f0f\u4ece\u670d\u52a1\u7aef\uff08FeatureProbe Server\uff09\u4e2d\u62c9\u53d6\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"serverSdkKey")," \u4e0b\u7684\u6240\u6709\u5f00\u5173/\u4eba\u7fa4\u7ec4",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/server-sdk-specification/blob/065c758e62b057e8f0664f9d2561fa1d35200306/spec/toggle_simple_spec.json"},"\u89c4\u5219"),"\uff0c\u7136\u540e\u5b58\u50a8\u5728 SDK \u5185\u90e8\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5f3a\u4f9d\u8d56\u5f00\u5173\u8bbf\u95ee\u7ed3\u679c\u7684\u4e1a\u52a1\uff0cSDK \u9700\u8981\u4fdd\u8bc1\u521d\u59cb\u5316\u65f6\u4ece Server \u62c9\u53d6\u5f00\u5173\u89c4\u5219\u6570\u636e\u5c3d\u53ef\u80fd\u6210\u529f\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u521d\u59cb\u5316\u589e\u52a0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"StartWait"),"  \u7b49\u5f85\u673a\u5236\uff0c\u5f53\u521d\u59cb\u5316\u5931\u8d25\u65f6\uff08\u5982\u7f51\u7edc\u8d85\u65f6\uff09\uff0c\u4f1a\u8fdb\u884c\u521d\u59cb\u5316\u91cd\u8bd5\uff0c\u76f4\u5230\u521d\u59cb\u5316\u6210\u529f\u6216\u8d85\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"StartWait")," \u65f6\u95f4\u3002\u540c\u65f6 SDK \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"fpClient.initialized()")," \u51fd\u6570\u6765\u83b7\u53d6\u9996\u6b21\u521d\u59cb\u5316\u7ed3\u679c\u3002"),(0,i.kt)("h4",{id:"2\u83b7\u53d6\u5f00\u5173\u7ed3\u679c"},"2\u3001\u83b7\u53d6\u5f00\u5173\u7ed3\u679c"),(0,i.kt)("p",null,"SDK \u9488\u5bf9\u4e0d\u540c\u5f00\u5173\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u51fd\u6570\u6765\u8ba1\u7b97\u5f00\u5173\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'boolean boolValue  = fpClient.boolValue("YOUR_TOGGLE_KEY", user, false);\nString stringValue = fpClient.stringValue("YOUR_TOGGLE_KEY", user, false);\n....\n')),(0,i.kt)("p",null,"\u7531\u4e8e SDK \u5185\u90e8\u5728\u521d\u59cb\u5316\u65f6\u5b58\u50a8\u7684\u4e86\u5f00\u5173\u89c4\u5219\uff0c\u6240\u4ee5\u5728\u83b7\u53d6\u5f00\u5173\u7ed3\u679c\u89c4\u5219\u7684\u8ba1\u7b97\u5747\u53ea\u5728 SDK \u4e2d\u5b9e\u73b0\u7684\uff0c\u65e0\u987b\u4efb\u4f55\u7f51\u7edc\u4ea4\u4e92\u3002\u5f53\u4e1a\u52a1\u4ee3\u7801\u8c03\u7528 SDK \u65f6\uff0c\u4f1a\u6839\u636e\u5185\u5b58\u4e2d\u7f13\u5b58\u7684\u5f00\u5173\u89c4\u5219\uff0c\u5373\u65f6\u8ba1\u7b97\u8fd4\u56de\u503c\u3002"),(0,i.kt)("h4",{id:"3\u540c\u6b65\u5f00\u5173\u89c4\u5219"},"3\u3001\u540c\u6b65\u5f00\u5173\u89c4\u5219"),(0,i.kt)("p",null,"\u5f53\u5f00\u5173\u53d1\u751f\u53d8\u66f4\u65f6\uff0cSDK \u9700\u8981\u83b7\u53d6\u5230\u6700\u65b0\u5f00\u5173\u89c4\u5219\uff0c\u4ee5\u4fdd\u8bc1\u8ba1\u7b97\u7ed3\u679c\u7684\u5b9e\u73b0\u6027\u3002 \u6240\u4ee5 SDK \u5728\u5185\u90e8\u91c7\u7528\u8f6e\u8be2\uff08",(0,i.kt)("strong",{parentName:"p"},"Polling"),"\uff09\u673a\u5236\uff08\u9ed8\u8ba4\u6bcf5\u79d2\u4e00\u6b21\uff09\u5f02\u6b65\u4ece FeatureProbe server \u6765\u83b7\u53d6\u6700\u65b0\u5f00\u5173\u89c4\u5219\u66f4\u65b0\u5230\u7f13\u5b58\uff0c\u5728\u6bcf\u6b21\u83b7\u53d6\u5f00\u5173\u7ed3\u679c\u65f6\u90fd\u5c06\u57fa\u4e8e\u6700\u65b0\u89c4\u5219\u8ba1\u7b97\u8fd4\u56de\u7ed3\u679c\u3002\u76ee\u524d\u6211\u4eec\u6b63\u5728\u5c06\u8f6e\u8be2\u673a\u5236\u5347\u7ea7\u4e3aWebSocket\u673a\u5236\u3002"),(0,i.kt)("h4",{id:"4\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5"},"4\u3001\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5"),(0,i.kt)("p",null,"SDK \u7684\u8bbf\u95ee\u6570\u636e\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"/how-to/platform/metrics"},"\u6570\u636e\u76d1\u63a7"),"\u529f\u80fd\u6a21\u5757\u4e2d\u5b9e\u65f6\u5c55\u793a\uff0c\u6240\u4ee5 SDK \u6bcf\u6b21\u83b7\u53d6\u5f00\u5173\u7ed3\u679c\u540e\u540c\u65f6\u4f1a\u6536\u96c6\u5f53\u524d\u547d\u4e2d\u7684\u5206\u7ec4\u53ca\u5f00\u5173\u7248\u672c\u4fe1\u606f\uff0c\u4e3a\u4fdd\u8bc1\u4e0d\u5f71\u54cd SDK \u8bbf\u95ee\u6027\u80fd\uff0c\u8bbf\u95ee\u6570\u636e\u6536\u96c6\u4f1a\u5148\u8bb0\u5728\u672c\u5730\u5185\u5b58\u4e2d\uff0c\u7136\u540e\u5b9a\u65f6\uff08\u9ed8\u8ba4\u6bcf3\u79d2\uff09\u805a\u5408\u4e0a\u62a5\u5230 FeatureProbe Server \u4e0a\u3002"),(0,i.kt)("h3",{id:"client-side-sdk"},"Client-side SDK"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221028095725775",src:r(6283).Z,width:"1739",height:"536"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cClient-Side SDK \u4e3b\u8981\u9488\u5bf9\u79fb\u52a8\u7aef APP\u3001\u6d4f\u89c8\u5668\u7aef \u7b49\u7528\u6237\u7684\u8bbe\u5907\u73af\u5883\uff0c\u6838\u5fc3\u5b9e\u73b0\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,i.kt)("h4",{id:"1\u521d\u59cb\u5316-1"},"1\u3001\u521d\u59cb\u5316"),(0,i.kt)("p",null,"\u7531\u4e8e Client-side SDK \u672c\u8eab\u4e0d\u542b\u6709\u89c4\u5219\u8fd0\u7b97\u7684\u529f\u80fd\uff0c\u6240\u4ee5\u5728\u521d\u59cb\u5316\u65f6\u9700\u8981\u628a\u6240\u4ee3\u8868\u7684\u7528\u6237\u7684\u5404\u79cd\u5c5e\u6027\u4e0a\u4f20\u670d\u52a1\u7aef\uff0c\u7531\u670d\u52a1\u7aef\uff08FeatureProbe Server\uff09\u8ba1\u7b97\u6240\u6709\u5f00\u5173\u5bf9\u4e8e\u5f53\u524d\u7528\u6237\u7684\u5f00\u5173\u8fd4\u56de\u7ed3\u679c\uff0c\u7136\u540e\u8fd4\u56de\u7ed9 Client-side SDK \u7f13\u5b58\u5230 App \u4e2d\u3002\u4ee5\u4e0b\u4e3a Android SDK \u521d\u59cb\u5316\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'val user = FpUser()\nuser.setAttr("name", "bob") // \u6784\u5efa\u7528\u6237\u5c5e\u6027\nval config = FpConfig(/* FeatureProbe Server URI */, /* FeatureProbe Server SDK Key */, 10u, true)\nval fpClient = FeatureProbe(config, user) // \u4e0a\u62a5\u7528\u6237\u5c5e\u6027\u6765\u6267\u884c\u521d\u59cb\u5316\n')),(0,i.kt)("h4",{id:"2\u83b7\u53d6\u5f00\u5173\u7ed3\u679c-1"},"2\u3001\u83b7\u53d6\u5f00\u5173\u7ed3\u679c"),(0,i.kt)("p",null,"\u7531\u4e8e\u521d\u59cb\u5316\u65f6\u5df2\u7ecf\u5c06\u6240\u6709\u5f00\u5173\u8ba1\u7b97\u7ed3\u679c\u540c\u6b65\u5e76\u7f13\u5b58\u5230 App \u4e2d\uff0c\u6240\u4ee5\u4e1a\u52a1\u4ee3\u7801\u83b7\u53d6\u5bf9\u5e94\u7684\u5f00\u5173\u503c\u65f6\uff0c\u662f\u901a\u8fc7 FeatureProbe SDK \u76f4\u63a5\u83b7\u53d6\u7684\u5185\u5b58\u7f13\u5b58\u7ed3\u679c\u3002"),(0,i.kt)("h4",{id:"3\u540c\u6b65\u5f00\u5173\u7ed3\u679c"},"3\u3001\u540c\u6b65\u5f00\u5173\u7ed3\u679c"),(0,i.kt)("p",null,"Client-side SDK \u540c\u6b65\u65b9\u5f0f Server-side SDK \u4e00\u81f4\uff0c\u5747\u662f\u4f7f\u7528\u8f6e\u8be2\uff08",(0,i.kt)("strong",{parentName:"p"},"Polling"),"\uff09\u673a\u5236\u5f02\u6b65\u4ece FeatureProbe server \u540c\u6b65\u6570\u636e\u3002\u4e3b\u8981\u533a\u522b\u5728\u4e8e Client-side SDK \u540c\u6b65\u7684\u662f\u5f00\u5173\u8bbf\u95ee\u7ed3\u679c\u3002\u76ee\u524d\u6211\u4eec\u6b63\u5728\u5c06\u8f6e\u8be2\u673a\u5236\u5347\u7ea7\u4e3aWebSocket\u673a\u5236\u3002"),(0,i.kt)("h4",{id:"4\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5-1"},"4\u3001\u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5"),(0,i.kt)("p",null," \u5f00\u5173\u8bbf\u95ee\u6570\u636e\u4e0a\u62a5\u5b9e\u73b0\u673a\u5236\u548c Server-side SDK \u4e00\u81f4\u3002"))}u.isMDXComponent=!0},6283:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/client_side_sdk-dfba8a1fa1554dab9c4c2b3cb2e266b4.png"},8768:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server_side_sdk-ce2af449785d664cffcddbd8ab29edf3.png"}}]);