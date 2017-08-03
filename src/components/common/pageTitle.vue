<template>
  <div class="pageTitle">
    {{title}}
  </div>
</template>
<script>
  export default {
    name: 'pageTitle',
    props: ['title'],
  };
</script>
<style>
.pageTitle{
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}
</style>
