<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
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
    font-size:@size;
    padding: 0;
  }
</style>
