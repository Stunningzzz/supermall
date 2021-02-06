<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
#TabBar{
  height: 49px;
  display: flex;
  background-color: #F6F6F6;
  text-align: center;
  box-shadow: 0 -3px 5px rgba(100,100,100,.1);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
