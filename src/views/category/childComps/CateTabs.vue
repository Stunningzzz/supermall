<template>
  <scroll ref="scroll" >
    <div
      class="tab-item"
      :class="{ active: index === tabIndex }"
      v-for="(item, index) in tabs"
      :key="item.maitKey"
      @click="tabClick(index)"
    >
      {{ item.title }}
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  name: "CateTabs",
  props: {
    tabs: Array,
    // 需要在子元素和父元素中各保存一份curIndex 没必要 直接在父元素中定义和修改就行了 
    tabIndex:0
  },
  methods: {
    tabClick(index) {
      this.$emit("tabClick", index);
    },
  },
  updated() {
    // 当tabs更新的时候话触发updated 但是在updated里面不一定都渲染完成了 所以要确保在全部渲染完成后再调用refresh
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
  },
  activated(){
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.tab-item {
  /* border-left: 3px solid transparent; */
  line-height: 45.5px;
  text-align: center;
}
.tab-item.active{
  /* border-left-color: #FF5777; */
  border-left: 3px solid #FF5777;
  color: #FF5777;
  font-weight: bold;
  background-color: #fff;
}
</style>