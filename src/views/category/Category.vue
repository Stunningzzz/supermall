<template>
  <div id="category">
    <cate-top />
    <div class="cate-tab-content">
      <cate-tabs
        class="cate-tabs"
        :tabs="tabs"
        :tabIndex="tabIndex"
        @tabClick="tabClick"
      />
      <tab-control
        class="placeHolder"
        :titles="['综合', '新款', '销量']"
        v-show="isShowPH"
        ref="tabControl1"
        @tabClick="contentClick"
      />
      <scroll
        class="cate-content"
        ref="scroll"
        @scroll="scroll"
        @refresh="refresh"
      >
        <cate-content-list :content="curContent" />
        <tab-control
          :titles="['综合', '新款', '销量']"
          ref="tabControl2"
          @tabClick="contentClick"
        />
        <good-list :goods="goods" />
      </scroll>
    </div>
  </div>
</template>

<script>
import CateTop from "./childComps/CateTop";
import CateTabs from "./childComps/CateTabs";
import CateContentList from "./childComps/CateContentList";
import Scroll from "components/common/scroll/Scroll.vue";
import GoodList from "components/content/goods/GoodList";
import ListItem from "components/content/goods/ListItem";
import TabControl from "components/content/TabControl";

import data from "./data.js";
import methods from "./methods.js";

import { getCateTabs } from "network/category";

import { debounce } from "common/utils";

export default {
  name: "Category",
  components: {
    CateTop,
    CateTabs,
    CateContentList,
    Scroll,
    GoodList,
    ListItem,
    TabControl,
  },
  data,
  methods,
  computed: {
    goods() {
      let { detail, tabIndex, detailType } = this;
      if (detail.length === 0) {
        return [];
      }
      return detail[tabIndex][detailType];
    },
    curContent() {
      return this.content[this.tabIndex];
    },
  },
  created() {
    getCateTabs().then((data) => {
      this.tabs = data.data.category.list;
      this.content = Array(this.tabs.length).fill(null);
      this.detail = Array.from(Array(this.tabs.length), () => {
        return {
          pop: [],
          new: [],
          sell: [],
        };
      });
      // 直接写成 .fill会让所有下标共享一个对象!
      // this.detail = Array(this.tabs.length).fill({
      //   pop: [],
      //   new: [],
      //   sell: [],
      // });
      this.getContent();
    });
  },
  mounted() {
    let {scroll} = this.$refs;
    let refresh = debounce(50, scroll.refresh);
    // 监听refresh是为了获取offsetTop
    scroll.onRefresh();
    this.imgLoadHandler = () => {
      refresh("category");
    };
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$bus.$on("itemImgLoad", this.imgLoadHandler);
  },
  deactivated() {
    this.$bus.$off("itemImgLoad", this.imgLoadHandler);
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
  background-color: var(--background-color);
}
.cate-tab-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  overflow: hidden;
}
.cate-tabs {
  background-color: #f6f6f6;
  flex: 3;
  width: 0;
  /* 不需要设置就能禁用鼠标滚轮 因为在最外面套了一层 cate-tab-content 它是固定高度的 
      而wrapper并没有从cate-tab-content中溢出 */
  /* overflow: hidden; */
}
.cate-content {
  flex: 7;
  width: 0;
}
.placeHolder {
  position: fixed;
  z-index: 1;
  top: 44px;
  left: 30%;
  right: 0;
}
</style>