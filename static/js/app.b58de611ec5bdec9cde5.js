webpackJsonp([3],{124:function(t,e,n){"use strict";function a(t){n(125),n(126),n(127)}var i=n(54),o=n(145),r=n(25),s=a,c=r(i.a,o.a,!1,s,"data-v-109f83ce",null);e.a=c.exports},125:function(t,e){},126:function(t,e){},127:function(t,e){},128:function(t,e,n){"use strict";function a(t){n(129),n(130)}var i=n(55),o=n(136),r=n(25),s=a,c=r(i.a,o.a,!1,s,"data-v-204726ba",null);e.a=c.exports},129:function(t,e){},130:function(t,e){},134:function(t,e){},136:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-wrapper"},[n("NavBar",{attrs:{title:t.headerItem.title,"right-text":t.headerItem.right,"left-text":t.headerItem.left},on:{"click-right":t.onClickRight}})],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},137:function(t,e,n){"use strict";function a(t){n(138)}var i=n(57),o=n(144),r=n(25),s=a,c=r(i.a,o.a,!1,s,"data-v-911dd91a",null);e.a=c.exports},138:function(t,e){},142:function(t,e){},144:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.footerItem,function(e){return n("TabbarItem",{key:e.key,attrs:{icon:e.iconName,to:e.path}},[t._v(t._s(e.name))])}))],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},145:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$route.meta.main?[n("Header"),n("router-view"),n("Footer")]:[n("router-view")]],2)},i=[],o={render:a,staticRenderFns:i};e.a=o},146:function(t,e,n){"use strict";var a=n(6),i=n(147);a.default.use(i.a);var o=[{path:"/",name:"money",meta:{main:!0},component:function(){return n.e(0).then(n.bind(null,166))}},{path:"/note",name:"note",meta:{main:!0},component:function(){return n.e(1).then(n.bind(null,167))}},{path:"/about",name:"about",meta:{main:!0},component:function(){return n.e(0).then(n.bind(null,168))}}];e.a=new i.a({routes:o})},157:function(t,e,n){"use strict";var a=n(6),i=n(26),o=n(158),r=n(160),s=n(161),c=n(162);a.default.use(i.a),e.a=new i.a.Store({state:r.a,mutations:o.a,getters:s.a,actions:c.a})},158:function(t,e,n){"use strict";var a,i=n(159),o=n.n(i),r=n(56),s=n.n(r),c=n(62);e.a=(a={},o()(a,c.a.CHANGE_HEADER,function(t,e){t.headerItem=s()(null),e.title&&(t.headerItem.title=e.title),e.left&&(t.headerItem.left=e.left),e.right&&(t.headerItem.right=e.right)}),o()(a,c.a.CHANGE_CLASSES,function(t,e){!0!==t.moneyClasses[e].isActive&&t.moneyClasses.forEach(function(t){t.id===e?t.isActive=!0:t.isActive=!1})}),o()(a,c.a.TOGGLE_ADD_MODEAL_SHOW,function(t,e){t.isAddModelShow=e}),o()(a,c.a.UNSHIFT_MONEY_LIST,function(t,e){t.moneyList.unshift(e)}),o()(a,c.a.RMEOVE_MONEY_ITEM,function(t,e){t.moneyList.forEach(function(t,n,a){t.id===e.id&&a.splice(n,1)})}),o()(a,c.a.CHANGE_TODAY,function(t,e){t.isToday=e}),o()(a,c.a.CHANGE_RANGE,function(t,e){t.range=e}),o()(a,c.a.CHANGE_TITLE_DATE,function(t,e){t.titleDate=e}),o()(a,c.a.CHANGE_DATEPICKER_SHOW,function(t,e){t.datePickerShow=e}),a)},160:function(t,e,n){"use strict";e.a={headerItem:{title:"",left:"",right:""},footerItem:[{name:"记账簿",path:"/",iconName:"cash-back-record",id:0},{name:"笔记",path:"/note",iconName:"records",id:1},{name:"关于",path:"/about",iconName:"home",id:2}],moneyClasses:[{name:"食物",iconName:"food",isActive:!0,color:"rgb(245,147,150)",id:0,defaults:["水果","早餐","午餐","晚餐","下午茶","宵夜","零食","其他"]},{name:"饮品",iconName:"drink",isActive:!1,color:"rgb(134,195,188)",id:1,defaults:["咖啡","水","奶茶","红茶","牛奶","绿茶","其他"]},{name:"交通",iconName:"traffic",isActive:!1,color:"rgb(88,194,253)",id:2,defaults:["公交车","地铁","计程车","火车","高铁","停车费","加油"]},{name:"购物",iconName:"shop",isActive:!1,color:"rgb(193,136,178)",id:3,defaults:["衣服","鞋子","化妆品","包包","其他"]},{name:"娱乐",iconName:"entertainment",isActive:!1,color:"rgb(254,169,55)",id:4,defaults:["电影","KTV","运动","小说","电玩","展览","其他"]},{name:"居家",iconName:"house",isActive:!1,color:"rgb(177,199,32)",id:5,defaults:["房租","电费","水费","日用品","学习费用","其他"]},{name:"3c",iconName:"phone",isActive:!1,color:"rgb(105,158,234)",id:6,defaults:["话费","手机","电脑","键盘","耳机","其他"]},{name:"医药",iconName:"hospital",isActive:!1,color:"rgb(234,50,41)",id:7,defaults:["感冒","牙医","维生素","保健食品","其他"]},{name:"其他",iconName:"other",isActive:!1,color:"rgb(168,168,168)",id:8,defaults:["影印费","红包","报纸","宠物用品","文具","其他"]},{name:"收入",iconName:"income",isActive:!1,color:"rgb(235,185,36)",id:9,defaults:["薪资","生活费","零用钱","红包","奖金","消费反馈","其他"]}],isAddModelShow:!1,moneyList:JSON.parse(localStorage.getItem("moneyList"))||[],isToday:!0,range:"",titleDate:"今日",datePickerShow:!1}},161:function(t,e,n){"use strict";var a=n(58),i=n.n(a),o=n(69);e.a={headerItem:function(t){return t.headerItem},footerItem:function(t){return t.footerItem},moneyClasses:function(t){return t.moneyClasses},currentClass:function(t){return t.moneyClasses.filter(function(t){return!0===t.isActive})[0]},classesDefaults:function(t,e){return e.currentClass.defaults},isAddModelShow:function(t){return t.isAddModelShow},moneyLists:function(t){return t.moneyList},rangeMoneyLists:function(t,e){return function(t){var n=i()(t,2),a=n[0],o=n[1];return e.moneyLists.filter(function(t){return t.date>=a&&t.date<o})}},isToday:function(t){return t.isToday},renderList:function(t,e){var n=t.range||new o.a(new Date).getRange();return e.rangeMoneyLists(n)},titleDate:function(t){return t.titleDate},datePickerShow:function(t){return t.datePickerShow}}},162:function(t,e,n){"use strict";var a=n(62);e.a={changeHeader:function(t,e){(0,t.commit)(a.a.CHANGE_HEADER,e)},changeClasses:function(t,e){(0,t.commit)(a.a.CHANGE_CLASSES,e)},toggleAddModal:function(t,e){(0,t.commit)(a.a.TOGGLE_ADD_MODEAL_SHOW,e)},addMoneyList:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(a.a.UNSHIFT_MONEY_LIST,n)},removeMoneyItem:function(t,e){(0,t.commit)(a.a.RMEOVE_MONEY_ITEM,e)},changeToday:function(t,e){(0,t.commit)(a.a.CHANGE_TODAY,e)},changeRange:function(t,e){(0,t.commit)(a.a.CHANGE_RANGE,e)},changeTitleDate:function(t,e){(0,t.commit)(a.a.CHANGE_TITLE_DATE,e)},changeDatePickerShow:function(t,e){(0,t.commit)(a.a.CHANGE_DATEPICKER_SHOW,e)}}},163:function(t,e,n){"use strict";var a=n(79),i=n.n(a),o=n(59),r=n.n(o),s=n(60),c=n.n(s),u="moneyList",f=[],l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;r()(this,t),this.storageName=e,this.init(n)}return c()(t,[{key:"init",value:function(t){this.take(this.storageName)||this.save(this.stringify(t))}},{key:"getLists",value:function(){return this.parse(this.take(this.storageName))}},{key:"addItem",value:function(t){var e=this.getLists();e.unshift(t),this.save(this.stringify(e))}},{key:"removeItem",value:function(t){var e=this.getLists();e.splice(t,1),this.save(this.stringify(e))}},{key:"parse",value:function(t){return JSON.parse(t)}},{key:"stringify",value:function(t){return i()(t)}},{key:"save",value:function(t){localStorage.setItem(this.storageName,t)}},{key:"take",value:function(t){return localStorage.getItem(this.storageName)}}]),t}();e.a=l},18:function(t,e){},54:function(t,e,n){"use strict";var a=n(128),i=n(137);e.a={name:"app",components:{Header:a.a,Footer:i.a}}},55:function(t,e,n){"use strict";var a=n(56),i=n.n(a),o=n(12),r=n.n(o),s=n(133),c=(n.n(s),n(135)),u=n.n(c),f=n(26);e.a={components:{NavBar:u.a},data:function(){return{infoObj:null}},methods:r()({},Object(f.b)(["changeHeader"]),{onClickRight:function(){this.$toast.fail({message:"建设开发中",duration:1e3})}}),computed:r()({},Object(f.c)(["headerItem"])),watch:{$route:{immediate:!0,handler:function(t){var e=i()(null);switch(t.name){case"money":e.title="记账簿",e.right="统计";break;case"note":e.title="笔记";break;case"about":e.title="关于"}this.changeHeader(e)}}}}},57:function(t,e,n){"use strict";var a=n(12),i=n.n(a),o=n(139),r=(n.n(o),n(140)),s=n.n(r),c=n(141),u=(n.n(c),n(143)),f=n.n(u),l=n(26);e.a={components:{Tabbar:f.a,TabbarItem:s.a},computed:i()({},Object(l.c)(["footerItem"])),data:function(){return{active:0}}}},62:function(t,e,n){"use strict";e.a={CHANGE_HEADER:"CHANGE_HEADER",CHANGE_CLASSES:"CHANGE_CLASSES",TOGGLE_ADD_MODEAL_SHOW:"TOGGLE_ADD_MODEAL_SHOW",UNSHIFT_MONEY_LIST:"UNSHIFT_MONEY_LIST",RMEOVE_MONEY_ITEM:"RMEOVE_MONEY_ITEM",CHANGE_TODAY:"CHANGE_TODAY",CHANGE_RANGE:"CHANGE_RANGE",CHANGE_TITLE_DATE:"CHANGE_TITLE_DATE",CHANGE_DATEPICKER_SHOW:"CHANGE_DATEPICKER_SHOW"}},65:function(t,e){},69:function(t,e,n){"use strict";var a=n(58),i=n.n(a),o=n(59),r=n.n(o),s=n(60),c=n.n(s),u=function(){function t(e){r()(this,t),this.range=e}return c()(t,[{key:"getDateObj",value:function(t){return"[object Date]"===Object.prototype.toString.call(t)?t:new Date(t)}},{key:"getDateString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=this.getDateObj(this.range);return""+e.getFullYear()+t+(e.getMonth()+1)+t+e.getDate()}},{key:"getRange",value:function(){var t=void 0;if(Array.isArray(this.range)){var e=i()(this.range,2),n=e[0],a=e[1];t=[this.getSingleDayFirst(this.getDateObj(n)),this.getSingleDayLast(this.getDateObj(a))]}else t=[this.getSingleDayFirst(this.getDateObj(this.range)),this.getSingleDayLast(this.getDateObj(this.range))];return t}},{key:"getSingleDayLast",value:function(t){return new Date(t.setDate(t.getDate()+1)).setHours(0,0,0,0)}},{key:"getSingleDayFirst",value:function(t){return t.setHours(0,0,0,0)}}]),t}();e.a=u},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(81),i=(n.n(a),n(84)),o=n.n(i),r=n(6),s=n(124),c=n(146),u=n(157),f=n(163);r.default.config.productionTip=!1,r.default.use(o.a),r.default.prototype.$storage=new f.a,new r.default({el:"#app",router:c.a,store:u.a,template:"<App/>",components:{App:s.a}})},83:function(t,e){}},[80]);
//# sourceMappingURL=app.b58de611ec5bdec9cde5.js.map