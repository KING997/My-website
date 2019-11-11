import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let RouteList = [{
  path: '/',
  redirect: { name: 'Home' }
},
{
  path: '/index',
  name: 'Home',
  component: resolve => require(['@/views/Layout/Index.vue'], resolve),
  meta: {
    title: '首页',
  },
  children: [
    {
      path: '/gobang',
      props: true,
      meta: { title: '五子棋', },
      component: resolve => require(['@/views/Gobang/Index.vue'], resolve),
    },
    {
      path: '/table',
      props: true,
      meta: { title: '表格组件', },
      component: resolve => require(['@/views/Table/Index.vue'], resolve),
    },
    {
      path: '/dialog',
      props: true,
      meta: { title: '弹窗组件', },
      component: resolve => require(['@/views/Dialog/Index.vue'], resolve),
    },
    {
      path: '/tinymce',
      props: true,
      meta: { title: '富文本编辑器', },
      component: resolve => require(['@/views/Tinymce/Index.vue'], resolve),
    },
    {
      path: '/mixin',
      props: true,
      meta: { title: '动效合集', },
      component: resolve => require(['@/views/Mixin/Index.vue'], resolve),
    },
    {
      path: '/backtotop',
      props: true,
      meta: { title: '返回顶部', },
      component: resolve => require(['@/views/BackToTop/Index.vue'], resolve),
    },
    {
      path: '/todolist',
      props: true,
      meta: { title: 'To Do List', },
      component: resolve => require(['@/views/ToDoList/Index.vue'], resolve),
    },
    // {
    //   path: '/bmap',
    //   props: true,
    //   meta: { title: '百度地图', },
    //   component: resolve => require(['@/views/BMap/Index.vue'], resolve),
    // },
    // {
    //   path: '/amap',
    //   props: true,
    //   meta: { title: '高德地图', },
    //   component: resolve => require(['@/views/AMap/Index.vue'], resolve),
    // },
  ]
},
// {
//   path: '/ceshi',
//   name: 'ceshi',
//   meta: { title: '测试' },
//   component: resolve => require(['@/views/Test/Index.vue'], resolve)
// },
{
  path: '/login',
  name: 'Login',
  meta: { title: '登录页面' },
  component: resolve => require(['@/views/Login/Index.vue'], resolve)
},
{
  path: '/error',
  name: 'Error',
  meta: { title: '404页面' },
  component: resolve => require(['@/views/Error/Index.vue'], resolve)
}
]
export default new Router({ routes: RouteList })
