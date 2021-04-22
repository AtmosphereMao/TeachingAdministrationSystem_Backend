(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1106:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return a}));var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{},[o("div",{staticClass:"table-basic-vue frame-page h-panel"},[e._m(0),e._v(" "),o("div",{staticClass:"h-panel-body"},[o("p",[o("Button",{staticClass:"h-btn h-btn-primary",attrs:{icon:"icon-arrow-left"},on:{click:function(t){return e.back()}}},[e._v("返回列表")])],1),e._v(" "),o("Form",{ref:"form",attrs:{mode:"block",validOnChange:!0,showErrorTip:!0,labelWidth:110,rules:e.rules,model:e.video}},[o("FormItem",{attrs:{label:"所属课程",prop:"course_id"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("所属课程")]},proxy:!0}])},[e._v(" "),o("Select",{attrs:{datas:e.courses,keyName:"id",titleName:"title",filterable:!0},on:{change:e.selectCourse},model:{value:e.video.course_id,callback:function(t){e.$set(e.video,"course_id",t)},expression:"video.course_id"}})],1),e._v(" "),o("FormItem",{attrs:{label:"章节",prop:"chapter_id"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("章节")]},proxy:!0}])},[e._v(" "),o("Select",{attrs:{datas:e.chapters,keyName:"id",titleName:"title",filterable:!0},model:{value:e.video.chapter_id,callback:function(t){e.$set(e.video,"chapter_id",t)},expression:"video.chapter_id"}})],1),e._v(" "),o("FormItem",{attrs:{label:"视频名",prop:"title"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("视频名")]},proxy:!0}])},[e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.video.title,expression:"video.title"}],attrs:{type:"text"},domProps:{value:e.video.title},on:{input:function(t){t.target.composing||e.$set(e.video,"title",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"价格",prop:"charge"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("价格")]},proxy:!0}])},[e._v(" "),o("div",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}],staticClass:"h-input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.video.charge,expression:"video.charge"}],attrs:{type:"text"},domProps:{value:e.video.charge},on:{input:function(t){t.target.composing||e.$set(e.video,"charge",t.target.value)}}}),e._v(" "),o("span",{staticClass:"h-input-addon"},[e._v("元")])])]),e._v(" "),o("FormItem",{attrs:{label:"简短介绍",prop:"short_description"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("简短介绍")]},proxy:!0}])},[e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.video.short_description,expression:"video.short_description"}],domProps:{value:e.video.short_description},on:{input:function(t){t.target.composing||e.$set(e.video,"short_description",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"详细介绍",prop:"description"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("详细介绍")]},proxy:!0}])},[e._v(" "),o("tinymce-editor",{model:{value:e.video.original_desc,callback:function(t){e.$set(e.video,"original_desc",t)},expression:"video.original_desc"}})],1),e._v(" "),o("FormItem",{attrs:{label:"上架时间",prop:"published_at"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("上架时间")]},proxy:!0}])},[e._v(" "),o("DatePicker",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}],attrs:{type:"datetime"},model:{value:e.video.published_at,callback:function(t){e.$set(e.video,"published_at",t)},expression:"video.published_at"}})],1),e._v(" "),o("FormItem",{attrs:{label:"是否显示",prop:"is_show"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("是否显示")]},proxy:!0}])},[e._v(" "),o("h-switch",{attrs:{trueValue:1,falseValue:-1},model:{value:e.video.is_show,callback:function(t){e.$set(e.video,"is_show",t)},expression:"video.is_show"}})],1),e._v(" "),o("FormItem",{attrs:{label:"SEO描述",prop:"seo_description"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("SEO描述")]},proxy:!0}])},[e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.video.seo_description,expression:"video.seo_description"}],domProps:{value:e.video.seo_description},on:{input:function(t){t.target.composing||e.$set(e.video,"seo_description",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"SEO关键字",prop:"seo_keywords"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("SEO关键字")]},proxy:!0}])},[e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.video.seo_keywords,expression:"video.seo_keywords"}],domProps:{value:e.video.seo_keywords},on:{input:function(t){t.target.composing||e.$set(e.video,"seo_keywords",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"上传视频"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("上传视频")]},proxy:!0}])},[e._v(" "),o("Tabs",{attrs:{datas:e.tabs},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}})],1),e._v(" "),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:"华为云"===e.tab,expression:"tab === '华为云'"}],attrs:{label:"华为云视频ID",prop:"huawei_video_id"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("华为云视频ID")]},proxy:!0}])},[e._v(" "),o("huawei-video",{model:{value:e.video.huawei_video_id,callback:function(t){e.$set(e.video,"huawei_video_id",t)},expression:"video.huawei_video_id"}})],1),e._v(" "),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:"阿里云"===e.tab,expression:"tab === '阿里云'"}],attrs:{label:"阿里云视频ID",prop:"aliyun_video_id"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("阿里云视频ID")]},proxy:!0}])},[e._v(" "),o("aliyun-video",{model:{value:e.video.aliyun_video_id,callback:function(t){e.$set(e.video,"aliyun_video_id",t)},expression:"video.aliyun_video_id"}})],1),e._v(" "),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:"腾讯云"===e.tab,expression:"tab === '腾讯云'"}],attrs:{label:"腾讯云视频ID",prop:"tencent_video_id"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("腾讯云视频ID")]},proxy:!0}])},[e._v(" "),o("tencent-video",{model:{value:e.video.tencent_video_id,callback:function(t){e.$set(e.video,"tencent_video_id",t)},expression:"video.tencent_video_id"}})],1),e._v(" "),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:"直链"===e.tab,expression:"tab === '直链'"}],attrs:{label:"直链URL",prop:"url"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("直链URL")]},proxy:!0}])},[e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.video.url,expression:"video.url"}],attrs:{type:"text"},domProps:{value:e.video.url},on:{input:function(t){t.target.composing||e.$set(e.video,"url",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"视频时长",prop:"duration"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("视频时长")]},proxy:!0}])},[e._v(" "),o("div",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}],staticClass:"h-input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.video.duration,expression:"video.duration"}],attrs:{type:"text"},domProps:{value:e.video.duration},on:{input:function(t){t.target.composing||e.$set(e.video,"duration",t.target.value)}}}),e._v(" "),o("span",{staticClass:"h-input-addon"},[e._v("秒")])])]),e._v(" "),o("FormItem",[o("Button",{attrs:{color:"primary"},on:{click:e.create}},[e._v("添加")])],1)],1)],1)])])},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"h-panel-bar"},[t("span",{staticClass:"h-panel-title"},[this._v("添加视频")])])}];i._withStripped=!0},324:function(e,t,o){"use strict";o.r(t);var i=o(1106),a=o(624);for(var r in a)"default"!==r&&function(e){o.d(t,e,(function(){return a[e]}))}(r);var s=o(16),n=Object(s.a)(a.default,i.a,i.b,!1,null,null,null);n.options.__file="src/components/video/create.vue",t.default=n.exports},624:function(e,t,o){"use strict";o.r(t);var i=o(625),a=o.n(i);for(var r in i)"default"!==r&&function(e){o.d(t,e,(function(){return i[e]}))}(r);t.default=a.a},625:function(e,t,o){"use strict";(function(e,i){var a=o(24);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(o(371)),s=a(o(774)),n=a(o(775)),d=a(o(781)),l=a(o(782)),u={components:{TinymceEditor:r.default,AliyunVideo:s.default,TencentVideo:n.default,HuaweiVideo:d.default},data:function(){return{video:l.default.parse({}),courses:[],chapters:[],tabs:["华为云","阿里云","腾讯云","直链"],tab:"华为云",rules:{required:["course_id","title","charge","short_description","published_at","is_show","seo_description","seo_keywords"]}}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.video.is_show=0,e.Video.CreateParams().then((function(e){t.courses=e.data.courses}))},back:function(){this.$router.push({name:"Video"})},create:function(){var t=this;this.$refs.form.valid().result&&(this.video.render_desc=this.video.original_desc,e.Video.Create(this.video).then((function(e){i.$Message.success("添加成功"),t.$router.push({name:"Video"})})))},selectCourse:function(t){var o=this;e.CourseChapter.List({course_id:t.id}).then((function(e){o.chapters=e.data.chapters}))}}};t.default=u}).call(this,o(352).default,o(72))}}]);