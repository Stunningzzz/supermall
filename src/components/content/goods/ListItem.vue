<template>
  <div class="list-item">
    <a class="list-img">
      <img :src="item.src" @load="itemImgLoad">
    </a>
    <div class="item-info">
      <p class="title">{{ item.title }}</p>
      <span class="price">{{ item.price }}</span>
      <span class="iconfont icon-shoucang"></span>
      <span class="coll">{{ item.coll }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props:{
    item:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  methods:{
    itemImgLoad(){
      this.$parent.counter++;
    }
  }
}
</script>

<style scoped>
  .list-item{
    width: 48%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .list-img{
    display: block;
    width: 100%;
  }
  .list-item img{
    width: 100%;
  }
  .item-info{
    margin-top: 3px;
  }
  .title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price{
    color: var(--color-tint);
  }
  .icon-shoucang{
    margin-left: 5px;
  }
</style>