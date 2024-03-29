"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[4944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(r),k=n,N=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return r?a.createElement(N,p(p({ref:t},d),{},{components:r})):a.createElement(N,p({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:3},p="All In One \u90e8\u7f72",o={unversionedId:"how-to/deploy/deployment-docker-all-in-one",id:"how-to/deploy/deployment-docker-all-in-one",title:"All In One \u90e8\u7f72",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55All In One\u90e8\u7f72\uff08\u6240\u6709\u670d\u52a1\u90fd\u5728\u4e00\u4e2a\u5bb9\u5668\u4e2d\uff09FeatureProbe \u670d\u52a1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/deploy/deployment-docker-all-in-one.md",sourceDirName:"how-to/deploy",slug:"/how-to/deploy/deployment-docker-all-in-one",permalink:"/FeatureProbeDocs/zh-CN/how-to/deploy/deployment-docker-all-in-one",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/deploy/deployment-docker-all-in-one.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Docker image \u90e8\u7f72",permalink:"/FeatureProbeDocs/zh-CN/how-to/deploy/deployment-docker-image"},next:{title:"\u6e90\u7801\u7f16\u8bd1\u90e8\u7f72",permalink:"/FeatureProbeDocs/zh-CN/how-to/deploy/deployment-source-code"}},i={},u=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"all-in-one-\u90e8\u7f72"},"All In One \u90e8\u7f72"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55All In One\u90e8\u7f72\uff08\u6240\u6709\u670d\u52a1\u90fd\u5728\u4e00\u4e2a\u5bb9\u5668\u4e2d\uff09FeatureProbe \u670d\u52a1\u3002")),(0,n.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker 17+"),(0,n.kt)("li",{parentName:"ul"},"Mysql 5.7+"),(0,n.kt)("li",{parentName:"ul"},"\u5efa\u8bae\uff1a2\u6838 CPU/4G\u5185\u5b58\u53ca\u4ee5\u4e0a")),(0,n.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("p",null,"\u4f7f\u7528 Dokcer\u5feb\u901f\u5728 Linux/Unix/Mac \u4e0a\u8fd0\u884c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efaFeaturePorbe\u6570\u636e\u5e93"),(0,n.kt)("p",{parentName:"li"},"\u90e8\u7f72All-In-One\u7684FeaturePorbe\u670d\u52a1\u524d\uff0c\u9700\u8981\u5148\u5728\u51c6\u5907\u7684\u6570\u636e\u5e93\u670d\u52a1\u4e2d\u521b\u5efa\u6240\u9700\u8981\u7684\u5e93\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE DATABASE IF NOT EXISTS feature_probe;\nCREATE DATABASE IF NOT EXISTS feature_probe_events;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u542f\u52a8FeaturePorbe\u5bb9\u5668"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run  -p 4008:4008 -p  4006:4006 -p 4007:4007 -p 4011:4011 \\\n-e api_server_port=4008 \\\n-e api_spring_profiles_active=online \\\n-e API_JVM_ARGS='-Xmx2048m -Xms2048m' \\\n-e spring.datasource.jdbc-url=jdbc:mysql://172.24.141.155:13306/feature_probe \\\n-e spring.datasource.username=root \\\n-e spring.datasource.password=root \\\n-e app.server-base-urls=http://127.0.0.1:4007 \\\n-e app.analysis-base-url=http://127.0.0.1:4006 \\\n-e analysis_server_port=4006 \\\n-e app.datasource.jdbcUrl=jdbc:mysql://172.24.141.155:13306/feature_probe_events \\\n-e app.datasource.username=root \\\n-e app.datasource.password=root \\\n-e analysis_spring_profiles_active=online \\\n-e ANALYSIS_JVM_ARGS='-Xmx2048m -Xms2048m' \\\n-e RUST_LOG=info \\\n-e FP_SERVER_PORT=4007 \\\n-e FP_TOGGLES_URL=http://127.0.0.1:4008/internal/server/toggles \\\n-e FP_EVENTS_URL=http://127.0.1.0:4008/internal/server/events \\\n-e FP_KEYS_URL=http://127.0.0.1:4008/internal/server/sdk_keys \\\n-e FP_ANALYSIS_URL=http://127.0.0.1:4006/events \\\n-e FP_REFRESH_SECONDS=10 \\\n-e FP_REALTIME_PORT=4011 \\\n-e TZ=Asia/Shanghai \\\n--name featureProbeAll -d featureprobe/featureprobe \n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u670d\u52a1\u914d\u7f6e\u8be6\u60c5")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"api_server_port"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"api_spring_profiles_active"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u540e\u7f00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API_JVM_ARGS"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"JVM\u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spring.datasource.jdbc-url"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spring.datasource.username"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"spring.datasource.password"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.server-base-urls"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"Server\u670d\u52a1\u5730\u5740, \u591a\u4e2a\u5730\u5740\u7528\u201c,\u201d\u5206\u5272\u3002\uff08\u591a\u5b9e\u4f8b\u90e8\u7f72\u5efa\u8bae\u914d\u914d\u7f6e\u7f51\u5173\u5730\u5740\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.analysis-base-url"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe API"),(0,n.kt)("td",{parentName:"tr",align:null},"Analysis\u670d\u52a1\u5730\u5740\uff0c\u76ee\u524d\u53ea\u652f\u6301\u914d\u7f6e\u5355\u4e2a\u3002\uff08\u591a\u5b9e\u4f8b\u90e8\u7f72\u5efa\u8bae\u914d\u914d\u7f6e\u7f51\u5173\u5730\u5740\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"analysis_server_port"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Analysis"),(0,n.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.datasource.jdbcUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Analysis"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.datasource.username"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Analysis"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app.datasource.password"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Analysis"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"analysis_spring_profiles_active"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Analysis"),(0,n.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u540e\u7f00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ANALYSIS_JVM_ARGS"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Analysis"),(0,n.kt)("td",{parentName:"tr",align:null},"JVM\u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RUST_LOG"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u7ea7\u522b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_SERVER_PORT"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_TOGGLES_URL"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f00\u5173\u914d\u7f6e\u83b7\u53d6\u63a5\u53e3 (API)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_EVENTS_URL"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u4e0a\u62a5\u63a5\u53e3 (API)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_KEYS_URL"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u83b7\u53d6\u63a5\u53e3 (API)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_ANALYSIS_URL"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u65f6\u95f4\u4e0a\u62a5\u63a5\u53e3 (Analysis)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_REFRESH_SECONDS"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5237\u65b0\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FP_REALTIME_PORT"),(0,n.kt)("td",{parentName:"tr",align:null},"FeatureProbe Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u957f\u94fe\u63a5\u670d\u52a1\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TZ"),(0,n.kt)("td",{parentName:"tr",align:null},"All"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u65f6\u533a")))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"docker\u542f\u52a8\u6210\u529f\u540e\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:4008"),"\uff0c\u5e76\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u5e10\u53f7\u767b\u5f55\u8bd5\u7528\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"username: ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")),(0,n.kt)("li",{parentName:"ul"},"password: ",(0,n.kt)("inlineCode",{parentName:"li"},"Pass1234"))))))}m.isMDXComponent=!0}}]);