"use strict";(self.webpackChunkwww_gtalumni_la=self.webpackChunkwww_gtalumni_la||[]).push([[213],{"./src/components/molecules/BreadCrumbs/BreadCrumbs.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/molecules/BreadCrumbs/BreadCrumbs.jsx")),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\nimport { BreadCrumbs } from './BreadCrumbs';\nimport { jsx as ___EmotionJSX } from \"@emotion/react\";\nexport default {\n  component: BreadCrumbs,\n  title: 'Components/Molecules/BreadCrumbs'\n};\nconst Template = args => ___EmotionJSX(BreadCrumbs, args);\nexport const Default = Template.bind({});\nDefault.args = {\n  location: {\n    asPath: '/example/storybook/path',\n    search: '?example=query'\n  },\n  labels: {\n    path: 'Current Page'\n  }\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"args => <BreadCrumbs {...args} />\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:57,line:8},startBody:{col:17,line:8},endBody:{col:57,line:8}}}}},component:_BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__.b,title:"Components/Molecules/BreadCrumbs"};var Default=function Template(args){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__.b,args)}.bind({});Default.args={location:{asPath:"/example/storybook/path",search:"?example=query"},labels:{path:"Current Page"}},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <BreadCrumbs {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/molecules/BreadCrumbs/BreadCrumbs.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>BreadCrumbs});var prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),next_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");var listCss={name:"w4p3ta",styles:"display:flex;align-content:center;align-items:center;margin:0;padding:0;list-style:none;flex-wrap:wrap"},listItemCss=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)("margin:0;font-size:",(0,polished__WEBPACK_IMPORTED_MODULE_3__.hO)("14px"),";font-weight:500;","",""),crumbCss={name:"1b5xgjn",styles:"color:var(--gt-color-dark-gray);transition:all 0.2s ease-in-out;&:hover{color:var(--gt-color-dark-gold);}"},iconCss={name:"1hgqd68",styles:"margin:0 0.25rem;color:var(--gt-color-gold)"},toTitleCase=function toTitleCase(str){return str.split("-").map((function(word){return word.charAt(0).toUpperCase()+word.slice(1)})).join(" ")};function BreadCrumbs(_ref){var labels=_ref.labels,location=_ref.location,className=_ref.className,segments=location.asPath.split("/").filter(Boolean);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav",{"data-testid":"breadcrumbs",className},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{css:listCss},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{css:listItemCss},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_0___default(),{href:"/",passHref:!0},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{css:crumbCss,href:"/"},"Home"))),segments.map((function(segment,index){if(index===segments.length-1)return null;var label=labels&&labels[segment]||toTitleCase(segment),path="/".concat(segments.slice(0,index+1).join("/"));return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{key:path,css:listItemCss},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.G,{css:iconCss,icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__._tD}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_0___default(),{href:path,passHref:!0},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{css:crumbCss,href:path},label)))}))))}BreadCrumbs.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,location:prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({asPath:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,search:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,isReady:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool}),labels:prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({})},BreadCrumbs.defaultProps={className:null,location:{asPath:"",search:"",isReady:!1},labels:{}}}}]);