<template>
  <div class="container-card flex flex-col bg-transparent cursor-pointer">
    <div class="slidecard max-h-44">
      <img
        src="~/assets/images/sample.JPG"
        :alt="realState.attributes.name"
        class="w-full h-full rounded-lg"  />
        <span class="static float-right text-white font-bold">
          +16
        </span>
    </div>
    <div class="titlecard font-bold text-lg pt-4 pb-3">
      {{ realState.attributes.name }}
    </div>
    <div class="sbtitlecard text-sm text-gray-500">
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
