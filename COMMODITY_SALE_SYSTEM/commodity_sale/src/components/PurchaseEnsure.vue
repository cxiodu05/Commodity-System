<template>
    <v-card elevation="5" :loading="loading" :disabled="loading">
        <v-card-actions style="background-color: aliceblue;">
            <v-btn color="error" text dark @click="closeDialog">返回</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
        <v-divider></v-divider>

        <v-card-text style="min-height: 300px; max-height: 500px;">
            {{ res }}
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions  style="background-color: aliceblue;">
            <v-spacer></v-spacer>
            <v-btn color="success" text dark @click="purchase" :loading="loading">购买</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax';
export default {
    name: 'PurchaseEnsure',
    data: () => ({
        res: '',
        loading: false,
        src: ''
    }),
    methods: {
        closeDialog(){
            this.$emit('close')
        },
        purchase(){
            this.loading = true
            ajax.GET('/api/random')
            .then((value) => {
                console.log(value)
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