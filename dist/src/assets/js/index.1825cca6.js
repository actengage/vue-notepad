(function(e){function t(t){for(var a,r,o=t[0],u=t[1],l=t[2],d=0,m=[];d<o.length;d++)r=o[d],n[r]&&m.push(n[r][0]),n[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,o=1;o<i.length;o++){var u=i[o];0!==n[u]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},n={index:0},s=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="http://thecapsule.email/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},4843:function(e,t,i){"use strict";var a=i("d4eb"),n=i.n(a);n.a},"56d7":function(e,t,i){"use strict";i.r(t);var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("html",[e._m(0),i("body",[i("div",{staticClass:"container m-5"},[i("h1",[e._v("Display Only")]),i("notepad",{scopedSlots:e._u([{key:"header",fn:function(){return[i("h1",{staticStyle:{margin:"0"}},[e._v("Header")])]},proxy:!0},{key:"footer",fn:function(){return[i("h4",{staticStyle:{margin:"0"}},[e._v("Footer")])]},proxy:!0}])},[i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin. Integer porta vehicula ex sed pulvinar. Nulla facilisi. Praesent eget erat nec lectus viverra porttitor et in neque. Phasellus accumsan, nibh sed lacinia consequat, metus sapien malesuada augue, id vehicula metus magna sed dui.")]),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin. Integer porta vehicula ex sed pulvinar. Nulla facilisi. Praesent eget erat nec lectus viverra porttitor et in neque. Phasellus accumsan, nibh sed lacinia consequat, metus sapien malesuada augue, id vehicula metus magna sed dui.")]),i("ol",[i("li",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),i("li",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),i("li",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),i("li",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])])]),i("hr"),i("h1",[e._v("Editable")]),i("notepad",{attrs:{editable:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                        123\n\n                        "),i("p",{staticClass:"test",class:"test",attrs:{test:123,"data-test":"123"}},[e._v("Header")]),i("p",[e._v("Header")]),i("p",[e._v("Header")]),e._v("\n\n                        test\n                    ")]},proxy:!0},{key:"default",fn:function(){return[e._v("    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin.\n\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo sit amet mi luctus, sit amet venenatis dui sollicitudin. Integer porta vehicula ex sed pulvinar. Nulla facilisi. Praesent eget erat nec lectus viverra porttitor et in neque. Phasellus accumsan, nibh sed lacinia consequat, metus sapien malesuada augue, id vehicula metus magna sed dui. Pellentesque cursus imperdiet arcu at fermentum. Suspendisse potenti. Phasellus eget mi eu libero dapibus viverra. Pellentesque convallis urna id risus dictum, et pretium arcu ultricies. Donec a ultrices magna, id dignissim diam. Sed venenatis sit amet nulla nec dictum. Nulla ut quam cursus, interdum mauris a, pretium magna. Sed volutpat ultricies tincidunt. Fusce ipsum lacus, accumsan non nunc id, tristique malesuada risus. Phasellus molestie tortor et erat cursus posuere. Phasellus mollis est lacus, eu congue lorem facilisis eget.\n\n    Phasellus euismod facilisis enim, ut convallis neque. Mauris viverra metus quis neque vulputate condimentum. Vestibulum sit amet vestibulum dui. Maecenas lacinia nulla non tempus imperdiet. Sed commodo facilisis ligula, vitae imperdiet orci laoreet a. In rutrum erat non feugiat vestibulum. Sed aliquet, metus at finibus dapibus, est neque venenatis nisi, vitae pharetra nisl magna sed ante. Fusce aliquet aliquam rhoncus.\n")]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e.value?i("code",[i("pre",[e._v(e._s(e.value))])]):e._e()],1)])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("head",[i("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}})])}],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"notepad",class:{editable:e.editable},on:{click:e.onClickContainer}},[i(e.is,{directives:[{name:"component-model",rawName:"v-component-model",value:e.form.header,expression:"form.header"},{name:"autogrow",rawName:"v-autogrow",value:e.editable,expression:"editable"}],ref:"header",tag:"component",staticClass:"notepad-header"},[e._t("header")],2),i("div",{staticClass:"notepad-lines"},[i(e.is,{directives:[{name:"component-model",rawName:"v-component-model",value:e.form.body,expression:"form.body"},{name:"autogrow",rawName:"v-autogrow",value:e.editable,expression:"editable"}],ref:"body",tag:"component",staticClass:"notepad-body"},[e._t("default")],2)],1),i(e.is,{directives:[{name:"component-model",rawName:"v-component-model",value:e.form.footer,expression:"form.footer"},{name:"autogrow",rawName:"v-autogrow",value:e.editable,expression:"editable"}],ref:"footer",tag:"component",staticClass:"notepad-footer"},[e._t("footer")],2)],1)},o=[],u=i("ee92"),l={props:{editable:Boolean},directives:{Autogrow:u["a"],componentModel:{inserted(e,t,i){const a=t.expression.split("."),n=a.pop(),s=a.reduce((e,t)=>{return e[t]},i.context);e.addEventListener("input",e=>{i.context.$set(s,n,e.target.value)}),e.value=(i.children||[]).map(e=>{return e.elm.outerHTML||e.elm.textContent}).join("\n"),i.context.$set(s,n,e.value)}}},watch:{form:{deep:!0,handler(e){this.$emit("input",this.form)}}},computed:{is(){return this.editable?"textarea":"div"}},methods:{onClickContainer(){this.$refs.body&&this.editable}},data(){return{form:{header:null,body:null,footer:null}}}},c=l,d=(i("4843"),i("2877")),m=Object(d["a"])(c,r,o,!1,null,null,null),p=m.exports,v={components:{Notepad:p},data(){return{value:null}}},f=v,h=(i("5c0b"),Object(d["a"])(f,n,s,!1,null,null,null)),b=h.exports;a["a"].config.productionTip=!1,new a["a"]({render:e=>e(b)}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var a=i("5e27"),n=i.n(a);n.a},"5e27":function(e,t,i){},d4eb:function(e,t,i){}});
//# sourceMappingURL=index.1825cca6.js.map