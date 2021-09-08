<template>
  <div class="container-card flex flex-col bg-transparent cursor-pointer bg-green-500">
    <div class="slidecard max-h-44">
        <div class="slidecard-images flex flex-row h-full rounded-lg" v-if="stateImages.length >0">
          <img
            :src="stateImages[0]"
            :alt="realState.attributes.name"
            class="w-1/2 rounded-lg border border-white z-10"  />
          <img
            :src="stateImages[1]"
            :alt="realState.attributes.name"
            class="w-1/2 rounded-lg border border-white z-0"  />
          <span class="float-right -ml-12 pt-20 text-lg text-white font-bold z-40">
            + {{ realState.attributes.real_estate_ids.length }}
          </span>
        </div>
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
  import Vue from 'vue';

  export default Vue.extend({
    name: 'RealStates',
    props: ['realState', 'stateImages'],
  });
</script>
