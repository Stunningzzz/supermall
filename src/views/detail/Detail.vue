<template>
  <div id="detail">
    <detail-top @jumpTo="jumpTo" :curIndex="curIndex" :titles="titles"/>
    <scroll
      class="detail-scroll"
      ref="scroll"
      @refresh="refresh"
      @scroll="scroll"
    >
      <detail-swiper :top-images="topImages" ref="goods" />
      <detail-item-info :itemInfo="itemInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-item-detail :itemDetail="itemDetail" @DetailImgLoad="DetailImgLoad"/>
      <detail-params :itemParams="itemParams" ref="params" />
      <detail-comments :comments="comments" ref="comments" />
      <detail-recommends :recommends="recommends" ref="recommends" />
    </scroll>
      <back-top @click.native="backTop" v-show="isShowBT"/>
    <detail-bottom @addCart="addCart"/>
  </div>
</template>

<script>
import DetailTop from "./childComps/DetailTop";
import DetailSwiper from "./childComps/DetailSwiper";
import Scroll from "components/common/scroll/Scroll";
import DetailItemInfo from "./childComps/DetailItemInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailItemDetail from "./childComps/DetailItemDetail";
import DetailParams from "./childComps/DetailParams";
import DetailComments from "./childComps/DetailComments";
import DetailRecommends from "./childComps/DetailRecommends";
import BackTop from 'components/content/backtop/BackTop'
import DetailBottom from "./childComps/DetailBottom";

import {backTopMixin} from 'common/mixin'

import data from './data.js'
import methods from './methods'


import { debounce } from "common/utils";

import {
  DetailData,
  ItemInfo,
  ShopInfo,
  ItemParams,
  DetailRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailTop,
    DetailSwiper,
    DetailBottom,
    DetailItemInfo,
    DetailShopInfo,
    DetailItemDetail,
    DetailComments,
    DetailParams,
    DetailRecommends,
    BackTop,
    Scroll,
  },
  mixins:[backTopMixin],
  data,
  methods,
  created() {
    DetailData(this.$route.params.iid).then((response) => {
      let {
        columns,
        itemInfo,
        shopInfo,
        detailInfo,
        itemParams,
        rate,
      } = response.result;
      this.topImages = itemInfo.topImages;
      this.itemInfo = new ItemInfo(columns, itemInfo, shopInfo);
      this.shopInfo = new ShopInfo(shopInfo);
      this.itemDetail = detailInfo.detailImage;
      this.itemParams = new ItemParams(itemParams);
      rate.list && (this.comments = rate);
    });
    DetailRecommend().then((response) => {
      this.recommends = response.data.list;
      this.recommends.forEach( v => {
        v.img = v.image;
        v.coll = v.cfav;
        return v;
      });
    });
  },
  mounted() {
    let scroll = this.$refs.scroll;
    scroll.onRefresh();
    let refresh = debounce(50, scroll.refresh);
    this.itemImgLoad = () => {
      refresh('Detail');
    };
    this.$bus.$on("itemImgLoad",this.itemImgLoad);
  },
  destroyed() {
    this.$bus.$off("itemImgLoad",this.itemImgLoad);
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  width: 100vw;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px; 
  left: 0;
  right: 0;
  z-index: 1;
}
</style>