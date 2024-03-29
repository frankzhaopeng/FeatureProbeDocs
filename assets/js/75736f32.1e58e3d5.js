"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[5411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="React SDK",l={unversionedId:"how-to/Client-Side SDKs/react-sdk",id:"how-to/Client-Side SDKs/react-sdk",title:"React SDK",description:"To provide a better integration for use in React applications, React SDK builds on JavaScript SDK. Much of the JavaScript SDK functionality is also available for the React SDK to use. Please reference JavaScript SDK.",source:"@site/docs/how-to/Client-Side SDKs/react-sdk.md",sourceDirName:"how-to/Client-Side SDKs",slug:"/how-to/Client-Side SDKs/react-sdk",permalink:"/FeatureProbeDocs/how-to/Client-Side SDKs/react-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/how-to/Client-Side SDKs/react-sdk.md",tags:[],version:"current",lastUpdatedAt:1711700969,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"MiniProgram SDK",permalink:"/FeatureProbeDocs/how-to/Client-Side SDKs/minirprogram-sdk"},next:{title:"Flutter SDK",permalink:"/FeatureProbeDocs/how-to/Client-Side SDKs/flutter-sdk"}},p={},s=[{value:"Try Out Demo Code",id:"try-out-demo-code",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Step 1. Use create-react-app to create a new React application:",id:"step-1-use-create-react-app-to-create-a-new-react-application",level:3},{value:"Step 2. Install the SDK:",id:"step-2-install-the-sdk",level:3},{value:"Step 3. In App.js, import FPProvider:",id:"step-3-in-appjs-import-fpprovider",level:3},{value:"Step 4. Create a new file home.js in the same directory as App.js, import withFPConsumer in home.js:",id:"step-4-create-a-new-file-homejs-in-the-same-directory-as-appjs-import-withfpconsumer-in-homejs",level:3},{value:"API",id:"api",level:2},{value:"FPProvider",id:"fpprovider",level:3},{value:"AsyncFPProvider",id:"asyncfpprovider",level:3},{value:"withFPConsumer",id:"withfpconsumer",level:3},{value:"useFPClient",id:"usefpclient",level:3},{value:"useFPToggles",id:"usefptoggles",level:3},{value:"Track events",id:"track-events",level:2},{value:"Track custom events",id:"track-custom-events",level:3},{value:"SDK Open API",id:"sdk-open-api",level:2},{value:"Testing",id:"testing",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-sdk"},"React SDK"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To provide a better integration for use in React applications, React SDK builds on JavaScript SDK. Much of the JavaScript SDK functionality is also available for the React SDK to use. Please reference ",(0,a.kt)("a",{parentName:"p",href:"/FeatureProbeDocs/how-to/Client-Side%20SDKs/javascript-sdk"},"JavaScript SDK"),".")),(0,a.kt)("admonition",{title:"Notice",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For users who needs to use metric analysis, please upgrade React SDK to version ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/featureprobe-client-sdk-react/v/2.0.1"}," 2.0.1 "),". From this version, we support sending click, page view, and custom events.")),(0,a.kt)("admonition",{title:"SDK quick links",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In addition to this reference guide, we provide source code, API reference documentation, and sample applications at the following links:"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Resource")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Location")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SDK API documentation"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://featureprobe.github.io/client-sdk-react/"}," SDK API docs"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GitHub repository"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-react"},"Client Side SDK for React"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sample applications"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/FeatureProbe/client-sdk-react/tree/main/example"},"Demo code"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Published module"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/featureprobe-client-sdk-react"},"npm")))))),(0,a.kt)("h2",{id:"try-out-demo-code"},"Try Out Demo Code"),(0,a.kt)("p",null,"We provide a runnable demo code for you to understand how FeatureProbe SDK is used."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, you need to choose which environment FeatureProbe is connected to control your program"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can use our online ",(0,a.kt)("a",{parentName:"li",href:"https://featureprobe.io/login"},"demo environment")),(0,a.kt)("li",{parentName:"ul"},"You can also use your own ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/featureprobe/FeatureProbe"},"docker environment")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download this repo and run the demo program:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/client-sdk-react.git\ncd client-sdk-react\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the link information in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-react/tree/main/example"},"example"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For online demo environment:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "',(0,a.kt)("a",{parentName:"li",href:"https://featureprobe.io/server%22"},'https://featureprobe.io/server"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientSdkKey")," Please copy from the following interface:")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"client_sdk_key snapshot",src:n(4458).Z,width:"414",height:"385"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For local docker environment:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remoteUrl"),' = "http://YOUR_DOCKER_IP:4009/server"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientSdkKey"),' = "client-25614c7e03e9cb49c0e96357b797b1e47e7f2dff"'))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the program."),(0,a.kt)("p",{parentName:"li"},"The first Demo:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd example/provider\nnpm install\nnpm run start\n")),(0,a.kt)("p",{parentName:"li"},"The second Demo:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd example/async-provider\nnpm install\nnpm run start\n")))),(0,a.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,a.kt)("p",null,"In this guide we explain how to use feature toggles in a ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," application using ",(0,a.kt)("inlineCode",{parentName:"p"},"FeatureProbe"),"."),(0,a.kt)("h3",{id:"step-1-use-create-react-app-to-create-a-new-react-application"},"Step 1. Use create-react-app to create a new React application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"npx create-react-app react-demo && cd react-demo\n")),(0,a.kt)("h3",{id:"step-2-install-the-sdk"},"Step 2. Install the SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"npm install featureprobe-client-sdk-react --save\n")),(0,a.kt)("h3",{id:"step-3-in-appjs-import-fpprovider"},"Step 3. In App.js, import FPProvider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { FPProvider } from \'featureprobe-client-sdk-react\';\nimport Home from \'./home\';\n\nfunction App() {\n  const user = new FPUser();\n  user.with("userId", /* userId */);\n  \n  return (\n    <FPProvider \n      config={{\n        remoteUrl: "https://featureprobe.io/server",\n        // remoteUrl: "https://127.0.0.1:4007", // for local docker\n        clientSdkKey: /* clientSdkKey */\n        user,\n      }}\n    >\n      <Home />\n    </FPProvider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"step-4-create-a-new-file-homejs-in-the-same-directory-as-appjs-import-withfpconsumer-in-homejs"},"Step 4. Create a new file home.js in the same directory as App.js, import withFPConsumer in home.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { withFPConsumer } from 'featureprobe-client-sdk-react';\n\nconst Home = ({ toggles, client }) => {\n  const value = client?.boolValue(/* toggleKey */, false);\n  return (\n    <div>\n      <div>You can use toggle value like this: ${value}</div>\n      <div>You can also get toggle detail from toggles object like this: ${toggles?.[/* toggleKey */]}</div>\n    </div>\n  )\n};\n\nexport default withFPConsumer(Home);\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"fpprovider"},"FPProvider"),(0,a.kt)("p",null,"Initializing SDK with ",(0,a.kt)("inlineCode",{parentName:"p"},"FPProvider"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"FPProvider")," accepts a config object, which provides configuration options for the React SDK. Read ",(0,a.kt)("a",{parentName:"p",href:"./javascript-sdk#available-options"},"Available options")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { FPProvider } from \'featureprobe-client-sdk-react\';\nimport Home from \'./home\';\n\nfunction App() {\n  const user = new FPUser();\n  user.with("userId", /* userId */);\n  \n  return (\n    <FPProvider \n      config={{\n        remoteUrl: "https://featureprobe.io/server",\n        // remoteUrl: "https://127.0.0.1:4007", // for local docker\n        clientSdkKey: /* clientSdkKey */\n        user,\n      }}\n    >\n      <Home />\n    </FPProvider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Alternatively, you can pass your own client in to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FPProvider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { FPProvider, FeatureProbe } from \'featureprobe-client-sdk-react\';\nimport Home from \'./home\';\n\nfunction App() {\n  const user = new FPUser();\n  user.with("userId", /* userId */);\n\n  const client = new FeatureProbe({\n    remoteUrl: "https://featureprobe.io/server",\n    // remoteUrl: "https://127.0.0.1:4007", // for local docker\n    clientSdkKey: /* clientSdkKey */\n    user,\n  })\n  \n  return (\n    <FPProvider \n      FPClient={client}\n    >\n      <Home />\n    </FPProvider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"asyncfpprovider"},"AsyncFPProvider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AsyncFPProvider")," is an another initialization method. This method will wait until SDK emit ",(0,a.kt)("inlineCode",{parentName:"p"},"ready")," event, this can ensure toggles and the client are ready at the start of your React app lifecycle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nimport { AsyncFPProvider, FPUser } from 'featureprobe-client-sdk-react';\n\n(async () => {\n  const FPProvider = await AsyncFPProvider({\n    remoteUrl: \"https://featureprobe.io/server\",\n    // remoteUrl: \"https://127.0.0.1:4007\", // for local docker\n    clientSdkKey: /* clientSdkKey */\n    user,\n  });\n\n  const root = ReactDOM.createRoot(document.getElementById('root'));\n\n  root.render(\n    <FPProvider>\n      <App />\n    </FPProvider>\n  );\n})();\n")),(0,a.kt)("h3",{id:"withfpconsumer"},"withFPConsumer"),(0,a.kt)("p",null,"After you has initialized the React SDK, use ",(0,a.kt)("inlineCode",{parentName:"p"},"withFPConsumer")," to access toggles values and the ",(0,a.kt)("inlineCode",{parentName:"p"},"FeatureProbe")," client. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { withFPConsumer } from 'featureprobe-client-sdk-react';\n\nfunction HocComponent(props) {\n  const { toggles, client } = props;\n  const value = client.boolValue(/* toggleKey */);\n\n  return (\n    <div>\n      <div>{JSON.stringify(toggles)}</div>\n      <div>{value}</div>\n    </div>\n  );\n}\n\nexport default withFPConsumer(HocComponent);\n")),(0,a.kt)("p",null,"The React SDK offers two custom hooks which you can use as an alternative to ",(0,a.kt)("inlineCode",{parentName:"p"},"withFPConsumer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"useFPClient")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useFPToggles"),"."),(0,a.kt)("h3",{id:"usefpclient"},"useFPClient"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useFPClient")," is a custom hook which returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"FeatureProbe")," client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useFPClient } from 'featureprobe-client-sdk-react';\n\nfunction HookComponent() {\n  const client = useFPClient();\n  return (\n    <div style={{marginTop: '20px'}}>\n      <div>Hook</div>\n      <samp>{`console.log(JSON.stringify(client.boolDetail('demo_features')))`}</samp>\n      <div>{JSON.stringify(client.boolDetail('demo_features'))}</div>\n    </div>\n  );\n}\n\nexport default HookComponent;\n")),(0,a.kt)("h3",{id:"usefptoggles"},"useFPToggles"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useFPToggles")," is a custom hook which returns all feature toggles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useFPToggles } from 'featureprobe-client-sdk-react';\n\nfunction HookComponent() {\n  const toggles = useFPToggles();\n  return (\n    <div>\n      <div>{JSON.stringify(toggles)}</div>\n    </div>\n  );\n}\n\nexport default HookComponent;\n")),(0,a.kt)("h2",{id:"track-events"},"Track events"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"React SDK supports event tracking from version 2.0.1.")),(0,a.kt)("p",null,"React SDK supports tracking ",(0,a.kt)("inlineCode",{parentName:"p"},"custom events"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pageview events")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"click events"),"."),(0,a.kt)("p",null,"The track of ",(0,a.kt)("inlineCode",{parentName:"p"},"pageview events")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"click events")," is done by the SDK itself automatically, you have no need to write any code."),(0,a.kt)("h3",{id:"track-custom-events"},"Track custom events"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"useFPClient")," hook to get a SDK instance, then call ",(0,a.kt)("inlineCode",{parentName:"p"},"track")," api."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useFPClient } from 'featureprobe-client-sdk-react';\nconst fp = useFPClient();\n\n// Send a custom event.\n// The first parameter is the event name,\n// the second parameter is optional, it means a metric value to track\n// highlight-start\nfp.track('YOUR_CUSTOM_EVENT_NAME_1');\nfp.track('YOUR_CUSTOM_EVENT_NAME_2', 5.5);\n// highlight-end\n")),(0,a.kt)("h2",{id:"sdk-open-api"},"SDK Open API"),(0,a.kt)("p",null,"API Docs: ",(0,a.kt)("a",{parentName:"p",href:"https://featureprobe.github.io/client-sdk-react/"},"SDK API")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run test\n")))}d.isMDXComponent=!0},4458:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client_sdk_key_snapshot_cn-441a8bffad52964614b63b1961967db9.png"}}]);