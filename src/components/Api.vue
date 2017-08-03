<script>
  import Common from './common/common.js';

  const apiConf = {
    fetch: false,
    api: {
      host: 'http://115.28.110.211:3001/p',
      methods: [{
        name: 'queryDisplay',
        method: 'GET',
        path: '/me/display',
        traditional: true,
      },
        {
          name: 'logout',
          method: 'LINK',
          path: '/logout',
          traditional: true,
        },
        {
          name: 'changeLang',
          method: 'POST',
          path: '/lang/:lang  ',
          traditional: true,
        },
        {
          name: 'uploadImg',
          method: 'LINK',
          path: '/util/uploadImg/:space',
          traditional: true,
        },
        {
          name: 'deleteImg',
          method: 'LINK',
          path: '/util/images/:space/delete',
          traditional: true,
        }],
    },
    authApi: {
      host: '/mobile',
      methods: [{
        name: 'loginInit',
        method: 'POST',
        path: '/auth/login/init',
        traditional: true,
      },
        {
          name: 'login',
          method: 'POST',
          path: '/auth/login',
          traditional: true,
        },
        {
          name: 'changeLang',
          method: 'POST',
          path: '/lang/:lang  ',
          traditional: true,
        },
        {
          name: 'useableOrgs',
          method: 'GET',
          path: '/auth/selectOrgs',
          traditional: true,
        },
        {
          name: 'selectOrg',
          method: 'GET',
          path: '/auth/selectOrg/:orgID',
          traditional: true,
        },
        {
          name: 'jump',
          method: 'LINK',
          path: '/auth/authorization',
          traditional: true,
        }],
    },
    testApi: {
      host: '192.168.10.74:8080/eWallet/zhzwpt',
      methods: [{
        name: 'denglu',
        method: 'GET',
        path: '/login?username=zhzwuser&pass=zhzw123456',
        traditional: true,
      }],
    },
    shareApi: {
      host: 'http://121.42.169.26:5001/api',
//      host: 'http://localhost:5001/api',

      methods: [{
        name: 'dataTypes',
        method: 'GET',
        path: '/ShareDataTypes',
        traditional: true,
      },
        {
          name: 'createDataType',
          method: 'POST',
          path: '/sharedatatypes',
          traditional: true,
        },
        {
          name: 'updateDataType',
          method: 'POST',
          path: '/sharedatatype/:_id',
          traditional: true,
        },
        {
          name: 'shareDatas',
          method: 'GET',
          path: '/sharedatatype/:_id/datas',
          traditional: true,
        },
        {
          name: 'shareDataType',
          method: 'GET',
          path: '/sharedatatype/:_id',
          traditional: true,
        },
        {
          name: 'createshareData',
          method: 'POST',
          path: '/sharedatatype/:id/datas',
          traditional: true,
        },
        {
          name: 'updateShareData',
          method: 'POST',
          path: '/sharedata/:_id',
          traditional: true,
        },],
    },
    portalApi: {
      host: (location.origin !== "http://gportal.thewallet.com.cn")
        ? "http://121.42.169.26:8080/eWallet"
        : location.origin, //公务员服务器地址
      methods: [{
        name: 'userInfo',
        method: 'GET',
        path: '/zhzwpt/userinfo',
        traditional: true,
      }, {
        name: 'isLogin',
        method: 'GET',
        path: '/zhzwpt/isLogin',
        traditional: true,
      }
      ]
    },
    companyApi: {
      host: (location.origin !== "http://portal.thewallet.com.cn")
        ? "http://120.27.5.58:8080/eWallet"
        : location.origin,
      methods: [{
        name: 'userInfo',
        method: 'GET',
        path: '/zhzwpt/userinfo',
        traditional: true,
      }, {
        name: 'isLogin',
        method: 'GET',
        path: '/zhzwpt/isLogin',
        traditional: true,
      }, {
        name: 'getCode',
        method: 'GET',
        path: '/general/register/phone/code',
        traditional: true,
      }, {
        name: 'phoneRegister',
        method: 'POST',
        path: '/auth/register/phone',
        traditional: true,
      }, {
        name: 'nameAndPass',
        method: 'POST',
        path: '/user/nameAndPass',
        traditional: true,
      }, {
        name: 'user',
        method: 'GET',
        path: '/user',
        traditional: true,
      }, {
        name: 'authentication',
        method: 'GET',
        path: '/user/authentication',
        traditional: true,
      }, {
        name: 'Postauthentication',
        method: 'POST',
        path: '/user/authentications',
        traditional: true,
      }, {
        name: 'PostUsers',
        method: 'POST',
        path: '/users',
        traditional: true,
      },


      ]
    },
    zwmApi: {
//      host: 'http://121.42.169.26:3001/zwmapi',
      host: 'http://115.28.128.210:3001/zwmapi',
//            host: 'http://localhost:3001/zwmapi',

      methods: [{
        name: 'projFormViews',
        method: 'GET',
        path: '/projFormViews',
        traditional: true,
      },
        {
          name: 'projFormEdits',
          method: 'GET',
          path: '/projFormEdits',
          traditional: true,
        }
        ,
        {
          name: 'projGuides',
          method: 'GET',
          path: '/projGuides',
          traditional: true,
        },
        {
          name: 'projGuide',
          method: 'GET',
          path: '/projGuide/:id',
          traditional: true,
        },
        {
          name: 'projShareFormRe',
          method: 'GET',
          path: '/projShareFormRe',
          traditional: true,
        },
        {
          name: 'projFormEditLink',
          method: 'LINK',
          path: '/projFormEdit/:processCoding',
          traditional: true,
        },
        {
          name: 'projFormsQuery',
          method: 'GET',
          path: '/projForms',
          traditional: true,
        },
        {
          name: 'projUserListByRole',
          method: 'LINK',
          path: '/projUserListByRole',
          traditional: true,
        },
        {
          name: 'projShareViewByTaskDefKey',
          method: 'GET',
          path: '/projFormView/byTaskDefKey',
          traditional: true,
        },

        {
          name: 'widgetManager',
          method: 'GET',
          path: '/widgets',
          traditional: true,
        },
        {
          name: 'widget',
          method: 'GET',
          path: '/widget/:clientID',
          traditional: true,
        },
        {
          name: 'mattersCategories',
          method: 'GET',
          path: '/mattersCategories',
          traditional: true,
        },
        {
          name: 'createMattersCategories',
          method: 'POST',
          path: '/mattersCategories',
          traditional: true,
        },
        {
          name: 'mattersCategoryUpdate',
          method: 'POST',
          path: '/mattersCategory/:id',
          traditional: true,
        },
        {
          name: 'mattersCategoryChildren',
          method: 'GET',
          path: '/mattersCategory/:parentCode/children',
          traditional: true,
        },
        {
          name: 'deleteMattersCategory',
          method: 'DELETE',
          path: '/mattersCategory/:id',
          traditional: true,
        },
        {
          name: 'mattersCategoryMatters',
          method: 'GET',
          path: '/mattersCategory/:id/matters',
          traditional: true,
        },
        {
          name: 'mattersCategoryMattersUnSelect',
          method: 'GET',
          path: '/mattersCategory/:id/matters/unSelect',
          traditional: true,
        },
        {
          name: 'mattersCategoryMatterLink',
          method: 'GET',
          path: '/mattersCategory/:id/matter/:matterID/link',
          traditional: true,
        },
        {
          name: 'mattersCategoryMatterUnLink',
          method: 'GET',
          path: '/mattersCategory/:id/matter/:matterID/unlink',
          traditional: true,
        },
        {
          name: 'mattersCategoryMatterUpdateLink',
          method: 'GET',
          path: '/mattersCategory/:id/matter/:matterID/updatelink',
          traditional: true,
        },
        {
          name: 'configMatters',
          method: 'GET',
          path: '/config/matters',
          traditional: true,
        },
        {
          name: 'matterUpdate',
          method: 'POST',
          path: '/matter/:id',
          traditional: true,
        },
        {
          name: 'publishMattersData',
          method: 'POST',
          path: '/publishMatterCategory',
          traditional: true,
        }]
    },
    serverApi: {
      host: 'http://121.42.169.26:3001/serverApi',
//      host: 'http://localhost:3001/serverApi',
      methods: [{
        name: 'myApps',
        method: 'GET',
        path: '/me/apps',
        traditional: true,
      },
        {
          name: 'myApp',
          method: 'GET',
          path: '/me/app/:appkey',
          traditional: true,
        },
        {
          name: 'editMyApp',
          method: 'POST',
          path: '/me/app/:appkey',
          traditional: true,
        }]
    },
    accountProxyApi: {
//      host: 'http://localhost:3001/accountproxy',
      host: 'http://121.42.169.26:3001/accountproxy',
      methods: [{
        name: 'display',
        method: 'GET',
        path: '/:appkey/display',
        traditional: true,
      },
        {
          name: 'setAccount',
          method: 'POST',
          path: '/:appkey/account',
          traditional: true,
        },
        {
          name: 'getJumpData',
          method: 'POST',
          path: '/:appkey/jumpdata',
          traditional: true,
        }]
    }

  };

  const _Api = function (key, conf) {
    let _self = this;
    this.key = key;
    this.conf = conf;
    this.getParaTime = function (first) {
      if (first)
        return "_t=" + new Date().getTime();
      else
        return "&_t=" + new Date().getTime();
    };
    this.registerFun = function (_method) {
      return function (params, el) {

        if (params && params.localName == 'form') {
          params = $(params).serialize();
          let _params = {};
          params = params.split('&');
          for (let i = 0; i < params.length; i++) {
            let _param = params[i].split('=');
            if (_param && _param.length == 2) {
              _params[_param[0]] = _param[1];
            }
          }
          params = _params;
        } else if (typeof params == 'string' && params.match('=')) {
          //console.log(params);
          let _params = {};
          params = params.split('?');
          params = params.length == 2 ? params[1] : params[0];
          params = params.split('&');
          for (let i = 0; i < params.length; i++) {
            let _param = params[i].split('=');
            if (_param && _param.length == 2) {
//              console.log(_param[1]);
              _params[_param[0]] = _param[1];
            }
          }
          params = _params;
//          console.log(params);
        }
        if (_method.method == 'LINK' || _method.method == 'JUMP') {
          params = params || {};
          if (el && $(el)) {
            let data = $(el).data()['linkParams'];
            if (data) {
              try {
                data = JSON.parse(data);
                for (let i in data) {
                  if (Object.prototype.hasOwnProperty.call(data, i)) {
                    params[i] = data[i];
                  }
                }
              } catch (e) {

              }
            }
          }
          let url = _self.conf.host + _method.path;
          let _params = [];
          for (let i in params) {
            if (Object.prototype.hasOwnProperty.call(params, i)) {
              _params.push(i + '=' + encodeURIComponent($.trim(params[i])));
              url = url.replace(':' + i, params[i]);
            }
          }
          if (_params.length > 0) {
            url += '?' + _params.join('&');
          }
          if (_method.method == 'LINK') {
            return url;
          } else {
            location.href = url;
          }
        } else {
          let jQuery = $;
          let _def = jQuery.Deferred();
          let url = _self.conf.host + _method.path;
          let data = {};
          let _params = [];
//          console.log(params);
          if (params) {
            for (let i in params) {
              if (Object.prototype.hasOwnProperty.call(params, i)) {
                data[i] = params[i];
                _params.push(i + '=' + encodeURIComponent(params[i]));
                url = url.replace(':' + i, params[i]);
              }
            }
          }
//          console.log(url);
          let ajaxParam = {
            type: _method.method,
            url: url,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
          };
          if (_method.method == 'GET') {
            if (_params.length > 0) {
              ajaxParam.url += '?' + _params.join('&');
            }
          } else {
            console.log(data);
            ajaxParam.processData = data;
            ajaxParam.data = data;
          }
          //
          if (ajaxParam.url.indexOf("?") >= 0) ajaxParam.url += this.getParaTime();
          else ajaxParam.url += "?" + this.getParaTime(true);
          //
          if (_method.traditional) {
            ajaxParam.xhrFields = {
              withCredentials: true,
            };
          }

          //加入进度条
          NProgress && NProgress.start();
          $('.md-refresh').addClass('spin');

          $.ajax(ajaxParam).done(function (result) {
            NProgress && NProgress.done();
            $('.md-refresh').removeClass('spin');

            if (result.return_code == 0) {
              _def.resolve(result.data, result);
            } else {
              if (result.return_code == -100039 && _method.traditional) {
                // 还需要清除缓存
                location.href = result.data.loginUrl;
              } else {
                let e = new Error(result.return_message);
                e.errCode = result.return_code;
                //提示信息
                Common.showMsgError(result.return_message);
                //
                _def.reject(e, result);

              }
            }
          }).fail(function (e) {
            NProgress && NProgress.done()
            $('.md-refresh').removeClass('spin');
            //提示信息
            Common.showMsgError("请求失败！");
            _def.reject(e);

          });
          return _def;
        }
      };
    };
    for (let i = 0; i < conf.methods.length; i++) {
      let method = conf.methods[i];
      if (method && method.name) {
        _self[method.name] = this.registerFun(method);
      }
    }
  };

  const api = {};
  for (let j in apiConf) {
    if (Object.prototype.hasOwnProperty.call(apiConf, j)) {
      let conf = apiConf[j];
      if (conf && conf.host) {
        api[j] = new _Api(j, conf);
      }
    }
  }
  ;
  api.socketApi = {
    host: 'http://115.28.128.210:3001/'
//    host: 'http://localhost:3001/'
  };
  export default api;

</script>
