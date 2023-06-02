<template>
    <v-container grid-list-xs v-show="display">
        <v-row>
            <slot><h1 style="position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);">未找到商品</h1></slot>
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