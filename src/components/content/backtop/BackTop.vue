<template>
  <div class="backtop">
    <img src="~assets/img/backtop.svg">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
.backtop {
  position: fixed;
  z-index: 33;
  bottom: 10%;
  right: 3%;

}

.backtop > img {
  background-color: var(--color-background);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 8px;
}
</style>