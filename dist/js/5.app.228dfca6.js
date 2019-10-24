(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/Copybook.js":function srcComponentsCopybookJs(a,b,c){"use strict";function d(a){function b(){a.onCloseCopybook()}var c=Object(i["default"])([a.copybookFileContent,a.copybookVisible]),d=Object(e.useRef)(null);return a.copybookVisible&&a.copybookFileList&&a.copybookFileContent?f.a.createElement(g.Modal,{open:a.copybookVisible,onClose:b,centered:!1,closeIcon:!0,className:a.className,size:"large"},f.a.createElement(g.Modal.Header,null,f.a.createElement("div",{className:"title"},"Daily Algorithm Copybook"),f.a.createElement(g.Button,{size:"tiny",as:"a",basic:!0,href:a.copybookSelectedFile.link,target:"_blank"},"View In GitHub"),f.a.createElement(g.Dropdown,{search:!0,selection:!0,onChange:function(b,c){var d=c.searchQuery,e=c.value;e!=a.copybookSelectedFile.path&&a.onRequestCopybookFile(a.copybookFileList.find(function(a){return a.path===e}))},value:a.copybookSelectedFile.path,options:function(){return a.copybookFileList?a.copybookFileList.map(function(a,b){return{key:a.path,value:a.path,text:b+1+". "+a.path}}):null}()})),f.a.createElement(g.Modal.Content,null,a.copybookRequesting?f.a.createElement(h["default"],null):"",f.a.createElement("pre",null,f.a.createElement("code",{className:"prettyprint",ref:c},a.copybookFileContent.content),f.a.createElement("div",{className:"editor",contentEditable:!0,ref:d})))):f.a.createElement(g.Modal,{open:a.copybookVisible,onClose:b,centered:!1,closeIcon:!0,className:a.className,size:"large"},f.a.createElement(g.Modal.Header,null,f.a.createElement("div",{className:"title"},"Daily Algorithm Copybook")),f.a.createElement(g.Modal.Content,null,f.a.createElement(h["default"],null),f.a.createElement("pre",null,f.a.createElement("code",{className:"prettyprint",ref:c}))))}c.r(b),c.d(b,"default",function(){return d});var e=c("react"),f=c.n(e),g=c("./node_modules/semantic-ui-react/dist/es/index.js"),h=c("./src/components/Loading.js"),i=c("./src/components/hooks/useCodeHighlighting.js")},"./src/components/Loading.js":function srcComponentsLoadingJs(a,b,c){"use strict";function d(){return f.a.createElement("div",{className:"loading"},f.a.createElement("div",{className:"logo"},f.a.createElement("img",{className:"spinner",src:"images/codelf_logo.f4ae25bd.png"})))}c.r(b),c.d(b,"default",function(){return d});var e=c("react"),f=c.n(e)},"./src/components/hooks/useCodeHighlighting.js":function srcComponentsHooksUseCodeHighlightingJs(a,b,c){"use strict";function d(a){return g(a)||f(a)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function g(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function h(a,b){function c(){setTimeout(function(){f.current&&(f.current.classList.remove("prettyprinted"),setTimeout(function(){return PR.prettyPrint(function(){return setTimeout(function(){return e()},1e3)})},100))},f.current?0:1e3)}function e(){if(b){g.current&&g.current.unmark(),g.current=new Mark(f.current);var a=0;g.current.mark(b,{each:function(b){b.setAttribute("tabindex",a++)}})}}var f=Object(i.useRef)(null),g=Object(i.useRef)(null);return Object(i.useEffect)(function(){c()},d(a)),f}c.r(b),c.d(b,"default",function(){return h});var i=c("react"),j=c.n(i)},"./src/containers/CopybookContainer.js":function srcContainersCopybookContainerJs(a,b,c){"use strict";function d(){return d=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},d.apply(this,arguments)}function e(a,b){return h(a)||g(a,b)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function h(a){if(Array.isArray(a))return a}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(b,!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){switch(b.type){case t.UPDATE:return k({},a,{},b.payload);default:return a;}}function n(){function a(a){h({type:t.UPDATE,payload:a})}function b(b,c,d){d.fileList&&a({copybookFileList:r["default"].fileList}),d.fileContent&&a({copybookRequesting:!1,copybookSelectedFile:r["default"].selectedFile,copybookFileContent:r["default"].fileContent}),d.visible&&(a({copybookVisible:r["default"].visible}),r["default"].visible&&q["default"].analytics("copybook&q=read"))}var c=Object(o.useReducer)(m,u),f=e(c,2),g=f[0],h=f[1];return Object(o.useEffect)(function(){return r["default"].onUpdated(b),function(){return r["default"].offUpdated(b)}}),p.a.createElement(s["default"],d({},g,{className:"copybook-container fix-modal",onRequestCopybookFile:function(b){a({copybookRequesting:!0}),r["default"].requestRepoFile(b),q["default"].analytics("copybook&q=read")},onCloseCopybook:function(){r["default"].update({visible:!1})}}))}c.r(b),c.d(b,"default",function(){return n});var o=c("react"),p=c.n(o),q=c("./src/models/AppModel.js"),r=c("./src/models/CopybookModel.js"),s=c("./src/components/Copybook.js"),t={UPDATE:"update"},u={copybookRequesting:!1,copybookVisible:r["default"].visible,copybookFileList:r["default"].fileList,copybookSelectedFile:r["default"].selectedFile,copybookFileContent:r["default"].fileContent}}}]);