import Vue from 'vue'
import App from './App'
import router from './routers'
import vueResource from 'vue-resource'
import API from './API'
import config from './config'

Vue.use(vueResource);

window.API=API;
const app=new Vue({
  router,
  ...App
}).$mount("#app")

