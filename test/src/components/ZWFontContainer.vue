<template>
   <div class="container animation-slide-bottom">
    <div class="innercontiner  container-fluid">
      <div class="row">
        <div v-for="menu in menus" v-bind:class="menu.class + ' tab-item'" >

          <a data-trigger="click" v-if="menu.link.substr(0,1) != '#'" v-bind:class="menu.active?'nav-link active':'nav-link'"
              v-bind:href="menu.link" target="_blank"
             aria-expanded="false">
            <i v-bind:class="'icon ' + menu.icon" aria-hidden="true"></i>
            {{menu.title}}
          </a>

          <router-link
            :to="menu.link.substr(1,menu.link.length)"
            v-if="menu.link.substr(0,1) == '#'" v-bind:class="menu.active?'nav-link active':'nav-link'"
             aria-expanded="false">
            <i v-bind:class="'icon ' + menu.icon" aria-hidden="true"></i>
            {{menu.title}}
          </router-link>
        </div>
      </div>

        <!--首页-->
        <div v-if="page=='main'" class="row font-carousel">
          <div class="col-xs-7 ">
            <ZWFontCarousel :list="picNews"></ZWFontCarousel>
          </div>
          <div class="col-xs-5">
            <ZWNewsDesc :news="descNews"></ZWNewsDesc>
          </div>

        </div>
        <div v-if="page=='main'"  class="row container-text">
          <div  v-for="_new in news"  class="col-xs-6" style="padding: 0 5px;">
            <ZWNews :item="_new"></ZWNews>
          </div>
        </div>

       <!--业务审批系统-->
        <div v-if="page=='business'"  class="row container-text-white">
          <div class="col-xs-12">
            <div class="row">
              <div class="font-app-list-container col-xs-9">
                <ul class="font-app-list clearfix">
                  <a v-for="app in businessApps" v-bind:href="app.link" target="_blank">
                    <li>
                      <div  class="font-app-list-mask">
                        <img v-bind:src="app.icon" >
                        <p>{{app.title}}</p>
                      </div>
                    </li>
                  </a>

                </ul>
              </div>
              <div class="col-xs-3" >
                <ZWNews :item="businessNews"></ZWNews>
              </div>
            </div>
          </div>

        </div>
    </div>

     <!--<ul class="nav nav-tabs ">-->
       <!--<li v-for="menu in menus" class="nav-item">-->
         <!--<a v-bind:class="menu.active?'nav-link active':'nav-link'" data-toggle="tab" href="javascript:void(0)" aria-expanded="false">-->
           <!--<i v-bind:class="'icon ' + menu.icon" aria-hidden="true"></i>-->
           <!--{{menu.title}}-->
         <!--</a>-->
       <!--</li>-->

     <!--</ul>-->

   </div>

</template>

<script>
  import ZWNews from './ZWNews';
  import ZWFontCarousel from './ZWFontCarousel';
  import ZWNewsDesc from './ZWNewsDesc';

  export default {
    name: 'zwfontcontainer',
    components: {
      ZWNews,
      ZWFontCarousel,
      ZWNewsDesc,
  },
    mounted() { },
    data: function() {
      var chars = ['一', '二', '三', '四', '五', '六', '日'];
//      console.log(this.page);
      return {
          welcome: '欢迎您进入吉林市电子政务平台',
          name: '吉林市电子政务平台',
          today: new Date().getFullYear() + '年'
          + (new Date().getMonth() + 1)
          + '月' + new Date().getDate() + '日'
          + ' 星期' + chars[new Date().getDay()-1],
        recommeds: ['环保', '教育', '重大项目', '证件审批', '新政策'],
        menus: [{
              title: '首页',
              icon: 'fa-home',
              active: this.page == 'main',
              class: 'col-xs-1',
              link: '#/',
        },
          {
            title: '政务服务管理平台',
            icon: 'fa-bank',
            class: 'col-xs-3',
            link: 'http://121.42.169.26:3003/jlegp',
          },
          {
            title: '业务审批系统',
            icon: 'fa-laptop',
            class: 'col-xs-2',
            active: this.page == 'business',
            link: '#/business',
          },
          {
            title: '重大项目管理',
            icon: 'fa-random',
            class: 'col-xs-3',
            active: this.page == 'major',
            link: 'http://115.28.110.211:3001/view/index_jltzxm.html#/?_k=1583k8',
          },
          {
            title: '安全信息管理',
            icon: 'fa-shield',
            class: 'col-xs-3',
            link: '#/',
          }],
        news: [
              {
                title: '吉林要闻',
                news: [{
                  id: '1',
                  title: '蛟河市农业局召开秸秆机收捡拾打捆现场演示会',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282138&flmid=1001003002',
                  date: '2017-05-13',
                },
                {
                  id: '2',
                  title: '桦甸市开展2017年测土配方施肥肥料试验、示范工作',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282136&flmid=1001003002',
                  date: '2017-05-13',
                },
                  {
                    id: '3',
                    title: '永吉县大力发展畜牧业经济成果显著',
                    url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281781&flmid=1001003002',
                    date: '2017-05-13',
                  },
                  {
                    id: '4',
                    title: '永吉县星星哨水库灌区管理处开展春灌工作',
                    url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281780&flmid=1001003002',
                    date: '2017-05-13',
                  },
                  {
                    id: '5',
                    title: '舒兰市残联开展残疾人康复服务机构检查工作',
                    url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281977&flmid=1001003002',
                    date: '2017-05-13',
                  },
                  {
                    id: '6',
                    title: '龙潭区残联认真学习贯彻 《中国共产党问责条例》',
                    url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281976&flmid=1001003002',
                    date: '2017-05-13',
                  }],
              },
            {
              title: '通知公告',
              news: [{
                id: '1',
                title: '《吉林二台子机场改扩建工程》社会稳定风险分析征求公众意见公示',
                url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281939&flmid=10010030025',
                date: '2017-05-11',
              },
                {
                  id: '2',
                  title: '吉林高新区公开招聘专业人才公告',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281178&flmid=10010030025',
                  date: '2017-05-08',
                },
                {
                  id: '3',
                  title: '关于吉林市PPP项目征集公告',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280637&flmid=10010030025',
                  date: '2017-05-04',
                },
                {
                  id: '4',
                  title: '中共吉林市委 吉林市人民政府 关于表彰..',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280636&flmid=10010030025',
                  date: '2017-05-04',
                },
                {
                  id: '5',
                  title: '关于跃马湖黑臭水体的公示',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280638&flmid=10010030025',
                  date: '2017-05-04',
                },
                {
                  id: '6',
                  title: '关于2017年城镇低收入住房困难家庭申..',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=280331&flmid=10010030025',
                  date: '2017-05-03',
                },
              ],
            },
            {
              title: '重要会议',
              news: [{
                id: '1',
                title: '市政协主席崔振吉在蛟河市调研脱贫攻坚工..',
                url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282147&flmid=1001003002',
                date: '2017-5-12',
              },
                {
                  id: '2',
                  title: '农工党吉林市第七次代表大会召开',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282140&flmid=1001003002',
                  date: '2017-5-12',
                },
                {
                  id: '3',
                  title: '吉林市市政公用局组织开展局长接待日活动',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282223&flmid=1001003002',
                  date: '2017-5-12',
                },
                {
                  id: '4',
                  title: '全市市直机关公务员职业道德教育轮训班开..',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282041&flmid=1001003002',
                  date: '2017-5-12',
                },
                {
                  id: '5',
                  title: '吉林市就业服务局服务企业促发展 促进就..',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282043&flmid=1001003002',
                  date: '2017-5-12',
                },
                {
                  id: '6',
                  title: '我市召开全市统一战线打造“吉行”同心品..	',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281636&flmid=1001003002',
                  date: '2017-5-11',
                },
              ],
            },
            {
              title: '领导活动',
              news: [{
                id: '1',
                title: '市委召开全市领导干部会议张焕秋任吉林市委书记',
                url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=278094&flmid=1001003005',
                date: '2017-04-18',
              },
                {
                  id: '2',
                  title: '吉林市人大常委会任免人员名单',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=275883&flmid=1001003005',
                  date: '2017-04-18',
                },
                {
                  id: '3',
                  title: '吉林市人大常委会人事任免名单',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=266137&flmid=1001003005',
                  date: '2017-04-18',
                },
                {
                  id: '4',
                  title: '2017年1月12日吉林市第十六届人大常委会第一次会议..',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=265440&flmid=1001003005',
                  date: '2017-04-18',
                },
                {
                  id: '5',
                  title: '2016年12月16日吉林市第十五届人大常委会第三十八..',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=262423&flmid=1001003005',
                  date: '2017-04-18',
                },
                {
                  id: '6',
                  title: '2016年12月2日吉林市第十五届人大常委会任免人员名..',
                  url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=260443&flmid=1001003005',
                  date: '2017-04-18',
                },
              ],
            },
        ],
        descNews: {
            title: '新闻动态',
            news: [{
              id: '1',
              title: '政协吉林市第十二届委员会常务委员会提案工作情况报告（摘要）',
              url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=272538&flmid=10010030024',
              desc: '——在政协吉林市第十三届委员会第一次会议上（2017年1月6日）',
              date: '2017-1-6',
            },
              {
                id: '2',
                title: '政协吉林市第十二届委员会常务委员会工作报告',
                url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=271701&flmid=10010030024',
                desc: '——在政协吉林市第十三届委员会第一次会议上（2017年1月6日）',
                date: '2017-1-6',
              }],
        },
        picNews: [{
              title: '吉林市市政公用局组织开展局长接待日活动',
              desc: '',
              pic: 'http://www.jlcity.gov.cn/uploadfile/20170512040733334.jpg',
              url: '',
        },
          {
            title: '桦甸市：“旅游+扶贫”创新乡村旅游扶贫机制',
            desc: '',
            pic: 'http://www.jlcity.gov.cn/uploadfile/20170511030753904.jpg',
            url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/tpxxnew.jsp?wzid=282027',
          },
          {
            title: '中国吉林市·2017玫瑰音乐节将于7月14日至16日举行',
            desc: '',
            pic: 'http://www.jlcity.gov.cn/uploadfile/20170511095244409.jpg',
            url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/tpxxnew.jsp?wzid=281956',
          }],
        businessApps: [
          {
              title: '食药监局',
              icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_syj.png',
              link: 'http://121.42.169.26:3003/jlfmp',
          },
          {
            title: '商务局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_swj.png',
            link: ' http://121.42.169.26:3003/jlshswjbs',
          },
          {
            title: '房管局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_fgj.png',
            link: 'http://121.42.169.26:3003/jlnsp',
          },
          {
            title: '物价局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_wjj.png',
            link: '',
          },
          {
            title: '国土资源局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_fgtzy.png',
            link: '',
          },
          {
            title: '交通运输局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_jtys.png',
            link: '',
          },
          {
            title: '审计局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_sjj.png',
            link: '',
          },
          {
            title: '民政局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_mzj.png',
            link: '',
          },
          {
            title: '财政局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_czj.png',
            link: '',
          },
          {
            title: '林业局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_lyj.png',
            link: '',
          },
          {
            title: '能源局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_nyj.png',
            link: '',
          },
          {
            title: '旅游局',
            icon: 'http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo_lyj.png',
            link: '',
          },
        ],
        businessNews: {
          title: '国务院重要政策信息',
          background: '#ffffff',
          news: [{
            id: '1',
            title: '蛟河市农业局召开秸秆机收捡拾打捆现场演示会',
            url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282138&flmid=1001003002',
            date: '2017-05-13',
          },
            {
              id: '2',
              title: '桦甸市开展2017年测土配方施肥肥料试验、示范工作',
              url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=282136&flmid=1001003002',
              date: '2017-05-13',
            },
            {
              id: '3',
              title: '永吉县大力发展畜牧业经济成果显著',
              url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281781&flmid=1001003002',
              date: '2017-05-13',
            },
            {
              id: '4',
              title: '永吉县星星哨水库灌区管理处开展春灌工作',
              url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281780&flmid=1001003002',
              date: '2017-05-13',
            },
            {
              id: '5',
              title: '舒兰市残联开展残疾人康复服务机构检查工作',
              url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281977&flmid=1001003002',
              date: '2017-05-13',
            },
            {
              id: '6',
              title: '龙潭区残联认真学习贯彻 《中国共产党问责条例》',
              url: 'http://www.jlcity.gov.cn/jlszf_web/xxgk/zfwjnew.jsp?wzid=281976&flmid=1001003002',
              date: '2017-05-13',
            }],
        },
      };
    },
    methods: { },
    props: ['page'],
};
</script>
<style>
  .container{
    margin: -100px auto 30px auto;
    text-align: center;
  }
  .innercontiner{
    max-width: 1000px;
    padding-left: 0;
    padding-right: 0;

  }

  .nav{
    color: white;
    display: inline-block;
    margin: 0 auto;
    min-width: 727px;

  }
  .nav-link,.nav-link:hover,.nav-link:focus{
    background-color: #000000;
    color: white !important;
  }
  .nav-link.active
  {
    background-color: orange;
    color: white !important;
  }

  .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover{
    background-color: #000000;

  }

  .container-text{
    min-height: 300px;
    margin-top: 5px;
  }
  .tab-item{
    padding: 0 1px;

  }
  .tab-item a{
    border-radius: 2px;
  }
  .font-carousel{
    padding: 10px;
    background-color: white;;
  }

  .font-app-list-container{

  }
  .font-app-list{

    padding: 10px;
    clear: both;
    list-style: none;
  }
  .font-app-list li{
    float: left;
    width: 130px;
    height: 130px;
    background-color: #eeeeee;
    margin: 5px;
    line-height: 130px;
    vertical-align: middle;
  }
  .container-text-white{
    background-color: white;
  }

  .font-app-list a,.font-app-list a:link,.font-app-list a:visited{
    color: #666666 ;
  }
  .font-app-list-mask{
    line-height: 30px;
    display: inline-block;
    margin-top: 27px;
  }
  .font-app-list-mask img{
    width: 30px;
    height: 30px;
  }
  .font-app-list-mask p{
    margin-top: 5px;
  }
</style>


