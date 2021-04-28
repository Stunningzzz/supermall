<template>
  <div class="good-list">
    <list-item v-for="item in goods" :item="item"></list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    ListItem,
  },
};
</script>

<style scoped>
.good-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>