<template>
	<div>
		<div class="header flex-middle">
			<div class="unit">
				<span>我的余额（元）</span>
				<span class="blance-price">888.00</span>
			</div>
			<div class="unit-0"><a href="#" class=" blance-btn">提现</a></div>
		</div>
		<ul>
			<li v-for="item in items" class="flex-middle list">
				<div class="unit">
					<h2>{{item.wcNumber}}</h2>
					<span v-timer="item.wcTime"></span>
				</div>
				<div class="unit-0 price">{{item.wcAmount}}</div>
			</li>
		</ul>
	</div>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.header{
		height:2.67rem;
		background: url('../../assets/image/balan_bg.png') repeat top left;
		background-size:100% 100%;
		color:#fff;
		padding: 0 0.67rem;
	}
	.blance-price{
		display:block;
		font-size: @size14;
	}
	.blance-btn{
		display:inline-block;color: #fff;
		width: 1.6rem;height:0.8rem;line-height: 0.8rem;text-align:center;background-color: #fec4ab;
	}
	.list{
		.plr(0.43rem,0);
		height:1.47rem;background-color:#fff;
		margin-top: 0.37rem;
	}
	.price{
		vertical-align: middle;color: @active;
	}
</style>
<script type="text/javascript">
	export default{
		name:"blance",
		data(){
			return{
				items:[],
				page:{
					memberId:this.$store.getters.user.id,
					pageNum:1,
					pageSize:6
				}
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				let that=this;
				axios.get(API.drawCash,{params:this.page}).then(
					function(response){
						if(response.data.code=="001"){
							that.items=response.data.data.list;
						}
					}
				)
			}
		}
	}
</script>