<template>
    <v-row justify="center" align="center">
        <v-card elevation="2">
            <v-card-title primary-title>
                待购列表
            </v-card-title>
            <v-row v-for="i in items" :key="i.idx">
                <v-card>
                    <v-card-title primary-title>
                        {{ i.name }}
                    </v-card-title>
                </v-card>
            </v-row>
        </v-card>
    </v-row>
</template>

<script>
export default {
    name: 'PurchaseList',
    data: () => ({

    }),
    props: {
        items: [],
    }
}
</script>

<style></style>