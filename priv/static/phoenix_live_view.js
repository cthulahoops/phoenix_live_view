!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.phoenix_live_view=t():e.phoenix_live_view=t()}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var i;n.r(t);var r="http://www.w3.org/1999/xhtml",o="undefined"==typeof document?void 0:document,a=!!o&&"content"in o.createElement("template"),u=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function c(e){return a?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):u?function(e){return i||(i=o.createRange()).selectNode(o.body),i.createContextualFragment(e).childNodes[0]}(e):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function s(e,t){var n=e.nodeName,i=t.nodeName;return n===i||!!(t.actualize&&n.charCodeAt(0)<91&&i.charCodeAt(0)>90)&&n===i.toUpperCase()}function l(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var d={OPTION:function(e,t){var n=e.parentNode;if(n){var i=n.nodeName.toUpperCase();"OPTGROUP"===i&&(i=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==i||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}l(e,t,"selected")},INPUT:function(e,t){l(e,t,"checked"),l(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var i=e.firstChild;if(i){var r=i.nodeValue;if(r==n||!n&&r==e.placeholder)return;i.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,i,r=-1,o=0,a=e.firstChild;a;)if("OPTGROUP"===(i=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===i){if(a.hasAttribute("selected")){r=o;break}o++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=r}}},h=1,f=11,v=3,p=8;function m(){}function y(e){return e.id}var g=function(e){return function(t,n,i){if(i||(i={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var a=n;(n=o.createElement("html")).innerHTML=a}else n=c(n);var u,l=i.getNodeKey||y,g=i.onBeforeNodeAdded||m,k=i.onNodeAdded||m,b=i.onBeforeElUpdated||m,w=i.onElUpdated||m,x=i.onBeforeNodeDiscarded||m,E=i.onNodeDiscarded||m,A=i.onBeforeElChildrenUpdated||m,S=!0===i.childrenOnly,L={};function C(e){u?u.push(e):u=[e]}function N(e,t,n){!1!==x(e)&&(t&&t.removeChild(e),E(e),function e(t,n){if(t.nodeType===h)for(var i=t.firstChild;i;){var r=void 0;n&&(r=l(i))?C(r):(E(i),i.firstChild&&e(i,n)),i=i.nextSibling}}(e,n))}function _(e){k(e);for(var t=e.firstChild;t;){var n=t.nextSibling,i=l(t);if(i){var r=L[i];r&&s(t,r)&&(t.parentNode.replaceChild(r,t),T(r,t))}_(t),t=n}}function T(i,r,a){var u=l(r);if(u&&delete L[u],!n.isSameNode||!n.isSameNode(t)){if(!a){if(!1===b(i,r))return;if(e(i,r),w(i),!1===A(i,r))return}"TEXTAREA"!==i.nodeName?function(e,t){var n,i,r,a,u,c=t.firstChild,f=e.firstChild;e:for(;c;){for(a=c.nextSibling,n=l(c);f;){if(r=f.nextSibling,c.isSameNode&&c.isSameNode(f)){c=a,f=r;continue e}i=l(f);var m=f.nodeType,y=void 0;if(m===c.nodeType&&(m===h?(n?n!==i&&((u=L[n])?r===u?y=!1:(e.insertBefore(u,f),i?C(i):N(f,e,!0),f=u):y=!1):i&&(y=!1),(y=!1!==y&&s(f,c))&&T(f,c)):m!==v&&m!=p||(y=!0,f.nodeValue!==c.nodeValue&&(f.nodeValue=c.nodeValue))),y){c=a,f=r;continue e}i?C(i):N(f,e,!0),f=r}if(n&&(u=L[n])&&s(u,c))e.appendChild(u),T(u,c);else{var k=g(c);!1!==k&&(k&&(c=k),c.actualize&&(c=c.actualize(e.ownerDocument||o)),e.appendChild(c),_(c))}c=a,f=r}!function(e,t,n){for(;t;){var i=t.nextSibling;(n=l(t))?C(n):N(t,e,!0),t=i}}(e,f,i);var b=d[e.nodeName];b&&b(e,t)}(i,r):d.TEXTAREA(i,r)}}!function e(t){if(t.nodeType===h||t.nodeType===f)for(var n=t.firstChild;n;){var i=l(n);i&&(L[i]=n),e(n),n=n.nextSibling}}(t);var P=t,I=P.nodeType,D=n.nodeType;if(!S)if(I===h)D===h?s(t,n)||(E(t),P=function(e,t){for(var n=e.firstChild;n;){var i=n.nextSibling;t.appendChild(n),n=i}return t}(t,function(e,t){return t&&t!==r?o.createElementNS(t,e):o.createElement(e)}(n.nodeName,n.namespaceURI))):P=n;else if(I===v||I===p){if(D===I)return P.nodeValue!==n.nodeValue&&(P.nodeValue=n.nodeValue),P;P=n}if(P===n)E(t);else if(T(P,n,S),u)for(var H=0,O=u.length;H<O;H++){var R=L[u[H]];R&&N(R,R.parentNode,!1)}return!S&&P!==t&&t.parentNode&&(P.actualize&&(P=P.actualize(t.ownerDocument||o)),t.parentNode.replaceChild(P,t)),P}}(function(e,t){var n,i,r,o,a,u=t.attributes;for(n=u.length-1;n>=0;--n)r=(i=u[n]).name,o=i.namespaceURI,a=i.value,o?(r=i.localName||r,e.getAttributeNS(o,r)!==a&&e.setAttributeNS(o,r,a)):e.getAttribute(r)!==a&&e.setAttribute(r,a);for(n=(u=e.attributes).length-1;n>=0;--n)!1!==(i=u[n]).specified&&(r=i.name,(o=i.namespaceURI)?(r=i.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r))});function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(i=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"debug",function(){return P}),n.d(t,"Rendered",function(){return B}),n.d(t,"LiveSocket",function(){return j}),n.d(t,"Browser",function(){return M}),n.d(t,"DOM",function(){return K}),n.d(t,"View",function(){return F});var A=[1e3,3e3],S="data-phx-view",L="[".concat(S,"]"),C=["text","textarea","number","email","password","search","tel","url"],N=1,_="phx-",T=function(e,t){return console.error&&console.error(e,t)};var P=function(e,t,n,i){0},I=function(e){return"function"==typeof e?e:function(){return e}},D=function(e){return JSON.parse(JSON.stringify(e))},H=function(e,t){do{if(e.matches("[".concat(t,"]")))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType&&!e.matches(L));return null},O=function(e){return null!==e&&"object"===E(e)&&!(e instanceof Array)},R=function(e,t){return e&&t(e)},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new FormData(e),i=new URLSearchParams,r=!0,o=!1,a=void 0;try{for(var u,c=n.entries()[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=x(u.value,2),l=s[0],d=s[1];i.append(l,d)}}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}for(var h in t)i.append(h,t[h]);return i.toString()},B={mergeDiff:function(e,t){return!t.c&&this.isNewFingerprint(t)?t:(function e(t,n){for(var i in n){var r=n[i],o=t[i];O(r)&&O(o)?(o.d&&!r.d&&delete o.d,e(o,r)):t[i]=r}}(e,t),e)},isNewFingerprint:function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).s},componentToString:function(e,t){var n=e[t]||T("no component for CID ".concat(t),e),i=document.createElement("template");i.innerHTML=this.toString(n,e);var r=i.content;return Array.from(r.childNodes).forEach(function(e){e.nodeType===Node.ELEMENT_NODE?e.setAttribute("data-phx-component",t):(""!==e.nodeValue.trim()&&T("only HTML element tags are allowed at the root of components.\n\n"+'got: "'.concat(e.nodeValue.trim(),'"\n\n')+"within:\n",i.innerHTML.trim()),e.remove())}),i.innerHTML},toString:function(e){var t={buffer:"",components:arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.c||{}};return this.toOutputBuffer(e,t),t.buffer},toOutputBuffer:function(e,t){if(e.d)return this.comprehensionToBuffer(e,t);var n=e.s;t.buffer+=n[0];for(var i=1;i<n.length;i++)this.dynamicToBuffer(e[i-1],t),t.buffer+=n[i]},comprehensionToBuffer:function(e,t){for(var n=e.d,i=e.s,r=0;r<n.length;r++){var o=n[r];t.buffer+=i[0];for(var a=1;a<i.length;a++)this.dynamicToBuffer(o[a-1],t),t.buffer+=i[a]}},dynamicToBuffer:function(e,t){"number"==typeof e?t.buffer+=this.componentToString(t.components,e):O(e)?this.toOutputBuffer(e,t):t.buffer+=e},pruneCIDs:function(e,t){return t.forEach(function(t){return delete e.c[t]}),e}},j=function(){function e(t,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(k(this,e),this.unloaded=!1,!n||"Object"===n.constructor.name)throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');this.socket=new n(t,r),this.bindingPrefix=r.bindingPrefix||_,this.opts=r,this.views={},this.params=I(r.params||{}),this.viewLogger=r.viewLogger,this.activeElement=null,this.prevActive=null,this.prevInput=null,this.prevValue=null,this.silenced=!1,this.root=null,this.main=null,this.linkRef=0,this.href=window.location.href,this.pendingLink=null,this.currentLocation=D(window.location),this.hooks=r.hooks||{},this.socket.onOpen(function(){i.isUnloaded()&&(i.destroyAllViews(),i.joinRootViews(),i.detectMainView()),i.unloaded=!1}),window.addEventListener("unload",function(e){i.unloaded=!0}),this.bindTopLevelEvents()}return w(e,[{key:"getSocket",value:function(){return this.socket}},{key:"log",value:function(e,t,n){if(this.viewLogger){var i=x(n(),2),r=i[0],o=i[1];this.viewLogger(e,t,r,o)}}},{key:"connect",value:function(){var e=this;return["complete","loaded","interactive"].indexOf(document.readyState)>=0?(this.joinRootViews(),this.detectMainView()):document.addEventListener("DOMContentLoaded",function(){e.joinRootViews(),e.detectMainView()}),this.socket.connect()}},{key:"disconnect",value:function(){this.socket.disconnect()}},{key:"reloadWithJitter",value:function(e){this.disconnect();var t=A[0],n=A[1],i=Math.floor(Math.random()*(n-t+1))+t,r=M.updateLocal(e.name(),"consecutive-reloads",0,function(e){return e+1});this.log(e,"join",function(){return["ecountered ".concat(r," consecutive reloads")]}),r>10&&(this.log(e,"join",function(){return["exceeded ".concat(10," consecutive reloads. Entering failsafe mode")]}),i=3e4),setTimeout(function(){return window.location.reload()},i)}},{key:"getHookCallbacks",value:function(e){return this.hooks[e]}},{key:"isUnloaded",value:function(){return this.unloaded}},{key:"isConnected",value:function(){return this.socket.isConnected()}},{key:"getBindingPrefix",value:function(){return this.bindingPrefix}},{key:"binding",value:function(e){return"".concat(this.getBindingPrefix()).concat(e)}},{key:"channel",value:function(e,t){return this.socket.channel(e,t)}},{key:"joinRootViews",value:function(){var e=this;K.all(document,"".concat(L,":not([").concat("data-phx-parent-id","])"),function(t){var n=e.joinView(t,null,e.getHref());e.root=e.root||n})}},{key:"detectMainView",value:function(){var e=this;K.all(document,"".concat("[data-phx-main=true]"),function(t){var n=e.getViewByEl(t);n&&(e.main=n)})}},{key:"replaceMain",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.setPendingLink(e);this.main.showLoader(N);var r=this.main.el,o=this.main.id,a=this.main.isLoading();this.destroyAllViews(),M.fetchPage(e,function(u,c){if(200!==u)return M.redirect(e);var s=document.createElement("template");s.innerHTML=c,t.joinView(s.content.childNodes[0],null,e,function(e){t.commitPendingLink(i)?(n&&n(),t.destroyViewById(o),r.replaceWith(e.el),t.main=e,a&&t.main.showLoader()):e.destroy()})})}},{key:"joinView",value:function(e,t,n,i){if(!this.getViewByEl(e)){var r=new F(e,this,t,n);return this.views[r.id]=r,r.join(i),r}}},{key:"owner",value:function(e,t){var n=this,i=R(e.closest(L),function(e){return n.getViewByEl(e)});i&&t(i)}},{key:"withinTargets",value:function(e,t){var n=this,i=Array.from(document.querySelectorAll(e));if(!(i.length>0))throw new Error("no phx-target's found matching selector \"".concat(e,'"'));i.forEach(function(e){n.owner(e,function(n){return t(n,e)})})}},{key:"withinOwners",value:function(e,t){var n=e.getAttribute(this.binding("target"));null===n?this.owner(e,function(n){return t(n,e)}):this.withinTargets(n,t)}},{key:"getViewByEl",value:function(e){return this.getViewById(e.id)}},{key:"getViewById",value:function(e){return this.views[e]}},{key:"onViewError",value:function(e){this.dropActiveElement(e)}},{key:"destroyAllViews",value:function(){for(var e in this.views)this.destroyViewById(e)}},{key:"destroyViewByEl",value:function(e){return this.destroyViewById(e.id)}},{key:"destroyViewById",value:function(e){var t=this.views[e];t&&(delete this.views[t.id],this.root&&t.id===this.root.id&&(this.root=null),t.destroy())}},{key:"setActiveElement",value:function(e){var t=this;if(this.activeElement!==e){this.activeElement=e;var n=function(){e===t.activeElement&&(t.activeElement=null),e.removeEventListener("mouseup",t),e.removeEventListener("touchend",t)};e.addEventListener("mouseup",n),e.addEventListener("touchend",n)}}},{key:"getActiveElement",value:function(){return document.activeElement===document.body&&this.activeElement||document.activeElement}},{key:"dropActiveElement",value:function(e){this.prevActive&&e.ownsElement(this.prevActive)&&(this.prevActive=null)}},{key:"restorePreviouslyActiveFocus",value:function(){this.prevActive&&this.prevActive!==document.body&&this.prevActive.focus()}},{key:"blurActiveElement",value:function(){this.prevActive=this.getActiveElement(),this.prevActive!==document.body&&this.prevActive.blur()}},{key:"bindTopLevelEvents",value:function(){this.bindClicks(),this.bindNav(),this.bindForms(),this.bind({keyup:"keyup",keydown:"keydown"},function(e,t,n,i,r,o,a){n.pushKey(i,r,t,o,{altGraphKey:e.altGraphKey,altKey:e.altKey,charCode:e.charCode,code:e.code,ctrlKey:e.ctrlKey,key:e.key,keyCode:e.keyCode,keyIdentifier:e.keyIdentifier,keyLocation:e.keyLocation,location:e.location,metaKey:e.metaKey,repeat:e.repeat,shiftKey:e.shiftKey,which:e.which})}),this.bind({blur:"focusout",focus:"focusin"},function(e,t,n,i,r,o,a){a||n.pushEvent(t,i,r,o,{type:t})}),this.bind({blur:"blur",focus:"focus"},function(e,t,n,i,r,o,a){a&&"window"!==!a&&n.pushEvent(t,i,r,o,{type:e.type})})}},{key:"setPendingLink",value:function(e){this.linkRef++;this.linkRef;return this.pendingLink=e,this.linkRef}},{key:"commitPendingLink",value:function(e){return this.linkRef===e&&(this.href=this.pendingLink,this.pendingLink=null,!0)}},{key:"getHref",value:function(){return this.href}},{key:"hasPendingLink",value:function(){return!!this.pendingLink}},{key:"bind",value:function(e,t){var n=this,i=function(i){var r=e[i];n.on(r,function(e){var r=n.binding(i),o=n.binding("window-".concat(i)),a=e.target.getAttribute&&e.target.getAttribute(r);a?n.debounce(e.target,e,function(){n.withinOwners(e.target,function(n,r){t(e,i,n,e.target,r,a,null)})}):K.all(document,"[".concat(o,"]"),function(r){var a=r.getAttribute(o);n.debounce(r,e,function(){n.withinOwners(r,function(n,o){t(e,i,n,r,o,a,"window")})})})})};for(var r in e)i(r)}},{key:"bindClicks",value:function(){var e=this;window.addEventListener("click",function(t){var n=e.binding("click"),i=H(t.target,n),r=i&&i.getAttribute(n);if(r){"#"===i.getAttribute("href")&&t.preventDefault();var o={altKey:t.altKey,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,x:t.x||t.clientX,y:t.y||t.clientY,pageX:t.pageX,pageY:t.pageY,screenX:t.screenX,screenY:t.screenY,offsetX:t.offsetX,offsetY:t.offsetY};e.debounce(i,t,function(){e.withinOwners(i,function(e,t){e.pushEvent("click",i,t,r,o)})})}},!1)}},{key:"bindNav",value:function(){var e=this;M.canPushState()&&(window.onpopstate=function(t){if(e.registerNewLocation(window.location)){var n=window.location.href;e.main.isConnected()?e.main.pushInternalLink(n):e.replaceMain(n)}},window.addEventListener("click",function(t){var n=H(t.target,"data-phx-live-link"),i=n&&n.getAttribute("data-phx-live-link"),r=t.metaKey||t.ctrlKey||1===t.button;if(i&&e.isConnected()&&!r){var o=n.href;t.preventDefault(),e.main.pushInternalLink(o,function(){M.pushState(i,{},o),e.registerNewLocation(window.location)})}},!1))}},{key:"registerNewLocation",value:function(e){var t=this.currentLocation;return t.pathname+t.search!==e.pathname+e.search&&(this.currentLocation=D(e),!0)}},{key:"bindForms",value:function(){var e=this;this.on("submit",function(t){var n=t.target.getAttribute(e.binding("submit"));n&&(t.preventDefault(),t.target.disabled=!0,e.withinOwners(t.target,function(e,i){return e.submitForm(t.target,i,n)}))},!1);for(var t=["change","input"],n=0;n<t.length;n++){var i=t[n];this.on(i,function(t){var n=t.target,i=n.form&&n.form.getAttribute(e.binding("change"));if(i){var r=JSON.stringify(new FormData(n.form).getAll(n.name));e.prevInput===n&&e.prevValue===r||"number"===n.type&&n.validity&&n.validity.badInput||(e.prevInput=n,e.prevValue=r,e.debounce(n,t,function(){e.withinOwners(n.form,function(r,o){K.isTextualInput(n)?K.putPrivate(n,"phx-has-focused",!0):e.setActiveElement(n),r.pushInput(n,o,i,t)})}))}},!1)}}},{key:"debounce",value:function(e,t,n){K.debounce(e,t,this.binding("debounce"),this.binding("throttle"),n)}},{key:"silenceEvents",value:function(e){this.silenced=!0,e(),this.silenced=!1}},{key:"on",value:function(e,t){var n=this;window.addEventListener(e,function(e){n.silenced||t(e)})}}]),e}(),M={canPushState:function(){return void 0!==history.pushState},dropLocal:function(e,t){return window.localStorage.removeItem(this.localKey(e,t))},updateLocal:function(e,t,n,i){var r=this.getLocal(e,t),o=this.localKey(e,t),a=null===r?n:i(r);return window.localStorage.setItem(o,JSON.stringify(a)),a},getLocal:function(e,t){return JSON.parse(window.localStorage.getItem(this.localKey(e,t)))},fetchPage:function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.timeout=3e4,n.setRequestHeader("content-type","text/html"),n.setRequestHeader("cache-control","max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"),n.setRequestHeader("x-requested-with","live-link"),n.onerror=function(){return t(400)},n.ontimeout=function(){return t(504)},n.onreadystatechange=function(){if(4===n.readyState)return"live-link"!==n.getResponseHeader("x-requested-with")?t(400):200!==n.status?t(n.status):void t(200,n.responseText)},n.send()},pushState:function(e,t,n){this.canPushState()?n!==window.location.href&&history[e+"State"](t,"",n):this.redirect(n)},setCookie:function(e,t){document.cookie="".concat(e,"=").concat(t)},getCookie:function(e){return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e,"s*=s*([^;]*).*$)|^.*$")),"$1")},redirect:function(e,t){t&&M.setCookie("__phoenix_flash__",t+"; max-age=60000; path=/"),window.location=e},localKey:function(e,t){return"".concat(e,"-").concat(t)}},K={all:function(e,t,n){var i=Array.from(e.querySelectorAll(t));return n?i.forEach(n):i},findComponentNodeList:function(e,t){return this.all(e,"[".concat("data-phx-component",'="').concat(t,'"]'))},private:function(e,t){return e.phxPrivate&&e.phxPrivate[t]},deletePrivate:function(e,t){e.phxPrivate&&delete e.phxPrivate[t]},putPrivate:function(e,t,n){e.phxPrivate||(e.phxPrivate={}),e.phxPrivate[t]=n},copyPrivates:function(e,t){t.phxPrivate&&(e.phxPrivate=D(t.phxPrivate))},putTitle:function(e){document.title=e},debounce:function(e,t,n,i,r){var o=this,a=e.getAttribute(n),u=e.getAttribute(i),c=a||u;switch(c){case null:return r();case"blur":if(this.private(e,"debounce-blur"))return;return e.addEventListener("blur",function(){return r()}),void this.putPrivate(e,"debounce-blur",c);default:var s=parseInt(c);if(isNaN(s))return T("invalid throttle/debounce value: ".concat(c));if(u&&"keydown"===t.type){var l=this.private(e,"debounce-prev-key");if(this.putPrivate(e,"debounce-prev-key",t.which),l!==t.which)return r()}if(this.private(e,"debounce-timer"))return;var d=function(t){u&&"phx-change"===t.type&&t.detail.triggeredBy.name===e.name||(clearTimeout(o.private(e,"debounce-timer")),o.deletePrivate(e,"debounce-timer"))};this.putPrivate(e,"debounce-timer",setTimeout(function(){e.form&&(e.form.removeEventListener("phx-change",d),e.form.removeEventListener("submit",d)),o.deletePrivate(e,"debounce-timer"),u||r()},s)),e.form&&(e.form.addEventListener("phx-change",d),e.form.addEventListener("submit",d)),u&&r()}},disableForm:function(e,t){var n="".concat(t).concat("disable-with");e.classList.add("phx-loading"),K.all(e,"[".concat(n,"]"),function(e){var t=e.getAttribute(n);e.setAttribute("".concat(n,"-restore"),e.innerText),e.innerText=t}),K.all(e,"button",function(e){e.setAttribute("data-phx-disabled",e.disabled),e.disabled=!0}),K.all(e,"input",function(e){e.setAttribute("data-phx-readonly",e.readOnly),e.readOnly=!0})},restoreDisabledForm:function(e,t){var n="".concat(t).concat("disable-with");e.classList.remove("phx-loading"),K.all(e,"[".concat(n,"]"),function(e){var t=e.getAttribute("".concat(n,"-restore"));t&&("INPUT"===e.nodeName?e.setAttribute("value",t):e.innerText=t,e.removeAttribute("".concat(n,"-restore")))}),K.all(e,"button",function(e){var t=e.getAttribute("data-phx-disabled");t&&(e.disabled="true"===t,e.removeAttribute("data-phx-disabled"))}),K.all(e,"input",function(e){var t=e.getAttribute("data-phx-readonly");t&&(e.readOnly="true"===t,e.removeAttribute("data-phx-readonly"))})},discardError:function(e,t){var n=t.getAttribute&&t.getAttribute("data-phx-error-for");if(n){var i=e.querySelector("#".concat(n));!n||this.private(i,"phx-has-focused")||this.private(i.form,"phx-has-submitted")||(t.style.display="none")}},isPhxChild:function(e){return e.getAttribute&&e.getAttribute("data-phx-parent-id")},dispatchEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(i)},cloneNode:function(e,t){var n=e.cloneNode();return n.innerHTML=t||e.innerHTML,n},mergeAttrs:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=t.attributes,r=0,o=i.length;r<o;r++){var a=i[r].name;n.indexOf(a)<0&&e.setAttribute(a,t.getAttribute(a))}},mergeInputs:function(e,t){K.mergeAttrs(e,t,["value"]),t.readOnly?e.setAttribute("readonly",!0):e.removeAttribute("readonly")},restoreFocus:function(e,t,n){K.isTextualInput(e)&&((""===e.value||e.readOnly)&&e.blur(),e.focus(),(e.setSelectionRange&&"text"===e.type||"textarea"===e.type)&&e.setSelectionRange(t,n))},isTextualInput:function(e){return C.indexOf(e.type)>=0}},U=function(){function e(t,n,i,r,o){k(this,e),this.view=t,this.container=n,this.id=i,this.html=r,this.targetCID=o,this.callbacks={beforeadded:[],beforeupdated:[],beforediscarded:[],beforephxChildAdded:[],afteradded:[],afterupdated:[],afterdiscarded:[],afterphxChildAdded:[]}}return w(e,[{key:"before",value:function(e,t){this.callbacks["before".concat(e)].push(t)}},{key:"after",value:function(e,t){this.callbacks["after".concat(e)].push(t)}},{key:"trackBefore",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.callbacks["before".concat(e)].forEach(function(e){return e.apply(void 0,n)})}},{key:"trackAfter",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.callbacks["after".concat(e)].forEach(function(e){return e.apply(void 0,n)})}},{key:"perform",value:function(){var e=this,t=this.view,n=this.container,i=(this.id,this.html),r=this.targetCID,o=t.liveSocket.getActiveElement(),a=o&&K.isTextualInput(o)?o:{},u=a.selectionStart,c=a.selectionEnd,s=t.liveSocket.binding("update"),l=[],d=x(this.buildDiffContainer(n,i,s,r),2),h=d[0],f=d[1];return this.trackBefore("added",n),this.trackBefore("updated",n,n),g(f,h.outerHTML,{childrenOnly:!0,onBeforeNodeAdded:function(t){return K.discardError(f,t),e.trackBefore("added",t),t},onNodeAdded:function(n){K.isPhxChild(n)&&t.ownsElement(n)&&e.trackAfter("phxChildAdded",n),e.trackAfter("added",n)},onNodeDiscarded:function(t){e.trackAfter("discarded",t)},onBeforeNodeDiscarded:function(n){if(e.trackBefore("discarded",n),K.isPhxChild(n))return t.liveSocket.destroyViewByEl(n),!0},onElUpdated:function(e){l.push(e)},onBeforeElUpdated:function(t,n){if("ignore"===t.getAttribute(s))return e.trackBefore("updated",t,n),K.mergeAttrs(t,n),!1;if("number"===t.type&&t.validity&&t.validity.badInput)return!1;if(K.isPhxChild(n)){var i=t.getAttribute("data-phx-static");return K.mergeAttrs(t,n),t.setAttribute("data-phx-static",i),!1}return K.copyPrivates(n,t),K.discardError(f,n),K.isTextualInput(t)&&t===o?(e.trackBefore("updated",t,t),K.mergeInputs(t,n),!1):(e.trackBefore("updated",t,n),!0)}}),l.forEach(function(t){return e.trackAfter("updated",t)}),t.liveSocket.silenceEvents(function(){return K.restoreFocus(o,u,c)}),K.dispatchEvent(document,"phx:update"),!0}},{key:"buildDiffContainer",value:function(e,t,n,i){var r=e,o=null,a=function(e){return e.nodeType===Node.ELEMENT_NODE},u=function(e){return e.id||T("append/prepend children require IDs, got: ",e)};if("number"==typeof i){r=e.querySelector("[".concat("data-phx-component",'="').concat(i,'"]')).parentNode,o=K.cloneNode(r);var c=K.findComponentNodeList(o,i),s=c[0].previousSibling;c.forEach(function(e){return e.remove()});var l=s&&s.nextSibling;if(s&&l){var d=document.createElement("template");d.innerHTML=t,Array.from(d.content.childNodes).forEach(function(e){return o.insertBefore(e,l)})}else s?o.insertAdjacentHTML("beforeend",t):o.insertAdjacentHTML("afterbegin",t)}else o=K.cloneNode(e,t);return K.all(o,"[".concat(n,"=append],[").concat(n,"=prepend]"),function(t){var i=t.id||T("append/prepend requires an ID, got: ",t),r=e.querySelector("#".concat(i));if(r){var o=K.cloneNode(r),c=t.getAttribute(n),s=Array.from(t.childNodes).filter(a).map(u),l=Array.from(o.childNodes).filter(a).map(u);if(s.toString()!==l.toString())s.filter(function(e){return l.indexOf(e)>=0}).forEach(function(e){var n=t.querySelector("#".concat(e));o.querySelector("#".concat(e)).replaceWith(n)}),t.insertAdjacentHTML("append"===c?"afterbegin":"beforeend",o.innerHTML)}}),[o,r]}}]),e}(),F=function(){function e(t,n,i,r){var o=this;k(this,e),this.liveSocket=n,this.parent=i,this.gracefullyClosed=!1,this.el=t,this.id=this.el.id,this.view=this.el.getAttribute(S),this.loaderTimer=null,this.pendingDiffs=[],this.href=r,this.joinedOnce=!1,this.viewHooks={},this.channel=this.liveSocket.channel("lv:".concat(this.id),function(){return{url:o.href,params:o.liveSocket.params(o.view),session:o.getSession(),static:o.getStatic()}}),this.showLoader(N),this.bindChannel()}return w(e,[{key:"name",value:function(){return this.view}},{key:"isConnected",value:function(){return this.channel.canPush()}},{key:"getSession",value:function(){return this.el.getAttribute("data-phx-session")}},{key:"getStatic",value:function(){var e=this.el.getAttribute("data-phx-static");return""===e?null:e}},{key:"destroy",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};clearTimeout(this.loaderTimer);var n=function(){for(var n in t(),e.viewHooks)e.destroyHook(e.viewHooks[n])};this.hasGracefullyClosed()?(this.log("destroyed",function(){return["the server view has gracefully closed"]}),n()):(this.log("destroyed",function(){return["the child has been removed from the parent"]}),this.channel.leave().receive("ok",n).receive("error",n).receive("timeout",n))}},{key:"setContainerClasses",value:function(){var e;this.el.classList.remove("phx-connected","phx-disconnected","phx-error"),(e=this.el.classList).add.apply(e,arguments)}},{key:"isLoading",value:function(){return this.el.classList.contains("phx-disconnected")}},{key:"showLoader",value:function(e){var t=this;if(clearTimeout(this.loaderTimer),e)this.loaderTimer=setTimeout(function(){return t.showLoader()},e);else{for(var n in this.viewHooks)this.viewHooks[n].__trigger__("disconnected");this.setContainerClasses("phx-disconnected")}}},{key:"hideLoader",value:function(){for(var e in clearTimeout(this.loaderTimer),this.viewHooks)this.viewHooks[e].__trigger__("reconnected");this.setContainerClasses("phx-connected")}},{key:"log",value:function(e,t){this.liveSocket.log(this,e,t)}},{key:"onJoin",value:function(e){var t=this,n=e.rendered,i=e.live_redirect;this.log("join",function(){return["",JSON.stringify(n)]}),n.title&&K.putTitle(n.title),M.dropLocal(this.name(),"consecutive-reloads"),this.rendered=n,this.hideLoader();var r=new U(this,this.el,this.id,B.toString(this.rendered));if(this.performPatch(r),this.joinNewChildren(),K.all(this.el,"[".concat(this.binding("hook"),"]"),function(e){var n=t.addHook(e);n&&n.__trigger__("mounted")}),i){var o=i.kind,a=i.to;M.pushState(o,{},a)}}},{key:"performPatch",value:function(e){var t=this,n=[],i=!1,r=new Set;e.after("added",function(e){var n=t.addHook(e);n&&n.__trigger__("mounted")}),e.after("phxChildAdded",function(e){return i=!0}),e.before("updated",function(e,n){var i=t.getHook(e);i&&!e.isEqualNode(n)&&(r.add(e.id),i.__trigger__("beforeUpdate"))}),e.after("updated",function(e){var n=t.getHook(e);n&&r.has(e.id)&&n.__trigger__("updated")}),e.before("discarded",function(e){var n=t.getHook(e);n&&n.__trigger__("beforeDestroy")}),e.after("discarded",function(e){var i=t.componentID(e);"number"==typeof i&&-1===n.indexOf(i)&&n.push(i);var r=t.getHook(e);r&&t.destroyHook(r)}),e.perform(),i&&this.joinNewChildren(),this.maybePushComponentsDestroyed(n)}},{key:"joinNewChildren",value:function(){var e=this;K.all(this.el,"".concat(L,"[").concat("data-phx-parent-id",'="').concat(this.id,'"]'),function(t){e.liveSocket.getViewByEl(t)||e.liveSocket.joinView(t,e)})}},{key:"update",value:function(e,t){if(!function(e){for(var t in e)return!1;return!0}(e)){if(e.title&&K.putTitle(e.title),this.liveSocket.hasPendingLink())return this.pendingDiffs.push({diff:e,cid:t});this.log("update",function(){return["",JSON.stringify(e)]}),this.rendered=B.mergeDiff(this.rendered,e);var n="number"==typeof t?B.componentToString(this.rendered.c,t):B.toString(this.rendered),i=new U(this,this.el,this.id,n,t);this.performPatch(i)}}},{key:"getHook",value:function(e){return this.viewHooks[J.elementID(e)]}},{key:"addHook",value:function(e){if(!J.elementID(e)&&e.getAttribute){var t=e.getAttribute(this.binding("hook"));if(!t||this.ownsElement(e)){var n=this.liveSocket.getHookCallbacks(t);if(n){var i=new J(this,e,n);return this.viewHooks[J.elementID(i.el)]=i,i}null!==t&&T('unknown hook found for "'.concat(t,'"'),e)}}}},{key:"destroyHook",value:function(e){e.__trigger__("destroyed"),delete this.viewHooks[J.elementID(e.el)]}},{key:"applyPendingUpdates",value:function(){var e=this;this.pendingDiffs.forEach(function(t){var n=t.diff,i=t.cid;return e.update(n,i)}),this.pendingDiffs=[]}},{key:"bindChannel",value:function(){var e=this;this.channel.on("diff",function(t){return e.update(t)}),this.channel.on("redirect",function(t){var n=t.to,i=t.flash;return e.onRedirect({to:n,flash:i})}),this.channel.on("live_redirect",function(t){var n=t.to,i=t.kind;return e.onLiveRedirect({to:n,kind:i})}),this.channel.on("external_live_redirect",function(t){var n=t.to,i=t.kind;return e.onExternalLiveRedirect({to:n,kind:i})}),this.channel.on("session",function(t){var n=t.token;return e.el.setAttribute("data-phx-session",n)}),this.channel.onError(function(t){return e.onError(t)}),this.channel.onClose(function(){return e.onGracefulClose()})}},{key:"onGracefulClose",value:function(){this.gracefullyClosed=!0,this.liveSocket.destroyViewById(this.id)}},{key:"onExternalLiveRedirect",value:function(e){var t=this,n=e.to,i=e.kind,r=window.location.protocol+"//"+window.location.host+n;this.liveSocket.replaceMain(r,function(){M.pushState(i,{},n),t.liveSocket.registerNewLocation(window.location)})}},{key:"onLiveRedirect",value:function(e){var t=e.to,n=e.kind;this.href=t,M.pushState(n,{},t),this.liveSocket.registerNewLocation(window.location)}},{key:"onRedirect",value:function(e){var t=e.to,n=e.flash;M.redirect(t,n)}},{key:"hasGracefullyClosed",value:function(){return this.gracefullyClosed}},{key:"join",value:function(e){var t=this;this.parent&&(this.parent.channel.onClose(function(){return t.onGracefulClose()}),this.parent.channel.onError(function(){return t.liveSocket.destroyViewById(t.id)})),this.channel.join().receive("ok",function(n){t.joinedOnce||e&&e(t),t.joinedOnce=!0,t.onJoin(n)}).receive("error",function(e){return t.onJoinError(e)}).receive("timeout",function(){return t.onJoinError({reason:"timeout"})})}},{key:"onJoinError",value:function(e){return"outdated"===e.reason?this.liveSocket.reloadWithJitter(this):"join crashed"===e.reason?this.liveSocket.reloadWithJitter(this):((e.redirect||e.external_live_redirect)&&this.channel.leave(),e.redirect?this.onRedirect(e.redirect):e.external_live_redirect?this.onExternalLiveRedirect(e.external_live_redirect):(this.displayError(),void this.log("error",function(){return["unable to join",e]})))}},{key:"onError",value:function(e){this.log("error",function(){return["view crashed",e]}),this.liveSocket.onViewError(this),document.activeElement.blur(),this.liveSocket.isUnloaded()?this.showLoader(200):this.displayError()}},{key:"displayError",value:function(){this.showLoader(),this.setContainerClasses("phx-disconnected","phx-error")}},{key:"pushWithReply",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return"number"!=typeof t.cid&&delete t.cid,this.channel.push(e,t,3e4).receive("ok",function(e){e.diff&&n.update(e.diff,t.cid),e.redirect&&n.onRedirect(e.redirect),e.live_redirect&&n.onLiveRedirect(e.live_redirect),e.external_live_redirect&&n.onExternalLiveRedirect(e.external_live_redirect),i(e)})}},{key:"componentID",value:function(e){var t=e.getAttribute&&e.getAttribute("data-phx-component");return t?parseInt(t):null}},{key:"targetComponentID",value:function(e,t){return e.getAttribute(this.binding("target"))?this.closestComponentID(t):null}},{key:"closestComponentID",value:function(e){var t=this;return e?R(e.closest("[".concat("data-phx-component","]")),function(e){return t.ownsElement(e)&&t.componentID(e)}):null}},{key:"pushHookEvent",value:function(e,t,n){this.pushWithReply("event",{type:"hook",event:t,value:n,cid:this.closestComponentID(e)})}},{key:"pushEvent",value:function(e,t,n,i,r){for(var o=this.binding("value-"),a=0;a<t.attributes.length;a++){var u=t.attributes[a].name;u.startsWith(o)&&(r[u.replace(o,"")]=t.getAttribute(u))}void 0!==t.value&&(r.value=t.value,"INPUT"!==t.tagName||"checkbox"!==t.type||t.checked||delete r.value),this.pushWithReply("event",{type:e,event:i,value:r,cid:this.targetComponentID(t,n)})}},{key:"pushKey",value:function(e,t,n,i,r){void 0!==e.value&&(r.value=e.value),this.pushWithReply("event",{type:n,event:i,value:r,cid:this.targetComponentID(e,t)})}},{key:"pushInput",value:function(e,t,n,i){K.dispatchEvent(e.form,"phx-change",{triggeredBy:e}),this.pushWithReply("event",{type:"form",event:n,value:V(e.form,{_target:i.target.name}),cid:this.targetComponentID(e.form,t)})}},{key:"pushFormSubmit",value:function(e,t,n,i){this.pushWithReply("event",{type:"form",event:n,value:V(e),cid:this.targetComponentID(e,t)},i)}},{key:"pushInternalLink",value:function(e,t){var n=this;this.isLoading()||this.showLoader(N);var i=this.liveSocket.setPendingLink(e);this.pushWithReply("link",{url:e},function(r){r.link_redirect?n.liveSocket.replaceMain(e,t,i):n.liveSocket.commitPendingLink(i)&&(n.href=e,n.applyPendingUpdates(),n.hideLoader(),t&&t())}).receive("timeout",function(){return M.redirect(window.location.href)})}},{key:"maybePushComponentsDestroyed",value:function(e){var t=this,n=e.filter(function(e){return 0===K.findComponentNodeList(t.el,e).length});n.length>0&&this.pushWithReply("cids_destroyed",{cids:n},function(){t.rendered=B.pruneCIDs(t.rendered,n)})}},{key:"ownsElement",value:function(e){return e.getAttribute("data-phx-parent-id")===this.id||R(e.closest(L),function(e){return e.id})===this.id}},{key:"submitForm",value:function(e,t,n){var i=this,r=this.liveSocket.getBindingPrefix();K.putPrivate(e,"phx-has-submitted",!0),K.disableForm(e,r),this.liveSocket.blurActiveElement(this),this.pushFormSubmit(e,t,n,function(){K.restoreDisabledForm(e,r),i.liveSocket.restorePreviouslyActiveFocus()})}},{key:"binding",value:function(e){return this.liveSocket.binding(e)}}]),e}(),q=1,J=function(){function e(t,n,i){for(var r in k(this,e),this.__view=t,this.__liveSocket=t.liveSocket,this.__callbacks=i,this.el=n,this.viewName=t.name(),this.el.phxHookId=this.constructor.makeID(),this.__callbacks)this[r]=this.__callbacks[r]}return w(e,null,[{key:"makeID",value:function(){return q++}},{key:"elementID",value:function(e){return e.phxHookId}}]),w(e,[{key:"pushEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.__view.pushHookEvent(null,e,t)}},{key:"pushEventTo",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.__liveSocket.withinTargets(e,function(e,i){e.pushHookEvent(i,t,n)})}},{key:"__trigger__",value:function(e){var t=this.__callbacks[e];t&&t.call(this)}}]),e}();t.default=j},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){t.Phoenix||(t.Phoenix={}),e.exports=t.Phoenix.LiveView=n(0)}).call(this,n(1))}])});