"use strict";(self.webpackChunkwww_gtalumni_la=self.webpackChunkwww_gtalumni_la||[]).push([[9667],{"./src/components/organisms/EventForm/EventForm.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>EventForm_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),yup=__webpack_require__("./node_modules/@hookform/resolvers/yup/dist/yup.mjs"),yup_index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),Input_Input=__webpack_require__("./src/components/molecules/Input/Input.jsx");var TextArea_TextArea=__webpack_require__("./src/components/molecules/TextArea/TextArea.jsx");var Button=__webpack_require__("./src/components/atoms/Button/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var schema=yup_index_esm.Ry({title:yup_index_esm.Z_().required("Please enter a title for the event."),startDate:yup_index_esm.hT().typeError("Please enter a valid start date and time for the event. (PST)").required("Please enter a start date for the event.").min(new Date,"Please enter a future start date event."),endDate:yup_index_esm.hT("Please enter a valid end date and time for the event. (PST)").typeError("Please enter a valid end date and time for the event. (PST)").nullable().min(yup_index_esm.iH("startDate"),"Please enter an end date after the start date."),link:yup_index_esm.Ry({url:yup_index_esm.Z_().url("Please enter a valid url for the link"),label:yup_index_esm.Z_().when("url",{is:function is(val){return!!val},then:function then(field){return field.required("Please enter a label for the link URL.")}})}),location:yup_index_esm.Ry({name:yup_index_esm.Z_().when(["url","address.street","address.city","address.state","address.zip"],{is:function is(){for(var _len=arguments.length,vals=new Array(_len),_key=0;_key<_len;_key++)vals[_key]=arguments[_key];return vals.some((function(val){return!!val}))},then:function then(field){return field.required("Please enter a name for the location.")}}),url:yup_index_esm.Z_().url("Please enter a valid URL."),address:yup_index_esm.Ry({street:yup_index_esm.Z_(),city:yup_index_esm.Z_().when("street",{is:function is(val){return!!val},then:function then(field){return field.required("Please enter a city for the location.")}}),state:yup_index_esm.Z_().when(["street","city"],{is:function is(){for(var _len2=arguments.length,vals=new Array(_len2),_key2=0;_key2<_len2;_key2++)vals[_key2]=arguments[_key2];return vals.some((function(val){return!!val}))},then:function then(field){return field.required("Please enter a state for the location.")}}),zip:yup_index_esm.Z_()})}),description:yup_index_esm.Z_().required("Please enter a description for the event."),details:yup_index_esm.Z_().max(801,"Please enter a description that is no more than 800 characters."),contact:yup_index_esm.Ry({name:yup_index_esm.Z_().required("Please enter a name for the contact."),email:yup_index_esm.Z_().email("Please enter a valid email address.").required("Please enter an email address for the contact.")})}),Fieldset=(0,emotion_styled_base_browser_esm.Z)("fieldset",{target:"ezpjbnx0"})({name:"1c5k4yb",styles:"border:none;padding:1rem 0;border-top:thin solid var(--gt-color-medium-gray);&:first-of-type{border-top:none;}"}),LinkInfo="An optional link to display as a button on the event page. If a link is provided, a label is required. Some examples might be a registration page, or a link to a live stream.",LinkLabelInfo="The label for the link to be displayed on the Event Page. ".concat(LinkInfo),LinkUrlInfo="The URL for the link to be displayed on the Event Page. ".concat(LinkInfo);function EventForm(_ref){var _errors$title,_errors$title2,_errors$startDate,_errors$startDate2,_errors$endDate,_errors$endDate2,_errors$description,_errors$description2,_errors$link,_errors$link2,_errors$link3,_errors$link4,_errors$location,_errors$location2,_errors$location3,_errors$location4,_errors$location5,_errors$location6,_errors$location7,_errors$location8,_errors$location9,_errors$location10,_errors$location11,_errors$location12,_errors$details,_errors$details2,_errors$contact,_errors$contact2,_errors$contact3,_errors$contact4,onSubmit=_ref.onSubmit,values=_ref.values,_useForm=(0,index_esm.cI)({defaultValues:values,resolver:(0,yup.X)(schema),mode:"onBlur"}),register=_useForm.register,handleSubmit=_useForm.handleSubmit,_useForm$formState=_useForm.formState,errors=_useForm$formState.errors,isSubmitting=_useForm$formState.isSubmitting,isSubmitDisabled=!_useForm$formState.isDirty||isSubmitting,isFormDisabled=isSubmitting;return(0,emotion_react_browser_esm.jsx)("div",null,(0,emotion_react_browser_esm.jsx)("h1",null,"Event Form"),(0,emotion_react_browser_esm.jsx)("form",{onSubmit:handleSubmit((function(val){return onSubmit(val)})),name:"eventForm","aria-label":"Submit a new Event"},(0,emotion_react_browser_esm.jsx)(Fieldset,null,(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Title"},register("title"),{id:"title",error:!(null==errors||null===(_errors$title=errors.title)||void 0===_errors$title||!_errors$title.message),message:null==errors||null===(_errors$title2=errors.title)||void 0===_errors$title2?void 0:_errors$title2.message,popup:'An title for the event such as "Game Watching - GT vs UVA" or "Happy Hour"',disabled:isFormDisabled})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Start Date"},register("startDate"),{type:"datetime-local",disabled:isFormDisabled,id:"startDate",error:!(null==errors||null===(_errors$startDate=errors.startDate)||void 0===_errors$startDate||!_errors$startDate.message),message:null==errors||null===(_errors$startDate2=errors.startDate)||void 0===_errors$startDate2?void 0:_errors$startDate2.message,popup:"The start date and time of the event. All times are in PST."})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"End Date"},register("endDate"),{type:"datetime-local",disabled:isFormDisabled,id:"endDate",error:!(null==errors||null===(_errors$endDate=errors.endDate)||void 0===_errors$endDate||!_errors$endDate.message),message:null==errors||null===(_errors$endDate2=errors.endDate)||void 0===_errors$endDate2?void 0:_errors$endDate2.message,popup:"The end date and time of the event. All times are in PST."})),(0,emotion_react_browser_esm.jsx)(TextArea_TextArea.K,_extends({label:"Description"},register("description"),{disabled:isFormDisabled,id:"description",error:!(null==errors||null===(_errors$description=errors.description)||void 0===_errors$description||!_errors$description.message),message:null==errors||null===(_errors$description2=errors.description)||void 0===_errors$description2?void 0:_errors$description2.message,max:250,popup:"A short description of the event. This will be displayed on the event card, and any social media posts."}))),(0,emotion_react_browser_esm.jsx)(Fieldset,null,(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Link Label"},register("link.label"),{disabled:isFormDisabled,id:"link-label",error:!(null==errors||null===(_errors$link=errors.link)||void 0===_errors$link||null===(_errors$link=_errors$link.label)||void 0===_errors$link||!_errors$link.message),message:null==errors||null===(_errors$link2=errors.link)||void 0===_errors$link2||null===(_errors$link2=_errors$link2.label)||void 0===_errors$link2?void 0:_errors$link2.message,popup:LinkLabelInfo})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Link URL"},register("link.url"),{disabled:isFormDisabled,id:"link-url",error:!(null==errors||null===(_errors$link3=errors.link)||void 0===_errors$link3||null===(_errors$link3=_errors$link3.url)||void 0===_errors$link3||!_errors$link3.message),message:null==errors||null===(_errors$link4=errors.link)||void 0===_errors$link4||null===(_errors$link4=_errors$link4.url)||void 0===_errors$link4?void 0:_errors$link4.message,popup:LinkUrlInfo}))),(0,emotion_react_browser_esm.jsx)(Fieldset,null,(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Location Name"},register("location.name"),{disabled:isFormDisabled,id:"location-name",error:!(null==errors||null===(_errors$location=errors.location)||void 0===_errors$location||null===(_errors$location=_errors$location.name)||void 0===_errors$location||!_errors$location.message),message:null==errors||null===(_errors$location2=errors.location)||void 0===_errors$location2||null===(_errors$location2=_errors$location2.name)||void 0===_errors$location2?void 0:_errors$location2.message,popup:"The name of the location for the event."})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Location URL"},register("location.url"),{disabled:isFormDisabled,id:"location-url",error:!(null==errors||null===(_errors$location3=errors.location)||void 0===_errors$location3||null===(_errors$location3=_errors$location3.url)||void 0===_errors$location3||!_errors$location3.message),message:null==errors||null===(_errors$location4=errors.location)||void 0===_errors$location4||null===(_errors$location4=_errors$location4.url)||void 0===_errors$location4?void 0:_errors$location4.message,popup:"An optional URL for the location of the event. Such as the location website."})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Street"},register("location.address.street"),{disabled:isFormDisabled,id:"street",error:!(null==errors||null===(_errors$location5=errors.location)||void 0===_errors$location5||null===(_errors$location5=_errors$location5.address)||void 0===_errors$location5||null===(_errors$location5=_errors$location5.street)||void 0===_errors$location5||!_errors$location5.message),message:null==errors||null===(_errors$location6=errors.location)||void 0===_errors$location6||null===(_errors$location6=_errors$location6.address)||void 0===_errors$location6||null===(_errors$location6=_errors$location6.street)||void 0===_errors$location6?void 0:_errors$location6.message,popup:"The street address for the location of the event."})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"City"},register("location.address.city"),{disabled:isFormDisabled,id:"city",error:!(null==errors||null===(_errors$location7=errors.location)||void 0===_errors$location7||null===(_errors$location7=_errors$location7.address)||void 0===_errors$location7||null===(_errors$location7=_errors$location7.city)||void 0===_errors$location7||!_errors$location7.message),message:null==errors||null===(_errors$location8=errors.location)||void 0===_errors$location8||null===(_errors$location8=_errors$location8.address)||void 0===_errors$location8||null===(_errors$location8=_errors$location8.city)||void 0===_errors$location8?void 0:_errors$location8.message,popup:"The city for the location of the event."})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"State"},register("location.address.state"),{disabled:isFormDisabled,id:"state",error:!(null==errors||null===(_errors$location9=errors.location)||void 0===_errors$location9||null===(_errors$location9=_errors$location9.address)||void 0===_errors$location9||null===(_errors$location9=_errors$location9.state)||void 0===_errors$location9||!_errors$location9.message),message:null==errors||null===(_errors$location10=errors.location)||void 0===_errors$location10||null===(_errors$location10=_errors$location10.address)||void 0===_errors$location10||null===(_errors$location10=_errors$location10.state)||void 0===_errors$location10?void 0:_errors$location10.message,popup:"The state for the location of the event."})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Zip"},register("location.address.zip"),{disabled:isFormDisabled,id:"zip",error:!(null==errors||null===(_errors$location11=errors.location)||void 0===_errors$location11||null===(_errors$location11=_errors$location11.address)||void 0===_errors$location11||null===(_errors$location11=_errors$location11.zip)||void 0===_errors$location11||!_errors$location11.message),message:null==errors||null===(_errors$location12=errors.location)||void 0===_errors$location12||null===(_errors$location12=_errors$location12.address)||void 0===_errors$location12||null===(_errors$location12=_errors$location12.zip)||void 0===_errors$location12?void 0:_errors$location12.message,popup:"The zip code for the location of the event."}))),(0,emotion_react_browser_esm.jsx)(Fieldset,null,(0,emotion_react_browser_esm.jsx)(TextArea_TextArea.K,_extends({label:"Details"},register("details"),{disabled:isFormDisabled,id:"details",max:800,popup:"Additional details about the event. This will be displayed on the event page.",error:!(null==errors||null===(_errors$details=errors.details)||void 0===_errors$details||!_errors$details.message),message:null==errors||null===(_errors$details2=errors.details)||void 0===_errors$details2?void 0:_errors$details2.message}))),(0,emotion_react_browser_esm.jsx)(Fieldset,null,(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Contact Name"},register("contact.name"),{disabled:isFormDisabled,id:"contact-name",error:!(null==errors||null===(_errors$contact=errors.contact)||void 0===_errors$contact||null===(_errors$contact=_errors$contact.name)||void 0===_errors$contact||!_errors$contact.message),message:null==errors||null===(_errors$contact2=errors.contact)||void 0===_errors$contact2||null===(_errors$contact2=_errors$contact2.name)||void 0===_errors$contact2?void 0:_errors$contact2.message,popup:"Please give us your name, so that we may contact you if we have any questions."})),(0,emotion_react_browser_esm.jsx)(Input_Input.I,_extends({label:"Contact Email"},register("contact.email"),{disabled:isFormDisabled,id:"contact-email",error:!(null==errors||null===(_errors$contact3=errors.contact)||void 0===_errors$contact3||null===(_errors$contact3=_errors$contact3.email)||void 0===_errors$contact3||!_errors$contact3.message),message:null==errors||null===(_errors$contact4=errors.contact)||void 0===_errors$contact4||null===(_errors$contact4=_errors$contact4.email)||void 0===_errors$contact4?void 0:_errors$contact4.message,popup:"Please give us your email address, so that we may contact you if we have any questions."}))),(0,emotion_react_browser_esm.jsx)(Button.z,{type:"submit",disabled:isSubmitDisabled},"Submit")))}EventForm.propTypes={onSubmit:prop_types.PropTypes.func,values:prop_types.PropTypes.shape({title:prop_types.PropTypes.string,startDate:prop_types.PropTypes.string,endDate:prop_types.PropTypes.string,link:prop_types.PropTypes.shape({url:prop_types.PropTypes.string,label:prop_types.PropTypes.string}),location:prop_types.PropTypes.shape({name:prop_types.PropTypes.string,url:prop_types.PropTypes.string,address:prop_types.PropTypes.shape({street:prop_types.PropTypes.string,city:prop_types.PropTypes.string,state:prop_types.PropTypes.string,zip:prop_types.PropTypes.string})}),description:prop_types.PropTypes.string,details:prop_types.PropTypes.string,contact:prop_types.PropTypes.shape({name:prop_types.PropTypes.string,email:prop_types.PropTypes.string})})},EventForm.defaultProps={onSubmit:null,values:null};var _Default$parameters,_Default$parameters2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const EventForm_stories={parameters:{storySource:{source:"import { EventForm } from './EventForm';\nimport { jsx as ___EmotionJSX } from \"@emotion/react\";\nexport default {\n  title: 'Components/Organisms/EventForm',\n  component: EventForm,\n  argTypes: {\n    onSubmit: {\n      action: 'submit'\n    }\n  }\n};\nconst Template = args => ___EmotionJSX(EventForm, args);\nexport const Default = Template.bind({});\nDefault.args = {};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"args => <EventForm {...args} />\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:55,line:12},startBody:{col:17,line:12},endBody:{col:55,line:12}}}}},title:"Components/Organisms/EventForm",component:EventForm,argTypes:{onSubmit:{action:"submit"}}};var Default=function Template(args){return(0,emotion_react_browser_esm.jsx)(EventForm,args)}.bind({});Default.args={},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <EventForm {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/atoms/Button/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var _home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_excluded=["children","as","variant"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var buttonCSS=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("background-color:var(--gt-color-dark-gray);color:var(--gt-color-white);font-size:1rem;font-weight:500;padding:",(0,polished__WEBPACK_IMPORTED_MODULE_1__.hO)(8)," ",(0,polished__WEBPACK_IMPORTED_MODULE_1__.hO)(12),";border-radius:",(0,polished__WEBPACK_IMPORTED_MODULE_1__.hO)(2),";border:none;box-shadow:1px 1px 4px rgb(0 0 0 / 20%);cursor:pointer;text-align:center;text-decoration:none;transition:all 0.2s ease-in-out;","",""),primaryCSS={name:"17jnnpe",styles:"background-color:var(--gt-color-dark-gray);color:var(--gt-color-white);&:hover{background-color:var(--gt-color-medium-gray);}"},secondaryCSS={name:"154gqha",styles:"border:1px solid var(--gt-color-light-gray);background-color:var(--gt-color-white);color:var(--gt-color-text-primary);&:hover{color:var(--gt-color-text-secondary);border-color:var(--gt-color-medium-gray);}"};function Button(_ref){var children=_ref.children,as=_ref.as,variant=_ref.variant,props=(0,_home_runner_work_www_gtalumni_la_www_gtalumni_la_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),Component=as,variantCSS=primaryCSS;switch(variant){case"primary":default:variantCSS=primaryCSS;break;case"secondary":variantCSS=secondaryCSS}return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_extends({css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(buttonCSS," ",variantCSS,";","","")},props),children)}Button.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["primary","secondary"])},Button.defaultProps={as:"button",children:null,variant:"primary"}},"./src/components/atoms/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/atoms/Button/Button.jsx")}}]);