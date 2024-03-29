"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[9370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3},i="iOS SDK",l={unversionedId:"how-to/Client-Side SDKs/ios-sdk",id:"how-to/Client-Side SDKs/ios-sdk",title:"iOS SDK",description:"\u9664\u4e86\u672c\u53c2\u8003\u6307\u5357\u5916\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u6e90\u4ee3\u7801\u3001\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\uff0c\u76f8\u5173\u94fe\u63a5\u5982\u4e0b\u6240\u793a\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/Client-Side SDKs/ios-sdk.md",sourceDirName:"how-to/Client-Side SDKs",slug:"/how-to/Client-Side SDKs/ios-sdk",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/ios-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/Client-Side SDKs/ios-sdk.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Android SDK",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/android-sdk"},next:{title:"\u5c0f\u7a0b\u5e8fSDK",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/minirprogram-sdk"}},p={},u=[{value:"Swift",id:"swift",level:2},{value:"Step 1. \u5b89\u88c5 SDK",id:"step-1-\u5b89\u88c5-sdk",level:3},{value:"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance",id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance",level:3},{value:"\u6b65\u9aa4 3. \u4f7f\u7528 FeatureProbe \u5f00\u5173",id:"\u6b65\u9aa4-3-\u4f7f\u7528-featureprobe-\u5f00\u5173",level:3},{value:"\u6b65\u9aa4 4. \u4e8b\u4ef6\u4e0a\u62a5",id:"\u6b65\u9aa4-4-\u4e8b\u4ef6\u4e0a\u62a5",level:3},{value:"\u6b65\u9aa4 5. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)",id:"\u6b65\u9aa4-5-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009",level:3},{value:"Objective-C",id:"objective-c",level:2},{value:"\u6b65\u9aa4 1. \u5b89\u88c5 SDK",id:"\u6b65\u9aa4-1-\u5b89\u88c5-sdk",level:3},{value:"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance",id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance-1",level:3},{value:"\u6b65\u9aa4 3. \u4f7f\u7528 FeatureProbe \u5f00\u5173",id:"\u6b65\u9aa4-3-\u4f7f\u7528-featureprobe-\u5f00\u5173-1",level:3},{value:"\u6b65\u9aa4 4. \u4e8b\u4ef6\u4e0a\u62a5",id:"\u6b65\u9aa4-4-\u4e8b\u4ef6\u4e0a\u62a5-1",level:3},{value:"\u6b65\u9aa4 5. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)",id:"\u6b65\u9aa4-5-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009-1",level:3}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ios-sdk"},"iOS SDK"),(0,n.kt)("admonition",{title:"SDK quick links",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u672c\u53c2\u8003\u6307\u5357\u5916\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u6e90\u4ee3\u7801\u3001\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\uff0c\u76f8\u5173\u94fe\u63a5\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Resource")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Location")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GitHub \u4ee3\u7801\u5e93"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios"},"Client Side SDK for iOS"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u793a\u4f8b"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/examples/demo-cocoapods"},"demo-cocoapods"),"\u3001",(0,n.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/examples/demo-objc"},"demo-objc"),"\u3001",(0,n.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/examples/demo-swiftpm"},"demo-swiftpm"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5df2\u53d1\u5e03\u6a21\u5757"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://cocoapods.org/pods/FeatureProbe"},"CocoaPods")))))),(0,n.kt)("h2",{id:"swift"},"Swift"),(0,n.kt)("h3",{id:"step-1-\u5b89\u88c5-sdk"},"Step 1. \u5b89\u88c5 SDK"),(0,n.kt)("p",null,"Swift Package Manager:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1. XCode -> File -> Add Packages -> input `https://github.com/FeatureProbe/client-sdk-ios.git`\n2. click `Add Package`\n")),(0,n.kt)("p",null,"Cocoapods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1. add `pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'` to Podfile\n2. `pod install` or `pod update`\n")),(0,n.kt)("h3",{id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance"},"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'import featureprobe\n\nlet url = FpUrlBuilder(remoteUrl: "https://featrureprobe.io/server").build();\nlet user = FpUser()\nuser.setAttr(key: "name", value: "bob")\nlet config = FpConfig(\n    remoteUrl: url!,\n    clientSdkKey: "client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d",\n    refreshInterval: 10,\n    waitFirstResp: true\n)\nlet fp = FeatureProbe(config: config, user: user)\n')),(0,n.kt)("h3",{id:"\u6b65\u9aa4-3-\u4f7f\u7528-featureprobe-\u5f00\u5173"},"\u6b65\u9aa4 3. \u4f7f\u7528 FeatureProbe \u5f00\u5173"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'let showFeature = fp.boolValue("toggle_key", false)\nif showFeature {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,n.kt)("h3",{id:"\u6b65\u9aa4-4-\u4e8b\u4ef6\u4e0a\u62a5"},"\u6b65\u9aa4 4. \u4e8b\u4ef6\u4e0a\u62a5"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Swift SDK \u4ece 2.0.2 \u7248\u672c\u5f00\u59cb\u652f\u6301\u4e8b\u4ef6\u4e0a\u62a5\u7684\u80fd\u529b\u3002")),(0,n.kt)("p",null,"\u4e8b\u4ef6\u8ddf\u8e2a\u529f\u80fd\u53ef\u4ee5\u5c06\u7528\u6237\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u91c7\u53d6\u7684\u64cd\u4f5c\u8bb0\u5f55\u4e3a\u4e8b\u4ef6\u3002\n\u53ef\u4ee5\u5728\u5f00\u5173\u7684\u6307\u6807\u4e2d\u5173\u8054\u4e8b\u4ef6\u3002\u66f4\u591a\u6307\u6807\u5206\u6790\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,n.kt)("a",{parentName:"p",href:"../../tutorials/analysis"},"\u6307\u6807\u5206\u6790"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'fp.track(event: "YOUR_CUSTOM_EVENT_NAME")\n// Providing a metric value to track\nfp.track(event: "YOUR_CUSTOM_EVENT_NAME", value: 5.5)\n')),(0,n.kt)("h3",{id:"\u6b65\u9aa4-5-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009"},"\u6b65\u9aa4 5. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'let fp2 = FeatureProbe.newForTest(toggles: "{ \\"toggle_1\\": true }")\nlet is_true = fp2.boolValue(key: "toggle_1", defaultValue: false)\nassert(is_true == true);\n')),(0,n.kt)("p",null,"Find the Demo code in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/examples/"},"example")),(0,n.kt)("h2",{id:"objective-c"},"Objective-C"),(0,n.kt)("h3",{id:"\u6b65\u9aa4-1-\u5b89\u88c5-sdk"},"\u6b65\u9aa4 1. \u5b89\u88c5 SDK"),(0,n.kt)("p",null,"Cocoapods"),(0,n.kt)("p",null,"add ",(0,n.kt)("inlineCode",{parentName:"p"},"pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'")," to Podfile"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"pod install")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"pod update")),(0,n.kt)("h3",{id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance-1"},"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "FeatureProbe-Swift.h"\n\nNSString *urlStr = @"https://featureprobe.io/server";\nFpUrl *url = [[[FpUrlBuilder alloc] initWithRemoteUrl: urlStr] build];\nFpUser *user = [[FpUser alloc] init];\n[user setAttrWithKey:@"name" value:@"bob"];\nFpConfig *config = [[FpConfig alloc] initWithRemoteUrl: url\n                                          clientSdkKey:@"client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d"\n                                       refreshInterval: 10\n                                         waitFirstResp: true];\nFeatureProbe *fp = [[FeatureProbe alloc] initWithConfig:config user:user];\n')),(0,n.kt)("h3",{id:"\u6b65\u9aa4-3-\u4f7f\u7528-featureprobe-\u5f00\u5173-1"},"\u6b65\u9aa4 3. \u4f7f\u7528 FeatureProbe \u5f00\u5173"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'bool showFeature = [fp boolValueWithKey: @"toggle_key" defaultValue: false];\nif (showFeature) {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,n.kt)("h3",{id:"\u6b65\u9aa4-4-\u4e8b\u4ef6\u4e0a\u62a5-1"},"\u6b65\u9aa4 4. \u4e8b\u4ef6\u4e0a\u62a5"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Objc SDK \u4ece 2.0.2 \u7248\u672c\u5f00\u59cb\u652f\u6301\u4e8b\u4ef6\u4e0a\u62a5\u7684\u80fd\u529b\u3002")),(0,n.kt)("p",null,"\u4e8b\u4ef6\u8ddf\u8e2a\u529f\u80fd\u53ef\u4ee5\u5c06\u7528\u6237\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u91c7\u53d6\u7684\u64cd\u4f5c\u8bb0\u5f55\u4e3a\u4e8b\u4ef6\u3002\n\u53ef\u4ee5\u5728\u5f00\u5173\u7684\u6307\u6807\u4e2d\u5173\u8054\u4e8b\u4ef6\u3002\u66f4\u591a\u6307\u6807\u5206\u6790\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,n.kt)("a",{parentName:"p",href:"../../tutorials/analysis"},"\u6307\u6807\u5206\u6790"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'[fp trackWithEvent:@"YOUR_CUSTOM_EVENT_NAME"];\n// Providing a metric value to track\n[fp trackWithEvent:@"YOUR_CUSTOM_EVENT_NAME" value:5.5];\n')),(0,n.kt)("h3",{id:"\u6b65\u9aa4-5-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009-1"},"\u6b65\u9aa4 5. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "FeatureProbe-Swift.h"\n\nNSString *s = @"{ \\"ab_test\\": \\"green\\"}";\nFeatureProbe *fp = [[FeatureProbe alloc] initWithTestJson: s];\nNSString *value = [fp stringValueWithKey:@"ab_test" defaultValue:@"red"];\nNSLog(@"value is %@", value);\n')),(0,n.kt)("p",null,"Find the Demo code in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/examples/"},"example")))}d.isMDXComponent=!0}}]);