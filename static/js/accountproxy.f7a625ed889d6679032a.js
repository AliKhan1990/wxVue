webpackJsonp([1],{100:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(8),o=e(38),i=e.n(o),r=e(41),s=e(39);e.n(s);e(40),n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},101:function(t,a,e){var n=e(42),o={showMsgSuccess:function(t){n(t,"success")},showMsgError:function(t){n(t,"error")},showMsgInfo:function(t){n(t,"info")},showMsgWarning:function(t){n(t,"warning")},setLabelFloat:function(){$&&$(".form-control").each(function(){var t=$(this);""!==$("input",t).val()&&t.removeClass("empty")})},getParaTime:function(t){return t?"_t="+(new Date).getTime():"&_t="+(new Date).getTime()},checkImgExtension:function(t){var a=t.substring(t.lastIndexOf(".")+1);return"PNG"===a.toUpperCase()||"JPG"===a.toUpperCase()||"JPEG"===a.toUpperCase()},isImgSizeTooLarge:function(t){return t>4194304},getHost:function(){return"http://portal.thewallet.com.cn"!==location.origin?"http://120.27.5.58:8080/eWallet":location.origin}};t.exports=o},38:function(t,a,e){e(56);var n=e(1)(e(93),e(51),null,null);t.exports=n.exports},39:function(t,a,e){var n=e(1)(e(99),null,null,null);t.exports=n.exports},40:function(t,a){},41:function(t,a,e){"use strict";var n=e(8),o=e(87),i=e(43),r=e.n(i);n.a.use(o.a),a.a=new o.a({routes:[{path:"/",name:"home",component:r.a}]})},43:function(t,a,e){e(53);var n=e(1)(e(94),e(48),null,null);t.exports=n.exports},44:function(t,a,e){var n=e(1)(e(95),null,null,null);t.exports=n.exports},45:function(t,a,e){var n=e(1)(e(96),null,null,null);t.exports=n.exports},46:function(t,a,e){e(54);var n=e(1)(e(97),e(49),"data-v-bcb2bbfa",null);t.exports=n.exports},47:function(t,a,e){e(55);var n=e(1)(e(98),e(50),"data-v-d297e1a2",null);t.exports=n.exports},48:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-accountproxy page vertical-align text-xs-center",attrs:{"data-animsition-in":"fade-in","data-animsition-out":"fade-out"}},[e("div",{staticClass:"page-content vertical-align-middle"},[e("div",{staticClass:"panel panel-accountproxy"},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"alert dark alert-info alert-avatar alert-dismissible",staticStyle:{"text-align":"left"},attrs:{role:"alert"}},[t._m(0),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{directives:[{name:"img-qiniu-logo",rawName:"v-img-qiniu-logo"}],attrs:{"data-url":t.display.avatar,src:"http://static.thewallet.com.cn/remark/global/portraits/5.jpg"}})]),t._v(" "),e("h4",[t._v(t._s(t.fullname))]),t._v(" "),e("p",[t._v("\n                "+t._s(t.comment)+"\n              ")])]),t._v(" "),e("hr")])]),t._v(" "),e("div",{staticClass:"brand"},[e("img",{directives:[{name:"img-qiniu-logo",rawName:"v-img-qiniu-logo"}],staticClass:"brand-img",attrs:{"data-url":t.app.iconUrl,src:"http://static.thewallet.com.cn/remark/center/assets//images/logo-blue.png",alt:"..."}}),t._v(" "),e("h2",{staticClass:"brand-text font-size-18"},[t._v(t._s(t.app.appName))])]),t._v(" "),t.loadding?e("div",{staticClass:"loader-index",staticStyle:{margin:"80px auto 20px"}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")]):t._e(),t._v(" "),t.loadding?e("p",[t._v("正在使用\n          "),e("span",{staticClass:"jump-account"},[t._v(t._s(t.account))]),t._v("登陆系统，请稍后...")]):t._e(),t._v(" "),t.showChangeBtn&&t.loadding?e("a",{staticClass:"btn-line pull-right",attrs:{href:"javascript:void(0)"},on:{click:t.changeAccount}},[t._v(" 切换用户 ")]):t._e(),t._v(" "),t.loadding?t._e():e("form",{attrs:{method:"post",action:"#",autocomplete:"off"}},[e("div",{staticClass:"form-group form-material floating",attrs:{"data-plugin":"formMaterial"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form-control",class:t.account?"":"empty",attrs:{type:"input",name:"username"},domProps:{value:t.account},on:{input:function(a){a.target.composing||(t.account=a.target.value)}}}),t._v(" "),e("label",{staticClass:"floating-label"},[t._v("用户名")])]),t._v(" "),e("div",{staticClass:"form-group form-material floating",attrs:{"data-plugin":"formMaterial"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:t.password?"":"empty",attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),e("label",{staticClass:"floating-label"},[t._v("密码")])]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-block btn-lg m-t-40",attrs:{type:"button"},on:{click:t.jump}},[t._v("跳转")])])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}]}},49:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"site-menubar",staticStyle:{display:"none"}},[e("div",{staticClass:"site-menubar-header"}),t._v(" "),e("div",{staticClass:"site-menubar-body scrollable scrollable-inverse scrollable-vertical is-enabled",staticStyle:{position:"relative"}},[e("div",{staticClass:"scrollable-container",staticStyle:{height:"147px",width:"275px"}},[e("div",{staticClass:"scrollable-content",staticStyle:{width:"260px"}},[e("ul",{staticClass:"site-menu",attrs:{"data-plugin":"menu"}})])])])])}]}},50:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("nav",{staticClass:"navbar navbar-default",staticStyle:{display:"none"},attrs:{role:"navigation"}})},staticRenderFns:[]}},51:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("NoNav"),t._v(" "),e("NoMenu"),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},53:function(t,a){},54:function(t,a){},55:function(t,a){},56:function(t,a){},93:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(8),o=e(45),i=e.n(o),r=e(47),s=e.n(r),l=e(46),d=e.n(l);console.log("setGlobal"),n.a.prototype.GLOBAL=i.a,n.a._GLOBAL=i.a,a.default={name:"AccountProxyApp",data:function(){return{}},created:function(){},components:{NoNav:s.a,NoMenu:d.a}}},94:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=(e(8),e(44)),o=e.n(n);a.default={name:"AccountProxy",components:{},computed:{fullname:function(){return this.display.lastName+this.display.firstName},appkey:function(){return"300208"},comment:function(){return"即将跳转到应用"+(this.app.appName||"")+"，请填写应用的用户名和密码，用户中心将授权跳转。"}},beforeMount:function(){},beforeUpdate:function(){},mounted:function(){this.load()},data:function(){return{account:"account",password:"",loadding:!1,showChangeBtn:!0,display:{},app:{},timer:null}},methods:{load:function(){var t=this;o.a.accountProxyApi.display({appkey:this.appkey}).done(function(a){t.display=a.auth,t.app=a.appInfo,console.log(a),a.hasAccount&&(t.loadding=!0,t.showChangeBtn=!0,t.timer=setTimeout(function(){t.jump.apply(t)},2e3))}).fail(function(t){console.error(t),alertify.error(t.message)})},changeAccount:function(){this.loadding=!1,clearTimeout(this.timer)},jump:function(){this.loadding=!0;var t=this;o.a.accountProxyApi.setAccount({account:this.account,password:this.password,appkey:this.appkey}).done(function(a){o.a.accountProxyApi.getJumpData({appkey:t.appkey}).done(function(t){var a=$("<form></form>");for(var e in t){var n=$("<input />");n.attr("type","hidden"),n.val(t[e]),n.attr("name",e),a.append(n)}a.attr("action",t.url),a.attr("method","post"),a.css("width","0"),a.css("height","0"),a.appendTo($("body")),a.submit()}).fail(function(t){console.error(t),alertify.error(t.message)})}).fail(function(t){console.error(t),alertify.error(t.message)})}},props:[]}},95:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(101),o=e.n(n),i={fetch:!1,api:{host:"http://115.28.110.211:3001/p",methods:[{name:"queryDisplay",method:"GET",path:"/me/display",traditional:!0},{name:"logout",method:"LINK",path:"/logout",traditional:!0},{name:"changeLang",method:"POST",path:"/lang/:lang  ",traditional:!0},{name:"uploadImg",method:"LINK",path:"/util/uploadImg/:space",traditional:!0},{name:"deleteImg",method:"LINK",path:"/util/images/:space/delete",traditional:!0}]},authApi:{host:"/mobile",methods:[{name:"loginInit",method:"POST",path:"/auth/login/init",traditional:!0},{name:"login",method:"POST",path:"/auth/login",traditional:!0},{name:"changeLang",method:"POST",path:"/lang/:lang  ",traditional:!0},{name:"useableOrgs",method:"GET",path:"/auth/selectOrgs",traditional:!0},{name:"selectOrg",method:"GET",path:"/auth/selectOrg/:orgID",traditional:!0},{name:"jump",method:"LINK",path:"/auth/authorization",traditional:!0}]},testApi:{host:"192.168.10.74:8080/eWallet/zhzwpt",methods:[{name:"denglu",method:"GET",path:"/login?username=zhzwuser&pass=zhzw123456",traditional:!0}]},shareApi:{host:"http://121.42.169.26:5001/api",methods:[{name:"dataTypes",method:"GET",path:"/ShareDataTypes",traditional:!0},{name:"createDataType",method:"POST",path:"/sharedatatypes",traditional:!0},{name:"updateDataType",method:"POST",path:"/sharedatatype/:_id",traditional:!0},{name:"shareDatas",method:"GET",path:"/sharedatatype/:_id/datas",traditional:!0},{name:"shareDataType",method:"GET",path:"/sharedatatype/:_id",traditional:!0},{name:"createshareData",method:"POST",path:"/sharedatatype/:id/datas",traditional:!0},{name:"updateShareData",method:"POST",path:"/sharedata/:_id",traditional:!0}]},portalApi:{host:"http://gportal.thewallet.com.cn"!==location.origin?"http://121.42.169.26:8080/eWallet":location.origin,methods:[{name:"userInfo",method:"GET",path:"/zhzwpt/userinfo",traditional:!0},{name:"isLogin",method:"GET",path:"/zhzwpt/isLogin",traditional:!0}]},companyApi:{host:"http://portal.thewallet.com.cn"!==location.origin?"http://120.27.5.58:8080/eWallet":location.origin,methods:[{name:"userInfo",method:"GET",path:"/zhzwpt/userinfo",traditional:!0},{name:"isLogin",method:"GET",path:"/zhzwpt/isLogin",traditional:!0},{name:"getCode",method:"GET",path:"/general/register/phone/code",traditional:!0},{name:"phoneRegister",method:"POST",path:"/auth/register/phone",traditional:!0},{name:"nameAndPass",method:"POST",path:"/user/nameAndPass",traditional:!0},{name:"user",method:"GET",path:"/user",traditional:!0},{name:"authentication",method:"GET",path:"/user/authentication",traditional:!0},{name:"Postauthentication",method:"POST",path:"/user/authentications",traditional:!0},{name:"PostUsers",method:"POST",path:"/users",traditional:!0}]},zwmApi:{host:"http://115.28.128.210:3001/zwmapi",methods:[{name:"projFormViews",method:"GET",path:"/projFormViews",traditional:!0},{name:"projFormEdits",method:"GET",path:"/projFormEdits",traditional:!0},{name:"projGuides",method:"GET",path:"/projGuides",traditional:!0},{name:"projGuide",method:"GET",path:"/projGuide/:id",traditional:!0},{name:"projShareFormRe",method:"GET",path:"/projShareFormRe",traditional:!0},{name:"projFormEditLink",method:"LINK",path:"/projFormEdit/:processCoding",traditional:!0},{name:"projFormsQuery",method:"GET",path:"/projForms",traditional:!0},{name:"projUserListByRole",method:"LINK",path:"/projUserListByRole",traditional:!0},{name:"projShareViewByTaskDefKey",method:"GET",path:"/projFormView/byTaskDefKey",traditional:!0},{name:"widgetManager",method:"GET",path:"/widgets",traditional:!0},{name:"widget",method:"GET",path:"/widget/:clientID",traditional:!0},{name:"mattersCategories",method:"GET",path:"/mattersCategories",traditional:!0},{name:"createMattersCategories",method:"POST",path:"/mattersCategories",traditional:!0},{name:"mattersCategoryUpdate",method:"POST",path:"/mattersCategory/:id",traditional:!0},{name:"mattersCategoryChildren",method:"GET",path:"/mattersCategory/:parentCode/children",traditional:!0},{name:"deleteMattersCategory",method:"DELETE",path:"/mattersCategory/:id",traditional:!0},{name:"mattersCategoryMatters",method:"GET",path:"/mattersCategory/:id/matters",traditional:!0},{name:"mattersCategoryMattersUnSelect",method:"GET",path:"/mattersCategory/:id/matters/unSelect",traditional:!0},{name:"mattersCategoryMatterLink",method:"GET",path:"/mattersCategory/:id/matter/:matterID/link",traditional:!0},{name:"mattersCategoryMatterUnLink",method:"GET",path:"/mattersCategory/:id/matter/:matterID/unlink",traditional:!0},{name:"mattersCategoryMatterUpdateLink",method:"GET",path:"/mattersCategory/:id/matter/:matterID/updatelink",traditional:!0},{name:"configMatters",method:"GET",path:"/config/matters",traditional:!0},{name:"matterUpdate",method:"POST",path:"/matter/:id",traditional:!0},{name:"publishMattersData",method:"POST",path:"/publishMatterCategory",traditional:!0}]},serverApi:{host:"http://121.42.169.26:3001/serverApi",methods:[{name:"myApps",method:"GET",path:"/me/apps",traditional:!0},{name:"myApp",method:"GET",path:"/me/app/:appkey",traditional:!0},{name:"editMyApp",method:"POST",path:"/me/app/:appkey",traditional:!0}]},accountProxyApi:{host:"http://121.42.169.26:3001/accountproxy",methods:[{name:"display",method:"GET",path:"/:appkey/display",traditional:!0},{name:"setAccount",method:"POST",path:"/:appkey/account",traditional:!0},{name:"getJumpData",method:"POST",path:"/:appkey/jumpdata",traditional:!0}]}},r=function(t,a){var e=this;this.key=t,this.conf=a,this.getParaTime=function(t){return t?"_t="+(new Date).getTime():"&_t="+(new Date).getTime()},this.registerFun=function(t){return function(a,n){if(a&&"form"==a.localName){a=$(a).serialize();var i={};a=a.split("&");for(var r=0;r<a.length;r++){var s=a[r].split("=");s&&2==s.length&&(i[s[0]]=s[1])}a=i}else if("string"==typeof a&&a.match("=")){var l={};a=a.split("?"),a=2==a.length?a[1]:a[0],a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].split("=");p&&2==p.length&&(l[p[0]]=p[1])}a=l}if("LINK"!=t.method&&"JUMP"!=t.method){var c=$,m=c.Deferred(),h=e.conf.host+t.path,u={},g=[];if(a)for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(u[f]=a[f],g.push(f+"="+encodeURIComponent(a[f])),h=h.replace(":"+f,a[f]));var v={type:t.method,url:h,dataType:"json",contentType:"application/x-www-form-urlencoded"};return"GET"==t.method?g.length>0&&(v.url+="?"+g.join("&")):(console.log(u),v.processData=u,v.data=u),v.url.indexOf("?")>=0?v.url+=this.getParaTime():v.url+="?"+this.getParaTime(!0),t.traditional&&(v.xhrFields={withCredentials:!0}),NProgress&&NProgress.start(),$(".md-refresh").addClass("spin"),$.ajax(v).done(function(a){if(NProgress&&NProgress.done(),$(".md-refresh").removeClass("spin"),0==a.return_code)m.resolve(a.data,a);else if(-100039==a.return_code&&t.traditional)location.href=a.data.loginUrl;else{var e=new Error(a.return_message);e.errCode=a.return_code,o.a.showMsgError(a.return_message),m.reject(e,a)}}).fail(function(t){NProgress&&NProgress.done(),$(".md-refresh").removeClass("spin"),o.a.showMsgError("请求失败！"),m.reject(t)}),m}if(a=a||{},n&&$(n)){var y=$(n).data().linkParams;if(y)try{y=JSON.parse(y);for(var _ in y)Object.prototype.hasOwnProperty.call(y,_)&&(a[_]=y[_])}catch(t){}}var T=e.conf.host+t.path,w=[];for(var C in a)Object.prototype.hasOwnProperty.call(a,C)&&(w.push(C+"="+encodeURIComponent($.trim(a[C]))),T=T.replace(":"+C,a[C]));if(w.length>0&&(T+="?"+w.join("&")),"LINK"==t.method)return T;location.href=T}};for(var n=0;n<a.methods.length;n++){var i=a.methods[n];i&&i.name&&(e[i.name]=this.registerFun(i))}},s={};for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)){var d=i[l];d&&d.host&&(s[l]=new r(l,d))}s.socketApi={host:"http://115.28.128.210:3001/"},a.default=s},96:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={static:"http://7xpmqq.com1.z0.glb.clouddn.com/",logo:"http://7xlcsz.com1.z0.glb.clouddn.com/"};a.default={staticHost:"http://static.thewallet.com.cn/",qiniu:n}},97:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"nomenu",data:function(){return{}}}},98:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"nonav",data:function(){return{}}}},99:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(92),o=e.n(n),i=e(89),r=e.n(i),s=e(8);Date.prototype.format=function(t){var a={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t},s.a.directive("dateformat",{inserted:function(t){var a=$(t).text();try{a=parseInt(a),console.log(a),isNaN(a)||(a=new Date(a).format("yyyy-MM-dd"),$(t).text(a))}catch(t){}}}),s.a.directive("datetimeformat",{inserted:function(t){var a=$(t).text();try{a=parseInt(a),console.log(a),isNaN(a)||(a=new Date(a).format("yyyy-MM-dd hh:mm:ss"),$(t).text(a))}catch(t){}}}),s.a.directive("json",{inserted:function(t){var a=$(t).text();try{a=JSON.parse(a),a=r()(a,4,4),console.log(a),$(t).text(a)}catch(t){}}}),s.a.directive("tableoptionup",{inserted:function(t){},bind:function(){console.log(arguments)}}),s.a.directive("op",{inserted:function(t){t=$(t);var a=$(t.parent());console.log(a[0].clientWidth),$(t).css("width",a[0].clientWidth+"px")}}),s.a.directive("popover-json",{inserted:function(t){var t=$(t),a=t.data("json");a="object"==(void 0===a?"undefined":o()(a))?r()(a,4,4):r()(JSON.parse(a),4,4),t.webuiPopover({trigger:"hover",content:function(){return"<pre>"+a+"</pre>"},width:800,height:400,closeable:!0})}}),s.a.directive("img-qiniu-logo",{inserted:function(t){var t=$(t),a=t.data("url");a&&t.attr("src",s.a._GLOBAL.qiniu.logo+a)},update:function(t){var t=$(t),a=t.data("url");a&&t.attr("src",s.a._GLOBAL.qiniu.logo+a)}}),s.a.directive("nodataPanel",{inserted:function(t){$(t).addClass("nodata-panel").text("暂无数据！")},update:function(t){}}),s.a.directive("loaddingPanel",{inserted:function(t){$(t).addClass("nodata-panel").text("加载中！")},update:function(t){}}),s.a.directive("loaddingModel",{inserted:function(t){var a=$(t).parent().height();$(t).css("line-height",a+"px"),$("<div></div>").addClass("loader-index").addClass("loadding-model").append("<div></div>").append("<div></div>").append("<div></div>").append("<div></div>").append("<div></div>").append("<div></div>").appendTo($(t));var e=$(t).data().text;e&&$("<p></p>").addClass("loadding-text").text(e).appendTo($(t))},update:function(t){}})}},[100]);
//# sourceMappingURL=accountproxy.f7a625ed889d6679032a.js.map