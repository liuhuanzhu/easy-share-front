<template>
	<div class="flex-left search-container">
		<input type="text" class="unit" placeholder="请输入您要查询的商品名称" />
		<a href="#" class="iconfont icon-i-search unit-0"></a>
	</div>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.search-container{
		height:1.33rem;
		.plr(0.13rem,0.21rem);
		background-color: #fff;
	}
	.unit{
		border-radius: 0.13rem;border: none;padding-left: 0.13rem;background-color:@bgColor;
	}
	.unit-0{
		color: @color;
		width: 1.07rem;text-align:center;font-size:0.48rem;line-height: 1.07rem;
	}
</style>
<script type="text/javascript">
	export default{

	}
</script>