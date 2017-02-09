import Vue from 'vue'
import store from './store/store.js'
import App from './App'
import router from './router.js'
import * as config from './config.js'
import axios from 'axios';
import * as Util from './util.js'


window.axios=axios.create({
	baseURL:"http://wx.ez4s.com/easyshare-client/"
})
window.API=config.Api;
const app=new Vue({
	router,
	store,
	...App
}).$mount("#app")
