<template>
  <div>
    <div class="container pt-10 px-7 md:py-15 md:px-16 lg:py-20 lg:px-40">
      <h1 class="font-semibold text-center text-2xl md:text-3xl mb-14 w-auto">
        Listas de favoritos
      </h1>
      <!-- container states -->
      <div
        class="container-card-list grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12"
      >
        <RealStates
          v-for="realState in realStates"
          :realState="realState"
          :stateImages="defineStateImages(realState.attributes.real_estate_ids)"
          :key="realState.id"
        />

        <div class="slidecard max-h-44 text-blue-900 font-bold">
          <div
            class="flex flex-col text-6xl items-center justify-center h-44 rounded-lg cursor-pointer">
            <span>+</span>
          </div>
          <div class="mt-4 text-center">
            Crear una nueva lista
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
type StateResponse = {
  data: Array<StateDataType>,
  included: Array<StateIncludedType>,
};
type StateDataType = {
  id: number;
  attributes: {
    name: string,
    real_state_id: number[]
  }
};
type StateIncludedType = {
  id: number;
  attributes: {
    slug: string,
    name: string,
    description: string,
    code: string,
    city: string,
    country: string,
    gallery_urls: string,
    amenities: string
  };
};

/*
  * Home LA HAUS
  * URL Diseño: https://www.figma.com/file/sW5Z8Y3pHim5OYIAAvRtd9/Prueba-T%C3%A9cnica?node-id=1%3A2
*/
export default Vue.extend({
  layout: 'LaHaus',
  data: () => ({
    realStates: [] as Array<StateDataType>,
    dataStates: [] as Array<StateIncludedType>
  }),
  methods: {
    /**
     * define Images URL
    */
    defineStateImages(listIds: number[]): string[] {
      let listImages:string[] = [];
      if (listIds.length > 0) {
        listIds.forEach((actualId:number) => {
          const item:StateIncludedType = this.dataStates.filter(
            (info:StateIncludedType) => info.id == actualId
          )[0];
          if(item) {
            const itemImages = item.attributes.gallery_urls;
            listImages = listImages.concat(itemImages);
          }
        });
      }
      return listImages.slice(0, 3);
    }
  },
  /**
   * consume Service Real States
   * @return Promise Real States Data
  */
  async fetch(): Promise<void> {
    const urlRealStates = "https://lh-real-estates-challenge-api.herokuapp.com/real-estates";
    await fetch(urlRealStates)
      .then((response:any) => response.json())
      .then((response:StateResponse) => {
        this.realStates = response.data;
        this.dataStates = response.included;
      });
  }
});
</script>
