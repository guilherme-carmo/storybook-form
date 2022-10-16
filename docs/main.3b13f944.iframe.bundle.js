(self.webpackChunkreact_design_system=self.webpackChunkreact_design_system||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},decorators:function(){return decorators},parameters:function(){return parameters}});var _templateObject,ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),taggedTemplateLiteral=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./src/constants/index.ts"),GlobalStyle=(0,styled_components_browser_esm.vJ)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n    font-family: 'Inter', sans-serif;\n    font-weight: 400;\n  }\n\n  body {\n    background-color: ",";\n  }\n"])),constants.$.background.main),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators=[function(Story){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)(Story,{})]})}],__namedExportsOrder=["parameters","decorators"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/button/stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return stories}});var _templateObject,_templateObject2,_templateObject3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./src/constants/index.ts"),buttonVariant={primary:(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n  color: ",";\n\n  &:focus {\n    outline: 1px solid ",";\n  }\n"])),constants.$.background.primary,constants.$.content.main,constants.$.background.contrast),secondary:(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n  color: ",";\n\n  &:focus {\n    outline: 1px solid ",";\n  }\n"])),constants.$.background.secondary,constants.$.content.contrast,constants.$.background.contrast)},Main=styled_components_browser_esm.ZP.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  ","\n  width: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  padding: 8px 88px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"])),(function(_ref){var variant=_ref.variant;return buttonVariant[variant]}),(function(_ref2){return _ref2.full?"100%":"unset"})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","full","children"];function Button(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,_ref$full=_ref.full,full=void 0!==_ref$full&&_ref$full,children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(Main,(0,objectSpread2.Z)((0,objectSpread2.Z)({variant:variant,full:full},rest),{},{children:children}))}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var stories={title:"Button",component:Button,args:{children:"Lorem Ipsum"}},Default=function Default(args){return(0,jsx_runtime.jsx)(Button,(0,objectSpread2.Z)({},args))}},"./src/components/checkbox/stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return stories}});var _templateObject,_templateObject2,_templateObject3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./src/constants/index.ts"),Check=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  opacity: 0;\n"]))),Checkbox=styled_components_browser_esm.ZP.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 1px solid ",";\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  &:hover "," {\n    opacity: 0.2;\n  }\n"])),constants.$.content.regular,constants.$.background.regular,constants.$.content.main,Check),HiddenCheckbox=styled_components_browser_esm.ZP.input(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: none;\n\n  &:checked + "," {\n    "," {\n      opacity: 1;\n    }\n  }\n"])),Checkbox,Check),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function checkbox_Checkbox(_ref){var rest=Object.assign({},((0,objectDestructuringEmpty.Z)(_ref),_ref)),toggleCheckboxRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(HiddenCheckbox,(0,objectSpread2.Z)({type:"checkbox",ref:toggleCheckboxRef,hidden:!0},rest)),(0,jsx_runtime.jsx)(Checkbox,{onClick:function toggleCheckbox(){var current=toggleCheckboxRef.current;current&&current.click()},children:(0,jsx_runtime.jsx)(Check,{children:(0,jsx_runtime.jsx)(index_esm.HhX,{size:24})})})]})}try{checkbox_Checkbox.displayName="Checkbox",checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/checkbox/index.tsx#Checkbox"]={docgenInfo:checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}var stories={title:"Checkbox",component:checkbox_Checkbox},Default=function Default(args){return(0,jsx_runtime.jsx)(checkbox_Checkbox,{})}},"./src/components/heading/stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontSize={small:"24px",medium:"28px",large:"32px"},fontWeight={light:"400",regular:"600",bold:"700"},Main=styled_components_browser_esm.ZP.h2(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(_ref){var size=_ref.size;return fontSize[size]}),(function(_ref2){var weight=_ref2.weight;return fontWeight[weight]})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","weight","children"];function Heading(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"light":_ref$weight,children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(Main,(0,objectSpread2.Z)((0,objectSpread2.Z)({size:size,weight:weight},rest),{},{children:children}))}try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},weight:{defaultValue:{value:"light"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"regular"'},{value:'"bold"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}var stories={title:"Heading",component:Heading,args:{children:"Lorem Ipsum"}},Default=function Default(args){return(0,jsx_runtime.jsx)(Heading,(0,objectSpread2.Z)({},args))}},"./src/components/input/stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithIcon:function(){return WithIcon},default:function(){return stories}});var _templateObject,_templateObject2,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),index_esm=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./src/constants/index.ts"),Wrapper=styled_components_browser_esm.ZP.label(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  height: 48px;\n  border-radius: 8px;\n  gap: 8px;\n  width: 100%;\n  background-color: ",";\n\n  &:focus-within {\n    outline: 1px solid ",";\n  }\n"])),constants.$.background.regular,constants.$.content.regular),Main=styled_components_browser_esm.ZP.input(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  flex: 1;\n  border: none;\n  outline: none;\n  color: ",";\n  background-color: transparent;\n\n  &::placeholder {\n    color: ",";\n  }\n"])),constants.$.content.main,constants.$.content.regular),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InputWrapper(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(Wrapper,{children:children})}function InputInput(_ref2){var rest=Object.assign({},((0,objectDestructuringEmpty.Z)(_ref2),_ref2));return(0,jsx_runtime.jsx)(Main,(0,objectSpread2.Z)({},rest))}InputWrapper.displayName="Input.Wrapper",InputInput.displayName="Input.Input";var Input={Wrapper:InputWrapper,Input:InputInput},stories={title:"Input",component:Input.Wrapper,args:{placeholder:"Input placeholder"}},Default=function Default(args){return(0,jsx_runtime.jsx)(Input.Wrapper,{children:(0,jsx_runtime.jsx)(Input.Input,(0,objectSpread2.Z)({},args))})},WithIcon=function WithIcon(args){return(0,jsx_runtime.jsxs)(Input.Wrapper,{children:[(0,jsx_runtime.jsx)(index_esm.Kzx,{size:24}),(0,jsx_runtime.jsx)(Input.Input,(0,objectSpread2.Z)({},args))]})}},"./src/components/text/stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontSize={small:"14px",medium:"16px",large:"18px"},fontWeight={light:"400",regular:"600",bold:"700"},Main=styled_components_browser_esm.ZP.p(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(_ref){var size=_ref.size;return fontSize[size]}),(function(_ref2){var weight=_ref2.weight;return fontWeight[weight]})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","weight","children"];function Text(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"light":_ref$weight,children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(Main,(0,objectSpread2.Z)((0,objectSpread2.Z)({size:size,weight:weight},rest),{},{children:children}))}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},weight:{defaultValue:{value:"light"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"regular"'},{value:'"bold"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var stories={title:"Text",component:Text,args:{children:"Lorem Ipsum"}},Default=function Default(args){return(0,jsx_runtime.jsx)(Text,(0,objectSpread2.Z)({},args))}},"./src/constants/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return color}});var color={background:{main:"#E7E7E7",regular:"#FFFFFF",contrast:"#000000",primary:"#61DAFB",secondary:"#464646"},content:{main:"#000000",regular:"#6D6D6D",contrast:"#FFFFFF"}}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/button/stories.tsx":"./src/components/button/stories.tsx","./components/checkbox/stories.tsx":"./src/components/checkbox/stories.tsx","./components/heading/stories.tsx":"./src/components/heading/stories.tsx","./components/input/stories.tsx":"./src/components/input/stories.tsx","./components/text/stories.tsx":"./src/components/text/stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)stories\\.(js%7Cjsx%7Cts%7Ctsx))$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[648],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);