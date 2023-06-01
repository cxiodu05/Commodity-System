<template>
    <v-card elevation="0" style="font-size: large; font-weight: bold; background: none;" @click="toUserPage">
        <v-avatar size="36px">
            <v-img :src="url"></v-img>
        </v-avatar>
        {{ name }}
    </v-card>

</template>

<script>
export default {
    name: 'UserEntry',
    props: {
        url: String,
        name: String
    },
    methods: {
        toUserPage() {
            this.$globalEventBus.$emit('openUserPage')
        }
    }
}
</script>

<style></style>