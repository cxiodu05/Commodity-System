<template>
    <v-container grid-list-xs v-show="display">
        <v-card elevation="0" style="font-size: xx-large; font-weight: bold; background: none;">
            <v-row>
                <v-col>
                    <v-avatar size="72px">
                        <v-img :src="userimgurl"></v-img>
                    </v-avatar>
                    {{ username }}
                    <span style="font-size: small; color: gray;">uid: {{ userid }}</span>

                    <UicDialog :userid="userid"></UicDialog>
                    <v-btn color="error" text @click="$globalEventBus.$emit('logout')">退出登录</v-btn>
                </v-col>
            </v-row>
        </v-card>
        <v-row><v-col></v-col></v-row>
        <v-divider></v-divider>
        <v-row><v-col></v-col></v-row>
    </v-container>
</template>

<script>
import UicDialog from './UicDialog.vue';
export default {
    name: 'UserPage',
    data: () => ({

    }),
    props: {
        display: {
            type: Boolean,
            default: false
        },
        userimgurl: '',
        username: {
            immediate: true,
            type: String,
        },
        userid: {
            immediate: true,
            type: String,
        }

    },
    components: {
        UicDialog
    },
    methods: {
        
    },
}
</script>

<style></style>