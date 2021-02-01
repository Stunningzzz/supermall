<template>
  <swiper class="home-swiper">
    <a v-for="item in swiperItems"
       class="slider-item"
       :href="item.href">
      <img :src="item.src" @load="SwiperHasLoad"/>
    </a>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";

export default {
  name: "HomeSwiper",
  props: {
    swiperItems: {
      type: Array,
      default()
      {
        return []
      }
    }
  },
  data(){
    return {
      isLoad:false
    }
  },
  components: {
    Swiper,
  },
  methods: {
    SwiperHasLoad()
    {
      if (!this.isLoad)
      {
        this.isLoad = true;
        this.$emit('SwiperHasLoad');
      }
    }
  }
}
</script>

<style scoped>
.home-swiper {
  width: 320px;
  height: 200px;
}

.slider-item {
  width: 320px;
  /* 父元素是wrapper(display:flex;position:absolute)没有高度 所以这里的高度必须设置*/
  height: 200px;
}

.slider-item img {
  width: 100%;
  height: 100%;
}
</style>