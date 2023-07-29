"use strict";(self.webpackChunkwww_gtalumni_la=self.webpackChunkwww_gtalumni_la||[]).push([[973],{"./src/components/atoms/Map/Map.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Map/Map.jsx"),_emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Map } from './Map';\nimport { jsx as ___EmotionJSX } from \"@emotion/react\";\nexport default {\n  component: Map,\n  title: 'Components/Atoms/Map'\n};\nconst Template = args => ___EmotionJSX(Map, args);\nexport const Default = Template.bind({});\nDefault.args = {\n  title: 'My Map',\n  address: {\n    street: 'North Ave NW',\n    street2: 'Suite 300',\n    city: 'Atlanta',\n    state: 'GA',\n    zip: '30332'\n  },\n  width: '100%',\n  height: '100%'\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"args => <Map {...args} />\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:49,line:7},startBody:{col:17,line:7},endBody:{col:49,line:7}}}}},component:_Map__WEBPACK_IMPORTED_MODULE_1__.D,title:"Components/Atoms/Map"};var Default=function Template(args){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Map__WEBPACK_IMPORTED_MODULE_1__.D,args)}.bind({});Default.args={title:"My Map",address:{street:"North Ave NW",street2:"Suite 300",city:"Atlanta",state:"GA",zip:"30332"},width:"100%",height:"100%"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Map {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/atoms/Map/Map.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Map});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),polished__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_utils_address__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/address.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),process=__webpack_require__("./node_modules/process/browser.js");var Wrapper=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1ohumpb1"})("width:100%;min-height:320px;position:relative;overflow:hidden;border-radius:",(0,polished__WEBPACK_IMPORTED_MODULE_2__.hO)(8),";box-shadow:0 0 0 1px rgba(0, 0, 0, 0.1),0 2px 4px rgba(0, 0, 0, 0.1);"),IFrame=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("iframe",{target:"e1ohumpb0"})({name:"dojaon",styles:"width:100%;height:100%;border:0;display:block;position:absolute;top:0;left:0;right:0;bottom:0"});function Map(_ref){var address=_ref.address,name=_ref.name,width=_ref.width,height=_ref.height,className=_ref.className,encodedAddress=(0,_utils_address__WEBPACK_IMPORTED_MODULE_1__.y4)(address,name),mapUrl="https://www.google.com/maps/embed/v1/place?key=".concat(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,"&q=").concat(encodedAddress),mapWidth=width,mapHeight=height;return"number"==typeof width&&(mapWidth="".concat(width,"px")),"number"==typeof height&&(mapHeight="".concat(height,"px")),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Wrapper,{"data-testid":"map",className},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(IFrame,{title:"Map of ".concat(name),src:mapUrl,width:mapWidth,height:mapHeight,frameBorder:"0",style:{border:0},allowFullScreen:!0,"aria-hidden":"false",tabIndex:0}))}Map.propTypes={address:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({street:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,street2:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,city:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,state:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,zip:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired}).isRequired,name:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,width:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().number]),height:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().number]),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},Map.defaultProps={width:"100%",height:"100%",className:null}},"./src/utils/address.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{js:()=>getLocationString,y4:()=>getEncodedAddress});var getEncodedAddress=function getEncodedAddress(address){var name=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",street=address.street,street2=address.street2,city=address.city,state=address.state,zip=address.zip,str="".concat(street);return street2&&(str="".concat(street," ").concat(street2)),str="".concat(str,", ").concat(city,", ").concat(state," ").concat(zip),name&&(str="".concat(name," ").concat(str)),str.replaceAll(" ","+")},getLocationString=function getLocationString(title){var address=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},street=address.street,street2=address.street2,city=address.city,state=address.state,zip=address.zip,str="".concat(title," ").concat(street);return street2&&(str="".concat(str," ").concat(street2)),str="".concat(str,", ").concat(city,", ").concat(state," ").concat(zip)}},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})}}]);