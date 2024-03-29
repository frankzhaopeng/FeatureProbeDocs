"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[4601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="SDK Contribution Guide",s={unversionedId:"reference/sdk-contributor",id:"reference/sdk-contributor",title:"SDK Contribution Guide",description:"Overview",source:"@site/docs/reference/sdk-contributor.md",sourceDirName:"reference",slug:"/reference/sdk-contributor",permalink:"/FeatureProbeDocs/reference/sdk-contributor",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/reference/sdk-contributor.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"SDK implementation principle",permalink:"/FeatureProbeDocs/reference/sdk-specification"},next:{title:"Rule Evaluation",permalink:"/FeatureProbeDocs/reference/evaluation-rules"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Receiving changes to feature flags",id:"receiving-changes-to-feature-flags",level:2},{value:"Receiving changes to feature flags in server-side SDKs",id:"receiving-changes-to-feature-flags-in-server-side-sdks",level:3},{value:"Client SDK receives feature flags change",id:"client-sdk-receives-feature-flags-change",level:3},{value:"Evaluating feature flag results",id:"evaluating-feature-flag-results",level:2},{value:"Evaluating feature flag results for server-side SDK",id:"evaluating-feature-flag-results-for-server-side-sdk",level:3},{value:"Evaluating feature flag results for client-side SDK",id:"evaluating-feature-flag-results-for-client-side-sdk",level:3},{value:"Track events",id:"track-events",level:2},{value:"Reference Materials.",id:"reference-materials",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk-contribution-guide"},"SDK Contribution Guide"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document aims to introduce the workings of the FeatureProbe SDK in order to assist those who wish to create new SDKs for FeatureProbe or contribute to existing ones. All of our SDKs are open-source, and we welcome contributions from members of the community."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"All SDKs must include the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#receiving-changes-to-feature-flags"},"Receiving changes to feature flags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#evaluating-feature-flag-results"},"Evaluating feature flag results")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#track-events"},"Track events"))),(0,a.kt)("h2",{id:"receiving-changes-to-feature-flags"},"Receiving changes to feature flags"),(0,a.kt)("p",null,"The FeatureProbe SDK stores all feature flags in memory. Currently, two different methods are provided to update feature flags: asynchronous polling and streaming api. For SDKs that already support streaming api, streaming api is the default update method. The implementation of asynchronous polling is necessary because the streaming api implementation relies on asynchronous polling as a fallback."),(0,a.kt)("p",null,"Regarding feature flag storage, server-side SDKs and client-side SDKs have different implementations. Server-side SDKs store feature flag rules directly in memory. On the other hand, client-side SDKs store the evaluated feature flag results due to data security concerns and the relatively stable nature of users."),(0,a.kt)("h3",{id:"receiving-changes-to-feature-flags-in-server-side-sdks"},"Receiving changes to feature flags in server-side SDKs"),(0,a.kt)("p",null,"When we make changes to the configuration of feature flags through the FeatureProbe platform or Open API, server-side SDKs need to update the feature flag rules stored in memory. Currently, the following two implementations need to be provided:"),(0,a.kt)("p",null," 1\u3001",(0,a.kt)("strong",{parentName:"p"},"Getting feature flag rules through asynchronous polling")),(0,a.kt)("p",null,"Protocol for the API used by the server to retrieve feature flag configurations\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://featureprobe.io/server/api/server-sdk/toggles' \\\n--header 'Authorization: server-9e53c5db4fd75049a69df8881f3bc90edd58fb06'   \n")),(0,a.kt)("p",null,"Example response protocol:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "segments": {\n        "some_segment": {\n            "key": "some_segment1",\n            "uniqueId": "some_segment1-fjoaefjaam",\n            "version": 2,\n            "rules": [\n                {\n                    "conditions": [\n                        {\n                            "type": "string",\n                            "subject": "city",\n                            "predicate": "is one of",\n                            "objects": [\n                                "4"\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "toggles": {\n        "bool_toggle": {\n            "key": "bool_toggle",\n            "trackAccessEvents": true,\n            "lastModified": 1678180913,\n            "enabled": true,\n            "version": 1,\n            "disabledServe": {\n                "select": 1\n            },\n            "defaultServe": {\n                "select": 0\n            },\n            "rules": [\n                {\n                    "serve": {\n                        "select": 0\n                    },\n                    "conditions": [\n                        {\n                            "type": "string",\n                            "subject": "city",\n                            "predicate": "is one of",\n                            "objects": [\n                                "1",\n                                "2",\n                                "3"\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "serve": {\n                        "select": 1\n                    },\n                    "conditions": [\n                        {\n                            "type": "segment",\n                            "subject": "user",\n                            "predicate": "in",\n                            "objects": [\n                                "some_segment1-fjoaefjaam"\n                            ]\n                        }\n                    ]\n                }\n            ],\n            "variations": [\n                true,\n                false\n            ]\n        }\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This API requires setting the Authorization HTTP request header to ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," to authenticate when polling the API. ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," is the Server SDK key passed by the client application to FeatureProbe configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To implement asynchronous polling, a timer or polling library can be used to periodically send HTTP requests to retrieve the latest feature flag rules. The recommended default frequency is 5 seconds.\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The request address for the polling API (synchronizerUrl) and polling frequency (refreshInterval) should be provided to users as configuration options through FPConfig, so that users can customize the polling frequency and request address."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Reference ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/FeatureProbe/server-sdk-java/blob/main/src/main/java/com/featureprobe/sdk/server/PollingSynchronizer.java"},"Java code for implementing asynchronous polling")))),(0,a.kt)("p",null," 2\u3001",(0,a.kt)("strong",{parentName:"p"},"Retrieve feature flags change events through streaming api")),(0,a.kt)("p",null,"When there is a higher requirement for the latency of feature flags changes, optimization can be achieved by implementing the streaming api update method. The following are the implementation steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First, it is necessary to implement the asynchronous polling mechanism as an alternative solution for streaming api updates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To implement the streaming api mechanism, you will need to add the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client"},"socket.io-client"),' client dependency to your SDK and establish a long connection with the FeatureProbe Server during SDK initialization. You can send a "register" event with a parameter named key and a value of ',(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," to verify the SDK's identity during the authentication process. Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," is the Server SDK key passed by the client application to the FeatureProbe configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Listen to the "update" event so that when the feature flags configuration changes, the client is immediately notified to proactively pull the latest switch rule through the polling API.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, the address of the streaming api (realtimeUri) needs to be exposed to users through FPConfig to facilitate custom configuration."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Reference ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/FeatureProbe/server-sdk-java/blob/main/src/main/java/com/featureprobe/sdk/server/StreamingSynchronizer.java"},"Java code for implementing streaming api")))),(0,a.kt)("h3",{id:"client-sdk-receives-feature-flags-change"},"Client SDK receives feature flags change"),(0,a.kt)("p",null,"When we make changes to the feature flags configuration through the FeatureProbe platform or Open API, the client SDK needs to update the results of the corresponding  feature flags in memory. Currently, the following two implementations need to be provided:"),(0,a.kt)("p",null," 1\u3001",(0,a.kt)("strong",{parentName:"p"},"Getting feature flag result through asynchronous polling"),"\nProtocol for the API used by the server to retrieve feature flag result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://featureprobe.io/server/api/client-sdk/toggles?user=eyJrZXkiOiIxNjc4MjYyODkzODk2IiwiYXR0cnMiOnt9fQ%3D%3D' \\\n--header 'Authorization: client-48e0f6f34baef833e1e10df90615b957b1739fb5' \n")),(0,a.kt)("p",null,"Example response protocol:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "toggle_key": {\n        "value": false,\n        "ruleIndex": null,\n        "trackAccessEvents": true,\n        "lastModified": 1676879703000,\n        "variationIndex": 0,\n        "version": 91,\n        "reason": "disabled"\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This API requires setting the Authorization HTTP request header to ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," for authentication during polling API. ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," is the Client SDK key passed by the client application to FeatureProbe configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Additionally, the API requires setting the user parameter in the HTTP request as ",(0,a.kt)("inlineCode",{parentName:"p"},"FPUser"),", with its value being the Base64-encoded string obtained from serializing the FPUser object to a JSON format.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To implement the asynchronous polling mechanism, you can use a timer or a polling library to periodically send HTTP requests to obtain the latest feature flags result. It is recommended to set the default frequency to 5 seconds.\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make the polling API's request address (synchronizerUrl) and polling frequency (refreshInterval) available as configuration options through FPConfig, so that users can customize the polling frequency and request address."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Reference ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/FeatureProbe/client-sdk-js/blob/main/src/FeatureProbe.ts#"},"Javascript code for implementing asynchronous polling")," fetchToggles() method"))),(0,a.kt)("p",null,"2\u3001",(0,a.kt)("strong",{parentName:"p"},"Retrieve feature flags change events through streaming api")),(0,a.kt)("p",null,"Here are the steps to implement streaming api for updating feature flag changes with high latency requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First, implement asynchronous polling mechanism as an alternative solution for streaming api updates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To implement the streaming api mechanism, you will need to add the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client"},"socket.io-client"),' client dependency to your SDK and establish a long connection with the FeatureProbe Server during SDK initialization. You can send a "register" event with a parameter named key and a value of ',(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," to verify the SDK's identity during the authentication process. Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," is the Server SDK key passed by the client application to the FeatureProbe configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Listen to the "update" event so that when the feature flags configuration changes, the client is immediately notified to proactively pull the latest switch rule through the polling API.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, the address of the streaming api (realtimeUri) needs to be exposed to users through FPConfig to facilitate custom configuration."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Reference ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/FeatureProbe/client-sdk-js/blob/main/src/FeatureProbe.ts#"},"Javascript code for implementing streaming api")," connectSocket() method"))),(0,a.kt)("h2",{id:"evaluating-feature-flag-results"},"Evaluating feature flag results"),(0,a.kt)("p",null,"When the server-side and client-side SDKs have inconsistencies in the way they evaluate feature flag results."),(0,a.kt)("h3",{id:"evaluating-feature-flag-results-for-server-side-sdk"},"Evaluating feature flag results for server-side SDK"),(0,a.kt)("p",null,"The server-side SDK needs to implement rule evaluation for feature flag in local memory. For specific calculation methods, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"./evaluation-rules"},"Feature Flag Rule Evaluation"),"."),(0,a.kt)("h3",{id:"evaluating-feature-flag-results-for-client-side-sdk"},"Evaluating feature flag results for client-side SDK"),(0,a.kt)("p",null,"The client-side SDK does not need to implement the logic of feature flag rule calculation, which is the responsibility of the FeatureProbe service. Therefore, for the client-side SDK, the implementation of obtaining feature flag results described above can be simplified."),(0,a.kt)("h2",{id:"track-events"},"Track events"),(0,a.kt)("p",null,"Currently, FeatureProbe provides 4 types of events for reporting:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"custom"),": Events sent when the application calls the SDK's track method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"access"),": Feature flag evaluation information\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pageview"),": Records page access events for the JavaScript SDK."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"click"),": Records page click events for the JavaScript SDK.")),(0,a.kt)("p",null,"And it is necessary to report the access statistics of each group's feature flag within a certain period of time."),(0,a.kt)("p",null,"All SDKs must send events in batches to the FeatureProbe server asynchronously for a period of time. The SDKs need to enable a timer task, which is executed every 5 seconds by default, to send all events generated during this period to the server."),(0,a.kt)("p",null,"Protocol for the track events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://featureprobe.io/server/api/events\' \\\n--header \'Authorization: client-48e0f6f34baef833e1e10df90615b957b1739fb5\' \\\n--header \'user-agent: Java/1.0.1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'[\n    {\n        "events": [\n            {\n                "kind": "access",\n                "time": 1678343903181,\n                "user": "657974429285298",\n                "key": "Event_Analysis",\n                "value": "4",\n                "version": 8,\n                "variationIndex": 3,\n                "ruleIndex": null,\n                "reason": "Default rule hit. "\n            },\n            {\n                "kind": "custom",\n                "time": 1678343903181,\n                "user": "657974429285298",\n                "name": "multi_feature",\n                "value": 95.52936252176978\n            }\n        ],\n        "access": {\n            "counters": {\n                "Event_Analysis": [\n                    {\n                        "count": 2,\n                        "value": "4",\n                        "version": 8,\n                        "index": 3\n                    },\n                    {\n                        "count": 1,\n                        "value": "2",\n                        "version": 8,\n                        "index": 1\n                    },\n                    {\n                        "count": 3,\n                        "value": "1",\n                        "version": 8,\n                        "index": 0\n                    },\n                    {\n                        "count": 4,\n                        "value": "3",\n                        "version": 8,\n                        "index": 2\n                    }\n                ]\n            },\n            "startTime": 1678343903181,\n            "endTime": 1678343907896\n        }\n    }\n]\'\n')),(0,a.kt)("p",null,"This API must include the following request headers:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Authorization")),"\uff1aThe value is ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_key")," is the Server(Client) SDK key passed by the client application to FeatureProbe configuration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"UA")),"\uff1aThe value is ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_language_kind/sdk_version"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_language_kind")," is the language name of the SDK implementation, and ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk_version")," is the version number of the current SDK."),(0,a.kt)("h2",{id:"reference-materials"},"Reference Materials."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reference implementation of the server-side SDK: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/server-sdk-java"},"Java SDK")," and ",(0,a.kt)("a",{parentName:"li",href:"https://featureprobe.github.io/server-sdk-java/"},"API Docs")),(0,a.kt)("li",{parentName:"ul"},"Reference implementation of the client-side SDK: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/client-sdk-js"},"Javascript SDK")," and ",(0,a.kt)("a",{parentName:"li",href:"https://featureprobe.github.io/client-sdk-js/"},"API Docs"))))}p.isMDXComponent=!0}}]);