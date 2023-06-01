<template>
    <v-card :loading="loading" :disabled="loading">
        <v-card-title primary-title>
            <v-spacer></v-spacer>
            注册
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
            <v-row style="margin: 24px;">
                <v-col>
                    <v-text-field label="确认密码" v-model="re_password" type="password"
                        :rules="[rules.required, rules.re_password]"></v-text-field>
                </v-col>
            </v-row>
        </v-form>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text @click="$emit('close')">取消</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" text @click="registered" :loading="loading">注册</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script>
import ajax from '@/assets/js/ajax';
import throttle from '@/assets/js/throttle';
export default {
    name: 'RegisteredCard',
    data: () => ({
        valid: false,
        loading: false,
        username: '',
        password: '',
        re_password: '',
        timer: null
    }),
    computed: {
        rules() {
            return {
                required: value => !!value || '必填项',
                re_password: value => {
                    return this.password === this.re_password ? true : '两次密码不一致'
                }
            }
        }
    },
    methods: {
        registered() {
            if (this.$refs.form.validate()) {
                this.loading = true
                ajax.GET(`/api/registered?username=${this.username}&password=${this.password}`)
                    .then((value) => {
                        if (value.code == 1) {
                            this.loading = false
                            this.$refs.form.reset()
                            this.$globalEventBus.$emit('registeredDone', '注册成功')
                        }
                        else {
                            this.loading = false
                            this.$globalEventBus.$emit('registeredFailed', `已存在用户'${this.username}'`)
                        }
                    })
                    .catch((reason) => {
                        this.loading = false
                        this.$globalEventBus.$emit('registeredError', '服务器异常')
                    })
            }
        }
    }
}
</script>

<style></style>