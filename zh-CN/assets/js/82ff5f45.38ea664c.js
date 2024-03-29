"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[6684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(n),m=r,c=k["".concat(p,".").concat(m)]||k[m]||u[m]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="JavaScript SDK",o={unversionedId:"how-to/Client-Side SDKs/javascript-sdk",id:"how-to/Client-Side SDKs/javascript-sdk",title:"JavaScript SDK",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u4e00\u4e2a\u524d\u7aef\u9879\u76ee\u4e2d\u4f7f\u7528 FeatureProbe SDK\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/Client-Side SDKs/javascript-sdk.md",sourceDirName:"how-to/Client-Side SDKs",slug:"/how-to/Client-Side SDKs/javascript-sdk",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/javascript-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/Client-Side SDKs/javascript-sdk.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Client-Side SDKs",permalink:"/FeatureProbeDocs/zh-CN/category/client-side-sdks"},next:{title:"Android SDK",permalink:"/FeatureProbeDocs/zh-CN/how-to/Client-Side SDKs/android-sdk"}},p={},d=[{value:"\u5feb\u901f\u5c1d\u8bd5 Demo Code",id:"\u5feb\u901f\u5c1d\u8bd5-demo-code",level:2},{value:"\u5206\u6b65\u6307\u5357",id:"\u5206\u6b65\u6307\u5357",level:2},{value:"\u6b65\u9aa4 1. \u5b89\u88c5 JavaScript SDK",id:"\u6b65\u9aa4-1-\u5b89\u88c5-javascript-sdk",level:3},{value:"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance",id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance",level:3},{value:"\u6b65\u9aa4 3. \u4f7f\u7528 FeatureProbe \u5f00\u5173\u83b7\u53d6\u8bbe\u7f6e\u7684\u503c",id:"\u6b65\u9aa4-3-\u4f7f\u7528-featureprobe-\u5f00\u5173\u83b7\u53d6\u8bbe\u7f6e\u7684\u503c",level:3},{value:"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)",id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009",level:3},{value:"\u4e8b\u4ef6\u4e0a\u62a5",id:"\u4e8b\u4ef6\u4e0a\u62a5",level:2},{value:"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6",level:3},{value:"SDK\u521d\u59cb\u5316\u7684\u53c2\u6570",id:"sdk\u521d\u59cb\u5316\u7684\u53c2\u6570",level:2},{value:"SDK\u53d1\u5e03\u7684\u4e8b\u4ef6",id:"sdk\u53d1\u5e03\u7684\u4e8b\u4ef6",level:2},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:2}],s={toc:d};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript-sdk"},"JavaScript SDK"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u4e00\u4e2a\u524d\u7aef\u9879\u76ee\u4e2d\u4f7f\u7528 FeatureProbe SDK\u3002"),(0,r.kt)("admonition",{title:"Notice",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"JavaScript SDK \u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/featureprobe-client-sdk-js/v/2.0.1"}," 2.0.1 ")," \u7248\u672c\u5f00\u59cb\u652f\u6301\u4e8b\u4ef6\u4e0a\u62a5\u7684\u80fd\u529b\u3002\u76ee\u524d\u652f\u6301\u7684\u4e8b\u4ef6\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u9875\u9762\u4e8b\u4ef6\uff08pageview\uff09"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u70b9\u51fb\u4e8b\u4ef6\uff08click\uff09"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),"\u3002")),(0,r.kt)("admonition",{title:"SDK quick links",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u672c\u53c2\u8003\u6307\u5357\u5916\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u6e90\u4ee3\u7801\u3001API \u53c2\u8003\u6587\u6863\u548c\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\uff0c\u76f8\u5173\u94fe\u63a5\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Resource")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Location")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDK API \u6587\u6863"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://featureprobe.github.io/client-sdk-js/"}," SDK API docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub \u4ee3\u7801\u5e93"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-js"},"Client Side SDK for JavaScript"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u5165\u793a\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-js/blob/main/example/index.html"},"Demo code")," (HTML+JS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u53d1\u5e03\u6a21\u5757"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/featureprobe-client-sdk-js"},"npm")))))),(0,r.kt)("h2",{id:"\u5feb\u901f\u5c1d\u8bd5-demo-code"},"\u5feb\u901f\u5c1d\u8bd5 Demo Code"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u8fd0\u884c\u7684\u6f14\u793a\u4ee3\u7801\uff0c\u8ba9\u60a8\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 FeatureProbe SDK"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u9700\u8981\u9009\u62e9\u901a\u8fc7\u8fde\u63a5\u54ea\u4e2a\u73af\u5883\u7684FeatureProbe\u6765\u63a7\u5236\u4f60\u7684\u7a0b\u5e8f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u5728\u7ebf\u7684",(0,r.kt)("a",{parentName:"li",href:"https://featureprobe.io/login"},"\u6f14\u793a\u73af\u5883")),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u642d\u5efa\u7684",(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/featureprobe/FeatureProbe"},"docker\u73af\u5883")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u6b64 repo \u4e2d\u7684\u6f14\u793a\u4ee3\u7801\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/client-sdk-js.git\ncd client-sdk-js\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"example/index.html"),"\u7a0b\u5e8f\u4e2d\u7684\u94fe\u63a5\u4fe1\u606f\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5728\u7ebf\u6f14\u793a\u73af\u5883:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "',(0,r.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSdkKey"),"  \u8bf7\u4ece\u5982\u4e0b\u754c\u9762\u4e2d\u62f7\u8d1d\uff1a")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"client_sdk_key snapshot",src:n(4458).Z,width:"414",height:"385"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u672c\u5730docker\u73af\u5883:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "http://YOUR_DOCKER_IP:4009/server"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSdkKey"),' = "client-25614c7e03e9cb49c0e96357b797b1e47e7f2dff"'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7a0b\u5e8f\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// open example/index.html in browser\n")),(0,r.kt)("h2",{id:"\u5206\u6b65\u6307\u5357"},"\u5206\u6b65\u6307\u5357"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u8bf4\u660e\u4e2d\u5982\u4f55\u5728 JavaScript \u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528 FeatureProbe \u529f\u80fd\u5f00\u5173\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4-1-\u5b89\u88c5-javascript-sdk"},"\u6b65\u9aa4 1. \u5b89\u88c5 JavaScript SDK"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5b89\u88c5 FeatureProbe SDK \u4f5c\u4e3a\u4f9d\u8d56\u9879\u3002"),(0,r.kt)("p",null,"NPM\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install featureprobe-client-sdk-js --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u901a\u8fc7CDN\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<script type="text/javascript" src="https://unpkg.com/featureprobe-client-sdk-js@latest/dist/featureprobe-client-sdk-js.min.js"><\/script>\n')),(0,r.kt)("h3",{id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance"},"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance"),(0,r.kt)("p",null,"\u5b89\u88c5\u5e76\u5bfc\u5165 SDK \u540e\uff0c\u521b\u5efa FeatureProbe sdk \u7684\u5355\u4e2a\u5171\u4eab\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"NPM\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const user = new FPUser();\nuser.with("ATTRIBUTE_NAME_IN_RULE", VALUE_OF_ATTRIBUTE);\n\nconst fp = new FeatureProbe({\n  remoteUrl: /* FeatureProbe Server URI */,\n  clientSdkKey: /* clientSdkKey */,\n  user,\n});\n\nfp.start();\n')),(0,r.kt)("p",null,"\u6216\u8005\u901a\u8fc7CDN\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const user = new featureProbe.FPUser();\nuser.with("ATTRIBUTE_NAME_IN_RULE", VALUE_OF_ATTRIBUTE);\n\nconst fp = new featureProbe.FeatureProbe({\n    remoteUrl: /* FeatureProbe Server URI */,\n    clientSdkKey: /* clientSdkKey */,\n    user,\n});\n\nfp.start();\n')),(0,r.kt)("h3",{id:"\u6b65\u9aa4-3-\u4f7f\u7528-featureprobe-\u5f00\u5173\u83b7\u53d6\u8bbe\u7f6e\u7684\u503c"},"\u6b65\u9aa4 3. \u4f7f\u7528 FeatureProbe \u5f00\u5173\u83b7\u53d6\u8bbe\u7f6e\u7684\u503c"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 sdk \u62ff\u5230\u5bf9\u5e94\u5f00\u5173\u540d\u8bbe\u7f6e\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fp.on('ready', function() {\n    const result = fp.boolValue('YOUR_TOGGLE_KEY', false);\n    if (result) {\n        do_some_thing();\n    } else {\n        do_other_thing();\n    }\n    const reason = fp.boolDetail('YOUR_TOGGLE_KEY', false);\n    console.log(reason);\n})\n")),(0,r.kt)("h3",{id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009"},"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)"),(0,r.kt)("p",null,"NPM\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'test("feature probe unit testing", (done) => {\n  let fp = FeatureProbe.newForTest({ testToggle: true });\n  fp.start();\n\n  fp.on("ready", function () {\n    let t = fp.boolValue(\'YOUR_TOGGLE_KEY\', false);\n    expect(t).toBe(true);\n    done();\n  });\n});\n')),(0,r.kt)("p",null,"\u6216\u8005\u901a\u8fc7CDN\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'test("feature probe unit testing", (done) => {\n  let fp = featureProbe.FeatureProbe.newForTest({ testToggle: true });\n  fp.start();\n\n  fp.on("ready", function () {\n    let t = fp.boolValue(\'YOUR_TOGGLE_KEY\', false);\n    expect(t).toBe(true);\n    done();\n  });\n});\n')),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u4e0a\u62a5"},"\u4e8b\u4ef6\u4e0a\u62a5"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"JavaScript SDK \u4ece 2.0.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u4e8b\u4ef6\u4e0a\u62a5\u7684\u80fd\u529b\u3002")),(0,r.kt)("p",null,"JavaScript SDK \u652f\u6301\u4e0a\u62a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u9875\u9762\u4e8b\u4ef6"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u70b9\u51fb\u4e8b\u4ef6"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),"\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u9875\u9762\u4e8b\u4ef6"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u70b9\u51fb\u4e8b\u4ef6"),"\u7531SDK\u81ea\u52a8\u89e6\u53d1\uff0c\u65e0\u987b\u7528\u6237\u624b\u52a8\u4e0a\u62a5\u3002"),(0,r.kt)("h3",{id:"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},"\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5f53SDK",(0,r.kt)("inlineCode",{parentName:"p"},"ready"),"\u540e\uff0c\u8c03\u7528SDK\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"track"),"\u65b9\u6cd5\u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fp.on('ready', function() {\n  const result = fp.boolValue('YOUR_TOGGLE_KEY', false);\n  if (result) {\n    do_some_thing();\n  } else {\n    do_other_thing();\n  }\n  const reason = fp.boolDetail('YOUR_TOGGLE_KEY', false);\n  console.log(reason);\n\n  // \u4e0a\u62a5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\n  // \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\n  // \u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u662f\u81ea\u5b9a\u4e49\u6307\u6807\u503c\n  // highlight-start\n  fp.track('YOUR_CUSTOM_EVENT_NAME_1');\n  fp.track('YOUR_CUSTOM_EVENT_NAME_2', 5.5);\n  // highlight-end\n})\n")),(0,r.kt)("h2",{id:"sdk\u521d\u59cb\u5316\u7684\u53c2\u6570"},"SDK\u521d\u59cb\u5316\u7684\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"\u82e5\u5176\u4ed6URL\u672a\u586b\u5199\u5219\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdc\u7aef URL \u7528\u6765\u83b7\u53d6\u5f00\u5173\u548c\u4e0a\u62a5\u4e8b\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"togglesUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u72ec\u8bbe\u7f6e\u5f00\u5173\u4e0b\u53d1 URL\uff0c\u5982\u679c\u8bbe\u7f6e\u4f1a\u5ffd\u7565 remoteUrl\u524d\u7f00\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventsUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u72ec\u8bbe\u7f6e\u4e8b\u4ef6\u4e0a\u62a5 URL\uff0c\u5982\u679c\u8bbe\u7f6e\u4f1a\u5ffd\u7565 remoteUrl\u524d\u7f00\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientSdkKey"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"SDK Key\u7528\u6765\u9a8c\u8bc1\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"User \u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7With\u65b9\u6cd5\u8bbe\u7f6e\u5c5e\u6027\uff0c\u7528\u6765\u6839\u636e\u5c5e\u6027\u5224\u65ad\u5f00\u5173\u89c4\u5219")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refreshInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e SDK \u7684\u5f00\u5173\u548c\u4e8b\u4ef6\u5237\u65b0\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeoutInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e SDK \u521d\u59cb\u5316\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u8d85\u65f6\u540eSDK\u5c06\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"td"},"error"),"\u4e8b\u4ef6")))),(0,r.kt)("h2",{id:"sdk\u53d1\u5e03\u7684\u4e8b\u4ef6"},"SDK\u53d1\u5e03\u7684\u4e8b\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ready")," - SDK\u6210\u529f\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"Server\u7aef"),"\u83b7\u53d6\u5f00\u5173\u540e\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"li"},"ready"),"\u4e8b\u4ef6 "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cache_ready")," - SDK\u6210\u529f\u4ece\u672c\u5730\u7f13\u5b58",(0,r.kt)("inlineCode",{parentName:"li"},"LocalStorage"),"\u4e2d\u83b7\u53d6\u7f13\u5b58\u5f00\u5173\u540e\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"li"},"cache_ready"),"\u4e8b\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"cache_ready"),"\u53d1\u5e03\u65f6\u4e0d\u4f1a\u5173\u5fc3SDK\u662f\u5426\u6210\u529f",(0,r.kt)("inlineCode",{parentName:"li"},"ready")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"error")," - SDK\u65e0\u6cd5\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"Server\u7aef"),"\u6210\u529f\u83b7\u53d6\u5f00\u5173\uff0c\u4e14\u8d85\u8fc7\u8d85\u65f6\u65f6\u95f4\uff0c\u5c06\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"li"},"error"),"\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"update")," - \u9664\u4e86\u9996\u6b21\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"Server\u7aef"),"\u83b7\u53d6\u5f00\u5173\u5916\uff0cSDK\u540e\u7eed\u901a\u8fc7\u5b9a\u671f\u8f6e\u8be2\u7684\u65b9\u5f0f\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"Server\u7aef"),"\u6210\u529f\u83b7\u53d6\u5f00\u5173\u540e\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"li"},"update"),"\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fetch_toggle_error")," - SDK\u65e0\u6cd5\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"Server\u7aef"),"\u62c9\u53d6\u5f00\u5173\u7ed3\u679c\u65f6\uff0c\u5c06\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"li"},"fetch_toggle_error"),"\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fetch_event_error")," - SDK\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0c\u65e0\u6cd5\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"Server\u7aef"),"\u62c9\u53d6\u5e73\u53f0\u4e0a\u914d\u7f6e\u7684\u4e8b\u4ef6\uff08\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3001\u70b9\u51fb\u4e8b\u4ef6\u3001\u9875\u9762\u4e8b\u4ef6\uff09\u65f6\uff0c\u5c06\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"li"},"fetch_event_error"),"\u4e8b\u4ef6")),(0,r.kt)("h2",{id:"\u96c6\u6210\u6d4b\u8bd5"},"\u96c6\u6210\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u6211\u4eec\u5bf9\u6240\u6709 SDK \u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u96c6\u6210\u6d4b\u8bd5\u3002\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u6d4b\u8bd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run test\n")))}u.isMDXComponent=!0},4458:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/client_sdk_key_snapshot_cn-441a8bffad52964614b63b1961967db9.png"}}]);