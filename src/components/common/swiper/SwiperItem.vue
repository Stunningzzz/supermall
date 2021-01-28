<template>
  <router-link :to="to" class="swiper-item">
    <slot></slot>
  </router-link>
</template>

<script>

export default {
  name: "SwiperItem",
  props:{
    to:{
      type:String,
      default(){
        return ''
      }
    }
  }
}
</script>

<style scoped>
  .swiper-item{
    float: left;
    width: 320px;
    height: 200px;
  }
</style>