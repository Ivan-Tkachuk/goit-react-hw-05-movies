"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{1134:function(e,t,n){n.r(t);var r=n(3433),a=n(9439),u=n(2791),c=n(1087),o=n(7689),i=n(367),s=n(5984),p=n(7596),f=(n(5462),n(184));t.default=function(){var e,t=(0,u.useState)([]),n=(0,a.Z)(t,2),l=n[0],h=n[1],v=(0,c.lr)(),d=(0,a.Z)(v,2),m=d[0],g=d[1],x=null!==(e=m.get("query"))&&void 0!==e?e:"",y=(0,o.TH)();(0,u.useEffect)((function(){try{(0,i.q)(x).then((function(e){h((0,r.Z)(e.results)),console.log(e.results)}))}catch(e){console.log("error: ",e)}(0,i.q)()}),[x]),console.log(x);return(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;if(""===t.elements.query.value)return p.Am.warning("Please, enter movie name"),g({});t.elements.query.value&&l&&p.Am.warning("There isn't result with name ".concat(x)),g({query:t.elements.query.value}),t.reset()},children:[(0,f.jsx)("input",{type:"text",name:"query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:l.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:"".concat(e.id),state:{from:y},children:e.title})},(0,s.x0)())}))}),(0,f.jsx)(p.Ix,{autoClose:3e3})]})}},367:function(e,t,n){n.d(t,{M1:function(){return p},d0:function(){return s},dT:function(){return i},q:function(){return l},tx:function(){return f}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1243),o="148c9397aa3eec308089adaec56ced74",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/",e.next=3,c.Z.get("".concat("https://api.themoviedb.org/3/","trending/movie/day?&api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/",e.next=3,c.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?&api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/",e.next=3,c.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"/credits?&api_key=").concat(o,"&language=en-USpage=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/",e.next=3,c.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"/reviews?&api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/",e.next=3,c.Z.get("".concat("https://api.themoviedb.org/3/","/search/movie?&api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=134.eacdecd4.chunk.js.map