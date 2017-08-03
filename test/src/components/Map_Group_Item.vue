<template>
  <div class="panel">
    <div class="panel-heading" v-bind:id="'map_item_' + itemData.id" role="tab">
      <a class="panel-title collapsed" data-toggle="collapse" v-bind:href="'#map_item_'+ itemData.id + '_collapse'"
           v-bind:dataParent="'map_item_' + itemData.id + '_collapse'" aria-expanded="false" aria-controls="exampleCollapseDefaultThree">
        Collapsible Group Item #3
      </a>
    </div>
    <div class="panel-collapse collapse" v-bind:id="'map_item_' + itemData.id + '_collapse'" aria-labelledby="exampleHeadingDefaultThree" role="tabpanel" aria-expanded="false">
      <div class="panel-body">
        Horum, antiquitate perciperet d conspectum locus obruamus animumque perspici probabis
        suscipere. Desiderat magnum, contenta poena desiderant
        concederetur menandri damna disputandum corporum equidem
        cyrenaicisque. Defuturum ultimum ista ignaviamque iudicant
        feci incursione, reprimique fruenda utamur tu faciam complexiones
        eo, habeo ortum iucundo artes.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'map_group_item',
    components: {

    },
    data: function() {
      return { };
    },
    props: ['itemData'],
};
</script>


