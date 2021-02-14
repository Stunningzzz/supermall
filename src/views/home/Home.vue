<template>
  <div id="home">
    <home-top />
    <tab-control
      class="placeHolder"
      v-show="showPlaceHolder"
      :titles="['流行', '新款', '精选']"
      ref="tabControl1"
      @tabClick="tabClick"
    />
    <scroll
      class="scroll"
      ref="scroll"
      @scroll="scroll"
      @pullingUp="pullingUp"
    >
      <home-swiper :banner="banner" @SwiperHasLoad="SwiperHasLoad" />
      <home-reco :recommends="recommend" />
      <home-weekly />
      <tab-control
        :titles="['流行', '新款', '精选']"
        ref="tabControl2"
        @tabClick="tabClick"
      />
      <good-list :goods="curGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBT" />
  </div>
</template>

<script>
import HomeTop from "./childComps/HomeTop";
import Scroll from "components/common/scroll/Scroll";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeReco from "./childComps/HomeReco";
import HomeWeekly from "./childComps/HomeWeekly";
import TabControl from "components/content/TabControl";
import GoodList from "components/content/goods/GoodList";
import { backTopMixin } from "common/mixin";

import data from "./data.js";
import methods from "./methods.js";

import { debounce } from "common/utils";

import { MultiData } from "network/home";

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
  },
  data,
  methods,
  mixins: [backTopMixin],
  computed: {
    // 和老师的不同 这里的goodList不需要管type 它只负责接收goods参数 然后遍历goods拿出每个下标的值交给ListItem
    // 而type由Home组件管 每次监听到tabControl的点击事件就在回调里面修改this.curType
    // 然后因为这里的计算值用到了curType 所以会调用curGoods函数获取最新的数据交给goodList
    curGoods() {
      // 对于传给ListItem的参数item ListItem要求图片为item.img为商品的图片路径
      // item.price为商品价格 item.coll为商品的收藏 所以在传给goodList前先处理一下
      this.goods[this.curType].list.forEach((v) => {
        v.img = v.show.img;
        v.coll = v.cfav;
      });
      return this.goods[this.curType].list;
    },
  },
  created() {
    // 请求轮播图和推荐数据
    MultiData().then((response) => {
      this.banner = response.data.banner;
      this.recommend = response.data.recommend;
    });
    // 请求每个分类的前三十条数据
    for (let type in this.goods) {
      this.getGoodData(type);
    }
  },
  mounted() {
    let scroll = this.$refs.scroll;
    let refresh = debounce(50, scroll.refresh);
    this.itemImgLoad = () => {
      refresh("Home");
    };
  },
  activated() {
    let scroll = this.$refs.scroll;
    this.$bus.$on("itemImgLoad", this.itemImgLoad);
    scroll.refresh();
    scroll.scrollTo(this.position,0);
  },
  deactivated() {
    this.position = {x:0,y:this.$refs.scroll.scroll.y}
    this.$bus.$off("itemImgLoad", this.itemImgLoad);
  },
};
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
  /* 让鼠标滚轮不能滚 */
  overflow: hidden;
}
</style>
