(this.webpackJsonplmj=this.webpackJsonplmj||[]).push([[18],{190:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h}));var a=n(191),c=n.n(a),r=n(193),s=n(23),i=n(194),o=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/api");case 3:return n=e.sent,e.next=6,n.data;case 6:return a=e.sent,e.next=9,t({type:s.c,payload:a});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/api");case 3:return n=e.sent,e.next=6,n.data;case 6:return a=e.sent,e.next=9,t({type:s.b,payload:a[0]});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.get("/api");case 3:return a=t.sent,t.next=6,a.data;case 6:return r=t.sent,t.next=9,r.find((function(t){return t.heading===e}));case 9:return o=t.sent,t.next=12,n({type:s.a,payload:o});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("error",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("/api");case 3:return n=e.sent,e.next=6,n.data;case 6:return a=e.sent,e.next=9,t({type:s.d,payload:a.slice(0,3)});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}},253:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(1),r=n(0),s=n(17),i=n(45),o=n(190),l=n(189),d=n.n(l);t.default=Object(i.b)((function(e){return{post:e.posts.latestPost}}),{fetchLatest:o.b})((function(e){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),i=n[0],o=n[1];Object(r.useEffect)((function(){d.a.init({duration:500,once:!0}),e.fetchLatest().then((function(e){return o(!1)}))}),[]);var l=e.post;return i?Object(c.jsx)("div",{className:"my-5 text-center lead",children:"Loading..."}):Object(c.jsxs)("div",{className:"container-fluid px-0",children:[Object(c.jsxs)("div",{className:"container my-6 my-lg-8 blog-latest",children:[Object(c.jsx)("h3",{className:"font-weight-bold mb-4",children:"Latest blog post"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 mb-3 mb-lg-5",children:Object(c.jsx)("img",{className:"w-100",src:l.image,alt:l.heading})}),Object(c.jsxs)("div",{className:"col-lg-6",children:[Object(c.jsx)("h4",{className:"font-weight-bold",children:l.heading}),Object(c.jsx)("p",{children:l.intro}),Object(c.jsx)(s.Link,{to:"/blog-article/".concat(l.heading),children:Object(c.jsx)("button",{className:"btn btn-outline-primary",children:"Read more"})},l.id)]})]})]}),Object(c.jsx)("div",{className:"blog-news",style:{background:"url('/images/lmj001.jpg') no-repeat"},children:Object(c.jsx)("div",{className:"overlay w-100 h-100 py-6 py-lg-8",children:Object(c.jsxs)("div",{className:"container d-flex flex-column h-100 justify-content-center align-items-start",children:[Object(c.jsx)("h2",{className:"text-light font-weight-bold",children:"Blog News"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-4 my-3",children:Object(c.jsxs)("div",{className:"card border-0 shadow h-100","data-aos":"fade-up",children:[Object(c.jsx)("img",{className:"card-img-top",src:"/images/lmj013.JPG",alt:"LMJ receiving certificate"}),Object(c.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(c.jsx)("h4",{className:"card-title font-weight-bold",children:"Politics"}),Object(c.jsx)("p",{className:"card-text",children:"Praying and hoping for change is not enough to birth the new Nigeria we are expecting. It is important that we take proactive actions as youths and get involved in national service. As a politician committed to serving the community, my engagement is to ensure a new Nigeria we can all be proud of is born."}),Object(c.jsx)("div",{className:"mb-0",children:Object(c.jsx)(s.Link,{to:"/blog",className:"bg-dark text-light btn more",children:"Read more in Blog"})})]})]})}),Object(c.jsx)("div",{className:"col-lg-4 my-3",children:Object(c.jsxs)("div",{className:"card border-0 shadow h-100","data-aos":"fade-up",children:[Object(c.jsx)("img",{className:"card-img-top",src:"/images/lmj-on-farm.jpg",alt:"Farmland"}),Object(c.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(c.jsx)("h4",{className:"card-title font-weight-bold",children:"Agriculture"}),Object(c.jsx)("p",{className:"card-text",children:"One of the core needs of man is food. By providing food for the nation, farmers do not only reduce the mortality rate but also equip the citizens with the energy to do their respective work effectively through the provision of farm products. I am glad to be part of this noble profession."}),Object(c.jsx)("div",{className:"mb-0",children:Object(c.jsx)(s.Link,{to:"/blog",className:"bg-dark text-light btn more",children:"Read more in Blog"})})]})]})}),Object(c.jsx)("div",{className:"col-lg-4 my-3",children:Object(c.jsxs)("div",{className:"card border-0 shadow h-100","data-aos":"fade-up",children:[Object(c.jsx)("img",{className:"card-img-top",src:"/images/lmj012.JPG",alt:"LMJ with primary school pupils"}),Object(c.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(c.jsx)("h4",{className:"card-title font-weight-bold",children:"Philanthropy"}),Object(c.jsx)("p",{className:"card-text",children:"I do not see giving to others as a thing only specific people can do. If a nation will grow, it is important the citizens learn to give back to the community. Everybody may not have cash or material thing to give. However, it is important to note that everybody has something to offer towards the growth and development of the community. I do not only believe this, but I practice it also."}),Object(c.jsx)("div",{className:"mb-0",children:Object(c.jsx)(s.Link,{to:"/blog",className:"bg-dark text-light btn more",children:"Read more in Blog"})})]})]})})]})]})})})]})}))}}]);
//# sourceMappingURL=18.677a8e83.chunk.js.map