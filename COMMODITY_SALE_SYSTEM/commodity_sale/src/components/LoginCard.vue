<template>
    <v-card :loading="loading" :disabled="loading">
        <v-card-title primary-title>
            <v-spacer></v-spacer>
            登录
            <v-spacer></v-spacer>
        </v-card-title>
        <v-form ref="form" v-model="valid">
            <v-row style="margin: 24px;">
                <v-col>
                    <v-text-field label="用户名" v-model="username" :rules="[rules.required]"></v-text-field>
                </v-col>
            </v-row>
            <v-row style="margin: 24px;">
                <v-col>
                    <v-text-field label="密码" v-model="password" type="password" :rules="[rules.required]"></v-text-field>
                </v-col>
            </v-row>
        </v-form>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text @click="$emit('close')">取消</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" text @click="login" :loading="loading">登录</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax';
import throttle from '@/assets/js/throttle';
export default {
    name: 'LoginCard',
    data: () => ({
        valid: false,
        loading: false,
        username: '',
        password: '',
        rules: {
            required: value => !!value || '必填项',
        }
    }),
    methods: {
        login() {
            if (this.$refs.form.validate()) {
                this.loading = true
                ajax.GET(`/api/login?username=${this.username}&password=${this.password}`)
                    .then((value) => {
                        if (value.code == 1) {
                            this.loading = false
                            this.$refs.form.reset()
                            this.$globalEventBus.$emit('loginDone', value.user)
                        }
                        else {
                            this.loading = false
                            this.$refs.form.reset()
                            this.$globalEventBus.$emit('loginFailed', '用户名或密码错误')
                        }
                    })
                    .catch((reason) => {
                        this.loading = false
                        this.$globalEventBus.$emit('loginError', '服务器异常')
                    })
            }


        }
    },
}
</script>

<style></style>