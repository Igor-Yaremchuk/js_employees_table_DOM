parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=h(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function a(t){var e=f();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||!p(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return s(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,t)})(t)}function s(t,e,n){return(s=f()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&d(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t){return w(t)||v(t)||h(t)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function v(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function w(t){if(Array.isArray(t))return g(t)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var S=document.querySelector("body"),L=document.querySelector("table"),E=L.querySelector("tbody"),x=document.createElement("div");x.style.display="flex",S.append(x),x.append(L),x.insertAdjacentHTML("beforeend",'\n  <form class="new-employee-form">\n  <label>Name:\n    <input name="name" type="text" data-qa="name">\n  </label>\n  <label>Position:\n    <input name="position" type="text" data-qa="position">\n  </label>\n  <label>Office:\n    <select name="office" data-qa="office">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age:\n    <input name="age" type="number" data-qa="age">\n  </label>\n  <label>Salary:\n    <input name="salary" type="number" data-qa="salary">\n  </label>\n  <button type="submit">Save to table</button>\n  </form>\n');var T=document.querySelector(".new-employee-form"),j=m(T.querySelectorAll("input, select")),A=T.getBoundingClientRect(),I=A.bottom,O=A.right,k=A.width;x.insertAdjacentHTML("afterbegin",'\n  <div class="notifications" style="\n    position: absolute;\n    top: '.concat(I+25,"px;\n    left: ").concat(O-k,'px;\n    display: grid;\n    justify-items: end;\n    gap: 25px;\n  "></div>\n'));var q,C,N=function(t){i(n,u(Error));var e=a(n);function n(t,o,i,a){var c;return r(this,n),(c=e.apply(this,arguments)).title=t,c.description=o,c.type=i,c.element=a,c}return n}(),M=function(){function t(e,n,o){r(this,t),this.title=e,this.description=n,this.type=o}return n(t,[{key:"show",value:function(){document.querySelector(".notifications").insertAdjacentHTML("afterbegin",'\n      <div class="notification '.concat(this.type,'" data-qa="notification">\n          <h2 class="title">').concat(this.title,"</h2>\n          <p>").concat(this.description,"</p>\n      </div>\n    "));var t=document.querySelector(".notification");t.style.top="0px",t.style.left="0px",t.style.position="static",setTimeout(function(){return t.remove()},1500)}}]),t}();function R(e){var n,o={name:{rules:function(t){return t.length<4},description:"Name must contain at least 4 letters"},age:{rules:function(t){return t<18||t>90},description:"Age must be at least 18 and not more than 90 years old"}},r=t(e);try{for(r.s();!(n=r.n()).done;){var i=n.value,a=i.name,c=i.value;if(""===c||!c.trim())throw new N("Incorrect ".concat(a,"!"),"The ".concat(a," cannot be empty."),"error",i);if(c.trim()!==c)throw new N("Incorrect ".concat(a,"!"),"The ".concat(a," cannot contain spaces at the beginning or at the end."),"error",i);if(o[a]&&o[a].rules(c))throw new N("Incorrect ".concat(a,"!"),"".concat(o[a].description,"."),"error",i)}}catch(l){r.e(l)}finally{r.f()}}function H(t){var e=E.insertRow();t.forEach(function(t){var n=t.name,o=t.value,r=e.insertCell();r.addEventListener("dblclick",P),r.append(U(n,o))})}function _(){T.addEventListener("submit",function(t){t.preventDefault();try{R(j),H(j),t.target.reset(),new M("Successful!","New employee has been added.","success").show()}catch(e){new M(e.title,e.description,e.type).show(),e.element.style.borderColor="red",e.element.style.outlineColor="red",setTimeout(function(){e.element.style.borderColor="",e.element.style.outlineColor=""},1500)}})}function P(){if(!(document.activeElement instanceof HTMLInputElement)){var t=j[this.cellIndex].cloneNode(!0),e=this.innerHTML,n=this;this.parentNode.classList.add("editing"),this.parentNode.classList.remove("active"),t.style.width="".concat(parseInt(getComputedStyle(this).width)+5,"px"),t.classList.add("cell-input"),t.value=U(t.name,e),this.innerHTML="",this.append(t),t.focus(),t.addEventListener("keydown",function(t){"Enter"===t.key&&this.blur()}),t.addEventListener("blur",function(){this.value||(this.value=U(this.name,e));try{R([this]),n.parentNode.classList.remove("editing"),n.innerHTML=U(this.name,this.value),n.addEventListener("dblclick",P),new M("Successful!","Employee ".concat(this.name," has been successfully changed."),"success").show()}catch(t){new M(t.title,t.description,t.type).show(),this.focus()}}),this.removeEventListener("dbclick",P)}}function F(t){t.tHead.addEventListener("click",function(t){var e=t.target.closest("th");e!==q&&(q=e,C=0),E.append.apply(E,m(m(E.rows).sort(D(e.innerText.toLowerCase(),"cells",e))))})}function D(t,e,n){var o=n.cellIndex;return C=C?0:1,function(n,r){var i=U(t,n[e][o].textContent),a=U(t,r[e][o].textContent);return"number"!=typeof i?C?i.localeCompare(a):a.localeCompare(i):C?i-a:a-i}}function $(t){var e;t.addEventListener("click",function(n){var o=n.target.closest("tr");o.classList.contains("editing")?o.classList.remove("active"):(o.rowIndex!==e&&(m(t.rows).forEach(function(t){t.classList.remove("active")}),e=o.rowIndex),o.classList.toggle("active"))})}function U(t,e){return"salary"!==t?e:isNaN(parseInt(e))?parseInt(e.replace(/[$,]/g,"")):"$"+Number(e).toLocaleString("en-US")}_(),m(document.querySelectorAll("td")).forEach(function(t){t.addEventListener("dblclick",P)}),F(L),$(E);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.893a6bc2.js.map