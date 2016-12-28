<template>
  <div id="app" class="container">
    <router-view></router-view>
    <v-loadding v-show="loadding"></v-loadding>
  </div>
</template>
<script>
   import vLoadding from './components/vLoadding.vue'
export default {
    data(){
      return {
        loadding:false
      }
    },
    components:{
      vLoadding
    }
}
</script>
<style lang="scss">
  @import './assets/css/common.css';
  @import './assets/css/animate.css';
  @import '~mobi.css/src/mobi';
</style>
<style lang="less">
  @import './assets/less/common.less';
  #app{
    position: absolute;
    top: 0;right: 0;left: 0;bottom: 0;width: 100%;
    background-color: @bgColor;
    color: @color;
    font-size:@size;
    padding: 0;
  }
</style>
