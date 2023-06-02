<template>
  <v-app>
    <v-app-bar app>
      <v-btn color="blue" text v-if="UserPage.display"
        @click="CommodityContainer.display = true; UserPage.display = false">返回</v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <RegisteredDialog v-if="!isLogin"></RegisteredDialog>
      <LoginDialog v-if="!isLogin"></LoginDialog>
      <UserEntry :name="User.username" :url="User.userimgurl" v-if="isLogin"></UserEntry>
    </v-app-bar>
    <v-main>
      <CommodityContainer :display="CommodityContainer.display">
        <v-col v-for="i in 0" :key="i">
          <CdDialog :key="i"></CdDialog>
        </v-col>
      </CommodityContainer>
      <UserPage :display="UserPage.display" v-if="isLogin" :username="User.username" :userimgurl="User.userimgurl"
        :userid="User.userid"></UserPage>
    </v-main>
    <Alert type="success" :alert="Alert.login.success">已登录!</Alert>
    <Alert type="error" :alert="Alert.login.failed">用户名或密码错误!</Alert>
    <Alert type="error" :alert="Alert.login.error">服务器异常!</Alert>
    <Alert type="success" :alert="Alert.registered.success">注册成功!</Alert>
    <Alert type="error" :alert="Alert.registered.failed">已经存在该用户!</Alert>
    <Alert type="error" :alert="Alert.registered.error">服务器异常!</Alert>
    <Alert type="success" :alert="Alert.update.success">修改成功!</Alert>
    <Alert type="error" :alert="Alert.update.error">服务器异常!</Alert>

  </v-app>
</template>

<script>
import CdDialog from './components/CdDialog.vue';
import CommodityContainer from './components/CommodityContainer.vue';
import Specification from './components/Specification.vue';
import LoginDialog from './components/LoginDialog.vue';
import RegisteredDialog from './components/RegisteredDialog.vue';
import Alert from './components/Alert.vue';
import UserEntry from './components/UserEntry.vue';
import UserPage from './components/UserPage.vue';

export default {
  name: 'App',
  data: () => ({
    isLogin: false,
    Alert: {
      login: {
        success: false,
        failed: false,
        error: false
      },
      registered: {
        success: false,
        failed: false,
        error: false
      },
      update: {
        success: false,
        error: false
      }
    },
    User: {
      userid: '',
      username: '',
      userimgurl: require('./assets/img.jpg')
    },
    UserPage: {
      display: false
    },
    CommodityContainer: {
      display: true
    }
  }),
  components: {
    CommodityContainer,
    CdDialog,
    Specification,
    LoginDialog,
    RegisteredDialog,
    Alert,
    UserEntry,
    UserPage
  },
  methods: {

  },
  beforeCreate() {
    this.$globalEventBus.$on('loginDone', (User) => {
      if (this.Alert.login.success) return
      this.Alert.login.success = true
      this.$globalEventBus.$emit('closeLoginDialog')
      this.isLogin = true
      this.User.username = User.username
      this.User.userid = User.userid
      console.log(this.User.username);
      setTimeout(() => {
        this.Alert.login.success = false
      }, 1500);
    })
    this.$globalEventBus.$on('loginFailed', (msg) => {
      if (this.Alert.login.failed) return
      this.Alert.login.failed = true
      setTimeout(() => {
        this.Alert.login.failed = false
      }, 1500);
    })
    this.$globalEventBus.$on('loginError', (msg) => {
      if (this.Alert.login.error) return
      this.Alert.login.error = true
      setTimeout(() => {
        this.Alert.login.error = false
      }, 1500);
    })
    this.$globalEventBus.$on('registeredDone', () => {
      if (this.Alert.registered.success) return
      this.Alert.registered.success = true
      this.$globalEventBus.$emit('closRegisteredDialog')
      setTimeout(() => {
        this.Alert.registered.success = false
      }, 1500);
    })
    this.$globalEventBus.$on('registeredFailed', (msg) => {
      if (this.Alert.registered.failed) return
      this.Alert.registered.failed = true
      setTimeout(() => {
        this.Alert.registered.failed = false
      }, 1500);
    })
    this.$globalEventBus.$on('registeredError', (msg) => {
      if (this.Alert.registered.error) return
      this.Alert.registered.error = true
      setTimeout(() => {
        this.Alert.registered.error = false
      }, 1500);
    })
    this.$globalEventBus.$on('openUserPage', () => {
      this.CommodityContainer.display = false
      this.UserPage.display = true
    })
    this.$globalEventBus.$on('logout', () => {
      this.isLogin = false
      this.UserPage.display = false
      this.CommodityContainer.display = true
    })
    this.$globalEventBus.$on('updateUserInfoDone',(user) => {
      if(this.Alert.update.success) return
      this.Alert.update.success = true
      this.User.username = user.username
      setTimeout(() => {
        this.Alert.update.success = false
      }, 1500);
    })
  },
  beforeDestroy() {
    this.$globalEventBus.$off('loginDone')
    this.$globalEventBus.$off('loginFailed')
    this.$globalEventBus.$off('loginError')
    this.$globalEventBus.$off('registeredDone')
    this.$globalEventBus.$off('registeredFailed')
    this.$globalEventBus.$off('registeredError')
    this.$globalEventBus.$off('openUserPage')
  },
};
</script>
