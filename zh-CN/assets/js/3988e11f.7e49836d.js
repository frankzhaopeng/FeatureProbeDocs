"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[4043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=a(2389);const k="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(_,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},8612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:3},s="\u6309\u767e\u5206\u6bd4\u7070\u5ea6\u653e\u91cf",u={unversionedId:"tutorials/rollout_tutorial/index",id:"tutorials/rollout_tutorial/index",title:"\u6309\u767e\u5206\u6bd4\u7070\u5ea6\u653e\u91cf",description:"\u6211\u4eec\u5c06\u5e26\u9886\u4f60\u4f7f\u7528FeatureProbe\u7684\u5e73\u53f0\uff0c\u63a7\u5236\u4e00\u4e2a\u540e\u7aef/\u524d\u7aef\u7a0b\u5e8f\uff0c\u8ba9\u540e\u7aef/\u524d\u7aef\u7a0b\u5e8f\u5bf9\u63a5\u6536\u5230\u7684\u7528\u6237\u8bf7\u6c42\uff0c\u6309\u767e\u5206\u6bd4\u5c55\u793a\u65b0\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/rollout_tutorial/index.md",sourceDirName:"tutorials/rollout_tutorial",slug:"/tutorials/rollout_tutorial/",permalink:"/FeatureProbeDocs/zh-CN/tutorials/rollout_tutorial/",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/rollout_tutorial/index.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"2024\u5e743\u670829\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u642d\u5efa\u81ea\u5df1\u7684\u73af\u5883",permalink:"/FeatureProbeDocs/zh-CN/tutorials/setup_own_env"},next:{title:"\u7528\u6237\u7a33\u5b9a\u8fdb\u5165\u7070\u5ea6\u7ec4",permalink:"/FeatureProbeDocs/zh-CN/tutorials/rollout_tutorial/stable_rollout_tutorial"}},p={},c=[{value:"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173",id:"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173",level:2},{value:"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f",id:"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f",level:2},{value:"\u7f16\u5199\u4ee3\u7801",id:"backend-code",level:3},{value:"\u9a8c\u8bc1\u7ed3\u679c",id:"\u9a8c\u8bc1\u7ed3\u679c",level:3},{value:"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f",id:"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f",level:2},{value:"\u7f16\u5199\u4ee3\u7801",id:"frontend-code",level:3},{value:"\u9a8c\u8bc1\u7ed3\u679c",id:"\u9a8c\u8bc1\u7ed3\u679c-1",level:3}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6309\u767e\u5206\u6bd4\u7070\u5ea6\u653e\u91cf"},"\u6309\u767e\u5206\u6bd4\u7070\u5ea6\u653e\u91cf"),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u5e26\u9886\u4f60\u4f7f\u7528FeatureProbe\u7684\u5e73\u53f0\uff0c\u63a7\u5236\u4e00\u4e2a\u540e\u7aef/\u524d\u7aef\u7a0b\u5e8f\uff0c\u8ba9\u540e\u7aef/\u524d\u7aef\u7a0b\u5e8f\u5bf9\u63a5\u6536\u5230\u7684\u7528\u6237\u8bf7\u6c42\uff0c\u6309\u767e\u5206\u6bd4\u5c55\u793a\u65b0\u529f\u80fd\u3002"),(0,n.kt)("h2",{id:"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173"},"\u5728\u5e73\u53f0\u521b\u5efa\u5f00\u5173"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u767b\u5f55\u6211\u4eec\u63d0\u4f9b\u7684FeatureProbe",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io"},"\u6f14\u793a\u5e73\u53f0"),"\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u767b\u5f55\uff0c\u8bf7\u8f93\u5165\u90ae\u7bb1\u3002\u540e\u7eed\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u4f60\u7684\u90ae\u7bb1\u8bbf\u95ee\u5230\u5c5e\u4e8e\u4f60\u7684\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"+\u5f00\u5173"),"\u65b0\u5efa\u4e00\u4e2a\u5f00\u5173\n",(0,n.kt)("img",{alt:"add",src:a(9179).Z,width:"3150",height:"712"})),(0,n.kt)("li",{parentName:"ol"},"\u540d\u5b57\u548c\u6807\u8bc6\u90fd\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"tutorial_rollout"),"\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u521b\u5efa\u5e76\u53d1\u5e03"),(0,n.kt)("img",{alt:"create",src:a(6596).Z,width:"1722",height:"1688"})),(0,n.kt)("li",{parentName:"ol"},"\u4ece\u5f00\u5173\u5217\u8868\u4e2d\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"tutorial_rollout"),"\uff0c\u6253\u5f00\u8bbe\u7f6e\u8be6\u60c5\u9875\n",(0,n.kt)("img",{alt:"list",src:a(2816).Z,width:"3006",height:"868"})),(0,n.kt)("li",{parentName:"ol"},"\u5c06\u9ed8\u8ba4\u89c4\u5219\u7684\u8fd4\u56de\u503c\u66f4\u6539\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"\u6309\u767e\u5206\u6bd4\u653e\u91cf"),(0,n.kt)("img",{alt:"return",src:a(4079).Z,width:"1970",height:"1912"})),(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e 10% \u6253\u5f00\u5f00\u5173\uff08\u8fd4\u56detrue\uff09\uff0c 90% \u5173\u95ed\u5f00\u5173\uff08\u8fd4\u56defalse\uff09, \u72b6\u6001\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"\u751f\u6548"),(0,n.kt)("img",{alt:"10% true",src:a(4858).Z,width:"1862",height:"1916"})),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4e0b\u65b9",(0,n.kt)("inlineCode",{parentName:"li"},"\u53d1\u5e03"),"\u6309\u94ae\uff0c\u5e76",(0,n.kt)("inlineCode",{parentName:"li"},"\u786e\u8ba4"),"\u53d8\u66f4\n",(0,n.kt)("img",{alt:"confirm",src:a(6593).Z,width:"1626",height:"966"}))),(0,n.kt)("p",null,"\u6b64\u65f6\u5e73\u53f0\u4e0a\u5c31\u64cd\u4f5c\u5c31\u5b8c\u6210\u4e86\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u7ba1\u7406\u7070\u5ea6\u53d1\u5e03\u7684\u5f00\u5173\uff0c\u4e0b\u9762\u6211\u4eec\u8981\u5728\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5b83\uff0c\u770b\u770b\u5b9e\u9645\u6548\u679c\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5f00\u5173\u521b\u5efa\u540e\uff0c\u53ef\u4ee5\u5728\u540e\u7aef\u7a0b\u5e8f\u4e2d\u8bbf\u95ee\uff0c\u4e5f\u53ef\u4ee5\u5728\u524d\u7aef\u7a0b\u5e8f\u4e2d\u8bbf\u95ee\uff0c\u4ee5\u4e0b\u6211\u4eec\u5206\u522b\u4ecb\u7ecd\u5982\u4f55\u5728 ",(0,n.kt)("strong",{parentName:"p"},"\u540e\u7aef\u4ee3\u7801")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"#%E6%8E%A7%E5%88%B6%E5%89%8D%E7%AB%AF%E7%A8%8B%E5%BA%8F"},(0,n.kt)("strong",{parentName:"a"},"\u524d\u7aef\u4ee3\u7801"))," \u4e2d\u4f7f\u7528\u8fd9\u4e2a\u5f00\u5173\uff0c\u4e24\u8005\u76f8\u4e92\u72ec\u7acb\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u9009\u62e9\u9605\u8bfb\u60a8\u611f\u5174\u8da3\u7684\u90e8\u5206\u3002")),(0,n.kt)("h2",{id:"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f"},"\u63a7\u5236\u540e\u7aef\u7a0b\u5e8f"),(0,n.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u540e\u7aef\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb\u4f53\u9a8c\u540e\u7aef\u4ee3\u7801\u5982\u4f55\u4f7f\u7528\u5f00\u5173\u3002"),(0,n.kt)("h3",{id:"backend-code"},"\u7f16\u5199\u4ee3\u7801"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6309\u4f60\u719f\u6089\u7684\u8bed\u8a00\uff0c\u4e0b\u8f7d\u5e76\u6253\u5f00\u76f8\u5e94\u7684\u540e\u7aef\u793a\u4f8b\u4ee3\u7801")),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-java.git\ncd server-sdk-java\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"),"\u6587\u4ef6\u3002")),(0,n.kt)(o.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-go.git\ncd server-sdk-go\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"example/main.go"),"\u6587\u4ef6\u3002")),(0,n.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-rust.git\ncd server-sdk-rust\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"examples/demo.rs"),"\u6587\u4ef6\u3002")),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/server-sdk-python.git\ncd server-sdk-python\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"demo.py"),"\u6587\u4ef6\u3002")),(0,n.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/server-sdk-node.git\ncd server-sdk-node\n")),(0,n.kt)("p",null,"\u7528\u7f16\u8f91\u5668\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"examples/demo.js"),"\u6587\u4ef6\u3002"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00FeatureProbe\u5e73\u53f0",(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/projects"},"\u9879\u76ee\u5217\u8868\u9875\u9762"),"\uff0c \u53ef\u4ee5\u5728\u5f00\u5173\u8be6\u60c5\u9875\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u9879\u76ee"),"\u6765\u6253\u5f00\n",(0,n.kt)("img",{alt:"project",src:a(4152).Z,width:"2994",height:"810"})),(0,n.kt)("li",{parentName:"ol"},"\u590d\u5236",(0,n.kt)("inlineCode",{parentName:"li"},"\u670d\u52a1\u7aefSDK\u5bc6\u94a5"),(0,n.kt)("img",{alt:"sdk key",src:a(2602).Z,width:"1290",height:"1204"})),(0,n.kt)("li",{parentName:"ol"},"\u5c06",(0,n.kt)("inlineCode",{parentName:"li"},"\u670d\u52a1\u7aefSDK\u5bc6\u94a5"),"\u4ee5\u53ca",(0,n.kt)("inlineCode",{parentName:"li"},"FeatureProbe\u7f51\u5740"),' ("',(0,n.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"'),") \u586b\u5165\u540e\u7aef\u4ee3\u7801\u76f8\u5e94\u53d8\u91cf\u4e2d")),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"',title:'"src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"'},'    private static final String FEATURE_PROBE_SERVER_URL = "https://featureprobe.io/server";\n    private static final String FEATURE_PROBE_SERVER_SDK_KEY = // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5 ;\n'))),(0,n.kt)(o.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="example/main.go"',title:'"example/main.go"'},'    config := featureprobe.FPConfig{\n        // highlight-start\n        RemoteUrl: "https://featureprobe.io/server",\n        ServerSdkKey:    // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5\n        // highlight-end\n        RefreshInterval: 5000, // ms\n        WaitFirstResp:   true,\n    }\n'))),(0,n.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/demo.rs"',title:'"examples/demo.rs"'},'    let remote_url = "https://featureprobe.io/server";\n    let server_sdk_key = // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="demo.py"',title:'"demo.py"'},"    FEATURE_PROBE_SERVER_URL = 'https://featureprobe.io/server'\n    FEATURE_PROBE_SERVER_SDK_KEY = # \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5\n")))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u52a0\u5165\u4ee5\u4e0b\u4ee3\u7801\uff0c\u6a21\u62df100\u4e2a\u7528\u6237\u8bbf\u95ee\u8fd9\u4e2a\u5f00\u5173")),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"',title:'"src/main/java/com/featureprobe/sdk/example/FeatureProbeDemo.java"'},'    public static void main(String[] args) throws IOException {\n\n        Logger root = (Logger)LoggerFactory.getLogger(org.slf4j.Logger.ROOT_LOGGER_NAME);\n        root.setLevel(Level.WARN);\n\n        final FPConfig config = FPConfig.builder()\n            .remoteUri(FEATURE_PROBE_SERVER_URL)\n            .build();\n\n        // Init FeatureProbe, share this FeatureProbe instance in your project.\n        final FeatureProbe fpClient = new FeatureProbe(FEATURE_PROBE_SERVER_SDK_KEY, config);\n\n        //\n        final String YOUR_TOGGLE_KEY = "tutorial_rollout";\n        // highlight-start\n        for (Integer i = 0; i < 100; i++) {\n            FPUser user = new FPUser();\n            Boolean isOpen = fpClient.boolValue(YOUR_TOGGLE_KEY, user, false);\n            System.out.println("feature for user " + i + " is :" + isOpen);\n        }\n        // highlight-end\n        fpClient.close();\n    }\n'))),(0,n.kt)(o.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="example/main.go"',title:'"example/main.go"'},'func main() {\n    config := featureprobe.FPConfig{\n        RemoteUrl: "https://featureprobe.io/server",\n        ServerSdkKey:    // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5,\n        RefreshInterval: 5000, // ms\n        WaitFirstResp:   true,\n    }\n    fp, err := featureprobe.NewFeatureProbe(config)\n    if err != nil {\n        fmt.Println(err)\n        return\n    }\n    // highlight-start\n    for i:=0; i<100; i++  {\n        user := featureprobe.NewUser()\n        detail := fp.BoolValue("tutorial_rollout", user, false)\n        fmt.Println("feature for user", i, "is:", detail)\n    }\n    // highlight-end\n    fp.Close()\n}\n'))),(0,n.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="examples/demo.rs"',title:'"examples/demo.rs"'},'#[tokio::main]\nasync fn main() {\n    let remote_url = "https://featureprobe.io/server";\n    let server_sdk_key = // \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5;\n    let config = FPConfig {\n        remote_url: remote_url.to_owned(),\n        server_sdk_key: server_sdk_key.to_owned(),\n        refresh_interval: Duration::from_millis(2000),\n        ..Default::default()\n    };\n\n    let fp = match FeatureProbe::new(config) {\n        Ok(fp) => fp,\n        Err(e) => {\n            tracing::error!("{:?}", e);\n            return;\n        }\n    };\n  // highlight-start\n    for n in 1..100 {\n        let user = FPUser::new();\n        let enable = fp.bool_value("tutorial_rollout", &user, false);\n        println!("feature for user {:?} is: {:?}", n, enable);\n    }\n  // highlight-end\n    fp.close();\n}\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="demo.py"',title:'"demo.py"'},"logging.basicConfig(level=logging.WARNING)\n\nif __name__ == '__main__':\n    FEATURE_PROBE_SERVER_URL = 'https://featureprobe.io/server'\n    FEATURE_PROBE_SERVER_SDK_KEY = # \u586b\u5165 \u670d\u52a1\u7aefSDK\u5bc6\u94a5;\n\n    config = fp.Config(remote_uri=FEATURE_PROBE_SERVER_URL,  # FeatureProbe server URL\n                       sync_mode='polling',\n                       refresh_interval=3)\n\n    with fp.Client(FEATURE_PROBE_SERVER_SDK_KEY, config) as client:\n      # highlight-start\n        for i in range(100):\n            user = fp.User()\n            is_open = client.value('tutorial_rollout', user, default=False)\n            print('feature for user ' + str(i) + ' is: ' + str(is_open))\n      # highlight-end\n")))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u7f16\u8f91\u540e\u7684\u670d\u52a1\u7aef\u7a0b\u5e8f")),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mvn package\njava -jar ./target/server-sdk-java-1.4.0.jar\n"))),(0,n.kt)(o.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go run example/main.go\n"))),(0,n.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example demo\n"))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\npython3 demo.py\n")))),(0,n.kt)("h3",{id:"\u9a8c\u8bc1\u7ed3\u679c"},"\u9a8c\u8bc1\u7ed3\u679c"),(0,n.kt)("p",null,"\u4ece\u547d\u4ee4\u884clog\u53ef\u4ee5\u770b\u5230\uff0c\u6709\u5927\u7ea610%\u7684\u7528\u6237\u8fdb\u5165\u4e86\u5f00\u5173\uff0c\u4e5f\u5c31\u662f\u62ff\u5230\u4e86\u8fd4\u56de\u503ctrue\u3002"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"log\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"feature for user 0 is :false\n# highlight-next-line\nfeature for user 1 is :true\nfeature for user 2 is :false\nfeature for user 3 is :false\nfeature for user 4 is :false\nfeature for user 5 is :false\nfeature for user 6 is :false\nfeature for user 7 is :false\nfeature for user 8 is :false\nfeature for user 9 is :false\nfeature for user 10 is :false\n# highlight-next-line\nfeature for user 11 is :true\nfeature for user 12 is :false\nfeature for user 13 is :false\nfeature for user 14 is :false\nfeature for user 15 is :false\nfeature for user 16 is :false\nfeature for user 17 is :false\nfeature for user 18 is :false\nfeature for user 19 is :false\nfeature for user 20 is :false\n"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u6bcf\u6b21\u8fd0\u884c\u7a0b\u5e8f\uff0c\u8fdb\u5165\u5f00\u5173\u7684\u7528\u6237\u53ef\u80fd\u662f\u4e0d\u540c\u7684\uff0c\u5982\u679c\u9700\u8981\u540c\u6837id\u7528\u6237\u603b\u662f\u62ff\u5230\u76f8\u540c\u7684\u5f00\u5173\u7ed3\u679c\uff0c\u9700\u8981",(0,n.kt)("a",{parentName:"p",href:"/FeatureProbeDocs/zh-CN/tutorials/rollout_tutorial/stable_rollout_tutorial"},"\u4f7f\u7528FPUser\u7684stableRollout\u63a5\u53e3"),"\u3002")),(0,n.kt)("p",null,"\u53ef\u4ee5\u56de\u5230\u5e73\u53f0\u7684\u5f00\u5173\u8bbe\u7f6e\u9875\u9762\uff0c\u8c03\u6574\u7070\u5ea6\u6bd4\u4f8b\uff0c\u7136\u540e\u91cd\u65b0\u8fd0\u884c\u670d\u52a1\u7aef\u7a0b\u5e8f\uff0c\u770b\u770blog\u5185\u8fdb\u5165\u5f00\u5173\u7684\u6bd4\u4f8b\u662f\u5426\u6709\u53d8\u5316\u3002"),(0,n.kt)("h2",{id:"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f"},"\u63a7\u5236\u524d\u7aef\u7a0b\u5e8f"),(0,n.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u524d\u7aef\u7684js\u4ee3\u7801\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb\u4f53\u9a8c\u524d\u7aef\u4ee3\u7801\u5982\u4f55\u4f7f\u7528\u5f00\u5173\u3002"),(0,n.kt)("h3",{id:"frontend-code"},"\u7f16\u5199\u4ee3\u7801"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u793a\u4f8b\u4ee3\u7801")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitee.com/FeatureProbe/client-sdk-js.git\ncd client-sdk-js\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00",(0,n.kt)("a",{parentName:"p",href:"https://featureprobe.io/projects"},"\u5e73\u53f0"),"\u83b7\u53d6client sdk key"),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u70b9\u51fb\u300e\u9879\u76ee\u300fTab\uff0c\u53ef\u4ee5\u8fdb\u5165\u300e\u9879\u76ee\u300f\u5217\u8868\uff0c\u83b7\u53d6\u5404\u7c7bSDK key\uff0c\u4ee5\u53ca\u4fee\u6539\u9879\u76ee\u548c\u73af\u5883\u4fe1\u606f\u3002")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"client sdk key",src:a(6216).Z,width:"1548",height:"1218"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"p"},"example/index.html")," \u586b\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"\u5ba2\u6237\u7aefSDK\u5bc6\u94a5")," \u4ee5\u53ca ",(0,n.kt)("inlineCode",{parentName:"p"},"FeatureProbe\u7f51\u5740"),'  ("',(0,n.kt)("a",{parentName:"p",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"'),")"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example/index.html"',title:'"example/index.html"'},'  const fpClient = new featureProbe.FeatureProbe({\n    // highlight-start\n    remoteUrl: "https://featureprobe.io/server",\n    clientSdkKey: // Paste client sdk key here,\n    // highlight-end\n    user,\n    refreshInterval: 5000,\n  });\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u6a21\u62df\u5f53\u524d\u7528\u6237\u8bbf\u95ee\u5f00\u5173 ",(0,n.kt)("inlineCode",{parentName:"li"},"tutorial_rollout")," \uff0c\u76f4\u63a5\u83b7\u53d6\u5f00\u5173\u72b6\u6001")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="example/index.html"',title:'"example/index.html"'},'  <script>\n    // highlight-next-line\n    const user = new featureProbe.FPUser();\n    const fpClient = new featureProbe.FeatureProbe({\n      remoteUrl: "https://featureprobe.io/server",\n      clientSdkKey:  // Paste client sdk key here,\n      user,\n      refreshInterval: 5000,\n    });\n  \n    fpClient.start();\n    fpClient.on("ready", function() {\n      // highlight-start\n      const boolValue = fpClient.boolValue("tutorial_rollout", false);\n      document.getElementById("boolean-result").innerText = boolValue;\n      // highlight-end\n    });\n  <\/script>\n')),(0,n.kt)("h3",{id:"\u9a8c\u8bc1\u7ed3\u679c-1"},"\u9a8c\u8bc1\u7ed3\u679c"),(0,n.kt)("p",null,"\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," , \u624b\u52a8\u5237\u65b0\u9875\u9762\uff08\u6a21\u62df\u7528\u6237\u591a\u6b21\u8bbf\u95ee\uff09\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762\u6309\u914d\u7f6e\u7684\u6bd4\u4f8b\u53ef\u4ee5\u83b7\u5f97 ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," \u7684\u8fd4\u56de\u503c\u3002"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u9875\u9762\u5c55\u793a\u793a\u4f8b"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"true",label:"True",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"FeatureProbe JS SDK demo\nThis is a simple front-end-only application using FeatureProbe JS SDK.\n\nboolean type\nFeatureProbe evaluation boolean type toggle result is : true\n"))),(0,n.kt)(o.Z,{value:"false",label:"False",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"FeatureProbe JS SDK demo\nThis is a simple front-end-only application using FeatureProbe JS SDK.\n\nboolean type\nFeatureProbe evaluation boolean type toggle result is : false\n"))))),(0,n.kt)("p",null,"\u53ef\u4ee5\u56de\u5230\u5e73\u53f0\u7684\u5f00\u5173\u8bbe\u7f6e\u9875\u9762\uff0c\u8c03\u6574\u7070\u5ea6\u6bd4\u4f8b\uff0c\u7136\u540e\u91cd\u65b0\u5237\u65b0\u9875\u9762\uff0c\u770b\u770b\u62ff\u5230\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"false")," \u6bd4\u4f8b\u662f\u5426\u6709\u53d8\u5316\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5e0c\u671b\u5bf9\u540c\u4e00\u4e2a\u7528\u6237\uff0c\u4e0d\u7ba1\u4ed6\u5982\u4f55\u5237\u65b0\uff0c\u603b\u662f\u88ab\u7070\u5ea6\u5230\u3002\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"/FeatureProbeDocs/zh-CN/tutorials/rollout_tutorial/stable_rollout_tutorial"},"\u7528\u6237\u7a33\u5b9a\u8fdb\u5165\u7070\u5ea6\u7ec4"),"\uff0c\u4f20\u5165\u7528\u6237\u7684\u552f\u4e00ID\u3002")))}d.isMDXComponent=!0},4152:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_click_project_cn-c3db2a69ddea236b09333158e5a8db9b.png"},6216:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_client_sdk_key_cn-fcf9cc73d6a62b4687b852f17df52fb0.png"},9179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_create_toggle_button_cn-20994c7c0d8a1a83cb535e446444ad37.png"},2816:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_list_click_cn-a5aebc996342e291b5fce4b8d396c45a.png"},4079:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_return_percentage_cn-135fbd85103b96102c4b7b3dc43e8bb1.png"},6593:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_rollout_confirm_cn-e91c2ed9d08a07945a4da9bcf5a51839.png"},6596:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_rollout_create_cn-b747c7766a325e344fe27235da9d04c6.png"},4858:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_rollout_enable_cn-fa4da1b6956fce38b7da8ddfee773da1.png"},2602:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial_rollout_server_sdk_key_cn-809d5f9211fb6e4b012630f79d321361.png"}}]);