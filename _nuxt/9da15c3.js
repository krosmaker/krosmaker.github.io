(window.webpackJsonp=window.webpackJsonp||[]).push([[18,16,20,44],{375:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),l=r(27),f=r(18),d=r(11),h=(r(12),r(1)),y=r(166),v=r(131),m=r(132),O=r(218);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var k=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},$=function(t){Object(c.a)(r,t);var e=T(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"cardType",get:function(){return this.$store.state.card.type}},{key:"isFighter",get:function(){return this.cardType===m.CardType.FIGHTER}},{key:"isFavor",get:function(){return this.cardType===m.CardType.FAVOR}},{key:"isChallenge",get:function(){return this.cardType===m.CardType.CHALLENGE}},{key:"fighterState",get:function(){var t=this.$store.state.fighter;return t.twoSided&&this.isFlipped?this.$store.state.reverse:t}},{key:"isTwoSided",get:function(){return this.$store.state.fighter.twoSided}},{key:"isKrosmaster",get:function(){return this.fighterState.type!==v.b.MINION}},{key:"isMinion",get:function(){return this.fighterState.type===v.b.MINION}},{key:"isFlipped",get:function(){return this.$store.state.display.isFlipped},set:function(t){this.isFighter&&this.isTwoSided&&this.$store.commit("sidebar/reset"),this.$store.commit("display/setFlipped",t)}},{key:"isRegularSize",get:function(){return this.isFighter&&this.isKrosmaster||this.isChallenge}},{key:"isSmallSize",get:function(){return this.isFighter&&this.isMinion||this.isFavor}},{key:"isRounded",get:function(){var t=this.$store.state.display;return t.mode===O.DisplayMode.PLAY&&t.roundedCorners}}]),r}(h.a);$=k([y.a],$),e.default=$},376:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),l=r(27),f=r(18),d=r(11),h=(r(12),r(166)),y=r(101);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"setDirty",value:function(){this.$store.commit("export/setDirty",!0)}},{key:"commitToFighterStore",value:function(t,e){var r=this.$store.state.fighter.twoSided&&this.isFlipped?"reverse":"fighter";this.$store.commit("".concat(r,"/").concat(t),e)}},{key:"commitToAllFighterStores",value:function(t,e){this.$store.commit("fighter/".concat(t),e),this.$store.commit("reverse/".concat(t),e)}},{key:"updateCroppers",value:function(){y.a.$emit("card-load")}},{key:"truncate",value:function(text,t){return text.length>t?text.substring(0,t)+"…":text}}]),r}(r(375).default);O=m([h.a],O),e.default=O},377:function(t,e,r){"use strict";r.r(e);r(60);var n=r(22),o=r(21),c=r(32),l=r(27),f=r(18),d=r(11),h=(r(12),r(1)),y=r(166);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(h.a);m([Object(y.b)({type:String,required:!0})],O.prototype,"title",void 0);var T=O=m([y.a],O),k=r(73),component=Object(k.a)(T,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("h2",{staticClass:"pa-3"},[t._v(t._s(t.$t(t.title)))])}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"a",(function(){return f}));r(83),r(20);var n=r(387),o=Object(n.a)();function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.key;!r&&e&&"-"===n||1===n.length&&(r||isNaN(parseInt(n)))&&t.preventDefault()}function l(t){var e,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],text=(null===(e=t.clipboardData)||void 0===e?void 0:e.getData("text"))||"";n?t.preventDefault():text.match(/^\d*$/)||(r?"-"!==text&&t.preventDefault():t.preventDefault())}function f(){return-1!==((null==o?void 0:o.os)||"").toLowerCase().indexOf("windows")}},488:function(t,e,r){var content=r(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("04fd9d3e",content,!0,{sourceMap:!1})},575:function(t,e,r){t.exports=r.p+"img/background-minion.20bcd7f.png"},576:function(t,e,r){"use strict";r(488)},577:function(t,e,r){var n=r(13)(!1);n.push([t.i,".rarity[data-v-609cc20c]{margin-top:-45px}",""]),t.exports=n},620:function(t,e,r){"use strict";r.r(e);var n=r(129),o=r(696),c=r(130),l=r(655),f=r(654),d=r(695),h=r(574),y=r(534),v=r(611),m=(r(20),r(60),r(21)),O=r(22),T=r(32),k=r(27),$=r(18),j=r(11),R=(r(12),r(166)),w=r(376),x=r(378),F=r(132),_=r(131);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object($.a)(t);if(e){var o=Object($.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(k.a)(this,r)}}var C=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},P=function(t){Object(T.a)(n,t);var e=S(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"name",get:function(){var t=this.$store.state;switch(this.cardType){case F.CardType.FIGHTER:return t.fighter.name;case F.CardType.FAVOR:return t.favor.name;case F.CardType.CHALLENGE:return t.challenge.name}},set:function(t){switch(this.setDirty(),this.cardType){case F.CardType.FIGHTER:this.commitToAllFighterStores("setName",t);break;case F.CardType.FAVOR:this.$store.commit("favor/setName",t);break;case F.CardType.CHALLENGE:this.$store.commit("challenge/setName",t)}}},{key:"cardType",get:function(){return this.$store.state.card.type},set:function(t){var e=this.cardType;this.setDirty(),this.$store.commit("sidebar/reset"),this.$store.commit("card/setType",t),t!==e&&t!==F.CardType.FAVOR&&(this.$store.commit("background/reset",t),this.updateCroppers())}},{key:"comment",get:function(){return this.$store.state.card.comment},set:function(t){this.setDirty(),this.$store.commit("card/setComment",t)}},{key:"version",get:function(){return this.$store.state.card.version},set:function(t){this.setDirty(),this.$store.commit("card/setVersion",t)}},{key:"maxNameLength",get:function(){switch(this.cardType){case F.CardType.FIGHTER:return this.isMinion?20:30;case F.CardType.FAVOR:return 25;case F.CardType.CHALLENGE:return 30}}},{key:"suffix",get:function(){return this.fighterState.suffix},set:function(t){this.setDirty(),this.commitToFighterStore("setSuffix",t)}},{key:"isTwoSided",get:function(){return this.fighterState.twoSided},set:function(t){this.setDirty(),this.commitToAllFighterStores("setTwoSided",t),this.updateCroppers()}},{key:"fighterType",get:function(){return this.fighterState.type},set:function(t){var e=this.fighterType;this.setDirty(),this.commitToAllFighterStores("setType",t),t===_.b.MINION&&e!==_.b.MINION?(this.$store.commit("background/upload",r(575)),this.updateCroppers()):t!==_.b.MINION&&e===_.b.MINION&&(this.$store.commit("background/upload",r(135)),this.updateCroppers())}},{key:"mp",get:function(){return this.fighterState.mp},set:function(t){this.setDirty(),this.commitToFighterStore("setMP",t)}},{key:"hp",get:function(){return this.fighterState.hp},set:function(t){this.setDirty(),this.commitToFighterStore("setHP",t)}},{key:"ap",get:function(){return this.fighterState.ap},set:function(t){this.setDirty(),this.commitToFighterStore("setAP",t)}},{key:"favorType",get:function(){return this.$store.state.favor.type},set:function(t){this.setDirty(),this.$store.commit("favor/setType",t)}},{key:"favorEffect",get:function(){return this.$store.state.favor.effect},set:function(t){this.setDirty(),this.$store.commit("favor/setEffect",t)}},{key:"onKeyPress",value:function(t){Object(x.b)(t,!0)}},{key:"onHPKeyPress",value:function(t){var e=""===this.hp,r="-"===this.hp;Object(x.b)(t,e,r)}},{key:"onPaste",value:function(t){Object(x.c)(t,!0)}}]),n}(w.default),D=P=C([R.a],P),N=(r(576),r(73)),component=Object(N.a)(D,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(n.b,[e("FormHeader",{attrs:{title:"card.edit.card"}}),t._v(" "),e(d.a,{staticClass:"fill-height"},[e(o.a,{attrs:{cols:"12"}},[e(y.a,{attrs:{label:t.$t("card.edit.name"),maxlength:t.maxNameLength},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e(f.a,{attrs:{row:"",label:t.$t("card.edit.type")},model:{value:t.cardType,callback:function(e){t.cardType=e},expression:"cardType"}},[e(l.a,{attrs:{label:t.$t("card.edit.fighter"),value:"fighter",color:"white"}}),t._v(" "),e(l.a,{attrs:{label:t.$t("card.edit.favor"),value:"favor",color:"white"}}),t._v(" "),e(l.a,{attrs:{label:t.$t("card.edit.challenge"),value:"challenge",color:"white"}})],1)],1),t._v(" "),t.isFighter?e(o.a,{staticClass:"rarity",attrs:{cols:"12"}},[e(f.a,{attrs:{row:"",label:t.$t("card.edit.rarity")},model:{value:t.fighterType,callback:function(e){t.fighterType=e},expression:"fighterType"}},[e(l.a,{attrs:{label:t.$t("card.edit.common"),value:"common",color:"white"}}),t._v(" "),e(l.a,{attrs:{label:t.$t("card.edit.elite"),value:"elite",color:"amber"}}),t._v(" "),e(l.a,{attrs:{label:t.$t("card.edit.minion"),value:"minion",color:"white"}})],1)],1):t._e(),t._v(" "),t.isFighter?e(o.a,{attrs:{cols:"5"}},[e(h.a,{staticClass:"mb-1",attrs:{label:t.$t("card.edit.twoSided")},model:{value:t.isTwoSided,callback:function(e){t.isTwoSided=e},expression:"isTwoSided"}})],1):t._e(),t._v(" "),t.isFighter?e(o.a,{attrs:{cols:"7"}},[e(c.d,[t.isTwoSided?e(y.a,{attrs:{label:t.$t("card.edit.suffix"),maxlength:t.maxNameLength},model:{value:t.suffix,callback:function(e){t.suffix=e},expression:"suffix"}}):t._e()],1)],1):t._e(),t._v(" "),t.isFighter?e(o.a,{attrs:{cols:"4"}},[e(y.a,{attrs:{color:"success",label:t.$t("card.edit.mp"),"append-icon":"mdi-rhombus",maxlength:"1"},on:{keydown:t.onKeyPress,paste:t.onPaste},model:{value:t.mp,callback:function(e){t.mp=e},expression:"mp"}})],1):t._e(),t._v(" "),t.isFighter?e(o.a,{attrs:{cols:"4"}},[e(y.a,{attrs:{color:"error",label:t.$t("card.edit.hp"),"append-icon":"mdi-heart",maxlength:"2"},on:{keydown:t.onHPKeyPress,paste:t.onPaste},model:{value:t.hp,callback:function(e){t.hp=e},expression:"hp"}})],1):t._e(),t._v(" "),t.isFighter?e(o.a,{attrs:{cols:"4"}},[e(y.a,{attrs:{label:t.$t("card.edit.ap"),"append-icon":"mdi-star",maxlength:"1"},on:{keydown:t.onKeyPress,paste:t.onPaste},model:{value:t.ap,callback:function(e){t.ap=e},expression:"ap"}})],1):t._e(),t._v(" "),t.isFavor?e(o.a,{staticClass:"rarity",attrs:{cols:"12"}},[e(f.a,{attrs:{row:"",label:t.$t("card.edit.rarity")},model:{value:t.favorType,callback:function(e){t.favorType=e},expression:"favorType"}},[e(l.a,{attrs:{label:t.$t("card.edit.regular"),value:"regular",color:"white"}}),t._v(" "),e(l.a,{attrs:{label:t.$t("card.edit.superior"),value:"superior",color:"#a46ec3"}})],1)],1):t._e(),t._v(" "),t.isFavor?e(o.a,{attrs:{cols:"12"}},[e(v.a,{attrs:{label:t.$t("card.edit.effect"),rows:4,"no-resize":"",required:"","persistent-hint":"",hint:t.$t("card.edit.ability.editHint")},model:{value:t.favorEffect,callback:function(e){t.favorEffect=e},expression:"favorEffect"}})],1):t._e(),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e(y.a,{attrs:{label:t.$t("card.edit.version")},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e(v.a,{attrs:{label:t.$t("card.edit.comment"),"no-resize":"",rows:"4"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1)],1)}),[],!1,null,"609cc20c",null);e.default=component.exports;installComponents(component,{FormHeader:r(377).default})}}]);