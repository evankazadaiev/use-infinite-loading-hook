(this["webpackJsonpreact-use-infinite-scroll-example"]=this["webpackJsonpreact-use-infinite-scroll-example"]||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},12:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);n(12);var r,c=n(0),a=n.n(c),u=n(6),o=n.n(u),i=n(1),s=n.n(i),l=n(7),f=n(4),m=n(5),b=function(e){return new Promise((function(t){return setTimeout(t,e)}))},p=function(e,t){return{next:!![].concat(r).slice(1===e?0:(e-1)*t,(e-1)*t+t),results:[].concat(r).slice(1===e?0:(e-1)*t,(e-1)*t+t)}},d=function(){var e=Object(f.a)(s.a.mark((function e(t,n){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=10;break}return e.next=3,fetch("https://jsonplaceholder.typicode.com/photos");case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",p(t,n));case 10:return e.next=12,b(2e3);case 12:return e.abrupt("return",p(t,n));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(e){var t=e.callback,n=e.hasMore,r=e.startPage,a=void 0===r?1:r,u=e.offset,o=void 0===u?250:u,i=e.direction,s=Object(c.useRef)(null),l=Object(c.useState)(!1),f=l[0],m=l[1],b=Object(c.useRef)(null),p=Object(c.useState)(!1),d=p[0],j=p[1],v=Object(c.useState)(a),h=v[0],O=v[1],x=Object(c.useCallback)((function(e){e&&(s.current=e)}),[]),E=Object(c.useCallback)((function(e){e&&(b.current=e)}),[]);return Object(c.useEffect)((function(){!function(){try{Promise.resolve(function(e){try{return j(!0),Promise.resolve(t(e)).then((function(){j(!1)}))}catch(n){return Promise.reject(n)}}(h)).then((function(){"top"===i&&b.current.scrollTo(0,o)}))}catch(e){return Promise.reject(e)}}()}),[h]),Object(c.useLayoutEffect)((function(){if(n){var e=s.current,t=new IntersectionObserver((function(e){try{return e.forEach((function(e){e.isIntersecting&&!d&&O((function(e){return e+1}))})),Promise.resolve()}catch(t){return Promise.reject(t)}}),{root:null,rootMargin:"bottom"===i?"0px 0px "+o+"px 0px":o+"px 0px 0px 0px"});return t.observe(e),function(){t.disconnect()}}}),[s,n,d]),Object(c.useLayoutEffect)((function(){"top"!==i||f||b.current.scrollIntoView({block:"end",inline:"nearest"})})),Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){return m(!0)})),function(){return window.removeEventListener("scroll",(function(){return m(!0)}))}}),[]),[x,E,d]},v=n(9),h=n.n(v),O=a.a.forwardRef((function(e,t){return a.a.createElement("div",{ref:t,className:"loader"},e.children)})),x=n(10),E=function(e){var t=e.url,n=e.name,r=e.thumbnailUrl;return a.a.createElement("div",{className:"gallery__item gallery__item--".concat(n)},a.a.createElement(x.LazyLoadImage,{alt:"img",visibleByDefault:!0,effect:"blur",className:"gallery__img",src:t,placeholderSrc:r}))},y=(n(21),function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(null),o=Object(m.a)(u,2),i=o[0],b=o[1],p=j({hasMore:i,offset:100,direction:"bottom",callback:function(e){return new Promise(function(){var t=Object(f.a)(s.a.mark((function t(n){var c,a,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e,100);case 2:c=t.sent,a=c.results,u=c.next,r((function(e){return e?[].concat(Object(l.a)(e),Object(l.a)(a)):a})),b(u),n(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}),v=Object(m.a)(p,3),x=v[0],y=v[1],w=v[2];return a.a.createElement("div",{ref:y},a.a.createElement("ul",{className:"gallery"},n.map((function(e,t){return a.a.createElement(E,Object.assign({},e,{key:t}))}))),a.a.createElement(O,{ref:x},w&&a.a.createElement(h.a,{color:"goldenrod",size:"64px",thickness:2})))}),w=(n(22),function(){return a.a.createElement(y,null)});o.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.6238fb0e.chunk.js.map