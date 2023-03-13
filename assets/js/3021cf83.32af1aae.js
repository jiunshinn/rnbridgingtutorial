"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[2538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Getting Started",sidebar_position:2,title:"Welcome to Bridging Tutorial"},r=void 0,l={unversionedId:"getting-started",id:"getting-started",title:"Welcome to Bridging Tutorial",description:"You'll learn here, how to bring (almost) any native functionality to the React Native app.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/rnbridgingtutorial/docs/getting-started",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Getting Started",sidebar_position:2,title:"Welcome to Bridging Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/rnbridgingtutorial/docs/motivation"},next:{title:"Introduction",permalink:"/rnbridgingtutorial/docs/guides/guides-intro"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"1. Environment setup",id:"1-environment-setup",level:3},{value:"2. Create test project",id:"2-create-test-project",level:3},{value:"3. RECOMMENDED Migrate to Yarn 3",id:"3-recommended-migrate-to-yarn-3",level:3},{value:"4. Module resolver plugin",id:"4-module-resolver-plugin",level:3},{value:"5. Add following scripts to app&#39;s <code>package.json</code>",id:"5-add-following-scripts-to-apps-packagejson",level:3},{value:"6. Switch the app to &quot;New Architecture&quot;",id:"6-switch-the-app-to-new-architecture",level:3},{value:"7. OPTIONAL Navigation setup",id:"7-optional-navigation-setup",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You'll learn here, how to bring (almost) any native functionality to the React Native app.\nThis set of guides will showcase possible types of native modules and views,\nhow to structure packages with native code,\nhow to use Android & iOS dependencies to bring the same native experience from non-cross-platform Android & iOS apps and many many more."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev"},"Expo")," enjoyer and you want to write native code in Expo project, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/modules/overview"},"Expo Modules")," is the way to go.\nHowever, you can still check following guides to learn some RN + native insights which will give you better overview and you'll appreciate Expo & Expo Modules even more!")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Most of the code you'll see here is written in one of native languages used for iOS or Android development.\nIf you don't know the basics (primitive types, classes, interfaces, methods, etc.), it's not mandatory, but still recommended to (at least) read some introduction to the following langs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Objective-C (ancient language in iOS development, but it's still useful to know the basics)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html"},"Programming with Objective-C (Apple's docs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/ios-objective-creation/lesson-1-introduction-to-objective-c-programming-22f5fe71172"},"Introduction to Objective-C programming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/ios-objective-creation/17f760ce9732"},"Creating Custom Classes in Objective-C")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/ios-objective-creation/8cc994645d81"},"Expanded Class Creation and More About Properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/compile_objective-c_online.php"},"Playground - Online Objective-C Compiler")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Swift (in iOS world it's the present and the future)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language"},"Swift Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.hackingwithswift.com/100"},"Hacking with Swift - 100 Days of Swift - Days 1-12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://swiftfiddle.com/"},"Playground - SwiftFiddle")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kotlin (modern and powerful, recommended for Android development)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/getting-started.html"},"Kotlin Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/courses/pathways/android-basics-kotlin-one"},"Android Basics in Kotlin - Intro to Kotlin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/kotlinplayground"},"Playground")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Java (many libraries and applications still use it, you may also encountered it at your computer science classes)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/java/"},"Java Tutorial W3Schools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/online_java_compiler.php"},"Playground - Online Java Compiler"))))),(0,i.kt)("p",null,"You should also familiarize yourself with ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode/"},"XCode")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio")," as the main IDEs for mobile native development."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"To start the tutorial, you need a sample app created with React Native CLI, React Native version >= 0.71.x and yarn v3"),(0,i.kt)("h3",{id:"1-environment-setup"},"1. Environment setup"),(0,i.kt)("p",null,"Make sure you have correct ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"environment setup")," on your development machine."),(0,i.kt)("h3",{id:"2-create-test-project"},"2. Create test project"),(0,i.kt)("p",null,"To bootstrap the project run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native init sample-app\n")),(0,i.kt)("h3",{id:"3-recommended-migrate-to-yarn-3"},"3. ","[RECOMMENDED]"," Migrate to Yarn 3"),(0,i.kt)("p",null,"After project creation, follow ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/migration"},"Yarn migration")," to version 3 (choose ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeLinker: node-modules")," option) and at the end, run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," to reinstall packages"),(0,i.kt)("h3",{id:"4-module-resolver-plugin"},"4. Module resolver plugin"),(0,i.kt)("p",null,"Install and configure ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-plugin-module-resolver"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D babel-plugin-module-resolver\n")),(0,i.kt)("p",null,"This will enable you to map imports to specified directories with nice aliases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [ 'module:metro-react-native-babel-preset' ],\n+ plugins: [\n+   [\n+     'module-resolver',\n+     {\n+       root: [ './' ],\n+       extensions: [\n+         '.ios.js',\n+         '.ios.ts',\n+         '.ios.tsx',\n+         '.android.js',\n+         '.android.ts',\n+         '.android.tsx',\n+         '.js',\n+         '.ts',\n+         '.tsx',\n+         '.json',\n+       ],\n+     },\n+   ],\n+ ],\n};\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"JS Snippets in this tutorial, will use React 18 JSX transform; if you want to use it, add following configuration to ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [ 'module:metro-react-native-babel-preset' ],\n  plugins: [\n    [\n      'module-resolver',\n      {\n        root: [ './' ],\n        extensions: [\n          '.ios.js',\n          '.ios.ts',\n          '.ios.tsx',\n          '.android.js',\n          '.android.ts',\n          '.android.tsx',\n          '.js',\n          '.ts',\n          '.tsx',\n          '.json',\n        ],\n      },\n    ],\n+   [\n+     '@babel/plugin-transform-react-jsx',\n+     {\n+       runtime: 'automatic',\n+     },\n+   ],\n  ],\n};\n"))),(0,i.kt)("h3",{id:"5-add-following-scripts-to-apps-packagejson"},"5. Add following scripts to app's ",(0,i.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "rnbridgingtutorial",\n  "version": "0.0.1",\n  "private": true,\n  "scripts": {\n-   "android": "react-native run-android",\n+   "android": "react-native run-android --active-arch-only",\n    "ios": "react-native run-ios",\n    "start": "react-native start",\n    "test": "jest",\n    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",\n+   "codegen:android": "./android/gradlew -p android generateArtifactsFromSchema",\n+   "codegen:ios": "node node_modules/react-native/scripts/generate-codegen-artifacts.js --path . --outputPath ./ios"\n  },\n}\n')),(0,i.kt)("p",null,"First change to ",(0,i.kt)("inlineCode",{parentName:"p"},'"android"')," command is decreasing build times on Android - it will only build for CPU architecture of the connected device/emulator that you will use for the development."),(0,i.kt)("p",null,"Those other commands - ",(0,i.kt)("inlineCode",{parentName:"p"},'"codegen:android"')," & ",(0,i.kt)("inlineCode",{parentName:"p"},'"codegen:ios"')," - are commands that invoke React Native Codegen and generate specification for your native code."),(0,i.kt)("h3",{id:"6-switch-the-app-to-new-architecture"},"6. Switch the app to ",(0,i.kt)("a",{parentName:"h3",href:"https://reactnative.dev/docs/the-new-architecture/landing-page"},'"New Architecture"')),(0,i.kt)("p",null,"\"New Architecture\" is the future and that's why it will be used throughout this tutorial. Guides will showcase how to write the code that supports both old and new arch. However, because new arch setups are more complex, you'll benefit from testing the native code you wrote with TurboModules and Fabric and the backward compatibility layer will make it just work on the old architecture."),(0,i.kt)("p",null,'To enable "New Architecture" on Android:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"go to ",(0,i.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," in your IDE"),(0,i.kt)("li",{parentName:"ul"},"locate ",(0,i.kt)("inlineCode",{parentName:"li"},"newArchEnabled")," variable and set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"./android/gradlew -p android clean")," from your app's root directory - this will invoke clean Gradle task on your Android project")),(0,i.kt)("p",null,'To enable "New Architecture" on iOS:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"go to ",(0,i.kt)("inlineCode",{parentName:"li"},"ios/Podfile")," in your IDE"),(0,i.kt)("li",{parentName:"ul"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"ENV['RCT_NEW_ARCH_ENABLED'] = \"1\"")," after ",(0,i.kt)("inlineCode",{parentName:"li"},"require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'")," - this will set the ",(0,i.kt)("inlineCode",{parentName:"li"},"RCT_NEW_ARCH_ENABLED")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," on each ",(0,i.kt)("inlineCode",{parentName:"li"},"pod install")," run, so you'll not need to set that env before running installing the Pods"),(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"npx pod-install"),' to install "New Architecture" Pods')),(0,i.kt)("h3",{id:"7-optional-navigation-setup"},"7. ","[OPTIONAL]"," Navigation setup"),(0,i.kt)("p",null,'If you want to use the same app for different guides, you\'ll likely need some navigation to navigate between them - use the navigation library of your choice, just make sure it supports "New Architecture"'))}c.isMDXComponent=!0}}]);