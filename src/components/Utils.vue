<script>
  import Vue from 'vue';

  Date.prototype.format =function(format)
  {
    var o = {
      "M+" : this.getMonth()+1, //month
      "d+" : this.getDate(), //day
      "h+" : this.getHours(), //hour
      "m+" : this.getMinutes(), //minute
      "s+" : this.getSeconds(), //second
      "q+" : Math.floor((this.getMonth()+3)/3), //quarter
      "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
      (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
      format = format.replace(RegExp.$1,
        RegExp.$1.length==1? o[k] :
          ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
  };

  Vue.directive('dateformat', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      // 聚焦元素
      var text = $(el).text();

      try{
        text = parseInt(text);
        console.log(text);
        if( !isNaN(text)){
          text = new Date(text).format('yyyy-MM-dd');
          $(el).text(text);
        }

      }
      catch(e){

      }



    }
  });


  Vue.directive('datetimeformat', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      // 聚焦元素
      var text = $(el).text();

      try{
        text = parseInt(text);
        console.log(text);
        if( !isNaN(text)){
          text = new Date(text).format('yyyy-MM-dd hh:mm:ss');
          $(el).text(text);
        }

      }
      catch(e){

      }



    }
  });
  Vue.directive('json', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      // 聚焦元素
      var text = $(el).text();

      try{
        text = JSON.parse(text);
        text = JSON.stringify(text,4,4);
        console.log(text);

        $(el).text(text);
      }
      catch(e){

      }


    }
  });

  Vue.directive('tableoptionup', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
//      console.log(el);

    },
    bind: function () {
      console.log(arguments)

    }
  })

  Vue.directive('op', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        el = $(el);
       var p = $(el.parent());
       console.log(p[0].clientWidth);
       $(el).css('width', p[0].clientWidth + 'px');
    }
  });



  Vue.directive('popover-json', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      var el = $(el);
      var content = el.data('json');
      if(typeof content == 'object') {
        content = JSON.stringify(content , 4,4);
      } else {
        content = JSON.stringify(JSON.parse(content), 4,4);
      }
//      content = JSON.stringify(JSON.parse(content), 4,4);
      el.webuiPopover({
        trigger:'hover',
        content: function() {
            return  '<pre>' + content + '</pre>'
          },
        width: 800,
        height: 400,
        closeable: true
      });
    }
  });


  Vue.directive('img-qiniu-logo', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      var el = $(el);
      var url = el.data('url');

      if(url) {
        el.attr('src', Vue._GLOBAL.qiniu.logo + url);
      } else  {

      }
    },
    update: function (el) {

      var el = $(el);
      var url = el.data('url');
      if(url) {
        el.attr('src', Vue._GLOBAL.qiniu.logo + url);
      } else  {

      }
    }
  });
  Vue.directive('nodataPanel', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
       $(el).addClass('nodata-panel').text('暂无数据！');
    },
    update: function (el) {

    }
  });
  Vue.directive('loaddingPanel', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      $(el).addClass('nodata-panel').text('加载中！');
    },
    update: function (el) {

    }
  });
  Vue.directive('loaddingModel', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
      var height = $(el).parent().height();
      $(el).css('line-height', height + 'px')

      $('<div></div>').addClass('loader-index')
        .addClass('loadding-model')
        .append('<div></div>')
        .append('<div></div>')
        .append('<div></div>')
        .append('<div></div>')
        .append('<div></div>')
        .append('<div></div>')
        .appendTo($(el));
      var text = $(el).data().text;
      if(text) {
          $('<p></p>').addClass('loadding-text').text(text).appendTo($(el));
      }
    },
    update: function (el) {

    }
  });
</script>
