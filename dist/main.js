!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){t(1),t(10),t(11)},function(n,e,t){var r=t(2),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},function(n,e,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function s(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],a=0;a<n.length;a++){var i=n[a],c=e.base?i[0]+e.base:i[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:v(p,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,m=0;function v(n,e){var t,r,a;if(e.singleton){var i=m++;t=g||(g=d(e)),r=p.bind(null,t,i,!1),a=p.bind(null,t,i,!0)}else t=d(e),r=f.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=s(t[r]);o[a].references--}for(var i=c(n,e),d=0;d<t.length;d++){var l=s(t[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=i}}}},function(n,e,t){var r=t(4),a=t(5),i=t(6),o=t(7),s=t(8),c=t(9);e=r(!1);var d=a(i),l=a(o),u=a(s),p=a(c);e.push([n.i,'    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    \n    header {\n        padding: 1rem;\n        background: #333;\n        color: white;\n    }\n    \n    h2 {\n        text-align: center;\n    }\n    \n    body {\n        font-family: \'Roboto\', sans-serif;\n        background: ghostwhite;\n        line-height: 1.6;\n    }\n    /* slider section */\n    \n    .slider {\n        position: relative;\n        overflow: hidden;\n        height: 100vh;\n        width: 100vw;\n    }\n    \n    .slide {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        transition: opacity 0.4s ease-in-out;\n    }\n    \n    .slide.current {\n        opacity: 1;\n    }\n    \n    .slide .content {\n        position: absolute;\n        bottom: 4.4rem;\n        left: -37.5rem;\n        opacity: 0;\n        width: 37.5rem;\n        background-color: rgba(255, 255, 255, 0.8);\n        color: #333;\n        padding: 1rem;\n    }\n    \n    .buttons button#next {\n        position: absolute;\n        top: 50%;\n        right: 1rem;\n        display: none;\n    }\n    \n    .buttons button#prev {\n        position: absolute;\n        top: 50%;\n        left: 1rem;\n        display: none;\n    }\n    \n    .buttons button {\n        border: 2px solid white;\n        background-color: transparent;\n        color: white;\n        cursor: pointer;\n        padding: .9rem 1rem;\n        border-radius: 50%;\n        outline: none;\n    }\n    \n    .slide .content h1 {\n        margin-bottom: 0.6rem;\n    }\n    \n    .slide.current .content {\n        opacity: 1;\n        transform: translateX(600px);\n        transition: all 0.7s ease-in-out 0.3s;\n    }\n    \n    .buttons button:hover {\n        background-color: white;\n        color: #333;\n    }\n    /*  find a hike section*/\n    \n    .hike-heading {\n        padding-top: 1rem;\n        font-size: 3rem;\n        text-align: center;\n        margin-top: 5rem;\n        margin-bottom: 5rem;\n        background: ghostwhite;\n    }\n    \n    h3 {\n        display: none;\n        width: 100%;\n        padding: .5rem;\n        font-size: 18px;\n        border-radius: 5px;\n    }\n    \n    form {\n        max-width: 500px;\n        margin: 2rem auto;\n        margin-bottom: 6rem;\n        border: 2px solid black;\n        background: #777777;\n        padding: 2rem;\n        border-radius: 5px;\n    }\n    \n    label,\n    input,\n    select {\n        padding: 5px;\n    }\n    \n    label {\n        display: block;\n        padding: 1rem 0 .5rem;\n        text-transform: uppercase;\n        font-size: 14px;\n    }\n    \n    input {\n        display: block;\n        width: 93%;\n        border: 2px solid black;\n        padding: .5rem;\n        font-size: 18px;\n        border-radius: 5px;\n    }\n    \n    select {\n        display: block;\n        width: 97%;\n        border: 2px solid black;\n        padding: .5rem;\n        font-size: 18px;\n        border-radius: 5px;\n    }\n    \n    #sendBtn {\n        border: 2px solid black;\n        background: whitesmoke;\n        color: black;\n        padding: .5rem;\n        margin: 1rem 0;\n        width: auto;\n        text-transform: uppercase;\n        cursor: pointer;\n    }\n    /* Result */\n    \n    .hiking-image {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        border-top-left-radius: 15px;\n        border-top-right-radius: 15px;\n        background-size: cover;\n    }\n    /* Card Section */\n    \n    .card-section {\n        width: 100%;\n        height: 100vh;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-color: ghostwhite;\n        overflow: hidden;\n    }\n    \n    .card {\n        display: grid;\n        grid-template-columns: 300px;\n        grid-template-rows: 210px 210px 80px;\n        grid-template-areas: "image" "text" "stats";\n        border-radius: 18px;\n        background: white;\n        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\n        font-family: roboto;\n        text-align: center;\n        transition: 0.5s ease;\n        cursor: pointer;\n        margin: 30px;\n    }\n    \n    .card-image {\n        grid-area: image;\n        border-top-left-radius: 15px;\n        border-top-right-radius: 15px;\n        background-size: cover;\n    }\n    \n    .card-text {\n        grid-area: text;\n        margin: 25px;\n    }\n    \n    .card-text .date {\n        color: rgb(0, 189, 63);\n        font-size: 13px;\n    }\n    \n    .card-text p {\n        color: grey;\n        font-size: 15px;\n        font-weight: 300;\n    }\n    \n    .card-text h2 {\n        margin-top: 0px;\n        font-size: 1.2rem;\n        line-height: 1.3;\n    }\n    \n    .card-stats {\n        grid-area: stats;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: 1fr;\n        border-bottom-left-radius: 15px;\n        border-bottom-right-radius: 15px;\n        background: #228b22;\n    }\n    \n    .card-stats .stat {\n        padding: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        color: white;\n    }\n    \n    .card-stats .border {\n        border-left: 1px solid rgb(14, 122, 50);\n        border-right: 1px solid rgb(14, 122, 50);\n    }\n    \n    .card-stats .value {\n        font-size: 22px;\n        font-weight: 500;\n    }\n    \n    .card-stats .value sup {\n        font-size: 12px;\n    }\n    \n    .card-stats .type {\n        font-size: 11px;\n        font-weight: 300;\n        text-transform: uppercase;\n    }\n    \n    .card:hover {\n        transform: scale(1.15);\n        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);\n    }\n    /*card2*/\n    \n    .card-image.card2 {\n        background-size: cover;\n    }\n    \n    .card-text.card2 .date {\n        color: rgb(0, 189, 63);\n    }\n    \n    .card-stats.card2 .border {\n        border-left: 1px solid rgb(14, 122, 50);\n        border-right: 1px solid rgb(14, 122, 50);\n    }\n    \n    .card-stats.card2 {\n        background: #228b22;\n    }\n    /*card3*/\n    \n    .card-image.card3 {\n        background-size: cover;\n    }\n    \n    .card-text.card3 .date {\n        color: rgb(0, 189, 63);\n    }\n    \n    .card-stats.card3 .border {\n        border-left: 1px solid rgb(14, 122, 50);\n        border-right: 1px solid rgb(14, 122, 50);\n    }\n    \n    .card-stats.card3 {\n        background: #228b22;\n    }\n    /* Footer */\n    \n    footer {\n        background: #333;\n        padding: 2rem;\n        color: white;\n    }\n    \n    h5 {\n        text-align: center;\n    }\n    \n    @media screen and (max-width: 500px) {\n        .slide .content {\n            bottom: -18.75rem;\n            left: 0;\n            width: 100%;\n        }\n        .slide.current .content {\n            transform: translateY(-18.75rem);\n        }\n    }\n    \n    @media screen and (min-width: 1000px) {\n        form {\n            margin-bottom: 3rem;\n        }\n    }\n    \n    @media screen and (max-width: 600px) {\n        .column {\n            display: block;\n            width: 100%;\n            margin-bottom: 20px;\n        }\n    }\n    \n    @media screen and (max-width: 1000px) {\n        .card-section {\n            height: 100%;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            background-color: ghostwhite;\n            overflow: hidden;\n        }\n    }\n    /* Background Images */\n    \n    .slide:first-child {\n        background: url('+d+") no-repeat center center/cover;\n    }\n    \n    .slide:nth-child(2) {\n        background: url("+l+") no-repeat center top/cover;\n    }\n    \n    .slide:nth-child(3) {\n        background: url("+u+") no-repeat center top/cover;\n    }\n    \n    .slide:nth-child(4) {\n        background: url("+p+") no-repeat center top/cover;\n    }",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var a=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([a]).join("\n")}var o,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"dfec4d8b50403a854439a652b6e3eec5.jpg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"9b175bfa561eb8e9c91460e850c9c873.jpg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"4b9ed7d5c1b8b27f6c949e171ea1863b.jpg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"a5b521110b555ff357d5bf033c0336db.jpg"},function(n,e){const t=document.querySelectorAll(".slide"),r=document.querySelector("#next"),a=document.querySelector("#prev");let i;function o(){const n=document.querySelector(".current");n.classList.remove("current"),n.nextElementSibling?n.nextElementSibling.classList.add("current"):t[0].classList.add("current"),setTimeout(()=>n.classList.remove("current"))}r.addEventListener("click",n=>{o(),clearInterval(i),i=setInterval(o,5e3)}),a.addEventListener("click",n=>{!function(){const n=document.querySelector(".current");n.classList.remove("current"),n.previousElementSibling?n.previousElementSibling.classList.add("current"):t[t.length-1].classList.add("current"),setTimeout(()=>n.classList.remove("current"))}(),clearInterval(i),i=setInterval(o,5e3)}),i=setInterval(o,5e3)},function(n,e){class t{async getCurrent(n){const e=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${n}&countrycode=gb&key=83d534996b6f4d78855bc4b7d54e6d41`),t=await e.json();return console.log(t),t}async getHikingData(n){const e=await fetch(n);return await e.json()}}const r=new t,a=new class{constructor(){this.uiContainer=document.querySelector(".card-section")}populateUI(n){const e=new t;let r=`https://www.hikingproject.com/data/get-trails?lat=${n.results[0].geometry.lat}&lon=${n.results[0].geometry.lng}&maxDistance=90&sort=distance&key=200804800-26d25f1775152845fd65fecad7ce8b07`;e.getHikingData(r).then(n=>{let e=n,t=e.trails[0].imgSmallMed,r=e.trails[1].imgSmallMed,a=e.trails[2].imgSmallMed;""===t&&(t="https://cdn2.apstatic.com/photos/hike/7016539_smallMed_1554827920.jpg"),""===r&&(r="https://cdn2.apstatic.com/photos/hike/7016539_smallMed_1554827920.jpg"),""===a&&(a="https://cdn2.apstatic.com/photos/hike/7016539_smallMed_1554827920.jpg"),console.log(e),this.uiContainer.innerHTML=`<div class="card">\n            <div class="card-image"><img class="hiking-image"src=${t}></div>\n            <div class="card-text">\n                <span class="date">Stars: ${e.trails[0].stars}</span>\n                <h2>${e.trails[0].name}</h2>\n                <p>${e.trails[0].summary}</p>\n            </div>\n            <div class="card-stats">\n                <div class="stat">\n                    <div class="value">Length</div>\n                    <div class="type">${e.trails[0].length}<sup>m</sup></div>\n                </div>\n                <div class="stat border">\n                    <div class="value">Difficulty</div>\n                    <div class="type">${e.trails[0].difficulty}</div>\n                </div>\n                <div class="stat">\n                    <div class="value">Map</div>\n                    <div class="type"><a href="${e.trails[0].url}">Link\n                </a></div>\n                </div>\n            </div>\n        </div>\n        <div class="card">\n            <div class="card-image"><img class="hiking-image"src=${r}></div>\n            <div class="card-text">\n                <span class="date">Stars: ${e.trails[1].stars}</span>\n                <h2>${e.trails[1].name}</h2>\n                <p>${e.trails[1].summary}</p>\n            </div>\n            <div class="card-stats">\n                <div class="stat">\n                    <div class="value">Length</div>\n                    <div class="type">${e.trails[1].length}<sup>m</sup></div>\n                </div>\n                <div class="stat border">\n                    <div class="value">Difficulty</div>\n                    <div class="type">${e.trails[1].difficulty}</div>\n                </div>\n                <div class="stat">\n                    <div class="value">Map</div>\n                    <div class="type"><a href="${e.trails[1].url}">Link\n                </a></div>\n                </div>\n            </div>\n        </div>\n        <div class="card">\n            <div class="card-image"><img class="hiking-image"src=${t}></div>\n            <div class="card-text">\n                <span class="date">Stars: ${e.trails[2].stars}</span>\n                <h2>${e.trails[2].name}</h2>\n                <p>${e.trails[2].summary}</p>\n            </div>\n            <div class="card-stats">\n                <div class="stat">\n                    <div class="value">Length</div>\n                    <div class="type">${e.trails[2].length}<sup>m</sup></div>\n                </div>\n                <div class="stat border">\n                    <div class="value">Difficulty</div>\n                    <div class="type">${e.trails[2].difficulty}</div>\n                </div>\n                <div class="stat">\n                    <div class="value">Map</div>\n                    <div class="type"><a href=${e.trails[2].url}>Link\n                </a></div>\n                </div>\n            </div>\n        </div>`})}},i=document.querySelector("#location");document.querySelector("#sendBtn").addEventListener("click",()=>{const n=i.value;r.getCurrent(n).then(n=>{a.populateUI(n)})})}]);