<template>
    <v-dialog v-model="dialog" width="500px"  persistent>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" text dark v-bind="attrs" v-on="on">购买</v-btn>
        </template>

        <PurchaseEnsure @close="dialog = false"></PurchaseEnsure>

    </v-dialog>
</template>

<script>
import PurchaseEnsure from './PurchaseEnsure.vue';
export default {
    name: 'PeDialog',
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        PurchaseEnsure
    }
}
</script>

<style></style>