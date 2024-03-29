"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:2},o="SDK Introduction",l={unversionedId:"reference/sdk-introduction",id:"reference/sdk-introduction",title:"SDK Introduction",description:"This document mainly introduces the classification, implementation, similarities and differences of SDKs.",source:"@site/docs/reference/sdk-introduction.md",sourceDirName:"reference",slug:"/reference/sdk-introduction",permalink:"/FeatureProbeDocs/reference/sdk-introduction",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/reference/sdk-introduction.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"FeatureProbe  Architecture",permalink:"/FeatureProbeDocs/reference/structure"},next:{title:"SDK implementation principle",permalink:"/FeatureProbeDocs/reference/sdk-specification"}},s={},u=[{value:"SDK Implementation",id:"sdk-implementation",level:2},{value:"Differences between SDKs",id:"differences-between-sdks",level:2},{value:"Client-side SDK",id:"client-side-sdk",level:3},{value:"Server-side SDK",id:"server-side-sdk",level:3},{value:"SDK Key",id:"sdk-key",level:2},{value:"Core Data Structure",id:"core-data-structure",level:2},{value:"Privacy",id:"privacy",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk-introduction"},"SDK Introduction"),(0,i.kt)("p",null,"This document mainly introduces the classification, implementation, similarities and differences of SDKs."),(0,i.kt)("h2",{id:"sdk-implementation"},"SDK Implementation"),(0,i.kt)("p",null,"SDK matches the user attributes according to the toggle rules pre-configured in the UI platform of FeatureProbe, and returns the rule value. "),(0,i.kt)("h2",{id:"differences-between-sdks"},"Differences between SDKs"),(0,i.kt)("p",null,"At present, the SDK has two types: Client-side SDK and Server-side SDK."),(0,i.kt)("h3",{id:"client-side-sdk"},"Client-side SDK"),(0,i.kt)("p",null,"It is mainly aimed at the device environment of APP users such as browsers and mobile device, including three categories: JavaScript, Android and iOS. Compared with the Server-side SDK."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generally, the Client SDK has a one-to-one relationship with the user, and the Client SDK always represents the result of the same user requesting the toggle."),(0,i.kt)("li",{parentName:"ul"},"The performance and security level of the equipment is not as good as the server in the IDC")),(0,i.kt)("h3",{id:"server-side-sdk"},"Server-side SDK"),(0,i.kt)("p",null,"It is mainly used in the back-end services of business systems, and supports Golang, Java, Rust, Python, Node.js and other languages. Has the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The backend service of the business system usually handles a large number of user requests, and needs to request the FeatureProbe SDK on behalf of different users to get the toggle results of each user."),(0,i.kt)("li",{parentName:"ul"},"The server has high performance and can undertake part of the computing tasks")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To learn more about the difference between Client-side SDK and Server-side SDK, you can view the ",(0,i.kt)("a",{parentName:"p",href:"/reference/sdk-specification"},"SDK Specification")," document.")),(0,i.kt)("h2",{id:"sdk-key"},"SDK Key"),(0,i.kt)("p",null,"Client SDK Key can only be used in Client-side SDK, and can only pull calculation results."),(0,i.kt)("p",null,"Server SDK Key can only be used in Server-side SDK, and can only pull calculation rules and evaluate them in real time in the SDK."),(0,i.kt)("h2",{id:"core-data-structure"},"Core Data Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FPConfig"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remote url"),": url to connect featureprobe service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sdk key"),": server sdk and client sdk, which are used to pull toggle information, which can be found in the project list of the UI platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh interval"),": interval for fetch toggle information and for report toggle access information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wait first response"),": whether to wait for the toggle to be fetched, if not, the toggle evaluation at startup will get the default value."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FPUser"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"new")," function: the unique identifier of the user in your business, which is used to distinguish different users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"with")," function: used to upload attributes, you can select properties (like city, country) in rules to return different values in UI platform."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FeatureProbe"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," functions: there are bool/string/number/json four types. used to get the value corresponding to the rule in the UI platform, the  type correspond to the type of toggle in UI platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detail")," functions: there are bool/string/number/json four types. used to get the value corresponding to the rule in the UI platform, and more debug info."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"close")," method: Close the FeatureProbe client gracefully to ensure that all metrics information is uploaded."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FPDetail"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," : the value corresponding to the rule in the UI platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rule index"),": The sequence number of the rule in the UI configuration that hit the rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variation index"),": The sequence number of the variations in the UI platform"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": the version of toggle"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reason"),": why return this value, like disabled, default, not exist and so on.")))),(0,i.kt)("h2",{id:"privacy"},"Privacy"),(0,i.kt)("p",null,"Attributes in User Object are currently not persisted in FeatureProbe."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The User object of the Server-side SDK is in the developer's own application and will not be sent to the FeatureProbe's server."),(0,i.kt)("li",{parentName:"ul"},"User of Client-side SDK will be sent to FeatureProbe's server, but will not be stored.")))}c.isMDXComponent=!0}}]);