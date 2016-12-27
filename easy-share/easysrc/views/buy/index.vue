<template>
	<div class="flex-vertical">
		<v-sort class="unit-0"></v-sort>
		<v-search  class="unit-0"></v-search>
		<div class="buy-container scroll-view unit-0">
			<ul class="buy_ul flex-left">
				<v-product v-for="item in items" :item="item" class="unit-0"></v-product>
			</ul>
		</div>
		<v-footer  class="unit-0"></v-footer>
	</div>
</template>
<style lang="less">
	@import '../../assets/less/common.less';
	.buy-container{
		background-color: #fff;
		.plr;
		max-height: 12.6rem;
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
			}
		},
		components:{
			vSearch,vSort,vFooter,vProduct
		}
	}
</script>