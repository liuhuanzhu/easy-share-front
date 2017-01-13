<template>
	<div>
		<div class="edit">
			<div class="flex-middle eidt_top">
				<span class="edit_title unit-0">昵称:</span>
				<input type="text"  class="edit_input unit" v-model="user.mbNickname"/>
			</div>
			<div class="flex-middle">
				<span class="edit_title unit-0">联系方式:</span>
				<input type="number" class="edit_input unit" v-model="user.mbMobileNumber"/>
			</div>
		</div>
		<a href="#" class="btn-max" @click.prevent="commitUser">确定</a>
	</div>
</template>
<style lang="less">
	@import '../../assets/less/common.less';
	.edit{
		margin-top: 0.53rem;
		border-top: 1px solid @borderColor;
		border-bottom: 1px solid @borderColor;
		padding-left:0.27rem;
		background-color: #fff;
	}
	.eidt_top{
		border-bottom:1px solid @borderColor;
	}
	.edit_title{
		height: 1.17rem;line-height: 1.17rem;
	}
	.edit_input {
		height:1.17rem;padding-left: 0.27rem;outline:none;border: none;
	}
</style>
<script type="text/javascript">
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				mbNickname:"",
				mbMobileNumber:null
			}
		},
		methods:{
			commitUser(){
				let that=this;
				let url=API.info+this.user.id+".json";
				axios.put(url,this.user).then(
					function(response){
						if(response.data.code=="001"){
							that.$store.commit("user",response.data.data);
							that.$router.back();
						}
					}
				)
			}
		},
		computed:{
			...mapGetters(['user'])
		}
	}
</script>