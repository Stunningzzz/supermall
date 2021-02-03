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
  data()
  {
    return {
      scroll: null,
      scrollHandler:null
    }
  },
  mounted()
  {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: 3,
      click: true,
      pullUpLoad: true
    });
    this.scrollHandler = position =>
    {
      this.$emit('scroll',position);
    };
    this.onScroll();
    this.scroll.on('scrollEnd',() => {
      this.$emit('scrollEnd');
    });
    this.onpullingUp();
  },
  methods: {
    offScroll(){
      this.scroll.off('scroll',this.scrollHandler);
    },
    onScroll(){
      this.scroll.on('scroll',this.scrollHandler);
    },
    scrollTo(position,delay)
    {
      this.scroll.scrollTo(position.x || 0,position.y || 0,delay);
    },
    onpullingUp(){
      this.scroll.on('pullingUp',() =>
      {
        this.$emit('pullingUp');
      });
    },
    finishPullUp()
    {
      this.scroll.finishPullUp();
    },
    refresh()
    {
      console.log('----');
      this.scroll.refresh();
    },
    onceRefresh(){
      this.scroll.once('refresh',() => {
        this.$emit('refresh');
      })
    }
  }
  }
</script>

<style scoped>

</style>