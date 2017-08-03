<script>
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
  };

  const _Api = function(key, conf) {
    let _self = this;
    this.key = key;
    this.conf = conf;
    this.registerFun = function(_method) {
      return function(params, el) {
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
          console.log(params);
          let _params = {};
          params = params.split('?');
          params = params.length == 2 ? params[1] : params[0];
          params = params.split('&');
          for (let i = 0; i < params.length; i++) {
            let _param = params[i].split('=');
            if (_param && _param.length == 2) {
              console.log(_param[1]);
              _params[_param[0]] = _param[1];
            }
          }
          params = _params;
          console.log(params);
        }
        if (_method.method == 'LINK' || _method.method == 'JUMP') {
          params = params || {};
          if (el && $(el)) {
            let data = $(el).data()['linkParams'];
            if (data) {
              try {
                data = JSON.parse(data);
                for (let i in data) {
                  if(Object.prototype.hasOwnProperty.call(data, i)) {
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
            if(Object.prototype.hasOwnProperty.call(params, i)) {
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
          console.log(params);
          if (params) {
            for (let i in params) {
              if(Object.prototype.hasOwnProperty.call(params, i)) {
                data[i] = params[i];
                _params.push(i + '=' + encodeURIComponent(params[i]));
                url = url.replace(':' + i, params[i]);
              }
            }
          }
          console.log(url);
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
          if (_method.traditional) {
            ajaxParam. xhrFields = {
              withCredentials: true,
            };
          }
          $.ajax(ajaxParam).done(function(result) {
            if (result.return_code == 0) {
              _def.resolve(result.data, result);
            } else {
//                console.log(result);
              if (result.return_code == -100039 && _method.traditional) {
                // 还需要清除缓存
                location.href = result.data.loginUrl;
              } else {
                let e = new Error(result.return_message);
                e.errCode = result.return_code;
                _def.reject(e, result);
              }
            }
          }).fail(function(e) {
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
      if(Object.prototype.hasOwnProperty.call(apiConf, j)) {
        let conf = apiConf[j];
        if (conf && conf.host) {
          api[j] = new _Api(j, conf);
        }
      }
  };
  export default api;

</script>
