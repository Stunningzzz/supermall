<template>
  <top-nav-bar class="home-top">
    <div slot="center">
      购物街
    </div>
  </top-nav-bar>
</template>

<script>
import TopNavBar from "components/common/topnavbar/TopNavBar";

export default {
  name: "HomeTop",
  components:{
    TopNavBar
  }
}
</script>

<style scoped>
  .home-top{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>