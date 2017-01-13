<template>
	<li class="product" @click="toDetail">
		<div class="product_img-body"><img :src="product.pbUrl" class="product_img" /></div>
		<h2 class="product_title">{{product.pbTitle}}</h2>
		<div>
			<span class="price realPrice">{{product.pbRealPrice}}</span>
			<span class="price curPrice">{{product.pbPrice}}</span>
		</div>
		<div class="brokerage"><i class="iconfont icon-i-yong"></i>可获得10%的分佣</div>
		<v-share></v-share>
	</li>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.product{
		position:relative;
		width: 4.69rem;border: 1px solid @borderColor;margin-bottom: 0.21rem;
		padding-bottom: 0.14rem;overflow:hidden;
	}
	.product_img,.product_img-body{
		display:inline-block;width:4.69rem;height:4.69rem;overflow:hidden;
	}
	.product_title{
		margin: 0.13rem;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    height: 1.07rem;
	}
	.price{
		margin-left: 0.13rem;
	}
	.realPrice{
		color:#fd6801;
		font-size:0.37rem;
	}
	.curPrice{
		text-decoration: line-through;color:#999999;
	}
	.brokerage{
		height:0.64rem;line-height: 0.6rem;
	}
	.icon-i-yong{
		color: #eb5037;margin: 0 0.13rem;vertical-align: middle;height:0.64rem;line-height: 0.64rem;
	}
</style>
<script type="text/javascript">
	import vShare from '../../components/vShare.vue'
	export default{
		props:{
			product:{
				type:Object
			}
		},
		methods:{
			toDetail(){
				router.push({name:"profit"});
			}
		},
		components:{
			vShare
		}
	}
</script>