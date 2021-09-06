<template>
  <div class="container-card">
    <div class="slidecard">
      <span>+16</span>
    </div>
    <div class="titlecard">
      {{ realState.attributes.name }}
    </div>
    <div class="sbtitlecard">
      {{ realState.attributes.real_estate_ids.length }} propiedades guardadas
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'realState',
    props: ['realState']
  });
</script>
