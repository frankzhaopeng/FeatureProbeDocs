"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[8082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:13},i="Support for PostgreSQL",p={unversionedId:"reference/support-postgresql",id:"reference/support-postgresql",title:"Support for PostgreSQL",description:"Overview",source:"@site/docs/reference/support-postgresql.md",sourceDirName:"reference",slug:"/reference/support-postgresql",permalink:"/FeatureProbeDocs/reference/support-postgresql",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/reference/support-postgresql.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"defaultSidebar",previous:{title:"Explanation of Metric Types",permalink:"/FeatureProbeDocs/reference/metric-explanation"},next:{title:"Third-party authentication",permalink:"/FeatureProbeDocs/reference/identity-authenticate"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"How to switch to PostgreSQL",id:"how-to-switch-to-postgresql",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"support-for-postgresql"},"Support for PostgreSQL"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Starting from version 2.7.0, FeatureProbe supports using PostgreSQL as a data source to manage feature toggle data."),(0,n.kt)("h2",{id:"how-to-switch-to-postgresql"},"How to switch to PostgreSQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Prepare a usable PostgreSQL instance"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Initialize the FeatureProbe database in PostgreSQL")),(0,n.kt)("p",{parentName:"li"},"The initialization script for PostgreSQL is managed in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/FeatureProbe/tree/main/api/admin/src/main/resources/db/postgresql"},"PostgreSQL initialization scripts"),". As new script files are added with each version update, they are managed incrementally."),(0,n.kt)("p",{parentName:"li"},"1\u3001Initialization during FeatureProbe deployment: During the deployment of FeatureProbe, execute all script files up to the current version number to ensure that the database is in the correct state. This ensures that the database executes all previous version scripts in the correct order."),(0,n.kt)("p",{parentName:"li"},"2\u3001Initialization during version upgrade: During a version upgrade, only execute the SQL statements in the incremental script files. This will apply new features and updates to keep the database synchronized with the latest version.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Switching to PostgreSQL")),(0,n.kt)("p",{parentName:"li"},"1\u3001FeatureProbe provides a PostgreSQL configuration file template called ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/FeatureProbe/tree/main/api/admin/src/main/resources/config/application-pg.yml"},"application-pg.yml")),(0,n.kt)("p",{parentName:"li"},"2\u3001Replace the database instance address, username, and password in the template with your own configuration."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pg_application_1",src:r(1761).Z,width:"1288",height:"495"})),(0,n.kt)("p",null,"  3\u3001Switch the configuration to PostgreSQL and set the spring.profiles.active configuration in application.yml to pg."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pg_application_2",src:r(4640).Z,width:"1293",height:"831"})))}u.isMDXComponent=!0},1761:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pg_application_1-21261e03e37a3f4053e905543ab41680.png"},4640:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pg_application_2-beba226a1fbbac094356117d5fad15b0.png"}}]);