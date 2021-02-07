<template>
  <cate-top/>
</template>

<script>
import {MultiData} from 'network/home'
import CateTop from './CateTop'


export default {
  name: "Categories",
  components: {
    CateTop
  },
  data(){
    return {
      item:null,
      src:{}         
    }
  },
  mounted(){
    console.log(this);
  }
  
}
</script>

<style scoped>
#aaa{
  width: 300px;
  height: 300px;
  background-color: #bfa;
}
</style>