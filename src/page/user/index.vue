<template>
	<div>
		<div class="flex-middle header">
			<div class="header_img unit-0"><img :src="user.mbHead"></div>
			<div class="unit header_info">
				<span>{{user.mbNickname}}</span>
				<span><i class="iconfont icon-i-phone"></i>{{user.mbMobileNumber}}</span>
			</div>
			<div class="unit-0 header_opera iconfont icon-i-right" @click="userEdit"></div>
		</div>
		<div class="flex-left order-header">
			<span class="unit f16">全部订单</span>
			<span class="unit tr">查看全部订单</span>
		</div>
		<ul class="flex-middle order">
			<li v-for="order in orders" class="unit">
				<i :class="order.class"></i>
				<span>{{order.name}}</span>
			</li>
		</ul>
		<div class="flex-middle card">
			<span class="unit">我的余额</span>
			<span @click="goBlance">￥{{user.mbAmount}}<i class="iconfont icon-i-right"></i></span>
		</div>
		<div class="flex-middle card" @click="goAddress">
			<span class="unit">收货地址</span>
			<span class="iconfont icon-i-right" ></span>
		</div>
		<v-footer :index="index"></v-footer>
	</div>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.header{
		.plr(0.48rem,0.48rem);
		color: #fff;
		height: 2.67rem;background: url('../../assets/image/info_bg.png') repeat top left;
		background-size: 100% 100%;
	}
	.header_img{
		width: 1.68rem;height:1.68rem;border-radius: 0.84rem;background-color: green;overflow: hidden;
	}
	.header_info span{
		display:block;padding-left:0.43rem;
	}
	.icon-i-phone{
		vertical-align: middle;
	}
	.header_opera{
		width:1.6rem;
		height:1.6rem;
		line-height:1.6rem;
		text-align:right;
	}
	.order-header{
		.plr(0.48rem,0);
		background-color:#fff;
		height:1.07rem;line-height:1.07rem;border-bottom: 1px solid @borderColor;
	}
	.order{
		.plr(0.48rem,0);
		background-color:#fff;
		height:1.33rem;
		text-align:center;
	}
	.order .iconfont{
		display:block;
	}
	.card{
		.plr(0.48rem,0);
		background-color:#fff;
		margin-top: 0.27rem;height:1.07rem;
	}
	.card .icon-i-right{
		font-size:0.32rem;vertical-align:middle;margin-left: 0.13rem;
	}
</style>
<script type="text/javascript">
	import vFooter from '../../components/vFooter.vue'
	export default{
		data(){
			return{
				orders:[
					{class:"iconfont icon-i-pay",name:"待付款"},
					{class:"iconfont icon-i-go",name:"待发货"},
					{class:"iconfont icon-i-car",name:"已发货"},
					{class:"iconfont icon-i-kf",name:"售后中"}
				],
				user:{},
				index:2
			}
		},
		mounted(){
			console.log("mounted");
			let that=this;
			let url=API.info+this.$store.getters.user.id+".json";
			axios.get(url).then(
				function(response){
					if(response.data.code=="001"){
						that.user=response.data.data;
						that.$store.dispatch("user",that.user);
					}else{
						console.log(response.data.info);
					}
				}
			)
		},
		methods:{
			userEdit(){
				this.$router.push("userEdit");
			},
			goBlance(){
				this.$router.push("blance");
			},
			goAddress(){
				this.$router.push("address");
			}
		},
		beforeRouteEnter(to,from,next){
			next((vm)=>{
				console.log("user beforeRouteEnter");
				console.log(vm);
			})
			//var url=API.products;
			// axios.get(url)
			//   .then(function (response) {
			//     console.log(response);
			//     next((vm)=>{
			//     	vm.items=response.data.data.list;
			//     });
			//   })
			//   .catch(function (error) {
			//     console.log(error);
			//   });
		},
		beforeRouteLeave(to,from,next){
			console.log("user beforeRouteLeave");
			next((vm)=>{
				console.log("user beforeRouteLeave");
				console.log(vm)
			})
		},
		components:{
			vFooter
		}
	}
</script>