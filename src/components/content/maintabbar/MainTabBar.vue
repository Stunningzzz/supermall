<template>
  <tab-bar>
    <tab-bar-item is-active="true" path="/home">
      <img slot="icon-img" src="~assets/img/biaoqianA01_shouye-76.svg" alt="">
      <img slot="icon-img-active" src="~assets/img/1biaoqianA01_shouye-76.svg" alt="">
      <span slot="icon-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/categories">
      <img slot="icon-img" src="~assets/img/biaoqianA01_fenlei-77.svg" alt="">
      <img slot="icon-img-active" src="~assets/img/1biaoqianA01_fenlei-77.svg" alt="">
      <span slot="icon-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shopping-cart">
      <img slot="icon-img" src="~assets/img/biaoqianA01_gouwuche-79.svg" alt="">
      <img slot="icon-img-active" src="~assets/img/1biaoqianA01_gouwuche-79.svg" alt="">
      <span slot="icon-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="icon-img" src="~assets/img/biaoqianA01_wode-10.svg" alt="">
      <img slot="icon-img-active" src="~assets/img/1biaoqianA01_wode-10.svg" alt="">
      <span slot="icon-text">用户</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
const TabBar = () => import('components/common/tabbar/TabBar');
const TabBarItem = () => import('components/common/tabbar/TabBarItem');

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>