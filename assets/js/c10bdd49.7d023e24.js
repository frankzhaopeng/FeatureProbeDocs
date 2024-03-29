"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Android SDK",l={unversionedId:"how-to/Client-Side SDKs/android-sdk",id:"how-to/Client-Side SDKs/android-sdk",title:"Android SDK",description:"In addition to this reference guide, we provide source code, API reference documentation, and sample applications at the following links:",source:"@site/docs/how-to/Client-Side SDKs/android-sdk.md",sourceDirName:"how-to/Client-Side SDKs",slug:"/how-to/Client-Side SDKs/android-sdk",permalink:"/FeatureProbeDocs/how-to/Client-Side SDKs/android-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/how-to/Client-Side SDKs/android-sdk.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"JavaScript SDK",permalink:"/FeatureProbeDocs/how-to/Client-Side SDKs/javascript-sdk"},next:{title:"iOS SDK",permalink:"/FeatureProbeDocs/how-to/Client-Side SDKs/ios-sdk"}},s={},p=[{value:"Kotlin",id:"kotlin",level:2},{value:"Step 1. Install SDK",id:"step-1-install-sdk",level:3},{value:"Step 2. Create a FeatureProbe instance",id:"step-2-create-a-featureprobe-instance",level:3},{value:"Step 3.  Use the feature toggle",id:"step-3--use-the-feature-toggle",level:3},{value:"Step 4. Track Events",id:"step-4-track-events",level:3},{value:"Step 5. Unit Testing (Optional)",id:"step-5-unit-testing-optional",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-sdk"},"Android SDK"),(0,a.kt)("admonition",{title:"SDK quick links",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In addition to this reference guide, we provide source code, API reference documentation, and sample applications at the following links:"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Resource")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Location")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GitHub repository"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-android"},"Client Side SDK for Android"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sample applications"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/examples/demo-android"},"Demo code")," (Kotlin)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Published module"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.featureprobe/client-sdk-android"},"maven")))))),(0,a.kt)("h2",{id:"kotlin"},"Kotlin"),(0,a.kt)("h3",{id:"step-1-install-sdk"},"Step 1. Install SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"implementation 'com.featureprobe:client-sdk-android:1.2.0@aar'\nimplementation 'net.java.dev.jna:jna:5.7.0@aar'\n")),(0,a.kt)("h3",{id:"step-2-create-a-featureprobe-instance"},"Step 2. Create a FeatureProbe instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.featureprobe.mobile.*;\n\nval url = FpUrlBuilder("https://featureprobe.io/server").build();\nval user = FpUser()\nuser.setAttr("name", "bob")\nval config = FpConfig(url!!, "client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d", 10u, true)\nval fp = FeatureProbe(config, user)\n')),(0,a.kt)("h3",{id:"step-3--use-the-feature-toggle"},"Step 3.  Use the feature toggle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val showFeature = fp.boolValue("toggle_key", false)\nif (showFeature) {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,a.kt)("h3",{id:"step-4-track-events"},"Step 4. Track Events"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Kotlin SDK supports event tracking from version 2.0.2.")),(0,a.kt)("p",null,"The event tracking feature can record the actions taken by the user in the application as events."),(0,a.kt)("p",null,"Events are related to toggle's metrics. For more information about event analysis, please read ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/analysis"},"Event Analysis"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fp.track("YOUR_CUSTOM_EVENT_NAME")\n// Providing a metric value to track\nfp.track("YOUR_CUSTOM_EVENT_NAME", 5.5)\n')),(0,a.kt)("h3",{id:"step-5-unit-testing-optional"},"Step 5. Unit Testing (Optional)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val fp_for_test = FeatureProbe.newForTest("{ \\"toggle_1\\": true }")\nval is_true = fp_for_test.boolValue("toggle_1", false)\nassert(is_true == true)\n')),(0,a.kt)("p",null,"Find the Demo code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/examples/"},"example")))}c.isMDXComponent=!0}}]);