<template>
	<div>
		<div class="flex-vertical">
			<v-sort class="unit-0"></v-sort>
			<v-search  class="unit-0"></v-search>
		</div>
		<div class="buy-container scroll-view">
			<ul class="buy_ul flex-left">
				<v-product v-for="item in items" :item="item" class="unit-0" @click.prevent="goDetail"></v-product>
			</ul>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<style lang="less">
	@import '../../assets/less/common.less';
	.buy-container{
		position:absolute;top:2.4rem;left:0;width:100%;bottom:1.3rem;
		background-color: #fff;
		.plr;
	}
	.buy_ul{
		flex-flow:row wrap;
		justify-content:space-between;
	}
</style>
<script type="text/javascript">
	import vSort from './vSort.vue'
	import vSearch from './vSearch.vue'
	import vFooter from '../../components/vFooter.vue'
	import vProduct from './vProduct.vue'
	export default{
		name:"buy",
		data(){
			return {
				items:[]
			}
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				this.$http.get(API.manager).then(
					function(data){
						data=data.body;
						if(data.code="001"){
							this.items=data.data.list;
						}else{

						}
					}
				)
			},
			goDetail(){
				
			}
		},
		components:{
			vSearch,vSort,vFooter,vProduct
		}
	}
</script>