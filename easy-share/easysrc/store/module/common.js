
const LOADDING="loadding"

const common={
	state:{
		loadding:false
	},
	actions:{
		[LOADDING_SHOW]({commit},val){
			commit([LOADDING_SHOW],val)
		}
	},
	mutations:{
		[LOADDING_SHOW](state,val){
			state.loadding=val;
		}
	},
	getters:{
		loadding(state){
			return state.loadding;
		}
	}
}

export default common