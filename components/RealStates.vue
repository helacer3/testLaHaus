<template>
  <div class="container-card flex flex-col bg-transparent cursor-pointer bg-green-500">

    <div class="slidecard max-h-44">
      <div class="slidecard-images flex flex-wrap h-44 w- rounded-lg bg-gray-500" v-if="stateImages.length >0">
        <div
            v-for="(item, index) in stateImages"
            :key="index"
            :class="containerImageClass(index, stateImages.length)">
          <img
            :src="item"
            :alt="realState.attributes.name"
            :class="itemImageClass(index)"
          />
        </div>

        <!-- <span class="float-right -ml-12 pt-20 text-lg text-white font-bold z-40">
          + {{ realState.attributes.real_estate_ids.length }}
        </span> -->
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
    methods: {

      /**
       * define Container Image Class
       * @param  actItem  Actual Image Position
       * @param  numItems Actual item number Images
       * @return classItem String with COntainer Class
      */
      containerImageClass(actItem:number, numItems: number):string {
        let classItem = '';
        if (numItems == 3) {
          classItem = (actItem == 0) ?
            "w-2/4 h-full" :
            "w-1/4 h-full -ml-1";
        } else if (numItems == 2) {
          if (actItem == 0) {
            classItem = "w-2/4 h-full";
          } else if (actItem == 1) {
            classItem = "w-2/4 h-full -ml-2";
          } else {
            classItem = "hidden";
          }
        } else {
          classItem = (actItem == 0) ?
            "w-full h-full" : "hidden";
        }
        return classItem;
      },

      /**
       * define Slide Image Class
       * @param  actItem   Actual Image Position
       * @return classItem String with Item Class
      */
      itemImageClass(actItem:number):string {
        const zIndex = (actItem == 0) ? 'z-40': ((actItem == 1) ? 'z-30' : 'z-20');
        return (actItem == 0) ?
          `relative h-full w-full rounded-lg border border-white overflow-hidden ${zIndex}` :
          `relative h-full w-auto rounded-tr-lg rounded-br-lg border overflow-hidden border-white ${zIndex}`;
      }
    }
  });
</script>
