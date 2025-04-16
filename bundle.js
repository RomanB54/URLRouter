(()=>{"use strict";var e={56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],u=o.base?i[0]+o.base:i[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=r(h,o);o.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=t(a[s]);n[c].references--}for(var i=o(e,r),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=i}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},208:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),s=t.n(a)()(r());s.push([e.id,"body {\n  background-color: #f5fffa;\n}\n",""]);const c=s},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),s=t.n(a),c=t(659),i=t.n(c),u=t(56),l=t.n(u),d=t(540),p=t.n(d),h=t(113),f=t.n(h),v=t(208),y={};y.styleTagTransform=f(),y.setAttributes=l(),y.insert=i().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=p(),r()(v.A,y),v.A&&v.A.locals&&v.A.locals;const g=document.querySelector(".app");g&&(g.innerHTML=' \n    <header>\n      <h1>Client-side URL change examples</h1>\n      <nav style="display: flex; justify-content: space-around">\n        <a href="/home">Home</a>\n        <a href="/contacts">Contacts</a>\n        <a href="/about">About</a>\n        <a href="/about/us">About / Us</a>\n        <a href="/login">Login</a>\n      </nav>\n    </header>\n    <article class="content"></article>\n    ');const m=new class{routes=[];currentRoute=null;constructor(e=!0){this.useHistoryAPI=e;const n=this.handleRoute.bind(this);this.useHistoryAPI?window.addEventListener("popstate",n):window.addEventListener("hashchange",n),this.handleRoute()}addRoute(e){this.routes.push(e)}async navigate(e){this.currentRoute&&this.currentRoute.onLeave&&await this.currentRoute.onLeave(),this.useHistoryAPI?history.pushState({},"",e):window.location.hash=e,await this.handleRoute()}async handleRoute(){const e=this.useHistoryAPI?window.location.pathname:window.location.hash.slice(1),n=this.routes.find((n=>n.path instanceof RegExp?n.path.test(e):n.path===e)),t=document.querySelector(".content");n&&t&&(n.onBeforeEnter&&await n.onBeforeEnter(),this.currentRoute=n,t.innerHTML=n.render(),n.onEnter&&await n.onEnter())}};document.querySelectorAll("nav a").forEach((e=>{e.href="/URLRouter/"+e.pathname})),m.addRoute({path:"/home",render:()=>"<h1>Главная страница</h1><p>Главная!</p>",onBeforeEnter:async()=>{console.log("Before entering Home")},onEnter:async()=>{console.log("Entered Home")},onLeave:async()=>{console.log("Leaving Home")}}),m.addRoute({path:"/contacts",render:()=>"<h1>Контакты</h1><p>Наши контакты.</p>",onBeforeEnter:async()=>{console.log("Before entering Contacts")},onEnter:async()=>{console.log("Entered Contacts")},onLeave:async()=>{console.log("Leaving Contacts")}}),m.addRoute({path:"/about",render:()=>"<h1>О нас</h1><p>Это о нас.</p>",onBeforeEnter:async()=>{console.log("Before entering About")},onEnter:async()=>{console.log("Entered About")},onLeave:async()=>{console.log("Leaving About")}}),m.addRoute({path:"/about/us",render:()=>"<h1>О нас2</h1><p>Это о нас2.</p>",onBeforeEnter:async()=>{console.log("Before entering About / Us")},onEnter:async()=>{console.log("Entered About / Us")},onLeave:async()=>{console.log("Leaving About / Us")}}),m.addRoute({path:"/login",render:()=>"<h1>Авторизация</h1><p>Авторизация</p>",onBeforeEnter:async()=>{console.log("Before entering Login")},onEnter:async()=>{console.log("Entered Login")},onLeave:async()=>{console.log("Leaving Login")}}),document.querySelectorAll("nav a").forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault();const t=e.getAttribute("href")||"";m.navigate(t)}))}))})();