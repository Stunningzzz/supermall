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
            @scroll="scroll" @scrollEnd="scrollEnd" @pullingUp="pullingUp" @refresh="refresh">
      <home-swiper :banner="banner"
                   @SwiperHasLoad="SwiperHasLoad"/>
      <home-reco :recommends="recommend"/>
      <home-weekly />
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']" :disabled="scrolling"
                   ref="tabControl2"
                   @tabClick="tabClick"/>
      <good-list  :goods="curGoods" :type="curType"/>
    </scroll>
    <back-top v-show="showBack"
              @click.native="backTop"/>
  </div>
</template>

<script>
import methods from './methods.js'
import data from './data.js'

import HomeTop from "./children/HomeTop";
import Scroll from "components/common/scroll/Scroll";
import HomeSwiper from "./children/HomeSwiper";
import HomeReco from "./children/HomeReco";
import HomeWeekly from "./children/HomeWeekly";
import TabControl from "components/content/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backtop/BackTop";
import {debounce} from "common/utils";

import {MultiData} from "network/home";


export default {
  name: "Home",
  components: {
    HomeWeekly,
    HomeTop,
    Scroll,
    HomeSwiper,
    HomeReco,
    TabControl,
    GoodList,
    BackTop
  },
  data,
  computed: {
    showBack()
    {
      return this.position[this.curType].y < -1000;
    },
    curGoods(){
      this.goods[this.curType].list.map( v => {
        v.img = v.show.img;
        v.coll = v.cfav;
        return v;
      })
      return this.goods[this.curType].list;
    }
  },
  methods,
  created()
  {
    MultiData().then(response =>
    {
      this.banner = response.data.banner;
      this.recommend = response.data.recommend;
    });
    for (let type in this.goods)
    {
      this.getGoodData(type);
    }
  },
  mounted()
  {
    let scroll = this.$refs.scroll;
    scroll.oncePullingUp();
    let refresh = debounce(50,scroll.refresh,scroll.oncePullingUp,scroll.enable);
    this.$refs.scroll.disable();
    this.itemImgLoad = () =>
    {
      refresh();
    }
  },
  activated() {
    let scroll = this.$refs.scroll;
    this.$bus.$on('itemImgLoad',this.itemImgLoad);
    scroll.onScroll();
    scroll.scrollTo(this.position[this.curType],0);
  },
  deactivated(){
    this.$refs.scroll.offScroll();
    this.$bus.$off('itemImgLoad',this.itemImgLoad);
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
