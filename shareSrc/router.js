import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes=[
	{
		name:"*",
		path:"/",
		component:(resolve)=>require(['./page/home/index.vue'],resolve)
	},
	{
		name:"home",
		path:"/home",
		component:(resolve)=>require(['./page/home/index.vue'],resolve)
	},
	{
		name:"profit",
		path:"/profit",
		component:(resolve)=>require(['./page/profit/index.vue'],resolve)
	},
	{
		name:"user",
		path:"/user",
		component:(resolve)=>require(['./page/user/index.vue'],resolve)
	},
	{
		name:"userEdit",
		path:"/userEdit",
		component:(resolve)=>require(['./page/user/userEdit.vue'],resolve)
	},
	{
		name:"blance",
		path:"/blance",
		component:(resolve)=>require(['./page/blance/index.vue'],resolve)
	}
]

const router=new Router({
	
	routes
})


router.beforeEach((to,from,next)=>{
	//console.log(to);
	//console.log(from);
	next();
})

export  default router;