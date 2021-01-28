<template>
  <div class="swiper" :style="swiperStyle">
    <div class="wrapper" :style="wrapperStyle" @touchstart="touchstart" @touchmove="touchmove"
         @touchend="touchend">
      <a v-for="item in dItems" :href="item.href" :style="swiperStyle">
        <img :src="item.src">
      </a>
    </div>
    <div class="indicator" ref="indicator">
      <slot name="indicator">
        <div class="indicator-icon" :class="iconClass(index)" v-for="(item,index) in pItems">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
let methods = {
  touchstart(e)
  {
    if (this.scrolling)
    {
      return;
    }
    this.preX = e.changedTouches[0].clientX;
    this.startLeft = this.left;
    this.transTime = 0;
    this.stopTimer();
  },
  touchmove(e)
  {
    // 为正表示鼠标向右 为负表示向左
    const mouseMove = e.changedTouches[0].clientX - this.preX;
    this.left = this.left + mouseMove;
    this.check();
    this.preX = e.changedTouches[0].clientX;
  },
  touchend(e)
  {
    let distance = (this.left - this.startLeft) % this.width;
    if (Math.abs(distance) >= this.width * this.ratio)
    {
      distance < 0 ? this.scrollTo(1):this.scrollTo(0);
    } else
    {
      distance < 0 ? this.scrollTo(0):this.scrollTo(1);
    }
    this.startTimer();
  },
  check()
  {
    this.index = parseInt(-this.left.toFixed(2) / this.width);
    if (this.left >= 0 || this.left <= -(this.dItems.length - 1) * this.width)
    {
      this.index = this.index === 0 ? this.dItems.length - 2 : 1;
      this.left = -this.index * this.width;
    }
  },
  scrollTo(direction)
  {
    this.curIndex = this.index;
    this.index += direction;
    let end = -this.index * this.width;
    let time = Math.abs(this.left - end) / this.width * 300;
    this.transTime = time;
    this.scrolling = true;
    this.left = end;
    setTimeout(() =>
    {
      this.scrolling = false;
      // index为length-1 表示到了后面的第一张 那么就要回到真正的第一张
      // index为0        表示到了前面的最后一张 那么就要回到真正的最后一张
      if (this.index === this.dItems.length - 1 || this.index === 0)
      {
        this.index = this.index === 0 ? this.dItems.length - 2 : 1;
        this.transTime = 0;
        this.left = -this.index * this.width;
      }
      this.curIndex = this.index;
    },time)
  },
  stopTimer()
  {
    clearInterval(this.timer);
  },
  startTimer()
  {
    this.timer = setInterval(() =>
    {
      this.scrollTo(1)
    },3000)
  },
  iconClass(index){
    return {active:this.curIndex-1 === index}
  }
};
export default {
  methods,
  name: "Swiper",
  props: {
    pItems: {
      type: Array,
      default()
      {
        return []
      },
    },
    width: Number,
    height: Number,
  },
  data()
  {
    return {
      index: 1,
      left: 0,
      transTime: 300,
      dItems: [],
      scrolling: false,
      ratio: 0.25,
      curIndex:1
    }
  },
  computed: {
    swiperStyle()
    {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    },
    wrapperStyle()
    {
      return {
        width: (this.dItems.length) * this.width + 'px',
        height: this.height + 'px',
        left: this.left + 'px',
        transition: `left ease-in-out ${ this.transTime }ms`
      }
    },
  },
  mounted()
  {
    let temp = this.pItems;
    this.dItems = [temp[temp.length - 1],...temp,temp[0]];
    this.left = -this.width;
    this.startTimer();
  }
}
</script>

<style scoped>
.swiper {
  position: relative;
  overflow: hidden;
}

.wrapper {
  display: flex;
  position: absolute;
}

.swiper img {
  width: 100%;
  height: 100%;
}
.indicator{
  position: absolute;
  display: flex;
  left: 5%;
  bottom: 5%;
}
.indicator-icon{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(255,255,255,.3);
  border: 2px solid transparent;
  background-clip: content-box;
}
.indicator-icon.active{
  background-color: rgba(255,255,255,.8);
  border: 2px solid rgba(255,255,255,.3);
}
</style>