"use strict";(self.webpackChunkwww_gtalumni_la=self.webpackChunkwww_gtalumni_la||[]).push([[992],{"./src/components/atoms/Link/Link.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Link/Link.jsx"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Link } from './Link';\nimport { jsx as ___EmotionJSX } from \"@emotion/react\";\nexport default {\n  component: Link,\n  title: 'Components/Atoms/Link'\n};\nconst Template = args => ___EmotionJSX(Link, args);\nexport const Default = Template.bind({});\nDefault.args = {\n  href: '/',\n  children: 'Link'\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"args => <Link {...args} />\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:50,line:7},startBody:{col:17,line:7},endBody:{col:50,line:7}}}}},component:_Link__WEBPACK_IMPORTED_MODULE_1__.r,title:"Components/Atoms/Link"};var Default=function Template(args){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_1__.r,args)}.bind({});Default.args={href:"/",children:"Link"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Link {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/atoms/Link/Link.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_excluded=["as","children","href","legacyBehavior","passHref","prefetch","replace","scroll","shallow","locale"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var isInternalLink=function isInternalLink(href){return""===href||(!(null==href||!href.startsWith("/"))||!(null==href||!href.startsWith("#")))};function Link(_ref){_ref.as;var children=_ref.children,href=_ref.href,legacyBehavior=_ref.legacyBehavior,passHref=_ref.passHref,replace=(_ref.prefetch,_ref.replace),scroll=_ref.scroll,shallow=_ref.shallow,locale=_ref.locale,props=(0,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return isInternalLink(href)?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href,legacyBehavior,passHref,replace,scroll,shallow,locale},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",_extends({href},props),children)):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",_extends({href,target:"_blank",rel:"noopener noreferrer"},props),children)}Link.propTypes=_objectSpread(_objectSpread({},next_link__WEBPACK_IMPORTED_MODULE_1___default().propTypes),{},{children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node}),Link.defaultProps=_objectSpread(_objectSpread({},next_link__WEBPACK_IMPORTED_MODULE_1___default().defaultProps),{},{children:null})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})}}]);