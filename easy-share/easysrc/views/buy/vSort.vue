<template>
	<ul class="flex-middle">
		<li v-for="item in items" class="unit flex-center sort_li-container flex-middle">
			<span>{{item.link}}</span>
			<i v-if="item.sort" class="iconfont icon-i-arrow"></i>
		</li>
	</ul>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.sort_li-container{
		position: relative;
		height: 1.2rem;
		font-size: @size14;
	}
	.iconfont{
		font-size:0.27rem;
		line-height: 1.4;
		margin-left:0.05rem;
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				items:[
					{link:"默认",sort:false},
					{link:"销量",sort:true},
					{link:"新品",sort:true},
					{link:"价格",sort:true}
				]
			}
		}
	}
</script>