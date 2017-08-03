/**
 * Created by qiaobin on 2016/9/1.
 */
jQuery.extend({
  ajaxFileUpload: function (option) {
    option = jQuery.extend({}, jQuery.ajaxSettings, option);
    var submit_url = option.url;//please modify submit_url accordingly
    var deferred = null;
    var id = option.fileElementId;
    var form = jQuery.createUploadForm(id, option.fileElementId);
    var formId = 'jUploadForm' + id;
    var fileId = 'jUploadFile' + id;
    var $form = $('#' + formId);
    var file_input = $form.find('#' + fileId);
    var ie_timeout = null;
    var temp_iframe = null;
    if ("FormData" in window) {
      var formData_object = new FormData();//create empty FormData object

      //serialize our form (which excludes file inputs)
      $.each($form.serializeArray(), function (i, item) {
        //add them one by one to our FormData
        formData_object.append(item.name, item.value);
      });
      //and then add files
      $form.find('input[type=file]').each(function () {
        var field_name = $(this).attr('name') || 'avatar';
        var files = $(this)[0].files;
        if (files && files.length > 0) {
          formData_object.append(field_name, files[0]);
        }
      });

      deferred = $.ajax({
        url: submit_url,
        type: 'POST',
        processData: false,//important
        contentType: false,//important
        dataType: 'json',//server response type
        data: formData_object,
        xhrFields: {
          withCredentials: true
        },
      })
    }
    else {
      deferred = new $.Deferred

      var temporary_iframe_id = 'temporary-iframe-' + (new Date()).getTime() + '-' + (parseInt(Math.random() * 1000));
      temp_iframe =
        $('<iframe id="' + temporary_iframe_id + '" name="' + temporary_iframe_id + '" \
									frameborder="0" width="0" height="0" src="about:blank"\
									style="position:absolute; z-index:-1; visibility: hidden;"></iframe>')
          .insertAfter($form);

      temp_iframe.data('deferrer', deferred);
      //we save the deferred object to the iframe and in our server side response  服务器端需要返回deferred
      //we use "temporary-iframe-id" to access iframe and its deferred object

      $form.attr({
        action: submit_url,
        method: 'POST',
        enctype: 'multipart/form-data',
        target: temporary_iframe_id //important
      });
      if ($form.encoding) {
        $form.encoding = 'multipart/form-data';
      } else {
        $form.enctype = 'multipart/form-data';
      }
      $form.get(0).submit();

      //if we don't receive any response after 30 seconds, declare it as failed!
      ie_timeout = setTimeout(function () {
        ie_timeout = null;
        temp_iframe.attr('src', 'about:blank').remove();
        deferred.reject({'status': 'fail', 'message': 'Timeout!'});
      }, 30000);
    }


    //deferred callbacks, triggered by both ajax and iframe solution
    deferred
      .done(function (result) {//success
        //var url = result.data.fullPath;
        //$(avatar).get(0).src = url;
        //
        if (option.success)
          option.success(result);

        setTimeout(function () {
          try {
            $(form).remove();
            $(temp_iframe).remove();
          } catch (e) {
            jQuery.handleError(s, xml, null, e);
          }

        }, 100)
      })
      .fail(function (result) {//failure
        alert("There was an error");
      })
      .always(function () {//called on both success and failure
        if (ie_timeout) clearTimeout(ie_timeout)
        ie_timeout = null;
      });

    return deferred.promise();
  },
  createUploadForm: function (id, fileElementId) {
    // create form
    var formId = 'jUploadForm' + id;
    var fileId = 'jUploadFile' + id;
    var form = $('<form  action="" method="POST" name="' + formId
      + '" id="' + formId
      + '" enctype="multipart/form-data"></form>');
    var oldElement = $('#' + fileElementId);
    var newElement = $(oldElement).clone();
    $(oldElement).attr('id', fileId);
    //$(oldElement).attr('name', fileId);
    $(oldElement).before(newElement);
    $(oldElement).appendTo(form);
    // set attributes
    $(form).css('position', 'absolute');
    $(form).css('top', '-1200px');
    $(form).css('left', '-1200px');
    $(form).appendTo('body');
    return form;
  },

});
