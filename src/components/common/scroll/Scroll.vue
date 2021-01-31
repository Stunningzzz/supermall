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
      probeType: 2,
      click: true,
      pullUpLoad: true
    })
    this.scroll.on('scroll',position =>
    {
      this.$emit('scroll',position);
    });
    this.scroll.on('pullingUp',() =>
    {
      this.$emit('pullingUp');
    })
  },
  methods: {
    backTop()
    {
      this.scroll.scrollTo(0,0,500);
    },
    finishPullUp()
    {
      this.scroll.finishPullUp();
    },
    refresh()
    {
      console.log('-----');
      this.scroll.refresh();
    }
  }
}
</script>

<style scoped>

</style>