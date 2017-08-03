<template>
  <div class="carousel slide"
       data-ride="carousel">
    <ol class="carousel-indicators carousel-indicators-fillin">
      <li class="active" data-slide-to="0" data-target="#exampleCarouselCaptions"></li>
      <li data-slide-to="1" data-target="#exampleCarouselCaptions"></li>
      <li data-slide-to="2" data-target="#exampleCarouselCaptions"></li>
    </ol>
    <div class="carousel-inner" id="carouselcontainer" role="listbox">
      <div v-for="item in list" v-bind:class="item.active? 'carousel-item active' : 'carousel-item'">
        <img style="height: 300px;" class="w-full" v-bind:src="item.pic" v-bind:alt="item.title" />
        <div class="carousel-caption">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
        </div>
      </div>

    </div>

  </div>




</template>

<script>
  export default {
    name: 'zwfontcarousel',
    components: { },
    beforeMount() {
        if(this.list.length>0)
          this.list[0].active = true;
        console.log(this.list);
    },
    data: function() {
      return { };
    },
    methods: { },
    props: ['list'],
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
  }
  .w-full{
    height: 50px;
  }

</style>


