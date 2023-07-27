"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[7633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2385:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(7462),a=(n(7294),n(3905));const i=n.p+"assets/images/screen-orientation-landscape-result-646f657b4425db15b3faa07bfe64c86e.png",o=n.p+"assets/images/screen-orientation-portrait-result-7052f4d31b41ef2a92afc882bd5c71a7.png",l={toc:[]},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{display:"flex",flexDirection:"column",alignSelf:"stretch",margin:20}},(0,a.kt)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}},(0,a.kt)("img",{src:o,alt:"Screen Orientation module portrait result",width:"30%",style:{display:"flex"}}),(0,a.kt)("img",{src:i,alt:"Screen Orientation module landscape result",width:"60%",style:{display:"flex"}}))))}c.isMDXComponent=!0},267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(2385);const o={sidebar_label:"Usage in practice",sidebar_position:6,title:"Usage in practice"},l=void 0,s={unversionedId:"guides/screen-orientation-module/usage",id:"guides/screen-orientation-module/usage",title:"Usage in practice",description:"Now that we have our module prepared, let's try to use it in practice!",source:"@site/docs/guides/screen-orientation-module/usage.mdx",sourceDirName:"guides/screen-orientation-module",slug:"/guides/screen-orientation-module/usage",permalink:"/rnbridgingtutorial/docs/guides/screen-orientation-module/usage",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/bridging-tutorial-website/docs/guides/screen-orientation-module/usage.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Usage in practice",sidebar_position:6,title:"Usage in practice"},sidebar:"tutorialSidebar",previous:{title:"Android implementation",permalink:"/rnbridgingtutorial/docs/guides/screen-orientation-module/android-impl"},next:{title:"Intro",permalink:"/rnbridgingtutorial/docs/guides/native-list-view/intro"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we have our module prepared, let's try to use it in practice!"),(0,a.kt)("p",null,"Prepare some screen where you can try screen orientation module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ScreenOrientationScreen.tsx"',title:'"ScreenOrientationScreen.tsx"'},"import type { FC } from 'react';\nimport { useEffect, useState } from 'react';\nimport { NativeEventEmitter, Platform, StyleSheet, Text, View } from 'react-native';\nimport { SafeAreaView } from 'react-native-safe-area-context';\nimport { ScreenOrientationModule } from 'screen-orientation-package';\n\nconst moduleEventEmitter = new NativeEventEmitter(Platform.OS === 'ios' ? ScreenOrientationModule : undefined);\n\nexport const ScreenOrientationScreen: FC = () => {\n  const [ screenOrientation, setScreenOrientation ] = useState<'portrait' | 'landscape' | 'unknown'>('unknown');\n\n  useEffect(() => {\n    const subscription = moduleEventEmitter.addListener('onScreenOrientationModuleChange', ({ orientation }: { orientation: 'portrait' | 'landscape' | 'unknown' }) => {\n      console.log({ orientation });\n      setScreenOrientation(orientation);\n    });\n\n    return () => {\n      subscription.remove();\n    };\n  }, []);\n\n  return (\n    <SafeAreaView style={styles.safeArea}>\n      <View style={styles.container}>\n        <Text style={styles.header}>Simple event module</Text>\n        <View style={styles.body}>\n          <Text style={styles.content}>Constants: {JSON.stringify(ScreenOrientationModule.getConstants())}</Text>\n          <Text style={styles.content}>Screen orientation: {screenOrientation}</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  body: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    flex: 1,\n    justifyContent: 'center',\n    paddingHorizontal: 20,\n  },\n  container: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  content: {\n    fontSize: 20,\n    fontWeight: '600',\n    paddingVertical: 20,\n  },\n  header: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    paddingVertical: 20,\n    textTransform: 'capitalize',\n  },\n  safeArea: {\n    alignSelf: 'stretch',\n    flex: 1,\n  },\n});\n")),(0,a.kt)(i.ZP,{mdxType:"Result"}),(0,a.kt)("p",null,"Congratulations!"),(0,a.kt)("p",null,"To see more event emitting modules, you may visit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zoontek/react-native-localize"},(0,a.kt)("inlineCode",{parentName:"a"},"react-native-localize"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/packages/react-native-avoid-softinput"},(0,a.kt)("inlineCode",{parentName:"a"},"react-native-avoid-softinput")))),(0,a.kt)("p",null,"To see more modules with exported constants, you may visit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/0443c2aa71d8dc0a59d72d94ff989a5924c40a4d/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/modules/systeminfo/AndroidInfoModule.java"},(0,a.kt)("inlineCode",{parentName:"a"},"Platform API (Android)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/0443c2aa71d8dc0a59d72d94ff989a5924c40a4d/packages/react-native/React/CoreModules/RCTPlatform.mm"},(0,a.kt)("inlineCode",{parentName:"a"},"Platform API (iOS)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zoontek/react-native-localize"},(0,a.kt)("inlineCode",{parentName:"a"},"react-native-localize")))))}m.isMDXComponent=!0}}]);