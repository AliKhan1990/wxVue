const notify = require('msg-notify');


const common = {
  showMsgSuccess(msg){
    notify(msg, 'success')
  },
  showMsgError(msg){
    notify(msg, 'error')
  },
  showMsgInfo(msg){
    notify(msg, 'info')
  },
  showMsgWarning(msg){
    notify(msg, 'warning')
  },
  setLabelFloat(){
    if (!$) return;
    $(".form-control").each(function () {
      const $this = $(this);
      const txt = $("input", $this).val();
      if (txt !== "") {
        $this.removeClass("empty");
      }
    });
  },
  getParaTime:function(first){
    if (first)
      return "_t=" + new Date().getTime();
    else
      return "&_t=" + new Date().getTime();
  },
  checkImgExtension(fileName){
    let ext = fileName.substring(fileName.lastIndexOf('.') + 1);
    if (ext.toUpperCase() === "PNG" || ext.toUpperCase() === "JPG" ||
      ext.toUpperCase() === "JPEG") {
      return true;
    }
    return false;
  },
  isImgSizeTooLarge(size){
    return size > 1024 * 1024 * 4;
  },
  getHost(){
    let host = (location.origin !== "http://portal.thewallet.com.cn")
      ? "http://120.27.5.58:8080/eWallet"
      :location.origin;
    return host;
  }
}


module.exports = common;
