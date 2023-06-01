<template>
    <v-card style="width: 100%;" :loading="loading">
        <v-card-title primary-title>
            修改用户信息
        </v-card-title>
        <v-form v-model="valid" style="margin: 24px;" ref="form">
            <v-row>
                <v-col>
                    <v-text-field label="用户名" v-model="username" :rules="[rules.required]" outlined></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field label="密码" v-model="password" type="password" :rules="[rules.required]"
                        outlined></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-file-input disabled label="头像(暂不可用)" outlined truncate-length="15" :value="userimg"></v-file-input>
                </v-col>
            </v-row>
        </v-form>
        <v-card-actions>
            <v-btn color="blue" text @click="$emit('close')">取消</v-btn>
            <v-btn color="success" text @click="update()" :loading="loading">修改</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax';
export default {
    name: 'UserInfoCard',
    data: () => ({
        valid: false,
        loading: false,
        username: '',
        password: '',
        userimg: null,
        rules: {
            required: value => !!value || '必填项',
        }
    }),
    props: {
        userid: {
            immediate: true,
            type: String
        }
    },
    methods: {
        update() {
            if (this.$refs.form.validate()) {
                this.loading = true
                ajax.GET(`/api/update/userinfo?username=${this.username}&password=${this.password}&userid=${this.userid}`)
                    .then(value => {
                        this.loading = false
                        this.$emit('close')
                        this.$globalEventBus.$emit('updateUserInfoDone', value.user)
                    })
                    .catch(reason => {
                        this.loading = false
                        this.$globalEventBus.$emit('updateUserInfoError')
                    })
            }
        }
    }
}
</script>

<style></style>