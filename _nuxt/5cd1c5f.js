(window.webpackJsonp=window.webpackJsonp||[]).push([[25,20,21,23],{375:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(18),d=r(11),h=(r(12),r(1)),y=r(166),v=r(131),O=r(132),m=r(218);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var R=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},k=function(t){Object(c.a)(r,t);var e=j(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"cardType",get:function(){return this.$store.state.card.type}},{key:"isFighter",get:function(){return this.cardType===O.CardType.FIGHTER}},{key:"isFavor",get:function(){return this.cardType===O.CardType.FAVOR}},{key:"isChallenge",get:function(){return this.cardType===O.CardType.CHALLENGE}},{key:"fighterState",get:function(){var t=this.$store.state.fighter;return t.twoSided&&this.isFlipped?this.$store.state.reverse:t}},{key:"isTwoSided",get:function(){return this.$store.state.fighter.twoSided}},{key:"isKrosmaster",get:function(){return this.fighterState.type!==v.b.MINION}},{key:"isMinion",get:function(){return this.fighterState.type===v.b.MINION}},{key:"isFlipped",get:function(){return this.$store.state.display.isFlipped},set:function(t){this.isFighter&&this.isTwoSided&&this.$store.commit("sidebar/reset"),this.$store.commit("display/setFlipped",t)}},{key:"isRegularSize",get:function(){return this.isFighter&&this.isKrosmaster||this.isChallenge}},{key:"isSmallSize",get:function(){return this.isFighter&&this.isMinion||this.isFavor}},{key:"isRounded",get:function(){var t=this.$store.state.display;return t.mode===m.DisplayMode.PLAY&&t.roundedCorners}}]),r}(h.a);k=R([y.a],k),e.default=k},380:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(18),d=r(11),h=(r(12),r(166)),y=r(375),v=r(218),O=r(82);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"cardWidth",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetKrosmasterWidth+2*t.bleedingOffset:O.f}},{key:"cardHeight",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetKrosmasterHeight+2*t.bleedingOffset:O.e}},{key:"smallCardWidth",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetMinionWidth+2*t.bleedingOffset:O.n}},{key:"smallCardHeight",get:function(){var t=this.$store.state.display;return t.mode===v.DisplayMode.PRINT?t.targetMinionHeight+2*t.bleedingOffset:O.m}}]),r}(y.default);j([Object(h.b)({type:String,default:""})],R.prototype,"image",void 0),j([Object(h.b)({type:String,default:""})],R.prototype,"smallImage",void 0);var k=R=j([h.a],R),x=(r(401),r(73)),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isRegularSize?e("img",{staticClass:"background-image",style:{width:"".concat(t.cardWidth,"px"),height:"".concat(t.cardHeight,"px")},attrs:{src:t.image}}):e("img",{staticClass:"background-image",style:{width:"".concat(t.smallCardWidth,"px"),height:"".concat(t.smallCardHeight,"px")},attrs:{src:t.smallImage}})}),[],!1,null,"50436a17",null);e.default=component.exports},381:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(18),d=r(11),h=(r(12),r(166)),y=r(375),v=r(218),O=r(82);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"offsetX",get:function(){var t=this.$store.state.display,e=this.isSmallSize;if(t.mode===v.DisplayMode.PRINT){var r=e?t.targetMinionWidth:t.targetKrosmasterWidth,n=e?O.n:O.f;return t.bleedingOffset+(r-n)/2}return 0}},{key:"offsetY",get:function(){var t=this.$store.state.display,e=this.isSmallSize;if(t.mode===v.DisplayMode.PRINT){var r=e?t.targetMinionHeight:t.targetKrosmasterHeight,n=e?O.m:O.e;return t.bleedingOffset+(r-n)/2}return 0}}]),r}(y.default),k=R=j([h.a],R),x=(r(406),r(73)),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"data-container",class:{"small-data-container":t.isSmallSize},style:{top:"".concat(t.offsetY,"px"),left:"".concat(t.offsetX,"px")}},[t._t("default")],2)}),[],!1,null,"2319cc07",null);e.default=component.exports},385:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("4d6bdb5c",content,!0,{sourceMap:!1})},386:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("1eb73c37",content,!0,{sourceMap:!1})},401:function(t,e,r){"use strict";r(385)},402:function(t,e,r){var n=r(13)(!1);n.push([t.i,".background-image[data-v-50436a17]{border-radius:inherit;-o-object-fit:none;object-fit:none;-o-object-position:center;object-position:center}",""]),t.exports=n},406:function(t,e,r){"use strict";r(386)},407:function(t,e,r){var n=r(13)(!1);n.push([t.i,".data-container[data-v-2319cc07]{position:absolute;width:1038px;height:744px}.small-data-container[data-v-2319cc07]{width:792px;height:519px}",""]),t.exports=n},485:function(t,e,r){var content=r(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("38ed6952",content,!0,{sourceMap:!1})},559:function(t,e,r){"use strict";r(485)},560:function(t,e,r){var n=r(13)(!1);n.push([t.i,'.card-back[data-v-1bc223c9]{cursor:pointer;overflow:hidden;border-radius:inherit}.card-back .version[data-v-1bc223c9],.card-back .watermark[data-v-1bc223c9]{font-family:"Helvetica Neue","Verdana";letter-spacing:.5px;color:rgba(164,110,195,.6)}.card-back .watermark[data-v-1bc223c9]{position:absolute;left:1003px;top:440px;font-size:20px;transform:rotate(-90deg);transform-origin:0 0}.card-back .version[data-v-1bc223c9]{position:absolute;font-size:18px;right:32px;bottom:2px}',""]),t.exports=n},618:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(18),d=r(11),h=(r(12),r(1)),y=r(166),v=r(219);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(c.a)(r,t);var e=O(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"artwork",get:function(){var t=this.$store.state.background;return t.useCropped?t.cropped:t.original}},{key:"version",get:function(){return this.$store.state.card.version||""}},{key:"onCardClick",value:function(){var t=this.$store;t.commit("sidebar/setExpand",!0),t.commit("sidebar/setActiveTab",v.TabId.ARTWORK)}}]),r}(h.a),R=j=m([y.a],j),k=(r(559),r(73)),component=Object(k.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"card-back",on:{click:function(e){return e.stopPropagation(),t.onCardClick.apply(null,arguments)}}},[e("CardBackground",{attrs:{image:t.artwork}}),t._v(" "),e("CardContentContainer",[e("div",{staticClass:"watermark"},[t._v("@Krosmaker")]),t._v(" "),e("div",{staticClass:"version"},[t._v(t._s(t.version))])])],1)}),[],!1,null,"1bc223c9",null);e.default=component.exports;installComponents(component,{CardBackground:r(380).default,CardContentContainer:r(381).default})}}]);