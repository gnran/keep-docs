(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{499:function(t,e,i){},521:function(t,e,i){"use strict";var r=i(499);i.n(r).a},540:function(t,e,i){"use strict";i.r(e);i(36),i(67),i(69),i(19),i(68),i(46);var r=i(27),n={props:["tree"],methods:{shorten:function(t){var e=t.split(" ");return e=e.length>20?e.slice(0,20).join(" ")+"...":e.join(" "),this.md(e)}},computed:{linkPrevNext:function(){var t=this;if(this.tree){var e={};return function i(n){return n.forEach((function(s,l){var a=s.children;if(a){var o=Object(r.findIndex)(a,["regularPath",t.$page.path]);return o>=0&&a[o-1]&&(e.prev=a[o-1]),o>=0&&a[o+1]?e.next=a[o+1]:o>=0&&n[l+1]&&n[l+1].children&&(e.next=Object(r.find)(n[l+1].children,(function(t){return t.frontmatter&&!1!==t.frontmatter.order}))),i(s.children)}}))}(this.tree),e}}}},s=(i(521),i(0)),l=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"links"},[i("div",{staticClass:"links__wrapper"},[t.$page.frontmatter.prev||t.linkPrevNext&&t.linkPrevNext.prev&&t.linkPrevNext.prev.frontmatter&&!1!==t.linkPrevNext.prev.frontmatter.order?i("div",{staticClass:"links__container"},[i("router-link",{staticClass:"links__item links__item__left",attrs:{to:t.$page.frontmatter.prev||t.linkPrevNext.prev.regularPath}},[i("div",{staticClass:"links__item__icon"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 64 64"}},[i("title",[t._v("arrow-right")]),i("g",{attrs:{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2"}},[i("line",{attrs:{fill:"none","stroke-miterlimit":"10",x1:"61",y1:"32",x2:"3",y2:"32","stroke-linecap":"butt"}}),i("polyline",{attrs:{fill:"none","stroke-miterlimit":"10",points:"21,14 3,32 21,50 "}})])])]),i("div",[i("div",{staticClass:"links__label"},[t._v("Previous")]),i("div",{staticClass:"links__item__title"},[t._v(t._s(t.$page.frontmatter.prev||t.linkPrevNext.prev.title))]),t.linkPrevNext.prev.frontmatter.description?i("div",{staticClass:"links__item__desc",domProps:{innerHTML:t._s(t.shorten(t.linkPrevNext.prev.frontmatter.description))}}):t._e()])])],1):t._e()]),i("div",{staticClass:"links__wrapper"},[t.$page.frontmatter.next||t.linkPrevNext&&t.linkPrevNext.next&&t.linkPrevNext.next.frontmatter&&!1!==t.linkPrevNext.next.frontmatter.order?i("div",{staticClass:"links__container"},[i("router-link",{staticClass:"links__item links__item__right",attrs:{to:t.$page.frontmatter.next||t.linkPrevNext.next.regularPath}},[i("div",[i("div",{staticClass:"links__label"},[t._v("Next")]),i("div",{staticClass:"links__item__title"},[t._v(t._s(t.$page.frontmatter.next||t.linkPrevNext.next.title))]),t.linkPrevNext.next.frontmatter.description?i("div",{staticClass:"links__item__desc",domProps:{innerHTML:t._s(t.shorten(t.linkPrevNext.next.frontmatter.description))}}):t._e()]),i("div",{staticClass:"links__item__icon"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 64 64"}},[i("title",[t._v("arrow-right")]),i("g",{attrs:{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2"}},[i("line",{attrs:{fill:"none","stroke-miterlimit":"10",x1:"3",y1:"32",x2:"61",y2:"32","stroke-linecap":"butt"}}),i("polyline",{attrs:{fill:"none","stroke-miterlimit":"10",points:"43,14 61,32 43,50 "}})])])])])],1):t._e()])])])}),[],!1,null,"6bb78c25",null);e.default=l.exports}}]);