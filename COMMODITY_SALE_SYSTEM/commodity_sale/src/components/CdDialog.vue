<template>
    <v-dialog v-model="dialog" width="600px"  persistent scrollable>
        <template v-slot:activator="{ on, attrs }">
            <CommodityPreview @open="dialog = true" v-bind="attrs" v-on="on"></CommodityPreview>
        </template>

        <CommodityDetail @close="dialog = false"></CommodityDetail>

    </v-dialog>
</template>

<script>
import CommodityDetail from './CommodityDetail.vue';
import CommodityPreview from './CommodityPreview.vue';
export default {
    name: 'CdDialog',
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        CommodityPreview,
        CommodityDetail
    }
}
</script>

<style></style>