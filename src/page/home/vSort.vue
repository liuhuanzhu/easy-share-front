<template>
	<ul class="flex-middle sort">
		<li v-for="(item,index) in items" class="unit" :class="{active:item.active}">
			<span class="sort-body">{{item.name}}<i class="iconfont icon-i-arrow" v-if="index>0"></i></span>
		</li>
	</ul>
</template>
<style lang="less">
	@import '../../assets/less/common.less';
	.sort{
		text-align: center;
		height: 1.2rem;
		font-size: @size14;
	}
	.sort-body{
		height: 1.2rem;
	}
	.iconfont{
		display:inline-block;
		margin-left: 0.05rem;
		font-size:0.27rem;
	}
	.active{
		color: @active;
	}
</style>
<script type="text/javascript">
	export default{
		name:"sort",
		data(){
			return{
				items:[
					{name:"默认",active:true},
					{name:"销量",active:false},
					{name:"新品",active:false},
					{name:"价格",active:false}
				]
			}
		}
	}
</script>