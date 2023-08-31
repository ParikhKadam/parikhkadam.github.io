(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[118],{9361:function(e,t){"use strict";t.Z=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},4184:function(e,t){var r; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},8045:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9361).Z,o=r(4941).Z,i=r(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r,u=e.src,l=e.sizes,m=e.unoptimized,v=void 0!==m&&m,w=e.priority,S=void 0!==w&&w,E=e.loading,A=e.lazyRoot,z=e.lazyBoundary,L=e.className,C=e.quality,M=e.width,R=e.height,P=e.style,I=e.objectFit,Z=e.objectPosition,N=e.onLoadingComplete,D=e.placeholder,T=void 0===D?"empty":D,W=e.blurDataURL,B=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=c.useContext(h.ImageConfigContext),V=c.useMemo(function(){var e=g||q||f.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:r})},[q]),G=l?"responsive":"intrinsic";"layout"in B&&(B.layout&&(G=B.layout),delete B.layout);var H=j;if("loader"in B){if(B.loader){var F=B.loader;H=function(e){e.config;var t=s(e,["config"]);return F(t)}}delete B.loader}var U="";if(function(e){var t;return"object"==typeof e&&(k(e)||void 0!==e.src)}(u)){var Q=k(u)?u.default:u;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(W=W||Q.blurDataURL,U=Q.src,(!G||"fill"!==G)&&(R=R||Q.height,M=M||Q.width,!Q.height||!Q.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}u="string"==typeof u?u:U;var J=!S&&("lazy"===E||void 0===E);(u.startsWith("data:")||u.startsWith("blob:"))&&(v=!0,J=!1),y.has(u)&&(J=!1),V.unoptimized&&(v=!0);var X=o(c.useState(!1),2),Y=X[0],$=X[1],K=o(p.useIntersection({rootRef:void 0===A?null:A,rootMargin:z||"200px",disabled:!J}),3),ee=K[0],et=K[1],er=K[2],en=!J||et,eo={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ei={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,eu=_(M),el=_(R),es=_(C),ec=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:Z}),ed="blur"!==T||Y?{}:{backgroundSize:I||"cover",backgroundPosition:Z||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===G)eo.display="block",eo.position="absolute",eo.top=0,eo.left=0,eo.bottom=0,eo.right=0;else if(void 0!==eu&&void 0!==el){var ef=el/eu,ep=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===G?(eo.display="block",eo.position="relative",ea=!0,ei.paddingTop=ep):"intrinsic"===G?(eo.display="inline-block",eo.position="relative",eo.maxWidth="100%",ea=!0,ei.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(eu,"%27%20height=%27").concat(el,"%27/%3e")):"fixed"===G&&(eo.display="inline-block",eo.position="relative",eo.width=eu,eo.height=el)}var eh={src:b,srcSet:void 0,sizes:void 0};en&&(eh=x({config:V,src:u,unoptimized:v,layout:G,width:eu,quality:es,sizes:l,loader:H}));var em=u,ev="imagesizes";ev="imageSizes";var eg=(n(r={},"imageSrcSet",eh.srcSet),n(r,ev,eh.sizes),n(r,"crossOrigin",B.crossOrigin),r),ey=c.default.useLayoutEffect,eb=c.useRef(N),ew=c.useRef(u);c.useEffect(function(){eb.current=N},[N]),ey(function(){ew.current!==u&&(er(),ew.current=u)},[er,u]);var ek=a({isLazy:J,imgAttributes:eh,heightInt:el,widthInt:eu,qualityInt:es,layout:G,className:L,imgStyle:ec,blurStyle:ed,loading:E,config:V,unoptimized:v,placeholder:T,loader:H,srcString:em,onLoadingCompleteRef:eb,setBlurComplete:$,setIntersection:ee,isVisible:en,noscriptSizes:l},B);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:eo},ea?c.default.createElement("span",{style:ei},t?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,c.default.createElement(O,Object.assign({},ek))),S?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+eh.src+eh.srcSet+eh.sizes,rel:"preload",as:"image",href:eh.srcSet?void 0:eh.src},eg))):null)};var a=r(6495).Z,u=r(2648).Z,l=r(1598).Z,s=r(7273).Z,c=l(r(7294)),d=u(r(5443)),f=r(9309),p=r(7190),h=r(9977);r(3794);var m=r(2392);function v(e){return"/"===e[0]?e.slice(1):e}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t.path).concat(v(r))),a=i.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString()),i.href}],["cloudinary",function(e){var t,r=e.config,n=e.src,o=e.width,i=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(r.path).concat(i).concat(v(n))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(v(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function k(e){return void 0!==e.default}function x(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.layout,a=e.width,u=e.quality,l=e.sizes,s=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(e,t,r,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===r||"responsive"===r)){for(var u=/(^|\s)(1?\d?\d)vw/g,l=[];s=u.exec(n);s)l.push(parseInt(s[2]));if(l.length){var s,c,d=.01*(c=Math).min.apply(c,i(l));return{widths:a.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===r||"responsive"===r?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,l),d=c.widths,f=c.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map(function(e,n){return"".concat(s({config:t,src:r,quality:u,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:s({config:t,src:r,quality:u,width:d[p]})}}function _(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t,r=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(r);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}function S(e,t,r,n,o,i){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===n&&i(!0),null==o?void 0:o.current)){var r=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:r,naturalHeight:a})}}))}var O=function(e){var t=e.imgAttributes,r=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,i=e.className,u=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,h=e.srcString,m=e.config,v=e.unoptimized,g=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,k=e.onLoad,_=e.onError,j=(e.isVisible,e.noscriptSizes),O=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},O,t,{decoding:"async","data-nimg":o,className:i,style:a({},u,l),ref:c.useCallback(function(e){w(e),(null==e?void 0:e.complete)&&S(e,h,o,f,y,b)},[w,h,o,f,y,b,]),onLoad:function(e){S(e.currentTarget,h,o,f,y,b),k&&k(e)},onError:function(e){"blur"===f&&b(!0),_&&_(e)}})),(d||"blur"===f)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},O,x({config:m,src:h,unoptimized:v,layout:o,width:r,quality:n,sizes:j,loader:g}),{decoding:"async","data-nimg":o,style:u,className:i,loading:p}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,r=e.rootRef,s=e.rootMargin,c=e.disabled||!a,d=n(o.useState(!1),2),f=d[0],p=d[1],h=n(o.useState(null),2),m=h[0],v=h[1];return o.useEffect(function(){if(a){if(!c&&!f&&m&&m.tagName){var e,t,n,o,d,h,v;return t=function(e){return e&&p(e)},d=(o=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=u.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),u.set(r,t),t}(n={root:null==r?void 0:r.current,rootMargin:s})).id,h=o.observer,(v=o.elements).set(m,t),h.observe(m),function(){if(v.delete(m),h.unobserve(m),0===v.size){h.disconnect(),u.delete(d);var e=l.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&l.splice(e,1)}}}}else if(!f){var g=i.requestIdleCallback(function(){return p(!0)});return function(){return i.cancelIdleCallback(g)}}},[m,c,s,r,f]),[v,f,o.useCallback(function(){p(!1)},[])]};var o=r(7294),i=r(9311),a="function"==typeof IntersectionObserver,u=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},638:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=a.default,i=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(n(e,Promise)?i.loader=function(){return e}:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=o({},i,e)),(i=o({},i,t)).suspense&&(delete i.ssr,delete i.loading),i.loadableGenerated&&delete(i=o({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,u(r,i);delete i.ssr}return r(i)},t.noSSR=u;var o=r(6495).Z,i=r(2648).Z,a=(i(r(7294)),i(r(4302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294)).default.createContext(null);t.LoadableContext=n},4302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9658).Z,o=r(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,a=(0,r(2648).Z)(r(7294)),u=r(6319),l=r(7294).useSyncExternalStore,s=[],c=[],d=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(function(e){return r.loading=!1,r.loaded=e,e}).catch(function(e){throw r.loading=!1,r.error=e,e}),r}var p=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"==typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},r.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var r=function(){if(!h){var t=new p(e,f);h={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return h.promise()},n=function(){r();var e=a.default.useContext(u.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},o=function(e,t){n();var r=l(h.subscribe,h.getCurrentValue,h.getCurrentValue);return a.default.useImperativeHandle(t,function(){return{retry:h.retry}},[]),a.default.useMemo(function(){var t;return r.loading||r.error?a.default.createElement(f.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:h.retry}):r.loaded?a.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null},[e,r])},s=function(e,t){return n(),a.default.createElement(f.lazy,i({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=a.default.lazy(f.loader));var h=null;if(!d){var m=f.webpack?f.webpack():f.modules;m&&c.push(function(e){var t=!0,n=!1,o=void 0;try{for(var i,a=m[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return r()}}catch(l){n=!0,o=l}finally{try{t||null==a.return||a.return()}finally{if(n)throw o}}})}var v=f.suspense?s:o;return v.preload=function(){return r()},v.displayName="LoadableComponent",a.default.forwardRef(v)}(f,e)}function m(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(function(){if(e.length)return m(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){m(s).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var r=function(){return d=!0,t()};m(c,e).then(r,r)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},5152:function(e,t,r){e.exports=r(638)},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)},1163:function(e,t,r){e.exports=r(387)},9844:function(e,t,r){"use strict";r.d(t,{e:function(){return d}});var n=r(7294);function o(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(t){i(t)}}function u(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,u)}l((n=n.apply(e,t||[])).next())})}function i(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function a(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function l(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function s(e,t,r,n){for(var s=[],d=4;d<arguments.length;d++)s[d-4]=arguments[d];return o(this,void 0,void 0,function(){var d,f,p,h,m,v;return i(this,function(h){switch(h.label){case 0:h.trys.push([0,12,13,14]),f=(d=a(s)).next(),h.label=1;case 1:if(f.done)return[3,11];switch(typeof(p=f.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,r,n,s){return o(this,void 0,void 0,function(){var d;return i(this,function(f){switch(f.label){case 0:var p,h;return p=e.textContent,h=u(t).slice(0),d=l(l([],u(p),!1),[NaN],!1).findIndex(function(e,t){return h[t]!==e}),[4,function(e,t,r,n,l){return o(this,void 0,void 0,function(){var o,s,d,f,p,h,m,v,g,y,b,w,k;return i(this,function(b){switch(b.label){case 0:if(o=t,l){for(s=0,d=1;d<t.length;d++)if(p=(f=u([t[d-1],t[d]],2))[0],(h=f[1]).length>p.length||""===h){s=d;break}o=t.slice(s,t.length)}b.label=1;case 1:b.trys.push([1,6,7,8]),v=(m=a(function(e){var t,r,n,o,u,l,s;return i(this,function(o){switch(o.label){case 0:t=function(e){return i(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},o.label=1;case 1:o.trys.push([1,6,7,8]),n=(r=a(e)).next(),o.label=2;case 2:return n.done?[3,5]:[5,t(n.value)];case 3:o.sent(),o.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return l={error:o.sent()},[3,8];case 7:try{n&&!n.done&&(s=r.return)&&s.call(r)}finally{if(l)throw l.error}return[7];case 8:return[2]}})}(o))).next(),b.label=2;case 2:return v.done?[3,5]:(y="WRITING"===(g=v.value).opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),g.op(e),[4,c(y)]);case 3:b.sent(),b.label=4;case 4:return v=m.next(),[3,2];case 5:return[3,8];case 6:return w={error:b.sent()},[3,8];case 7:try{v&&!v.done&&(k=m.return)&&k.call(m)}finally{if(w)throw w.error}return[7];case 8:return[2]}})})}(e,l(l([],u(function(e,t,r){var n=u(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=n.length),i(this,function(e){switch(e.label){case 0:return r>t?[4,n.slice(0,--r).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(e.textContent,d)),!1),u(function(e,t,r){var n=u(e).slice(0);return void 0===t&&(t=0),void 0===r&&(r=n.length),i(this,function(e){switch(e.label){case 0:return t<r?[4,n.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(t,d)),!1),r,n,s)];case 1:return f.sent(),[2]}})})}(e,p,t,r,n)];case 3:case 5:case 7:return h.sent(),[3,10];case 4:return[4,c(p)];case 6:return[4,p.apply(void 0,l([e,t,r,n],u(s),!1))];case 8:return[4,p];case 9:h.sent(),h.label=10;case 10:return f=d.next(),[3,1];case 11:return[3,14];case 12:return m={error:h.sent()},[3,14];case 13:try{f&&!f.done&&(v=d.return)&&v.call(d)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function c(e){return o(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var d=(0,n.memo)((0,n.forwardRef)(function(e,t){var r=e.sequence,o=e.repeat,i=e.className,a=e.speed,c=void 0===a?40:a,d=e.deletionSpeed,f=e.omitDeletionAnimation,p=void 0!==f&&f,h=e.preRenderFirstString,m=e.wrapper,v=e.cursor,g=void 0===v||v,y=e.style,b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","cursor","style"]),w=b["aria-label"],k=b["aria-hidden"];d||(d=c);var x,_,j,S=[,,].fill(40);[c,d].forEach(function(e,t){switch(typeof e){case"number":S[t]=Math.abs(e-100);break;case"object":var r=e.type,n=e.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===r&&(S[t]=n)}});var O,E,A,z,L,C,M=S[0],R=S[1],P=(x=t,void 0===_&&(_=null),j=(0,n.useRef)(_),(0,n.useEffect)(function(){x&&("function"==typeof x?x(j.current):x.current=j.current)},[x]),j),I="index-module_type__E-SaG";O=i?"".concat(g?I+" ":"").concat(i):g?I:"",E=(0,n.useRef)(function(){var e,t=r;return o===1/0?e=s:"number"==typeof o&&(t=Array(1+o).fill(r).flat()),s.apply(void 0,l(l([P.current,M,R,p],u(t),!1),[e],!1)),function(){P.current}}),A=(0,n.useRef)(),z=(0,n.useRef)(!1),L=(0,n.useRef)(!1),C=u((0,n.useState)(0),2)[1],z.current&&(L.current=!0),(0,n.useEffect)(function(){return z.current||(A.current=E.current(),z.current=!0),C(function(e){return e+1}),function(){L.current&&A.current&&A.current()}},[]);var Z=void 0!==h&&h?r.find(function(e){return"string"==typeof e})||"":null;return n.createElement(void 0===m?"span":m,{"aria-hidden":k,"aria-label":w,style:y,className:O,children:w?n.createElement("span",{"aria-hidden":"true",ref:P,children:Z}):Z,ref:w?void 0:P})}),function(e,t){return!0})},6339:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),n.createElement("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"}))});t.Z=o},1782:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"}))});t.Z=o},822:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"}))});t.Z=o},6064:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"}))});t.Z=o},6365:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))});t.Z=o},8285:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"}))});t.Z=o},5537:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}))});t.Z=o},9700:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}))});t.Z=o},7402:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}))});t.Z=o},5966:function(e,t,r){"use strict";var n=r(7294);let o=n.forwardRef(function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}))});t.Z=o},7568:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var u=e[i](a),l=u.value}catch(s){r(s);return}u.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,l,"next",e)}function l(e){n(a,o,i,u,l,"throw",e)}u(void 0)})}}r.d(t,{Z:function(){return o}})},9396:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r.d(t,{Z:function(){return n}})},9534:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},797:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})}}]);