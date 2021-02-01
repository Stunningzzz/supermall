<template>
  <div class="good-list">
    <list-item v-for="item in good" :item="item">
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
    good: {
      type: Array,
      default()
      {
        return []
      }
    },
  },
  components: {
    ListItem
  },
  watch:{
    counter(value){
      if(value === this.good.length)
      {
        this.$emit('ListLoad');
      }
    }
  }
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