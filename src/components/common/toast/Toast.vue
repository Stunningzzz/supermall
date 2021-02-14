<template>
  <div class="toast" v-show="message">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
    };
  },
  methods: {
    show(message = "默认内容", duration = 1500) {
      console.log('调用toast的show函数');
      this.message = message;
      setTimeout(() => {
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  background-color: #ededed;
  color: black;
  position: absolute;
  z-index: 999;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 22px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>