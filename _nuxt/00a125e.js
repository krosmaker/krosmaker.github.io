(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0be3e1fa",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";n.r(e);n(60);var r=n(21),o=n(22),c=n(32),f=n(27),d=n(19),l=n(11),h=(n(13),n(1)),y=n(161),m=n(216),v=n(82);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(c.a)(n,t);var e=j(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"isKrosmaster",get:function(){return"minion"!==this.$store.state.krosmaster.type}},{key:"cardWidth",get:function(){var t=this.$store.state.display;return t.mode===m.DisplayMode.PRINT?t.targetKrosmasterWidth+2*t.bleedingOffset:v.d}},{key:"cardHeight",get:function(){var t=this.$store.state.display;return t.mode===m.DisplayMode.PRINT?t.targetKrosmasterHeight+2*t.bleedingOffset:v.c}},{key:"minionCardWidth",get:function(){var t=this.$store.state.display;return t.mode===m.DisplayMode.PRINT?t.targetMinionWidth+2*t.bleedingOffset:v.j}},{key:"minionCardHeight",get:function(){var t=this.$store.state.display;return t.mode===m.DisplayMode.PRINT?t.targetMinionHeight+2*t.bleedingOffset:v.i}}]),n}(h.a);O([Object(y.b)({type:String})],R.prototype,"image",void 0),O([Object(y.b)({type:String})],R.prototype,"minionImage",void 0);var k=R=O([y.a],R),w=(n(402),n(73)),component=Object(w.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isKrosmaster?e("img",{staticClass:"background-image",style:{width:"".concat(t.cardWidth,"px"),height:"".concat(t.cardHeight,"px")},attrs:{src:t.image}}):e("img",{staticClass:"background-image",style:{width:"".concat(t.minionCardWidth,"px"),height:"".concat(t.minionCardHeight,"px")},attrs:{src:t.minionImage}})}),[],!1,null,"7c6d283f",null);e.default=component.exports},402:function(t,e,n){"use strict";n(375)},403:function(t,e,n){var r=n(14)(!1);r.push([t.i,".background-image[data-v-7c6d283f]{border-radius:inherit;-o-object-fit:none;object-fit:none;-o-object-position:center;object-position:center}",""]),t.exports=r}}]);