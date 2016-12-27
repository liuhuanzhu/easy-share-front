<template>
	<ul class="flex-center footer">
		<li 
			v-for="(item,index) in items" 
			class="unit flex-center footer_li-container flex-middle flex-vertical">
			<span class="iconfont footer-icon" :class="item.icon"></span>{{item.link}}
		</li>
	</ul>
</template>
<style  lang="less">
	@import '../assets/less/common.less';
	.active{
		color: @active;
	}
	.footer{
		border-top: 1px solid @borderColor;
	}
	.footer_li-container{
		height: 1.28rem;font-size:@size;
	}
	.footer-icon{
		font-size: 0.48rem;line-height: 1.4;
		width: 100%;text-align: center;
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				items:[
					{link:"买买买",icon:"icon-i-shop"},
					{link:"赚零花",icon:"icon-i-rmb"},
					{link:"看我的",icon:"icon-i-my"}
				]
			}
		}
	}
</script>
