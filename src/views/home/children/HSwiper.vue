<template>
  <swiper :width="320" :height="200" :pItems="swiperItems" :pTransTime="300">
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";

export default {
  name: "HSwiper",
  props:{
    swiperItems:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    Swiper,
  }
}
</script>
<style scoped>
</style>