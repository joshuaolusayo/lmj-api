(this.webpackJsonplmj=this.webpackJsonplmj||[]).push([[16],{190:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return j}));var r=n(191),a=n.n(r),c=n(192),s=n(23),i=n(193),u=n.n(i),o=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api");case 2:return n=e.sent,e.next=5,t({type:s.c,payload:n.data});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api");case 2:return n=e.sent,e.next=5,t({type:s.b,payload:n.data[0]});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/api");case 2:return r=t.sent,c=r.data.find((function(t){return t.heading===e})),t.next=6,n({type:s.a,payload:c});case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api");case 2:return n=e.sent,e.next=5,t({type:s.d,payload:n.data.slice(0,3)});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},251:function(e,t,n){"use strict";n.r(t);var r=n(30),a=n(1),c=n(0),s=n(10),i=n(45),u=n(8),o=n(190),d=n(205),l=n(4),j=Object(c.lazy)((function(){return Object(l.a)((function(){return n.e(17).then(n.bind(null,242))}))}));t.default=Object(i.b)((function(e){return{article:e.posts.article}}),{fetchArticle:o.a})((function(e){var t=Object(u.m)(),n=Object(c.useState)(!0),i=Object(r.a)(n,2),o=i[0],l=i[1],b=Object(c.useState)(""),h=Object(r.a)(b,2),p=h[0],f=h[1];Object(c.useEffect)((function(){p&&window.location.href!==p&&l(!0),o&&(f(window.location.href),e.fetchArticle(t.heading).then((function(){return l(!1)})))}),[window.location.href,o]);var x=e.article;return o||Object(d.isEmpty)(x)?Object(a.jsx)("div",{className:"my-5 text-center lead",children:"Loading..."}):Object(a.jsx)(s.b,{children:Object(a.jsxs)("div",{className:"container-fluid article px-0",children:[Object(a.jsxs)(s.a,{children:[Object(a.jsx)("title",{children:x.heading}),Object(a.jsx)("meta",{name:"description",content:x.heading}),Object(a.jsx)("meta",{name:"author",content:"Joshua Oyeleke"}),Object(a.jsx)("meta",{name:"keywords",content:"".concat(x.heading,", ").concat(x.tag)})]}),Object(a.jsx)("div",{className:"banner",style:{background:"linear-gradient(rgba(0,0,0.2), rgba(0,0,0,0.2)), url(".concat(x.image,") 15% 0%")},children:Object(a.jsxs)("div",{className:"container d-flex flex-column justify-content-center align-items-center h-100 text-light",children:[Object(a.jsx)("span",{className:"text-uppercase mb-3",children:x.tag}),Object(a.jsx)("h3",{className:"font-weight-bold text-center",children:x.heading}),Object(a.jsxs)("span",{className:"mt-2",children:[Object(a.jsx)("i",{className:"fa fa-clock-o"})," ",x.date]})]})}),Object(a.jsx)("div",{className:"container mt-5 mb-8 px-2 px-sm-auto",children:Object(a.jsx)("div",{className:"row no-gutters",children:Object(a.jsxs)("div",{className:"w-100",children:[Object(a.jsxs)("div",{className:"text-center mb-5",children:[Object(a.jsx)("q",{className:"lead",children:x.quoteStart}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["- ",x.quoteStartAuthor]})]}),Object(a.jsx)("p",{children:x.intro}),x.section.map((function(e,t){return Object(a.jsxs)("div",{className:"my-5",children:[Object(a.jsx)("h4",{className:"font-weight-bold",children:e.heading}),e.para.map((function(e,t){return Object(a.jsx)("p",{children:e},t)}))]},t)})),Object(a.jsxs)("div",{className:"text-center mb-5",children:[Object(a.jsx)("q",{className:"lead",children:x.quoteEnd}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["- ",x.quoteEndAuthor]})]}),Object(a.jsx)(j,{tag:x.tag,heading:x.heading,img:x.image,intro:x.intro})]})})})]})})}))}}]);
//# sourceMappingURL=16.a0966ed5.chunk.js.map