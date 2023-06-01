<template>
    <v-dialog v-model="dialog" persistent max-width="400px" scrollable>
        <template v-slot:activator="{ on, attrs }">
            <v-btn @open="dialog = true" v-bind="attrs" v-on="on" color="blue" text>修改信息</v-btn>
        </template>

        <UserInfoCard @close="dialog = false" :userid="userid"></UserInfoCard>
    </v-dialog>
</template>

<script>
import UserInfoCard from './UserInfoCard.vue'
export default {
    name: 'UicDialog',
    data: () => ({
        dialog: false
    }),
    components: {
        UserInfoCard
    },
    props: {
        userid: {
            immediate: true,
            type: String
        }
    }
}
</script>

<style></style>