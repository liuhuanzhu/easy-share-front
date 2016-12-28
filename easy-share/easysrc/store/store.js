import Vue from 'vue'
import Vuex from 'vuex'
import common from './module/common.js'

Vue.use(Vuex);
const store=new Vuex.Store({
	mudules:{
		common
	}
})

export default store