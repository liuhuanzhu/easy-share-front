<template>
	<div>
		<v-sort></v-sort>
		<v-search></v-search>
		<ul class="product-container">
			<v-product v-for="item in items" :product="item"></v-product>
		</ul>
		<v-footer :index="parseInt(0)"></v-footer>
	</div>
</template>
<style type="text/css">
	.product-container{
		display: flex;
		display: -webkit-flex;
		flex-flow:row wrap;
		padding: 0 0.21rem;
		justify-content: space-between;
		background-color: #fff;
	}
</style>
<script type="text/javascript">
	import vFooter from 'components/vFooter'
	import vSort from './vSort.vue'
	import vProduct from './vProduct.vue'
	import vSearch from './vSearch.vue'
	export default{
		name:"home",
		data(){
			return{
				items:[]
			}
		},
		created(){

		},
		methods:{
			getData(){
				var url=API.products;
				this.$http.get(url).then(
					function(data){
						if(data.body.code=="001"){
							this.items=data.body.data.list;
						}else{	
							console.log(data.body.info);
						}
					}
				)
			}
		},
		beforeRouteEnter(to,from,next){
			
			var url=API.products;
			axios.get(url)
			  .then(function (response) {
			    console.log(response);
			    next((vm)=>{
			    	vm.items=response.data.data.list;
			    });
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},
		beforeRouteLeave(to,from,next){
			console.log("home beforeRouteLeave");
			next(true);
			//next(false);
		},
		watch:{
			$route(){
				console.log(12);
			}
		},
		components:{
			vFooter,vSort,vSearch,vProduct
		}
	}
</script>