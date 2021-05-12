<template>
  <swiper
    class="home-swiper"
    ref="swiper"
  >
    <a
      v-for="item in banner.list"
      :key="item.link"
      class="slider-item"
      :href="item.link"
    >
      <img :src="item.image" @load="SwiperHasLoad"/>
      <div></div>
    </a>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper';

export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    Swiper,
  },
  watch: {},
  methods: {
    SwiperHasLoad() {
      if (!this.isLoad) {
        this.isLoad = true;
        this.$refs.swiper.init();
        this.$emit('SwiperHasLoad');
      }
    },
  },
};
</script>

<style scoped>
.home-swiper {
  width: 320px;
  height: 180px;
}

.slider-item {
  width: 320px;
  /* 父元素是wrapper(display:flex;position:absolute)没有高度 所以这里的高度必须设置*/
  height: 180px;
}

.slider-item img {
  width: 100%;
  height: 100%;
}
</style>