<template>
	<transition
		name="slide"
		enter-active-class="animated slideInUp"
		leave-active-class="animated slideOutDown">
		<ul class="footer flex-middle" v-show="enter">
			<li v-for="(item,index) in items" class="unit" :class="{active:item.active}" @click="itemClick(index)">
				<i :class="item.class"></i>
				<span>{{item.name}}</span>
			</li>
		</ul>
	</transition>
</template>
<style lang="less" scoped>
	@import '../assets/less/common.less';
	.footer{
		position: absolute;
		left: 0;width: 100%;right: 0;bottom: 0;height: 1.33rem;
		text-align: center;
		border-top: 1px solid @borderColor;
		font-size:@size14;
		background-color:@bgColor;
	}
	.iconfont{
		font-size: 0.48rem;
		display: block;
	}
	.active{
		color:@active;
	}
</style>
<script type="text/javascript">
	export default{
		name:"footer",
		props:{
			index:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				items:[
					{class:"iconfont icon-i-shop",name:"买买买",active:true},
					{class:"iconfont icon-i-rmb",name:"赚零花",active:false},
					{class:"iconfont icon-i-my",name:"我的",active:false}
				],
				enter:false
			}
		},
		methods:{
			itemClick(index){
				switch(index){
					case 0:
					this.$router.push("home");
					break;
					case 1:
					this.$router.push("profit");
					break;
					case 2:
					this.$router.push("user");
					break;
				}
			}
		},
		mounted(){
			this.items.forEach((item)=>{
				item.active=false;
			})
			this.items[this.index].active=true;
			this.enter=true;
		}
	}
</script>