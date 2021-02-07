<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      scrollHandler: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 0,
      click: true,
      pullUpLoad: true,
    });
    this.scrollHandler = (position) => {
      this.$emit("scroll", position);
    };
    this.scroll.on("scrollEnd", () => {
      this.$emit("scrollEnd");
    });
  },
  methods: {
    offScroll() {
      this.scroll.off("scroll", this.scrollHandler);
    },
    onScroll() {
      this.scroll.on("scroll", this.scrollHandler);
    },
    scrollTo(position, delay) {
      this.scroll.scrollTo(position.x || 0, position.y || 0, delay);
    },
    oncePullingUp() {
      if (!this.hasPullingUp) {
        console.log("监听PullingUp");
        this.hasPullingUp = true;
        this.scroll.once("pullingUp", () => {
          this.hasPullingUp = false;
          this.$emit("pullingUp");
        });
      }
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh(param) {
      this.scroll.refresh();
    },
    onceRefresh() {
      this.scroll.once("refresh", () => {
        console.log("refresh");
        this.$emit("refresh");
      });
    },
    onRefresh() {
      this.scroll.on('refresh',() => {
        this.$emit('refresh');
      })
    },
    enable(){
      this.scroll.enable();
    },
    disable(){
      this.scroll.disable();
    }
  },
};
</script>

<style scoped>
</style>