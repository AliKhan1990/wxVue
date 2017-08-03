<template>
  <div class="panel panel-bordered" style="margin-bottom: 10px;">
    <div class="panel-body left">
      <h3 class="new-title">{{ news.title }}</h3>
      <ul class="list-group list-group-full ">
        <li v-for="_new in news.news" class="list-group-item">
          <p class="news-desc-title">
            <a v-bind:href="_new.url?_new.url: '#'" target="_blank">{{_new.title.length>23? _new.title.substr(0,23) + '...': _new.title}}</a>

          </p>
          <p class="news-desc-text" >
            {{ _new.desc }}
          </p>
        </li>
      </ul>

    </div>
  </div>




</template>

<script>
  export default {
    name: 'zwnewsdesc',
    components: { },
    mounted() { },
    data: function() {
      return { };
    },
    methods: { },
    props: ['news'],
};
</script>
<style>
  .news-desc-title{
     color: #f47e32;
     font-size: 15px;
  }
  .news-desc-text{
    color: #aeafb0;
    font-size: 10px;
  }

  .news-desc-title a:link,.news-desc-title a:visited,.news-desc-title a:hover{
    color: #f47e32;
  }
</style>


