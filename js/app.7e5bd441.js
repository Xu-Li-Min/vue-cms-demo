(function(e){function n(n){for(var r,u,a=n[0],i=n[1],d=n[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(p.length)p.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-117aafc2":"da3131e9","chunk-0fc03156":"53080f42","chunk-71d1eaa4":"1619ba79","chunk-f8d09ee0":"9559e8b5","chunk-1b834bf8":"fe420ba7","chunk-2d20ec43":"7b458ee7","chunk-4ec480d8":"20692c40","chunk-5d0d3202":"d9613998","chunk-5e824854":"971d4ced","chunk-883abc04":"70796fa4"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var d=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/vue-cms-demo/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),o=t("bc3a"),c=t.n(o),u=t("2106"),a=t.n(u),i=t("8a14"),d=(t("fe26"),t("cd74"),t("7bb1")),l=t("3aa8"),f=t("cbdf"),p=t("9457");t("ac1f"),t("5319"),t("b680");function h(e){var n=parseInt(e,10);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,t){return n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function s(e){var n=new Date(1e3*e);return n.toLocaleDateString()}function b(e,n,t,o,c,u){var a=Object(r["B"])("router-view");return Object(r["u"])(),Object(r["e"])(a)}var m={name:"App",created:function(){console.log("https://vue3-course-api.hexschool.io/","c-api")}};t("cb47");m.render=b;var v=m,k=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),g=[{path:"/",component:function(){return t.e("chunk-883abc04").then(t.bind(null,"a55b"))}},{path:"/login",component:function(){return t.e("chunk-883abc04").then(t.bind(null,"a55b"))}},{path:"/dashboard",component:function(){return t.e("chunk-1b834bf8").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([t.e("chunk-117aafc2"),t.e("chunk-71d1eaa4")]).then(t.bind(null,"e6dc"))}},{path:"orders",component:function(){return Promise.all([t.e("chunk-117aafc2"),t.e("chunk-0fc03156")]).then(t.bind(null,"159d"))}},{path:"coupons",component:function(){return Promise.all([t.e("chunk-117aafc2"),t.e("chunk-f8d09ee0")]).then(t.bind(null,"f329"))}}]},{path:"/user",component:function(){return t.e("chunk-2d20ec43").then(t.bind(null,"b186"))},children:[{path:"userProductList",component:function(){return t.e("chunk-5e824854").then(t.bind(null,"8a5e"))}},{path:"product/:productId",component:function(){return t.e("chunk-4ec480d8").then(t.bind(null,"f962"))}},{path:"checkOrder/:orderId",component:function(){return t.e("chunk-5d0d3202").then(t.bind(null,"a92a"))}}]}],y=Object(k["a"])({history:Object(k["b"])(),routes:g}),O=y;Object.keys(l["a"]).forEach((function(e){Object(d["e"])(e,l["a"][e])})),Object(d["d"])({generateMessage:Object(f["a"])({zh_TW:p}),validateOnInput:!0}),Object(f["b"])("zh_TW");var j=Object(r["d"])(v);j.use(a.a,c.a),j.use(O),j.config.globalProperties.$filter={currency:h,date:s},j.component("Loading",i["a"]),j.component("Form",d["c"]),j.component("Field",d["b"]),j.component("ErrorMessage",d["a"]),j.mount("#app")},a64f:function(e,n,t){},cb47:function(e,n,t){"use strict";t("a64f")}});
//# sourceMappingURL=app.7e5bd441.js.map