<template>
  <div id="app">
      <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutRight"
        
      >
        <router-view class="page"></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    enter(){
      
    }
  }
}
</script>

<style lang="less">
  @import '~mobi.css';
  @import 'assets/less/common.less';
  @import 'assets/css/common.css';
  #app,.page{
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;
    background-color: @bgColor;
    font-size: @size;
    color: @color;
    box-sizing: border-box;
  }
</style>
