<template>
  <div class="top-nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavBar",
  computed:{
  }
}
</script>

<style scoped>
  .top-nav-bar{

    line-height: 44px;
    display: flex;
    text-align: center;
  }
  .top-nav-bar > .left,
  .top-nav-bar > .right{
    width: 60px;
  }

  .top-nav-bar > .center{
    flex-grow: 1;
  }
</style>