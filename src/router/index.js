import Vue from 'vue' // 引入Vue
import VueRouter from 'vue-router' // 引入vue-router

// 主体
// import Home from '../views/home/Home' 第一种方法
const Home = () => import('../views/home/Home') //引入Home组件,第二种方法
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter) // 挂载属性

// 封装对象
const routes = [
  //一个个对象
  {
    path: '', // 路由的路径
    redirect: '/home' // 将默认的空路径重定向到/home路径
  },
  {
    path: '/home', // 路由的路径
    component: Home // 将引入的组件展示
  },
  {
    path: '/category', // 路由的路径
    component: Category // 将引入的组件展示
  },
  {
    path: '/cart', // 路由的路径
    component: Cart // 将引入的组件展示
  },
  {
    path: '/profile', // 路由的路径
    component: Profile // 将引入的组件展示
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '*', // 其他链接重定向到首页
    redirect: '/home'
  }
]

// 2.创建router路由对象并配置路由规则
const router = new VueRouter({
  routes, // 引入封装的routes:routes
  mode: 'history' //地址栏不带#
})

//暴露出路由的配置
export default router

