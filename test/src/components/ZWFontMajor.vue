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
    name: 'zwfontmajor',
    components: {
      ZWFontHeader,
      ZWFontContainer,
      ZWFontFoot,
    },
    mounted() { },
    data: function() {
      return { };
    },
    methods: { },
    props: ['page'],
};
</script>
<style>
  .page{
    margin: 0 auto;
    min-width: 1026px;
    max-width: 1600px;
    text-align: left;
  }
</style>


