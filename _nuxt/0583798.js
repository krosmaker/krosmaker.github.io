(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{365:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("ddc41e80",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";r.r(e);r(58);var n=r(38),c=r(21),o=r(30),d=r(29),f=r(26),l=r(19),h=r(11),v=(r(13),r(158),r(48),r(45),r(59),r(211),r(8),r(0)),m=r(150);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var A=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(d.a)(r,t);var e=x(r);function r(){var t;return Object(c.a)(this,r),(t=e.apply(this,arguments)).markers=[{keyword:"MP",class:"mp"},{keyword:"HP",class:"hp"},{keyword:"AP",class:"ap"},{keyword:"Injury",class:"injury"},{keyword:"Injuries",class:"injury"},{keyword:"Air",class:"air"},{keyword:"Earth",class:"earth"},{keyword:"Fire",class:"fire"},{keyword:"Water",class:"water"}],t.splitPattern=RegExp("("+t.markers.map((function(marker){return"(?:[+-]?\\d* ?)?".concat(marker.keyword,"(?=\\b|$)")})).join("|")+"|\n|\\*.*?\\*)","g"),t}return Object(o.a)(r,[{key:"render",value:function(t){var e=this,content=this.content;if(!content)return t("div");var r=content.split(this.splitPattern).map((function(r){if("\n"===r)return t("br");if(r.startsWith("*")&&r.endsWith("*"))return t("strong",r.substring(1,r.length-1));var element=e.markers.filter((function(marker){return r.endsWith(marker.keyword)})).map((function(marker){return e.createIcon(t,marker,r)}));return element.length?element[0]:r}));return this.addOffset?t("div",[t("span",{attrs:{class:"description-offset"}})].concat(Object(n.a)(r))):t("div",r)}},{key:"createIcon",value:function(t,marker,content){var e=t("span",{class:"marker-icon ".concat(marker.class,"-icon")});if(content===marker.keyword)return e;var r=content.length-marker.keyword.length,n=content.substring(0,r);return t("span",{class:"marker-text ".concat(marker.class,"-text")},[n,e])}}]),r}(v.a);A([Object(m.b)({type:String,required:!0})],y.prototype,"content",void 0),A([Object(m.b)({type:Boolean,default:!1})],y.prototype,"addOffset",void 0);var w=y=A([m.a],y),k=(r(394),r(74)),component=Object(k.a)(w,undefined,undefined,!1,null,"52cb55a5",null);e.default=component.exports},394:function(t,e,r){"use strict";r(365)},395:function(t,e,r){var n=r(15),c=r(209),o=r(396),d=r(397),f=r(398),l=r(399),h=r(400),v=r(401),m=r(402),x=r(403),A=n(!1),y=c(o),w=c(d),k=c(f),j=c(l),O=c(h),R=c(v),B=c(m),E=c(x);A.push([t.i,".description-offset[data-v-52cb55a5]{margin-left:39px}.marker-icon[data-v-52cb55a5]{display:inline-block;vertical-align:middle}.marker-text[data-v-52cb55a5]{font-weight:700}.mp-icon[data-v-52cb55a5]{background-image:url("+y+");width:19px;height:19px;margin-top:-5px;margin-left:-2px;margin-right:-2px}.mp-text[data-v-52cb55a5]{color:#507b36}.hp-icon[data-v-52cb55a5]{background-image:url("+w+");width:20px;height:18px;margin-top:-3px;margin-right:-1px}.hp-text[data-v-52cb55a5]{color:#aa2927}.ap-icon[data-v-52cb55a5]{background-image:url("+k+");width:19px;height:19px;margin-top:-5px;margin-left:-1px;margin-right:-1px}.ap-text[data-v-52cb55a5]{color:#1f548b}.injury-icon[data-v-52cb55a5]{background-image:url("+j+");width:15px;height:20px;margin-bottom:-2px;margin-top:-5px}.injury-text[data-v-52cb55a5]{color:#d30a1e}.air-icon[data-v-52cb55a5],.earth-icon[data-v-52cb55a5],.fire-icon[data-v-52cb55a5],.water-icon[data-v-52cb55a5]{width:19px;height:19px;margin-top:-4px;margin-left:-1px}.air-icon[data-v-52cb55a5]{background-image:url("+O+")}.air-text[data-v-52cb55a5]{color:#8d4483}.earth-icon[data-v-52cb55a5]{background-image:url("+R+")}.earth-text[data-v-52cb55a5]{color:#5f8f3e}.fire-icon[data-v-52cb55a5]{background-image:url("+B+")}.fire-text[data-v-52cb55a5]{color:#e36a21}.water-icon[data-v-52cb55a5]{background-image:url("+E+")}.water-text[data-v-52cb55a5]{color:#2592bb}",""]),t.exports=A},396:function(t,e,r){t.exports=r.p+"img/mp.cd8d3bb.png"},397:function(t,e,r){t.exports=r.p+"img/hp.7fc5c03.png"},398:function(t,e,r){t.exports=r.p+"img/ap.3b57b33.png"},399:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5AgEDTo1hdGmqwAAAttJREFUOMuNk01vVGUUx3/Pc++duUNbhymUQgNxqBjLS2PRaExsjIkb3xZCMIGwgI1mdneMKz6EyfQb+AFcsHINg26IMV100TRkWhBLpTN3LvN6357nuGggVYvhLE/O7/zPOfkfeEmsXbkqd09/IOs3bsjLavRByWa91hj/ts3yp4t0727SrNcarww7vzwITn82j9z6irmlGaYehsErwc16rVHq5RSuvoMzHTP9/ReMV/88UF3/GzS314LqpbeYPKFhZ4PJszMsXlpCNzeC/4WnO8Pg5LHXKH40h+2HSGqh30Jde49SaP+jrverRve2qH69gHfIYAcpdpAhyZCJEwmVb86hbq8F+xu8gKcehcEbbx6FD+eQNEVGKaY7RqyGcoXqt9epXqwyubUb/ANu1muN0e/bzH55DtONkMRgegkmijHtHjgnUUfOM/vDd8hq58X4GsBffRQsnJllNByRbYaYKEZig+QWVfL2qlQBrzrPxZvLqDvrAYBu1mskg5i/RgPSnS62l2G6CZIalOtALmBikAwk5empChJlNOs1NNDQ7ZRJv4jZHpE/HpJtDjG7KcopglOG7BmYHZCQI59cAE8BNFy3XA4EKIiL7WXYJEMVFcpzMH2NSwXiCfBDkBB3qoOccvDK5cDdO5uFkUWKAplFBoKZSDCzY0w0Rh9O0DqG/Bm23ad0tEQOuDgaN7bQT5Fcg68Bg3k8Jit0QHnYXh9nugg2w+zGyNMcLmjcPOyujG0WyDBFRhZV8cFzwFjyjR42zMhbIfpwEYzCRpZorUtpqbuiAO5//LnMbMWUrEKwqCkffA/Re7vjOeC4aDT9do8nvYjlrXtKPXfLT5Xz8m7lOL7RIBZxHZTnogoOaAdQDMcJ9x+2uJasKwC13+g/Fs7IwvEZjulD+MpBKY0AsViemCHefJn37/ysDvyqm+kDlV5+e6VdLdKSMb92/qBlh7RfdzGXF1f2gwB/Ay7MY+ssob3SAAAAAElFTkSuQmCC"},400:function(t,e,r){t.exports=r.p+"img/air.3e234f7.png"},401:function(t,e,r){t.exports=r.p+"img/earth.4cf72da.png"},402:function(t,e,r){t.exports=r.p+"img/fire.2a13216.png"},403:function(t,e,r){t.exports=r.p+"img/water.7822b9b.png"}}]);