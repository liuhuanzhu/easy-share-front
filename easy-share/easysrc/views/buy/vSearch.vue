<template>
	<div class="flex-left search-container">
		<input type="text" class="unit search_input" placeholder="请输入您要搜索的商品" /><a href="#" class="iconfont icon-i-search  unit-0"></a>
	</div>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.search-container{
		.plr;
		height:1rem;
	}
	.search_input{
		height:0.96rem;border-radius: 0.21rem;padding-left: 0.13rem;background-color: #eeeeee;border: none;
	}
	.icon-i-search{
		width: 0.8rem;text-align: center;height:0.96rem;line-height: 0.96rem;font-size:0.53rem;color: @color;
	}
</style>
<script type="text/javascript"></script>