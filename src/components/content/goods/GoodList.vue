<template>
  <div class="good-list">
    <list-item v-for="item in goods[type]" :item="item">
    </list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import {goods} from "../../../views/home/data";

export default {
  name: "GoodList",
  data(){
    return {
      counter:0
    }
  },
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