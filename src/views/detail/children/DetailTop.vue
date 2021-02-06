<template>
  <top-nav-bar class="detail-top">
    <div slot="left" class="top-left">
      <span class="iconfont icon-fanhui" @click="goBack"></span>
    </div>
    <div slot="center" class="top-center">
      <span
        v-for="(title, index) in titles"
        :class="{ active: curIndex === index }"
        :key="title"
        @click="tabClick(index)"
      >
        {{ title }}
      </span>
    </div>
    <div slot="right" class="top-right">
      <span class="iconfont icon-gengduo"></span>
    </div>
  </top-nav-bar>
</template>

<script>
import TopNavBar from "components/common/topnavbar/TopNavBar";

export default {
  name: "DetailTop",
  components: {
    TopNavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  props:{
    curIndex: 0,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    tabClick(index) {
      this.$emit("jumpTo", index);
    },
  }
};
</script>

<style scoped>
.detail-top {
  background-color: var(--color-background);
  height: 44px;
}
.top-center {
  text-align: center;
  display: flex;
  font-size: 15px;
}
.iconfont {
  font-size: 24px;
}
.top-center span {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
</style>