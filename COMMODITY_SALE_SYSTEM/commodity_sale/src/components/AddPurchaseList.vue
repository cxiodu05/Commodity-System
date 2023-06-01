<template>
    <v-card elevation="5" :disabled="loading" :loading="loading">
        <v-card-actions  style="background-color: aliceblue;">
            <v-btn color="error" dark text @click="closeDialog">返回</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
        <v-divider></v-divider>

        <v-card-text style="min-height: 300px; max-height: 500px;">
            {{ res }}
        </v-card-text>
        
        <v-divider></v-divider>
        <v-card-actions  style="background-color: aliceblue;">
            <v-spacer></v-spacer>
            <v-btn color="blue" text dark :loading="loading" @click="addPurchaseList">加入待购单</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax'
export default {
    name: 'AddPurchaseList',
    data: () => ({
        loading: false,
        res: ''
    }),
    methods: {
        closeDialog(){
            this.$emit('close')
        },
        addPurchaseList(){
            this.loading = true
            ajax.GET('/api/add')
            .then((value) => {
                this.res = value.result
                this.loading = false
            })
            .catch(reason => {
                console.log(reason)
                this.loading = false
            })
        },
    }
}
</script>

<style></style>