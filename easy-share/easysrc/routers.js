import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const routes=[
	{
		path:"/",
		name:"index",
		component:resolve=>require(['./views/buy/index.vue'],resolve)
	},
	{
		path:"/buy",
		name:"buy",
		component:resolve=>require(['./views/buy/index.vue'],resolve)
	},
	{
		path:"/profit",
		name:"profit",
		component:resolve=>require(['./views/profit/index.vue'],resolve)
	}
]

const router =new Router({
	routes:routes
})

export default router

