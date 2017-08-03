<template>
  <div class="panel panel-bordered" style="margin-bottom: 10px;">
    <div class="panel-body left" v-bind:style="style">
      <h4 class="new-title">{{ item.title }}</h4>
      <ul class="list-group list-group-full ">
        <li v-for="_new in item.news" class="list-group-item">
          <a v-bind:href="_new.url?_new.url: '#'" target="_blank">{{_new.title.length>23? _new.title.substr(0,23) + '...': _new.title}}</a>
          <span class="pull-right">
            {{ _new.date }}
          </span>
        </li>
      </ul>

    </div>
  </div>




</template>

<script>
  export default {
    name: 'zwnews',
    components: { },
    mounted() { },
    data: function() {
      return {
        style: {
          backgroundColor: this.item.background ? this.item.background : 'white',
        },
      };
    },
    methods: { },
    props: ['item'],
};
</script>
<style>
  .left{
    text-align: left;
  }
  .pull-right {
    float: right;
  }
  .list-group-item {
    list-style: decimal;
    padding: 5px ;
  }
  .list-group-item a:link,.list-group-item a:visited,.list-group-item a:hover{
    color: #666666;
  }

</style>


