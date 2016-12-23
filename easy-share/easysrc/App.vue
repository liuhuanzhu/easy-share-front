<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
    <v-sort></v-sort>
  </div>
</template>
<script>
import vFooter from './components/vFooter.vue'
import vSort from './views/buy/vSort.vue'
export default {
    data(){
      return{
        
      }
    },
    created(){
      console.log(1212);
    },
    components:{
      vFooter,vSort
    }
}
</script>
<style lang="scss">
  @import './assets/css/common.css';
  @import '~mobi.css/src/mobi';
</style>
<style lang="less">
  @import './assets/less/common.less';
  #app{
    position: absolute;
    top: 0;right: 0;left: 0;bottom: 0;width: 100%;
    background-color: @bgColor;
    color: @color;
  }
</style>
