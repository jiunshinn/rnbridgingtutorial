"use strict";(self.webpackChunkbridging_tutorial_website=self.webpackChunkbridging_tutorial_website||[]).push([[5093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7977:(e,n,t)=>{t.d(n,{ZP:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={toc:[]},o="wrapper";function l(e){let{components:n,...t}=e;return(0,i.kt)(o,(0,r.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can run codegen to generate native classes and interfaces, and also check if specification is defined in correct way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"on iOS: run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn codegen:ios"),", the code-generated classes should be available under your app's ",(0,i.kt)("inlineCode",{parentName:"p"},"<rootDir>/ios/build/generated/ios")," directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"on Android: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn codegen:android"),", the code-generated classes should be available under the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"<rootDir>/<packageDir>/android/build/generated/source/codegen")," directory"))))}l.isMDXComponent=!0},8205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),i=(t(7294),t(3905)),a=t(7977);const o={sidebar_label:"JS specification",sidebar_position:3,title:"JS specification"},l=void 0,s={unversionedId:"guides/range-slider-view/js-spec",id:"guides/range-slider-view/js-spec",title:"JS specification",description:"When all boilerplate is ready, let's navigate to src/RangeSliderViewNativeComponent.ts. To declare native component spec, let's paste following content:",source:"@site/docs/guides/range-slider-view/js-spec.mdx",sourceDirName:"guides/range-slider-view",slug:"/guides/range-slider-view/js-spec",permalink:"/rnbridgingtutorial/docs/guides/range-slider-view/js-spec",draft:!1,editUrl:"https://github.com/mateusz1913/rnbridgingtutorial/tree/main/bridging-tutorial-website/docs/guides/range-slider-view/js-spec.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"JS specification",sidebar_position:3,title:"JS specification"},sidebar:"tutorialSidebar",previous:{title:"View boilerplate",permalink:"/rnbridgingtutorial/docs/guides/range-slider-view/setup"},next:{title:"iOS implementation",permalink:"/rnbridgingtutorial/docs/guides/range-slider-view/ios-impl"}},p={},d=[],c={toc:d},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When all boilerplate is ready, let's navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"src/RangeSliderViewNativeComponent.ts"),". To declare native component spec, let's paste following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/RangeSliderViewNativeComponent.ts"',title:'"src/RangeSliderViewNativeComponent.ts"'},"import type * as React from 'react';\nimport type {\n  ColorValue,\n  HostComponent,\n  ViewProps,\n} from 'react-native';\nimport type { DirectEventHandler, Double, Int32 } from 'react-native/Libraries/Types/CodegenTypes';\nimport codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\nexport type OnRangeSliderViewEndDragEventData = Readonly<{ leftKnobValue: Double; rightKnobValue: Double }>;\nexport type OnRangeSliderViewValueChangeEventData = Readonly<{ leftKnobValue: Double; rightKnobValue: Double }>;\n\nexport interface RangeSliderViewProps extends ViewProps {\n  activeColor?: ColorValue;\n  inactiveColor?: ColorValue;\n  leftKnobValue: Double;\n  minValue?: Double;\n  maxValue?: Double;\n  onRangeSliderViewBeginDrag?: DirectEventHandler<null>;\n  onRangeSliderViewEndDrag?: DirectEventHandler<OnRangeSliderViewEndDragEventData>;\n  onRangeSliderViewValueChange?: DirectEventHandler<OnRangeSliderViewValueChangeEventData>;\n  rightKnobValue: Double;\n  step?: Int32;\n}\n\nexport type RangeSliderViewComponent = HostComponent<RangeSliderViewProps>;\n\nexport interface RangeSliderViewNativeCommands {\n  setLeftKnobValueProgrammatically: (viewRef: React.ElementRef<RangeSliderViewComponent>, value: Double) => void;\n  setRightKnobValueProgrammatically: (\n    viewRef: React.ElementRef<RangeSliderViewComponent>,\n    value: Double,\n  ) => void;\n}\n\nexport const RangeSliderViewCommands = codegenNativeCommands<RangeSliderViewNativeCommands>({\n  supportedCommands: [ 'setLeftKnobValueProgrammatically', 'setRightKnobValueProgrammatically' ],\n});\n\nexport default codegenNativeComponent<RangeSliderViewProps>('RangeSliderView') as RangeSliderViewComponent;\n")),(0,i.kt)("p",null,"This is quite large spec, so let's analyze it piece by piece."),(0,i.kt)("p",null,"First we create ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeSliderViewProps")," interface where all slider's props are declared, including event props with ",(0,i.kt)("inlineCode",{parentName:"p"},"DirectEventHandler<T>")," codegen type."),(0,i.kt)("p",null,"Next we create ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeSliderViewNativeCommands")," interface, where we declare imperative commands invoked on the native component.\nEach command takes reference to the native component as the first argument and commands can take multiple arguments.\nThat interface is then used to type the object created with ",(0,i.kt)("inlineCode",{parentName:"p"},"codegenNativeCommands")," function."),(0,i.kt)("p",null,"Finally, we export default native component made with ",(0,i.kt)("inlineCode",{parentName:"p"},"codegenNativeComponent")," function, where the ",(0,i.kt)("inlineCode",{parentName:"p"},"RangeSliderView")," is used as the name of the component."),(0,i.kt)(a.ZP,{mdxType:"CodegenSpec"}),(0,i.kt)("p",null,"After that, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"src/RangeSliderView.tsx")," and paste following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/RangeSliderView.tsx"',title:'"src/RangeSliderView.tsx"'},"import * as React from 'react';\n\nimport type { RangeSliderViewComponent } from './RangeSliderViewNativeComponent';\nimport RangeSliderViewNativeComponent, { RangeSliderViewCommands } from './RangeSliderViewNativeComponent';\n\ntype Props = React.ComponentProps<typeof RangeSliderViewNativeComponent>;\n\nexport class RangeSliderView extends React.Component<Props> {\n  private innerRef = React.createRef<React.ElementRef<RangeSliderViewComponent>>();\n\n  setLeftKnobValueProgrammatically = (value: number) => {\n    const ref = this.innerRef.current;\n\n    if (ref) {\n      RangeSliderViewCommands.setLeftKnobValueProgrammatically(ref, value);\n    }\n  };\n\n  setRightKnobValueProgrammatically = (value: number) => {\n    const ref = this.innerRef.current;\n\n    if (ref) {\n      RangeSliderViewCommands.setRightKnobValueProgrammatically(ref, value);\n    }\n  };\n\n  render() {\n    return <RangeSliderViewNativeComponent ref={this.innerRef} {...this.props} />;\n  }\n}\n")),(0,i.kt)("p",null,"Here we are forwarding all props to the native component, as well as we pass internal ref, which is used to internally handle component's commands."),(0,i.kt)("p",null,"After that, let's finalize JS part with exporting module from ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"export { RangeSliderView } from './RangeSliderView';\n")),(0,i.kt)("p",null,"JS part finished! Let's jump to ",(0,i.kt)("a",{parentName:"p",href:"./ios-impl"},"iOS implementation"),"."))}u.isMDXComponent=!0}}]);