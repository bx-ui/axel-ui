"use strict";(self.webpackChunkaxel_ui=self.webpackChunkaxel_ui||[]).push([[415],{"./node_modules/_@storybook_preview-web@6.4.22@@storybook/preview-web/dist/esm/renderDocs.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{renderDocs:function(){return renderDocs},unmountDocs:function(){return unmountDocs}});var regenerator=__webpack_require__("./node_modules/_@babel_runtime@7.17.9@@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),_react_18_1_0_react=(__webpack_require__("./node_modules/_regenerator-runtime@0.13.9@regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/_core-js@3.22.5@core-js/modules/es.promise.js"),__webpack_require__("./node_modules/_core-js@3.22.5@core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/_react@18.1.0@react/index.js")),_react_dom_18_1_0_react_dom=__webpack_require__("./node_modules/_react-dom@18.1.0@react-dom/index.js"),wrapper={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},main={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},heading={textAlign:"center"},NoDocs=function NoDocs(){return _react_18_1_0_react.createElement("div",{style:wrapper,className:"sb-nodocs sb-wrapper"},_react_18_1_0_react.createElement("div",{style:main},_react_18_1_0_react.createElement("h1",{style:heading},"No Docs"),_react_18_1_0_react.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",_react_18_1_0_react.createElement("code",null,"docs")," parameter. If you think this is an error:"),_react_18_1_0_react.createElement("ul",null,_react_18_1_0_react.createElement("li",null,"Please check the story definition."),_react_18_1_0_react.createElement("li",null,"Please check the Storybook config."),_react_18_1_0_react.createElement("li",null,"Try reloading the page.")),_react_18_1_0_react.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function renderDocs(story,docsContext,element,callback){return function renderDocsAsync(_x,_x2,_x3){return _renderDocsAsync.apply(this,arguments)}(story,docsContext,element).then(callback)}function _renderDocsAsync(){return(_renderDocsAsync=_asyncToGenerator(regenerator_default().mark((function _callee(story,docsContext,element){var _docs$getContainer,_docs$getPage,docs,DocsContainer,Page,docsElement;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(null!=(docs=story.parameters.docs)&&docs.getPage||null!=docs&&docs.page)||(null!=docs&&docs.getContainer||null!=docs&&docs.container)){_context.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(_context.t1=docs.container,_context.t1){_context.next=8;break}return _context.next=7,null===(_docs$getContainer=docs.getContainer)||void 0===_docs$getContainer?void 0:_docs$getContainer.call(docs);case 7:_context.t1=_context.sent;case 8:if(_context.t0=_context.t1,_context.t0){_context.next=11;break}_context.t0=function(_ref){var children=_ref.children;return _react_18_1_0_react.createElement(_react_18_1_0_react.Fragment,null,children)};case 11:if(DocsContainer=_context.t0,_context.t3=docs.page,_context.t3){_context.next=17;break}return _context.next=16,null===(_docs$getPage=docs.getPage)||void 0===_docs$getPage?void 0:_docs$getPage.call(docs);case 16:_context.t3=_context.sent;case 17:if(_context.t2=_context.t3,_context.t2){_context.next=20;break}_context.t2=NoDocs;case 20:return Page=_context.t2,docsElement=_react_18_1_0_react.createElement(DocsContainer,{key:story.componentId,context:docsContext},_react_18_1_0_react.createElement(Page,null)),_context.next=24,new Promise((function(resolve){_react_dom_18_1_0_react_dom.render(docsElement,element,resolve)}));case 24:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}function unmountDocs(element){_react_dom_18_1_0_react_dom.unmountComponentAtNode(element)}NoDocs.displayName="NoDocs"}}]);