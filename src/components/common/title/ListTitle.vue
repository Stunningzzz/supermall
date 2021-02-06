<template>
  <div class="outer">
    <div class="left"></div>
    <div class="text">
      {{ title }}
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "ListTitle",
  props:{
    title:String
  }
};
</script>

<style scoped>
.outer {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  text-align: center;
  margin: 0 auto;
  padding: 15px 10px;
}
.left::before,
.right::before {
  display: block;
  width: 6px;
  height: 6px;
  content: "";
  border-radius: 50%;
  margin-top: -4px;
  background-color: black;
}
.left,
.right {
  width: 30%;
  height: 50px;
  border-top: 1px solid black;
}
.right {
  transform: rotateZ(0.5turn);
}
</style>