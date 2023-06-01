<template>
    <v-dialog v-model="dialog" width="500px"  persistent>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue" text dark v-bind="attrs" v-on="on">加入待购列表</v-btn>
        </template>

        <AddPurchaseList @close="dialog = false"></AddPurchaseList>

    </v-dialog>
</template>

<script>
import AddPurchaseList from './AddPurchaseList.vue';
export default {
    name: 'AplDialog',
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        AddPurchaseList
    }
}
</script>

<style></style>