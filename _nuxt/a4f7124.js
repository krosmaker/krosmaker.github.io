(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{379:function(t,e,n){"use strict";n.r(e);n(60);var r=n(21),o=n(22),c=n(32),f=n(27),l=n(19),d=n(11),h=(n(13),n(1)),y=n(162),v=n(217),m=n(215),O=n(82);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=R(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"isSmall",get:function(){return this.$store.state.card.type===m.CardType.FAVOR||"minion"===this.$store.state.krosmaster.type}},{key:"offsetX",get:function(){var t=this.$store.state.display;if(t.mode===v.DisplayMode.PRINT){var e=this.isSmall?t.targetMinionWidth:t.targetKrosmasterWidth,n=this.isSmall?O.n:O.f;return t.bleedingOffset+(e-n)/2}return 0}},{key:"offsetY",get:function(){var t=this.$store.state.display;if(t.mode===v.DisplayMode.PRINT){var e=this.isSmall?t.targetMinionHeight:t.targetKrosmasterHeight,n=this.isSmall?O.m:O.e;return t.bleedingOffset+(e-n)/2}return 0}}]),n}(h.a),w=x=j([y.a],x),_=(n(404),n(73)),component=Object(_.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"data-container",class:{"small-data-container":t.isSmall},style:{top:"".concat(t.offsetY,"px"),left:"".concat(t.offsetX,"px")}},[t._t("default")],2)}),[],!1,null,"1fb2cd21",null);e.default=component.exports},381:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("355cc3ac",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n(381)},405:function(t,e,n){var r=n(14)(!1);r.push([t.i,".data-container[data-v-1fb2cd21]{position:absolute;width:1038px;height:744px}.small-data-container[data-v-1fb2cd21]{width:792px;height:519px}",""]),t.exports=r}}]);