<template>
	<span class="price" :style="styleComputed">{{priceComputed}}</span>
</template>
<style lang="less" >
	@import '../assets/less/common.less';
	.price{
		text-decoration: line-through;
	}
	.price:before{
		content: "￥";font-family: "Helvetica Neue", Helvetica, STHeiTi;font-size:0.32rem;
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			line:{
				type:Boolean,
				default:false
			},
			type:{
				type:Number,
				default:0
			},
			price:{
				type:Number,
				default:0
			},
			length:{
				type:Number,
				default:2
			}
		},
		computed:{
			priceComputed(){
				if(this.price){
					return parseFloat(this.price).toFixed(this.length);
				}
				return 0.00;
			},
			styleComputed(){
				return{
					color:this.getColor(),
					fontSize:this.getSize(),
					textDecoration:(this.line==true)?"line-through":'none'
				}
			}
		},
		methods:{
			getColor(){
				if(this.type==0){
					return "#303030";
				}else if(this.type==1){
					return "#ff6600";
				}else{
					return "#999999";
				}
			},
			getSize(){
				if(this.type==0){
					return "0.37rem";
				}else if(this.type==1){
					return "0.43rem";
				}else{
					return "0.32rem";
				}
			}
		}
	}
</script>