(this.webpackJsonplmj=this.webpackJsonplmj||[]).push([[10],{190:function(t,e,r){t.exports=r(193)},191:function(t,e,r){"use strict";function n(t,e,r,n,a,o,c){try{var i=t[o](c),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,s,"next",t)}function s(t){n(c,a,o,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))},192:function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return h}));var n=r(190),a=r.n(n),o=r(191),c=r(23),i=r(194),s=function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.get("/api");case 3:return r=t.sent,t.next=6,r.data;case 6:return n=t.sent,t.next=9,e({type:c.c,payload:n});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.get("/api");case 3:return r=t.sent,t.next=6,r.data;case 6:return n=t.sent,t.next=9,e({type:c.b,payload:n[0]});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},l=function(t){return function(){var e=Object(o.a)(a.a.mark((function e(r){var n,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/api");case 3:return n=e.sent,e.next=6,n.data;case 6:return o=e.sent,e.next=9,o.find((function(e){return e.heading===t}));case 9:return s=e.sent,e.next=12,r({type:c.a,payload:s});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.get("/api");case 3:return r=t.sent,t.next=6,r.data;case 6:return n=t.sent,t.next=9,e({type:c.d,payload:n.slice(0,3)});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}},193:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,o=Object.create(a.prototype),c=new _(n||[]);return o._invoke=function(t,e,r){var n=h;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return G()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===v)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,c),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var x={};x[o]=function(){return this};var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==r&&n.call(j,o)&&(x=j);var w=g.prototype=y.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,c,i){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:G}}function G(){return{value:e,done:!0}}return m.prototype=w.constructor=g,g.constructor=m,m.displayName=s(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[c]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new L(u(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(w),s(w,i,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},249:function(t,e,r){"use strict";r.r(e);var n=r(190),a=r.n(n),o=r(191),c=r(30),i=r(1),s=r(0),u=r(14),l=r(45),h=r(8),f=r(192),p=r(4),d=Object(s.lazy)((function(){return Object(p.a)((function(){return r.e(16).then(r.bind(null,240))}))}));e.default=Object(l.b)((function(t){return{article:t.posts.article}}),{fetchArticle:f.a})((function(t){var e=Object(h.m)(),r=Object(s.useState)(!0),n=Object(c.a)(r,2),l=n[0],f=n[1];Object(s.useEffect)((function(){(function(){var r=Object(o.a)(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.fetchArticle(e.heading);case 2:f(!1);case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}})()()}),[e.heading]);var p=t.article;return l?Object(i.jsx)("div",{className:"my-5 text-center lead",children:"Loading..."}):Object(i.jsx)(u.b,{children:Object(i.jsxs)("div",{className:"container-fluid article px-0",children:[Object(i.jsxs)(u.a,{children:[Object(i.jsx)("title",{children:p.heading}),Object(i.jsx)("meta",{name:"description",content:p.heading}),Object(i.jsx)("meta",{name:"keywords",content:"".concat(p.heading,", ").concat(p.tag)})]}),Object(i.jsx)("div",{className:"banner",style:{background:"linear-gradient(rgba(0,0,0.2), rgba(0,0,0,0.2)), url(".concat(p.image,") 15% 0%")},children:Object(i.jsxs)("div",{className:"container d-flex flex-column justify-content-center align-items-center h-100 text-light",children:[Object(i.jsx)("span",{className:"text-uppercase mb-3",children:p.tag}),Object(i.jsx)("h3",{className:"font-weight-bold text-center",children:p.heading}),Object(i.jsxs)("span",{className:"mt-2",children:[Object(i.jsx)("i",{className:"fa fa-clock-o"})," ",p.date]})]})}),Object(i.jsx)("div",{className:"container mt-5 mb-8 px-2 px-sm-auto",children:Object(i.jsx)("div",{className:"row no-gutters",children:Object(i.jsxs)("div",{className:"w-100",children:[Object(i.jsxs)("div",{className:"text-center mb-5",children:[Object(i.jsx)("q",{className:"lead",children:p.quoteStart}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["- ",p.quoteStartAuthor]})]}),Object(i.jsx)("p",{children:p.intro}),p.section.map((function(t,e){return Object(i.jsxs)("div",{className:"my-5",children:[Object(i.jsx)("h4",{className:"font-weight-bold",children:t.heading}),t.para.map((function(t,e){return Object(i.jsx)("p",{children:t},e)}))]},e)})),Object(i.jsxs)("div",{className:"text-center mb-5",children:[Object(i.jsx)("q",{className:"lead",children:p.quoteEnd}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["- ",p.quoteEndAuthor]})]}),Object(i.jsx)(d,{tag:p.tag,heading:p.heading,img:p.image,intro:p.intro})]})})})]})})}))}}]);
//# sourceMappingURL=10.d522411e.chunk.js.map