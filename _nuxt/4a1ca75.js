(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{130:function(t,e,n){t.exports=n.p+"img/default-background.c4a144a.png"},151:function(t,e,n){t.exports=n.p+"img/default-figurine.8d0c77c.png"},157:function(t,e,n){"use strict";var o=n(1),r=n(208),c=n.n(r);n(337);o.a.component("vue-cropper",c.a)},158:function(t,e,n){"use strict";var o=n(1),r=n(167),c=n.n(r);o.a.use(c.a)},159:function(t,e,n){"use strict";var o=n(1),r=n(209);o.a.use(r.a)},202:function(t,e,n){var map={"./en.png":301,"./es.png":302,"./fr.png":303,"./pl.png":304};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=202},203:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4601fca1",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";var o=n(358),r=n(365),c=n(341),f=n(153),l=n(126),d=n(362),m=n(346),A=n(364),v=n(343),h=n(345),y=n(344),w=n(361),S=n(348),O=n(363),x=n(359),C=n(207),E=(n(60),n(21)),M=n(22),P=n(32),R=n(27),k=n(19),N=n(11),D=(n(13),n(9),n(1)),L=n(161);function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(k.a)(t);if(e){var r=Object(k.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(R.a)(this,n)}}var U=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(N.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(P.a)(n,t);var e=K(n);function n(){return Object(E.a)(this,n),e.apply(this,arguments)}return Object(M.a)(n,[{key:"currentLocale",get:function(){return this.$i18n.locale||{code:"en"}}},{key:"locales",get:function(){var t=this.currentLocale;return(this.$i18n.locales||[]).filter((function(e){return e.code!==t}))}},{key:"version",get:function(){return"1.4.5"}},{key:"hash",get:function(){return"c6bb250\n"}},{key:"notifications",get:function(){return this.$store.state.notification.notifications}},{key:"onNotificationHide",value:function(t){var e=this;this.$store.commit("notification/hide",t.id),setTimeout((function(){return e.$store.commit("notification/remove",t.id)}),300)}},{key:"mounted",value:function(){this.$refs.container.classList.add("displayed-container")}}]),n}(D.a),T=j=U([L.a],j),W=(n(324),n(73)),component=Object(W.a)(T,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,{attrs:{dark:""}},[e(r.a,{attrs:{fixed:"",app:"","clipped-left":"",height:"64"}},[e(C.a,{staticClass:"toolbar-title",domProps:{textContent:t._s("Krosmaker")}}),t._v(" "),e(x.a),t._v(" "),e(S.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,f=o.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",f,!1),r),[e("img",{attrs:{src:n(202)("./".concat(t.currentLocale,".png"))}})])]}}])},[t._v(" "),e(h.a,t._l(t.locales,(function(o,r){return e("nuxt-link",{key:r,attrs:{to:t.switchLocalePath(o.code)}},[e(y.a,[e("img",{attrs:{src:n(202)("./".concat(o.code,".png"))}})])],1)})),1)],1),t._v(" "),e(c.a,{attrs:{icon:"",href:"https://github.com/krosmaker/krosmaker/wiki/Tutorial",target:"_blank",rel:"noopener noreferrer"}},[e(v.a,[t._v("mdi-help-circle")])],1),t._v(" "),e(c.a,{attrs:{icon:"",href:"https://twitter.com/krosmaker",target:"_blank",rel:"noopener noreferrer"}},[e(v.a,[t._v("mdi-twitter")])],1),t._v(" "),e(c.a,{attrs:{icon:"",href:"https://github.com/krosmaker/krosmaker",target:"_blank",rel:"noopener noreferrer"}},[e(v.a,[t._v("mdi-github")])],1)],1),t._v(" "),e(w.a,[e(d.a,{ref:"container",staticClass:"fade-in-container",attrs:{"fill-height":"","fill-width":"",fluid:""}},[e("nuxt")],1)],1),t._v(" "),t._l(t.notifications,(function(n,o){return e(O.a,{key:n.id,style:"margin-top: ".concat(60*o+8,"px;"),attrs:{app:"",value:n.show,timeout:3e3,right:"",top:"",color:n.color+" darken-4"},on:{input:function(e){return t.onNotificationHide(n)}},scopedSlots:t._u([{key:"action",fn:function(o){var r=o.attrs;return[e(c.a,t._b({attrs:{text:"",icon:""},on:{click:function(e){return t.onNotificationHide(n)}}},"v-btn",r,!1),[e(v.a,[t._v("mdi-close")])],1)]}}],null,!0)},[t._v("\n    "+t._s(t.$t(n.message,n.parameters))+"\n\n    ")])})),t._v(" "),e(A.a,{staticClass:"main-footer",attrs:{dark:"",height:"auto"}},[e(f.a,{staticClass:"flex",attrs:{flat:"",tile:""}},[e(m.a),t._v(" "),e(l.a,{staticClass:"justify-center"},[e("span",{staticClass:"font-weight-light caption"},[t._v("\n          "+t._s(t.$t("disclaimer"))+"\n        ")])]),t._v(" "),e(m.a),t._v(" "),e("div",{staticClass:"version"},[t._v(t._s(t.version)+"-"+t._s(t.hash))])],1)],1)],2)}),[],!1,null,"67a780b0",null);e.a=component.exports},214:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"TabId",(function(){return o})),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return c})),function(t){t[t.NAME=0]="NAME",t[t.FIGURINE=1]="FIGURINE",t[t.ARTWORK=2]="ARTWORK",t[t.SPELLS=3]="SPELLS",t[t.POWERS=4]="POWERS",t[t.DISPLAY=5]="DISPLAY",t[t.EXPORT=6]="EXPORT"}(o||(o={}));var r=function(){return{activeTab:o.NAME,expand:!1,activeSpell:null,activePower:null}},c={setExpand:function(t,e){t.expand=e},setActiveTab:function(t,e){t.activeTab=e},setActiveSpell:function(t,e){t.activeSpell=e},setActivePower:function(t,e){t.activePower=e},reset:function(t){t.activeSpell=null,t.activePower=null}}},216:function(t,e,n){"use strict";n.r(e),n.d(e,"DisplayMode",(function(){return o})),n.d(e,"Scale",(function(){return r})),n.d(e,"state",(function(){return d})),n.d(e,"mutations",(function(){return m}));var o,r,c=n(82);function f(t,e){if(!(null===window||void 0===window?void 0:window.localStorage))return e;var n=localStorage.getItem(t);return null!==n?JSON.parse(n):e}function l(t,e){(null===window||void 0===window?void 0:window.localStorage)&&localStorage.setItem(t,JSON.stringify(e))}!function(t){t[t.PLAY=0]="PLAY",t[t.PRINT=1]="PRINT"}(o||(o={})),function(t){t[t.LARGE=0]="LARGE",t[t.MEDIUM=1]="MEDIUM",t[t.SMALL=2]="SMALL"}(r||(r={}));var d=function(){return{mode:f("display.mode",o.PLAY),targetKrosmasterWidth:f("display.targetKrosmasterWidth",c.d),targetKrosmasterHeight:f("display.targetKrosmasterHeight",c.c),targetMinionWidth:f("display.targetMinionWidth",c.j),targetMinionHeight:f("display.targetMinionHeight",c.i),bleedingOffset:f("display.bleedingOffset",36),roundedCorners:f("display.roundedCorners",!0),scale:f("display.scale",r.LARGE)}},m={reload:function(t){t.mode=f("display.mode",o.PLAY),t.targetKrosmasterWidth=f("display.targetKrosmasterWidth",t.targetKrosmasterWidth),t.targetKrosmasterHeight=f("display.targetKrosmasterHeight",t.targetKrosmasterHeight),t.targetMinionWidth=f("display.targetMinionWidth",t.targetMinionWidth),t.targetMinionHeight=f("display.targetMinionHeight",t.targetMinionHeight),t.bleedingOffset=f("display.bleedingOffset",t.bleedingOffset),t.roundedCorners=f("display.roundedCorners",t.roundedCorners),t.scale=f("display.scale",t.scale)},setMode:function(t,e){t.mode=e,l("display.mode",e)},setTargetKrosmasterWidth:function(t,e){t.targetKrosmasterWidth=e,l("display.targetKrosmasterWidth",e)},setTargetKrosmasterHeight:function(t,e){t.targetKrosmasterHeight=e,l("display.targetKrosmasterHeight",e)},setTargetMinionWidth:function(t,e){t.targetMinionWidth=e,l("display.targetMinionWidth",e)},setTargetMinionHeight:function(t,e){t.targetMinionHeight=e,l("display.targetMinionHeight",e)},setBleedingOffset:function(t,e){t.bleedingOffset=e,l("display.bleedingOffset",e)},setRoundedCorners:function(t,e){t.roundedCorners=e,l("display.roundedCorners",e)},setScale:function(t,e){t.scale=e,l("display.scale",e)}}},228:function(t,e,n){n(229),t.exports=n(230)},262:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7fec8466",content,!0,{sourceMap:!1})},263:function(t,e,n){var o=n(14),r=n(217),c=n(264),f=n(265),l=n(266),d=n(267),m=n(268),A=n(269),v=o(!1),h=r(c),y=r(f),w=r(l),S=r(d),O=r(m),x=r(A);v.push([t.i,'@font-face{font-family:"Helvetica Neue";font-weight:400;src:url('+h+') format("woff"),url('+y+') format("opentype")}@font-face{font-family:"Helvetica Neue";font-weight:700;src:url('+w+') format("woff"),url('+S+') format("opentype")}@font-face{font-family:"Berlin Sans";font-weight:400;src:url('+O+') format("woff"),url('+x+') format("opentype")}.layout-enter-active,.layout-leave-active,.page-enter-active,.page-leave-active{transition:opacity .2s}.layout-enter,.layout-leave-active,.page-enter,.page-leave-active{opacity:0}',""]),t.exports=v},264:function(t,e,n){t.exports=n.p+"fonts/HelveticaNeueLTStd-Cn.185f287.woff"},265:function(t,e,n){t.exports=n.p+"fonts/HelveticaNeueLTStd-Cn.7530368.otf"},266:function(t,e,n){t.exports=n.p+"fonts/HelveticaNeueLTStd-BdCn.c765803.woff"},267:function(t,e,n){t.exports=n.p+"fonts/HelveticaNeueLTStd-BdCn.ba50a40.otf"},268:function(t,e,n){t.exports=n.p+"fonts/BerlinSans.71361e5.woff"},269:function(t,e,n){t.exports=n.p+"fonts/BerlinSans.32468dc.otf"},301:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACKElEQVR42o2TA3BYaxCF973atm3btjGubbexbSe1bduObds2T/e/mZh35lzt2e/XLo1fY0PUU5ZooFKxustMffQ92CpZScfFoUmfWIfGfWJTVPVc7n8NshaxEh/nSLnlAc1ZNmwqfPg9GAwAA8AAMAAMgIgJD6tFKWD4Ugui9idaUA+Z9zRAUZhQCwCSp4fse+om12LUxstEv30T6O5737MLNl8BU0FtjuPBt6qAe1+CpBgNUsWSffdwVf3WuZdy1kSJyrqTCr/+KEJuLl599sXMtTZ48D0ISYplgGQVBvAMZq07iycmjxB1UAbxO48UpVpdmkzpP+3Oprz6CGRloeQSbxGyWpzcGw6NeiNSXgcl0SJbe2T8siuxnqMIJT33SGV9hJ/WQNhJVUSeUpPkNX0VnNoMhlPrwfCevrr4/2l1RCjqgXMQfkpd+D2IpxnPQmWJZOdOIyWJ9+o8Ipd4jfEsVFYFAM+iOo/IpfBTau5i+pHKBjw1fUTKaIipVlzCjNXSv8gzGmA/ws9oIlLFEJFK+h4E4CyreGPs7OvcRGkjMzMhNj7jr+M5SrW8OEkcSeSBM3hs/FA6qgffg6s9xtkce/3VD8jJQcGnr0WJitpT6IWMJV1Ru3V28b67oIGqdRdSTzks2noV9z76nfvDRUgjRTlyWXJ51ruU+flBlP+wJeYVmqkF62w9mulsSTONW21N1bXzNG5nGwa4lmtnVwbYiFiJrwTwD6WUPoSa++x+AAAAAElFTkSuQmCC"},302:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnUlEQVR42p3TM5gdYRSA4bNGbDtN0MV2GdvpYydtmjhNbDRr27bRxLbt+fbMM2vee4t35rePZLcb2NhEdVaVqtfVzPS56jqpr37GW51X/xUt+F/dpl3tAFkeg0ztVLzCRvHVfUTye/c3XVDY6aIS+RvjPE4Zin/KSHDiX3z1P9YZLW+JocYLuXKBHIE8wchx4kWwFyVXOvPY15vfGc6QL5Cjcpt1UciUCrKEPynC+0ghZlsHzi/qhN+m9rwMFH4kC2SpzGZVmgO8JVv4mNiOkqsD8V/gzq2V88i4eZyK4Ak8DusCOS0O8NYaIFd4E9Cb9F0zODW5CweXrCLhjC9Zp9Zx5+LwNgeoMBu88e9DycUZhGxy5tDc4QQs7U3J0fE8uDW6tQEqrUPME54l9iLefyI5R9wI2jOWrC2dybgxkpLokZDf8iHWXuP3SHc+hrXjb6wrH6O68TvGgy+RnnwO92rtGifUPqSCPv0o7NOXgj79KerTBytvafUhOfiUE6r7NAimduqCDcF0oX4wNRfOk6ojrqxeOJdVl01q3L4KXSoVefmq05IAAAAASUVORK5CYII="},303:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR42mJgUJ6KiiUnWKzYcnvq////LwDxSyi+8HP73mlv5A0s3moCSqeDG4RhGIzCnOk8gDJp0lXKFBVs0Rka83KwZPmAov5I7+gPtbXLLRaH71QBTgDLPwADOBmqtGRgoY0MwP4AxtBoc8SBRjYJeKsDD+oXgE7P+O+zQGwdwEcAvgM4BODQAf0R9JcofcaXtkjCKr/zKjvSJo6p5WPK51wAKjN7OOcdoAKUfM4/gihxOwkzhUcAAAAASUVORK5CYII="},304:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVR42p3OAWbFQBCH8QXQhaJX6BHSJvQEvV+7u1dJL5FIgFYBiKX0ALvTL2SoJbzMnx8eO9+LE5FWjzdM2A4T3tG37///uENAwdkKAnwb8Bhx60aNaCDi6pIGOlRDoOJJ/926tAcWWLe68vObIUbZfT++ZohRdp/3/QIxWt3Xw0uEGKU90KEajiue94D1KxKcBjzGC8cf8BpQHhEFcqIg6nEbUAMCZmyHGQFD+/4PSQ/bq3XnVbcAAAAASUVORK5CYII="},324:function(t,e,n){"use strict";n(203)},325:function(t,e,n){var o=n(14)(!1);o.push([t.i,'.toolbar-title[data-v-67a780b0]{font-family:"Berlin Sans"}.main-footer[data-v-67a780b0]{padding:0}.version[data-v-67a780b0]{color:#777;width:100%;font-size:10px;text-align:right;margin-top:-14px;padding-right:4px}.fade-in-container[data-v-67a780b0]{opacity:0;transition:opacity .5s ease-in}.displayed-container[data-v-67a780b0]{opacity:1}.locale-select[data-v-67a780b0]{width:50px!important}',""]),t.exports=o},326:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{original:n(130),cropped:n(130),useCropped:!0}},r={replace:function(t,e){Object.assign(t,e)},setCropping:function(t,e){t.useCropped=e},upload:function(t,image){t.original=image,t.cropped=image,t.cropper=void 0},crop:function(t,image){t.cropped=image},setCropperData:function(t,e){t.cropper={canvasData:e.getCanvasData(),croppingData:e.getData()}},reset:function(t){var e=n(130);t.original=e,t.cropped=e,t.useCropped=!0,delete t.cropper}}},327:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{isExporting:!1,isDirty:!1,fileName:""}},r={setExporting:function(t,e){t.isExporting=e},setDirty:function(t,e){t.isDirty=e},setFileName:function(t,e){t.fileName=e}}},328:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{original:n(151),cropped:n(151),useCropped:!0,height:350,offsetX:730,offsetY:10}},r={replace:function(t,e){Object.assign(t,e)},setHeight:function(t,e){t.height=e},setOffsetX:function(t,e){t.offsetX=e},setOffsetY:function(t,e){t.offsetY=e},setCropping:function(t,e){t.useCropped=e},upload:function(t,image){t.original=image,t.cropped=image,t.cropper=void 0},crop:function(t,image){t.cropped=image},setCropperData:function(t,e){t.cropper={canvasData:e.getCanvasData(),croppingData:e.getData()}},reset:function(t){var e=n(151);t.original=e,t.cropped=e,t.useCropped=!0,t.height=350,t.offsetX=730,t.offsetY=10,delete t.cropper}}},329:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));n(20),n(35);var o=function(){return{name:"",type:"common",comment:"",version:"",mp:"",hp:"",ap:"",spells:[],powers:[]}},r={replace:function(t,e){Object.assign(t,e),e.comment||(t.comment=""),e.version||(t.version="")},setName:function(t,e){t.name=e||""},setType:function(t,e){t.type=e},setComment:function(t,e){t.comment=e},setVersion:function(t,e){t.version=e},setMP:function(t,e){t.mp=e},setHP:function(t,e){t.hp=e},setAP:function(t,e){t.ap=e},addPower:function(t,e){t.powers.push(e)},removePower:function(t,e){t.powers.splice(e,1)},switchPowers:function(t,e){var n=e.from,o=e.to,r=t.powers,c=[r[o],r[n]];r[n]=c[0],r[o]=c[1],t.powers=r.slice()},setPowerName:function(t,e){t.powers[e.index].name=e.name||""},setPowerDescription:function(t,e){t.powers[e.index].description=e.description||""},addSpell:function(t,e){t.spells.push(e)},removeSpell:function(t,e){t.spells.splice(e,1)},switchSpells:function(t,e){var n=e.from,o=e.to,r=t.spells,c=[r[o],r[n]];r[n]=c[0],r[o]=c[1],t.spells=r.slice()},setSpellName:function(t,e){t.spells[e.index].name=e.name||""},setSpellDescription:function(t,e){t.spells[e.index].description=e.description||""},setSpellElement:function(t,e){t.spells[e.index].damage.element=e.element},setSpellDamage:function(t,e){t.spells[e.index].damage.value=e.damage},setSpellRangeType:function(t,e){t.spells[e.index].range.type=e.range},setSpellRange:function(t,e){t.spells[e.index].range.value=e.range},setSpellLimitType:function(t,e){t.spells[e.index].limit.type=e.limit},setSpellLimit:function(t,e){t.spells[e.index].limit.value=e.limit},reset:function(t){t.name="",t.type="common",t.comment="",t.version="",t.mp="",t.hp="",t.ap="",t.spells=[],t.powers=[]}}},330:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));n(55),n(9);var o=function(){return{counter:0,notifications:[]}},r={add:function(t,e){var n=t.counter++;e.id=n,e.show=!0,e.color=e.color||"green",e.parameters=e.parameters||{},t.notifications.push(e)},hide:function(t,e){var n=t.notifications.find((function(t){return t.id===e}));n&&(n.show=!1)},remove:function(t,e){t.notifications=t.notifications.filter((function(t){return t.id!==e}))}}},335:function(t,e,n){var map={"./en":[224,6],"./en.js":[224,6],"./es":[225,7],"./es.js":[225,7],"./fr":[226,8],"./fr.js":[226,8],"./pl":[227,9],"./pl.js":[227,9]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(map)},o.id=335,t.exports=o},82:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return f})),n.d(e,"j",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return m})),n.d(e,"g",(function(){return A})),n.d(e,"e",(function(){return v})),n.d(e,"f",(function(){return h}));var o=1038,r=744,c=950,f=675,l=792,d=519,m=735,A=466,v=3,h=1}},[[228,40,11,41]]]);