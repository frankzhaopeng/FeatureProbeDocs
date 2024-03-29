"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[3031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,d=f["".concat(o,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={slug:"FeatureProbe rust",title:"\u7528 Rust \u5f00\u53d1\u8de8\u5e73\u53f0 SDK \u63a2\u7d22\u548c\u5b9e\u8df5"},l=void 0,u={permalink:"/FeatureProbeDocs/zh-CN/blog/FeatureProbe rust",editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-blog/2022-09-16-feature-probe.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-09-16-feature-probe.md",title:"\u7528 Rust \u5f00\u53d1\u8de8\u5e73\u53f0 SDK \u63a2\u7d22\u548c\u5b9e\u8df5",description:"FeatureProbe \u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u7684\u300e\u529f\u80fd\u300f\u7ba1\u7406\u670d\u52a1\uff0c\u5305\u542b\u4e86\u7070\u5ea6\u653e\u91cf\u3001AB\u5b9e\u9a8c\u3001\u5b9e\u65f6\u914d\u7f6e\u53d8\u66f4\u7b49\u9488\u5bf9\u300e\u529f\u80fd\u7c92\u5ea6\u300f\u7684\u4e00\u7cfb\u5217\u7ba1\u7406\u64cd\u4f5c\u3002\u9700\u8981\u63d0\u4f9b\u5404\u4e2a\u8bed\u8a00\u7684 SDK \u63a5\u5165\uff0c\u5176\u4e2d\u5c31\u5305\u62ec\u79fb\u52a8\u7aef\u7684 iOS \u548c Android \u7684 SDK\uff0c\u90a3\u4e48\u8981\u600e\u4e48\u89e3\u51b3\u8de8\u5e73\u53f0 SDK \u7684\u95ee\u9898\u5462\uff1f",date:"2022-09-16T00:00:00.000Z",formattedDate:"2022\u5e749\u670816\u65e5",tags:[],readingTime:11.37,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"FeatureProbe rust",title:"\u7528 Rust \u5f00\u53d1\u8de8\u5e73\u53f0 SDK \u63a2\u7d22\u548c\u5b9e\u8df5"},prevItem:{title:"\u529f\u80fd\u7ba1\u7406\uff08Feature management\uff09\u4e2d\u7684 Keystone \u6a21\u5f0f",permalink:"/FeatureProbeDocs/zh-CN/blog/FeatureProbe Keystone"},nextItem:{title:"FeatureProbe\uff1a\u529f\u80fd\u7ba1\u7406\u5bf9\u8f6f\u4ef6\u4ea4\u4ed8\u7684\u5f71\u54cd",permalink:"/FeatureProbeDocs/zh-CN/blog/FeatureProbe Architecture"}},o={authorsImageUrls:[]},p=[{value:"\u4e00\u3001\u4e3a\u4ec0\u4e48\u8981\u8de8\u5e73\u53f0\uff1f",id:"\u4e00\u4e3a\u4ec0\u4e48\u8981\u8de8\u5e73\u53f0",level:3},{value:"\u4e8c\u3001\u76ee\u524d\u5e38\u89c1\u7684\u8de8\u5e73\u53f0\u65b9\u6848",id:"\u4e8c\u76ee\u524d\u5e38\u89c1\u7684\u8de8\u5e73\u53f0\u65b9\u6848",level:3},{value:"\u4e09\u3001\u4e3a\u4ec0\u4e48\u7528 Rust \uff1f",id:"\u4e09\u4e3a\u4ec0\u4e48\u7528-rust-",level:3},{value:"\u56db\u3001Uniffi-rs",id:"\u56dbuniffi-rs",level:3},{value:"\u4e94\u3001Uniffi-rs\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"\u4e94uniffi-rs\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:3},{value:"\u516d\u3001\u5982\u4f55\u96c6\u6210\u5230\u9879\u76ee\u4e2d\uff1f",id:"\u516d\u5982\u4f55\u96c6\u6210\u5230\u9879\u76ee\u4e2d",level:3},{value:"\u4e03\u3001\u603b\u7ed3",id:"\u4e03\u603b\u7ed3",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FeatureProbe \u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u7684\u300e\u529f\u80fd\u300f\u7ba1\u7406\u670d\u52a1\uff0c\u5305\u542b\u4e86\u7070\u5ea6\u653e\u91cf\u3001AB\u5b9e\u9a8c\u3001\u5b9e\u65f6\u914d\u7f6e\u53d8\u66f4\u7b49\u9488\u5bf9\u300e\u529f\u80fd\u7c92\u5ea6\u300f\u7684\u4e00\u7cfb\u5217\u7ba1\u7406\u64cd\u4f5c\u3002\u9700\u8981\u63d0\u4f9b\u5404\u4e2a\u8bed\u8a00\u7684 SDK \u63a5\u5165\uff0c\u5176\u4e2d\u5c31\u5305\u62ec\u79fb\u52a8\u7aef\u7684 iOS \u548c Android \u7684 SDK\uff0c\u90a3\u4e48\u8981\u600e\u4e48\u89e3\u51b3\u8de8\u5e73\u53f0 SDK \u7684\u95ee\u9898\u5462\uff1f"),(0,i.kt)("h3",{id:"\u4e00\u4e3a\u4ec0\u4e48\u8981\u8de8\u5e73\u53f0"},"\u4e00\u3001\u4e3a\u4ec0\u4e48\u8981\u8de8\u5e73\u53f0\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4eba\u529b\u6210\u672c\uff0c\u51cf\u5c11\u5f00\u53d1\u65f6\u95f4\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u5e73\u53f0\u5171\u4eab\u4e00\u5957\u4ee3\u7801\uff0c\u540e\u671f\u4ea7\u54c1\u7ef4\u62a4\u7b80\u5355\u3002")),(0,i.kt)("h3",{id:"\u4e8c\u76ee\u524d\u5e38\u89c1\u7684\u8de8\u5e73\u53f0\u65b9\u6848"},"\u4e8c\u3001\u76ee\u524d\u5e38\u89c1\u7684\u8de8\u5e73\u53f0\u65b9\u6848"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C++"))),(0,i.kt)("p",null,"\u5f88\u591a\u516c\u53f8\u7684\u8de8\u5e73\u53f0\u79fb\u52a8\u57fa\u7840\u5e93\u57fa\u672c\u90fd\u6709 C++ \u7684\u5f71\u5b50\uff0c\u5982\u5fae\u4fe1\uff0c\u817e\u8baf\u4f1a\u8bae\uff0c\u8fd8\u6709\u65e9\u671f\u7684 Dropbox\uff0c\u77e5\u540d\u7684\u5f00\u6e90\u5e93\u5982\u5fae\u4fe1\u7684 Mars \u7b49\u3002\u597d\u5904\u662f\u4e00\u5957\u4ee3\u7801\u591a\u7aef\u9002\u914d\uff0c\u4f46\u662f\u9700\u8981\u5927\u516c\u53f8\u5bf9 C++ \u6709\u5f3a\u5927\u7684\u5de5\u5177\u94fe\u652f\u6301\uff0c\u8fd8\u9700\u8981\u82b1\u91cd\u91d1\u8058\u8bf7 C++ \u7814\u53d1\u4eba\u5458\uff0c\u968f\u7740\u56e2\u961f\u4eba\u5458\u53d8\u52a8\uff0c\u4ea7\u54c1\u7ef4\u62a4\u6210\u672c\u4e5f\u4e0d\u53ef\u5ffd\u89c6\uff0c\u6240\u4ee5 Dropbox \u540e\u671f\u4e5f\u653e\u5f03\u4e86\u4f7f\u7528 C++ \u7684\u8de8\u7aef\u65b9\u6848\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rust + FFI"))),(0,i.kt)("p",null,"Rust \u548c\u5bf9\u5e94\u5e73\u53f0\u7684 FFI \u5c01\u88c5\u3002\u5e38\u89c1\u7684\u65b9\u6cd5\u5982\u98de\u4e66\u548c AppFlow \u662f\u901a\u8fc7\u7c7b\u4f3c RPC \u7684\u7406\u5ff5\uff0c\u66b4\u9732\u5c11\u91cf\u7684\u63a5\u53e3\uff0c\u7528\u4f5c\u6570\u636e\u4f20\u8f93\u3002\u597d\u5904\u662f\u590d\u6742\u5ea6\u53ef\u63a7\uff0c\u7f3a\u70b9\u662f\u8981\u8fdb\u884c\u5927\u91cf\u7684\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\uff0c\u540c\u65f6\u4ee3\u7801\u7684\u8868\u8fbe\u4f1a\u53d7\u5230\u9650\u5236\uff0c\u6bd4\u5982\u4e0d\u597d\u8868\u8fbe\u56de\u8c03\u51fd\u6570\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flutter"))),(0,i.kt)("p",null,"\u66f4\u9002\u5408\u4e8e\u6709 UI \u529f\u80fd\u7684\u8de8\u5e73\u53f0\u5b8c\u6574 APP \u89e3\u51b3\u65b9\u6848\uff0c\u4e0d\u9002\u7528\u4e8e\u8de8\u5e73\u53f0\u79fb\u52a8\u7aef SDK \u7684\u65b9\u6848\u3002"),(0,i.kt)("h3",{id:"\u4e09\u4e3a\u4ec0\u4e48\u7528-rust-"},"\u4e09\u3001\u4e3a\u4ec0\u4e48\u7528 Rust \uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u6210\u672c"))),(0,i.kt)("p",null,"\u4e0d\u8003\u8651\u6295\u5165\u6210\u672c\u7684\u8bdd\uff0c\u539f\u751f\u65b9\u6848\u5728\u53d1\u5e03\u3001\u96c6\u6210\u548c\u7528\u6237 Debug \u7b49\u65b9\u9762\u90fd\u4f1a\u66f4\u6709\u4f18\u52bf\u3002\u4f46\u8003\u8651\u5230\u521d\u521b\u56e2\u961f\u914d\u7f6e\u4e24\u4e2a\u8d44\u6df1\u7684\u7814\u53d1\u4eba\u5458\u6765\u7ef4\u62a4\u4e24\u5957 SDK \u9700\u8981\u9762\u4e34\u6210\u672c\u95ee\u9898\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6709\u4e30\u5bcc\u7684 Rust \u8de8\u5e73\u53f0\u7ecf\u9a8c"))),(0,i.kt)("p",null,"\u6211\u4eec\u4e4b\u524d\u6709\u7528\u8fc7 Rust \u5b9e\u73b0\u8fc7\u8de8\u5e73\u53f0\u7684\u7f51\u7edc\u6808\uff0c\u7528 tokio \u548c quinn \u7b49\u9ad8\u8d28\u91cf\u7684 crate \u5b9e\u73b0\u4e86\u4e00\u4e2a\u957f\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5b89\u5168\u7a33\u5b9a"))),(0,i.kt)("p",null,"\uff081\uff09 FeatureProbe \u4f5c\u4e3a\u7070\u5ea6\u53d1\u5e03\u7684\u529f\u80fd\u5e73\u53f0\uff0c\u80a9\u8d1f\u4e86\u964d\u7ea7\u7684\u804c\u8d23\uff0c\u5bf9 SDK \u7684\u7a33\u5b9a\u6027\u8981\u6c42\u66f4\u9ad8\u3002"),(0,i.kt)("p",null,"\uff082\uff09 \u539f\u751f\u79fb\u52a8\u7aef SDK \u4e00\u65e6\u51fa\u73b0\u591a\u7ebf\u7a0b\u5d29\u6e83\u7684\u95ee\u9898\uff0c\u96be\u4ee5\u5b9a\u4f4d\u548c\u6392\u67e5\uff0c\u9700\u8981\u8f83\u957f\u7684\u4fee\u590d\u5468\u671f\u3002"),(0,i.kt)("p",null,"\uff083\uff09 Rust \u7684\u4ee3\u7801\u5929\u751f\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u65e0\u9700\u4f9d\u8d56\u4e8e\u4e30\u5bcc\u7ecf\u9a8c\u7684\u79fb\u52a8\u7aef\u5f00\u53d1\u4eba\u5458\uff0c\u4e5f\u53ef\u4ee5\u4fdd\u8bc1\u63d0\u4f9b\u9ad8\u8d28\u91cf\u3001\u7a33\u5b9a\u7684 SDK\u3002"),(0,i.kt)("h3",{id:"\u56dbuniffi-rs"},"\u56db\u3001Uniffi-rs"),(0,i.kt)("p",null,"uniffi-rs \u662f Mozilla \u51fa\u54c1, \u5e94\u7528\u5728 Firefox mobile browser \u4e0a\u7684 Rust \u516c\u5171\u7ec4\u4ef6\uff0cuniffi-rs \u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b89\u5168")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"uniffi-rs \u7684\u8bbe\u8ba1\u76ee\u6807\u7b2c\u4e00\u6761\u5c31\u662f\u201c\u5b89\u5168\u4f18\u5148\u201d\uff0c\u6240\u6709\u66b4\u9732\u7ed9\u8c03\u7528\u8bed\u8a00\u7684 Rust \u751f\u6210\u7684\u65b9\u6cd5\uff0c\u90fd\u4e0d\u5e94\u8be5\u89e6\u53d1\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6240\u6709\u66b4\u9732\u7ed9\u5916\u90e8\u8bed\u8a00\u7684 Rust Object \u5b9e\u4f8b\u90fd\u8981\u6c42\u662f Send + Sync\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b80\u5355")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u4f7f\u7528\u8005\u53bb\u5b66\u4e60 FFI \u7684\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u5b9a\u4e49\u4e00\u4e2a DSL \u7684\u63a5\u53e3\u62bd\u8c61\uff0c\u6846\u67b6\u751f\u6210\u5bf9\u5e94\u5e73\u53f0\u5b9e\u73b0\uff0c\u4e0d\u7528\u64cd\u5fc3\u8de8\u8bed\u8a00\u7684\u8c03\u7528\u5c01\u88c5\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u9ad8\u8d28\u91cf")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u7684\u6587\u6863\u548c\u6d4b\u8bd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u751f\u6210\u7684\u5bf9\u5e94\u8bed\u8a00\uff0c\u90fd\u7b26\u5408\u98ce\u683c\u8981\u6c42\u3002")),(0,i.kt)("h3",{id:"\u4e94uniffi-rs\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"\u4e94\u3001Uniffi-rs\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"),(0,i.kt)("p",null,"\u9996\u5148\u6211\u4eec clone uniffi-rs \u7684\u9879\u76ee\u5230\u672c\u5730, \u7528\u559c\u6b22\u7684 IDE \u6253\u5f00 arithmetic \u8fd9\u4e2a\u9879\u76ee\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/mozilla/uniffi-rs.git\ncd examples/arithmetic/src\n")),(0,i.kt)("p",null,"\u6211\u4eec\u770b\u4e0b\u8fd9\u4e2a\u6837\u4f8b\u4ee3\u7801\u5177\u4f53\u505a\u4e86\u4ec0\u4e48\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[Error]\nenum ArithmeticError {\n  "IntegerOverflow",\n};\nnamespace arithmetic {\n  [Throws=ArithmeticError]\n  u64 add(u64 a, u64 b);\n};\n')),(0,i.kt)("p",null,"\u5728 arithmetic.udl \u4e2d\uff0c\u6211\u4eec\u770b\u5230\u5b9a\u4e49\u91cc\u4e00\u4e2a Error \u7c7b\u578b\uff0c\u8fd8\u5b9a\u4e49\u4e86 add, sub, div, equal \u56db\u4e2a\u65b9\u6cd5\uff0cnamespace \u7684\u4f5c\u7528\u662f\u5728\u4ee3\u7801\u751f\u6210\u65f6\uff0c\u4f5c\u4e3a\u5bf9\u5e94\u8bed\u8a00\u7684\u5305\u540d\u662f\u5fc5\u987b\u7684\u3002\u6211\u4eec\u63a5\u4e0b\u6765\u770b\u770b lib.rs \u4e2d rust \u90e8\u5206\u662f\u600e\u4e48\u5199\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#[derive(Debug, thiserror::Error)]\npub enum ArithmeticError {\n    #[error("Integer overflow on an operation with {a} and {b}")]\n    IntegerOverflow { a: u64, b: u64 },\n}\nfn add(a: u64, b: u64) -> Result<u64> {\n    a.checked_add(b)\n        .ok_or(ArithmeticError::IntegerOverflow { a, b })\n}\ntype Result<T, E = ArithmeticError> = std::result::Result<T, E>;\n\u200b\nuniffi_macros::include_scaffolding!("arithmetic");\n')),(0,i.kt)("p",null,"\u4e0b\u56fe\u662f\u4e00\u5f20 uniffi-rs \u5404\u4e2a\u6587\u4ef6\u793a\u610f\u56fe\uff0c\u6211\u4eec\u4e00\u8d77\u6765\u770b\u4e0b\uff0c\u4e0a\u9762\u7684 udl \u548c lib.rs \u5c5e\u4e8e\u56fe\u4e2d\u7684\u54ea\u4e2a\u90e8\u5206\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32c38a3310aa4a6fa393db1c718d91d0~tplv-k3u1fbpfcp-zoom-1.image",alt:null}),'\n\u56fe\u4e2d\u6700\u5de6\u8fb9 Interface Definition File \u5bf9\u5e94 arithmetic.udl \u6587\u4ef6\uff0c\u56fe\u4e2d\u6700\u4e0b\u9762\u7ea2\u8272\u7684 Rust Business Logic \u5bf9\u5e94\u5230 example \u4e2d\u7684 lib.rs\uff0ctest/bindings/ \u76ee\u5f55\u4e0b\u7684\u5404\u5e73\u53f0\u7684\u8c03\u7528\u6587\u4ef6\u5bf9\u5e94\u6700\u4e0a\u9762\u7eff\u8272\u7684\u65b9\u5757\uff0c\u90a3\u65b9\u6846\u4e2d\u84dd\u8272\u7684\u7ed1\u5b9a\u6587\u4ef6\u53bb\u54ea\u91cc\u4e86\u5462\uff0c \u6211\u4eec\u53d1\u73b0 lib.rs \u6700\u4e0b\u9762\u6709\u8fd9\u6837\u4e00\u884c\u4ee3\u7801 uniffi_macros::include_scaffolding!("arithmetic"); \u8fd9\u53e5\u4ee3\u7801\u4f1a\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u5f15\u5165\u751f\u6210\u7684\u4ee3\u7801\u505a\u4f9d\u8d56\uff0c\u6211\u4eec\u8fd9\u5c31\u6267\u884c\u4e00\u4e0b\u6d4b\u8bd5\u7528\u4f8b\uff0c\u770b\u770b\u7f16\u8bd1\u51fa\u6765\u7684\u6587\u4ef6\u662f\u4ec0\u4e48\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo test\n")),(0,i.kt)("p",null,"\u5982\u679c\u987a\u5229\u7684\u8bdd\uff0c\u4f60\u4f1a\u770b\u5230\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")),(0,i.kt)("p",null,'\u8fd9\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8fd0\u884c\u4e86 python, ruby, swift \u548c kotlin \u56db\u79cd\u8bed\u8a00\u7684\u8c03\u7528\uff0c\u9700\u8981\u672c\u5730\u6709\u5bf9\u5e94\u8bed\u8a00\u7684\u73af\u5883\uff0c\u5177\u4f53\u5982\u4f55\u5b89\u88c5\u5bf9\u5e94\u73af\u5883\u8d85\u51fa\u4e86\u672c\u6587\u7684\u8303\u56f4\uff0c\u4f46\u662f\u8fd9\u91cc\u7ed9\u5927\u5bb6\u4e00\u4e2a\u65b9\u6cd5\u770b\u5177\u4f53\u6d4b\u8bd5\u7528\u4f8b\u662f\u5982\u4f55\u542f\u52a8\u7684\uff0c\u6211\u4eec\u4ee5 kotlin \u4e3a\u4f8b\uff0c\u5728 uniffi-rs/uniffi_bindgen/src/bindings/kotlin/mod.rs \u6587\u4ef6\u4e2d\u7684 run_script \u65b9\u6cd5\u91cc\uff0c\u5728 Ok(()) \u524d\u9762\u52a0\u4e0a\u4e00\u884c println!("{:?}", cmd); \u518d\u6b21\u8fd0\u884c: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo test -- --nocapture\n")),(0,i.kt)("p",null,"\u5bf9\u5e94\u5e73\u53f0\u4e0b\u7684 run_script \u65b9\u6cd5\u90fd\u53ef\u4ee5\u8fd9\u6837\u62ff\u5230\u5b9e\u9645\u6267\u884c\u7684\u547d\u4ee4\u884c\u5185\u5bb9\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u80fd\u5728 uniffi-rs/target/debug \u4e2d\u770b\u5230\u751f\u6210\u7684\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"arithmetic.jar\narithmetic.py\narithmetic.rb\narithmetic.swift\narithmetic.swiftmodule\narithmeticFFI.h\narithmeticFFI.modulemap\n")),(0,i.kt)("p",null,"\u5176\u4e2d\u7684 jar \u5305\u662f kotlin, py \u662f python\uff0crb \u662f ruby\uff0c\u5269\u4e0b4\u4e2a\u90fd\u662f swift\uff0c\u8fd9\u4e9b\u6587\u4ef6\u662f\u56fe\u4e2d\u4e0a\u9762\u7684\u5e73\u53f0\u7ed1\u5b9a\u6587\u4ef6\uff0c\u6211\u4eec\u4ee5 swift \u7684\u4ee3\u7801\u4e3a\u4f8b\uff0c\u770b\u4e0b\u91cc\u9762\u7684 add \u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public\nfunc add(a: UInt64, b: UInt64)\nthrows\n->\nUInt64\n{\n    return try FfiConverterUInt64.lift(\n        try rustCallWithError(FfiConverterTypeArithmeticError.self) {\n      arithmetic_77d6_add(\n          FfiConverterUInt64.lower(a), \n          FfiConverterUInt64.lower(b), $0)\n  }\n    )\n}\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5b9e\u9645\u8c03\u7528\u7684\u662f FFI \u4e2d\u7684 arithmetic_77d6_add \u65b9\u6cd5\uff0c\u6211\u4eec\u8bb0\u4f4f\u8fd9\u4e2a\u5947\u602a\u540d\u5b57\u3002\u76ee\u524d\u8fd8\u7f3a\u56fe\u4e2d\u7684 Rust scaffolding \u6587\u4ef6\u6ca1\u627e\u5230\uff0c\u5b83\u5b9e\u9645\u85cf\u5728 /uniffi-rs/target/debug/build/uniffi-example-arithmetic \u5f00\u5934\u76ee\u5f55\u7684 out \u6587\u4ef6\u5939\u4e2d\uff0c\u6ce8\u610f\u591a\u6b21\u7f16\u8bd1\u53ef\u80fd\u6709\u591a\u4e2a\u76f8\u540c\u524d\u7f00\u7684\u6587\u4ef6\u5939\u3002\u6211\u4eec\u4ee5 add \u65b9\u6cd5\u4e3a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Top level functions, corresponding to UDL `namespace` functions.\n#[doc(hidden)]\n#[no_mangle]\npub extern "C" fn r#arithmetic_77d6_add(\n        r#a: u64,\n        r#b: u64,\n    call_status: &mut uniffi::RustCallStatus\n)  -> u64 {\n    // If the provided function does not match the signature specified in the UDL\n    // then this attempt to call it will not compile, and will give guidance as to why.\n    uniffi::deps::log::debug!("arithmetic_77d6_add");\n    uniffi::call_with_result(call_status, || {\n        let _retval = r#add(\n            match<u64 as uniffi::FfiConverter>::try_lift(r#a) {\n                Ok(val) => val,\n                Err(err) => return Err(uniffi::lower_anyhow_error_or_panic::<FfiConverterTypeArithmeticError>(err, "a")),\n            }, \n            match<u64 as uniffi::FfiConverter>::try_lift(r#b) {\n                Ok(val) => val,\n                Err(err) => return Err(uniffi::lower_anyhow_error_or_panic::<FfiConverterTypeArithmeticError>(err, "b")),\n            }).map_err(Into::into).map_err(<FfiConverterTypeArithmeticError as uniffi::FfiConverter>::lower)?;\n        Ok(<u64 as uniffi::FfiConverter>::lower(_retval))\n    })\n}\n')),(0,i.kt)("p",null,'\u5176\u4e2d extern "C" \u5c31\u662f Rust \u7528\u6765\u751f\u6210 C \u8bed\u8a00\u7ed1\u5b9a\u7684\u5199\u6cd5\u3002\u6211\u4eec\u7ec8\u4e8e\u77e5\u9053\u8fd9\u4e2a\u5947\u602a\u7684 add \u65b9\u6cd5\u540d\u662f\u5982\u4f55\u751f\u6210\u7684\u4e86\uff0carithmetic_77d6_add \u662f namespace \u52a0\u4e0a\u4ee3\u7801\u54c8\u5e0c\u548c\u65b9\u6cd5\u540d add \u62fc\u63a5\u800c\u6210\u3002\u63a5\u7740\u770b call_status \uff0c\u5b9e\u9645\u662f\u5c01\u88c5\u4e86 add \u65b9\u6cd5\u5b9e\u9645\u7684\u8fd4\u56de\u503c\uff0c call_with_result \u65b9\u6cd5\u5b9a\u4e49\u5728 uniffi-rs/uniffi/src/ffi/rustcalls.rs \u4e2d\uff0c\u4e3b\u8981\u662f\u8bbe\u7f6e\u4e86 panichook, \u8ba9 Rust \u4ee3\u7801\u53d1\u751f\u5d29\u6e83\u65f6\u6709\u6392\u67e5\u7684\u4fe1\u606f\u3002arithmetic_77d6_add \u7684\u6838\u5fc3\u903b\u8f91\u662f let _retval = r#add(a, b), \u5176\u4e2d\u7684 a\uff0cb \u5728\u4e00\u4e2a match \u8bed\u53e5\u5305\u88f9\uff0c\u91cc\u9762\u7684 lift \u548c lower \u4e3b\u8981\u505a\u7684\u662f Rust \u7c7b\u578b\u548c C \u7684 FFI \u4e2d\u7684\u7c7b\u578b\u8f6c\u6362\uff0c\u5177\u4f53\u53ef\u4ee5\u770b  ',(0,i.kt)("a",{parentName:"p",href:"https://mozilla.github.io/uniffi-rs/internals/lifting_and_lowering.html"},"\u8fd9\u91cc\u3002")),(0,i.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u5c31\u51d1\u9f50\u4e86\u4e0a\u56fe\u4e2d\u7684\u6240\u6709\u90e8\u5206\uff0c\u660e\u767d\u4e86 uniffi-rs \u7684\u6574\u4f53\u6d41\u7a0b\u3002"),(0,i.kt)("h3",{id:"\u516d\u5982\u4f55\u96c6\u6210\u5230\u9879\u76ee\u4e2d"},"\u516d\u3001\u5982\u4f55\u96c6\u6210\u5230\u9879\u76ee\u4e2d\uff1f"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u77e5\u9053\u5982\u4f55\u7528 uniffi-rs \u751f\u6210\u5bf9\u5e94\u5e73\u53f0\u7684\u4ee3\u7801\uff0c\u5e76\u901a\u8fc7\u547d\u4ee4\u884c\u53ef\u4ee5\u8c03\u7528\u6267\u884c\uff0c\u4f46\u662f\u6211\u4eec\u8fd8\u4e0d\u77e5\u9053\u5982\u4f55\u96c6\u6210\u5230\u5177\u4f53\u7684 Android \u6216\u8005 Xcode \u7684\u9879\u76ee\u4e2d\u3002\u5728 uniffi-rs \u7684\u5e2e\u52a9\u6587\u6863\u4e2d\uff0c\u6709 Gradle \u548c XCode \u7684\u96c6\u6210\u6587\u6863\uff0c\u4f46\u662f\u8bfb\u8fc7\u4e4b\u540e\uff0c\u8fd8\u662f\u5f88\u96be\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/196d0f91b87a4da090954a2ddbe7efe5~tplv-k3u1fbpfcp-zoom-1.image",alt:null}),"\n\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u6709\u4e2a Rust \u7684\u58f3\u5de5\u7a0b\u4f5c\u4e3a\u552f\u4e00\u751f\u6210\u4e8c\u8fdb\u5236\u7684 crate\uff0c\u5176\u4ed6\u7ec4\u4ef6\u5982 autofill, logins, sync_manager \u4f5c\u4e3a\u58f3\u5de5\u7a0b\u7684\u4f9d\u8d56\uff0c\u628a udl \u6587\u4ef6\u7edf\u4e00\u751f\u6210\u5230\u4e00\u4e2a\u8def\u5f84\uff0c\u6700\u7ec8\u7edf\u4e00\u751f\u6210\u7ed1\u5b9a\u6587\u4ef6\u548c\u4e8c\u8fdb\u5236\u3002\u597d\u5904\u662f\u907f\u514d\u4e86\u591a\u4e2a rust crate \u4e4b\u95f4\u7684\u8c03\u7528\u6d88\u8017\uff0c\u53ea\u751f\u6210\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u7f16\u8bd1\u53d1\u5e03\u96c6\u6210\u4f1a\u66f4\u5bb9\u6613\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b89\u5353\u5e73\u53f0"),"\uff1a\u662f\u751f\u6210\u4e00\u4e2a aar \u7684\u5305\uff0cMozilla \u56e2\u961f\u63d0\u4f9b\u4e86\u4e00\u4e2a org.mozilla.rust-android-gradle.rust-android \u7684 gradle \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/application-services/blob/main/megazords/full/android/build.gradle",title:"Mozilla/application-service"},"Mozilla")," \u627e\u5230\u5177\u4f53\u4f7f\u7528\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u82f9\u679c\u5e73\u53f0"),"\uff1a\u662f\u4e00\u4e2a xcframework\uff0cMozilla \u7684\u56e2\u961f\u63d0\u4f9b\u4e86\u4e00\u4e2a build-xcframework.sh \u7684\u811a\u672c\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/application-services/blob/main/megazords/full/android/build.gradle",title:"Mozilla/application-service"},"Mozilla")," \u627e\u5230\u5177\u4f53\u7684\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u9002\u5f53\u7684\u4fee\u6539\u4e0b\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u51fa\u81ea\u5df1\u7684\u8de8\u5e73\u53f0\u7684\u9879\u76ee\u3002"),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\u6211\u4eec\u4f7f\u7528 uniffi-rs Mozilla \u7684\u9879\u76ee\u8fd8\u662f\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u8fd9\u91cc\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile",title:"mobile sdk"},"mobile sdk")," \u6765\u5b66\u4e60\u5982\u4f55\u6253\u9020\u81ea\u5df1\u7684\u8de8\u5e73\u53f0\u7ec4\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/rust-core",title:"rust-core"},"rust-core")," \u662f\u7eaf rust \u7684 crate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/rust-uniffi",title:"rust-uniffi"},"rust-uniffi")," \u662f udl \u548c rust-core \u4f9d\u8d56\u4e00\u8d77\u751f\u6210\u7ed1\u5b9a\u7684 crate\n-",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-android",title:" rust-android "}," rust-android "),"\u662f\u751f\u6210 aar \u5305\u7684\u5b89\u5353\u9879\u76ee\uff0c\u5177\u4f53\u662f\u901a\u8fc7 gradle \u63d2\u4ef6\u6765\u8fdb\u884c\u96c6\u6210 "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios",title:"rust-ios"},"rust-ios ")," \u662f\u751f\u6210 xcframework \u7684\u82f9\u679c\u9879\u76ee\uff0c\u901a\u8fc7 build-xcframewok.sh \u811a\u672c\u96c6\u6210")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5927\u5bb6\u4e5f\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/actions",title:"Github Actions"},"Github Actions")," \u7f16\u8bd1\u548c\u6784\u5efa\u3002"),(0,i.kt)("h3",{id:"\u4e03\u603b\u7ed3"},"\u4e03\u3001\u603b\u7ed3"),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Rust \u6765\u5f00\u53d1\u8de8\u5e73\u53f0 App\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe",title:"GitHub"},"GitHub")," \u6216 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/featureprobe",title:"Gitee"},"Gitee")," \u83b7\u53d6\u5230\u6211\u4eec\u7528 Rust \u5b9e\u73b0\u8de8\u5e73\u53f0\u5f00\u53d1\u7684\u6240\u6709\u4ee3\u7801\u3002"))}c.isMDXComponent=!0}}]);