webpackJsonp([0],[,,function(t,e,n){n(32);var i=n(0)(n(48),n(20),null,null);t.exports=i.exports},function(t,e,n){n(37);var i=n(0)(n(49),n(25),null,null);t.exports=i.exports},function(t,e,n){n(28);var i=n(0)(n(50),n(16),null,null);t.exports=i.exports},function(t,e,n){n(34);var i=n(0)(n(41),n(22),null,null);t.exports=i.exports},function(t,e,n){"use strict";var i=n(1),s=n(39),l=n(10),a=n.n(l),o=n(11),c=n.n(o);i.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"ZWFont",component:a.a,meta:{page:"main"}},{path:"/business",name:"ZWFontBusiness",component:c.a,meta:{page:"business"}}]})},function(t,e,n){var i=n(0)(n(42),null,null,null);t.exports=i.exports},function(t,e,n){n(36);var i=n(0)(n(43),n(24),"data-v-a6704446",null);t.exports=i.exports},function(t,e,n){n(27);var i=n(0)(n(44),n(15),"data-v-12eef015",null);t.exports=i.exports},function(t,e,n){n(33);var i=n(0)(n(45),n(21),null,null);t.exports=i.exports},function(t,e,n){n(30);var i=n(0)(n(46),n(18),null,null);t.exports=i.exports},function(t,e,n){n(31);var i=n(0)(n(47),n(19),null,null);t.exports=i.exports},function(t,e,n){n(35);var i=n(0)(n(51),n(23),null,null);t.exports=i.exports},function(t,e,n){n(29);var i=n(0)(n(52),n(17),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("nav",{staticClass:"navbar navbar-default",staticStyle:{display:"none"},attrs:{role:"navigation"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-bg animation-slide-top"},[n("div",{staticClass:"title-header"},[n("div",{staticClass:"title-name "},[t._v("\n      "+t._s(t.welcome)+"\n    ")]),t._v(" "),n("div",{staticClass:"title-name  navbar-right"},[t._v("\n       今天是 "+t._s(t.today)+" | \n        "),n("a",[t._v(" 用户登录")])]),t._v(" "),n("div",{staticClass:"title-logo"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"title-search-recommend"},[n("div",{staticClass:"col-xs-6 offset-xs-3"},[t._v("\n        热门搜索：\n        "),t._l(t.recommeds,function(e){return n("button",{staticClass:"btn btn-xs btn-round btn-info waves-effect",staticStyle:{margin:"0 5px",padding:"1px 10px"},attrs:{type:"button","aria-label":"Close"}},[t._v("\n          "+t._s(e)+"\n        ")])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-search-container row"},[n("div",{staticClass:"col-xs-6 offset-xs-3"},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-search"},[n("i",{staticClass:"input-search-icon md-search",attrs:{"aria-hidden":"true"}}),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",name:"",placeholder:"请输入搜索关键词"}}),t._v(" "),n("button",{staticClass:"btn btn-round btn-primary waves-effect btn-search-right btn-warning",attrs:{type:"button","aria-label":"Close"}},[t._v("\n              搜索\n            ")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-bordered",staticStyle:{"margin-bottom":"10px"}},[n("div",{staticClass:"panel-body left"},[n("h3",{staticClass:"new-title"},[t._v(t._s(t.news.title))]),t._v(" "),n("ul",{staticClass:"list-group list-group-full "},t._l(t.news.news,function(e){return n("li",{staticClass:"list-group-item"},[n("p",{staticClass:"news-desc-title"},[n("a",{attrs:{href:e.url?e.url:"#",target:"_blank"}},[t._v(t._s(e.title.length>23?e.title.substr(0,23)+"...":e.title))])]),t._v(" "),n("p",{staticClass:"news-desc-text"},[t._v("\n          "+t._s(e.desc)+"\n        ")])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page margin-0"},[n("ZWFontHeader"),t._v(" "),n("ZWFontContainer",{attrs:{page:t.page}}),t._v(" "),n("ZWFontFoot")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel slide",attrs:{"data-ride":"carousel"}},[t._m(0),t._v(" "),n("div",{staticClass:"carousel-inner",attrs:{id:"carouselcontainer",role:"listbox"}},t._l(t.list,function(e){return n("div",{class:e.active?"carousel-item active":"carousel-item"},[n("img",{staticClass:"w-full",staticStyle:{height:"300px"},attrs:{src:e.pic,alt:e.title}}),t._v(" "),n("div",{staticClass:"carousel-caption"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"carousel-indicators carousel-indicators-fillin"},[n("li",{staticClass:"active",attrs:{"data-slide-to":"0","data-target":"#exampleCarouselCaptions"}}),t._v(" "),n("li",{attrs:{"data-slide-to":"1","data-target":"#exampleCarouselCaptions"}}),t._v(" "),n("li",{attrs:{"data-slide-to":"2","data-target":"#exampleCarouselCaptions"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container animation-slide-bottom"},[n("div",{staticClass:"innercontiner  container-fluid"},[n("div",{staticClass:"row"},t._l(t.menus,function(e){return n("div",{class:e.class+" tab-item"},["#"!=e.link.substr(0,1)?n("a",{class:e.active?"nav-link active":"nav-link",attrs:{"data-trigger":"click",href:e.link,target:"_blank","aria-expanded":"false"}},[n("i",{class:"icon "+e.icon,attrs:{"aria-hidden":"true"}}),t._v("\n         "+t._s(e.title)+"\n       ")]):t._e(),t._v(" "),"#"==e.link.substr(0,1)?n("router-link",{class:e.active?"nav-link active":"nav-link",attrs:{to:e.link.substr(1,e.link.length),"aria-expanded":"false"}},[n("i",{class:"icon "+e.icon,attrs:{"aria-hidden":"true"}}),t._v("\n         "+t._s(e.title)+"\n       ")]):t._e()],1)})),t._v(" "),"main"==t.page?n("div",{staticClass:"row font-carousel"},[n("div",{staticClass:"col-xs-7 "},[n("ZWFontCarousel",{attrs:{list:t.picNews}})],1),t._v(" "),n("div",{staticClass:"col-xs-5"},[n("ZWNewsDesc",{attrs:{news:t.descNews}})],1)]):t._e(),t._v(" "),"main"==t.page?n("div",{staticClass:"row container-text"},t._l(t.news,function(t){return n("div",{staticClass:"col-xs-6",staticStyle:{padding:"0 5px"}},[n("ZWNews",{attrs:{item:t}})],1)})):t._e(),t._v(" "),"business"==t.page?n("div",{staticClass:"row container-text-white"},[n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"font-app-list-container col-xs-9"},[n("ul",{staticClass:"font-app-list clearfix"},t._l(t.businessApps,function(e){return n("a",{attrs:{href:e.link,target:"_blank"}},[n("li",[n("div",{staticClass:"font-app-list-mask"},[n("img",{attrs:{src:e.icon}}),t._v(" "),n("p",[t._v(t._s(e.title))])])])])}))]),t._v(" "),n("div",{staticClass:"col-xs-3"},[n("ZWNews",{attrs:{item:t.businessNews}})],1)])])]):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page margin-0"},[n("ZWFontHeader"),t._v(" "),n("ZWFontContainer",{attrs:{page:t.page}}),t._v(" "),n("ZWFontFoot")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NoNav"),t._v(" "),n("NoMenu"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-bordered",staticStyle:{"margin-bottom":"10px"}},[n("div",{staticClass:"panel-body left",style:t.style},[n("h4",{staticClass:"new-title"},[t._v(t._s(t.item.title))]),t._v(" "),n("ul",{staticClass:"list-group list-group-full "},t._l(t.item.news,function(e){return n("li",{staticClass:"list-group-item"},[n("a",{attrs:{href:e.url?e.url:"#",target:"_blank"}},[t._v(t._s(e.title.length>23?e.title.substr(0,23)+"...":e.title))]),t._v(" "),n("span",{staticClass:"pull-right"},[t._v("\n          "+t._s(e.date)+"\n        ")])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-menubar",staticStyle:{display:"none"}},[n("div",{staticClass:"site-menubar-header"}),t._v(" "),n("div",{staticClass:"site-menubar-body scrollable scrollable-inverse scrollable-vertical is-enabled",staticStyle:{position:"relative"}},[n("div",{staticClass:"scrollable-container",staticStyle:{height:"147px",width:"275px"}},[n("div",{staticClass:"scrollable-content",staticStyle:{width:"260px"}},[n("ul",{staticClass:"site-menu",attrs:{"data-plugin":"menu"}})])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"font-foot"},[t._v("\n  Copyright 2007\n")])},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(5),l=n.n(s),a=n(6);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<ZWFontApp/>",components:{ZWFontApp:l.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(7),l=n.n(s),a=n(9),o=n.n(a),c=n(8),r=n.n(c);i.a.prototype.GLOBAL=l.a,e.default={name:"ZWFont",data:function(){return{}},created:function(){},components:{NoNav:o.a,NoMenu:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={static:"http://7xpmqq.com1.z0.glb.clouddn.com/"};e.default={staticHost:"http://static.thewallet.com.cn",qiniu:i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nomenu",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nonav",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),s=n.n(i),l=n(2),a=n.n(l),o=n(3),c=n.n(o);e.default={name:"zwfont",components:{ZWFontHeader:s.a,ZWFontContainer:a.a,ZWFontFoot:c.a},mounted:function(){},data:function(){return console.log(this.$route),{page:this.$route.meta.page}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),s=n.n(i),l=n(2),a=n.n(l),o=n(3),c=n.n(o);e.default={name:"zwfont",components:{ZWFontHeader:s.a,ZWFontContainer:a.a,ZWFontFoot:c.a},mounted:function(){},data:function(){return console.log(this.$route),{page:this.$route.meta.page}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"zwfontcarousel",components:{},beforeMount:function(){this.list.length>0&&(this.list[0].active=!0),console.log(this.list)},data:function(){return{}},methods:{},props:["list"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),s=n.n(i),l=n(12),a=n.n(l),o=n(14),c=n.n(o);e.default={name:"zwfontcontainer",components:{ZWNews:s.a,ZWFontCarousel:a.a,ZWNewsDesc:c.a},mounted:function(){},data:function(){var t=["一","二","三","四","五","六","日"];return{welcome:"欢迎您进入吉林市电子政务平台",name:"吉林市电子政务平台",today:(new Date).getFullYear()+"年"+((new Date).getMonth()+1)+"月"+(new Date).getDate()+"日 星期"+t[(new Date).getDay()-1],recommeds:["环保","教育","重大项目","证件审批","新政策"],menus:[{title:"首页",icon:"fa-home",active:"main"==this.page,class:"col-xs-1",link:"#/"},{title:"政务服务管理平台",icon:"fa-bank",class:"col-xs-3",link:"http://121.42.169.26:3003/jlegp"},{title:"业务审批系统",icon:"fa-laptop",class:"col-xs-2",active:"business"==this.page,link:"#/business"},{title:"重大项目管理",icon:"fa-random",class:"col-xs-3",active:"major"==this.page,link:"http://115.28.110.211:3001/view/index_jltzxm.html#/?_k=1583k8"},{title:"安全信息管理",icon:"fa-shield",class:"col-xs-3",link:"#/"}],news:[{title:"吉林要闻",news:[{id:"1",title:"蛟河市农业局召开秸秆机收捡拾打捆现场演示会",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282138&flmid=1001003002",date:"2017-05-13"},{id:"2",title:"桦甸市开展2017年测土配方施肥肥料试验、示范工作",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282136&flmid=1001003002",date:"2017-05-13"},{id:"3",title:"永吉县大力发展畜牧业经济成果显著",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281781&flmid=1001003002",date:"2017-05-13"},{id:"4",title:"永吉县星星哨水库灌区管理处开展春灌工作",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281780&flmid=1001003002",date:"2017-05-13"},{id:"5",title:"舒兰市残联开展残疾人康复服务机构检查工作",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281977&flmid=1001003002",date:"2017-05-13"},{id:"6",title:"龙潭区残联认真学习贯彻 《中国共产党问责条例》",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281976&flmid=1001003002",date:"2017-05-13"}]},{title:"通知公告",news:[{id:"1",title:"《吉林二台子机场改扩建工程》社会稳定风险分析征求公众意见公示",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281939&flmid=10010030025",date:"2017-05-11"},{id:"2",title:"吉林高新区公开招聘专业人才公告",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281178&flmid=10010030025",date:"2017-05-08"},{id:"3",title:"关于吉林市PPP项目征集公告",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280637&flmid=10010030025",date:"2017-05-04"},{id:"4",title:"中共吉林市委 吉林市人民政府 关于表彰..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280636&flmid=10010030025",date:"2017-05-04"},{id:"5",title:"关于跃马湖黑臭水体的公示",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280638&flmid=10010030025",date:"2017-05-04"},{id:"6",title:"关于2017年城镇低收入住房困难家庭申..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280331&flmid=10010030025",date:"2017-05-03"}]},{title:"重要会议",news:[{id:"1",title:"市政协主席崔振吉在蛟河市调研脱贫攻坚工..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282147&flmid=1001003002",date:"2017-5-12"},{id:"2",title:"农工党吉林市第七次代表大会召开",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282140&flmid=1001003002",date:"2017-5-12"},{id:"3",title:"吉林市市政公用局组织开展局长接待日活动",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282223&flmid=1001003002",date:"2017-5-12"},{id:"4",title:"全市市直机关公务员职业道德教育轮训班开..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282041&flmid=1001003002",date:"2017-5-12"},{id:"5",title:"吉林市就业服务局服务企业促发展 促进就..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282043&flmid=1001003002",date:"2017-5-12"},{id:"6",title:"我市召开全市统一战线打造“吉行”同心品..\t",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281636&flmid=1001003002",date:"2017-5-11"}]},{title:"领导活动",news:[{id:"1",title:"市委召开全市领导干部会议张焕秋任吉林市委书记",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=278094&flmid=1001003005",date:"2017-04-18"},{id:"2",title:"吉林市人大常委会任免人员名单",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=275883&flmid=1001003005",date:"2017-04-18"},{id:"3",title:"吉林市人大常委会人事任免名单",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=266137&flmid=1001003005",date:"2017-04-18"},{id:"4",title:"2017年1月12日吉林市第十六届人大常委会第一次会议..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=265440&flmid=1001003005",date:"2017-04-18"},{id:"5",title:"2016年12月16日吉林市第十五届人大常委会第三十八..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=262423&flmid=1001003005",date:"2017-04-18"},{id:"6",title:"2016年12月2日吉林市第十五届人大常委会任免人员名..",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=260443&flmid=1001003005",date:"2017-04-18"}]}],descNews:{title:"新闻动态",news:[{id:"1",title:"政协吉林市第十二届委员会常务委员会提案工作情况报告（摘要）",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=272538&flmid=10010030024",desc:"——在政协吉林市第十三届委员会第一次会议上（2017年1月6日）",date:"2017-1-6"},{id:"2",title:"政协吉林市第十二届委员会常务委员会工作报告",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=271701&flmid=10010030024",desc:"——在政协吉林市第十三届委员会第一次会议上（2017年1月6日）",date:"2017-1-6"}]},picNews:[{title:"吉林市市政公用局组织开展局长接待日活动",desc:"",pic:"http://www.jlcity.gov.cn/uploadfile/20170512040733334.jpg",url:""},{title:"桦甸市：“旅游+扶贫”创新乡村旅游扶贫机制",desc:"",pic:"http://www.jlcity.gov.cn/uploadfile/20170511030753904.jpg",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/tpxxnew.jsp?wzid=282027"},{title:"中国吉林市·2017玫瑰音乐节将于7月14日至16日举行",desc:"",pic:"http://www.jlcity.gov.cn/uploadfile/20170511095244409.jpg",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/tpxxnew.jsp?wzid=281956"}],businessApps:[{title:"食药监局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_syj.png",link:"http://121.42.169.26:3003/jlfmp"},{title:"商务局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_swj.png",link:" http://121.42.169.26:3003/jlshswjbs"},{title:"房管局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_fgj.png",link:"http://121.42.169.26:3003/jlnsp"},{title:"物价局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_wjj.png",link:""},{title:"国土资源局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_fgtzy.png",link:""},{title:"交通运输局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_jtys.png",link:""},{title:"审计局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_sjj.png",link:""},{title:"民政局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_mzj.png",link:""},{title:"财政局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_czj.png",link:""},{title:"林业局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_lyj.png",link:""},{title:"能源局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_nyj.png",link:""},{title:"旅游局",icon:"http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_lyj.png",link:""}],businessNews:{title:"国务院重要政策信息",background:"#ffffff",news:[{id:"1",title:"蛟河市农业局召开秸秆机收捡拾打捆现场演示会",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282138&flmid=1001003002",date:"2017-05-13"},{id:"2",title:"桦甸市开展2017年测土配方施肥肥料试验、示范工作",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282136&flmid=1001003002",date:"2017-05-13"},{id:"3",title:"永吉县大力发展畜牧业经济成果显著",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281781&flmid=1001003002",date:"2017-05-13"},{id:"4",title:"永吉县星星哨水库灌区管理处开展春灌工作",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281780&flmid=1001003002",date:"2017-05-13"},{id:"5",title:"舒兰市残联开展残疾人康复服务机构检查工作",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281977&flmid=1001003002",date:"2017-05-13"},{id:"6",title:"龙潭区残联认真学习贯彻 《中国共产党问责条例》",url:"http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281976&flmid=1001003002",date:"2017-05-13"}]}}},methods:{},props:["page"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"zwfontfoot",components:{},mounted:function(){},data:function(){return{}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"zwfontheader",components:{},mounted:function(){},data:function(){var t=["一","二","三","四","五","六","日"];return{welcome:"欢迎您进入吉林市电子政务平台",name:"吉林市电子政务平台",today:(new Date).getFullYear()+"年"+((new Date).getMonth()+1)+"月"+(new Date).getDate()+"日 星期"+t[(new Date).getDay()-1],recommeds:["环保","教育","重大项目","证件审批","新政策"]}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"zwnews",components:{},mounted:function(){},data:function(){return{style:{backgroundColor:this.item.background?this.item.background:"white"}}},methods:{},props:["item"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"zwnewsdesc",components:{},mounted:function(){},data:function(){return{}},methods:{},props:["news"]}}],[40]);
//# sourceMappingURL=zwfont.7b3de809274cef01ec77.js.map