import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

import sidebar from './components/sidebar.vue'
import article from './components/article.vue'
import articleDetail from './components/articleDetail.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', components: { default: article, sidebar: sidebar } },
    { path: '/article', components: { default: article, sidebar: sidebar } },
    { path: '/articleDetail/:id', components: { default: articleDetail, sidebar: sidebar } }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
