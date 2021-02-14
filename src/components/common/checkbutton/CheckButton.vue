<template>
  <div class="wrapper" :class="{ check: isCheck }">
    <img class="check-img" src="~assets/img/check.svg" v-show="isCheck" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  padding: 1px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.wrapper.check {
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}
.check-img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>