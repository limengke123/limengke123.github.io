webpackJsonp([3],{111:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("NavBar",{attrs:{title:t.headerTitle,"left-text":"返回","right-text":"按钮","left-arrow":"left-arrow"}})],1)},o=[],i={render:a,staticRenderFns:o};e.a=i},112:function(t,e,n){"use strict";function a(t){n(113)}var o=n(50),i=n(115),r=n(20),c=a,s=r(o.a,i.a,!1,c,"data-v-54ca9da2",null);e.a=s.exports},113:function(t,e){},115:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._l(t.footerItem,function(e){return[n("div",{staticClass:"item",class:e.isActived?"isActived":"",on:{click:function(n){t.setFooterItemActive(e.id)}}},[n("router-link",{attrs:{to:e.path}},[n("Icon",{key:e.id,style:{fontSize:"1.6rem"},attrs:{name:e.iconName}}),n("div",{staticClass:"content"},[t._v(t._s(e.name))])],1)],1)]})],2)},o=[],i={render:a,staticRenderFns:o};e.a=i},116:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$route.meta.main?[n("Header"),n("router-view"),n("Footer")]:[n("router-view")]],2)},o=[],i={render:a,staticRenderFns:o};e.a=i},117:function(t,e,n){"use strict";var a=n(9),o=n(118);a.default.use(o.a);var i=[{path:"/",name:"money",meta:{main:!0},component:function(){return n.e(0).then(n.bind(null,130))}},{path:"/note",name:"note",meta:{main:!0},component:function(){return n.e(1).then(n.bind(null,131))}},{path:"/about",name:"about",meta:{main:!0},component:function(){return n.e(0).then(n.bind(null,132))}}];e.a=new o.a({routes:i})},119:function(t,e,n){"use strict";var a=n(9),o=n(35),i=n(120),r=n(125),c=n(126),s=n(127);a.default.use(o.a),e.a=new o.a.Store({state:r.a,mutations:i.a,getters:c.a,actions:s.a})},120:function(t,e,n){"use strict";var a=n(121),o=n.n(a),i=n(51);console.log(i.a),e.a=o()({},i.a.SET_FOOTER_ACTIVED,function(t,e){t.footerItem.forEach(function(t){t.id===e?t.isActived=!0:t.isActived=!1})})},125:function(t,e,n){"use strict";e.a={footerItem:[{name:"money",path:"/",isActived:!0,iconName:"cash-back-record",id:0},{name:"note",path:"/note",isActived:!1,iconName:"records",id:1},{name:"about",path:"/about",isActived:!1,iconName:"home",id:2}]}},126:function(t,e,n){"use strict";e.a={footerItem:function(t){return t.footerItem},headerTitle:function(t){return t.footerItem.filter(function(t){return!0===t.isActived})[0].name}}},127:function(t,e,n){"use strict";var a=n(51);e.a={setFooterItemActive:function(t,e){(0,t.commit)(a.a.SET_FOOTER_ACTIVED,e)}}},36:function(t,e,n){"use strict";var a=n(60),o=n(112);e.a={name:"app",components:{Header:a.a,Footer:o.a}}},37:function(t,e,n){"use strict";var a=n(38),o=n.n(a),i=n(70),r=(n.n(i),n(72)),c=n.n(r),s=n(35);e.a={components:{NavBar:c.a},computed:o()({},Object(s.c)(["headerTitle"]))}},45:function(t,e){},50:function(t,e,n){"use strict";var a=n(38),o=n.n(a),i=n(114),r=(n.n(i),n(34)),c=n.n(r),s=n(35);e.a={components:{Icon:c.a},computed:o()({},Object(s.c)(["footerItem"])),methods:o()({},Object(s.b)(["setFooterItemActive"]))}},51:function(t,e,n){"use strict";e.a={SET_FOOTER_ACTIVED:"SET_FOOTER_ACTIVED"}},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(9),o=n(56),i=n(117),r=n(119);a.default.config.productionTip=!1,new a.default({el:"#app",router:i.a,store:r.a,template:"<App/>",components:{App:o.a}})},56:function(t,e,n){"use strict";function a(t){n(57),n(59)}var o=n(36),i=n(116),r=n(20),c=a,s=r(o.a,i.a,!1,c,"data-v-1d44f523",null);e.a=s.exports},57:function(t,e){},59:function(t,e){},60:function(t,e,n){"use strict";function a(t){n(61)}var o=n(37),i=n(111),r=n(20),c=a,s=r(o.a,i.a,!1,c,"data-v-6932b202",null);e.a=s.exports},61:function(t,e){},71:function(t,e){}},[52]);
//# sourceMappingURL=app.c4112c64d889e9e68477.js.map