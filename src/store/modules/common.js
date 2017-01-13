/**
 * [LOAD_TYPE 加载状态]
 * @type {String}
 */
const LOAD_TYPE="loadding";
/**
 * [USER 用户]
 * @type {String}
 */
const USER="user";
const store={
	state:{
		loadding:false,
		user:{
			mbOpenId:"oWINev7aEuI-By-XhkhPrhhHNk3Q",
			id:"d345b4117e484e0bbed292018d94f604",
			mbMonthBalance:0,
			mbBalance:0
		}
	},
	actions:{
		[LOAD_TYPE]({commit},type){
			commit([LOAD_TYPE],type);
		},
		[USER]({commit},user){
			commit([USER],user);
		}
	},
	mutations:{
		[LOAD_TYPE](state,type){
			state.loadding=type;
		},
		[USER](state,user){
			state.user=user;
		}
	},
	getters:{
		loadding(state){
			return  state.loadding;
		},
		user(state){
			return state.user;
		}
	}
}

export default store;