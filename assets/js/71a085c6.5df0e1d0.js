"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[1146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},304:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(7462),a=(n(7294),n(3905));const i=n.p+"assets/images/appinfo-result-e3bc94da23b488270e8f02ebf154dcd8.png",o={toc:[]},l="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{display:"flex",flexDirection:"column",alignSelf:"stretch",margin:20}},(0,a.kt)("img",{src:i,alt:"AppInfo module in action",width:"50%",style:{display:"flex",alignSelf:"center"}})))}p.isMDXComponent=!0},793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(304);const o={sidebar_label:"Usage in practice",sidebar_position:6,title:"Usage in practice"},l=void 0,p={unversionedId:"guides/app-info-module/usage",id:"guides/app-info-module/usage",title:"Usage in practice",description:"Now that we have our module prepared, let's try to use it in practice!",source:"@site/docs/guides/app-info-module/usage.mdx",sourceDirName:"guides/app-info-module",slug:"/guides/app-info-module/usage",permalink:"/rnbridgingtutorial/docs/guides/app-info-module/usage",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/bridging-tutorial-website/docs/guides/app-info-module/usage.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Usage in practice",sidebar_position:6,title:"Usage in practice"},sidebar:"tutorialSidebar",previous:{title:"Android implementation",permalink:"/rnbridgingtutorial/docs/guides/app-info-module/android-impl"},next:{title:"Intro",permalink:"/rnbridgingtutorial/docs/guides/conic-gradient-view/intro"}},s={},u=[],c={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we have our module prepared, let's try to use it in practice!"),(0,a.kt)("p",null,"Prepare some screen where you can try AppInfo module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="AppInfoScreen.tsx"',title:'"AppInfoScreen.tsx"'},"import { AppInfoModule } from 'app-info-package';\nimport type { FC } from 'react';\nimport { useState } from 'react';\nimport { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';\n\nexport const AppInfoScreen: FC = () => {\n  const [ appBuildNumber, setAppBuildNumber ] = useState<string | null>(null);\n  const [ appBundleId, setAppBundleId ] = useState<string | null>(null);\n  const [ appVersion, setAppVersion ] = useState<string | null>(null);\n  const getAppBuildNumber = () => {\n    setAppBuildNumber(AppInfoModule.getAppBuildNumber());\n  };\n\n  const getAppBundleId = () => {\n    setAppBundleId(AppInfoModule.getAppBundleId());\n  };\n\n  const getAppVersion = () => {\n    setAppVersion(AppInfoModule.getAppVersion());\n  };\n\n  return (\n    <SafeAreaView style={styles.safeArea}>\n      <View style={styles.container}>\n        <Text style={styles.header}>App Info module</Text>\n        <View style={styles.body}>\n          <View style={styles.buttonWrapper}>\n            <Button onPress={getAppBuildNumber} title=\"Check build number\" />\n            <Text style={styles.value}>{appBuildNumber}</Text>\n          </View>\n          <View style={styles.buttonWrapper}>\n            <Button onPress={getAppBundleId} title=\"Check bundle id\" />\n            <Text style={styles.value}>{appBundleId}</Text>\n          </View>\n          <View style={styles.buttonWrapper}>\n            <Button onPress={getAppVersion} title=\"Check app version\" />\n            <Text style={styles.value}>{appVersion}</Text>\n          </View>\n        </View>\n      </View>\n    </SafeAreaView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  body: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    flex: 1,\n    justifyContent: 'center',\n    paddingHorizontal: 20,\n  },\n  buttonWrapper: {\n    alignSelf: 'stretch',\n    paddingVertical: 30,\n  },\n  container: {\n    alignItems: 'center',\n    alignSelf: 'stretch',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  header: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    paddingVertical: 20,\n    textTransform: 'capitalize',\n  },\n  safeArea: {\n    alignSelf: 'stretch',\n    flex: 1,\n  },\n  value: {\n    fontSize: 16,\n    padding: 8,\n  },\n});\n")),(0,a.kt)(i.ZP,{mdxType:"Result"}),(0,a.kt)("p",null,"Congratulations, you've created fully functional AppInfo module!"),(0,a.kt)("p",null,"To see more examples of sync methods, you may visit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/bcec590071202608ee2e87feb02791e292457d94/ReactAndroid/src/main/java/com/facebook/react/modules/appearance/AppearanceModule.java"},"Appearance API (Android)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/bcec590071202608ee2e87feb02791e292457d94/React/CoreModules/RCTAppearance.mm"},"Appearance API (iOS)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/LinusU/react-native-get-random-values"},"react-native-get-random-values"))))}f.isMDXComponent=!0}}]);