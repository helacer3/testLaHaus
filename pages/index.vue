<template>
  <div>
    <Header />
    <h1>Listas de favoritos</h1>
    <div class="container-cards-list">
      <RealStates
        v-for="realState in realStates"
        :realState="realState"
        :key="realState.id"
      />
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
