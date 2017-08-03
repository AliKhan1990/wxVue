<template>
<div class="page margin-0">
  <ZWFontHeader></ZWFontHeader>
  <ZWFontContainer :page="page"></ZWFontContainer>
  <ZWFontFoot></ZWFontFoot>
</div>


</template>

<script>
  import ZWFontHeader from './ZWFontHeader';
  import ZWFontContainer from './ZWFontContainer';
  import ZWFontFoot from './ZWFontFoot';

  export default {
    name: 'zwfont',
    components: {
      ZWFontHeader,
      ZWFontContainer,
      ZWFontFoot,
    },
    mounted() { },
    data: function() {
        console.log(this.$route);
      return {
          page: this.$route.meta.page,
      };
    },
    methods: { },
  };
</script>
<style>
  .page{
    margin: 0 auto;

    max-width: 1600px;
    text-align: left;
  }
</style>


