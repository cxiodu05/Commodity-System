<template>
    <v-dialog v-model="dialog" width="300px"  persistent>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue" text dark v-bind="attrs" v-on="on">注册</v-btn>
        </template>

        <RegisteredCard @close="close"></RegisteredCard>

    </v-dialog>
</template>

<script>
import RegisteredCard from './RegisteredCard.vue'
export default {
    name: 'RegisteredDialog',
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        RegisteredCard
    },
    methods: {
        close() {
            this.dialog = false
        },
        closRegisteredDialog() {
            this.dialog = false
        }
    },
}
</script>

<style></style>