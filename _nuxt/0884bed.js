(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16,19,20,24,25,27],{362:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("ecd8cdde",content,!0,{sourceMap:!1})},373:function(t,e,n){var content=n(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("607c29cf",content,!0,{sourceMap:!1})},374:function(t,e,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("13f41394",content,!0,{sourceMap:!1})},375:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("afe24d8c",content,!0,{sourceMap:!1})},378:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("61dfef88",content,!0,{sourceMap:!1})},388:function(t,e,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("a76b561e",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n(362)},390:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.statistic-container[data-v-3a274909]{font-family:"Helvetica Neue"}.statistic-container .statistic[data-v-3a274909]{text-align:center;-webkit-text-stroke:1px #fff;color:#fff;font-size:31px;font-weight:900;width:50px}.statistic-container .statistic-windows[data-v-3a274909]{font-size:30px;margin-top:-4px;margin-bottom:.15em}.statistic-container .hp[data-v-3a274909]{margin-left:-1px;margin-right:1px}.statistic-container .mp[data-v-3a274909],.statistic-container .mp-label[data-v-3a274909]{text-shadow:0 0 5px #4d7015,0 0 5px #4d7015,0 0 5px #4d7015,0 0 5px #4d7015,0 0 5px #4d7015,0 0 5px #4d7015}.statistic-container .hp[data-v-3a274909],.statistic-container .hp-label[data-v-3a274909]{text-shadow:0 0 5px #d42637,0 0 5px #d42637,0 0 5px #d42637,0 0 5px #d42637,0 0 5px #d42637,0 0 5px #d42637}.statistic-container .ap[data-v-3a274909],.statistic-container .ap-label[data-v-3a274909]{text-shadow:0 0 5px #2145ab,0 0 5px #2145ab,0 0 5px #2145ab,0 0 5px #2145ab,0 0 5px #2145ab,0 0 5px #2145ab}.statistic-container .statistic-label[data-v-3a274909]{text-transform:uppercase;margin-top:-1.4em;font-size:10px;font-weight:900;letter-spacing:.5px}.minion-statistic-container[data-v-3a274909]{margin-right:1.05em}.minion-statistic-container .statistic[data-v-3a274909]{font-size:37px}.minion-statistic-container .statistic-label[data-v-3a274909]{margin-top:-1.7em}',""]),t.exports=r},411:function(t,e,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("35d89d1f",content,!0,{sourceMap:!1})},412:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("020605d5",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(30),c=n(29),f=n(26),l=n(19),d=n(11),v=(n(13),n(0)),h=n(150),m=n(357);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"value",get:function(){return this.$store.state.krosmaster[this.type]},set:function(t){var e=this.type.toUpperCase();this.$store.commit("export/setDirty",!0),""!==t&&"-"!==t&&isNaN(parseInt(t))||this.$store.commit("krosmaster/set".concat(e),t)}},{key:"isMinion",get:function(){return"minion"===this.$store.state.krosmaster.type}},{key:"isWindows",get:function(){return Object(m.a)()}}]),n}(v.a);x([Object(h.b)({type:String,required:!0})],O.prototype,"type",void 0);var j=O=x([h.a],O),R=(n(389),n(74)),k=n(151),_=n.n(k),w=n(530),component=Object(R.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"statistic-container",class:{"minion-statistic-container":t.isMinion},attrs:{column:"","justify-center":"","align-center":""}},[n("PlainInput",{staticClass:"statistic",class:[t.type,{"statistic-windows":t.isWindows}],attrs:{number:"",limit:"hp"===t.type?2:1,allowMinus:!0},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("span",{staticClass:"statistic-label",class:t.type+"-label"},[t._v("\n    "+t._s(t.$t("card."+t.type))+"\n  ")])],1)}),[],!1,null,"3a274909",null);e.default=component.exports;_()(component,{PlainInput:n(359).default}),_()(component,{VLayout:w.a})},430:function(t,e,n){"use strict";n(373)},431:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.name-container[data-v-364b2dea]{font-family:"Berlin Sans";text-transform:uppercase;font-size:22px;width:521px;white-space:pre}.name-container .name[data-v-364b2dea]{white-space:nowrap;text-transform:uppercase;outline:0 solid transparent;position:absolute;left:0;top:0;width:390.75px}.name-container .common[data-v-364b2dea]{color:#eee}.name-container .elite[data-v-364b2dea],.name-container .name-shadow[data-v-364b2dea]{-webkit-text-fill-color:transparent}.name-container .name-shadow[data-v-364b2dea]{color:#000;text-shadow:-1px -1px 1px rgba(0,0,0,.73333),-1px -1px 2px rgba(0,0,0,.73333),1px 1px 2px rgba(0,0,0,.73333),1px 1px 3px rgba(0,0,0,.73333);position:absolute;left:1px;top:1px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.name-container .elite-name[data-v-364b2dea]{position:absolute;width:390.75px;height:40px;left:0;top:0}.name-container .elite-name .elite-name-text[data-v-364b2dea]{fill:url(#elite-name-gradient);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',""]),t.exports=r},432:function(t,e,n){"use strict";n(374)},433:function(t,e,n){var r=n(15)(!1);r.push([t.i,".statistics .statistic-container[data-v-c1f4bf24]{padding-left:3px;padding-right:2px}",""]),t.exports=r},434:function(t,e,n){"use strict";n(375)},435:function(t,e,n){var r=n(15)(!1);r.push([t.i,".figurine[data-v-043ba1c6]{cursor:pointer}",""]),t.exports=r},436:function(t,e,n){t.exports=n.p+"img/frame.515c13a.png"},437:function(t,e,n){t.exports=n.p+"img/frame-minion.50254a7.png"},438:function(t,e,n){"use strict";n(378)},439:function(t,e,n){var r=n(15)(!1);r.push([t.i,".frame[data-v-7c9fd384]{border-radius:inherit}",""]),t.exports=r},446:function(t,e,n){var content=n(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("b337dc40",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(30),c=n(29),f=n(26),l=n(19),d=n(11),v=(n(13),n(20),n(0)),h=n(150);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"content",get:function(){return this.$store.state.krosmaster.name},set:function(content){this.$store.commit("export/setDirty",!0),this.$store.commit("krosmaster/setName",content)}},{key:"isElite",get:function(){return"elite"===this.$store.state.krosmaster.type}},{key:"isExporting",get:function(){return this.$store.state.export.isExporting}}]),n}(v.a),O=x=y([h.a],x),j=(n(430),n(74)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name-container"},[n("div",{staticClass:"name-shadow"},[t._v(t._s(t.content))]),t._v(" "),t.isElite?n("svg",{staticClass:"elite-name"},[n("linearGradient",{attrs:{id:"elite-name-gradient",gradientTransform:"rotate(90)"}},[n("stop",{attrs:{offset:"38%","stop-color":"#eeeeee"}}),t._v(" "),n("stop",{attrs:{offset:"41%","stop-color":"#fabc38"}}),t._v(" "),n("stop",{attrs:{offset:"43%","stop-color":"#fdcc35"}}),t._v(" "),n("stop",{attrs:{offset:"55%","stop-color":"#cb883d"}})],1),t._v(" "),n("text",{staticClass:"elite-name-text",attrs:{x:"0",y:"24"}},[t._v(t._s(t.content))])],1):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"name",class:{elite:t.isElite,common:!t.isElite},attrs:{type:"text",maxlength:"30"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])}),[],!1,null,"364b2dea",null);e.default=component.exports},450:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(29),c=n(26),f=n(19),l=n(11),d=(n(13),n(150));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.c),y=m=h([d.a],m),x=(n(432),n(74)),O=n(151),j=n.n(O),R=n(530),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"statistics",attrs:{row:""}},[n("Statistic",{staticClass:"statistic-container",attrs:{type:"mp"}}),t._v(" "),n("Statistic",{staticClass:"statistic-container",attrs:{type:"hp"}}),t._v(" "),n("Statistic",{staticClass:"statistic-container",attrs:{type:"ap"}})],1)}),[],!1,null,"c1f4bf24",null);e.default=component.exports;j()(component,{Statistic:n(427).default}),j()(component,{VLayout:R.a})},451:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(30),c=n(29),f=n(26),l=n(19),d=n(11),v=(n(13),n(0)),h=n(150),m=n(207);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"offsetX",get:function(){var t="minion"===this.$store.state.krosmaster.type;return this.$store.state.figurine.offsetX-(t?75:0)}},{key:"offsetY",get:function(){return this.$store.state.figurine.offsetY}},{key:"height",get:function(){return this.$store.state.figurine.height}},{key:"figurineImage",get:function(){var t=this.$store.state.figurine;return t.useCropped?t.cropped:t.original}},{key:"onClick",value:function(){var t=this.$store;t.commit("sidebar/setExpand",!0),t.commit("sidebar/setActiveTab",m.TabId.FIGURINE)}}]),n}(v.a),j=O=x([h.a],O),R=(n(434),n(74)),component=Object(R.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{style:{left:t.offsetX/10+"%",top:t.offsetY/10+"%",height:t.height+"px"},attrs:{src:t.figurineImage},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}})}),[],!1,null,"043ba1c6",null);e.default=component.exports},454:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(30),c=n(29),f=n(26),l=n(19),d=n(11),v=(n(13),n(0)),h=n(150);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"isKrosmaster",get:function(){return"minion"!==this.$store.state.krosmaster.type}}]),n}(v.a),O=x=y([h.a],x),j=(n(438),n(74)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isKrosmaster?r("img",{staticClass:"frame",attrs:{src:n(436)}}):r("img",{staticClass:"frame",attrs:{src:n(437)}})])}),[],!1,null,"7c9fd384",null);e.default=component.exports},460:function(t,e,n){t.exports=n.p+"img/background.7113cee.png"},461:function(t,e,n){t.exports=n.p+"img/background-minion.00ee60a.png"},462:function(t,e,n){"use strict";n(388)},463:function(t,e,n){var r=n(15)(!1);r.push([t.i,".card-front[data-v-4b1a4ca5]{border-radius:inherit}.card-front .background[data-v-4b1a4ca5]{border-radius:inherit;position:absolute;left:0;top:0}.card-front .name[data-v-4b1a4ca5]{position:absolute;left:5%;top:4.8%}.card-front .statistics[data-v-4b1a4ca5]{position:absolute;left:43.2%;top:20%}.card-front .figurine[data-v-4b1a4ca5]{position:absolute}.card-front .abilities[data-v-4b1a4ca5]{position:absolute;top:30%}.card-front-minion .name[data-v-4b1a4ca5]{left:5.4%;top:9.5%}.card-front-minion .statistics[data-v-4b1a4ca5]{left:16.8%;top:30%}.card-front-minion .abilities[data-v-4b1a4ca5]{top:53%}",""]),t.exports=r},477:function(t,e,n){"use strict";n(411)},478:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.card-back[data-v-400f4764]{cursor:pointer;overflow:hidden;border-radius:inherit}.card-back .artwork[data-v-400f4764]{position:absolute;top:16px;left:23px;width:475px;height:337px}.card-back .artwork-minion[data-v-400f4764]{position:absolute;top:13px;left:17px;width:368px;height:233px}.card-back .frame[data-v-400f4764]{position:absolute;width:100%;height:100%;border-radius:inherit}.card-back .version[data-v-400f4764],.card-back .watermark[data-v-400f4764]{position:absolute;font-family:"Helvetica Neue","Verdana";letter-spacing:.5px;font-size:10px}.card-back .watermark[data-v-400f4764]{color:#c39822;transform:rotate(-90deg);transform-origin:0 0;left:96.5%;top:59%}.card-back .watermark-minion[data-v-400f4764]{left:96.3%;top:62%}.card-back .version[data-v-400f4764]{color:#aa8213;right:4.5%;bottom:.4%}.card-back .version-minion[data-v-400f4764]{bottom:-.6%}',""]),t.exports=r},479:function(t,e,n){"use strict";n(412)},480:function(t,e,n){var r=n(15)(!1);r.push([t.i,".flippable[data-v-51a4007a]{transition:transform .5s;transform-style:preserve-3d}.flippable .back[data-v-51a4007a],.flippable .front[data-v-51a4007a]{width:100%;height:100%;overflow:hidden;position:absolute;border-radius:inherit;-webkit-backface-visibility:hidden;backface-visibility:hidden}.flippable .back[data-v-51a4007a]{transform:rotateY(180deg)}.flippable .is-bottom[data-v-51a4007a]{pointer-events:none}.is-flipped[data-v-51a4007a]{transform:rotateY(180deg)}",""]),t.exports=r},520:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(30),c=n(29),f=n(26),l=n(19),d=n(11),v=(n(13),n(0)),h=n(150);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"isKrosmaster",get:function(){return"minion"!==this.$store.state.krosmaster.type}}]),n}(v.a),O=x=y([h.a],x),j=(n(462),n(74)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-front",class:{"card-front-minion":!t.isKrosmaster}},[t.isKrosmaster?r("img",{staticClass:"background",attrs:{src:n(460)}}):r("img",{staticClass:"background",attrs:{src:n(461)}}),t._v(" "),r("FighterName",{staticClass:"name"}),t._v(" "),r("Statistics",{staticClass:"statistics"}),t._v(" "),r("Figurine",{staticClass:"figurine"}),t._v(" "),r("Abilities",{staticClass:"abilities"})],1)}),[],!1,null,"4b1a4ca5",null);e.default=component.exports;installComponents(component,{FighterName:n(449).default,Statistics:n(450).default,Figurine:n(451).default,Abilities:n(516).default})},521:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(30),c=n(29),f=n(26),l=n(19),d=n(11),v=(n(13),n(0)),h=n(150),m=n(207);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"cardImage",get:function(){var t=this.$store.state.background;return t.useCropped?t.cropped:t.original}},{key:"isKrosmaster",get:function(){return"minion"!==this.$store.state.krosmaster.type}},{key:"version",get:function(){return this.$store.state.krosmaster.version||""}},{key:"onCardClick",value:function(){var t=this.$store;t.commit("sidebar/setExpand",!0),t.commit("sidebar/setActiveTab",m.TabId.ARTWORK)}}]),n}(v.a),j=O=x([h.a],O),R=(n(477),n(74)),component=Object(R.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-back",on:{click:function(e){return e.stopPropagation(),t.onCardClick(e)}}},[n("img",{class:{artwork:t.isKrosmaster,"artwork-minion":!t.isKrosmaster},attrs:{src:t.cardImage}}),t._v(" "),n("CardFrame",{staticClass:"frame"}),t._v(" "),n("div",{class:{watermark:!0,"watermark-minion":!t.isKrosmaster}},[t._v("\n    @Krosmaker\n  ")]),t._v(" "),n("div",{class:{version:!0,"version-minion":!t.isKrosmaster}},[t._v("\n    "+t._s(t.version)+"\n  ")])],1)}),[],!1,null,"400f4764",null);e.default=component.exports;installComponents(component,{CardFrame:n(454).default})},522:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(29),c=n(26),f=n(19),l=n(11),d=(n(13),n(0)),v=n(150);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.a);m([Object(v.b)({type:Boolean,default:!0})],y.prototype,"isFlipped",void 0);var x=y=m([v.a],y),O=(n(479),n(74)),component=Object(O.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flippable",class:{"is-flipped":t.isFlipped}},[n("div",{staticClass:"front",class:{"is-bottom":t.isFlipped}},[t._t("front")],2),t._v(" "),n("div",{staticClass:"back",class:{"is-bottom":!t.isFlipped}},[t._t("back")],2)])}),[],!1,null,"51a4007a",null);e.default=component.exports},528:function(t,e,n){"use strict";n(446)},529:function(t,e,n){var r=n(15)(!1);r.push([t.i,".card[data-v-504e4280]{position:relative;width:100%;height:100%}.card .card-back[data-v-504e4280],.card .card-front[data-v-504e4280]{width:inherit;height:inherit;overflow:hidden;border-radius:inherit}.card-minion[data-v-504e4280]{width:402px;height:258px}.is-rounded[data-v-504e4280]{border-radius:18px}",""]),t.exports=r},530:function(t,e,n){"use strict";n(154);var r=n(156);e.a=Object(r.a)("layout")},548:function(t,e,n){"use strict";n.r(e);n(58);var r=n(21),o=n(30),c=n(29),f=n(26),l=n(19),d=n(11),v=(n(13),n(0)),h=n(150);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"isMinion",get:function(){return"minion"===this.$store.state.krosmaster.type}}]),n}(v.a);y([Object(h.b)({type:Boolean,default:!1})],x.prototype,"isFlipped",void 0),y([Object(h.b)({type:Boolean,default:!0})],x.prototype,"isRounded",void 0);var O=x=y([h.a],x),j=(n(528),n(74)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Flippable",{staticClass:"card",class:{"is-rounded":t.isRounded,"card-minion":t.isMinion},attrs:{"is-flipped":t.isFlipped},scopedSlots:t._u([{key:"front",fn:function(){return[n("CardFront",{ref:"front",staticClass:"card-front",class:{"is-rounded":t.isRounded}})]},proxy:!0},{key:"back",fn:function(){return[n("CardBack",{ref:"back",staticClass:"card-back",class:{"is-rounded":t.isRounded}})]},proxy:!0}])})}),[],!1,null,"504e4280",null);e.default=component.exports;installComponents(component,{CardFront:n(520).default,CardBack:n(521).default,Flippable:n(522).default})}}]);