<template>
  <h2>
      {{item}}
  </h2>
</template>

<script>
export default {
  name:'CateTop',
  props:{
    item:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.slot{
  font-size: 50px;
}
</style>