(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(20),d=r(11),h=(r(13),r(1)),y=r(163),v=r(217),m=r(128),O=r(82);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(c.a)(r,t);var e=R(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"isSmall",get:function(){var t=this.$store.state.card.type;return t===m.CardType.FIGHTER&&"minion"===this.$store.state.krosmaster.type||t===m.CardType.FAVOR}},{key:"offsetX",get:function(){var t=this.$store.state.display;if(t.mode===v.DisplayMode.PRINT){var e=this.isSmall?t.targetMinionWidth:t.targetKrosmasterWidth,r=this.isSmall?O.n:O.f;return t.bleedingOffset+(e-r)/2}return 0}},{key:"offsetY",get:function(){var t=this.$store.state.display;if(t.mode===v.DisplayMode.PRINT){var e=this.isSmall?t.targetMinionHeight:t.targetKrosmasterHeight,r=this.isSmall?O.m:O.e;return t.bleedingOffset+(e-r)/2}return 0}}]),r}(h.a),w=x=j([y.a],x),_=(r(395),r(73)),component=Object(_.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"data-container",class:{"small-data-container":t.isSmall},style:{top:"".concat(t.offsetY,"px"),left:"".concat(t.offsetX,"px")}},[t._t("default")],2)}),[],!1,null,"1f010752",null);e.default=component.exports},380:function(t,e,r){var content=r(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("08621621",content,!0,{sourceMap:!1})},395:function(t,e,r){"use strict";r(380)},396:function(t,e,r){var n=r(14)(!1);n.push([t.i,".data-container[data-v-1f010752]{position:absolute;width:1038px;height:744px}.small-data-container[data-v-1f010752]{width:792px;height:519px}",""]),t.exports=n}}]);