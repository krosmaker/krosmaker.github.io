(window.webpackJsonp=window.webpackJsonp||[]).push([[17,18,20],{378:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(19),d=r(11),h=(r(13),r(1)),m=r(162),v=r(217),y=r(215),k=r(82);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=x(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"isRegularSize",get:function(){return this.$store.state.card.type===y.CardType.FIGHTER&&"minion"!==this.$store.state.krosmaster.type}},{key:"cardWidth",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetKrosmasterWidth+2*t.bleedingOffset:k.f}},{key:"cardHeight",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetKrosmasterHeight+2*t.bleedingOffset:k.e}},{key:"smallCardWidth",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetMinionWidth+2*t.bleedingOffset:k.n}},{key:"smallCardHeight",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetMinionHeight+2*t.bleedingOffset:k.m}}]),r}(h.a);O([Object(m.b)({type:String,default:""})],j.prototype,"image",void 0),O([Object(m.b)({type:String,default:""})],j.prototype,"smallImage",void 0);var R=j=O([m.a],j),C=(r(402),r(73)),component=Object(C.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isRegularSize?e("img",{staticClass:"background-image",style:{width:"".concat(t.cardWidth,"px"),height:"".concat(t.cardHeight,"px")},attrs:{src:t.image}}):e("img",{staticClass:"background-image",style:{width:"".concat(t.smallCardWidth,"px"),height:"".concat(t.smallCardHeight,"px")},attrs:{src:t.smallImage}})}),[],!1,null,"34ef9b6b",null);e.default=component.exports},379:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(19),d=r(11),h=(r(13),r(1)),m=r(162),v=r(217),y=r(215),k=r(82);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=x(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"isSmall",get:function(){return this.$store.state.card.type===y.CardType.FAVOR||"minion"===this.$store.state.krosmaster.type}},{key:"offsetX",get:function(){var t=this.$store.state.display;if(t.mode===v.DisplayMode.PRINT){var e=this.isSmall?t.targetMinionWidth:t.targetKrosmasterWidth,r=this.isSmall?k.n:k.f;return t.bleedingOffset+(e-r)/2}return 0}},{key:"offsetY",get:function(){var t=this.$store.state.display;if(t.mode===v.DisplayMode.PRINT){var e=this.isSmall?t.targetMinionHeight:t.targetKrosmasterHeight,r=this.isSmall?k.m:k.e;return t.bleedingOffset+(e-r)/2}return 0}}]),r}(h.a),R=j=O([m.a],j),C=(r(404),r(73)),component=Object(C.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"data-container",class:{"small-data-container":t.isSmall},style:{top:"".concat(t.offsetY,"px"),left:"".concat(t.offsetX,"px")}},[t._t("default")],2)}),[],!1,null,"1fb2cd21",null);e.default=component.exports},380:function(t,e,r){var content=r(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("66cf135e",content,!0,{sourceMap:!1})},381:function(t,e,r){var content=r(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("355cc3ac",content,!0,{sourceMap:!1})},402:function(t,e,r){"use strict";r(380)},403:function(t,e,r){var n=r(14)(!1);n.push([t.i,".background-image[data-v-34ef9b6b]{border-radius:inherit;-o-object-fit:none;object-fit:none;-o-object-position:center;object-position:center}",""]),t.exports=n},404:function(t,e,r){"use strict";r(381)},405:function(t,e,r){var n=r(14)(!1);n.push([t.i,".data-container[data-v-1fb2cd21]{position:absolute;width:1038px;height:744px}.small-data-container[data-v-1fb2cd21]{width:792px;height:519px}",""]),t.exports=n},433:function(t,e,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("1e90fe12",content,!0,{sourceMap:!1})},516:function(t,e,r){t.exports=r.p+"img/frame.ca88d84.png"},517:function(t,e,r){t.exports=r.p+"img/frame-minion.9a361e5.png"},518:function(t,e,r){"use strict";r(433)},519:function(t,e,r){var n=r(14)(!1);n.push([t.i,'.card-back[data-v-5f2ff008]{cursor:pointer;overflow:hidden;border-radius:inherit}.card-back .artwork[data-v-5f2ff008]{position:absolute;top:31px;left:44px;width:950px;height:675px}.card-back .artwork-minion[data-v-5f2ff008]{position:absolute;top:28px;left:28px;width:735px;height:466px}.card-back .frame[data-v-5f2ff008]{position:absolute;top:0;left:0;width:100%;height:100%}.card-back .version[data-v-5f2ff008],.card-back .watermark[data-v-5f2ff008]{position:absolute;font-family:"Helvetica Neue","Verdana";letter-spacing:.5px}.card-back .watermark[data-v-5f2ff008]{font-size:20px;color:#c39822;transform:rotate(-90deg);transform-origin:0 0;left:1003px;top:440px}.card-back .watermark-minion[data-v-5f2ff008]{left:764px;top:315px}.card-back .version[data-v-5f2ff008]{font-size:18px;color:#aa8213;right:45px;bottom:2px}.card-back .version-minion[data-v-5f2ff008]{bottom:-3px}',""]),t.exports=n},577:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(19),d=r(11),h=(r(13),r(1)),m=r(162),v=r(216);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var k=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(c.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"cardImage",get:function(){var t=this.$store.state.background;return t.useCropped?t.cropped:t.original}},{key:"isKrosmaster",get:function(){return"minion"!==this.$store.state.krosmaster.type}},{key:"version",get:function(){return this.$store.state.card.version||""}},{key:"onCardClick",value:function(){var t=this.$store;t.commit("sidebar/setExpand",!0),t.commit("sidebar/setActiveTab",v.TabId.ARTWORK)}}]),r}(h.a),O=x=k([m.a],x),j=(r(518),r(73)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"card-back",on:{click:function(e){return e.stopPropagation(),t.onCardClick.apply(null,arguments)}}},[e("CardContentContainer",[e("img",{class:{artwork:t.isKrosmaster,"artwork-minion":!t.isKrosmaster},attrs:{src:t.cardImage}})]),t._v(" "),e("CardBackground",{staticClass:"frame",attrs:{image:r(516),smallImage:r(517)}}),t._v(" "),e("CardContentContainer",[e("div",{class:{watermark:!0,"watermark-minion":!t.isKrosmaster}},[t._v("\n      @Krosmaker\n    ")]),t._v(" "),e("div",{class:{version:!0,"version-minion":!t.isKrosmaster}},[t._v("\n      "+t._s(t.version)+"\n    ")])])],1)}),[],!1,null,"5f2ff008",null);e.default=component.exports;installComponents(component,{CardContentContainer:r(379).default,CardBackground:r(378).default})}}]);