(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1050:function(e,t,r){"use strict";r.r(t);var n=r(1114),i=r(698);for(var s in i)"default"!==s&&function(e){r.d(t,e,(function(){return i[e]}))}(s);var o=r(16),l=Object(o.a)(i.default,n.a,n.b,!1,null,null,null);l.options.__file="src/components/slider/edit.vue",t.default=l.exports},1114:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"15px"}},[r("Form",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}],ref:"form",attrs:{mode:"block",validOnChange:!0,showErrorTip:!0,rules:e.rules,model:e.slider}},[r("FormItem",{attrs:{label:"封面",prop:"thumb"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("封面")]},proxy:!0}])},[e._v(" "),r("image-upload",{attrs:{name:"封面"},model:{value:e.slider.thumb,callback:function(t){e.$set(e.slider,"thumb",t)},expression:"slider.thumb"}})],1),e._v(" "),r("FormItem",{attrs:{label:"URL",prop:"url"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("URL")]},proxy:!0}])},[e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.slider.url,expression:"slider.url"}],attrs:{type:"text"},domProps:{value:e.slider.url},on:{input:function(t){t.target.composing||e.$set(e.slider,"url",t.target.value)}}})]),e._v(" "),r("FormItem",{attrs:{label:"升序",prop:"sort"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("升序")]},proxy:!0}])},[e._v(" "),r("Slider",{attrs:{range:{start:1,end:2e3}},model:{value:e.slider.sort,callback:function(t){e.$set(e.slider,"sort",t)},expression:"slider.sort"}}),e._v(" "),r("p",[e._v(e._s(e.slider.sort))])],1),e._v(" "),r("FormItem",[r("Button",{attrs:{color:"primary"},on:{click:e.create}},[e._v("保存")]),e._v(" "),r("Button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},i=[];n._withStripped=!0},698:function(e,t,r){"use strict";r.r(t);var n=r(699),i=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,(function(){return n[e]}))}(s);t.default=i.a},699:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:["id"],mounted:function(){var t=this;e.Slider.Edit({id:this.id}).then((function(e){t.slider=e.data}))},data:function(){return{slider:{thumb:"",url:"",sort:0},rules:{required:["thumb","url","sort"]}}},methods:{create:function(){this.$refs.form.valid().result&&(this.$emit("success",this.slider),this.close())},cancel:function(){this.close()},close:function(){this.$emit("close")}}};t.default=r}).call(this,r(352).default)}}]);