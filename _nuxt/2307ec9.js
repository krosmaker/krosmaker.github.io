(window.webpackJsonp=window.webpackJsonp||[]).push([[29,21,28],{356:function(e,t,n){"use strict";var r=new(n(0).a);t.a=r},357:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return l}));n(75),n(20);var r=n(362),o=Object(r.a)();function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.key;t&&"-"===n||1===n.length&&isNaN(parseInt(n))&&e.preventDefault()}function d(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],text=(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))||"";text.match(/^\d*$/)||n&&"-"==text||e.preventDefault()}function l(){return-1!==((null==o?void 0:o.os)||"").toLowerCase().indexOf("windows")}},359:function(e,t,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("3b889e56",content,!0,{sourceMap:!1})},360:function(e,t,n){"use strict";n.r(t);n(58);var r=n(21),o=n(30),c=n(29),d=n(26),l=n(19),f=n(11),m=(n(13),n(25),n(0)),v=n(150),w=n(357);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},x=function(e){Object(c.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"input",get:function(){return this.$refs.input}},{key:"onKeyPress",value:function(e){this.number&&Object(w.b)(e,this.allowMinus)}},{key:"onPaste",value:function(e){this.number&&Object(w.c)(e,this.allowMinus)}}]),n}(m.a);y([Object(v.b)({type:String})],x.prototype,"value",void 0),y([Object(v.b)({type:Boolean,default:!1})],x.prototype,"number",void 0),y([Object(v.b)({type:Boolean,default:!1})],x.prototype,"allowMinus",void 0),y([Object(v.b)({type:Number,default:100})],x.prototype,"limit",void 0);var O=x=y([v.a],x),k=(n(365),n(74)),component=Object(k.a)(O,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{ref:"input",attrs:{type:"text",maxlength:e.limit},domProps:{value:e.value},on:{keydown:e.onKeyPress,paste:e.onPaste,input:function(t){return e.$emit("input",t.target.value)}}})}),[],!1,null,"2c72f221",null);t.default=component.exports},362:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h}));var r=function(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)t[n]=a[r];return t},o=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},c=function(t){this.version=t,this.type="node",this.name="node",this.os=e.platform},d=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},l=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},f=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},m=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,v=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],w=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function h(t){return t?x(t):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new f:"undefined"!=typeof navigator?x(navigator.userAgent):void 0!==e&&e.version?new c(e.version.slice(1)):null}function y(e){return""!==e&&v.reduce((function(t,n){var r=n[0],o=n[1];if(t)return t;var c=o.exec(e);return!!c&&[r,c]}),!1)}function x(e){var t=y(e);if(!t)return null;var n=t[0],c=t[1];if("searchbot"===n)return new l;var f=c[1]&&c[1].split(/[._]/).slice(0,3);f?f.length<3&&(f=r(f,function(e){for(var output=[],t=0;t<e;t++)output.push("0");return output}(3-f.length))):f=[];var v=f.join("."),h=function(e){for(var t=0,n=w.length;t<n;t++){var r=w[t],o=r[0];if(r[1].exec(e))return o}return null}(e),x=m.exec(e);return x&&x[1]?new d(n,v,h,x[1]):new o(n,v,h)}}).call(this,n(210))},364:function(e,t,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("2d8163cc",content,!0,{sourceMap:!1})},365:function(e,t,n){"use strict";n(359)},366:function(e,t,n){var r=n(15)(!1);r.push([e.i,"input[data-v-2c72f221]{white-space:nowrap;outline:0 solid transparent;caret-color:#fff;font-weight:inherit;font-family:inherit}input[data-v-2c72f221]::-webkit-inner-spin-button,input[data-v-2c72f221]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-2c72f221]{-moz-appearance:textfield}",""]),e.exports=r},367:function(e,t,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("419f3dd2",content,!0,{sourceMap:!1})},369:function(e,t,n){"use strict";n.r(t);n(58);var r=n(38),o=n(21),c=n(30),d=n(29),l=n(26),f=n(19),m=n(11),v=(n(13),n(155),n(48),n(45),n(59),n(211),n(75),n(8),n(0)),w=n(150);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},x=function(e){Object(d.a)(n,e);var t=h(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).markers=[{keyword:"MP",class:"mp"},{keyword:"HP",class:"hp"},{keyword:"AP",class:"ap"},{keyword:"Injury",class:"injury"},{keyword:"Injuries",class:"injury"},{keyword:"Air",class:"air"},{keyword:"Earth",class:"earth"},{keyword:"Fire",class:"fire"},{keyword:"Water",class:"water"}],e.splitPattern=RegExp("\\b("+e.markers.map((function(marker){return"(?:[+-]?\\d* ?)?".concat(marker.keyword,"(?=\\b|$)")})).join("|")+"|\n|\\*.*?\\*)","g"),e.textWithIconPattern=RegExp("^(?:[+-]?\\d* ?)("+e.markers.map((function(marker){return marker.keyword})).join("|")+")$","g"),e}return Object(c.a)(n,[{key:"render",value:function(e){var t=this,content=this.content;if(!content)return e("div");var n=content.split(this.splitPattern).map((function(n){if("\n"===n)return e("br");if(n.startsWith("*")&&n.endsWith("*"))return e("strong",n.substring(1,n.length-1));if(n.match(t.textWithIconPattern)){var element=t.markers.filter((function(marker){return n.endsWith(marker.keyword)})).map((function(marker){return t.createIcon(e,marker,n)}));return element.length?element[0]:n}return n}));return this.addOffset?e("div",[e("span",{attrs:{class:"description-offset"}})].concat(Object(r.a)(n))):e("div",n)}},{key:"createIcon",value:function(e,marker,content){var t=e("span",{class:"marker-icon ".concat(marker.class,"-icon")});if(content===marker.keyword)return t;var n=content.length-marker.keyword.length,r=content.substring(0,n);return e("span",{class:"marker-text ".concat(marker.class,"-text")},[r,t])}}]),n}(v.a);y([Object(w.b)({type:String,required:!0})],x.prototype,"content",void 0),y([Object(w.b)({type:Boolean,default:!1})],x.prototype,"addOffset",void 0);var O=x=y([w.a],x),k=(n(384),n(74)),component=Object(k.a)(O,undefined,undefined,!1,null,"e1ec5346",null);t.default=component.exports},371:function(e,t,n){e.exports=n.p+"img/background.a5ea2b8.png"},372:function(e,t,n){e.exports=n.p+"img/minion-background.6ef3555.png"},384:function(e,t,n){"use strict";n(364)},385:function(e,t,n){var r=n(15),o=n(209),c=n(386),d=n(387),l=n(388),f=n(389),m=n(390),v=n(391),w=n(392),h=n(393),y=r(!1),x=o(c),O=o(d),k=o(l),j=o(f),A=o(m),R=o(v),B=o(w),P=o(h);y.push([e.i,".description-offset[data-v-e1ec5346]{margin-left:39px}.marker-icon[data-v-e1ec5346]{display:inline-block;vertical-align:middle}.marker-text[data-v-e1ec5346]{font-weight:700}.mp-icon[data-v-e1ec5346]{background-image:url("+x+");width:19px;height:19px;margin-top:-5px;margin-left:-2px;margin-right:-2px}.mp-text[data-v-e1ec5346]{color:#507b36}.hp-icon[data-v-e1ec5346]{background-image:url("+O+");width:20px;height:18px;margin-top:-3px;margin-right:-1px}.hp-text[data-v-e1ec5346]{color:#aa2927}.ap-icon[data-v-e1ec5346]{background-image:url("+k+");width:19px;height:19px;margin-top:-5px;margin-left:-1px;margin-right:-1px}.ap-text[data-v-e1ec5346]{color:#1f548b}.injury-icon[data-v-e1ec5346]{background-image:url("+j+");width:15px;height:20px;margin-bottom:-2px;margin-top:-5px}.injury-text[data-v-e1ec5346]{color:#d30a1e}.air-icon[data-v-e1ec5346],.earth-icon[data-v-e1ec5346],.fire-icon[data-v-e1ec5346],.water-icon[data-v-e1ec5346]{width:19px;height:19px;margin-top:-4px;margin-left:-1px}.air-icon[data-v-e1ec5346]{background-image:url("+A+")}.air-text[data-v-e1ec5346]{color:#8d4483}.earth-icon[data-v-e1ec5346]{background-image:url("+R+")}.earth-text[data-v-e1ec5346]{color:#5f8f3e}.fire-icon[data-v-e1ec5346]{background-image:url("+B+")}.fire-text[data-v-e1ec5346]{color:#e36a21}.water-icon[data-v-e1ec5346]{background-image:url("+P+")}.water-text[data-v-e1ec5346]{color:#2592bb}",""]),e.exports=y},386:function(e,t,n){e.exports=n.p+"img/mp.cd8d3bb.png"},387:function(e,t,n){e.exports=n.p+"img/hp.7fc5c03.png"},388:function(e,t,n){e.exports=n.p+"img/ap.3b57b33.png"},389:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5AgEDTo1hdGmqwAAAttJREFUOMuNk01vVGUUx3/Pc++duUNbhymUQgNxqBjLS2PRaExsjIkb3xZCMIGwgI1mdneMKz6EyfQb+AFcsHINg26IMV100TRkWhBLpTN3LvN6357nuGggVYvhLE/O7/zPOfkfeEmsXbkqd09/IOs3bsjLavRByWa91hj/ts3yp4t0727SrNcarww7vzwITn82j9z6irmlGaYehsErwc16rVHq5RSuvoMzHTP9/ReMV/88UF3/GzS314LqpbeYPKFhZ4PJszMsXlpCNzeC/4WnO8Pg5LHXKH40h+2HSGqh30Jde49SaP+jrverRve2qH69gHfIYAcpdpAhyZCJEwmVb86hbq8F+xu8gKcehcEbbx6FD+eQNEVGKaY7RqyGcoXqt9epXqwyubUb/ANu1muN0e/bzH55DtONkMRgegkmijHtHjgnUUfOM/vDd8hq58X4GsBffRQsnJllNByRbYaYKEZig+QWVfL2qlQBrzrPxZvLqDvrAYBu1mskg5i/RgPSnS62l2G6CZIalOtALmBikAwk5empChJlNOs1NNDQ7ZRJv4jZHpE/HpJtDjG7KcopglOG7BmYHZCQI59cAE8BNFy3XA4EKIiL7WXYJEMVFcpzMH2NSwXiCfBDkBB3qoOccvDK5cDdO5uFkUWKAplFBoKZSDCzY0w0Rh9O0DqG/Bm23ad0tEQOuDgaN7bQT5Fcg68Bg3k8Jit0QHnYXh9nugg2w+zGyNMcLmjcPOyujG0WyDBFRhZV8cFzwFjyjR42zMhbIfpwEYzCRpZorUtpqbuiAO5//LnMbMWUrEKwqCkffA/Re7vjOeC4aDT9do8nvYjlrXtKPXfLT5Xz8m7lOL7RIBZxHZTnogoOaAdQDMcJ9x+2uJasKwC13+g/Fs7IwvEZjulD+MpBKY0AsViemCHefJn37/ysDvyqm+kDlV5+e6VdLdKSMb92/qBlh7RfdzGXF1f2gwB/Ay7MY+ssob3SAAAAAElFTkSuQmCC"},390:function(e,t,n){e.exports=n.p+"img/air.3e234f7.png"},391:function(e,t,n){e.exports=n.p+"img/earth.4cf72da.png"},392:function(e,t,n){e.exports=n.p+"img/fire.2a13216.png"},393:function(e,t,n){e.exports=n.p+"img/water.7822b9b.png"},403:function(e,t,n){e.exports=n.p+"img/minion-header.2bffb0b.png"},404:function(e,t,n){e.exports=n.p+"img/header.ac4c602.png"},405:function(e,t,n){"use strict";n(367)},406:function(e,t,n){var r=n(15),o=n(209),c=n(371),d=n(372),l=r(!1),f=o(c),m=o(d);l.push([e.i,".power-container[data-v-16cb0982]{width:100%;padding:0;margin:1px 0 -5.2%}.power-container .power-name-background[data-v-16cb0982]{margin-left:4.7%;margin-bottom:-7%}.power-container .power-content[data-v-16cb0982]{background:url("+f+') bottom no-repeat;padding-bottom:18px;margin-top:1px}.power-container .power-content .power-name[data-v-16cb0982]{font-family:"Helvetica Neue";margin-left:9%;margin-top:-2px;margin-bottom:-1px;color:#252525;width:416.8px;font-weight:700;font-size:19px;white-space:nowrap;overflow:hidden}.power-container .power-content .power-description[data-v-16cb0982]{cursor:pointer;font-family:"Helvetica Neue";color:#303030;font-size:14px;line-height:17px;margin-left:9%;margin-right:9%;min-height:27px;padding-top:.9%;font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical}.power-container .power-content .power-name-windows[data-v-16cb0982]{margin-top:-4px}.power-container .power-content .power-description-windows[data-v-16cb0982]{margin-top:-1px}.minion-power-container .power-name-background[data-v-16cb0982]{margin-left:2.8%;margin-bottom:-9.2%;padding-bottom:2px}.minion-power-container .power-content[data-v-16cb0982]{width:402px;background:url('+m+") bottom no-repeat;padding-bottom:5px}.minion-power-container .power-content .power-name[data-v-16cb0982]{margin-left:10%}.minion-power-container .power-content .power-description[data-v-16cb0982]{margin-left:10%;margin-right:8.9%;margin-bottom:4px;padding-bottom:1px;-webkit-line-clamp:3}.minion-power-container .power-content .power-name-windows[data-v-16cb0982]{margin-top:-4px;margin-bottom:2px}.minion-power-container .power-content .power-description-windows[data-v-16cb0982]{margin-top:-2px;padding-bottom:3px}",""]),e.exports=l},423:function(e,t,n){"use strict";n.r(t);n(58);var r=n(21),o=n(30),c=n(29),d=n(26),l=n(19),f=n(11),m=(n(13),n(25),n(0)),v=n(150),w=n(207),h=n(357),y=n(356);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var O=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},k=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).observer=new ResizeObserver((function(){y.a.$emit("abilityResize")})),e}return Object(o.a)(n,[{key:"mounted",value:function(){this.observer.observe(this.$refs.container)}},{key:"beforeDestroy",value:function(){this.observer.unobserve(this.$refs.container),this.observer.disconnect()}},{key:"destroyed",value:function(){y.a.$emit("abilityResize")}},{key:"isMinion",get:function(){return"minion"===this.$store.state.krosmaster.type}},{key:"isWindows",get:function(){return Object(h.a)()}},{key:"onNameChange",value:function(e,t){this.$store.commit("export/setDirty",!0),this.$store.commit("krosmaster/setPowerName",{index:t,name:e})}},{key:"selectPower",value:function(e){this.$store.commit("sidebar/setActivePower",e)}},{key:"openPower",value:function(e){var t=this.$store;t.commit("sidebar/setActivePower",e),t.commit("sidebar/setActiveTab",w.TabId.POWERS),t.commit("sidebar/setExpand",!0)}}]),n}(m.a);O([Object(v.b)({type:Object,required:!0})],k.prototype,"power",void 0),O([Object(v.b)({type:Number,required:!0})],k.prototype,"index",void 0);var j=k=O([v.a],k),A=(n(405),n(74)),component=Object(A.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"container",staticClass:"power-container",class:{"minion-power-container":e.isMinion},on:{click:function(t){return e.selectPower(e.index)}}},[e.isMinion?r("img",{staticClass:"power-name-background",attrs:{src:n(403)}}):r("img",{staticClass:"power-name-background",attrs:{src:n(404)}}),e._v(" "),r("div",{staticClass:"power-content"},[r("PlainInput",{staticClass:"power-name",class:{"power-name-windows":e.isWindows},attrs:{value:e.power.name,limit:40},on:{input:function(t){return e.onNameChange(t,e.index)}}}),e._v(" "),r("Description",{staticClass:"power-description",class:{"power-description-windows":e.isWindows},attrs:{content:e.power.description},nativeOn:{click:function(t){return e.openPower(e.index)}}})],1)])}),[],!1,null,"16cb0982",null);t.default=component.exports;installComponents(component,{PlainInput:n(360).default,Description:n(369).default})}}]);