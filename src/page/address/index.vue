<template>
	<div>
		<ul class="list-body">
		<li v-for="item in items" class="list-container">
				<div class="list-c-top flex-middle flex-vertical">
					<div class="list-add-user">
						{{item.tlPersonName}}&nbsp;&nbsp;{{item.tlPersonContact}}
					</div>
					<p class="list-add-info">
						{{item.tlProvince}}{{item.tlCity}}{{item.tlArea}}{{item.fullAddress}}
					</p>
				</div>
				<div class="list-c-bm flex-middle">
					<div class="unit-0" @click="setDefault(item)">
						<i class="iconfont icon" 
							:class="item.isDefault=='0'?'icon-i-selecter':'icon-i-select'"></i>
						<i class="icon">默认地址</i>
					</div>
					<div class="unit flex-right">
						<span class="btn-gap">
							<i class="iconfont icon-i-edit icon"></i><i class="icon">编辑</i>
						</span>
						<span><i class="iconfont icon-i-delete icon"></i><i class="icon">删除</i></span>
					</div>
				</div>
			</li>
		</ul>
		<div class="btn-body"><a  class="btn-max">新建地址</a></div>
	</div>
</template>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.list-body{
		position:absolute;top: 0;left: 0;right:0;bottom:1.6rem;
		
	}
	.list-container{
		.plr;
		background-color: #fff;
		margin-bottom: 0.27rem;
		border-bottom:1px solid @borderColor;
		
	}
	.list-container:not(:first-child){
		border-top:1px solid @borderColor;
	}
	.list-c-top{
		height:2.0rem;
		border-bottom:1px solid @borderColor;
	}
	.list-add-user{
		height:0.8rem;line-height: 0.8rem;
		color: @color;
	}
	.list-add-info{
		color: @lightColor;
	}
	.list-c-bm{
		height:1.2rem;
	}
	.btn-body{
		position:absolute;left: 0;right:0;bottom:0;
	}
	.icon{
		display:inline-block;
		vertical-align: middle;
		font-style: normal;
		color:@lightColor;
	}
	.icon-i-selecter{
		color:@active !important;
	}
	.iconfont{
		color:@lightColor;
		margin-right:0.05rem;
	}
	.btn-gap{
		margin-right: 0.23rem;
	}
</style>
<script type="text/javascript">
	export default{
		name:"address",
		data(){
			return{
				items:[]
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				let that=this;
				axios.get(API.address,{params:{mbId:this.$store.getters.user.id}}).then(
					function(response){
						that.items=response.data.data;
					}
				)
			},
			setDefault(item){
				this.items.forEach(it=>{
					it.isDefault="1";
				})
				item.isDefault="0";
			}
		}
	}
</script>