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
      scroll: null
    }
  },
  mounted()
  {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: 3,
      click: true,
      pullUpLoad: true
    })
    this.scroll.scrollerHeight = 0;
    this.scroll.on('scroll',position =>
    {
      this.$emit('scroll',position);
    });
    this.scroll.on('scrollEnd',() => {
      this.$emit('scrollEnd');
    })
    this.scroll.on('pullingUp',() =>
    {
      this.$emit('pullingUp');
    });
  },
  methods: {
    scrollTo(position,delay)
    {
      this.scroll.scrollTo(position.x || 0,position.y || 0,delay);
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
    setScrollerHeight(){

    }
  }
}
</script>

<style scoped>

</style>