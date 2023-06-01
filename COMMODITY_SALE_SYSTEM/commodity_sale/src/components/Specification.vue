<template>
  <v-card>
    <v-card-title primary-title>
        {{ title }}
    </v-card-title>
    <v-card-actions>
        
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'Specification',
    data: () => ({
        items: [
            {
                idx: 1,
                name: '全部',
                path: '/all',
            },
            {
                idx: 2,
                name: '环境氛围',
                path: '/pad',
            },
            {
                idx: 3,
                name: '钢琴键盘',
                path: '/keyboard',
            }
        ]
    })
}
</script>

<style>

</style>