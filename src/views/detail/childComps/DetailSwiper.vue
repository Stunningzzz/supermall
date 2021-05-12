<template>
  <div class="swiper-wrapper" v-if="topImages">
    <swiper class="detail-swiper" ref="swiper" :indicatorStyle="indicatorStyle">
      <div class="slider-item" v-for="src in topImages" :key="src">
        <img :src="src" @load="SwiperHasLoad" />
      </div>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";

export default {
  name: "DetailSwiper",
  components: { Swiper },
  data() {
    return {
      isLoad: false,
      indicatorStyle: {
        left: "38%",
        top: "66%",
      },
    };
  },
  props: {
    topImages: {
        type: Array,
        default() {
          return [];
        },
    },
  },
  methods: {
    SwiperHasLoad() {
      if (!this.isLoad) {
        this.isLoad = true;
        // 只有init一次就够了!!!
        this.$refs.swiper.init();
        this.$emit("SwiperHasLoad");
      }
    },
  },
};
</script>

<style scoped>
.swiper-wrapper {
  height: 345px;
  overflow: hidden;
}
.detail-swiper {
  width: 320px;
  height: 500px;
}
.slider-item {
  width: 320px;
  height: 500px;
}
.slider-item img {
  width: 100%;
  height: 100%;
}
</style>