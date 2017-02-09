<template>
	<ul class="flex-middle tab">
		<li v-for="(item,index) in items" :class="{active:item.active}"
			@click="itemClick(index)" class="unit tab-li">
			<a  class="tab-a">{{item.name}}</a>
		</li>
	</ul>
</template>
<style lang="less">
	@import '../assets/less/common.less';
	.tab{
		background-color:#fff;
	}
	.tab-a{
		height:1.07rem;line-height: 1.07rem;display:block;color:@color;text-align: center;font-size: 0.37rem;
	}
	.tab-li.active a{
		border-bottom:0.05rem solid #ff8f04;
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			items:{
				type:Array
			},
			itemClick:{
				type:Function
			}
		}
	}
</script>