<template>
	<div>
		<div class="header">
			<div class="flex-middle header-profit">
				<div class="unit header-border">
					<span>本月收益（元）</span>
					<span class="header-price">{{monthProfit}}</span>
				</div>
				<div class="unit">
					<span>累计收益（元）</span>
					<span class="header-price">{{totalProfit}}</span>
				</div>
			</div>
			<div class="header-info">不含未结算部分</div>
			<div class="flex-middle header-legend">
				<span class="unit">加入会员可获得更高收益</span>
				<i class="iconfont icon-i-right unit-0"></i>
			</div>
			<v-tab :items="items" :itemClick="itemClick"></v-tab>
		</div>
		<div class="body">
			<ul>
				<li v-for="item in profits" class="body-container">
					<div class="body-header">
						<div>
							<h2 class="body-header_num">{{item.opNumber}}</h2>
							<span class="body-header_time" v-timer="item.opStartTime"></span>
						</div>
						<div class="body-header_state">{{item.opStateMessage}}</div>
					</div>
					<div class="flex-top body-content">
						<div class="unit-0"><img :src="item.pbMainPicture" class="body-content_img"></div>
						<div class="unit">
							<p class="body-content_title">{{item.pbTitle}}</p>
							<p>实付:<span>{{item.omRealAmount}}</span></p>
						</div>
					</div>
					<div class="body body-bottom">分润收益:<span>{{item.opAmount}}</span></div>
				</li>
			</ul>
		</div>
		<v-footer :index="parseInt(1)"></v-footer>
	</div>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.header{
		background:url('../../assets/image/balan_bg.png') repeat top left;
		background-size:100% 100%;
	}
	.header-profit{
		.plr(0.4rem,0);
		padding-top:0.4rem;
		text-align: center;
		color: #fff;
	}
	.header-border{
		border-right: 1px solid #fff;
	}
	.header-price{
		display:block;
		font-size: 0.37rem;
		font-weight: bold;
	}
	.header-info{
		.plr(0.4rem,0);
		color:#fff;
		height:0.8rem;line-height: 0.8rem;text-align:center;
	}
	.header-legend{
		.plr(0.4rem,0);
		background-color:#fec4ab;color:#ef6b36;height:0.96rem;
	}
	.body-container{
		margin-top: 0.32rem;
		box-shadow: 0 0 0.27rem @borderColor;
	}
	.body-header{
		position:relative;
		.plr(0.4rem,0.27rem);
		background-color:#fff;
	}
	.body-header_state{
		position:absolute;
		top: 0.27rem;right: 0.4rem;
		color:@lightColor;
	}
	.body-header_time{
		color:@lightColor;
	}
	.body-content{
		.plr(0.4rem,0.27rem);
	}
	.body-content_img{
		display:block;width: 1.33rem;height:1.33rem;
		margin-right:0.27rem;
	}
	.body-bottom{
		.plr(0.4rem,0);
		background-color:#fff;
		height:0.85rem;line-height:0.85rem;
	}
</style>
<script type="text/javascript">
	import vFooter from '../../components/vFooter.vue'
	import vTab from '../../components/vTab.vue'
	export default{
		name:"profit",
		data(){
			return{
				items:[
					{name:"全部",active:true},
					{name:"已结算",active:false},
					{name:"未结算",active:false}
				],
				profits:[],
				page:{
					memberId:this.$store.getters.user.id,
					type:"all",
					pageNum:1,
					pageSize:6
				}

			}
		},
		mounted(){
			this.getBalance();
			this.getData();
		},
		methods:{
			getData(){
				let that=this;
				axios.get(API.profit,{params:this.page}).then(
					function(response){
						if(response.data.code=="001"){
							that.profits=response.data.data.list;
						}
					}
				)
			},
			getBalance(){
				let that=this;
				let url=API.info+this.$store.getters.user.id+".json";
				axios.get(url).then(
					function(response){
						if(response.data.code=="001"){
							that.$store.commit("user",response.data.data);
						}
					}
				)
			},
			itemClick(index){
				this.items.forEach(item=>{
					item.active=false;
				})
				this.items[index].active=true;
			}
		},
		computed:{
			monthProfit(){
				return this.$store.getters.user.mbMonthBalance.toFixed(4);
			},
			totalProfit(){
				return this.$store.getters.user.mbBalance.toFixed(4);
			}
		},
		components:{
			vFooter,vTab
		}
	}
</script>