<template>
  <div class="searchInput form-group col-xs-12 col-sm-12  col-md-12  col-lg-4  col-xl-3" >
    <div class="input-search">
      <button type="submit" class="input-search-btn">
        <i class="icon md-search" aria-hidden="true"></i>
      </button>
      <input type="text" class="form-control" name="" :placeholder="keyword">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'searchInput',
    props: ['keyword'],
  };
</script>
<style>
  .searchInput{
    float:right;
  }
  .form-control.focus,
  .form-control:focus {
    border-color: #a50043;
  }
  button:focus {
    outline: none;
  }
</style>
