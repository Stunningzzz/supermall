<template>
  <div class="good-list">
    <list-item v-for="item in goods[type].list" :item="item">
    </list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Object,
      default()
      {
        return {}
      }
    },
    type:{
      type:String,
    }
  },
  components: {
    ListItem
  },
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}

.good-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>