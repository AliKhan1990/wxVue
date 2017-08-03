<style>
.site-sidebar.slidePanel.slidePanel-left,
.site-sidebar.slidePanel.slidePanel-right {
    width: 338px;
    overflow: hidden;
}
.slidePanel-right,
.slidePanel-left {
    bottom: initial;
}
.infoDemo .nav-pills .nav-link {
    border-radius: 0;
}
.infoDemo .title{
  font-size:20px ;
  font-weight:bold;
  color:#cc181e;
  text-align: center;
  margin: 20px auto;
}
.infoDemo .title::before,
.infoDemo .title::after {
    width: 10px;
    height: 10px;
    margin: 0.3em 0.3em;
    border: 2px solid #cc181e;
    letter-spacing: 1em;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -khtml-border-radius: 50%;
    -webkit-border-radius: 50%;
    display: inline-block;
    position: relative;
    content: '';
    vertical-align: middle;
    -webkit-animation: zoomOut 1s infinite;
    animation: zoomOut 1s infinite;
}
.infoDemo.panel{
  margin-bottom:0
}
.infoDemo .panel-heading{
  margin: 20px 0 8px;
}
.infoDemo .nav{

}
.infoDemo .nav-item{
  width:110px;
  margin:0 0 0 2px;
}
.infoDemo .nav-link {
    color: #999;
    background: #eee;
    font-size: 15px;
}
.infoDemo .nav-link:hover{
    color:#fff;
    background-color: #000 !important;
}
.infoDemo .nav-link.active:hover {
    background-color: #cc181e !important;
}
.infoDemo .nav-link.active {
    background-color: #cc181e !important;
}
.infoDemo .panel-body{
  padding: 0 22px;
}
.demo-ul {
  padding:0;
  margin-bottom: 25px;
}
.demo-ul li{
  border-bottom: 1px dotted #e1e1e1;
  line-height: 38px;
  width: 100%;
  height: 38px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  color: #333;
}
.demo-ul li span {
  color:#cc181e;
  font-size:11px;
}
.infoDemo .panel-footer{
  text-align:center;
  color:#cc181e;
  padding: 0 30px 25px;
}
.infoDemo .panel-footer span{
    display: inline-block;
    width: 130px;
    height: 50px;
    line-height: 50px;
    background: #eee;
}
.infoDemo .panel-footer span a{
  display:inline-block;
  width:115px;
  height:35px;
  line-height:35px;
  margin:7.5px;
  border:1px dotted #333;
  color:#333;
  cursor: pointer;
}
.infoDemo .panel-footer span a:hover{
  background:#000;
  border:none;
  color:#fff;
}
.infoDemo .panel-footer span:hover{
    background: #fff;
}
</style>



<div class="infoDemo panel nav-tabs-horizontal" data-plugin="tabs">
  <div class="title">通知中心</div>
  <div class="panel-heading">
    <ul class="nav nav-pills" role="tablist">
      <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#cardTab1" aria-controls="cardTab1"
      role="tab" aria-expanded="false">系统通知</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#cardTab2" aria-controls="cardTab2"
      role="tab" aria-expanded="false">城市通知</a></li>
      <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#cardTab3" aria-controls="cardTab3"
      role="tab" aria-expanded="true">审批通知</a></li>
    </ul>
  </div>
  <div class="panel-body">
    <div class="tab-content">
      <div class="tab-pane active" id="cardTab1" role="tabpanel" aria-expanded="true">
        <ul class="demo-ul">
          <li>
              <span>0628</span>
              市委政法委举办全市政法系统领导干部专题培训班
          </li>
          <li>
              <span>0628</span>
              吉林市与白山市举行扶贫协作对接活动
          </li>
          <li>
              <span>0628</span>
              市委召开专题议党会议研究推进我市“两学一做”学习教育常态化制度化工作
          </li>
          <li>
            <span>0620</span>
            本系统06月30日22:00至24:00将进行升级
          </li>
          <li>
            <span>0615</span>
            6月22日进行路桥修护项目联席会议，请准时参加
          </li>
          <li>
            <span>0322</span>
            关于做好2017年就业扶贫工作的通知
          </li>
        </ul>
      </div>
      <div class="tab-pane" id="cardTab2" role="tabpanel" aria-expanded="false">
       <ul class="demo-ul">
            <li>
              <span>0628</span>
              船营区踏访历史印迹 重温入党誓词
            </li>
           <li>
             <span>0628</span>
             磐石市教育局开展在线教学资源共享活动
           </li>
            <li>
              <span>0620</span>
              吉林市国际马拉松将于6月30日开跑
            </li>
           <li>
             <span>0617</span>
              吉林市将开通智慧旅游一卡通服务
           </li>
           <li>
             <span>0607</span>
             于向社会公开征求《吉林市本级公共服务事项清单》意见的公告
           </li>
         </ul>
      </div>
      <div class="tab-pane" id="cardTab3" role="tabpanel" aria-expanded="false">
        <ul class="demo-ul">
          <li>
            <span>0628</span>
            您有一条关于工程规划许可证审批消息
          </li>
          <li>
            <span>0625</span>
            您有一条关于工程规划许可证审批消息
          </li>
          <li>
            <span>0624</span>
            您有一条关于施工许可证审批信息
          </li>
          <li>
            <span>0623</span>
            你有一条关于施工合同备案审批信息
          </li>
        </ul>
      </div>
    </div>
  </div>
   <div class="panel-footer">
     <span>
        <a>加载更多</a>
     </span>
   </div>
</div>




<script>
  if (window.sidebarLogin) {
    $("#sidebarMyMsg").show();
  }
</script>
