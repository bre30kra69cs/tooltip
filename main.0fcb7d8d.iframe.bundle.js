(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/Tooltip.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".Tooltip {\n  cursor: pointer;\n}\n",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/TooltipContent.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".TooltipContent {\n  display: flex;\n  cursor: pointer;\n  position: fixed;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  align-items: center;\n}\n\n.TooltipContent:hover .TooltipContent--content {\n  background-color: lightcoral;\n}\n\n.TooltipContent:hover .TooltipContent--arrow__side-left {\n  border-left-color: lightcoral;\n}\n\n.TooltipContent:hover .TooltipContent--arrow__side-top {\n  border-top-color: lightcoral;\n}\n\n.TooltipContent:hover .TooltipContent--arrow__side-right {\n  border-right-color: lightcoral;\n}\n\n.TooltipContent:hover .TooltipContent--arrow__side-bottom {\n  border-bottom-color: lightcoral;\n}\n\n.TooltipContent--content {\n  box-sizing: border-box;\n  overflow: hidden;\n  background-color: red;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.3s;\n}\n\n.TooltipContent--arrow {\n  width: 0px;\n  height: 0px;\n  transition: border-color 0.3s;\n}\n\n.TooltipContent--arrow__side-left {\n  border-bottom: 5px solid transparent;\n  border-top: 5px solid transparent;\n  border-left: 5px solid red;\n}\n\n.TooltipContent--arrow__side-top {\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid red;\n}\n\n.TooltipContent--arrow__side-right {\n  border-bottom: 5px solid transparent;\n  border-top: 5px solid transparent;\n  border-right: 5px solid red;\n}\n\n.TooltipContent--arrow__side-bottom {\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid red;\n}\n\n.TooltipContent__status-wait {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n\n.TooltipContent__status-out {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n\n.TooltipContent__side-left {\n  flex-direction: row;\n}\n\n.TooltipContent__side-top {\n  flex-direction: column;\n}\n\n.TooltipContent__side-right {\n  flex-direction: row-reverse;\n}\n\n.TooltipContent__side-bottom {\n  flex-direction: column-reverse;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Example.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".Example {\n  position: relative;\n  height: 200vh;\n  padding: 16px;\n}\n\n.Example--box {\n  display: flex;\n  height: 100px;\n  width: 100px;\n  transition: color 0.2s, background-color 0.2s;\n}\n\n.Example--text {\n  margin: auto;\n}\n\n.Example--box__overflow {\n  overflow: hidden;\n}\n\n.Example--content {\n  color: white;\n}\n\n.Example--tooltip {\n  position: absolute;\n}\n\n.Example--tooltip__left {\n  left: 16px;\n  top: calc(50vh - 50px);\n}\n\n.Example--box__left {\n  background-color: lightskyblue;\n}\n\n.Example--box__left:hover {\n  background-color: skyblue;\n  color: white;\n}\n\n.Example--tooltip__top {\n  top: 16px;\n  left: calc(50vw - 50px);\n}\n\n.Example--box__top {\n  background-color: lightcoral;\n}\n\n.Example--box__top:hover {\n  background-color: coral;\n  color: white;\n}\n\n.Example--tooltip__right {\n  right: 16px;\n  top: calc(50vh - 50px);\n}\n\n.Example--box__right {\n  background-color: lightblue;\n}\n\n.Example--box__right:hover {\n  background-color: blue;\n  color: white;\n}\n\n.Example--tooltip__bottom {\n  top: calc(100vh - 100px - 16px);\n  left: calc(50vw - 50px);\n}\n\n.Example--box__bottom {\n  background-color: lightpink;\n}\n\n.Example--box__bottom:hover {\n  background-color: pink;\n  color: white;\n}\n\n.Example--tooltip__center {\n  top: calc(50vh - 50px);\n  left: calc(50vw - 50px);\n}\n\n.Example--box__center {\n  background-color: lightgreen;\n}\n\n.Example--box__center:hover {\n  background-color: green;\n  color: white;\n}\n",""]),module.exports=exports},"./src/Tooltip.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/Tooltip.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/TooltipContent.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/TooltipContent.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Example.stories.tsx":"./stories/Example.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Example.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Example.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories/Example.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Base",(function(){return Base}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_dom=(__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/react-dom/index.js")),Portal_Portal=function Portal(_ref){var containerId=_ref.containerId,show=_ref.show,_ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,children=_ref.children,ref=Object(react.useRef)(document.createElement(as));return Object(react.useEffect)((function(){if(show)return ref.current.setAttribute("id",containerId),document.body.appendChild(ref.current),function(){document.body.removeChild(ref.current)}}),[containerId,show]),Object(react_dom.createPortal)(children,ref.current)};try{Portal_Portal.displayName="Portal",Portal_Portal.__docgenInfo={description:"",displayName:"Portal",props:{containerId:{defaultValue:null,description:"",name:"containerId",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dir"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"font"'},{value:'"footer"'},{value:'"form"'},{value:'"frame"'},{value:'"frameset"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"marquee"'},{value:'"menu"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"slot"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Portal.tsx#Portal"]={docgenInfo:Portal_Portal.__docgenInfo,name:"Portal",path:"src/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var bem=function bem(base){return function(element,mods){if("string"!=typeof element)return base;if(!mods)return element?base+"--"+element:base;var _mods=Object.entries(mods).filter((function(_ref){return!!_slicedToArray(_ref,2)[1]})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]}));if(!_mods.length)return element?base+"--"+element:base;var item=element?base+"--"+element:base,result=[item];return _mods.forEach((function(mod){result.push(item+"__"+mod)})),result.join(" ")}},cn=function cn(){for(var _len=arguments.length,classNames=new Array(_len),_key=0;_key<_len;_key++)classNames[_key]=arguments[_key];return classNames.filter((function(className){return!!className})).filter((function(className){return"string"==typeof className})).join(" ")},useMounted_useMounted=function useMounted(effect,deps){var ref=Object(react.useRef)(!1);Object(react.useEffect)((function(){if(ref.current)return effect()}),deps),Object(react.useEffect)((function(){ref.current=!0}),[])},jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./src/TooltipContent.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return TooltipContent_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function TooltipContent_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return TooltipContent_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TooltipContent_arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TooltipContent_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var b=bem("TooltipContent"),TooltipContent_TooltipContent=function TooltipContent(_ref){var _anchor$current$getBo,_anchor$current,_b,_b2,anchor=_ref.anchor,side=_ref.side,sidesOrder=_ref.sidesOrder,ch=_ref.contentHeight,cw=_ref.contentWidth,animationIn=_ref.animationIn,animationOut=_ref.animationOut,status=_ref.status,children=_ref.children,setHover=_ref.setHover,data=null!==(_anchor$current$getBo=null===(_anchor$current=anchor.current)||void 0===_anchor$current?void 0:_anchor$current.getBoundingClientRect())&&void 0!==_anchor$current$getBo?_anchor$current$getBo:{right:0,left:0,top:0,bottom:0,width:0,height:0},coords={left:{left:data.left-(cw+5),top:data.top+data.height/2-ch/2,width:cw+5,height:ch},top:{left:data.left+data.width/2-cw/2,top:data.top-(ch+5),width:cw,height:ch+5},right:{left:data.right,top:data.top+data.height/2-ch/2,width:cw+5,height:ch},bottom:{left:data.left+data.width/2-cw/2,top:data.bottom,width:cw,height:ch+5}},target=[side].concat(_toConsumableArray(sidesOrder)).find((function(x){return!(coords[x].left<0)&&(!(coords[x].top<0)&&(!(coords[x].top+coords[x].height>window.innerHeight)&&!(coords[x].left+coords[x].width>window.innerWidth)))}));return target?Object(jsx_runtime.jsxs)("div",{className:b("",(_b={},_b["status-"+status]=!0,_b["side-"+target]=!0,_b)),style:{left:coords[target].left,top:coords[target].top,width:coords[target].width,height:coords[target].height,animationDuration:"wait"===status?animationIn+"ms":animationOut+"ms"},onMouseEnter:function onMouseEnter(){setHover(!0)},onMouseLeave:function onMouseLeave(){setHover(!1)},children:[Object(jsx_runtime.jsx)("div",{className:b("content"),style:{width:cw,height:ch},children:children}),Object(jsx_runtime.jsx)("div",{className:b("arrow",(_b2={},_b2["side-"+target]=!0,_b2))})]}):null};TooltipContent_TooltipContent.displayName="TooltipContent";try{TooltipContent_TooltipContent.displayName="TooltipContent",TooltipContent_TooltipContent.__docgenInfo={description:"",displayName:"TooltipContent",props:{anchor:{defaultValue:null,description:"",name:"anchor",required:!0,type:{name:"RefObject<HTMLDivElement>"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},sidesOrder:{defaultValue:null,description:"",name:"sidesOrder",required:!0,type:{name:"TooltipSide[]"}},contentHeight:{defaultValue:null,description:"",name:"contentHeight",required:!0,type:{name:"number"}},contentWidth:{defaultValue:null,description:"",name:"contentWidth",required:!0,type:{name:"number"}},animationIn:{defaultValue:null,description:"",name:"animationIn",required:!0,type:{name:"number"}},animationOut:{defaultValue:null,description:"",name:"animationOut",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"closed"'},{value:'"wait"'},{value:'"out"'}]}},setHover:{defaultValue:null,description:"",name:"setHover",required:!0,type:{name:"(hover: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TooltipContent.tsx#TooltipContent"]={docgenInfo:TooltipContent_TooltipContent.__docgenInfo,name:"TooltipContent",path:"src/TooltipContent.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/Tooltip.css");function Tooltip_slicedToArray(arr,i){return function Tooltip_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Tooltip_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Tooltip_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Tooltip_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tooltip_arrayLikeToArray(o,minLen)}(arr,i)||function Tooltip_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tooltip_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var SIDES_ORDERS=["left","top","right","bottom"],Tooltip_b=bem("Tooltip"),Tooltip_Tooltip=function Tooltip(_ref){var _ref$side=_ref.side,side=void 0===_ref$side?"left":_ref$side,_ref$sidesOrder=_ref.sidesOrder,sidesOrder=void 0===_ref$sidesOrder?SIDES_ORDERS:_ref$sidesOrder,animationIn=_ref.animationIn,animationOut=_ref.animationOut,_ref$durationIn=_ref.durationIn,durationIn=void 0===_ref$durationIn?0:_ref$durationIn,_ref$durationWait=_ref.durationWait,durationWait=void 0===_ref$durationWait?0:_ref$durationWait,_ref$durationOut=_ref.durationOut,durationOut=void 0===_ref$durationOut?0:_ref$durationOut,className=_ref.className,content=_ref.content,contentHeight=_ref.contentHeight,contentWidth=_ref.contentWidth,children=_ref.children,ref=Object(react.useRef)(null),timerRef=Object(react.useRef)(),_useState2=Tooltip_slicedToArray(Object(react.useState)(!1),2),hover=_useState2[0],setHover=_useState2[1],_useState4=Tooltip_slicedToArray(Object(react.useState)("closed"),2),status=_useState4[0],setStatus=_useState4[1],isShow="closed"!==status,_animationIn=null!=animationIn?animationIn:durationOut,_animationOut=null!=animationOut?animationOut:durationOut;return useMounted_useMounted((function(){if(timerRef.current&&clearTimeout(timerRef.current),hover){if("closed"===status&&(timerRef.current=setTimeout((function(){setStatus("wait")}),durationIn)),"wait"===status)return;"out"===status&&setStatus("wait")}else{if("closed"===status)return;if("wait"===status&&(timerRef.current=setTimeout((function(){setStatus("out")}),durationWait)),"out"===status)return}}),[hover,durationIn,durationWait]),useMounted_useMounted((function(){"closed"!==status&&"wait"!==status&&"out"===status&&(timerRef.current=setTimeout((function(){setStatus("closed")}),durationOut))}),[status,durationOut]),function useScroll(fn){Object(react.useEffect)((function(){var listner=function listner(){fn()};return window.addEventListener("scroll",listner,{passive:!0}),function(){window.removeEventListener("scroll",listner)}}),[fn])}((function(){timerRef.current&&clearTimeout(timerRef.current),isShow&&setStatus("closed")})),Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{ref:ref,className:cn(Tooltip_b(),className),onMouseEnter:function onMouseEnter(){setHover(!0)},onMouseLeave:function onMouseLeave(){setHover(!1)},children:children}),Object(jsx_runtime.jsx)(Portal_Portal,{containerId:"tooltip-portal",show:isShow,children:Object(jsx_runtime.jsx)(TooltipContent_TooltipContent,{anchor:ref,side:side,sidesOrder:sidesOrder,contentHeight:contentHeight,contentWidth:contentWidth,animationIn:_animationIn,animationOut:_animationOut,status:status,setHover:setHover,children:content})})]})};try{Tooltip_Tooltip.displayName="Tooltip",Tooltip_Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},contentHeight:{defaultValue:null,description:"",name:"contentHeight",required:!0,type:{name:"number"}},contentWidth:{defaultValue:null,description:"",name:"contentWidth",required:!0,type:{name:"number"}},side:{defaultValue:{value:"left"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},sidesOrder:{defaultValue:{value:"['left', 'top', 'right', 'bottom']"},description:"",name:"sidesOrder",required:!1,type:{name:"TooltipSide[]"}},animationIn:{defaultValue:null,description:"",name:"animationIn",required:!1,type:{name:"number"}},animationOut:{defaultValue:null,description:"",name:"animationOut",required:!1,type:{name:"number"}},durationIn:{defaultValue:{value:"0"},description:"",name:"durationIn",required:!1,type:{name:"number"}},durationWait:{defaultValue:{value:"0"},description:"",name:"durationWait",required:!1,type:{name:"number"}},durationOut:{defaultValue:{value:"0"},description:"",name:"durationOut",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip_Tooltip.__docgenInfo,name:"Tooltip",path:"src/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./stories/Example.css");var Example_b=bem("Example"),Example_Example=function Example(_ref){var overflow=_ref.overflow,side=_ref.side;return Object(jsx_runtime.jsxs)("main",{className:Example_b(),children:[Object(jsx_runtime.jsx)(Tooltip_Tooltip,{className:Example_b("tooltip",{left:!0}),side:side,durationIn:1e3,durationWait:1e3,durationOut:300,contentHeight:50,contentWidth:150,content:Object(jsx_runtime.jsx)("div",{className:Example_b("content"),children:Object(jsx_runtime.jsx)("span",{children:"Left tooltip"})}),children:Object(jsx_runtime.jsx)("div",{className:Example_b("box",{left:!0,overflow:overflow}),children:Object(jsx_runtime.jsx)("span",{className:Example_b("text"),children:"Hover 1s"})})}),Object(jsx_runtime.jsx)(Tooltip_Tooltip,{className:Example_b("tooltip",{top:!0}),side:side,durationIn:1100,durationWait:1100,durationOut:300,contentHeight:50,contentWidth:150,content:Object(jsx_runtime.jsx)("div",{className:Example_b("content"),children:Object(jsx_runtime.jsx)("span",{children:"Top tooltip"})}),children:Object(jsx_runtime.jsx)("div",{className:Example_b("box",{top:!0,overflow:overflow}),children:Object(jsx_runtime.jsx)("span",{className:Example_b("text"),children:"Hover 1.1s"})})}),Object(jsx_runtime.jsx)(Tooltip_Tooltip,{className:Example_b("tooltip",{right:!0}),side:side,durationIn:1300,durationWait:1300,durationOut:300,contentHeight:50,contentWidth:150,content:Object(jsx_runtime.jsx)("div",{className:Example_b("content"),children:Object(jsx_runtime.jsx)("span",{children:"Right tooltip"})}),children:Object(jsx_runtime.jsx)("div",{className:Example_b("box",{right:!0,overflow:overflow}),children:Object(jsx_runtime.jsx)("span",{className:Example_b("text"),children:"Hover 1.3s"})})}),Object(jsx_runtime.jsx)(Tooltip_Tooltip,{className:Example_b("tooltip",{bottom:!0}),side:side,durationIn:1400,durationWait:1400,durationOut:300,contentHeight:50,contentWidth:150,content:Object(jsx_runtime.jsx)("div",{className:Example_b("content"),children:Object(jsx_runtime.jsx)("span",{children:"Bottom tooltip"})}),children:Object(jsx_runtime.jsx)("div",{className:Example_b("box",{bottom:!0,overflow:overflow}),children:Object(jsx_runtime.jsx)("span",{className:Example_b("text"),children:"Hover 1.4s"})})}),Object(jsx_runtime.jsx)(Tooltip_Tooltip,{className:Example_b("tooltip",{center:!0}),side:side,durationIn:1500,durationWait:1500,durationOut:300,contentHeight:50,contentWidth:150,content:Object(jsx_runtime.jsx)("div",{className:Example_b("content"),children:Object(jsx_runtime.jsx)("span",{children:"Center tooltip"})}),children:Object(jsx_runtime.jsx)("div",{className:Example_b("box",{center:!0,overflow:overflow}),children:Object(jsx_runtime.jsx)("span",{className:Example_b("text"),children:"Hover 1.5s"})})})]})};Example_Example.displayName="Example";try{Example_Example.displayName="Example",Example_Example.__docgenInfo={description:"",displayName:"Example",props:{overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Example.tsx#Example"]={docgenInfo:Example_Example.__docgenInfo,name:"Example",path:"stories/Example.tsx#Example"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example",component:Example_Example,parameters:{layout:"fullscreen"}};var Example_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Example_Example,Object.assign({},args))};Example_stories_Template.displayName="Template";var Base=Example_stories_Template.bind({});Base.args={overflow:!0,side:"right"},Base.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Example {...args} />;\n}"}},Base.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);