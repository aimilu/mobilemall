import Vue from 'vue' // 引入vue
import App from './App.vue' // 引入App.vue文件
import router from './router' // 引入Vue-router配置文件

Vue.config.productionTip = false //关掉生产模式的提示
Vue.prototype.$bus = new Vue()

new Vue({ // new一个Vue实例
  render: h => h(App), // 渲染App.vue文件：先将HTML元素放到当前页面上,之后再将项目的所有内容挂载到id为App的标签下,项目会自动进行路由的判断和路由组件的渲染
  router
}).$mount('#app') // 将内容挂载在id为app的标签下
