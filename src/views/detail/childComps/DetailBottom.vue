<template>
  <div class="detail-bottom">
    <div class="icon">
      <span class="iconfont icon-kefu"></span>
      <span>客服</span>
    </div>
    <div class="icon">
      <span class="iconfont icon-dianpu"></span>
      <span>店铺</span>
    </div>
    <div class="icon">
      <span class="iconfont icon-shoucang"></span>
      <span>收藏</span>
    </div>
    <div class="join-cart" @click="addCart">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  methods:{
    addCart(){
      this.$emit('addCart');
    }
  }
}
</script>

<style scoped>
  .detail-bottom{
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: var(--color-background);
    bottom:0;
    display: flex;
    height: 49px;
    text-align: center;
    font-size: 12px;
  }
  .icon{
    width: 42px;
  }
  .iconfont{
    margin: 0 4px 0 3px;
    font-size: 24px;
    line-height: 33px;
  }
  .icon-kefu{
    color: var(--color-tint);
  }
  .join-cart,.buy{
    line-height: 49px;
    flex: 1;
  }
  .buy{
    color: var(--color-background);
  }
  .join-cart{
    background-color: #FFE714;
  }
  .buy{
    background-color: #FD6499;
  }
</style>