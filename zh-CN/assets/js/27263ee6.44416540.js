"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[4526],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(o),k=n,d=u["".concat(c,".").concat(k)]||u[k]||b[k]||a;return o?r.createElement(d,l(l({ref:t},s),{},{components:o})):r.createElement(d,l({ref:t},s))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3035:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:7},l="\u914d\u7f6eWebhook",i={unversionedId:"how-to/platform/webhooks",id:"how-to/platform/webhooks",title:"\u914d\u7f6eWebhook",description:"FeatureProbe\u63d0\u4f9b\u63a8\u9001\u6d88\u606f\u5230\u7b2c\u4e09\u65b9\u5e94\u7528\u7684\u80fd\u529b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/platform/webhooks.md",sourceDirName:"how-to/platform",slug:"/how-to/platform/webhooks",permalink:"/FeatureProbeDocs/zh-CN/how-to/platform/webhooks",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/platform/webhooks.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"\u5f00\u5173\u5ba1\u6279",permalink:"/FeatureProbeDocs/zh-CN/how-to/platform/approval"},next:{title:"Open API Tokens",permalink:"/FeatureProbeDocs/zh-CN/how-to/platform/token"}},c={},p=[{value:"\u521b\u5efaWebHook",id:"\u521b\u5efawebhook",level:2},{value:"\u7f16\u8f91WebHook",id:"\u7f16\u8f91webhook",level:2},{value:"\u5220\u9664WebHook",id:"\u5220\u9664webhook",level:2},{value:"\u5904\u7406WebHook\u6d88\u606f",id:"\u5904\u7406webhook\u6d88\u606f",level:2}],s={toc:p};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u914d\u7f6ewebhook"},"\u914d\u7f6eWebhook"),(0,n.kt)("p",null,"FeatureProbe\u63d0\u4f9b\u63a8\u9001\u6d88\u606f\u5230\u7b2c\u4e09\u65b9\u5e94\u7528\u7684\u80fd\u529b\u3002\n",(0,n.kt)("img",{alt:"WebHook list",src:o(4934).Z,width:"2794",height:"730"})),(0,n.kt)("h2",{id:"\u521b\u5efawebhook"},"\u521b\u5efaWebHook"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"WebHook\u7684\u72b6\u6001\uff08\u5f00\u542f\u540e\uff0cWebHook\u7684\u914d\u7f6e\u5185\u5bb9\u624d\u80fd\u751f\u6548\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5199WebHook\u540d\u79f0"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5199\u63cf\u8ff0\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5199URL\uff08\u5f53\u7279\u5b9a\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u6211\u4eec\u5c06\u53d1\u9001\u4e00\u4e2aPOST\u6d88\u606f\u5230\u8fd9\u4e2aURL\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u521b\u5efa\u6309\u94ae\uff0c\u5373\u53ef\u5b8c\u6210WebHook\u7684\u521b\u5efa\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create WebHook",src:o(5165).Z,width:"942",height:"696"})),(0,n.kt)("h2",{id:"\u7f16\u8f91webhook"},"\u7f16\u8f91WebHook"),(0,n.kt)("p",null,"WebHookURL\u53d8\u66f4\u540e\uff0c\u5f53\u7279\u5b9a\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u6211\u4eec\u5c06\u53d1\u9001POST\u6d88\u606f\u5230\u8fd9\u4e2a\u65b0\u7684URL\u3002"),(0,n.kt)("h2",{id:"\u5220\u9664webhook"},"\u5220\u9664WebHook"),(0,n.kt)("p",null,"\u5220\u9664WebHook\u540e\uff0c\u6211\u4eec\u5c06\u505c\u6b62\u53d1\u9001\u4efb\u4f55POST\u6d88\u606f\u5230\u8fd9\u4e2aURL\u3002"),(0,n.kt)("h2",{id:"\u5904\u7406webhook\u6d88\u606f"},"\u5904\u7406WebHook\u6d88\u606f"),(0,n.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u63a5\u5165\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"../../reference/webhook-access"},"WebHook\u6d88\u606f\u683c\u5f0f")))}b.isMDXComponent=!0},5165:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/WebHook-cddbbb290872929932f1d3c990633956.png"},4934:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/WebHook_list-cbcb70971e00bc49784fb906d70e78e2.png"}}]);