(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"02sp":function(e){e.exports=JSON.parse('{"data":{"kontentItemNew1":{"elements":{"section__a__content":{"images":[{"url":"https://assets-us-01.kc-usercontent.com:443/71fb2b76-0e25-00af-1b74-6fa6edc2d73d/a1738584-3967-4e9f-b87e-e0173f3890e3/Degree_NYITCOM_OsteopathicMedicineDO_Hero.jpg"}],"value":"<figure data-asset-id=\\"b5bf1aa5-69d2-4f0b-ba1d-fc0fb8935d7d\\" data-image-id=\\"b5bf1aa5-69d2-4f0b-ba1d-fc0fb8935d7d\\"><img src=\\"https://assets-us-01.kc-usercontent.com:443/71fb2b76-0e25-00af-1b74-6fa6edc2d73d/a1738584-3967-4e9f-b87e-e0173f3890e3/Degree_NYITCOM_OsteopathicMedicineDO_Hero.jpg\\" data-asset-id=\\"b5bf1aa5-69d2-4f0b-ba1d-fc0fb8935d7d\\" data-image-id=\\"b5bf1aa5-69d2-4f0b-ba1d-fc0fb8935d7d\\" alt=\\"\\"></figure>\\n<h1>Osteopathic Medicine, D.O.</h1>\\n<p>NYITCOM’s Osteopathic Medicine D.O. program trains physicians for a lifetime of learning and practice based upon the integration of evidence-based knowledge, critical thinking, and the tenets of&nbsp;<a href=\\"https://www.aacom.org/become-a-doctor/about-osteopathic-medicine\\">osteopathic principles and practice</a>.</p>\\n<p><code>GET INFO</code></p>\\n<p><code>VISIT US</code></p>\\n<p><code>APPLY NOW</code></p>"}}}}}')},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";n("pIFo"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},AphP:function(e,t,n){"use strict";var r=n("XKFU"),o=n("S/j/"),i=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=o(this),n=i(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},CgaS:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("VRzm"),n("Btvt");var r=n("xTJ+"),o=n("MLWZ"),i=n("9rSQ"),a=n("UnBK"),s=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},EbHT:function(e,t,n){"use strict";n.r(t);var r=n("02sp"),o=n("q1tI"),i=n.n(o),a=n("vDqi"),s=n.n(a);t.default=function(){var e=r.data,t=Object(o.useState)({}),n=t[0],a=t[1],c=Object(o.useState)(!0),u=c[0],f=c[1],l=function(){f(!0),s.a.get("https://deliver.kontent.ai/71fb2b76-0e25-00af-1b74-6fa6edc2d73d/items/untitled_content_item_0b151c8").then((function(e){a(e.data.item),f(!1)}))};Object(o.useEffect)((function(){l()}),[]);var d=e.kontentItemNew1.elements.section__a__content;return i.a.createElement("div",{className:"container mx-auto"},i.a.createElement("section",{className:"section__a mb-10",dangerouslySetInnerHTML:{__html:d.value}}),i.a.createElement("p",{className:"bg-red-500 text-white p-5 text-lg mb-4"},"↑ data pulled from kontent api at build time (static data) ↑"),i.a.createElement("p",{className:"bg-blue-500 text-white p-5 text-lg mb-4"},"↓ data pulled from kontent api at run time (dynamic data) ↓ ",i.a.createElement("a",{style:{cursor:"pointer"},onClick:l},"Fetch Again")),i.a.createElement("div",{style:{position:"relative"},className:u?"spinner":""},n&&n.elements&&i.a.createElement("div",{className:u?"":"fade-in"},i.a.createElement("section",{className:"section__b mb-16 gap-10 grid grid-cols-2 mb-16 section__b"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__b__content1.value}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__b__content2.value}})),i.a.createElement("section",{className:"section__c grid-cols-3 grid mb-16 gap-10"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__c__card1.value}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__c__card2.value}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__c__card3.value}})),i.a.createElement("section",{className:"section__d mb-16",dangerouslySetInnerHTML:{__html:n.elements.section__d__content.value}}),i.a.createElement("section",{className:"section__e mb-16",dangerouslySetInnerHTML:{__html:n.elements.section__e__content.value}}),i.a.createElement("section",{className:"section__f mb-16",dangerouslySetInnerHTML:{__html:n.elements.section__f__content.value}}),i.a.createElement("section",{className:"section__g mb-16"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__g__title.value}}),i.a.createElement("div",{className:"gap-10 grid grid-cols-2"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__g__card1.value}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.elements.section__g__card2.value}}))))))}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){n("8+KV"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("xTJ+"),o=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n("tQ2B")),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";n("V+eJ"),n("jqX0"),n("8+KV"),n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo");var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},OH9c:function(e,t,n){"use strict";n("f3/d"),n("AphP"),e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";n("OG14"),n("pIFo");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),i=n("hswa").f,a=n("kJMx").f,s=n("quPj"),c=n("C/va"),u=r.RegExp,f=u,l=u.prototype,d=/a/g,p=/a/g,h=new u(d)!==d;if(n("nh4g")&&(!h||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,u(d)!=d||u(p)==p||"/a/i"!=u(d,"i")})))){u=function(e,t){var n=this instanceof u,r=s(e),i=void 0===t;return!n&&r&&e.constructor===u&&i?e:o(h?new f(r&&!i?e.source:e,t):f((r=e instanceof u)?e.source:e,r&&i?c.call(e):t),n?this:l,u)};for(var m=function(e){e in u||i(u,e,{configurable:!0,get:function(){return f[e]},set:function(t){f[e]=t}})},g=a(f),v=0;g.length>v;)m(g[v++]);l.constructor=u,u.prototype=l,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("8+KV");var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))},UnBK:function(e,t,n){"use strict";n("VRzm"),n("Btvt"),n("8+KV");var r=n("xTJ+"),o=n("xAGQ"),i=n("Lmem"),a=n("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},endd:function(e,t,n){"use strict";function r(e){this.message=e}n("a1Th"),n("h7Nl"),n("Btvt"),r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";n("eM6i"),n("Oyvg"),n("SRfc");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,n){"use strict";var r=n("2SVd"),o=n("5oMp");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?o.call(this):"Invalid Date"}))},"jfS+":function(e,t,n){"use strict";n("VRzm"),n("Btvt");var r=n("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},jqX0:function(e,t,n){var r=n("XKFU"),o=n("jtBr");r(r.P+r.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},jtBr:function(e,t,n){"use strict";var r=n("eeVq"),o=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!r((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+a(e.getUTCMonth()+1)+"-"+a(e.getUTCDate())+"T"+a(e.getUTCHours())+":"+a(e.getUTCMinutes())+":"+a(e.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},tQ2B:function(e,t,n){"use strict";n("8+KV"),n("V+eJ"),n("VRzm"),n("Btvt");var r=n("xTJ+"),o=n("Rn+g"),i=n("MLWZ"),a=n("g7np"),s=n("w0Vi"),c=n("OTTw"),u=n("LYNF");e.exports=function(e){return new Promise((function(t,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,f,r),p=null}},p.onabort=function(){p&&(f(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n("eqyj"),y=(e.withCredentials||c(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),f(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";n("Tze0"),n("V+eJ"),n("KKXr"),n("8+KV");var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},xAGQ:function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("HSsa"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zuR4:function(e,t,n){"use strict";n("VRzm"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3");var r=n("xTJ+"),o=n("HSsa"),i=n("CgaS"),a=n("SntB");function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n("JEQr"));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-page-2-js-d6a8fde9c0f032335d66.js.map