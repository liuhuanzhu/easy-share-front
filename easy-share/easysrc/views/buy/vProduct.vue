<template>
	<li class="buy_li">
		<div :style="backgroundImage" class="buy_li-image"></div>
		<div class="buy_li-body">
			<p class="buy_li-title">{{item.pbTitle}}</p>
			<div>
				<v-price :price="item.pbRealPrice" :type="parseInt(1)"></v-price>
				<v-price :price="item.pbPrice" :line="true" :type="parseInt(2)"></v-price>
			</div>
			<p class="commission"><span class="iconfont icon-i-yong"></span>最高可获10%分佣</p>
			<v-share></v-share>
		</div>
	</li>
</template>
<style lang="less">
	@import '../../assets/less/common.less';
	.buy_li{
		width: 4.58rem;
		border: 1px solid @borderColor;
		margin-top: 0.27rem;
		padding-bottom: 0.27rem; 
	}
	.buy_li-image{
		background-size: 100% 100%;
		height:4.58rem;width: 4.58rem;
		overflow: hidden;
		border-bottom: 1px solid @borderColor;
		background-position: left center;
		background-repeat: no-repeat;
		background-clip: content-box;
		-webkit-background-clip: content-box;
		padding-right: 5px;
	}
	.buy_li-body{
		padding:0 0.27rem 0 0.13rem;
		position:relative;
	}
	.buy_li-title{
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    margin: 0.14rem 0 0 0;
	    height:0.9rem;
	}
	.icon-i-yong{
		font-size:@size14;color: @active;vertical-align: top;margin-right: 0.05rem;
	}
</style>
<script type="text/javascript">
	import vPrice from '../../components/vPrice.vue'
	import vShare from '../../components/vShare.vue'
	export default{
		props:{
			item:{
				type:Object
			}
		},
		computed:{
			backgroundImage(){
				return{
					backgroundImage:'url('+this.item.pbUrl+")"
				}
			}
		},
		components:{
			vPrice,vShare
		}
	}
</script>