
// 导入vue
import Vue from 'vue'
// 导入App
import App from './App.vue'
// 导入路由
import router from './router'
// 导入vuex
import store from './store'

Vue.config.productionTip = false

// 创建了vue实例
new Vue({
  router, // 挂载了路由
  store, // 挂载了vuex
  render: h => h(App)// 挂载App.vue
}).$mount('#app')// 挂载到页面上的id名为app的容器中
