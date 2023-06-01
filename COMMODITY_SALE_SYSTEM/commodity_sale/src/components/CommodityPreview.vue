<template>
  <v-card elevation="8" min-height="160px" width="200px" color="#f0ffff" hover @click="openDialog">
    <v-img :src="img" alt="" height="160px" width="200px"></v-img>
    <v-card-title primary-title>
        {{ title }}
    </v-card-title>
    <v-card-text style="color: rgb(94, 100, 164); font-size: 16px;">
        {{ price + '元' }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    name: 'CommodityPreview',
    data: () => ({
        title: 'Vuejs设计与实现',
        img: require('../imgs/vuejs.jpg'),
        price: 119.8
    }),
    props: {

    },
    methods: {
        openDialog(){
            this.$emit('open')
        }
    }
}
</script>

<style>

</style>