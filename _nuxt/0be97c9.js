(window.webpackJsonp=window.webpackJsonp||[]).push([[16,20],{375:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(18),h=r(11),d=(r(12),r(1)),y=r(166),v=r(131),O=r(132),m=r(218);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},k=function(t){Object(c.a)(r,t);var e=R(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"cardType",get:function(){return this.$store.state.card.type}},{key:"isFighter",get:function(){return this.cardType===O.CardType.FIGHTER}},{key:"isFavor",get:function(){return this.cardType===O.CardType.FAVOR}},{key:"isChallenge",get:function(){return this.cardType===O.CardType.CHALLENGE}},{key:"fighterState",get:function(){var t=this.$store.state.fighter;return t.twoSided&&this.isFlipped?this.$store.state.reverse:t}},{key:"isTwoSided",get:function(){return this.$store.state.fighter.twoSided}},{key:"isKrosmaster",get:function(){return this.fighterState.type!==v.b.MINION}},{key:"isMinion",get:function(){return this.fighterState.type===v.b.MINION}},{key:"isFlipped",get:function(){return this.$store.state.display.isFlipped},set:function(t){this.isFighter&&this.isTwoSided&&this.$store.commit("sidebar/reset"),this.$store.commit("display/setFlipped",t)}},{key:"isRegularSize",get:function(){return this.isFighter&&this.isKrosmaster||this.isChallenge}},{key:"isSmallSize",get:function(){return this.isFighter&&this.isMinion||this.isFavor}},{key:"isRounded",get:function(){var t=this.$store.state.display;return t.mode===m.DisplayMode.PLAY&&t.roundedCorners}}]),r}(d.a);k=j([y.a],k),e.default=k},376:function(t,e,r){"use strict";r.r(e);r(60);var n=r(21),o=r(22),c=r(32),f=r(27),l=r(18),h=r(11),d=(r(12),r(166)),y=r(101);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"setDirty",value:function(){this.$store.commit("export/setDirty",!0)}},{key:"commitToFighterStore",value:function(t,e){var r=this.$store.state.fighter.twoSided&&this.isFlipped?"reverse":"fighter";this.$store.commit("".concat(r,"/").concat(t),e)}},{key:"commitToAllFighterStores",value:function(t,e){this.$store.commit("fighter/".concat(t),e),this.$store.commit("reverse/".concat(t),e)}},{key:"updateCroppers",value:function(){y.a.$emit("card-load")}},{key:"truncate",value:function(text,t){return text.length>t?text.substring(0,t)+"…":text}}]),r}(r(375).default);m=O([d.a],m),e.default=m}}]);