import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource);
Vue.http.options.root = 'http://share.ez4s.com/easyshare-client/';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

Vue.http.interceptors.push((request,next)=>{
	console.log(request);
	next((response)=>{
		console.log(response.data);
	})
})