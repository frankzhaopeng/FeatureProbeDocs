"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[9348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),d=n(1980),u=n(7392),p=n(12);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,u]=g({queryString:n,groupId:a}),[s,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=d??s;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var b=n(2389);const f="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:i,selectValue:d,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(s(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={sidebar_position:9},d="Webhook Access",u={unversionedId:"reference/webhook-access",id:"reference/webhook-access",title:"Webhook Access",description:"By configuring webhook, you can push the event data of FeatureProbe platform to your server.",source:"@site/docs/reference/webhook-access.md",sourceDirName:"reference",slug:"/reference/webhook-access",permalink:"/FeatureProbeDocs/reference/webhook-access",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/reference/webhook-access.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"Deployment Configuration",permalink:"/FeatureProbeDocs/reference/deployment-configuration"},next:{title:"OpenAPI",permalink:"/FeatureProbeDocs/reference/api"}},p={},s=[{value:"Configure Webhook",id:"configure-webhook",level:2},{value:"Access Webhook",id:"access-webhook",level:2},{value:"Request Method",id:"request-method",level:3},{value:"Request Header",id:"request-header",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Validate Webhook Request\uff08Optional\uff09",id:"validate-webhook-requestoptional",level:3},{value:"Signature Reference",id:"signature-reference",level:4},{value:"How to determine callback results",id:"how-to-determine-callback-results",level:2},{value:"All event Request Body",id:"all-event-request-body",level:2},{value:"Project",id:"project",level:3},{value:"Create Project",id:"create-project",level:4},{value:"Update Project",id:"update-project",level:4},{value:"DELETE Project",id:"delete-project",level:4},{value:"Update Approval Settings",id:"update-approval-settings",level:4},{value:"Environment",id:"environment",level:3},{value:"Create Environment",id:"create-environment",level:4},{value:"Update Environment",id:"update-environment",level:4},{value:"Offline Environment",id:"offline-environment",level:4},{value:"Restore Environment",id:"restore-environment",level:4},{value:"Segment",id:"segment",level:3},{value:"Create Segment",id:"create-segment",level:4},{value:"Update Segment",id:"update-segment",level:4},{value:"Publish Segment",id:"publish-segment",level:4},{value:"Delete Segment",id:"delete-segment",level:4},{value:"Toggle",id:"toggle",level:3},{value:"Create Toggle",id:"create-toggle",level:4},{value:"Update Toggle",id:"update-toggle",level:4},{value:"Publish Toggle",id:"publish-toggle",level:4},{value:"Offline Toggle",id:"offline-toggle",level:4},{value:"Restore Toggle",id:"restore-toggle",level:4},{value:"Approval Toggle",id:"approval-toggle",level:4},{value:"Update Approval Toggle",id:"update-approval-toggle",level:4},{value:"Member",id:"member",level:3},{value:"Create Member",id:"create-member",level:4},{value:"Update Member",id:"update-member",level:4},{value:"Delete Member",id:"delete-member",level:4},{value:"Webhook",id:"webhook",level:3},{value:"Create Webhook",id:"create-webhook",level:4},{value:"Update Webhook",id:"update-webhook",level:4},{value:"Delete Webhook",id:"delete-webhook",level:4}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhook-access"},"Webhook Access"),(0,r.kt)("p",null,"By configuring webhook, you can push the event data of FeatureProbe platform to your server.\nWebhook is an http request callback interface. Your team needs to provide the implementation in the following ways.\nWhen an event occurs on the FeatureProbe platform, it will call back the interface and push the event data to your server in json format."),(0,r.kt)("h2",{id:"configure-webhook"},"Configure Webhook"),(0,r.kt)("p",null,"How to configure Webhook on the FeatureProbe platform. ",(0,r.kt)("a",{parentName:"p",href:"/FeatureProbeDocs/how-to/platform/webhooks"},"Configure Webhook")),(0,r.kt)("h2",{id:"access-webhook"},"Access Webhook"),(0,r.kt)("h3",{id:"request-method"},"Request Method"),(0,r.kt)("p",null,"support http/https POST Method"),(0,r.kt)("h3",{id:"request-header"},"Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Content-Type: application/json; charset=utf-8 \nUser-Agent: FeatureProbe-Webhook/1.0\nX-FeatureProbe-Sign: xxxxxxxxxxxxxxx\n")),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"General structure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "PUBLISH",\n  "operator": "jianggang@featureprobe.com",\n  "projectKey": "My_Project",\n  "resource": "TOGGLE",\n  "toggleKey": "Demo",\n  "environmentKey": "online",\n  "segmentKey": "online",\n  "timestamp": 1669360165044,\n  "data": {}\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Field description")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"event entity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"event type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operator"),(0,r.kt)("td",{parentName:"tr",align:null},"Person triggered by the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Time of the event")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All events of the FeatureProbe platform Webhook are as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"entity"),(0,r.kt)("th",{parentName:"tr",align:null},"event"),(0,r.kt)("th",{parentName:"tr",align:null},"resource"),(0,r.kt)("th",{parentName:"tr",align:null},"action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-project"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"PROJECT"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-project"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"PROJECT"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#delete-project"},"delete")),(0,r.kt)("td",{parentName:"tr",align:null},"PROJECT"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-approval-settings"},"update approval settings")),(0,r.kt)("td",{parentName:"tr",align:null},"PROJECT"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE_APPROVAL_SETTINGS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"environment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-environment"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"ENVIRONMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-environment"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"ENVIRONMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#offline-environment"},"offline")),(0,r.kt)("td",{parentName:"tr",align:null},"ENVIRONMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"OFFLINE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#restore-environment"},"restore")),(0,r.kt)("td",{parentName:"tr",align:null},"ENVIRONMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"RESTORE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"segment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-segment"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"SEGMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-segment"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"SEGMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#publish-segment"},"publish")),(0,r.kt)("td",{parentName:"tr",align:null},"SEGMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLISH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#delete-segment"},"delete")),(0,r.kt)("td",{parentName:"tr",align:null},"SEGMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toggle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-toggle"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"TOGGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-toggle"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"TOGGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#publish-toggle"},"publish")),(0,r.kt)("td",{parentName:"tr",align:null},"TOGGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLISH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#offline-toggle"},"offline")),(0,r.kt)("td",{parentName:"tr",align:null},"TOGGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"OFFLINE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#restore-toggle"},"restore")),(0,r.kt)("td",{parentName:"tr",align:null},"TOGGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"RESTORE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#approval-toggle"},"approval")),(0,r.kt)("td",{parentName:"tr",align:null},"TOGGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE_APPROVAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-approval-toggle"},"update approval")),(0,r.kt)("td",{parentName:"tr",align:null},"TOGGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE_APPROVAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"member"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-member"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"MEMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-member"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"MEMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#delete-member"},"delete")),(0,r.kt)("td",{parentName:"tr",align:null},"MEMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webhook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create-webhook"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"WEBHOOK"),(0,r.kt)("td",{parentName:"tr",align:null},"CREATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-webhook"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"WEBHOOK"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#delete-webhook"},"delete")),(0,r.kt)("td",{parentName:"tr",align:null},"WEBHOOK"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE")))),(0,r.kt)("h3",{id:"validate-webhook-requestoptional"},"Validate Webhook Request\uff08Optional\uff09"),(0,r.kt)("p",null,"FeaturePobe Webhook provides a security authentication method to prevent request forgery (CSRF attack).\nWhen the FeaturePobe server pushes data, it will use the Secret Key to sha1 sign the request body data and place the signature in the request header X-FeatureProbe Sign,The same algorithm can be used to calculate the sign during docking, and the two must be consistent."),(0,r.kt)("h4",{id:"signature-reference"},"Signature Reference"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public String sign(String secretKey, String requestBody) {\n        try {\n        SecretKeySpec signinKey = new SecretKeySpec(secretKey.getBytes(), "HmacSHA1");\n        Mac mac = Mac.getInstance("HmacSHA1");\n        mac.init(signinKey);\n        byte[] rawHmac = mac.doFinal(requestBody.getBytes("UTF8"));\n        return Base64.getEncoder().encodeToString(rawHmac);\n        } catch (Exception e) {\n        throw new RuntimeException(e);\n        }\n}\n'))),(0,r.kt)(o.Z,{value:"php",label:"Php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'function getSignature($secretKey, $content) {\n    return base64_encode(hash_hmac("sha1", $content, $secretKey, true));\n}\n'))),(0,r.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func sign(secretKey string, content string) string{\n   key := []byte(secretKey)\n   mac := hmac.New(sha1.New, key)\n   mac.Write([]byte(content))\n   res := base64.StdEncoding.EncodeToString(mac.Sum(nil))\n   return res\n}\n")))),(0,r.kt)("h2",{id:"how-to-determine-callback-results"},"How to determine callback results"),(0,r.kt)("p",null,"FeaturePorbe Webhook thinks that the response code between ","[200~300]"," is a success, and the others are failures."),(0,r.kt)("h2",{id:"all-event-request-body"},"All event Request Body"),(0,r.kt)("h3",{id:"project"},"Project"),(0,r.kt)("h4",{id:"create-project"},"Create Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "CREATE",\n "data": {\n  "description": "",\n  "environments": [{\n   "clientSdkKey": "client-965ddabdca5dd390ac9a0398bfb1debce72573c6",\n   "enableApproval": false,\n   "key": "online",\n   "name": "online",\n   "serverSdkKey": "server-98848ff59b3278193c0b0bd07a6f3c60b9f69252"\n  }],\n  "key": "Test",\n  "name": "Test"\n },\n "operator": "test@featureprobe.com",\n "resource": "PROJECT",\n "timestamp": 1669342189510\n}\n')),(0,r.kt)("h4",{id:"update-project"},"Update Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE",\n "data": {\n  "description": "",\n  "environments": [{\n   "clientSdkKey": "client-965ddabdca5dd390ac9a0398bfb1debce72573c6",\n   "enableApproval": false,\n   "key": "online",\n   "name": "online",\n   "serverSdkKey": "server-98848ff59b3278193c0b0bd07a6f3c60b9f69252"\n  }],\n  "key": "Test",\n  "name": "Demo"\n },\n "operator": "test@featureprobe.com",\n "projectKey": "Test",\n "resource": "PROJECT",\n "timestamp": 1669342296378\n}\n')),(0,r.kt)("h4",{id:"delete-project"},"DELETE Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "DELETE",\n "data": {\n  "description": "",\n  "environments": [{\n   "clientSdkKey": "client-965ddabdca5dd390ac9a0398bfb1debce72573c6",\n   "enableApproval": false,\n   "key": "online",\n   "name": "online",\n   "serverSdkKey": "server-98848ff59b3278193c0b0bd07a6f3c60b9f69252"\n  }],\n  "key": "Test",\n  "name": "Demo"\n },\n "operator": "jianggang@featureprobe.com",\n "projectKey": "Test",\n "resource": "PROJECT",\n "timestamp": 1669342345254\n}\n')),(0,r.kt)("h4",{id:"update-approval-settings"},"Update Approval Settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE_APPROVAL_SETTINGS",\n "data": [{\n  "enable": true,\n  "environmentKey": "bbb",\n  "environmentName": "bbbb",\n  "locked": false,\n  "reviewers": ["jianggang@featureprobe.com"]\n }, {\n  "enable": false,\n  "environmentKey": "online",\n  "environmentName": "online",\n  "locked": false,\n  "reviewers": ["jianggang@featureprobe.com"]\n }],\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "PROJECT",\n "timestamp": 1669342480539\n}\n')),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("h4",{id:"create-environment"},"Create Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "CREATE",\n "data": {\n  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",\n  "enableApproval": false,\n  "key": "stage",\n  "name": "stage",\n  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"\n },\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "ENVIRONMENT",\n "timestamp": 1669342539671\n}\n')),(0,r.kt)("h4",{id:"update-environment"},"Update Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE",\n "data": {\n  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",\n  "enableApproval": false,\n  "key": "stage",\n  "name": "stage test",\n  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"\n },\n "environmentKey": "stage",\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "ENVIRONMENT",\n "timestamp": 1669342620464\n}\n')),(0,r.kt)("h4",{id:"offline-environment"},"Offline Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "OFFLINE",\n "data": {\n  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",\n  "enableApproval": false,\n  "key": "stage",\n  "name": "stage test",\n  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"\n },\n "environmentKey": "stage",\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "ENVIRONMENT",\n "timestamp": 1669342656893\n}\n')),(0,r.kt)("h4",{id:"restore-environment"},"Restore Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "RESTORE",\n "data": {\n  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",\n  "enableApproval": false,\n  "key": "stage",\n  "name": "stage test",\n  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"\n },\n "environmentKey": "stage",\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "ENVIRONMENT",\n "timestamp": 1669342694978\n}\n')),(0,r.kt)("h3",{id:"segment"},"Segment"),(0,r.kt)("h4",{id:"create-segment"},"Create Segment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "CREATE",\n "data": {\n  "createdTime": 1669342753382,\n  "description": "",\n  "key": "Test",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669342753382,\n  "name": "Test",\n  "projectKey": "My_Project",\n  "rules": []\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "SEGMENT",\n "timestamp": 1669342752617\n}\n')),(0,r.kt)("h4",{id:"update-segment"},"Update Segment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE",\n "data": {\n  "createdTime": 1669342753000,\n  "description": "",\n  "key": "Test",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669342753000,\n  "name": "Demo",\n  "projectKey": "My_Project",\n  "rules": []\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "SEGMENT",\n "timestamp": 1669342849844\n}\n')),(0,r.kt)("h4",{id:"publish-segment"},"Publish Segment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "PUBLISH",\n "data": {\n  "createdTime": 1669342753000,\n  "description": "",\n  "key": "Test",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669342898961,\n  "name": "Demo",\n  "projectKey": "My_Project",\n  "rules": [{\n   "conditions": [{\n    "objects": ["TEST"],\n    "predicate": "is one of",\n    "subject": "name",\n    "type": "string"\n   }],\n   "name": ""\n  }]\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "SEGMENT",\n "timestamp": 1669342898814\n}\n')),(0,r.kt)("h4",{id:"delete-segment"},"Delete Segment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "DELETE",\n "data": {\n  "createdTime": 1669342753000,\n  "description": "",\n  "key": "Test",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669342936447,\n  "name": "Demo",\n  "projectKey": "My_Project",\n  "rules": [{\n   "conditions": [{\n    "objects": ["TEST"],\n    "predicate": "is one of",\n    "subject": "name",\n    "type": "string"\n   }],\n   "name": ""\n  }]\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "SEGMENT",\n "timestamp": 1669342936153\n}\n')),(0,r.kt)("h3",{id:"toggle"},"Toggle"),(0,r.kt)("h4",{id:"create-toggle"},"Create Toggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "CREATE",\n "data": {\n  "archived": false,\n  "clientAvailability": false,\n  "createdTime": 1669342980446,\n  "desc": "",\n  "disabledServe": 0,\n  "key": "Test",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669342980446,\n  "name": "Test",\n  "permanent": false,\n  "returnType": "boolean",\n  "tags": ["test"],\n  "variations": [{\n   "description": "",\n   "name": "variation1",\n   "value": "false"\n  }, {\n   "description": "",\n   "name": "variation2",\n   "value": "true"\n  }]\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "TOGGLE",\n "timestamp": 1669342980174\n}\n')),(0,r.kt)("h4",{id:"update-toggle"},"Update Toggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE",\n "data": {\n  "archived": false,\n  "clientAvailability": true,\n  "createdTime": 1669344216000,\n  "desc": "",\n  "disabledServe": 0,\n  "key": "Demo",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669344216000,\n  "name": "Demo",\n  "permanent": false,\n  "returnType": "boolean",\n  "tags": [],\n  "variations": [{\n   "description": "",\n   "name": "variation1",\n   "value": "false"\n  }, {\n   "description": "",\n   "name": "variation2",\n   "value": "true"\n  }]\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "TOGGLE",\n "timestamp": 1669360035636\n}\n')),(0,r.kt)("h4",{id:"publish-toggle"},"Publish Toggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "PUBLISH",\n "data": {\n  "content": {\n   "defaultServe": {\n    "select": 1\n   },\n   "disabledServe": {\n    "select": 0\n   },\n   "rules": [],\n   "variations": [{\n    "description": "",\n    "name": "variation1",\n    "value": "false"\n   }, {\n    "description": "",\n    "name": "variation2",\n    "value": "true"\n   }]\n  },\n  "disabled": false,\n  "enableApproval": false,\n  "locked": false,\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669360165284,\n  "publishTime": 1669360165273,\n  "status": "RELEASE",\n  "version": 2\n },\n "environmentKey": "online",\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "TOGGLE",\n "timestamp": 1669360165044,\n "toggleKey": "Demo"\n}\n')),(0,r.kt)("h4",{id:"offline-toggle"},"Offline Toggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "OFFLINE",\n "data": {\n  "archived": true,\n  "clientAvailability": true,\n  "createdTime": 1669344216000,\n  "desc": "",\n  "disabledServe": 0,\n  "key": "Demo",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669360035000,\n  "name": "Demo",\n  "permanent": false,\n  "returnType": "boolean",\n  "tags": [],\n  "variations": [{\n   "description": "",\n   "name": "variation1",\n   "value": "false"\n  }, {\n   "description": "",\n   "name": "variation2",\n   "value": "true"\n  }]\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "TOGGLE",\n "timestamp": 1669360204523\n}\n')),(0,r.kt)("h4",{id:"restore-toggle"},"Restore Toggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "RESTORE",\n "data": {\n  "archived": false,\n  "clientAvailability": true,\n  "createdTime": 1669344216000,\n  "desc": "",\n  "disabledServe": 0,\n  "key": "Demo",\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669360204000,\n  "name": "Demo",\n  "permanent": false,\n  "returnType": "boolean",\n  "tags": [],\n  "variations": [{\n   "description": "",\n   "name": "variation1",\n   "value": "false"\n  }, {\n   "description": "",\n   "name": "variation2",\n   "value": "true"\n  }]\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "TOGGLE",\n "timestamp": 1669360239018\n}\n')),(0,r.kt)("h4",{id:"approval-toggle"},"Approval Toggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "CREATE_APPROVAL",\n "data": {\n  "approvalData": {\n   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",\n   "disabled": true\n  },\n  "approvalDate": 1669370201286,\n  "currentData": {\n   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",\n   "disabled": false\n  },\n  "environmentKey": "online",\n  "projectKey": "My_Project",\n  "status": "PENDING",\n  "submitBy": "jianggang@featureprobe.com",\n  "toggleKey": "Demo"\n },\n "environmentKey": "online",\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "TOGGLE",\n "timestamp": 1669370200888,\n "toggleKey": "Demo"\n}\n')),(0,r.kt)("h4",{id:"update-approval-toggle"},"Update Approval Toggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE_APPROVAL",\n "data": {\n  "approvalData": {\n   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",\n   "disabled": true\n  },\n  "approvalDate": 1669370291876,\n  "currentData": {\n   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",\n   "disabled": false\n  },\n  "environmentKey": "online",\n  "projectKey": "My_Project",\n  "status": "REVOKE",\n  "submitBy": "jianggang@featureprobe.com",\n  "toggleKey": "Demo"\n },\n "environmentKey": "online",\n "operator": "jianggang@featureprobe.com",\n "projectKey": "My_Project",\n "resource": "TOGGLE",\n "timestamp": 1669370291596,\n "toggleKey": "Demo"\n}\n')),(0,r.kt)("h3",{id:"member"},"Member"),(0,r.kt)("h4",{id:"create-member"},"Create Member"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "CREATE",\n "data": [{\n  "account": "test@test.com",\n  "createdBy": "jianggang@featureprobe.com",\n  "createdTime": 1669360591619,\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669360591619,\n  "role": "WRITER"\n }],\n "operator": "jianggang@featureprobe.com",\n "resource": "MEMBER",\n "timestamp": 1669360591287\n}\n')),(0,r.kt)("h4",{id:"update-member"},"Update Member"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE",\n "data": {\n  "account": "test@test.com",\n  "createdBy": "jianggang@featureprobe.com",\n  "createdTime": 1669360591000,\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669360591000,\n  "role": "OWNER"\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "MEMBER",\n "timestamp": 1669360630120\n}\n')),(0,r.kt)("h4",{id:"delete-member"},"Delete Member"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "DELETE",\n "data": {\n  "account": "test@test.com",\n  "createdBy": "jianggang@featureprobe.com",\n  "createdTime": 1669360591000,\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669360630000,\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "MEMBER",\n "timestamp": 1669361086817\n}\n')),(0,r.kt)("h3",{id:"webhook"},"Webhook"),(0,r.kt)("h4",{id:"create-webhook"},"Create Webhook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "CREATE",\n "data": {\n  "createdBy": "jianggang@featureprobe.com",\n  "createdTime": 1669363048466,\n  "description": "This a test webhook",\n  "id": 37,\n  "modifiedBy": "jianggang@featureprobe.com",\n  "modifiedTime": 1669363048466,\n  "name": "Test",\n  "status": "ENABLE",\n  "url": "http://127.0.0.1"\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "WEBHOOK",\n "timestamp": 1669363048390\n}\n')),(0,r.kt)("h4",{id:"update-webhook"},"Update Webhook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "action": "UPDATE",\n "data": {\n  "createdBy": "jianggang@featureprobe.com",\n  "createdTime": 1669363048000,\n  "description": "This a test webhook",\n  "id": 37,\n  "modifiedBy": "Admin",\n  "modifiedTime": 1669363050000,\n  "name": "Test",\n  "status": "ENABLE",\n  "url": "http://127.0.0.1/demo"\n },\n "operator": "jianggang@featureprobe.com",\n "resource": "WEBHOOK",\n "timestamp": 1669363075138\n}\n')),(0,r.kt)("h4",{id:"delete-webhook"},"Delete Webhook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "DELETE",\n  "data": {\n    "createdBy": "jianggang@featureprobe.com",\n    "createdTime": 1669363048000,\n    "description": "This a test webhook",\n    "id": 37,\n    "modifiedBy": "Admin",\n    "modifiedTime": 1669363077000,\n    "name": "Test",\n    "status": "ENABLE",\n    "url": "http://127.0.0.1/demo"\n  },\n  "operator": "jianggang@featureprobe.com",\n  "resource": "WEBHOOK",\n  "timestamp": 1669363176546\n}\n')))}m.isMDXComponent=!0}}]);