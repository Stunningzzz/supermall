<template>
  <div class="recommends">
    <a v-for="item in recommends" :href="item.href" class="recommends-item">
      <img :src="item.src">
      <span>{{ item.desc }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
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
    padding-bottom: 20px;
    border-bottom: #EDEDED 10px solid;
  }
  .recommends-item{
    text-align: center;
    font-size: 12px;
  }
  .recommends-item > img{
    width: 70px;
    height: 73px;
    margin-bottom: 5px;
    border-radius: 50%;
    background-color: #bfa;
  }
</style>