(this["webpackJsonpreact-lecture"]=this["webpackJsonpreact-lecture"]||[]).push([[1],{61:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return i}))},63:function(t,e,r){"use strict";r(0);var n=r(67),o=r.n(n),i=r(1);e.a=function(t){var e=t.children;return Object(i.jsx)("div",{className:o.a.paper,children:e})}},64:function(t,e,r){t.exports=r(70)},65:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},66:function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return h})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return f}));var n=r(61),o=r(64),i=r.n(o),a=r(65),c="https://6137592feac1410017c182b7.mockapi.io",u=function(){var t=Object(a.a)(i.a.mark((function t(e){var r,n,o=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},t.next=3,fetch("".concat(c,"/").concat(e),r);case 3:return n=t.sent,t.abrupt("return",n.ok?n.json():Promise.reject(new Error(n.statusText)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(t,e){return u(t,e)},h=function(t,e,r){var o=Object(n.a)({method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}},r);return u(t,o)},l=function(t,e,r){var o=Object(n.a)({method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}},r);return u("".concat(t,"/").concat(e.id),o)},f=function(t,e,r){return u("".concat(t,"/").concat(e),Object(n.a)({method:"DELETE"},r))}},67:function(t,e,r){t.exports={paper:"Paper_paper__E1C3u"}},68:function(t,e,r){t.exports={container:"ThemeSwitcher_container__26lGq",switch:"ThemeSwitcher_switch__2UGLd",slider:"ThemeSwitcher_slider__i4p2Y",round:"ThemeSwitcher_round__1UmXM"}},69:function(t,e,r){t.exports={mainHeader:"Header_mainHeader__DUN6Y",lightTheme:"Header_lightTheme__M0OkV Header_mainHeader__DUN6Y",darkTheme:"Header_darkTheme__23ywi Header_mainHeader__DUN6Y"}},70:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",y={};function m(){}function v(){}function g(){}var b={};u(b,i,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(k([])));w&&w!==r&&n.call(w,i)&&(b=w);var O=g.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=g,u(O,"constructor",g),u(g,"constructor",v),v.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},71:function(t,e,r){"use strict";var n=r(0),o=r(8),i=r(68),a=r.n(i),c=r(1),u=function(){var t=Object(n.useContext)(o.a),e=t.theme,r=t.toggleTheme;return Object(c.jsx)("div",{className:a.a.container,children:Object(c.jsxs)("label",{className:a.a.switch,children:[Object(c.jsx)("input",{type:"checkbox",onChange:r,checked:e===o.b.light}),Object(c.jsx)("span",{className:"".concat(a.a.slider," ").concat(a.a.round)})]})})},s=r(69),h=r.n(s);e.a=function(t){var e=t.title,r=Object(n.useContext)(o.a).theme;return Object(c.jsxs)("header",{className:r===o.b.light?h.a.lightTheme:h.a.darkTheme,children:[Object(c.jsx)(u,{}),e&&Object(c.jsx)("h2",{className:"heading",children:e})]})}},76:function(t,e,r){t.exports={listElem:"DepartmentsListPage_listElem__st0pk",text:"DepartmentsListPage_text__3hkZl"}},93:function(t,e,r){"use strict";r.r(e);var n=r(12),o=r(0),i=r(4),a=r(16),c=r(63),u=r(71),s=r(66),h=r(76),l=r.n(h),f=r(1);e.default=function(){var t=Object(o.useState)([]),e=Object(n.a)(t,2),r=e[0],h=e[1],p=Object(i.j)(),d=Object(i.h)();return Object(o.useEffect)((function(){s.c("departments").then(h).catch((function(t){return console.log(t.message)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{title:"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u044b"}),!!r.length&&Object(f.jsx)("ul",{children:r.map((function(t){var e=t.id,r=t.name;return Object(f.jsx)("li",{className:l.a.listElem,children:Object(f.jsx)(a.b,{to:{pathname:"".concat(p.url,"/").concat(e),state:{from:d,label:"\u041d\u0430\u0437\u0430\u0434 \u043a\u043e \u0432\u0441\u0435\u043c \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430\u043c"}},children:Object(f.jsx)(c.a,{children:Object(f.jsx)("p",{className:l.a.text,children:r})})})},e)}))})]})}}}]);
//# sourceMappingURL=Departments__List__Page.3862d803.chunk.js.map