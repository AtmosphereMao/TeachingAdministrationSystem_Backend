(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1099:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"table-basic-vue frame-page h-panel"},[t._m(0),t._v(" "),r("div",{staticClass:"h-panel-body"},[r("p",[r("Button",{staticClass:"h-btn h-btn-primary",attrs:{icon:"icon-arrow-left"},on:{click:function(e){return t.back()}}},[t._v("返回列表")])],1),t._v(" "),r("Form",{ref:"form",attrs:{validOnChange:!0,showErrorTip:!0,labelWidth:110,rules:t.rules,model:t.chapter}},[r("FormItem",{attrs:{label:"章节名",prop:"title"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("章节名")]},proxy:!0}])},[t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.chapter.title,expression:"chapter.title"}],attrs:{type:"text"},domProps:{value:t.chapter.title},on:{input:function(e){e.target.composing||t.$set(t.chapter,"title",e.target.value)}}})]),t._v(" "),r("FormItem",{attrs:{label:"升序",prop:"sort"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("升序")]},proxy:!0}])},[t._v(" "),r("Slider",{attrs:{range:{start:1,end:100}},model:{value:t.chapter.sort,callback:function(e){t.$set(t.chapter,"sort",e)},expression:"chapter.sort"}}),t._v(" "),r("p",[t._v(t._s(t.chapter.sort))])],1),t._v(" "),r("FormItem",[r("Button",{attrs:{color:"primary"},on:{click:t.create}},[t._v("添加")])],1)],1)],1)])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-panel-bar"},[e("span",{staticClass:"h-panel-title"},[this._v("添加课程章节")])])}];a._withStripped=!0},327:function(t,e,r){"use strict";r.r(e);var a=r(1099),s=r(636);for(var n in s)"default"!==n&&function(t){r.d(e,t,(function(){return s[t]}))}(n);var i=r(16),o=Object(i.a)(s.default,a.a,a.b,!1,null,null,null);o.options.__file="src/components/course_chapter/create.vue",e.default=o.exports},636:function(t,e,r){"use strict";r.r(e);var a=r(637),s=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,(function(){return a[t]}))}(n);e.default=s.a},637:function(t,e,r){"use strict";(function(t,a){var s=r(24);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(r(534)),i=s(r(638)),o={data:function(){return{course:n.default.parse({}),chapter:i.default.parse({}),rules:{required:["title","sort"]}}},mounted:function(){this.init(),this.course.id=this.$route.params.cid,this.chapter.sort=1},methods:{init:function(){},back:function(){this.$router.push({name:"CourseChapter",params:{cid:this.course.id}})},create:function(){var e=this;if(this.$refs.form.valid().result){var r=this.chapter;r.course_id=this.course.id,t.CourseChapter.Create(r).then((function(t){a.$Message.success("添加成功"),e.$router.push({name:"CourseChapter",params:{cid:e.course.id}})}))}}}};e.default=o}).call(this,r(352).default,r(72))},638:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=new t({course_id:0,title:"",sort:0});e.default=r}).call(this,r(355))}}]);