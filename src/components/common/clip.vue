<template>
  <div ref="modal" class="modal fade modal-fade-in-scale-up" id="exampleNiftyFadeScale"
       aria-labelledby="exampleModalTitle"
       role="dialog" tabindex="-1" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h4 class="modal-title">上传图片</h4>
        </div>
        <div class="modal-body">
          <div style="font-size: 16px;">
            裁剪区域
            <label style="cursor: pointer; margin-left: 10px;" class="panel-action icon md-camera-party-mode"
                   for="inputImage"
                   title="选择图片">
              <input @change="imgChange" type="file" class="sr-only" id="inputImage" name="file"
                     accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">
            </label>
          </div>
          <div style="height: 300px;border: 1px solid gray;">
            <img id="clip_image" src="">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default btn-pure waves-effect" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-default waves-effect" @click="save">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Common from './common.js';
  import Api from '../../components/Api';
  import Cropper from 'cropperjs';

  export default {
    name: 'cropper',
    components: {},
    props: ['aspectRatio'],
    data: function () {
      return {
        imgReady: false,
      };
    },
    mounted: function () {
      this.init();
    },
    computed: {
      options: function () {
        return {
          aspectRatio: this.aspectRatio,
          preview: '#preview',
          cropBoxResizable: false,
          crop: function (e) {
          },
          ready: this.imgReady
        }
      }
    },
    methods: {
      open: function () {
        //清除数据
        $("#clip_image").attr("src", "");
        this.imgReady = false;
        //
        $(this.$refs.modal).modal('show');
      },
      imgReady: function () {
        this.imgReady = true;
      },
      init: function () {
        this.cropper = new Cropper($('#clip_image')[0], this.options)
      },
      imgChange: function (evt) {
        var URL = window.URL || window.webkitURL;
        var files = evt.target.files;
        var file;

        if (files && files.length) {
          file = files[0];

          if (/^image\/\w+$/.test(file.type)) {
            this.uploadedImageType = file.type;

            if (this.uploadedImageURL) {
              URL.revokeObjectURL(this.uploadedImageURL);
            }

            this.uploadedImageURL = URL.createObjectURL(file);
            this.cropper.destroy();
            $('#clip_image').attr('src', this.uploadedImageURL);//.cropper(this.options);
            this.init();
            $(evt.target).val('');
          } else {
            window.alert('Please choose an image file.');
          }
        }
      },
      save: function () {
        this.upload();
      },
      upload: function () {
        this.cropper.getCroppedCanvas().toBlob(function (blob) {
          var formData = new FormData();
          formData.append('croppedImage', blob);
          formData.append('key', 'TESTCROPPER');

          var url = Api.api.uploadImg({
            space: 'Logo',
            key: 'KEY'
          });
          $.ajax({
            url: url,
            method: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
              data = JSON.parse(data);
              $(this.$refs.modal).modal('hide');
              this.$emit('clipSuccess', data.data);
            }.bind(this),
            error: function (e) {
              Common.showMsgError("上传失败！")
            }.bind(this)
          });
        }.bind(this));
      },
    }
  }
</script>
<style>
  @import '../../../../node_modules/cropperjs/dist/cropper.css';

  img {
    max-width: 100%; /* This rule is very important, please do not ignore this! */
  }

  #preview {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }

  .img-container {
    height: 600px;
  }

</style>
