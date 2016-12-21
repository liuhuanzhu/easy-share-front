import Vue from 'vue'
import App from './App'
import router from './routers'
const app=new Vue({
  router,
  ...App
}).$mount("#app")

