(this.webpackJsonplmj=this.webpackJsonplmj||[]).push([[19],{190:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d}));var c=n(191),a=n.n(c),i=n(193),s=n(23),r=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api").then((function(e){return e.json()})).then((function(e){t({type:s.c,payload:e})})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},o=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api").then((function(e){return e.json()})).then((function(e){t({type:s.b,payload:e[0]})})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api").then((function(e){return e.json()})).then((function(t){return t.find((function(t){return t.heading===e}))})).then((function(e){n({type:s.a,payload:e})})).catch((function(e){return console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api").then((function(e){return e.json()})).then((function(e){t({type:s.d,payload:e.slice(0,3)})})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},255:function(e,t,n){"use strict";n.r(t);var c=n(30),a=n(1),i=n(0),s=n(17),r=n(45),o=n(190),l=n(189),d=n.n(l);t.default=Object(r.b)((function(e){return{post:e.posts.latestPost}}),{fetchLatest:o.b})((function(e){var t=Object(i.useState)(!0),n=Object(c.a)(t,2),r=n[0],o=n[1];Object(i.useEffect)((function(){r&&(d.a.init({duration:500,once:!0}),e.fetchLatest().then((function(){return o(!1)})))}),[r]);var l=e.post;return r?Object(a.jsx)("div",{className:"my-5 text-center lead",children:"Loading..."}):Object(a.jsxs)("div",{className:"container-fluid px-0",children:[Object(a.jsxs)("div",{className:"container my-6 my-lg-8 blog-latest",children:[Object(a.jsx)("h3",{className:"font-weight-bold mb-4",children:"Latest blog post"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6 mb-3 mb-lg-5",children:Object(a.jsx)("img",{className:"w-100",src:l.image,alt:l.heading})}),Object(a.jsxs)("div",{className:"col-lg-6",children:[Object(a.jsx)("h4",{className:"font-weight-bold",children:l.heading}),Object(a.jsx)("p",{children:l.intro}),Object(a.jsx)(s.Link,{to:"/blog-article/".concat(l.heading),children:Object(a.jsx)("button",{className:"btn btn-outline-primary",children:"Read more"})},l.id)]})]})]}),Object(a.jsx)("div",{className:"blog-news",style:{background:"url('/images/lmj001.jpg') no-repeat"},children:Object(a.jsx)("div",{className:"overlay w-100 h-100 py-6 py-lg-8",children:Object(a.jsxs)("div",{className:"container d-flex flex-column h-100 justify-content-center align-items-start",children:[Object(a.jsx)("h2",{className:"text-light font-weight-bold",children:"Blog News"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-4 my-3",children:Object(a.jsxs)("div",{className:"card border-0 shadow h-100","data-aos":"fade-up",children:[Object(a.jsx)("img",{className:"card-img-top",src:"/images/lmj013.JPG",alt:"LMJ receiving certificate"}),Object(a.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(a.jsx)("h4",{className:"card-title font-weight-bold",children:"Politics"}),Object(a.jsx)("p",{className:"card-text",children:"Praying and hoping for change is not enough to birth the new Nigeria we are expecting. It is important that we take proactive actions as youths and get involved in national service. As a politician committed to serving the community, my engagement is to ensure a new Nigeria we can all be proud of is born."}),Object(a.jsx)("div",{className:"mb-0",children:Object(a.jsx)(s.Link,{to:"/blog",className:"bg-dark text-light btn more",children:"Read more in Blog"})})]})]})}),Object(a.jsx)("div",{className:"col-lg-4 my-3",children:Object(a.jsxs)("div",{className:"card border-0 shadow h-100","data-aos":"fade-up",children:[Object(a.jsx)("img",{className:"card-img-top",src:"/images/lmj-on-farm.jpg",alt:"Farmland"}),Object(a.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(a.jsx)("h4",{className:"card-title font-weight-bold",children:"Agriculture"}),Object(a.jsx)("p",{className:"card-text",children:"One of the core needs of man is food. By providing food for the nation, farmers do not only reduce the mortality rate but also equip the citizens with the energy to do their respective work effectively through the provision of farm products. I am glad to be part of this noble profession."}),Object(a.jsx)("div",{className:"mb-0",children:Object(a.jsx)(s.Link,{to:"/blog",className:"bg-dark text-light btn more",children:"Read more in Blog"})})]})]})}),Object(a.jsx)("div",{className:"col-lg-4 my-3",children:Object(a.jsxs)("div",{className:"card border-0 shadow h-100","data-aos":"fade-up",children:[Object(a.jsx)("img",{className:"card-img-top",src:"/images/lmj012.JPG",alt:"LMJ with primary school pupils"}),Object(a.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(a.jsx)("h4",{className:"card-title font-weight-bold",children:"Philanthropy"}),Object(a.jsx)("p",{className:"card-text",children:"I do not see giving to others as a thing only specific people can do. If a nation will grow, it is important the citizens learn to give back to the community. Everybody may not have cash or material thing to give. However, it is important to note that everybody has something to offer towards the growth and development of the community. I do not only believe this, but I practice it also."}),Object(a.jsx)("div",{className:"mb-0",children:Object(a.jsx)(s.Link,{to:"/blog",className:"bg-dark text-light btn more",children:"Read more in Blog"})})]})]})})]})]})})})]})}))}}]);
//# sourceMappingURL=19.f50b3e9b.chunk.js.map