(window.webpackJsonp=window.webpackJsonp||[]).push([[41,14],{374:function(e,t,n){"use strict";n.r(t);n(60);var r=n(21),o=n(22),c=n(32),f=n(27),l=n(18),d=n(11),h=(n(12),n(1)),v=n(166),y=n(131),w=n(378);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},S=function(e){Object(c.a)(n,e);var t=O(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"isReverse",get:function(){return"reverse"===this.store}},{key:"fighterState",get:function(){return this.$store.state[this.store]}},{key:"isKrosmaster",get:function(){return this.fighterState.type!==y.b.MINION}},{key:"isMinion",get:function(){return this.fighterState.type===y.b.MINION}},{key:"isElite",get:function(){return this.fighterState.type===y.b.ELITE}},{key:"isCommon",get:function(){return this.fighterState.type===y.b.COMMON}},{key:"isWindows",get:function(){return Object(w.a)()}},{key:"commitToFighterStore",value:function(e,t){this.$store.commit("".concat(this.store,"/").concat(e),t)}},{key:"setDirty",value:function(){this.$store.commit("export/setDirty",!0)}}]),n}(h.a);m([Object(v.b)({type:String,default:"fighter"})],S.prototype,"store",void 0),S=m([v.a],S),t.default=S},378:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return l}));n(83),n(20);var r=n(387),o=Object(r.a)();function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.key;!n&&t&&"-"===r||1===r.length&&(n||isNaN(parseInt(r)))&&e.preventDefault()}function f(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],text=(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))||"";r?e.preventDefault():text.match(/^\d*$/)||(n?"-"!==text&&e.preventDefault():e.preventDefault())}function l(){return-1!==((null==o?void 0:o.os)||"").toLowerCase().indexOf("windows")}},387:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w}));var r=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},o=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},c=function(t){this.version=t,this.type="node",this.name="node",this.os=e.platform},f=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},l=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},d=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},h=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,v=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],y=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function w(t){return t?m(t):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new d:"undefined"!=typeof navigator?m(navigator.userAgent):void 0!==e&&e.version?new c(e.version.slice(1)):null}function O(e){return""!==e&&v.reduce((function(t,n){var r=n[0],o=n[1];if(t)return t;var c=o.exec(e);return!!c&&[r,c]}),!1)}function m(e){var t=O(e);if(!t)return null;var n=t[0],c=t[1];if("searchbot"===n)return new l;var d=c[1]&&c[1].split(".").join("_").split("_").slice(0,3);d?d.length<3&&(d=r(r([],d,!0),function(e){for(var output=[],t=0;t<e;t++)output.push("0");return output}(3-d.length),!0)):d=[];var v=d.join("."),w=function(e){for(var t=0,n=y.length;t<n;t++){var r=y[t],o=r[0];if(r[1].exec(e))return o}return null}(e),m=h.exec(e);return m&&m[1]?new f(n,v,w,m[1]):new o(n,v,w)}}).call(this,n(222))},418:function(e,t,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("023b90db",content,!0,{sourceMap:!1})},508:function(e,t,n){"use strict";n(418)},509:function(e,t,n){var r=n(13)(!1);r.push([e.i,".figurine[data-v-37aa8e94]{cursor:pointer}",""]),e.exports=r},527:function(e,t,n){"use strict";n.r(t);n(60);var r=n(21),o=n(22),c=n(32),f=n(27),l=n(18),d=n(11),h=(n(12),n(166)),v=n(374),y=n(219);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(c.a)(n,e);var t=w(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"figurineState",get:function(){if(this.isReverse){var e=this.$store.state.reverseFigurine;if(!e.useSameImage)return e}return this.$store.state.figurine}},{key:"offsetX",get:function(){var e=this.isMinion,t=this.figurineState.offsetX-(e?75:0),n=e?.8:1.04;return Math.round(t*n)+"px"}},{key:"offsetY",get:function(){var e=this.figurineState.offsetY,t=this.isMinion?.5:.74;return Math.round(e*t)+"px"}},{key:"height",get:function(){return this.figurineState.height+"px"}},{key:"figurineImage",get:function(){var e=this.figurineState;return e.useCropped?e.cropped:e.original}},{key:"onClick",value:function(){var e=this.$store;e.commit("sidebar/setExpand",!0),e.commit("sidebar/setActiveTab",y.TabId.FIGURINE)}}]),n}(v.default),S=m=O([h.a],m),k=(n(508),n(73)),component=Object(k.a)(S,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("img",{style:{left:e.offsetX,top:e.offsetY,height:e.height},attrs:{src:e.figurineImage},on:{click:function(t){return t.stopPropagation(),e.onClick.apply(null,arguments)}}})}),[],!1,null,"37aa8e94",null);t.default=component.exports}}]);