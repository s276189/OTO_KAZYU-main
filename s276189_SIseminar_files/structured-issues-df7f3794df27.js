"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["structured-issues"],{97797:(e,t,r)=>{function n(){if(!(this instanceof n))return new n;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}r.d(t,{h:()=>j,A:()=>k,on:()=>S});var i,o=window.document.documentElement,u=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;n.prototype.matchesSelector=function(e,t){return u.call(e,t)},n.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},n.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;n.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var s=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;n.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(s))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var l=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;n.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(l))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),n.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},i="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var c=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function d(e,t){var r,n,i,o,u,a,s=(e=e.slice(0).concat(e.default)).length,l=t,d=[];do if(c.exec(""),(i=c.exec(l))&&(l=i[3],i[2]||!l)){for(r=0;r<s;r++)if(u=(a=e[r]).selector(i[1])){for(n=d.length,o=!1;n--;)if(d[n].index===a&&d[n].key===u){o=!0;break}o||d.push({index:a,key:u});break}}while(i)return d}function f(e,t){return e.id-t.id}n.prototype.logDefaultIndexUsed=function(){},n.prototype.add=function(e,t){var r,n,o,u,a,s,l,c,f=this.activeIndexes,m=this.selectors,p=this.selectorObjects;if("string"==typeof e){for(n=0,p[(r={id:this.uid++,selector:e,data:t}).id]=r,l=d(this.indexes,e);n<l.length;n++)u=(c=l[n]).key,(a=function(e,t){var r,n,i;for(r=0,n=e.length;r<n;r++)if(i=e[r],t.isPrototypeOf(i))return i}(f,o=c.index))||((a=Object.create(o)).map=new i,f.push(a)),o===this.indexes.default&&this.logDefaultIndexUsed(r),(s=a.map.get(u))||(s=[],a.map.set(u,s)),s.push(r);this.size++,m.push(e)}},n.prototype.remove=function(e,t){if("string"==typeof e){var r,n,i,o,u,a,s,l,c=this.activeIndexes,f=this.selectors=[],m=this.selectorObjects,p={},h=1==arguments.length;for(i=0,r=d(this.indexes,e);i<r.length;i++)for(n=r[i],o=c.length;o--;)if(a=c[o],n.index.isPrototypeOf(a)){if(s=a.map.get(n.key))for(u=s.length;u--;)(l=s[u]).selector===e&&(h||l.data===t)&&(s.splice(u,1),p[l.id]=!0);break}for(i in p)delete m[i],this.size--;for(i in m)f.push(m[i].selector)}},n.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,r,n,i,o,u,a,s,l={},c=[],d=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,n=d.length;t<n;t++)for(r=0,o=d[t],i=(u=this.matches(o)).length;r<i;r++)l[(s=u[r]).id]?a=l[s.id]:(a={id:s.id,selector:s.selector,data:s.data,elements:[]},l[s.id]=a,c.push(a)),a.elements.push(o);return c.sort(f)},n.prototype.matches=function(e){if(!e)return[];var t,r,n,i,o,u,a,s,l,c,d,m=this.activeIndexes,p={},h=[];for(t=0,i=m.length;t<i;t++)if(s=(a=m[t]).element(e)){for(r=0,o=s.length;r<o;r++)if(l=a.map.get(s[r]))for(n=0,u=l.length;n<u;n++)!p[d=(c=l[n]).id]&&this.matchesSelector(e,c.selector)&&(p[d]=!0,h.push(c))}return h.sort(f)};var m={},p={},h=new WeakMap,v=new WeakMap,g=new WeakMap,y=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function b(e,t,r){var n=e[t];return e[t]=function(){return r.apply(e,arguments),n.apply(e,arguments)},e}function q(){h.set(this,!0)}function x(){h.set(this,!0),v.set(this,!0)}function E(){return g.get(this)||null}function w(e,t){y&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||y.get})}function L(e){if(function(e){try{return e.eventPhase,!0}catch(e){return!1}}(e)){var t=(1===e.eventPhase?p:m)[e.type];if(t){var r=function(e,t,r){var n=[],i=t;do{if(1!==i.nodeType)break;var o=e.matches(i);if(o.length){var u={node:i,observers:o};r?n.unshift(u):n.push(u)}}while(i=i.parentElement)return n}(t,e.target,1===e.eventPhase);if(r.length){b(e,"stopPropagation",q),b(e,"stopImmediatePropagation",x),w(e,E);for(var n=0,i=r.length;n<i&&!h.get(e);n++){var o=r[n];g.set(e,o.node);for(var u=0,a=o.observers.length;u<a&&!v.get(e);u++)o.observers[u].data.call(o.node,e)}g.delete(e),w(e)}}}}function S(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=!!i.capture,u=o?p:m,a=u[e];a||(a=new n,u[e]=a,document.addEventListener(e,L,o)),a.add(t,r)}function k(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!!n.capture,o=i?p:m,u=o[e];u&&(u.remove(t,r),u.size||(delete o[e],document.removeEventListener(e,L,i)))}function j(e,t,r){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}))}},40662:(e,t,r)=>{r.d(t,{t:()=>s});var n=r(50471),i=r(21403),o=r(97797);function u(e){let t=e.getAttribute("data-required-value"),r=e.getAttribute("data-required-value-prefix");if(e.value===t)e.setCustomValidity("");else{let n=t;r&&(n=r+n),e.setCustomValidity(n)}}(0,n.eC)("[data-required-value]",function(e){u(e.currentTarget)}),(0,o.on)("change","[data-required-value]",function(e){let t=e.currentTarget;u(t),s(t.form)}),(0,n.eC)("[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity("")}),(0,o.on)("change","[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity(""),s(t.form)}),(0,n.uE)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",e=>{let t=e.checkValidity();function r(){let r=e.checkValidity();r!==t&&e.form&&s(e.form),t=r}e.addEventListener("input",r),e.addEventListener("blur",function t(){e.removeEventListener("input",r),e.removeEventListener("blur",t)})});let a=new WeakMap;function s(e){let t=e.checkValidity();for(let r of e.querySelectorAll("button[data-disable-invalid]"))r.disabled=!t}(0,i.lB)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(e){let t=e.form;t&&(a.get(t)||(t.addEventListener("change",()=>s(t)),a.set(t,!0)),e.disabled=!t.checkValidity())}}),(0,i.lB)("input[data-required-change], textarea[data-required-change]",function(e){let t="radio"===e.type&&e.form?e.form.elements.namedItem(e.name).value:null;function r(r){let n=e.form;if(r&&"radio"===e.type&&n&&t)for(let r of n.elements.namedItem(e.name))r instanceof HTMLInputElement&&r.setCustomValidity(e.value===t?"unchanged":"");else e.setCustomValidity(e.value===(t||e.defaultValue)?"unchanged":"")}e.addEventListener("input",r),e.addEventListener("change",r),r(),e.form&&s(e.form)}),document.addEventListener("reset",function(e){if(e.target instanceof HTMLFormElement){let t=e.target;setTimeout(()=>s(t))}})},8784:(e,t,r)=>{function n(e){let t=e.closest(".form-group");if(t){let e=t.querySelectorAll(".js-structured-issue-multi-select-option[aria-checked='true']"),r=t?.querySelector(".js-structured-issue-multi-select-summary-button > span[data-menu-button]");if(r){let t=[];for(let r of e){let e=r.querySelector("input");e&&t.push(e.value)}r.textContent=t.join(", ")}}}function i(e){if("true"!==e.getAttribute("data-required"))return;let t=e.closest(".form-group");if(t){let r=t.querySelectorAll(".js-structured-issue-multi-select-option[data-required='true']");for(let t of r){let n=t.querySelector("input");n&&("true"===e.getAttribute("aria-checked")?n.removeAttribute("required"):Array.from(r).every(e=>"true"!==e.getAttribute("aria-checked"))&&n.setAttribute("required","required"))}}}(0,r(21403).lB)(".js-structured-issue-multi-select-option[aria-checked='true']",{add:e=>(function(e){n(e),i(e)})(e),remove:e=>(function(e){n(e),i(e)})(e)});var o=r(97797),u=r(50471),a=r(40662);function s(e){let t=e.closest(".form-group-body");if(!t)return;let r=t.querySelector(".js-structured-issue-textarea-expander");r&&(r.value=e.value)}(0,o.on)("focusin",".js-structured-issue-textarea-expander",function({currentTarget:e}){(function(){for(let e of document.querySelectorAll(".js-structured-issue-textarea-expander"))e.hidden=!1})(),function(e){(function(){let e=document.querySelector(".js-preview-panel");e&&e.classList.contains("border-bottom")&&e.classList.remove("border-bottom")})();let t=document.querySelector(".js-wysiwyg-container"),r=e.closest(".form-group-body");if(!r||!t)return;let n=r.querySelector(".js-wysiwyg-target");if(n){n.appendChild(t),t.hidden=!1;let i=r.querySelector(".comment-form-textarea, .CommentBox-input");i.value=e.value;let o=t.querySelector("[data-comment-box-placeholder]");o?o.textContent=e.placeholder:i.placeholder=e.placeholder,e.hidden=!0,r.querySelector(".js-write-tab").click(),i.focus()}}(e)}),(0,u.eC)(".comment-form-textarea",function({currentTarget:e}){s(e);let t=document.querySelector(".new_issue");t&&(0,a.t)(t)}),(0,u.eC)(".js-comment-field",function({currentTarget:e}){s(e)}),(0,o.on)("change",".js-comment-field",function({currentTarget:e}){s(e);let t=document.querySelector(".new_issue");t&&(0,a.t)(t)})},50471:(e,t,r)=>{r.d(t,{Ff:()=>s,eC:()=>l,uE:()=>a});var n=r(6986);let i=!1,o=new n.A;function u(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of o.matches(t))e.data.call(null,t)}function a(e,t){i||(i=!0,document.addEventListener("focus",u,!0)),o.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function s(e,t,r){function n(t){let i=t.currentTarget;i&&(i.removeEventListener(e,r),i.removeEventListener("blur",n))}a(t,function(t){t.addEventListener(e,r),t.addEventListener("blur",n)})}function l(e,t){function r(e){let{currentTarget:n}=e;n&&(n.removeEventListener("input",t),n.removeEventListener("blur",r))}a(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",r)})}}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js"],()=>t(8784)),e.O()}]);
//# sourceMappingURL=structured-issues-cf8f5964360e.js.map