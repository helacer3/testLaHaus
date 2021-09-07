<template>
  <div>
    <div class="container pt-10 px-7 xs:px-20 md:py-20 md:px-40 bg-yellow-300">
      <h1 class="font-semibold text-center text-2xl md:text-3xl mb-14 bg-green-100 w-auto">
        Listas de favoritos
      </h1>
      <!-- container states -->
      <div class="container-card-list grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        <RealStates
          v-for="realState in realStates"
          :realState="realState"
          :key="realState.id"
        />

        <div class="slidecard max-h-44 text-blue-900 font-bold">
          <div class="text-5xl h-44 bg-green-50 rounded-lg cursor-pointer text-center">
            +
          </div>
          <div class="mt-4">
            Crear una nueva lista
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'LaHaus',
  data: () => ({
    realStates: []
  }),

  /**
   * consume Service Real States
   * @return Promise Real States Data
  */
  async fetch(): Promise<void> {
    const urlRealStates = "https://lh-real-estates-challenge-api.herokuapp.com/real-estates";
    this.realStates = await fetch(urlRealStates)
    .then(response => response.json())
    .then(response => {
      // console.log("response: ", response);
      return response.data;
    });
  }
});
/*
https://www.figma.com/file/sW5Z8Y3pHim5OYIAAvRtd9/Prueba-T%C3%A9cnica?node-id=1%3A2
*/
</script>
