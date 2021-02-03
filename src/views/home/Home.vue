<template>
  <div id="home">
    <home-top/>
    <tab-control class="placeHolder"
                 v-show="showPlaceHolder"
                 :titles="['流行','新款','精选']" :disabled="scrolling"
                 ref="tabControl1"
                 @tabClick="tabClick"/>
    <scroll class="scroll"
            ref="scroll"
            @scroll="scroll" @scrollEnd="scrollEnd" @pullingUp="pullingUp">
      <home-swiper :swiper-items="swiperItems"
                   @SwiperHasLoad="SwiperHasLoad"/>
      <home-reco :recommends="recommends"/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']" :disabled="scrolling"
                   ref="tabControl2"
                   @tabClick="tabClick"/>
      <good-list :goods="goods" :type="curType"/>
    </scroll>
    <back-top v-show="showBack"
              @click.native="backTop"/>
  </div>
</template>

<script>
import HomeTop from "./children/HomeTop";
import Scroll from "components/common/scroll/Scroll";
import HomeSwiper from "./children/HomeSwiper";
import HomeReco from "./children/HomeReco";
import TabControl from "components/content/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backtop/BackTop";

import {debounce} from "common/utils";

import {swiperItems,recommends,goods,pushItems} from "./data";

export default {
  name: "Home",
  components: {
    HomeTop,
    Scroll,
    HomeSwiper,
    HomeReco,
    TabControl,
    GoodList,
    BackTop
  },
  data()
  {
    return {
      swiperItems,recommends,goods,
      curType: 'pop',
      position: {
        pop: {},
        new: {},
        deli: {}
      },
      offsetTop: 0,
      showPlaceHolder: false,
      scrolling: false
    }
  },
  computed: {
    showBack()
    {
      return this.position[this.curType].y < -1000;
    },
  },
  methods: {
    tabClick(index)
    {
      // 没有滚完不能切换
      if (this.scrolling) return
      switch (index)
      {
        case 0:
          this.curType = 'pop';
          break;
        case 1:
          this.curType = 'new';
          break;
        case 2:
          this.curType = 'deli';
          break;
      }
      this.showPlaceHolder ? this.$refs.tabControl2.currentIndex = index :
          this.$refs.tabControl1.currentIndex = index;
      // 要让他算完高度后再滑动 如果高度不足就滑动的话会触发下拉加载更多
      this.$refs.scroll.scrollTo(this.position[this.curType],0);
    },
    SwiperHasLoad()
    {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    scroll(position)
    {
      this.scrolling = true;
      this.showPlaceHolder = -position.y >= this.offsetTop;
      if (this.showPlaceHolder)
      {
        for (const positionKey in this.position)
        {
          if (positionKey === this.curType)
          {
            this.position[positionKey] = position;
          } else
          {
            this.position[positionKey] = {
              ...this.position[positionKey],
              y:Math.min(-this.offsetTop,this.position[positionKey].y)
            }
          }
        }
      }else
      {
        for (const positionKey in this.position)
        {
          this.position[positionKey] = position;
        }
      }
    },
    scrollEnd()
    {
      this.scrolling = false;
    },
    pullingUp()
    {
      console.log('上拉加载更多');
      for (let i = 0; i < 10; i++)
      {
        this.goods[this.curType].push(...pushItems);
      }
      this.$refs.scroll.finishPullUp();
    },
    backTop()
    {
      this.$refs.scroll.scrollTo({x: 0,y: 0},500);
    },

  },
  mounted()
  {
    let refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('itemImgLoad',() =>
    {
      refresh();
    })
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
}

.placeHolder {
  position: fixed;
  top: 44px;
  z-index: 10;
  left: 0;
  right: 0;
}

.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
