<template>
  <div class="content-list">
    <a
      class="list-item"
      v-for="item in content"
      :key="item.image"
      :href="item.link"
    >
      <img class="item-img" :src="item.image" @load="itemImgLoad"/>
      <div>
        {{ item.title }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CateContentList",
  props: {
    content: Array,
  },
  methods:{
    itemImgLoad(){
      this.$bus.$emit('itemImgLoad');
    }
  }
};
</script>

<style scoped>
.content-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.list-item {
  padding: 10px 3px;
  text-align: center;
}
.item-img {
  margin-bottom: 5px;
  width: 65px;
}
</style>