<template>
  <div class="good-list">
    <list-item v-for="(item,index) in goods" :item="item" :key="index"></list-item>
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
  created(){
    console.log('GoodList Created');
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