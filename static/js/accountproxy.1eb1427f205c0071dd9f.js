webpackJsonp([1],{38:function(t,e,a){a(55);var o=a(1)(a(92),a(50),null,null);t.exports=o.exports},39:function(t,e,a){var o=a(1)(a(98),null,null,null);t.exports=o.exports},40:function(t,e){},41:function(t,e,a){"use strict";var o=a(8),n=a(86),i=a(42),r=a.n(i);o.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"home",component:r.a}]})},42:function(t,e,a){a(52);var o=a(1)(a(93),a(47),null,null);t.exports=o.exports},43:function(t,e,a){var o=a(1)(a(94),null,null,null);t.exports=o.exports},44:function(t,e,a){var o=a(1)(a(95),null,null,null);t.exports=o.exports},45:function(t,e,a){a(53);var o=a(1)(a(96),a(48),"data-v-bcb2bbfa",null);t.exports=o.exports},46:function(t,e,a){a(54);var o=a(1)(a(97),a(49),"data-v-d297e1a2",null);t.exports=o.exports},47:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-accountproxy page vertical-align text-xs-center",attrs:{"data-animsition-in":"fade-in","data-animsition-out":"fade-out"}},[a("div",{staticClass:"page-content vertical-align-middle"},[a("div",{staticClass:"panel panel-accountproxy"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"alert dark alert-info alert-avatar alert-dismissible",staticStyle:{"text-align":"left"},attrs:{role:"alert"}},[t._m(0),t._v(" "),a("span",{staticClass:"avatar"},[a("img",{directives:[{name:"img-qiniu-logo",rawName:"v-img-qiniu-logo"}],attrs:{"data-url":t.display.avatar,src:"http://static.thewallet.com.cn/remark/global/portraits/5.jpg"}})]),t._v(" "),a("h4",[t._v(t._s(t.fullname))]),t._v(" "),a("p",[t._v("\n                "+t._s(t.comment)+"\n              ")])]),t._v(" "),a("hr")])]),t._v(" "),a("div",{staticClass:"brand"},[a("img",{directives:[{name:"img-qiniu-logo",rawName:"v-img-qiniu-logo"}],staticClass:"brand-img",attrs:{"data-url":t.app.iconUrl,src:"http://static.thewallet.com.cn/remark/center/assets//images/logo-blue.png",alt:"..."}}),t._v(" "),a("h2",{staticClass:"brand-text font-size-18"},[t._v(t._s(t.app.appName))])]),t._v(" "),t.loadding?a("div",{staticClass:"loader-index",staticStyle:{margin:"80px auto 20px"}},[a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div")]):t._e(),t._v(" "),t.loadding?a("p",[t._v("正在使用\n          "),a("span",{staticClass:"jump-account"},[t._v(t._s(t.account))]),t._v("登陆系统，请稍后...")]):t._e(),t._v(" "),t.showChangeBtn&&t.loadding?a("a",{staticClass:"btn-line pull-right",attrs:{href:"javascript:void(0)"},on:{click:t.changeAccount}},[t._v(" 切换用户 ")]):t._e(),t._v(" "),t.loadding?t._e():a("form",{attrs:{method:"post",action:"#",autocomplete:"off"}},[a("div",{staticClass:"form-group form-material floating",attrs:{"data-plugin":"formMaterial"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form-control",class:t.account?"":"empty",attrs:{type:"input",name:"username"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),t._v(" "),a("label",{staticClass:"floating-label"},[t._v("用户名")])]),t._v(" "),a("div",{staticClass:"form-group form-material floating",attrs:{"data-plugin":"formMaterial"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:t.password?"":"empty",attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{staticClass:"floating-label"},[t._v("密码")])]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-block btn-lg m-t-40",attrs:{type:"button"},on:{click:t.jump}},[t._v("跳转")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}]}},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-menubar",staticStyle:{display:"none"}},[a("div",{staticClass:"site-menubar-header"}),t._v(" "),a("div",{staticClass:"site-menubar-body scrollable scrollable-inverse scrollable-vertical is-enabled",staticStyle:{position:"relative"}},[a("div",{staticClass:"scrollable-container",staticStyle:{height:"147px",width:"275px"}},[a("div",{staticClass:"scrollable-content",staticStyle:{width:"260px"}},[a("ul",{staticClass:"site-menu",attrs:{"data-plugin":"menu"}})])])])])}]}},49:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("nav",{staticClass:"navbar navbar-default",staticStyle:{display:"none"},attrs:{role:"navigation"}})},staticRenderFns:[]}},50:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NoNav"),t._v(" "),a("NoMenu"),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},52:function(t,e){},53:function(t,e){},54:function(t,e){},55:function(t,e){},92:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(8),n=a(44),i=a.n(n),r=a(46),s=a.n(r),l=a(45),p=a.n(l);console.log("setGlobal"),o.a.prototype.GLOBAL=i.a,o.a._GLOBAL=i.a,e.default={name:"AccountProxyApp",data:function(){return{}},created:function(){},components:{NoNav:s.a,NoMenu:p.a}}},93:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(a(8),a(43)),n=a.n(o);e.default={name:"AccountProxy",components:{},computed:{fullname:function(){return this.display.lastName+this.display.firstName},appkey:function(){return"300208"},comment:function(){return"即将跳转到应用"+(this.app.appName||"")+"，请填写应用的用户名和密码，用户中心将授权跳转。"}},beforeMount:function(){},beforeUpdate:function(){},mounted:function(){this.load()},data:function(){return{account:"account",password:"",loadding:!1,showChangeBtn:!0,display:{},app:{},timer:null}},methods:{load:function(){var t=this;n.a.accountProxyApi.display({appkey:this.appkey}).done(function(e){t.display=e.auth,t.app=e.appInfo,console.log(e),e.hasAccount&&(t.loadding=!0,t.showChangeBtn=!0,t.timer=setTimeout(function(){t.jump.apply(t)},2e3))}).fail(function(t){console.error(t),alertify.error(t.message)})},changeAccount:function(){this.loadding=!1,clearTimeout(this.timer)},jump:function(){this.loadding=!0;var t=this;n.a.accountProxyApi.setAccount({account:this.account,password:this.password,appkey:this.appkey}).done(function(e){n.a.accountProxyApi.getJumpData({appkey:t.appkey}).done(function(t){var e=$("<form></form>");for(var a in t){var o=$("<input />");o.attr("type","hidden"),o.val(t[a]),o.attr("name",a),e.append(o)}e.attr("action",t.url),e.attr("method","post"),e.css("width","0"),e.css("height","0"),e.appendTo($("body")),e.submit()}).fail(function(t){console.error(t),alertify.error(t.message)})}).fail(function(t){console.error(t),alertify.error(t.message)})}},props:[]}},94:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={fetch:!1,api:{host:"http://115.28.110.211:3001/p",methods:[{name:"queryDisplay",method:"GET",path:"/me/display",traditional:!0},{name:"logout",method:"LINK",path:"/logout",traditional:!0},{name:"changeLang",method:"POST",path:"/lang/:lang  ",traditional:!0}]},authApi:{host:"/mobile",methods:[{name:"loginInit",method:"POST",path:"/auth/login/init",traditional:!0},{name:"login",method:"POST",path:"/auth/login",traditional:!0},{name:"changeLang",method:"POST",path:"/lang/:lang  ",traditional:!0},{name:"useableOrgs",method:"GET",path:"/auth/selectOrgs",traditional:!0},{name:"selectOrg",method:"GET",path:"/auth/selectOrg/:orgID",traditional:!0},{name:"jump",method:"LINK",path:"/auth/authorization",traditional:!0}]},testApi:{host:"192.168.10.74:8080/eWallet/zhzwpt",methods:[{name:"denglu",method:"GET",path:"/login?username=zhzwuser&pass=zhzw123456",traditional:!0}]},shareApi:{host:"http://121.42.169.26:5001/api",methods:[{name:"dataTypes",method:"GET",path:"/ShareDataTypes",traditional:!0},{name:"createDataType",method:"POST",path:"/sharedatatypes",traditional:!0},{name:"updateDataType",method:"POST",path:"/sharedatatype/:_id",traditional:!0},{name:"shareDatas",method:"GET",path:"/sharedatatype/:_id/datas",traditional:!0},{name:"shareDataType",method:"GET",path:"/sharedatatype/:_id",traditional:!0},{name:"createshareData",method:"POST",path:"/sharedatatype/:id/datas",traditional:!0},{name:"updateShareData",method:"POST",path:"/sharedata/:_id",traditional:!0}]},portalApi:{host:"http://gportal.thewallet.com.cn"!==location.origin?"http://121.42.169.26:8080/eWallet":location.origin,methods:[{name:"userInfo",method:"GET",path:"/zhzwpt/userinfo",traditional:!0},{name:"isLogin",method:"GET",path:"/zhzwpt/isLogin",traditional:!0}]},companyApi:{host:"http://portal.thewallet.com.cn"!==location.origin?"http://120.27.5.58:8080/eWallet":location.origin,methods:[{name:"userInfo",method:"GET",path:"/zhzwpt/userinfo",traditional:!0},{name:"isLogin",method:"GET",path:"/zhzwpt/isLogin",traditional:!0},{name:"getCode",method:"GET",path:"/general/register/phone/code",traditional:!0},{name:"phoneRegister",method:"POST",path:"/auth/register/phone",traditional:!0},{name:"nameAndPass",method:"POST",path:"/user/nameAndPass",traditional:!0}]},zwmApi:{host:"http://115.28.128.210:3001/zwmapi",methods:[{name:"projFormViews",method:"GET",path:"/projFormViews",traditional:!0},{name:"projFormEdits",method:"GET",path:"/projFormEdits",traditional:!0},{name:"projGuides",method:"GET",path:"/projGuides",traditional:!0},{name:"projGuide",method:"GET",path:"/projGuide/:id",traditional:!0},{name:"projShareFormRe",method:"GET",path:"/projShareFormRe",traditional:!0},{name:"projFormEditLink",method:"LINK",path:"/projFormEdit/:processCoding",traditional:!0},{name:"projFormsQuery",method:"GET",path:"/projForms",traditional:!0},{name:"projUserListByRole",method:"LINK",path:"/projUserListByRole",traditional:!0},{name:"projShareViewByTaskDefKey",method:"GET",path:"/projFormView/byTaskDefKey",traditional:!0},{name:"widgetManager",method:"GET",path:"/widgets",traditional:!0},{name:"widget",method:"GET",path:"/widget/:clientID",traditional:!0}]},serverApi:{host:"http://121.42.169.26:3001/serverApi",methods:[{name:"myApps",method:"GET",path:"/me/apps",traditional:!0},{name:"myApp",method:"GET",path:"/me/app/:appkey",traditional:!0},{name:"editMyApp",method:"POST",path:"/me/app/:appkey",traditional:!0}]},accountProxyApi:{host:"http://localhost:3001/accountproxy",methods:[{name:"display",method:"GET",path:"/:appkey/display",traditional:!0},{name:"setAccount",method:"POST",path:"/:appkey/account",traditional:!0},{name:"getJumpData",method:"POST",path:"/:appkey/jumpdata",traditional:!0}]}},n=function(t,e){var a=this;this.key=t,this.conf=e,this.getParaTime=function(t){return t?"_t="+(new Date).getTime():"&_t="+(new Date).getTime()},this.registerFun=function(t){return function(e,o){if(e&&"form"==e.localName){e=$(e).serialize();var n={};e=e.split("&");for(var i=0;i<e.length;i++){var r=e[i].split("=");r&&2==r.length&&(n[r[0]]=r[1])}e=n}else if("string"==typeof e&&e.match("=")){var s={};e=e.split("?"),e=2==e.length?e[1]:e[0],e=e.split("&");for(var l=0;l<e.length;l++){var p=e[l].split("=");p&&2==p.length&&(s[p[0]]=p[1])}e=s}if("LINK"!=t.method&&"JUMP"!=t.method){var d=$,c=d.Deferred(),u=a.conf.host+t.path,h={},m=[];if(e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(h[f]=e[f],m.push(f+"="+encodeURIComponent(e[f])),u=u.replace(":"+f,e[f]));var v={type:t.method,url:u,dataType:"json",contentType:"application/x-www-form-urlencoded"};return"GET"==t.method?m.length>0&&(v.url+="?"+m.join("&")):(console.log(h),v.processData=h,v.data=h),v.url.indexOf("?")>=0?v.url+=this.getParaTime():v.url+="?"+this.getParaTime(!0),t.traditional&&(v.xhrFields={withCredentials:!0}),NProgress&&NProgress.start(),$(".md-refresh").addClass("spin"),$.ajax(v).done(function(e){if(NProgress&&NProgress.done(),$(".md-refresh").removeClass("spin"),0==e.return_code)c.resolve(e.data,e);else if(-100039==e.return_code&&t.traditional)location.href=e.data.loginUrl;else{var a=new Error(e.return_message);a.errCode=e.return_code,c.reject(a,e)}}).fail(function(t){NProgress&&NProgress.done(),$(".md-refresh").removeClass("spin"),c.reject(t)}),c}if(e=e||{},o&&$(o)){var g=$(o).data().linkParams;if(g)try{g=JSON.parse(g);for(var y in g)Object.prototype.hasOwnProperty.call(g,y)&&(e[y]=g[y])}catch(t){}}var _=a.conf.host+t.path,b=[];for(var w in e)Object.prototype.hasOwnProperty.call(e,w)&&(b.push(w+"="+encodeURIComponent($.trim(e[w]))),_=_.replace(":"+w,e[w]));if(b.length>0&&(_+="?"+b.join("&")),"LINK"==t.method)return _;location.href=_}};for(var o=0;o<e.methods.length;o++){var n=e.methods[o];n&&n.name&&(a[n.name]=this.registerFun(n))}},i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){var s=o[r];s&&s.host&&(i[r]=new n(r,s))}i.socketApi={host:"http://115.28.128.210:3001/"},e.default=i},95:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={static:"http://7xpmqq.com1.z0.glb.clouddn.com/",logo:"http://7xlcsz.com1.z0.glb.clouddn.com/"};console.log("regist global"),e.default={staticHost:"http://static.thewallet.com.cn/",qiniu:o}},96:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nomenu",data:function(){return{}}}},97:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nonav",data:function(){return{}}}},98:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(91),n=a.n(o),i=a(88),r=a.n(i),s=a(8);Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in e)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return t},s.a.directive("dateformat",{inserted:function(t){var e=$(t).text();try{e=parseInt(e),console.log(e),isNaN(e)||(e=new Date(e).format("yyyy-MM-dd"),$(t).text(e))}catch(t){}}}),s.a.directive("datetimeformat",{inserted:function(t){var e=$(t).text();try{e=parseInt(e),console.log(e),isNaN(e)||(e=new Date(e).format("yyyy-MM-dd hh:mm:ss"),$(t).text(e))}catch(t){}}}),s.a.directive("json",{inserted:function(t){var e=$(t).text();try{e=JSON.parse(e),e=r()(e,4,4),console.log(e),$(t).text(e)}catch(t){}}}),s.a.directive("tableoptionup",{inserted:function(t){},bind:function(){console.log(arguments)}}),s.a.directive("op",{inserted:function(t){t=$(t);var e=$(t.parent());console.log(e[0].clientWidth),$(t).css("width",e[0].clientWidth+"px")}}),s.a.directive("popover-json",{inserted:function(t){var t=$(t),e=t.data("json");e="object"==(void 0===e?"undefined":n()(e))?r()(e,4,4):r()(JSON.parse(e),4,4),t.webuiPopover({trigger:"hover",content:function(){return"<pre>"+e+"</pre>"},width:800,height:400,closeable:!0})}}),s.a.directive("img-qiniu-logo",{inserted:function(t){var t=$(t),e=t.data("url");e&&t.attr("src",s.a._GLOBAL.qiniu.logo+e)},update:function(t){var t=$(t),e=t.data("url");e&&t.attr("src",s.a._GLOBAL.qiniu.logo+e)}})},99:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(8),n=a(38),i=a.n(n),r=a(41),s=a(39);a.n(s);a(40),o.a.config.productionTip=!1,new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})}},[99]);
//# sourceMappingURL=accountproxy.1eb1427f205c0071dd9f.js.map