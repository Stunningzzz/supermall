<template>
  <div class="recommends">
    <a v-for="item in recommends.list" :href="item.link" class="recommends-item">
      <img :src="item.image">
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommends:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .recommends{
    display: flex;
    justify-content: space-evenly;
    margin-top:13px;
    border-bottom: #EDEDED 10px solid;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .recommends-item > img{
    width: 70px;
    height: 73px;
    margin-bottom: 3px;
  }
</style>