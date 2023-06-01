<template>
    <v-dialog v-model="dialog" width="300px"  persistent>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue" text dark v-bind="attrs" v-on="on">登录</v-btn>
        </template>

        <LoginCard @close="close"></LoginCard>

    </v-dialog>
</template>

<script>
import LoginCard from './LoginCard.vue'
export default {
    name: 'LoginDialog',
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        LoginCard
    },
    methods: {
        close() {
            this.dialog = false
        }
    },
    beforeCreate() {
        this.$globalEventBus.$on('closeLoginDialog', () => {
            this.dialog = false
        })
    }
}
</script>

<style></style>