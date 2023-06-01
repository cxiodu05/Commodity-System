# Commodity-System
商品管理后台和用户电商平台前后端项目



# 服务器
### 使用ts环境下的express和mysql模块开发
### npm run start 启动服务器(development环境，可热更新)
### src下的server.js为服务器入口文件
### 端口 5000

# vue相关
## vue 版本2.x，vuetify组件库 版本2.x，其他...
## development环境建议：
### npm run serve 启动代理服务器，所有ajax请求要有前缀/api，如 xhr.get('/api/xxx', callback)
### npm start 启动服务器，所有接口都可通过代理服务器正常运行
## production环境：
### npm run build 打包，打包文件放在 COMMODITY_SYSTEM/commodity_sale_server/src/dist 目录下
