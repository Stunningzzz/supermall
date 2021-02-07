<template>
  <div id="detail">
    <detail-top @jumpTo="jumpTo" :curIndex="curIndex" />
    <scroll
      class="detail-scroll"
      ref="scroll"
      @refresh="refresh"
      @scroll="scroll"
    >
      <detail-swiper :top-images="topImages" ref="goods" />
      <detail-item-info :itemInfo="itemInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-item-detail :itemDetail="itemDetail" />
      <detail-params :itemParams="itemParams" ref="params" />
      <detail-comments :comments="comments" ref="comments" />
      <detail-recommends :recommends="recommends" ref="recommends" />
    </scroll>
    <detail-bottom />
  </div>
</template>

<script>
import DetailTop from "./children/DetailTop";
import DetailSwiper from "./children/DetailSwiper";
import Scroll from "components/common/scroll/Scroll";
import DetailItemInfo from "./children/DetailItemInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailItemDetail from "./children/DetailItemDetail";
import DetailParams from "./children/DetailParams";
import DetailComments from "./children/DetailComments";
import DetailRecommends from "./children/DetailRecommends";
import DetailBottom from "./children/DetailBottom";

import data from './data.js'


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
    Scroll,
  },
  data,
  methods: {
    jumpTo(index) {
      let title;
      switch (index) {
        case 0:
          title = "goods";
          break;
        case 1:
          title = "params";
          break;
        case 2:
          title = "comments";
          break;
        case 3:
          title = "recommends";
          break;
      }
      this.$refs.scroll.scrollTo(this.position[title], 0);
    },
    refresh() {
      for (let key in this.position) {
        this.position[key] = { x: 0, y: -this.$refs[key].$el.offsetTop };
      }
    },
    scroll(position) {
      this.cur = position;
      let keys = Object.keys(this.position);
      let y = position.y.toFixed(2);
      for (let i = keys.length - 1; i >= 0; i--) {
        const value = this.position[keys[i]];
        if (y <= value.y) {
          this.curIndex = i;
          break;
        }
      }
    },
  },
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
      this.comments = rate;
    });
    DetailRecommend().then((response) => {
      this.recommends = response.data.list;
      this.recommends = this.recommends.map((v) => {
        v.img = v.image;
        v.coll = v.cfav;
        return v;
      });
    });
  },
  mounted() {
    let scroll = this.$refs.scroll;
    scroll.onRefresh();
    scroll.onScroll();
    let refresh = debounce(50, scroll.refresh);
    this.itemImgLoad = () => {
      refresh();
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