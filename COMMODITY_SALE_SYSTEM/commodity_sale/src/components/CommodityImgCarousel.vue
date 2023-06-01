<template>
  <v-carousel v-model="model" cycle height="300px">
    <v-carousel-item v-for="(img, i) in imgs" :key="i">
      <v-img :src="img" contain width="100%" height="100%"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'CommodityImgCarousel',
  data: () => ({
    model: 0,
    imgs: [
      require('../imgs/vuejs.jpg'),
      require('../imgs/vuejs.jpg'),
      require('../imgs/vuejs.jpg'),
      require('../imgs/vuejs.jpg'),
    ]
  }),
}
</script>