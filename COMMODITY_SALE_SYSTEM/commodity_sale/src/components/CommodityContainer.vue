<template>
    <v-container grid-list-xs v-show="display">
        <v-row>
            <slot>未找到商品</slot>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'CommodityContainer',
    data: () => ({

    }),
    props: {
        display: {
            type: Boolean,
            default: true
        }
    },
    components: {
    },
    methods: {

    },

}
</script>

<style></style>