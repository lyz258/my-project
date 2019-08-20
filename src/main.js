// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Text from './components/text.vue'
import demo1 from './components/demo1.vue'

// import Users from './components/Users'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.component("users",Users)
//配置路由
const router =new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/helloworld",component:HelloWorld},
    {path:"/text",component:Text},
    {path:"/demo1",component:demo1}
  ],
  mode:"history"
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
