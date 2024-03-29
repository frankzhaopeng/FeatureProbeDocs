"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=c(r),m=o,f=b["".concat(p,".").concat(m)]||b[m]||s[m]||a;return r?n.createElement(f,u(u({ref:t},i),{},{components:r})):n.createElement(f,u({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"FeatureProbe Keystone",title:"\u529f\u80fd\u7ba1\u7406\uff08Feature management\uff09\u4e2d\u7684 Keystone \u6a21\u5f0f"},u=void 0,l={permalink:"/FeatureProbeDocs/zh-CN/blog/FeatureProbe Keystone",editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-blog/2022-11-22-featureprobe.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-11-22-featureprobe.md",title:"\u529f\u80fd\u7ba1\u7406\uff08Feature management\uff09\u4e2d\u7684 Keystone \u6a21\u5f0f",description:"\u4e00\u3001\u4ec0\u4e48\u662f Keystone \uff1f",date:"2022-11-22T00:00:00.000Z",formattedDate:"2022\u5e7411\u670822\u65e5",tags:[],readingTime:7.555,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"FeatureProbe Keystone",title:"\u529f\u80fd\u7ba1\u7406\uff08Feature management\uff09\u4e2d\u7684 Keystone \u6a21\u5f0f"},prevItem:{title:"\u529f\u80fd\u7ba1\u7406\u7684\u5b9e\u8df5\u573a\u666f \u2014 \u8fd0\u7ef4\u670d\u52a1\u964d\u7ea7",permalink:"/FeatureProbeDocs/zh-CN/blog/FeatureProbe \u964d\u7ea7\u670d\u52a1"},nextItem:{title:"\u7528 Rust \u5f00\u53d1\u8de8\u5e73\u53f0 SDK \u63a2\u7d22\u548c\u5b9e\u8df5",permalink:"/FeatureProbeDocs/zh-CN/blog/FeatureProbe rust"}},p={authorsImageUrls:[]},c=[{value:"\u4e00\u3001\u4ec0\u4e48\u662f Keystone \uff1f",id:"\u4e00\u4ec0\u4e48\u662f-keystone-",level:2},{value:"\u4e8c\u3001\u9650\u65f6\u7279\u4ef7\u4fc3\u9500\u6d3b\u52a8",id:"\u4e8c\u9650\u65f6\u7279\u4ef7\u4fc3\u9500\u6d3b\u52a8",level:2},{value:"\u4e09\u3001\u4e2d\u95f4\u4ee3\u7801\u548cUI\u754c\u9762\u7684\u6d4b\u8bd5\u65b9\u5f0f",id:"\u4e09\u4e2d\u95f4\u4ee3\u7801\u548cui\u754c\u9762\u7684\u6d4b\u8bd5\u65b9\u5f0f",level:2},{value:"\u56db\u3001\u603b\u7ed3",id:"\u56db\u603b\u7ed3",level:2}],i={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u4ec0\u4e48\u662f-keystone-"},"\u4e00\u3001\u4ec0\u4e48\u662f Keystone \uff1f"),(0,o.kt)("p",null,"\u5bf9\u8f6f\u4ef6\u7814\u53d1\u56e2\u961f\u6765\u8bf4\uff0c\u8d8a\u662f\u9891\u7e41\u5730\u96c6\u6210\u4ed6\u4eec\u7684\u4ee3\u7801\uff0c\u5de5\u4f5c\u5c31\u8d8a\u8f7b\u677e\u3002\u540c\u65f6\uff0c\u8d8a\u9891\u7e41\u53d1\u5e03\u529f\u80fd\u8fed\u4ee3\uff0c\u4ea7\u54c1\u5c31\u8d8a\u6709\u4ef7\u503c\u3002\u4f46\u662f\u56e2\u961f\u5e76\u4e0d\u60f3\u628a\u5f00\u53d1\u4e86\u4e00\u534a\u7684\u529f\u80fd\u66b4\u9732\u7ed9\u7528\u6237\u3002\u5bf9\u8fd9\u79cd\u77db\u76fe\u7684\u4e00\u4e2a\u6709\u6548\u7684\u5904\u7406\u673a\u5236\u5c31\u662f\u5148\u6784\u5efa\u6240\u6709\u7684\u540e\u7aef\u4ee3\u7801\uff0c\u96c6\u6210\u5230\u4ea7\u54c1\uff0c\u4f46\u4e0d\u63d0\u4f9b\u7528\u6237\u754c\u9762\u3002\u8fd9\u4e2a\u529f\u80fd\u53ef\u4ee5\u5728\u7528\u6237\u7aef\u65e0\u611f\u77e5\u7684\u60c5\u51b5\u4e0b\u88ab\u96c6\u6210\u548c\u6d4b\u8bd5\uff0c\u76f4\u5230\u5168\u90e8\u5b8c\u6210\u4e0a\u7ebf\u540e\uff0c\u518d\u5c06\u8fd9\u4e2a\u529f\u80fd\u5c55\u73b0\u7ed9\u7528\u6237\u3002\u5c31\u50cf\u662f Keystone\uff08\u62f1\u9876\u77f3\uff0c\u5efa\u7b51\u5b66\u672f\u8bed\uff0c\u901a\u5e38\u5f15\u7533\u4e3a\u786e\u4fdd\u5176\u4ed6\u90e8\u4ef6\u5c31\u4f4d\u7684\u6838\u5fc3\u5173\u952e\u70b9\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cf1178c16534b89a2837976caf2e528~tplv-k3u1fbpfcp-watermark.image?",alt:"keystone.png"})),(0,o.kt)("h2",{id:"\u4e8c\u9650\u65f6\u7279\u4ef7\u4fc3\u9500\u6d3b\u52a8"},"\u4e8c\u3001\u9650\u65f6\u7279\u4ef7\u4fc3\u9500\u6d3b\u52a8"),(0,o.kt)("p",null,"\u4e3e\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u6bd4\u5982\u8bf4\u7ed9\u7528\u6237\u63a8\u9001\u4e00\u4e2a\u9650\u65f6\u7279\u4ef7\u5546\u54c1\u3002\u8fd9\u6837\u7684\u8ba2\u5355\u4e00\u822c\u90fd\u9700\u8981\u6839\u636e\u7528\u6237\u4f4d\u7f6e\u3001\u914d\u9001\u60c5\u51b5\u7b49\u4fe1\u606f\u786e\u5b9a\u4ef7\u683c\u3002\u6240\u4ee5\u6839\u636e\u7528\u6237\u4f4d\u7f6e\u3001\u65f6\u95f4\u3001\u5546\u54c1\u7c7b\u578b\u7b49\u56e0\u7d20\uff0c\u51b3\u5b9a\u4e86\u7528\u6237\u662f\u5426\u4f1a\u6536\u5230\u8fd9\u79cd\u9650\u65f6\u7279\u4ef7\u5546\u54c1\u7684\u63a8\u9001\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u8fd9\u662f\u4e00\u4e2a\u5f88\u590d\u6742\u7684\u7535\u5546\u8fd0\u4f5c\u903b\u8f91\uff0c\u56e0\u4e3a\u9700\u8981\u6d89\u53ca\u4ed3\u50a8\u91cf\u3001\u5546\u54c1\u76ee\u5f55\u3001\u5ba2\u6237\u670d\u52a1\u7b49\u591a\u4e2a\u7cfb\u7edf\u7684\u534f\u540c\u3002\u5b8c\u6210\u8fd9\u6837\u4e00\u4e2a\u6d41\u7a0b\u7684\u5f00\u53d1\uff0c\u53ef\u80fd\u9700\u8981\u51e0\u5468\u7684\u7684\u65f6\u95f4\uff0c\u540c\u65f6\uff0c\u53e6\u4e00\u4e9b\u529f\u80fd\u53ef\u80fd\u9700\u8981\u6bcf\u9694\u51e0\u5929\u5c31\u53d1\u5e03\u4e00\u6b21\u3002\u800c\u5bf9\u5ba2\u6237\u800c\u8a00\uff0c\u7279\u4ef7\u5546\u54c1\u63a8\u9001\u53ea\u662f\u8ba2\u5355\u8868\u683c\u4e0a\u7684\u4e00\u4e2a\u9009\u62e9\u6846\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u8ba9\u9009\u62e9\u6846\u4f5c\u4e3a Keystone\u3002\u7814\u53d1\u56e2\u961f\u53ef\u4ee5\u8de8\u591a\u4e2a\u4ea7\u54c1\u53d1\u5e03\u5468\u671f\u8fdb\u884c\u5185\u90e8\u7cfb\u7edf\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u63a5\u53e3\u5f00\u53d1\u3002\u7528\u6237\u611f\u77e5\u4e0d\u5230\u8fd9\u4e9b\u4ee3\u7801\u6539\u52a8\u3002\u6700\u540e\u4e00\u6b65\u662f\u8ba9\u7528\u6237\u770b\u5230\u8fd9\u4e2a\u7279\u4ef7\u63a8\u9001\u7684\u9009\u62e9\u6846 UI \u754c\u9762\uff0c\u901a\u5e38\u8fd9\u7528\u4e0d\u4e86\u591a\u5c11\u5f00\u53d1\u65f6\u95f4\u3002\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u6240\u6709\u4e2d\u95f4\u4ee3\u7801\u90fd\u80fd\u591f\u53c2\u4e0e\u96c6\u6210\uff0c\u5e76\u968f\u7740\u4ea7\u54c1\u53d1\u5e03\u5468\u671f\u90e8\u7f72\u5728\u7ebf\u4e0a\uff0c\u8fd9\u6837\u5c31\u907f\u514d\u4e86\u957f\u65f6\u95f4\u4f7f\u7528 feature branch\uff08\u7279\u6027\u5206\u652f\u2014\u2014\u4e00\u79cd\u5206\u652f\u7ba1\u7406\u6a21\u5f0f\uff09\u5e26\u6765\u7684\u98ce\u9669\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/436e514e73de4dc9b434d4344574bb09~tplv-k3u1fbpfcp-watermark.image?",alt:"\u56fe\u7247 1.png"})),(0,o.kt)("h2",{id:"\u4e09\u4e2d\u95f4\u4ee3\u7801\u548cui\u754c\u9762\u7684\u6d4b\u8bd5\u65b9\u5f0f"},"\u4e09\u3001\u4e2d\u95f4\u4ee3\u7801\u548cUI\u754c\u9762\u7684\u6d4b\u8bd5\u65b9\u5f0f"),(0,o.kt)("p",null,"\u4e2d\u95f4\u4ee3\u7801\u9700\u8981\u50cf\u7ebf\u4e0a\u4ee3\u7801\u4e00\u6837\u63a5\u53d7\u4e25\u683c\u7684\u6d4b\u8bd5\u3002\u8fd9\u9700\u8981\u7cfb\u7edf\uff08\u6d4b\u8bd5\uff09\u5206\u5c42\u642d\u5efa\uff0c\u800c\u4e0d\u662f\u6240\u6709\u6d4b\u8bd5\u90fd\u4f9d\u8d56\u4e8e\u7528\u6237\u9875\u9762\u7684\u89e6\u53d1\u3002\u5355\u5143\u6d4b\u8bd5\u548c Test Pyramid\uff08\u6d4b\u8bd5\u91d1\u5b57\u5854\uff09\u4e2d\u7684\u4f4e\u5c42\u6d4b\u8bd5\u90fd\u5e94\u5f53\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\u3002\u751a\u81f3 Broad Stack Test \u90fd\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\uff0c\u53ea\u8981\u63d0\u4f9b\u4e00\u5b9a\u7684\u673a\u5236\u4f7f\u5b83\u4eec\u6210\u4e3a Subcutaneous Tests\u3002\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cUI \u5c42\u672c\u8eab\u5305\u542b\u4e86\u590d\u6742\u7684\u884c\u4e3a\uff0c\u4e0d\u8fc7\u53ea\u8981\u8bbe\u8ba1\u5f97\u5f53\uff0cUI \u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fdb\u5165 Humble Object \u7684\u65b9\u5f0f\u5f97\u5230\u6d4b\u8bd5\u3002"),(0,o.kt)("p",null,'\u5e76\u975e\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u7684\u6784\u5efa\u65b9\u5f0f\u90fd\u652f\u6301\u8fd9\u79cd\u5927\u8986\u76d6\u9762\u7684"\u76ae\u4e0b"\u6d4b\u8bd5\uff0c\u4f46\u5373\u4f7f\u65e0\u6cd5\u4f7f\u7528 Keystone \u6a21\u5f0f\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u539f\u5219\u4e5f\u662f\u6709\u4ef7\u503c\u7684\u3002\u5373\u4f7f\u7528\u6700\u597d\u7684\u5de5\u5177\u53bb\u81ea\u52a8\u5316\u8fd9\u4e00\u8fc7\u7a0b\uff0c\u4ece UI \u5c42\u89e6\u53d1\u7684\u6d4b\u8bd5\u4e5f\u603b\u662f\u5f88\u96be\u642d\u5efa\u7684\u3002\u5c06\u66f4\u591a\u7684\u6d4b\u8bd5\u8f6c\u79fb\u5230\u754c\u9762\u5c42\u4ee5\u4e0b\u5404\u5c42\u7ea7\uff0c\u7279\u522b\u662f\u5355\u5143\u6d4b\u8bd5\u5c42\uff0c\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u90e8\u7f72\u6d41\u6c34\u7ebf\u7684\u901f\u5ea6\uff0c\u5b9e\u73b0\u6301\u7eed\u4ea4\u4ed8\u3002'),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u5927\u591a\u6570\u7684 UI \u53d8\u5316\u4f1a\u6bd4\u6dfb\u52a0\u4e00\u4e2a\u9009\u62e9\u6846\u590d\u6742\uff0c\u5373\u4fbf\u5982\u6b64\uff0c\u5e94\u7528 Keystone\u6a21\u5f0f\u4e5f\u5e76\u4e0d\u4f1a\u589e\u52a0\u592a\u591a\u5de5\u4f5c\u91cf\u3002\u5728 Web \u5e94\u7528\u4e2d\uff0c\u4e00\u4e2a\u590d\u6742\u7684\u529f\u80fd\u901a\u5e38\u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u9875\u9762\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u6784\u5efa\u548c\u6d4b\u8bd5\u3002\u8fd9\u79cd\u573a\u666f\u4e0b\uff0cKeystone \u5c31\u662f\u4e00\u4e2a\u94fe\u63a5\u3002\u684c\u9762\u5e94\u7528\u53ef\u80fd\u8bbe\u8ba1\u591a\u4e2a\u754c\u9762\u53d8\u5316\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cKeystone \u53ef\u4ee5\u662f\u4e00\u4e2a\u80fd\u5c55\u793a\u8fd9\u4e9b\u754c\u9762\u7684\u83dc\u5355\u9879\u3002"),(0,o.kt)("p",null,"\u5c3d\u7ba1\u5982\u6b64\uff0c\u786e\u5b9e\u5b58\u5728\u4e00\u4e9b\u573a\u666f\u7528\u6237\u754c\u9762\u4e0d\u80fd\u88ab\u7b80\u5355\u5730\u6253\u5305\u901a\u8fc7\u4e00\u4e2a Keystone \u63a7\u5236\u3002\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u7528\u5230\u529f\u80fd\u5f00\u5173\u4e86\u3002\u5373\u4fbf\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cKeystone \u7684\u6982\u5ff5\u4e5f\u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u5c06\u529f\u80fd\u5f00\u5173\u7684\u5b9e\u73b0\u9650\u5b9a\u5728UI\u5c42\u63a7\u5236\u4e0a\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5f00\u5173\u56db\u5904\u6563\u843d\u5728\u540e\u7aef\u4ee3\u7801\u4e2d\uff0c\u964d\u4f4e\u4e86\u5f00\u5173\u5e94\u7528\u7684\u590d\u6742\u6027\uff0c\u66f4\u597d\u5730\u8d2f\u5f7b\u5355\u5f00\u5173\u673a\u5236\uff0c\u4e5f\u4e3a\u540e\u7eed\u7684\u5f00\u5173\u6e05\u7406\u964d\u4f4e\u4e86\u96be\u5ea6\u3002"),(0,o.kt)("h2",{id:"\u56db\u603b\u7ed3"},"\u56db\u3001\u603b\u7ed3"),(0,o.kt)("p",null,"\u540e\u7aef\u5148\u884c\uff0c\u6700\u540e\u518d\u5f00\u53d1 UI \u754c\u9762\u7684\u65b9\u5f0f\u4e5f\u5b58\u5728\u4e00\u4e2a\u6f5c\u5728\u7684\u98ce\u9669\uff0c\u5c31\u662f\u540e\u7aef\u4ee3\u7801\u7684\u8bbe\u8ba1\u53ef\u80fd\u65e0\u6cd5\u4e0e\u540e\u5f00\u53d1\u7684UI\u534f\u8c03\u4e00\u81f4\uff0c\u6216\u8005\u5728\u540e\u671fUI\u5b9e\u73b0\u65f6\u624d\u53d1\u73b0\u8bbe\u8ba1\u70b9\u9057\u6f0f\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u53cd\u9988\u5ef6\u8fdf\u5e76\u5e26\u6765\u7cdf\u7cd5\u7684\u7528\u6237\u4f53\u9a8c\u3002\u56e0\u6b64\uff0c\u53ea\u6709\u5728\u4ea7\u54c1\u4e0a\u652f\u6301\u529f\u80fd\u5782\u76f4\u5212\u5206\uff0c\u7814\u53d1\u4e0a\u80fd\u591f\u6309\u529f\u80fd\u7c92\u5ea6\u5feb\u901f\u53d1\u5e03\u7684\u56e2\u961f\u4e2d\uff0cKeystone \u6a21\u5f0f\u624d\u80fd\u591f\u53d1\u6325\u6700\u5927\u7684\u4ef7\u503c\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u53ea\u662f\u4e3e\u4f8b\u4e86\u4e00\u4e2a\u7528\u6237\u754c\u9762\u7684\u5c0f\u4f8b\u5b50\uff0c\u4f46\u540c\u6837\u7684\u65b9\u6cd5\u9002\u7528\u4e8e\u4efb\u4f55\u754c\u9762\u53d8\u5316\uff0c\u4f8b\u5982 API\u3002\u901a\u8fc7\u6700\u540e\u518d\u63d0\u4f9b\u7528\u6237\u754c\u9762\uff0c\u5e76\u4e14\u4fdd\u6301\u7b80\u6d01\u7684\u65b9\u5f0f\uff0c\u5373\u4f7f\u662f\u5f88\u5927\u7684\u529f\u80fd\u5347\u7ea7\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u9010\u4e2a\u90e8\u5206\u589e\u91cf\u6784\u5efa\u3001\u96c6\u6210\u6765\u5b8c\u6210\u3002"),(0,o.kt)("p",null,"\u5728 FeatureProbe \xa0\u5c31\u53ef\u4ee5\u5b9e\u73b0 Keystone \u6a21\u5f0f\uff0c\u505a\u5230\u540e\u7aef\u4ee3\u7801\u4e0eUI \u754c\u9762\u5206\u5f00\u90e8\u7f72\u6d4b\u8bd5\u3002\u7814\u53d1\u56e2\u961f\u53ef\u4ee5\u5148\u5f00\u53d1\u540e\u7aef\u4ee3\u7801\u90e8\u7f72\uff0c\u7528\u6237\u4fa7\u65e0\u611f\u77e5\u8fd9\u4e00\u5757\u529f\u80fd\u6838\u5fc3\u529f\u80fd\u5df2\u7ecf\u90e8\u7f72\u5230\u7cfb\u7edf\u4e0a\u4e86\uff0c\u786e\u4fdd\u65b0\u529f\u80fd\u540e\u7aef\u4ee3\u7801\u6ca1\u6709\u95ee\u9898\u540e\uff0c\u5728 FeatureProbe \u540e\u53f0\u64cd\u4f5c\u9875\u9762\uff0c\u53ef\u4ee5\u4e00\u952e\u5f00\u542f UI \u754c\u9762\u529f\u80fd\uff0c\u6d4b\u8bd5 UI \u754c\u9762\u529f\u80fd\u6ca1\u6709\u95ee\u9898\u540e\uff0c\u518d\u5c06\u8fd9\u4e2a\u65b0\u529f\u80fd\u5f00\u653e\u7ed9\u7528\u6237\u3002"),(0,o.kt)("p",null,"\u76ee\u524d FeatureProbe \u4f7f\u7528 Apache 2.0 License \u534f\u8bae\u5df2\u7ecf\u5b8c\u5168\u5f00\u6e90\u3002\u4f60\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe"},"GitHub")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/featureprobe"},"Gitee")," \u83b7\u53d6\u5230\u6240\u6709\u6e90\u7801\u3002"),(0,o.kt)("p",null,"\u4e0e\u6b64\u540c\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u65e0\u9700\u90e8\u7f72\u7684\u5728\u7ebf",(0,o.kt)("a",{parentName:"p",href:"https://featureprobe.io"},"\u8bd5\u7528\u73af\u5883"),"\u548c\u4e00\u4e2a\u4ec5\u97005\u5206\u949f\u5373\u53ef\u4f53\u9a8c\u7684",(0,o.kt)("a",{parentName:"p",href:"https://featureprobe.io/demo/"},"\u793a\u4f8b\u9879\u76ee"),"\u3002"))}s.isMDXComponent=!0}}]);