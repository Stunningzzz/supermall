<template>
  <h2>
    {{aaa}}
  </h2>
</template>

<script>
import Demo from './Demo'

export default {
  name:'CateTop',
  components:{
    Demo
  },
  created(){
    this.aaa = "abc";
  }
}
</script>

<style scoped>
  
</style>