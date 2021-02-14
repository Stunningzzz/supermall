<template>
  <top-nav-bar class="cate-top">
    <div slot="center">
      分类
    </div>
  </top-nav-bar>
</template>

<script>
import TopNavBar from 'components/common/topnavbar/TopNavBar'

export default {
  name:'CateTop',
  components:{
    TopNavBar
  }
}
</script>

<style scoped>
  .cate-top{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>