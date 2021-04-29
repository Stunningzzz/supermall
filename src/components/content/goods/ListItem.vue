<template>
  <div class="list-item">
    <a class="list-img" @click="itemClick">
      <img v-lazy="item.img" @load="itemImgLoad">
    </a>
    <div class="item-info">
      <p class="title">{{ item.title }}</p>
      <span class="price">{{ item.price | getStandPrice }}</span>
      <span class="iconfont icon-shoucang"></span>
      <span class="coll">{{ item.coll }}</span>
    </div>
  </div>
</template>
aaa
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
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.item.iid);
    }
  },
  filters:{
    getStandPrice(item){
      return /^\d/.test(item) ? '¥' + item : item;
    }
    // https://mylyq.github.io/supermall/dist/#/home
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