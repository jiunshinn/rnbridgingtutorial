"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[4774],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>b});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(o),p=a,b=c["".concat(s,".").concat(p)]||c[p]||d[p]||r;return o?n.createElement(b,l(l({ref:t},u),{},{components:o})):n.createElement(b,l({ref:t},u))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<r;m++)l[m]=o[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5162:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(7294),a=o(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:o,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:o},t)}},4866:(e,t,o)=>{o.d(t,{Z:()=>f});var n=o(7462),a=o(7294),r=o(6010),l=o(2466),i=o(6550),s=o(1980),m=o(7392),u=o(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:a}}=e;return{value:t,label:o,attributes:n,default:a}}))}function d(e){const{values:t,children:o}=e;return(0,a.useMemo)((()=>{const e=t??c(o);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:o}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,r=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,m]=b({queryString:o,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(o);return[n,(0,a.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:n}),y=(()=>{const e=s??c;return p({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),g(e)}),[m,g,r]),tabValues:r}}var y=o(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function M(e){let{className:t,block:o,selectedValue:i,selectValue:s,tabValues:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,o=u.indexOf(t),n=m[o].value;n!==i&&(c(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=u.indexOf(e.currentTarget)+1;t=u[o]??u[0];break}case"ArrowLeft":{const o=u.indexOf(e.currentTarget)-1;t=u[o]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},t)},m.map((e=>{let{value:t,label:o,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},l,{className:(0,r.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),o??t)})))}function k(e){let{lazy:t,children:o,selectedValue:n}=e;if(o=Array.isArray(o)?o:[o],t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(M,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function f(e){const t=(0,y.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},8586:(e,t,o)=>{o.d(t,{ZP:()=>i});var n=o(7462),a=(o(7294),o(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...o}=e;return(0,a.kt)(l,(0,n.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You may notice, that JS specs contain codegen-related methods, classes, types, etc. to make things more future-proof."),(0,a.kt)("p",null,"That's because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"those elements are available since RN older versions (even from v0.65)"),(0,a.kt)("li",{parentName:"ul"},'those elements are falling back to "old architecture" implementation (e.g. codegenNativeComponent)'),(0,a.kt)("li",{parentName:"ul"},"it introduces type safety for exposed native parts on JS side"),(0,a.kt)("li",{parentName:"ul"},"it's much easier to keep single specification on JS side - when old arch will be dropped, there'll be no need to change anything on JS side")),(0,a.kt)("p",null,"So to make it easier, let's use them, to get you more familiar with it \ud83d\udc4d"))}i.isMDXComponent=!0},3377:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),r=o(4866),l=o(5162),i=o(8586);const s={sidebar_label:"Method types (old arch)",sidebar_position:3,title:"Method types (old arch)"},m=void 0,u={unversionedId:"module-reference/module-method-types-old",id:"module-reference/module-method-types-old",title:"Method types (old arch)",description:"Void method",source:"@site/docs/module-reference/module-method-types-old.mdx",sourceDirName:"module-reference",slug:"/module-reference/module-method-types-old",permalink:"/rnbridgingtutorial/docs/module-reference/module-method-types-old",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/docs/docs/module-reference/module-method-types-old.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Method types (old arch)",sidebar_position:3,title:"Method types (old arch)"},sidebar:"tutorialSidebar",previous:{title:"Method types",permalink:"/rnbridgingtutorial/docs/module-reference/module-method-types"},next:{title:"Method arguments",permalink:"/rnbridgingtutorial/docs/module-reference/module-args-types"}},c={},d=[{value:"Void method",id:"void-method",level:3},{value:"Sync method",id:"sync-method",level:3},{value:"Promise method",id:"promise-method",level:3},{value:"Callback method",id:"callback-method",level:3}],p={toc:d},b="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(b,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)(i.ZP,{mdxType:"CodegenForOldArchInfo"})),(0,a.kt)("h3",{id:"void-method"},"Void method"),(0,a.kt)("p",null,"Void methods can take multiple arguments and do not return any value."),(0,a.kt)(r.Z,{groupId:"specs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JS",label:"JS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/NativeMyAwesomeModule.ts"',title:'"src/NativeMyAwesomeModule.ts"'},"import type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\n// ...\n\nexport interface Spec extends TurboModule {\n  myAwesomeVoidMethod(): void\n  myAwesomeVoidMethodWithArguments(numArg: number, objArg: { firstObjProp: string, secondObjProp?: boolean }): void\n}\n\n// TurboModuleRegistry uses NativeModules['MyAwesomeModule'] on old arch\nexport default TurboModuleRegistry.getEnforcing<Spec>('MyAwesomeModule');\n"))),(0,a.kt)(l.Z,{value:"iOS",label:"iOS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc",metastring:'title="ios/NativeMyAwesomeModule.mm"',title:'"ios/NativeMyAwesomeModule.mm"'},"RCT_EXPORT_METHOD(myAwesomeVoidMethod)\n{\n    // ...\n}\n\nRCT_EXPORT_METHOD(myAwesomeVoidMethodWithArguments:(NSNumber *) numArg \n                                            objArg:(NSDictionary *) objArg)\n{\n    // ...\n}\n"))),(0,a.kt)(l.Z,{value:"Android",label:"Android Spec",mdxType:"TabItem"},(0,a.kt)(r.Z,{groupId:"android_lang",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="android/src/main/newarch/com/myawesomeapp/NativeMyAwesomeModule.kt"',title:'"android/src/main/newarch/com/myawesomeapp/NativeMyAwesomeModule.kt"'},"import com.facebook.react.bridge.ReactMethod\nimport com.facebook.react.bridge.ReadableMap\n\n// ...\n\n@ReactMethod\nfun myAwesomeVoidMethod() {\n    // ...\n}\n\n@ReactMethod\nfun myAwesomeVoidMethodWithArguments(numArg: Double, objArg: ReadableMap) {\n    // ...\n}\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="android/src/main/newarch/com/myawesomeapp/NativeMyAwesomeModule.java"',title:'"android/src/main/newarch/com/myawesomeapp/NativeMyAwesomeModule.java"'},"import com.facebook.react.bridge.ReactMethod;\nimport com.facebook.react.bridge.ReadableMap;\n\n// ...\n\n@ReactMethod\npublic void myAwesomeVoidMethod() {\n    // ...\n}\n\n@ReactMethod\npublic void myAwesomeVoidMethodWithArguments(double numArg, ReadableMap objArg) {\n    // ...\n}\n")))))),(0,a.kt)("h3",{id:"sync-method"},"Sync method"),(0,a.kt)("p",null,"Sync methods can take multiple arguments and synchronously return the value."),(0,a.kt)(r.Z,{groupId:"specs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JS",label:"JS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/NativeMyAwesomeModule.ts"',title:'"src/NativeMyAwesomeModule.ts"'},"import type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\n// ...\n\nexport interface Spec extends TurboModule {\n  myAwesomeSyncMethod(): number\n  myAwesomeSyncMethodWithArguments(numArg: number, objArg: { firstObjProp: string, secondObjProp?: boolean }): number\n}\n\n// TurboModuleRegistry uses NativeModules['MyAwesomeModule'] on old arch\nexport default TurboModuleRegistry.getEnforcing<Spec>('MyAwesomeModule');\n"))),(0,a.kt)(l.Z,{value:"iOS",label:"iOS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc",metastring:'title="ios/NativeMyAwesomeModule.mm"',title:'"ios/NativeMyAwesomeModule.mm"'},"RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(double, myAwesomeSyncMethod)\n{\n    // ...\n    return 42;\n}\n\nRCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(double, myAwesomeSyncMethodWithArguments:(NSNumber *) numArg \n                                                                      objArg:(NSDictionary *) objArg)\n{\n    // ...\n    return 42;\n}\n"))),(0,a.kt)(l.Z,{value:"Android",label:"Android Spec",mdxType:"TabItem"},(0,a.kt)(r.Z,{groupId:"android_lang",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="android/src/main/newarch/NativeMyAwesomeModule.kt"',title:'"android/src/main/newarch/NativeMyAwesomeModule.kt"'},"import com.facebook.react.bridge.ReactMethod\nimport com.facebook.react.bridge.ReadableMap\n\n// ...\n\n@ReactMethod(isBlockingSynchronousMethod = true)\nfun myAwesomeSyncMethod(): Double {\n    // ...\n    return 42\n}\n\n@ReactMethod(isBlockingSynchronousMethod = true)\nfun myAwesomeSyncMethodWithArguments(numArg: Double, objArg: ReadableMap): Double {\n    // ...\n    return 42\n}\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="android/src/main/newarch/NativeMyAwesomeModule.java"',title:'"android/src/main/newarch/NativeMyAwesomeModule.java"'},"import com.facebook.react.bridge.ReactMethod;\nimport com.facebook.react.bridge.ReadableMap;\n\n// ...\n\n@ReactMethod(isBlockingSynchronousMethod = true)\npublic double myAwesomeSyncMethod() {\n    // ...\n    return 42;\n}\n\n@ReactMethod(isBlockingSynchronousMethod = true)\npublic double myAwesomeSyncMethodWithArguments(double numArg, ReadableMap objArg) {\n    // ...\n    return 42;\n}\n")))))),(0,a.kt)("h3",{id:"promise-method"},"Promise method"),(0,a.kt)("p",null,"Promise methods can take multiple arguments and asynchronously return the value."),(0,a.kt)(r.Z,{groupId:"specs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JS",label:"JS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/NativeMyAwesomeModule.ts"',title:'"src/NativeMyAwesomeModule.ts"'},"import type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\n// ...\n\nexport interface Spec extends TurboModule {\n  myAwesomePromiseMethod(): Promise<boolean>\n  myAwesomePromiseMethodWithArguments(numArg: number, objArg: { firstObjProp: string, secondObjProp?: boolean }): Promise<boolean>\n}\n\n// TurboModuleRegistry uses NativeModules['MyAwesomeModule'] on old arch\nexport default TurboModuleRegistry.getEnforcing<Spec>('MyAwesomeModule');\n"))),(0,a.kt)(l.Z,{value:"iOS",label:"iOS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc",metastring:'title="ios/NativeMyAwesomeModule.mm"',title:'"ios/NativeMyAwesomeModule.mm"'},"RCT_EXPORT_METHOD(myAwesomePromiseMethod:(RCTPromiseResolveBlock) resolve\n                                  reject:(RCTPromiseRejectBlock) reject)\n{\n    // ...\n    resolve(@(YES));\n}\n\nRCT_EXPORT_METHOD(myAwesomePromiseMethodWithArguments:(NSNumber *) numArg \n                                               objArg:(NSDictionary *) objArg\n                                              resolve:(RCTPromiseResolveBlock) resolve\n                                               reject:(RCTPromiseRejectBlock) reject)\n{\n    // ...\n    resolve(@(YES));\n}\n"))),(0,a.kt)(l.Z,{value:"Android",label:"Android Spec",mdxType:"TabItem"},(0,a.kt)(r.Z,{groupId:"android_lang",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="android/src/main/newarch/NativeMyAwesomeModule.kt"',title:'"android/src/main/newarch/NativeMyAwesomeModule.kt"'},"import com.facebook.react.bridge.Promise\nimport com.facebook.react.bridge.ReactMethod\nimport com.facebook.react.bridge.ReadableMap\n\n// ...\n\n@ReactMethod\nfun myAwesomePromiseMethod(promise: Promise) {\n    // ...\n    promise.resolve(true)\n}\n\n@ReactMethod\nfun myAwesomePromiseMethodWithArguments(numArg: Double, objArg: ReadableMap, promise: Promise) {\n    // ...\n    promise.resolve(true)\n}\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="android/src/main/newarch/NativeMyAwesomeModule.java"',title:'"android/src/main/newarch/NativeMyAwesomeModule.java"'},"import com.facebook.react.bridge.Promise;\nimport com.facebook.react.bridge.ReactMethod;\nimport com.facebook.react.bridge.ReadableMap;\n\n// ...\n\n@ReactMethod\npublic void myAwesomePromiseMethod(Promise promise) {\n    // ...\n    promise.resolve(true);\n}\n\n@ReactMethod\npublic void myAwesomePromiseMethodWithArguments(double numArg, ReadableMap objArg, Promise promise) {\n    // ...\n    promise.resolve(true);\n}\n")))))),(0,a.kt)("h3",{id:"callback-method"},"Callback method"),(0,a.kt)("p",null,"Callback methods can take multiple arguments including callback arguments which are used to communicate from native to JS world. Callbacks should be put as last arguments in the method."),(0,a.kt)(r.Z,{groupId:"specs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JS",label:"JS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/NativeMyAwesomeModule.ts"',title:'"src/NativeMyAwesomeModule.ts"'},"import type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\n// ...\n\nexport interface Spec extends TurboModule {\n  myAwesomeCallbackMethod(myResultCallback: () => void): void\n  myAwesomeCallbackMethodWithArguments(numArg: number, objArg: { firstObjProp: string, secondObjProp?: boolean }, myResultCallback: () => void): void\n}\n\n// TurboModuleRegistry uses NativeModules['MyAwesomeModule'] on old arch\nexport default TurboModuleRegistry.getEnforcing<Spec>('MyAwesomeModule');\n"))),(0,a.kt)(l.Z,{value:"iOS",label:"iOS Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc",metastring:'title="ios/NativeMyAwesomeModule.mm"',title:'"ios/NativeMyAwesomeModule.mm"'},"RCT_EXPORT_METHOD(myAwesomeCallbackMethod:(RCTResponseSenderBlock) myResultCallback)\n{\n    // ...\n    myResultCallback(@[nil]);\n}\n\nRCT_EXPORT_METHOD(myAwesomeCallbackMethodWithArguments:(NSNumber *) numArg \n                                                objArg:(NSDictionary *) objArg\n                                      myResultCallback:(RCTResponseSenderBlock) myResultCallback)\n{\n    // ...\n    myResultCallback(@[nil]);\n}\n"))),(0,a.kt)(l.Z,{value:"Android",label:"Android Spec",mdxType:"TabItem"},(0,a.kt)(r.Z,{groupId:"android_lang",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="android/src/main/newarch/NativeMyAwesomeModule.kt"',title:'"android/src/main/newarch/NativeMyAwesomeModule.kt"'},"import com.facebook.react.bridge.Callback\nimport com.facebook.react.bridge.ReactMethod\nimport com.facebook.react.bridge.ReadableMap\n\n// ...\n\n@ReactMethod\nfun myAwesomeCallbackMethod(myResultCallback: Callback) {\n    // ...\n    callback.invoke(null)\n}\n\n@ReactMethod\nfun myAwesomeCallbackMethodWithArguments(numArg: Double, objArg: ReadableMap, myResultCallback: Callback) {\n    // ...\n    callback.invoke(null)\n}\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="android/src/main/newarch/NativeMyAwesomeModule.java"',title:'"android/src/main/newarch/NativeMyAwesomeModule.java"'},"import com.facebook.react.bridge.Callback;\nimport com.facebook.react.bridge.ReactMethod;\nimport com.facebook.react.bridge.ReadableMap;\n\n// ...\n\n@ReactMethod\npublic void myAwesomeCallbackMethod(Callback myResultCallback) {\n    // ...\n    callback.invoke(null);\n}\n\n@ReactMethod\npublic void myAwesomeCallbackMethodWithArguments(double numArg, ReadableMap objArg, Callback myResultCallback) {\n    // ...\n    callback.invoke(null);\n}\n")))))))}g.isMDXComponent=!0}}]);