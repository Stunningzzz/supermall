<template>
  <div id="home">
    <home-top></home-top>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeTop from "./children/HomeTop";
import HomeSwiper from "./children/HomeSwiper";



export default {
  name: "Home",
  components:{
    HomeSwiper,
    HomeTop
  }
}
</script>

<style scoped>

</style>
