"use strict";(self.webpackChunkwww_gtalumni_la=self.webpackChunkwww_gtalumni_la||[]).push([[905],{"./src/components/atoms/Image/Image.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Image_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");var imageCss={name:"1ymsplr",styles:"max-width:100%;height:auto;margin:0"},figureCss={name:"5n6y18",styles:"margin:0;width:100%;height:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;margin-bottom:1.666rem"},captionCss={name:"g204ef",styles:"margin-top:0.5rem;font-size:0.875rem;font-weight:500;color:var(--text-color-muted);font-style:italic"};function Image(_ref){var src=_ref.src,alt=_ref.alt,title=_ref.title,className=_ref.className;return(0,emotion_react_browser_esm.jsx)("figure",{css:figureCss,className},(0,emotion_react_browser_esm.jsx)("img",{src,alt,"data-testid":"image",css:imageCss,title}),title&&(0,emotion_react_browser_esm.jsx)("figcaption",{css:captionCss},title))}Image.propTypes={src:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().shape({})]).isRequired,alt:prop_types_default().string,title:prop_types_default().string,className:prop_types_default().string},Image.defaultProps={alt:"",title:"",className:""};var _Default$parameters,_Default$parameters2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Image_stories={parameters:{storySource:{source:"import { Image } from './Image';\nimport { jsx as ___EmotionJSX } from \"@emotion/react\";\nexport default {\n  component: Image,\n  title: 'Components/Atoms/Image'\n};\nconst Template = args => ___EmotionJSX(Image, args);\nexport const Default = Template.bind({});\nDefault.args = {\n  alt: 'Image alt text',\n  src: 'https://picsum.photos/200/300',\n  title: 'Image title'\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"args => <Image {...args} />\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{default:{startLoc:{col:17,line:7},endLoc:{col:51,line:7},startBody:{col:17,line:7},endBody:{col:51,line:7}}}}},component:Image,title:"Components/Atoms/Image"};var Default=function Template(args){return(0,emotion_react_browser_esm.jsx)(Image,args)}.bind({});Default.args={alt:"Image alt text",src:"https://picsum.photos/200/300",title:"Image title"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Image {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})}}]);