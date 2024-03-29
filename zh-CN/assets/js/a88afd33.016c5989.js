"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[9869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:12},i="\u524d\u7f6e\u5f00\u5173",l={unversionedId:"how-to/platform/Prerequisites",id:"how-to/platform/Prerequisites",title:"\u524d\u7f6e\u5f00\u5173",description:"\u524d\u7f6e\u5f00\u5173\u5141\u8bb8\u60a8\u5728FeatureProbe\u4e2d\u63a7\u5236\u529f\u80fd\u5f00\u5173\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u60a8\u53ef\u4ee5\u4f7f\u4e00\u4e2a\u529f\u80fd\u5f00\u5173\u4f9d\u8d56\u4e8e\u5176\u4ed6\u529f\u80fd\u5f00\u5173\u7684\u67d0\u4e9b\u6761\u4ef6\u624d\u80fd\u751f\u6548\u3002\u901a\u8fc7\u6dfb\u52a0\u524d\u7f6e\u6761\u4ef6\u5b9e\u73b0\u590d\u6742\u5b9e\u9a8c\u4eba\u7fa4\u7684\u9009\u62e9\u6216\u5b9e\u9a8c\u5c42\u5207\u5206\u6d41\u91cf\u7b49",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/platform/Prerequisites.md",sourceDirName:"how-to/platform",slug:"/how-to/platform/Prerequisites",permalink:"/FeatureProbeDocs/zh-CN/how-to/platform/Prerequisites",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/platform/Prerequisites.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"defaultSidebar",previous:{title:"\u5982\u4f55\u4f7f\u7528Event Tracker",permalink:"/FeatureProbeDocs/zh-CN/how-to/platform/Event tracker"},next:{title:"Server-Side SDKs",permalink:"/FeatureProbeDocs/zh-CN/category/server-side-sdks"}},u={},c=[{value:"\u4f7f\u7528\u524d\u7f6e\u5f00\u5173",id:"\u4f7f\u7528\u524d\u7f6e\u5f00\u5173",level:2},{value:"\u5220\u9664\u5177\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u529f\u80fd\u5f00\u5173",id:"\u5220\u9664\u5177\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u529f\u80fd\u5f00\u5173",level:2}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u524d\u7f6e\u5f00\u5173"},"\u524d\u7f6e\u5f00\u5173"),(0,o.kt)("p",null,"\u524d\u7f6e\u5f00\u5173\u5141\u8bb8\u60a8\u5728FeatureProbe\u4e2d\u63a7\u5236\u529f\u80fd\u5f00\u5173\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u60a8\u53ef\u4ee5\u4f7f\u4e00\u4e2a\u529f\u80fd\u5f00\u5173\u4f9d\u8d56\u4e8e\u5176\u4ed6\u529f\u80fd\u5f00\u5173\u7684\u67d0\u4e9b\u6761\u4ef6\u624d\u80fd\u751f\u6548\u3002\u901a\u8fc7\u6dfb\u52a0\u524d\u7f6e\u6761\u4ef6\u5b9e\u73b0\u590d\u6742\u5b9e\u9a8c\u4eba\u7fa4\u7684\u9009\u62e9\u6216\u5b9e\u9a8c\u5c42\u5207\u5206\u6d41\u91cf\u7b49"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u524d\u7f6e\u5f00\u5173"},"\u4f7f\u7528\u524d\u7f6e\u5f00\u5173"),(0,o.kt)("p",null,'\u60a8\u53ef\u4ee5\u5728\u5f00\u5173\u914d\u7f6e\u7684"\u76ee\u6807\u4eba\u7fa4\u201d\u9009\u9879\u5361\u4e2d\u7ba1\u7406\u524d\u7f6e\u6761\u4ef6\u3002'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add prerequisites",src:r(7949).Z,width:"2380",height:"722"})),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c\u8be5\u5f00\u5173\u914d\u7f6e\u4e86\u524d\u7f6e\u5f00\u5173 campaign_percentage_rollout \u7684",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u5206\u7ec4\uff0c\u4f5c\u4e3a\u524d\u7f6e\u6761\u4ef6\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u6709\u547d\u4e2d\u4e86\u524d\u7f6e\u5f00\u5173 campaign_percentage_rollout \u7684",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u5206\u7ec4\u7684\u7528\u6237\uff0c\u624d\u80fd\u8fdb\u5165\u5230\u8be5\u5f00\u5173\u4e2d\u3002"),(0,o.kt)("p",null,"\u529f\u80fd\u5f00\u5173\u53ef\u4ee5\u4f9d\u8d56\u4e8e\u591a\u4e2a\u524d\u7f6e\u5f00\u5173\u3002\u5982\u679c\u4e00\u4e2a\u529f\u80fd\u5f00\u5173\u5177\u6709\u591a\u4e2a\u524d\u7f6e\u5f00\u5173\uff0c\u90a3\u4e48FeatureProbe\u5728\u5bf9\u7528\u6237\u8bc4\u4f30\u4f9d\u8d56\u5173\u7cfb\u65f6\u5fc5\u987b\u6ee1\u8db3\u6240\u6709\u524d\u7f6e\u5f00\u5173\u7684\u8981\u6c42\u3002\nFeatureProbe \u4f1a\u81ea\u52a8\u963b\u6b62\u60a8\u4fdd\u5b58\u53ef\u80fd\u5f15\u5165\u524d\u7f6e\u6761\u4ef6\u4e4b\u95f4\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u7684\u66f4\u6539\uff08\u4f9d\u8d56\u5c42\u7ea7\u4e0d\u80fd\u8d85\u8fc720\u5c42\uff09\u3002\u4f8b\u5982\uff0c\u60a8\u5982\u679c\u5c06Toggle A\u8bbe\u4e3aToggle B\u7684\u524d\u7f6e\u6761\u4ef6\uff0c\u5219\u4e0d\u80fd\u5e76\u540c\u65f6\u5c06Toggle B\u8bbe\u4e3aToggle A\u7684\u524d\u7f6e\u6761\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u5220\u9664\u5177\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u529f\u80fd\u5f00\u5173"},"\u5220\u9664\u5177\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u529f\u80fd\u5f00\u5173"),(0,o.kt)("p",null,"\u60a8\u4e0d\u80fd\u5220\u9664\u4f5c\u4e3a\u5176\u4ed6\u529f\u80fd\u5f00\u5173\u300c\u524d\u7f6e\u6761\u4ef6\u300d\u7684\u5f00\u5173\u3002\u60a8\u5fc5\u987b\u5148\u89e3\u9664\u4f9d\u8d56\u5173\u7cfb\uff0c\u624d\u80fd\u5c06\u5176\u5220\u9664\u3002"))}s.isMDXComponent=!0},7949:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/prerequisites-897a9b03b57e0900260963d04d398e87.png"}}]);