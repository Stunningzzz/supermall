<template>
  <div class="profile-bottom">
    <div class="item" v-for="item in items">
      <span :class="item.iconClass"></span>
      <span>
        {{ item.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBottom",
  data() {
    return {
      items: [
        { iconClass: "iconfont icon-xiaoxi", text: "我的消息" },
        { iconClass: "iconfont icon-shangcheng", text: "积分商城" },
        { iconClass: "iconfont icon-tubiao-4-copy-copy", text: "开通会员" },
        { iconClass: "iconfont icon-guanyu", text: "关于" },
        { iconClass: "iconfont icon-zhuxiao", text: "注销" },
      ],
    };
  },
};
</script>

<style scoped>
.profile-bottom{
  height: 272px;
  overflow: auto;
}
.item {
  line-height: 45px;
  font-size: 16px;
  padding: 12px 0 0 20px;
  border-bottom: 1px solid rgba(63, 60, 60, 0.1);
}
.iconfont {
  font-size: 25px;
  margin-right: 5px;
}
.item:is(:nth-child(1), :nth-child(2), :nth-child(3)) {
  color: var(--color-high-text);
}

</style>